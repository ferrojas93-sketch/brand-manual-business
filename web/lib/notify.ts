import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

type Attachment = {
  filename: string;
  path: string;
  size: number;
  type: string;
};

type LeadNotification = {
  name: string;
  email: string;
  company: string;
  tier: string;
  message: string;
  website?: string | null;
  socialLinks?: Record<string, string>;
  sector?: string | null;
  role?: string | null;
  teamSize?: string | null;
  brandMaturity?: string | null;
  attachments?: Attachment[];
};

const NOTIFY_TO = process.env.LEAD_NOTIFY_TO ?? "hola@tramarca.es";
const NOTIFY_FROM = process.env.LEAD_NOTIFY_FROM ?? "leads@tramarca.es";

const TEAM_SIZE_LABEL: Record<string, string> = {
  solo: "Solo (1 persona)",
  small: "Pequeño (1-5)",
  medium: "Mediano (6-20)",
  large: "Grande (21-50)",
  enterprise: "Corporate (50+)",
};

const BRAND_MATURITY_LABEL: Record<string, string> = {
  new_brand: "Marca nueva (sin identidad)",
  existing: "Marca existente (consolidada)",
  rebrand: "Rebrand (cambio total)",
  refresh: "Refresh (evolución visual)",
  update_manual: "Actualizar manual actual",
};

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function signAttachmentUrls(attachments: Attachment[]): Promise<Array<Attachment & { url: string | null }>> {
  if (attachments.length === 0) return [];
  try {
    const supabase = getSupabaseAdmin();
    const result = await Promise.all(
      attachments.map(async (a) => {
        const { data, error } = await supabase.storage
          .from("lead-attachments")
          .createSignedUrl(a.path, 60 * 60 * 24 * 7);
        return { ...a, url: error ? null : (data?.signedUrl ?? null) };
      })
    );
    return result;
  } catch (err) {
    console.error("attachment_sign_failed", { message: err instanceof Error ? err.message : "unknown" });
    return attachments.map((a) => ({ ...a, url: null }));
  }
}

