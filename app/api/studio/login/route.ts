import { NextResponse } from "next/server";
import { ADMIN_USERNAME, STUDIO_COOKIE, STUDIO_MAX_AGE, createSessionToken, safeEqual, verifyPassword } from "../../../../lib/studio-auth";
import { dbReady, getTrainers, roleOf } from "../../../../lib/studio-db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const username = String(form?.get("korisnik") ?? "").trim().toLowerCase();
  const lozinka = String(form?.get("lozinka") ?? "");
  const base = new URL(req.url);
  const secretOk = (process.env.STUDIO_SECRET || "").length >= 16;

  // greska: 1 pogrešno ime ili lozinka, 2 nalog nema svoju lozinku, 3 nalog isključen, 4 server nije podešen, 5 baza ne odgovara
  let session: { uid: string; role: "admin" | "trener" | "clanica" } | null = null;
  let greska = 1;
  if (!secretOk) {
    greska = 4;
  } else if (username === ADMIN_USERNAME) {
    const prava = process.env.STUDIO_PASSWORD || "";
    if (!prava) greska = 4;
    else if (safeEqual(lozinka, prava)) session = { uid: "admin", role: "admin" };
  } else if (username && !dbReady()) {
    greska = 4;
  } else if (username) {
    try {
      const t = (await getTrainers()).find((x) => x.username === username);
      const ok = !!t && !!t.hash && !t.useAdmin && (await verifyPassword(lozinka, t.salt, t.hash));
      if (t && ok && t.active) session = { uid: t.id, role: roleOf(t) };
      else if (t && ok && !t.active) greska = 3;
      else if (t && (t.useAdmin || !t.hash)) greska = 2; // nalog mora imati svoju lozinku
    } catch {
      greska = 5;
    }
  }

  if (!session) {
    await new Promise((r) => setTimeout(r, 1000)); // uspori pogađanje
    return NextResponse.redirect(new URL("/studio/prijava?greska=" + greska, base), 303);
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
