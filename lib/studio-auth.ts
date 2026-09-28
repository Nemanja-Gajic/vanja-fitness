// Vanja Studio: prijava jednom lozinkom. Radi i u middleware-u (Edge) i u rutama.
export const STUDIO_COOKIE = "vs_session";
export const STUDIO_MAX_AGE = 60 * 60 * 24 * 30; // 30 dana

const enc = new TextEncoder();

async function hmacHex(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

function secret(): string {
  return process.env.STUDIO_SECRET || "";
}

export async function createSessionToken(): Promise<string> {
  const exp = String(Date.now() + STUDIO_MAX_AGE * 1000);
  return exp + "." + (await hmacHex(secret(), exp));
}

export async function isValidSession(token: string | undefined): Promise<boolean> {
  const s = secret();
  if (!s || s.length < 16 || !token) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(await hmacHex(s, exp), sig);
}
