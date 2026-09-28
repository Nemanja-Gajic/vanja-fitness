import { NextResponse, type NextRequest } from "next/server";
import { STUDIO_COOKIE, isValidSession } from "./lib/studio-auth";

// Štiti /studio i /api/studio. Slobodni su samo stranica za prijavu i ruta za prijavu.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/studio/prijava" || pathname === "/api/studio/login") return NextResponse.next();

  const ok = await isValidSession(req.cookies.get(STUDIO_COOKIE)?.value);
  if (ok) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/studio/prijava";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/studio", "/studio/:path*", "/api/studio/:path*"],
};
