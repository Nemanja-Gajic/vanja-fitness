import { NextResponse } from "next/server";
import { ADMIN_USERNAME, STUDIO_COOKIE, STUDIO_MAX_AGE, createSessionToken, safeEqual, verifyPassword } from "../../../../lib/studio-auth";
import { dbReady, getTrainers } from "../../../../lib/studio-db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const username = String(form?.get("korisnik") ?? "").trim().toLowerCase();
  const lozinka = String(form?.get("lozinka") ?? "");
  const base = new URL(req.url);
  const secretOk = (process.env.STUDIO_SECRET || "").length >= 16;

  let session: { uid: string; role: "admin" | "trener" } | null = null;
  if (secretOk && username === ADMIN_USERNAME) {
    const prava = process.env.STUDIO_PASSWORD || "";
    if (prava && safeEqual(lozinka, prava)) session = { uid: "admin", role: "admin" };
  } else if (secretOk && username && dbReady()) {
    try {
      const t = (await getTrainers()).find((x) => x.username === username && x.active);
      if (t && (await verifyPassword(lozinka, t.salt, t.hash))) session = { uid: t.id, role: "trener" };
    } catch {}
  }

  if (!session) {
    await new Promise((r) => setTimeout(r, 1000)); // uspori pogađanje
    return NextResponse.redirect(new URL("/studio/prijava?greska=1", base), 303);
  }
  const res = NextResponse.redirect(new URL("/studio", base), 303);
  res.cookies.set(STUDIO_COOKIE, await createSessionToken(session.uid, session.role), {
    httpOnly: true,
    secure: base.protocol === "https:",
    sameSite: "lax",
    path: "/",
    maxAge: STUDIO_MAX_AGE,
  });
  return res;
}
