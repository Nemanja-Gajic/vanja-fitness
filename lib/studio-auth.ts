// Vanja Studio: prijava sa korisničkim imenom. Radi i u middleware-u (Edge) i u rutama.
export const STUDIO_COOKIE = "vs_session";
export const STUDIO_MAX_AGE = 60 * 60 * 24 * 30; // 30 dana
export const ADMIN_USERNAME = "vanja";

export type Role = "admin" | "trener";
export type Session = { uid: string; role: Role };

const enc = new TextEncoder();
const hex = (b: ArrayBuffer) => Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");

async function hmacHex(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, enc.encode(msg)));
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

function secret(): string {
  const s = process.env.STUDIO_SECRET || "";
  return s.length >= 16 ? s : "";
}

// Token: uid.role.exp.potpis
export async function createSessionToken(uid: string, role: Role): Promise<string> {
  const payload = `${uid}.${role}.${Date.now() + STUDIO_MAX_AGE * 1000}`;
  return payload + "." + (await hmacHex(secret(), payload));
}

export async function readSession(token: string | undefined): Promise<Session | null> {
  const s = secret();
  if (!s || !token) return null;
  const parts = token.split(".");
  if (parts.length !== 4) return null;
  const [uid, role, exp, sig] = parts;
  if (!/^[a-z0-9_-]{1,40}$/.test(uid) || (role !== "admin" && role !== "trener") || !/^\d+$/.test(exp)) return null;
  if (Number(exp) < Date.now()) return null;
  if (!safeEqual(await hmacHex(s, `${uid}.${role}.${exp}`), sig)) return null;
  return { uid, role };
}

export async function isValidSession(token: string | undefined): Promise<boolean> {
  return (await readSession(token)) !== null;
}

// Lozinke trenera: PBKDF2-SHA256
export async function hashPassword(password: string, saltHex?: string): Promise<{ salt: string; hash: string }> {
  const salt = saltHex || hex(crypto.getRandomValues(new Uint8Array(16)).buffer);
  const saltBytes = new Uint8Array(salt.match(/../g)!.map((h) => parseInt(h, 16)));
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: saltBytes, iterations: 120000 }, key, 256);
  return { salt, hash: hex(bits) };
}

export async function verifyPassword(password: string, salt: string, hash: string): Promise<boolean> {
  const h = await hashPassword(password, salt);
  return safeEqual(h.hash, hash);
}
