import { NextResponse } from "next/server";
import { STUDIO_COOKIE } from "../../../../lib/studio-auth";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  const res = NextResponse.redirect(new URL("/studio/prijava", req.url), 303);
  res.cookies.set(STUDIO_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
