import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Korak 2 (baza) još nije povezan. Aplikacija tada čuva podatke samo u pregledaču.
export function GET() {
  return NextResponse.json({ ok: false, reason: "baza-nije-povezana" }, { headers: { "Cache-Control": "no-store" } });
}

export function POST() {
  return NextResponse.json({ ok: false, reason: "baza-nije-povezana" }, { status: 501 });
}
