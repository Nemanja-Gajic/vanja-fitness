import type { NextRequest } from "next/server";
import { STUDIO_COOKIE, readSession, type Session } from "./studio-auth";

export async function sessionFrom(req: NextRequest | Request): Promise<Session | null> {
  const cookie = req.headers.get("cookie") || "";
  const m = cookie.match(new RegExp(`(?:^|;\\s*)${STUDIO_COOKIE}=([^;]+)`));
  return readSession(m ? decodeURIComponent(m[1]) : undefined);
}
