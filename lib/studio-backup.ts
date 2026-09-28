import { put, list, del } from "@vercel/blob";

// Dnevna rezervna kopija Vanja Studio podataka u privatni Vercel Blob (odvojeno od Upstash baze).
const DB_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const DB_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
export const BACKUP_PREFIX = "vanja-studio-kopije/";
const KEEP_DAYS = 90;

async function readData(): Promise<string | null> {
  if (!DB_URL || !DB_TOKEN) throw new Error("baza-nije-povezana");
  const r = await fetch(DB_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${DB_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(["GET", "vanja-studio:data"]),
    cache: "no-store",
  });
  const j = (await r.json()) as { result?: unknown; error?: string };
  if (!r.ok || j.error) throw new Error(j.error || `redis ${r.status}`);
  return typeof j.result === "string" && j.result ? j.result : null;
}

function belgradeDate(d = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Belgrade", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

export async function runBackup(): Promise<{ ok: boolean; pathname?: string; bytes?: number; removed?: number; reason?: string }> {
  const data = await readData();
  if (!data) return { ok: false, reason: "nema-podataka" };
  const pathname = `${BACKUP_PREFIX}vanja-studio-${belgradeDate()}.json`;
  await put(pathname, data, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  // obriši kopije starije od 90 dana
  const cutoff = Date.now() - KEEP_DAYS * 86400000;
  const { blobs } = await list({ prefix: BACKUP_PREFIX, limit: 1000 });
  const old = blobs.filter((b) => new Date(b.uploadedAt).getTime() < cutoff).map((b) => b.url);
  if (old.length) await del(old);
  return { ok: true, pathname, bytes: data.length, removed: old.length };
}

export async function listBackups() {
  const { blobs } = await list({ prefix: BACKUP_PREFIX, limit: 1000 });
  return blobs
    .map((b) => ({ pathname: b.pathname, size: b.size, uploadedAt: b.uploadedAt }))
    .sort((a, b) => String(b.pathname).localeCompare(String(a.pathname)));
}
