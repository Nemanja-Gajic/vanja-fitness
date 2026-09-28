import { NextResponse } from "next/server";
import { DATA_KEY, dbReady, getTrainers, redis } from "../../../../lib/studio-db";
import { sessionFrom } from "../../../../lib/studio-session";

export const dynamic = "force-dynamic";

// Trener (ili admin) štiklira dolazak jedne članice. Trener samo u svojim terminima.
export async function POST(req: Request) {
  const me = await sessionFrom(req);
  if (!me) return NextResponse.json({ ok: false }, { status: 401 });
  if (!dbReady()) return NextResponse.json({ ok: false }, { status: 501 });
  const b = (await req.json().catch(() => null)) as { sessionId?: string; memberId?: string; present?: boolean } | null;
  if (!b || typeof b.sessionId !== "string" || typeof b.memberId !== "string") return NextResponse.json({ ok: false }, { status: 400 });
  if (me.role === "trener" && !(await getTrainers()).some((t) => t.id === me.uid && t.active)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  for (let attempt = 0; attempt < 3; attempt++) {
    const v = await redis(["GET", DATA_KEY]);
    if (typeof v !== "string" || !v) return NextResponse.json({ ok: false }, { status: 404 });
    const d = JSON.parse(v) as { sessions?: { id: string; trainerId?: string; memberIds?: string[]; attended?: string[] }[]; savedAt?: number };
    const s = (d.sessions || []).find((x) => x.id === b.sessionId);
    if (!s) return NextResponse.json({ ok: false }, { status: 404 });
    if (me.role === "trener" && s.trainerId !== me.uid) return NextResponse.json({ ok: false }, { status: 403 });
    if (!(s.memberIds || []).includes(b.memberId)) return NextResponse.json({ ok: false }, { status: 400 });
    const att = new Set(s.attended || []);
    if (b.present) att.add(b.memberId);
    else att.delete(b.memberId);
    s.attended = Array.from(att);
    const prevAt = d.savedAt || 0;
    d.savedAt = Date.now();
    // upiši samo ako se podaci u međuvremenu nisu promenili (Lua: uporedi i zameni)
    const script =
      "local c=redis.call('GET',KEYS[1]) if c and (cjson.decode(c).savedAt or 0)~=tonumber(ARGV[1]) then return 0 end redis.call('SET',KEYS[1],ARGV[2]) return 1";
    const ok = await redis(["EVAL", script, 1, DATA_KEY, String(prevAt), JSON.stringify(d)]);
    if (ok === 1) return NextResponse.json({ ok: true, attended: s.attended, savedAt: d.savedAt });
  }
  return NextResponse.json({ ok: false, reason: "zauzeto" }, { status: 409 });
}
