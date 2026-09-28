import { NextResponse } from "next/server";
import { ADMIN_USERNAME, hashPassword } from "../../../../lib/studio-auth";
import { DATA_KEY, dbReady, getJSON, getTrainers, roleOf, saveTrainers, type Trainer } from "../../../../lib/studio-db";
import { sessionFrom } from "../../../../lib/studio-session";

export const dynamic = "force-dynamic";
const noStore = { "Cache-Control": "no-store" };
const pub = (t: Trainer) => ({ id: t.id, username: t.username, name: t.name, active: t.active, needsPassword: !!t.useAdmin || !t.hash, role: roleOf(t), memberId: t.memberId || "" });

async function admin(req: Request) {
  const me = await sessionFrom(req);
  return me && me.role === "admin";
}

// Spisak trenera (samo admin)
export async function GET(req: Request) {
  if (!(await admin(req))) return NextResponse.json({ ok: false }, { status: 403 });
  if (!dbReady()) return NextResponse.json({ ok: false }, { status: 501 });
  return NextResponse.json({ ok: true, trainers: (await getTrainers()).map(pub) }, { headers: noStore });
}

// action: create | password | active | delete
export async function POST(req: Request) {
  if (!(await admin(req))) return NextResponse.json({ ok: false }, { status: 403 });
  if (!dbReady()) return NextResponse.json({ ok: false }, { status: 501 });
  const b = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!b) return NextResponse.json({ ok: false }, { status: 400 });
  const list = await getTrainers();
  const action = String(b.action || "");

  if (action === "create") {
    const username = String(b.username || "").trim().toLowerCase();
    const name = String(b.name || "").trim().slice(0, 60);
    const password = String(b.password || "");
    if (!/^[a-z0-9._-]{3,30}$/.test(username)) return NextResponse.json({ ok: false, error: "Korisničko ime: 3 do 30 slova, brojeva, tačka ili crtica." }, { status: 400 });
    if (username === ADMIN_USERNAME || list.some((t) => t.username === username)) return NextResponse.json({ ok: false, error: "To korisničko ime je zauzeto." }, { status: 400 });
    if (!name) return NextResponse.json({ ok: false, error: "Upiši ime trenera." }, { status: 400 });
    if (password.length < 8) return NextResponse.json({ ok: false, error: "Lozinka mora imati bar 8 znakova." }, { status: 400 });
    const role = b.role === "clanica" ? "clanica" : "trener";
    const memberId = role === "clanica" ? String(b.memberId || "") : "";
    if (role === "clanica") {
      const d = await getJSON<{ members?: { id: string }[] }>(DATA_KEY);
      if (!memberId || !(d?.members || []).some((m) => m.id === memberId)) return NextResponse.json({ ok: false, error: "Izaberi članicu." }, { status: 400 });
      if (list.some((x) => x.memberId === memberId)) return NextResponse.json({ ok: false, error: "Ova članica već ima nalog." }, { status: 400 });
    }
    const { salt, hash } = await hashPassword(password);
    const t: Trainer = { id: "t" + crypto.randomUUID().replace(/-/g, "").slice(0, 12), username, name, salt, hash, active: true, createdAt: new Date().toISOString(), useAdmin: false, role, memberId };
    list.push(t);
    await saveTrainers(list);
    return NextResponse.json({ ok: true, trainer: pub(t) });
  }

  const t = list.find((x) => x.id === b.id);
  if (!t) return NextResponse.json({ ok: false, error: "Trener nije pronađen." }, { status: 404 });
  if (action === "password") {
    const password = String(b.password || "");
    if (password.length < 8) return NextResponse.json({ ok: false, error: "Lozinka mora imati bar 8 znakova." }, { status: 400 });
    Object.assign(t, await hashPassword(password), { useAdmin: false });
  } else if (action === "active") {
    t.active = !!b.active;
  } else if (action === "update") {
    const name = String(b.name || "").trim().slice(0, 60);
    if (name) t.name = name;
  } else if (action === "delete") {
    list.splice(list.indexOf(t), 1);
  } else {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  await saveTrainers(list);
  return NextResponse.json({ ok: true });
}
