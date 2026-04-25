import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { limitByEmail, limitByIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import {
  createManualSignedUrl,
  sendManualToRequester,
  notifyStudioOfManualRequest,
} from "@/lib/notify-manual";

export const runtime = "nodejs";

type Payload = {
  email?: string;
  consent?: boolean;
  turnstileToken?: string;
  honeypot?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  const ip = getIp(req);

  const ipCheck = await limitByIp(ip);
  if (!ipCheck.success) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.honeypot && body.honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const turnstileOk = await verifyTurnstile(body.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json({ error: "Verificación anti-bot fallida" }, { status: 403 });
  }

  const email = body.email?.trim().toLowerCase() ?? "";
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Falta consentimiento" }, { status: 400 });
  }

  const emailCheck = await limitByEmail(email);
  if (!emailCheck.success) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  // `name` es NOT NULL en la tabla; cuando el gate es solo-email, usamos la parte local del email como placeholder legible.
  const emailLocal = email.split("@")[0] ?? "anon";
  const placeholderName = `manual-request · ${emailLocal}`.slice(0, 120);

  const { error: dbError } = await getSupabaseAdmin()
    .from("leads")
    .insert({
      name: placeholderName,
      email,
      source: "manual_pdf_gate",
      stage: "new",
      notes: "Solicitud de descarga del manual Tramarca (v4 · 58pp)",
      consent_given_at: new Date().toISOString(),
    });

  if (dbError) {
    console.error("manual_lead_insert_error", {
      code: dbError.code,
      message: dbError.message,
    });
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  try {
    const signedUrl = await createManualSignedUrl();
    await sendManualToRequester({ email, signedUrl });
    // Studio notification en fire-and-forget: no bloquea la respuesta al usuario.
    notifyStudioOfManualRequest({ email }).catch((err) => {
      console.error("studio_notify_async_failed", {
        message: err instanceof Error ? err.message : "unknown",
      });
    });
  } catch (err) {
    console.error("manual_delivery_failed", {
      message: err instanceof Error ? err.message : "unknown",
    });
    return NextResponse.json({ error: "No pudimos enviar el manual" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
