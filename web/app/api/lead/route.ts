import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { limitByEmail, limitByIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { notifyNewLead } from "@/lib/notify";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  tier?: "esencial" | "profesional" | "premium" | "no-lo-se";
  founding?: boolean;
  message?: string;
  consent?: boolean;
  website?: string;
  turnstileToken?: string;
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

  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: bots rellenan todos los campos. Si `website` llega con valor, ignoramos silenciosamente.
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const turnstileOk = await verifyTurnstile(body.turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json({ error: "Verificación anti-bot fallida" }, { status: 403 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }
  if (!company || company.length > 150) {
    return NextResponse.json({ error: "Empresa inválida" }, { status: 400 });
  }
  if (!message || message.length < 5 || message.length > 3000) {
    return NextResponse.json({ error: "Mensaje inválido" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Falta consentimiento" }, { status: 400 });
  }

  const emailCheck = await limitByEmail(email);
  if (!emailCheck.success) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  const notes = [
    message,
    body.founding ? "[Founding Customer Program candidate]" : null,
    body.tier ? `Tier de interés: ${body.tier}` : null,
  ]
    .filter(Boolean)
    .join("\n\n");

  const { error } = await getSupabaseAdmin().from("leads").insert({
    name,
    email,
    company,
    source: "web_form",
    stage: "new",
    notes,
    consent_given_at: new Date().toISOString(),
  });

  if (error) {
    console.error("lead_insert_error", { code: error.code, message: error.message });
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  await notifyNewLead({
    name,
    email,
    company,
    tier: body.tier ?? "no-lo-se",
    founding: !!body.founding,
    message,
    ip,
  });

  return NextResponse.json({ ok: true });
}
