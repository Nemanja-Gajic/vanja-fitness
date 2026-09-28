import { NextResponse } from "next/server";
import { DATA_KEY, dbReady, getTrainers, redis } from "../../../../lib/studio-db";
import { sessionFrom } from "../../../../lib/studio-session";

export const dynamic = "force-dynamic";

const BACKUP_DAYS = 60;
const MAX_BYTES = 4_000_000;
const noStore = { "Cache-Control": "no-store" };

type Sess = { id: string; trainerId?: string; memberIds?: string[] };
type Data = { members?: { id: string; name: string }[]; sessions?: Sess[]; settings?: { groups?: unknown[]; slots?: unknown }; savedAt?: number };

// Trener vidi samo svoje termine i imena članica iz njih. Bez uplata, troškova i beleški.
function forTrainer(d: Data, uid: string) {
  const sessions = (d.sessions || []).filter((s) => s.trainerId === uid);
  const ids = new Set(sessions.flatMap((s) => s.memberIds || []));
  const members = (d.members || []).filter((m) => ids.has(m.id)).map((m) => ({ id: m.id, name: m.name, status: "aktivna" }));
  const settings = { groups: d.settings?.groups || [], slots: d.settings?.slots };
  return { members, sessions, payments: [], expenses: [], settings, savedAt: d.savedAt || 0 };
}

export async function GET(req: Request) {
  const me = await sessionFrom(req);
  if (!me) return NextResponse.json({ ok: false }, { status: 401 });
  if (!dbReady()) return NextResponse.json({ ok: false, reason: "baza-nije-povezana" }, { headers: noStore });
  try {
    const v = await redis(["GET", DATA_KEY]);
    let name = "Vanja";
    if (me.role === "trener") {
      const t = (await getTrainers()).find((x) => x.id === me.uid && x.active);
      if (!t) return NextResponse.json({ ok: false }, { status: 401 });
      name = t.name;
    }
    const meOut = { id: me.uid, role: me.role, name };
    if (typeof v !== "string" || !v) return NextResponse.json({ ok: true, exists: false, me: meOut }, { headers: noStore });
    if (me.role === "admin") {
      return new NextResponse(`{"ok":true,"exists":true,"me":${JSON.stringify(meOut)},"data":${v}}`, {
        headers: { ...noStore, "Content-Type": "application/json; charset=utf-8" },
      });
    }
    return NextResponse.json({ ok: true, exists: true, me: meOut, data: forTrainer(JSON.parse(v), me.uid) }, { headers: noStore });
  } catch {
    return NextResponse.json({ ok: false, reason: "greska-baze" }, { status: 502, headers: noStore });
  }
}

export async function POST(req: Request) {
  const me = await sessionFrom(req);
  if (!me || me.role !== "admin") return NextResponse.json({ ok: false }, { status: 403 });
  if (!dbReady()) return NextResponse.json({ ok: false, reason: "baza-nije-povezana" }, { status: 501 });
  const text = await req.text();
  if (text.length > MAX_BYTES) return NextResponse.json({ ok: false, reason: "prevelik" }, { status: 413 });

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!body || typeof body !== "object" || !Array.isArray(body.members)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const baseAt = Number(body.baseAt) || 0;
  delete body.baseAt;

  try {
    const cur = await redis(["GET", DATA_KEY]);
    if (typeof cur === "string" && cur) {
      let curAt = 0;
      try {
        curAt = Number(JSON.parse(cur).savedAt) || 0;
      } catch {}
      // neko je u međuvremenu sačuvao noviju verziju (drugi uređaj ili trener): ne prepisuj
      if (curAt > baseAt) return NextResponse.json({ ok: false, conflict: true }, { status: 409 });
      const day = new Date().toISOString().slice(0, 10);
      await redis(["SET", `vanja-studio:kopija:${day}`, cur, "NX", "EX", BACKUP_DAYS * 86400]);
    }
    await redis(["SET", DATA_KEY, JSON.stringify(body)]);
    return NextResponse.json({ ok: true }, { headers: noStore });
  } catch {
    return NextResponse.json({ ok: false, reason: "greska-baze" }, { status: 502 });
  }
}
