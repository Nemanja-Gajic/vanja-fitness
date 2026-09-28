import { NextResponse, type NextRequest } from "next/server";
import { get } from "@vercel/blob";
import { sessionFrom } from "../../../../lib/studio-session";
import { BACKUP_PREFIX, listBackups, runBackup } from "../../../../lib/studio-backup";

export const dynamic = "force-dynamic";
const noStore = { "Cache-Control": "private, no-store" };

async function authed(req: NextRequest) {
  const me = await sessionFrom(req);
  return !!me && me.role === "admin";
}

// GET: spisak online kopija, ili ?p=<putanja> za preuzimanje jedne
export async function GET(req: NextRequest) {
  if (!(await authed(req))) return NextResponse.json({ ok: false }, { status: 401 });
  const p = req.nextUrl.searchParams.get("p");
  try {
    if (!p) return NextResponse.json({ ok: true, backups: await listBackups() }, { headers: noStore });
    if (!p.startsWith(BACKUP_PREFIX) || p.includes("..")) return NextResponse.json({ ok: false }, { status: 400 });
    const r = await get(p, { access: "private" });
    if (!r || r.statusCode !== 200) return new NextResponse("Nije pronađeno", { status: 404 });
    const name = p.slice(BACKUP_PREFIX.length);
    return new NextResponse(r.stream, {
      headers: {
        ...noStore,
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="${name}"`,
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (e) {
    return NextResponse.json({ ok: false, reason: "kopije-nisu-povezane" }, { status: 502, headers: noStore });
  }
}

// POST: napravi kopiju odmah (dugme u aplikaciji)
export async function POST(req: NextRequest) {
  if (!(await authed(req))) return NextResponse.json({ ok: false }, { status: 401 });
  try {
    return NextResponse.json(await runBackup(), { headers: noStore });
  } catch (e) {
    return NextResponse.json({ ok: false, reason: "kopije-nisu-povezane" }, { status: 502, headers: noStore });
  }
}
