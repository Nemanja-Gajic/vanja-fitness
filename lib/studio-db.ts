// Upstash Redis preko REST-a (Vercel Marketplace dodaje KV_REST_API_URL i KV_REST_API_TOKEN).
const DB_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const DB_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

export const DATA_KEY = "vanja-studio:data";
export const USERS_KEY = "vanja-studio:users";
export const dbReady = () => !!(DB_URL && DB_TOKEN);

export async function redis(cmd: (string | number)[]): Promise<unknown> {
  const r = await fetch(DB_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${DB_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  const j = (await r.json().catch(() => ({}))) as { result?: unknown; error?: string };
  if (!r.ok || j.error) throw new Error(j.error || `redis ${r.status}`);
  return j.result;
}

export async function getJSON<T>(key: string): Promise<T | null> {
  const v = await redis(["GET", key]);
  if (typeof v !== "string" || !v) return null;
  return JSON.parse(v) as T;
}

export type Trainer = { id: string; username: string; name: string; salt: string; hash: string; active: boolean; createdAt: string; useAdmin?: boolean };

export async function getTrainers(): Promise<Trainer[]> {
  return (await getJSON<Trainer[]>(USERS_KEY)) || [];
}
export async function saveTrainers(list: Trainer[]) {
  await redis(["SET", USERS_KEY, JSON.stringify(list)]);
}
