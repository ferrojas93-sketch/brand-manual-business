import { Resend } from "resend";
import { getSupabaseAdmin } from "./supabase";

const FROM = process.env.LEAD_NOTIFY_FROM ?? "Tramarca <leads@tramarca.es>";
const NOTIFY_TO = process.env.LEAD_NOTIFY_TO ?? "hola@tramarca.es";
const BUCKET = "manuales";
const PDF_PATH = "tramarca-v4.pdf";
const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24; // 24h

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function createManualSignedUrl(): Promise<string> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(PDF_PATH, SIGNED_URL_TTL_SECONDS, {
      download: "manual-tramarca.pdf",
    });
  if (error || !data?.signedUrl) {
    throw new Error(`manual_signed_url_failed: ${error?.message ?? "unknown"}`);
  }
  return data.signedUrl;
}

export async function sendManualToRequester(params: {
  email: string;
  signedUrl: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("manual_email_skipped_no_resend_key");
    return;
  }
  const resend = new Resend(apiKey);

  const subject = "Tu manual Tramarca está aquí.";
  const textLines = [
    "Aquí tienes el manual Tramarca v4 — 58 páginas, sistema completo.",
    "",
    `Descarga: ${params.signedUrl}`,
    "",
    "El enlace es válido durante 24 horas. Si caduca, escríbenos a hola@tramarca.es y te mandamos uno nuevo.",
    "",
    "—",
    "Tramarca. Estudio editorial de manuales de marca.",
    "Precio cerrado · plazo publicado · sistema documentado.",
    "https://tramarca.es/precios",
  ];
  const html = `
<div style="font-family:'IBM Plex Mono',ui-monospace,monospace;max-width:560px;color:#0C0C0C;background:#F4F0EB;padding:40px 32px">
  <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C4553A;margin:0 0 12px">Manual solicitado</p>
  <h1 style="font-size:26px;font-weight:900;margin:0 0 16px;line-height:1.15;font-family:'Helvetica Neue','Arial Black',system-ui,sans-serif;letter-spacing:-0.02em">
    Tu manual Tramarca<span style="color:#C4553A">.</span>
  </h1>
  <p style="font-size:15px;line-height:1.55;margin:0 0 28px;color:#5E5A57">
    Cincuenta y ocho páginas. Sistema completo — tipografía, paleta, aplicaciones y voz documentada capítulo a capítulo.
  </p>
  <div style="margin:0 0 24px">
    <a href="${escape(params.signedUrl)}"
       style="display:inline-block;background:#0C0C0C;color:#F4F0EB;padding:14px 24px;text-decoration:none;font-weight:900;letter-spacing:-0.01em;font-family:'Helvetica Neue','Arial Black',system-ui,sans-serif">
      Descargar manual (PDF) →
    </a>
  </div>
  <p style="font-size:12px;color:#7A7672;margin:0 0 32px">
    El enlace es válido durante 24&nbsp;horas. Si caduca, escríbenos a
    <a href="mailto:hola@tramarca.es" style="color:#0C0C0C">hola@tramarca.es</a>.
  </p>
  <div style="border-top:1px solid #B5B1AC;padding-top:20px">
    <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C4553A;margin:0 0 8px">Si encaja</p>
    <p style="font-size:14px;line-height:1.55;margin:0 0 12px;color:#0C0C0C">
      Tres tiers <span style="color:#C4553A">·</span> precio cerrado IVA incluido <span style="color:#C4553A">·</span> plazo publicado.
    </p>
    <p style="font-size:13px;margin:0">
      <a href="https://tramarca.es/precios" style="color:#0C0C0C;text-decoration:underline">Ver precios →</a>
      &nbsp;&nbsp;
      <a href="https://tramarca.es/contacto" style="color:#0C0C0C;text-decoration:underline">Pedir propuesta →</a>
    </p>
  </div>
  <p style="margin-top:32px;font-size:11px;color:#7A7672;letter-spacing:0.2em;text-transform:uppercase">
    Tramarca <span style="color:#C4553A">·</span> Madrid <span style="color:#C4553A">·</span> Edición 1
  </p>
</div>`.trim();

  const result = await resend.emails.send({
    from: FROM,
    to: params.email,
    replyTo: NOTIFY_TO,
    subject,
    text: textLines.join("\n"),
    html,
  });
  if (result.error) {
    console.error("manual_email_send_failed", {
      name: result.error.name,
      message: result.error.message,
    });
    throw new Error("manual_email_send_failed");
  }
  console.log("manual_email_sent", { id: result.data?.id, to: params.email });
}

export async function notifyStudioOfManualRequest(params: {
  email: string;
  ip: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  const resend = new Resend(apiKey);

  const subject = `Lead manual · ${params.email}`;
  const text = [
    `Nuevo lead — ha solicitado el manual Tramarca PDF.`,
    "",
    `Email: ${params.email}`,
    `IP: ${params.ip}`,
    "",
    "Registro completo en Supabase → leads (source = manual_pdf_gate).",
  ].join("\n");
  const html = `
<div style="font-family:'IBM Plex Mono',ui-monospace,monospace;max-width:560px;color:#0C0C0C;background:#F4F0EB;padding:28px">
  <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#C4553A;margin:0 0 8px">Nuevo lead · manual gate</p>
  <h1 style="font-size:22px;font-weight:900;margin:0 0 20px;line-height:1.2;font-family:Georgia,serif">${escape(params.email)}</h1>
  <table style="font-size:14px;line-height:1.5;border-collapse:collapse">
    <tr><td style="padding:5px 16px 5px 0;color:#7A7672">Email</td><td style="padding:5px 0"><a href="mailto:${escape(params.email)}" style="color:#0C0C0C">${escape(params.email)}</a></td></tr>
    <tr><td style="padding:5px 16px 5px 0;color:#7A7672">IP</td><td style="padding:5px 0;font-size:12px;color:#7A7672">${escape(params.ip)}</td></tr>
    <tr><td style="padding:5px 16px 5px 0;color:#7A7672">Source</td><td style="padding:5px 0">manual_pdf_gate</td></tr>
  </table>
  <p style="margin-top:20px;font-size:12px;color:#7A7672">Registro en Supabase → leads.</p>
</div>`.trim();

  const result = await resend.emails.send({
    from: FROM,
    to: NOTIFY_TO,
    replyTo: params.email,
    subject,
    text,
    html,
  });
  if (result.error) {
    console.error("manual_studio_notify_failed", {
      name: result.error.name,
      message: result.error.message,
    });
  }
}
