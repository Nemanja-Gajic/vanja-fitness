import { redis, getJSON, getTrainers, roleOf } from "./studio-db";
import type { Session } from "./studio-auth";

// Privatni dokumenti članica (slike merenja, upitnik) u privatnom Vercel Blob-u.
export const DOCS_PREFIX = "vanja-studio-dokumenti/";
export type Doc = { id: string; kind: "slika" | "upitnik" | "dokument"; name: string; pathname: string; contentType: string; size: number; uploadedAt: string; note?: string };

export const docsKey = (memberId: string) => `vanja-studio:docs:${memberId}`;
export async function getDocs(memberId: string): Promise<Doc[]> {
  return (await getJSON<Doc[]>(docsKey(memberId))) || [];
}
export async function saveDocs(memberId: string, docs: Doc[]) {
  await redis(["SET", docsKey(memberId), JSON.stringify(docs)]);
}

// Admin vidi sve; članica samo svoje. Trener nema pristup.
export async function canSeeMember(me: Session | null, memberId: string): Promise<boolean> {
  if (!me || !memberId) return false;
  if (me.role === "admin") return true;
  if (me.role !== "clanica") return false;
  const acc = (await getTrainers()).find((a) => a.id === me.uid && a.active && roleOf(a) === "clanica");
  return !!acc && acc.memberId === memberId;
}
