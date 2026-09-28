import { NextResponse } from "next/server";
import { get } from "@vercel/blob";
import { sessionFrom } from "../../../../../lib/studio-session";
import { canSeeMember, getDocs } from "../../../../../lib/studio-docs";

export const dynamic = "force-dynamic";

// GET ?m=&id=: prikaz jednog dokumenta. Autorizacija ovde, pored get() poziva.
export async function GET(req: Request) {
  const me = await sessionFrom(req);
  const u = new URL(req.url);
  const m = u.searchParams.get("m") || "", id = u.searchParams.get("id") || "";
  if (!(await canSeeMember(me, m))) return new NextResponse("Nema pristupa", { status: 403 });
  const d = (await getDocs(m)).find((x) => x.id === id);
  if (!d) return new NextResponse("Nije pronađeno", { status: 404 });
  const r = await get(d.pathname, { access: "private" }).catch(() => null);
  if (!r || r.statusCode !== 200) return new NextResponse("Nije pronađeno", { status: 404 });
  const dl = u.searchParams.get("dl") === "1";
  return new NextResponse(r.stream, {
    headers: {
      "Content-Type": d.contentType,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": `${dl ? "attachment" : "inline"}; filename="${d.name.replace(/[^A-Za-z0-9._-]+/g, "-")}"`,
    },
  });
}
