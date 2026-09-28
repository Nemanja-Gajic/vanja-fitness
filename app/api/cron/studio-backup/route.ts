import { NextResponse } from "next/server";
import { runBackup } from "../../../../lib/studio-backup";

export const dynamic = "force-dynamic";

// Vercel Cron poziva ovo jednom dnevno (vercel.json). Radi samo sa tačnim CRON_SECRET.
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET || "";
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  try {
    return NextResponse.json(await runBackup());
  } catch (e) {
    return NextResponse.json({ ok: false, reason: String((e as Error)?.message || e) }, { status: 500 });
  }
}
