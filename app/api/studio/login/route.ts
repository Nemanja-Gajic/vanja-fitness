import { NextResponse } from "next/server";
import { STUDIO_COOKIE, STUDIO_MAX_AGE, createSessionToken, safeEqual } from "../../../../lib/studio-auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const lozinka = String(form?.get("lozinka") ?? "");
  const prava = process.env.STUDIO_PASSWORD || "";
  const secretOk = (process.env.STUDIO_SECRET || "").length >= 16;
  const base = new URL(req.url);

  if (!prava || !secretOk || !safeEqual(lozinka, prava)) {
    await new Promise((r) => setTimeout(r, 1000)); // uspori pogađanje
    return NextResponse.redirect(new URL("/studio/prijava?greska=1", base), 303);
  }

  const res = NextResponse.redirect(new URL("/studio", base), 303);
  res.cookies.set(STUDIO_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: base.protocol === "https:",
    sameSite: "lax",
    path: "/",
    maxAge: STUDIO_MAX_AGE,
  });
  return res;
}
