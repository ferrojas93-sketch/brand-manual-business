import { Resend } from "resend";

type LeadNotification = {
  name: string;
  email: string;
  company: string;
  tier: string;
  founding: boolean;
  message: string;
  ip: string;
};

const NOTIFY_TO = process.env.LEAD_NOTIFY_TO ?? "hola@tramarca.es";
const NOTIFY_FROM = process.env.LEAD_NOTIFY_FROM ?? "leads@tramarca.es";

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
            ? "Premium 1990€"
            : "Aún no lo sabe";

    const subject = `Lead ${lead.founding ? "[FOUNDING] " : ""}${tierLabel} · ${lead.company}`;
    const text = [
      `Nombre: ${lead.name}`,
      `Email: ${lead.email}`,
      `Empresa: ${lead.company}`,
      `Tier: ${tierLabel}${lead.founding ? " · Candidato Founding Customer" : ""}`,
      `IP: ${lead.ip}`,
      "",
      "Mensaje:",
      lead.message,
      "",
      "—",
      "Revisar y responder en <24h. Lead disponible en Supabase → leads.",
    ].join("\n");

    const html = `
<div style="font-family:'IBM Plex Mono',monospace;max-width:560px;color:#0C0C0C;background:#F4F0EB;padding:32px">
  <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#C4553A;margin:0 0 8px">Nuevo lead</p>
  <h1 style="font-size:24px;font-weight:900;margin:0 0 24px;line-height:1.2">${escape(lead.company)}</h1>
  <table style="font-size:14px;line-height:1.5;border-collapse:collapse">
    <tr><td style="padding:4px 16px 4px 0;color:#7A7672">Nombre</td><td>${escape(lead.name)}</td></tr>
    <tr><td style="padding:4px 16px 4px 0;color:#7A7672">Email</td><td><a href="mailto:${escape(lead.email)}" style="color:#0C0C0C">${escape(lead.email)}</a></td></tr>
    <tr><td style="padding:4px 16px 4px 0;color:#7A7672">Tier</td><td>${escape(tierLabel)}${lead.founding ? ' <strong style="color:#C4553A">· Founding</strong>' : ""}</td></tr>
    <tr><td style="padding:4px 16px 4px 0;color:#7A7672">IP</td><td style="font-size:12px;color:#7A7672">${escape(lead.ip)}</td></tr>
  </table>
  <div style="margin-top:24px;padding:16px;background:#E4E2DC;border-left:3px solid #C4553A">
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7A7672">Mensaje</p>
    <p style="margin:0;white-space:pre-wrap">${escape(lead.message)}</p>
  </div>
  <p style="margin-top:24px;font-size:12px;color:#7A7672">Responder en &lt;24h. Disponible en Supabase → leads.</p>
</div>`.trim();

    const result = await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: lead.email,
      subject,
      text,
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
      });
    }
  } catch (err) {
    console.error("notify_exception", { message: err instanceof Error ? err.message : "unknown" });
  }
}
