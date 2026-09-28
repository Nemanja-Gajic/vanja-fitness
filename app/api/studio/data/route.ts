import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Vanja Studio podaci u Upstash Redis bazi (Vercel Marketplace).
// Vercel sam doda KV_REST_API_URL i KV_REST_API_TOKEN kad povežeš bazu sa projektom.
const DB_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const DB_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
const KEY = "vanja-studio:data";
const BACKUP_DAYS = 60;
const MAX_BYTES = 4_000_000;
const noStore = { "Cache-Control": "no-store" };

async function redis(cmd: (string | number)[]): Promise<unknown> {
  const r = await fetch(DB_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${DB_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  const j = (await r.json().catch(() => ({}))) as { result?: unknown; error?: string };
  if (!r.ok || j.error) throw new Error(j.error || `redis ${r.status}`);
  return j.result;
}

export async function GET() {
  if (!DB_URL || !DB_TOKEN) {
    return NextResponse.json({ ok: false, reason: "baza-nije-povezana" }, { headers: noStore });
  }
  try {
    const v = await redis(["GET", KEY]);
    if (typeof v !== "string" || !v) return NextResponse.json({ ok: true, exists: false }, { headers: noStore });
    return new NextResponse(`{"ok":true,"exists":true,"data":${v}}`, {
      headers: { ...noStore, "Content-Type": "application/json; charset=utf-8" },
    });
  } catch {
    return NextResponse.json({ ok: false, reason: "greska-baze" }, { status: 502, headers: noStore });
  }
}

export async function POST(req: Request) {
  if (!DB_URL || !DB_TOKEN) {
    return NextResponse.json({ ok: false, reason: "baza-nije-povezana" }, { status: 501 });
  }
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
    const cur = await redis(["GET", KEY]);
    if (typeof cur === "string" && cur) {
      let curAt = 0;
      try {
        curAt = Number(JSON.parse(cur).savedAt) || 0;
      } catch {}
      // neko je u međuvremenu sačuvao noviju verziju (drugi uređaj): ne prepisuj
      if (curAt > baseAt) return NextResponse.json({ ok: false, conflict: true }, { status: 409 });
      const day = new Date().toISOString().slice(0, 10);
      await redis(["SET", `vanja-studio:kopija:${day}`, cur, "NX", "EX", BACKUP_DAYS * 86400]);
    }
    await redis(["SET", KEY, JSON.stringify(body)]);
    return NextResponse.json({ ok: true }, { headers: noStore });
  } catch {
    return NextResponse.json({ ok: false, reason: "greska-baze" }, { status: 502 });
  }
}
