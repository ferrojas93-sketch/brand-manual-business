import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { limitByEmail, limitByIp } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { notifyNewLead } from "@/lib/notify";

export const runtime = "nodejs";

type Tier = "esencial" | "profesional" | "premium" | "no-lo-se";
type BrandMaturity = "new_brand" | "existing" | "rebrand" | "refresh" | "update_manual";
type TeamSize = "solo" | "small" | "medium" | "large" | "enterprise";

type Attachment = {
  filename: string;
  path: string;
  size: number;
  type: string;
};

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  tier?: Tier;
  message?: string;
  consent?: boolean;
  website?: string;
  turnstileToken?: string;
  honeypot?: string;
  // Extended fields
  social_links?: { linkedin?: string; instagram?: string; other?: string };
  sector?: string;
  role?: string;
  team_size?: TeamSize;
  brand_maturity?: BrandMaturity;
  attachments?: Attachment[];
  company_website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_RE = /^https?:\/\/[^\s]+$/i;

const TEAM_SIZES: readonly TeamSize[] = ["solo", "small", "medium", "large", "enterprise"];
const BRAND_MATURITIES: readonly BrandMaturity[] = ["new_brand", "existing", "rebrand", "refresh", "update_manual"];

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function sanitizeUrl(v: string | undefined, maxLen = 300): string | null {
  if (!v) return null;
  const trimmed = v.trim();
  if (!trimmed) return null;
  if (trimmed.length > maxLen) return null;
  if (!URL_RE.test(trimmed)) return null;
  return trimmed;
}

function tierToInterest(tier: Tier | undefined): string | null {
  if (!tier) return null;
  if (tier === "no-lo-se") return "undecided";
  return tier;
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

  // Honeypot: bots rellenan todos los campos. El campo 'honeypot' (antes 'website') se ignora silenciosamente.
  if (body.honeypot && body.honeypot.trim().length > 0) {
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

  const companyWebsite = sanitizeUrl(body.company_website, 300);
  const linkedinUrl = sanitizeUrl(body.social_links?.linkedin, 300);
  const instagramUrl = sanitizeUrl(body.social_links?.instagram, 300);
  const otherSocial = sanitizeUrl(body.social_links?.other, 300);

  const socialLinks: Record<string, string> = {};
  if (linkedinUrl) socialLinks.linkedin = linkedinUrl;
  if (instagramUrl) socialLinks.instagram = instagramUrl;
  if (otherSocial) socialLinks.other = otherSocial;

  const sector = body.sector?.trim().slice(0, 80) || null;
  const role = body.role?.trim().slice(0, 80) || null;
  const teamSize = TEAM_SIZES.includes(body.team_size as TeamSize) ? body.team_size : null;
  const brandMaturity = BRAND_MATURITIES.includes(body.brand_maturity as BrandMaturity)
    ? body.brand_maturity
    : null;
  const tierInterest = tierToInterest(body.tier);

  const attachments = Array.isArray(body.attachments)
    ? body.attachments
        .filter(
          (a): a is Attachment =>
            !!a &&
            typeof a.filename === "string" &&
            typeof a.path === "string" &&
            typeof a.size === "number" &&
            typeof a.type === "string" &&
            a.path.startsWith("uploads/") &&
            a.size > 0 &&
            a.size <= 5 * 1024 * 1024
        )
        .slice(0, 5)
        .map((a) => ({
          filename: a.filename.slice(0, 200),
          path: a.path.slice(0, 400),
          size: a.size,
          type: a.type.slice(0, 80),
        }))
    : [];

  const { error } = await getSupabaseAdmin()
    .from("leads")
    .insert({
      name,
      email,
      company,
      source: "web_form",
      stage: "new",
      notes: message,
      consent_given_at: new Date().toISOString(),
      website: companyWebsite,
      social_links: Object.keys(socialLinks).length > 0 ? socialLinks : null,
      sector,
      role,
      team_size: teamSize,
      brand_maturity: brandMaturity,
      tier_interest: tierInterest,
      attachments,
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
    message,
    website: companyWebsite,
    socialLinks,
    sector,
    role,
    teamSize: teamSize ?? null,
    brandMaturity: brandMaturity ?? null,
    attachments,
  });

  return NextResponse.json({ ok: true });
}
