import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "cron_secret_missing" }, { status: 500 });
  }
  const auth = Buffer.from(req.headers.get("authorization") ?? "");
  const expected = Buffer.from(`Bearer ${secret}`);
  if (auth.length !== expected.length || !timingSafeEqual(auth, expected)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const ts = new Date().toISOString();
  const checks: Record<string, string> = {};

  // 1) Supabase despierta (evita la pausa Hobby a los 7 días sin actividad)
  const { error } = await getSupabaseAdmin().from("leads").select("id").limit(1);
  checks.supabase = error ? `error: ${error.message}` : "ok";

  // 2) Resend: la key sigue siendo válida (en agosto 2026 caducó sin que nadie lo viera)
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    checks.resend = "error: RESEND_API_KEY missing";
  } else {
    try {
      const res = await fetch("https://api.resend.com/domains", {
        headers: { Authorization: `Bearer ${resendKey}` },
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      });
      checks.resend = res.ok ? "ok" : `error: http ${res.status}`;
    } catch (err) {
      checks.resend = `error: ${err instanceof Error ? err.message : "unknown"}`;
    }
  }

  const ok = Object.values(checks).every((v) => v === "ok");
  if (!ok) console.error("heartbeat_failed", checks);
  return NextResponse.json({ ok, checks, ts }, { status: ok ? 200 : 500 });
}