export async function notifyNewLead(lead: LeadNotification): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.warn("notify_skipped_no_resend_key");
    }
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const tierLabel =
      lead.tier === "esencial"
        ? "Esencial 490€"
        : lead.tier === "profesional"
          ? "Profesional 990€"
          : lead.tier === "premium"
            ? "Premium 1.990€"
            : "Aún no lo sabe";

    const attachmentsSigned = await signAttachmentUrls(lead.attachments ?? []);

    const subject = `Lead ${tierLabel} · ${lead.company}`;

    const textLines: string[] = [
      `Nombre: ${lead.name}`,
      `Email: ${lead.email}`,
      `Empresa: ${lead.company}`,
      `Tier: ${tierLabel}`,
    ];
    if (lead.role) textLines.push(`Rol: ${lead.role}`);
    if (lead.sector) textLines.push(`Sector: ${lead.sector}`);
    if (lead.teamSize) textLines.push(`Equipo: ${TEAM_SIZE_LABEL[lead.teamSize] ?? lead.teamSize}`);
    if (lead.brandMaturity) textLines.push(`Situación marca: ${BRAND_MATURITY_LABEL[lead.brandMaturity] ?? lead.brandMaturity}`);
    if (lead.website) textLines.push(`Web: ${lead.website}`);
    if (lead.socialLinks?.linkedin) textLines.push(`LinkedIn: ${lead.socialLinks.linkedin}`);
    if (lead.socialLinks?.instagram) textLines.push(`Instagram: ${lead.socialLinks.instagram}`);
    if (lead.socialLinks?.other) textLines.push(`Otro social: ${lead.socialLinks.other}`);
    textLines.push("", "Mensaje:", lead.message);
    if (attachmentsSigned.length > 0) {
      textLines.push("", "Adjuntos:");
      attachmentsSigned.forEach((a) => {
        textLines.push(`  - ${a.filename} (${formatSize(a.size)})${a.url ? ` — ${a.url}` : ""}`);
      });
    }
    textLines.push("", "—", "Responder en <24h. Lead completo en Supabase → leads.");

    const detailRows: string[] = [];
    const row = (label: string, value: string) =>
      `<tr><td style="padding:5px 16px 5px 0;color:#7A7672;white-space:nowrap">${escape(label)}</td><td style="padding:5px 0">${value}</td></tr>`;

    detailRows.push(row("Nombre", escape(lead.name)));
    detailRows.push(
      row("Email", `<a href="mailto:${escape(lead.email)}" style="color:#0C0C0C">${escape(lead.email)}</a>`)
    );
    detailRows.push(
      row(
        "Tier",
        escape(tierLabel)
      )
    );
    if (lead.role) detailRows.push(row("Rol", escape(lead.role)));
    if (lead.sector) detailRows.push(row("Sector", escape(lead.sector)));
    if (lead.teamSize) detailRows.push(row("Equipo", escape(TEAM_SIZE_LABEL[lead.teamSize] ?? lead.teamSize)));
    if (lead.brandMaturity)
      detailRows.push(row("Situación marca", escape(BRAND_MATURITY_LABEL[lead.brandMaturity] ?? lead.brandMaturity)));
    if (lead.website)
      detailRows.push(
        row("Web", `<a href="${escape(lead.website)}" target="_blank" rel="noopener" style="color:#0C0C0C">${escape(lead.website)}</a>`)
      );
    if (lead.socialLinks?.linkedin)
      detailRows.push(
        row("LinkedIn", `<a href="${escape(lead.socialLinks.linkedin)}" target="_blank" rel="noopener" style="color:#0C0C0C">${escape(lead.socialLinks.linkedin)}</a>`)
      );
    if (lead.socialLinks?.instagram)
      detailRows.push(
        row("Instagram", `<a href="${escape(lead.socialLinks.instagram)}" target="_blank" rel="noopener" style="color:#0C0C0C">${escape(lead.socialLinks.instagram)}</a>`)
      );
    if (lead.socialLinks?.other)
      detailRows.push(
        row("Otro", `<a href="${escape(lead.socialLinks.other)}" target="_blank" rel="noopener" style="color:#0C0C0C">${escape(lead.socialLinks.other)}</a>`)
      );

    const attachmentsHtml =
      attachmentsSigned.length > 0
        ? `
  <div style="margin-top:24px">
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7A7672">Adjuntos</p>
    <ul style="margin:0;padding:0;list-style:none;font-size:14px">
      ${attachmentsSigned
        .map((a) =>
          `<li style="padding:6px 0;border-bottom:1px solid #E4E2DC">${
            a.url
              ? `<a href="${escape(a.url)}" style="color:#0C0C0C;text-decoration:underline">${escape(a.filename)}</a>`
              : escape(a.filename)
          } <span style="color:#7A7672;font-size:12px">· ${formatSize(a.size)}</span></li>`
        )
        .join("")}
    </ul>
    <p style="margin:8px 0 0;font-size:11px;color:#7A7672">Los enlaces caducan en 7 días.</p>
  </div>`
        : "";

    const html = `
<div style="font-family:'IBM Plex Mono',ui-monospace,monospace;max-width:640px;color:#0C0C0C;background:#F4F0EB;padding:32px">
  <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C4553A;margin:0 0 8px">Nuevo lead</p>
  <h1 style="font-size:24px;font-weight:900;margin:0 0 24px;line-height:1.2;font-family:Georgia,serif">${escape(lead.company)}</h1>
  <table style="font-size:14px;line-height:1.5;border-collapse:collapse">${detailRows.join("")}</table>
  <div style="margin-top:24px;padding:16px;background:#E4E2DC;border-left:3px solid #C4553A">
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7A7672">Mensaje</p>
    <p style="margin:0;white-space:pre-wrap">${escape(lead.message)}</p>
  </div>${attachmentsHtml}
  <p style="margin-top:24px;font-size:12px;color:#7A7672">Responder en &lt;24h. Registro completo en Supabase → leads.</p>
</div>`.trim();

    const result = await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: lead.email,
      subject,
      text: textLines.join("\n"),
      html,
    });

    if (result.error) {
      console.error("notify_send_failed", {
        name: result.error.name,
        message: result.error.message,
      });
    } else {
      console.log("notify_sent", {
        id: result.data?.id,
        to: NOTIFY_TO,
        from: NOTIFY_FROM,
        attachments: attachmentsSigned.length,
      });
    }
  } catch (err) {
    console.error("notify_exception", { message: err instanceof Error ? err.message : "unknown" });
  }
}
