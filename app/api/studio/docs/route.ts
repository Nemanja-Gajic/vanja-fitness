import { NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { sessionFrom } from "../../../../lib/studio-session";
import { DOCS_PREFIX, canSeeMember, getDocs, saveDocs, type Doc } from "../../../../lib/studio-docs";

export const dynamic = "force-dynamic";
const noStore = { "Cache-Control": "private, no-store" };
const MAX = 4_000_000;
const OK_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"];

// GET ?m=<memberId>: spisak dokumenata (admin ili ta članica)
export async function GET(req: Request) {
  const me = await sessionFrom(req);
  const m = new URL(req.url).searchParams.get("m") || "";
  if (!(await canSeeMember(me, m))) return NextResponse.json({ ok: false }, { status: 403 });
  return NextResponse.json({ ok: true, docs: (await getDocs(m)).map(({ pathname, ...d }) => d) }, { headers: noStore });
}

// POST multipart: m, kind, note, file (samo admin)
export async function POST(req: Request) {
  const me = await sessionFrom(req);
  if (!me || me.role !== "admin") return NextResponse.json({ ok: false }, { status: 403 });
  const form = await req.formData().catch(() => null);
  const m = String(form?.get("m") || "");
  const kind = String(form?.get("kind") || "dokument");
  const note = String(form?.get("note") || "").slice(0, 200);
  const file = form?.get("file");
  if (!m || !/^[A-Za-z0-9_-]{1,40}$/.test(m) || !(file instanceof File)) return NextResponse.json({ ok: false, error: "Nedostaje fajl." }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ ok: false, error: "Fajl je veći od 4 MB." }, { status: 413 });
  if (!OK_TYPES.includes(file.type)) return NextResponse.json({ ok: false, error: "Dozvoljene su slike (JPG, PNG) i PDF." }, { status: 400 });
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  const safeName = (file.name || "fajl").replace(/[^A-Za-z0-9._-]+/g, "-").slice(-60);
  const pathname = `${DOCS_PREFIX}${m}/${id}-${safeName}`;
  try {
    await put(pathname, file, { access: "private", addRandomSuffix: false, contentType: file.type });
    const doc: Doc = { id, kind: kind === "slika" || kind === "upitnik" ? kind : "dokument", name: file.name || safeName, pathname, contentType: file.type, size: file.size, uploadedAt: new Date().toISOString(), note };
    const docs = await getDocs(m);
    docs.unshift(doc);
    await saveDocs(m, docs);
    const { pathname: _p, ...out } = doc;
    return NextResponse.json({ ok: true, doc: out }, { headers: noStore });
  } catch {
    return NextResponse.json({ ok: false, error: "Čuvanje nije uspelo." }, { status: 502 });
  }
}

// DELETE ?m=&id= (samo admin)
export async function DELETE(req: Request) {
  const me = await sessionFrom(req);
  if (!me || me.role !== "admin") return NextResponse.json({ ok: false }, { status: 403 });
  const u = new URL(req.url);
  const m = u.searchParams.get("m") || "", id = u.searchParams.get("id") || "";
  const docs = await getDocs(m);
  const d = docs.find((x) => x.id === id);
  if (!d) return NextResponse.json({ ok: false }, { status: 404 });
  try { await del(d.pathname); } catch {}
  await saveDocs(m, docs.filter((x) => x.id !== id));
  return NextResponse.json({ ok: true }, { headers: noStore });
}
