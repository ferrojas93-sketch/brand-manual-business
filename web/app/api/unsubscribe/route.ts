import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe";

export const runtime = "nodejs";

async function unsubscribe(email: string, token: string) {
  const normalized = email.trim().toLowerCase();
  if (!normalized || !verifyUnsubscribeToken(normalized, token)) {
    return { ok: false, status: 400 as const, message: "Invalid token" };
  }

  const { error } = await getSupabaseAdmin()
    .from("leads")
    .update({ unsubscribed_at: new Date().toISOString() })
    .eq("email", normalized)
    .is("unsubscribed_at", null);

  if (error) {
    console.error("unsubscribe_db_error", { code: error.code, message: error.message });
    return { ok: false, status: 500 as const, message: "Database error" };
  }

  return { ok: true, status: 200 as const, message: "ok" };
}

function htmlPage(state: "ok" | "error", message: string): string {
  const heading = state === "ok" ? "Baja confirmada." : "Algo no encaja.";
  const body =
    state === "ok"
      ? "No recibirás más emails de Tramarca. Si fue un error, escríbenos a hola@tramarca.es y lo revertimos."
      : message;
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex,nofollow">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${heading} · Tramarca</title>
  <style>
    body{margin:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:#F4F0EB;color:#0C0C0C;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:32px}
    main{max-width:520px;text-align:left}
    .eyebrow{font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C4553A;margin:0 0 12px}
    h1{font-family:'Helvetica Neue','Arial Black',system-ui,sans-serif;font-size:36px;font-weight:900;line-height:1.1;letter-spacing:-0.02em;margin:0 0 16px}
    h1 .dot{color:#C4553A}
    p{font-size:15px;line-height:1.6;color:#5E5A57;margin:0 0 24px}
    a{color:#0C0C0C;text-decoration:underline;text-decoration-color:#C4553A;text-decoration-thickness:2px;text-underline-offset:3px}
  </style>
</head>
<body>
  <main>
    <p class="eyebrow">Suscripción</p>
    <h1>${heading.replace(/\.$/, "")}<span class="dot">.</span></h1>
    <p>${body}</p>
    <p><a href="https://tramarca.es">Volver a tramarca.es</a></p>
  </main>
</body>
</html>`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email") ?? "";
  const token = url.searchParams.get("token") ?? "";
  const result = await unsubscribe(email, token);
  return new NextResponse(htmlPage(result.ok ? "ok" : "error", result.message), {
    status: result.status,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  let email = url.searchParams.get("email") ?? "";
  let token = url.searchParams.get("token") ?? "";

  if (!email || !token) {
    const ct = req.headers.get("content-type") ?? "";
    if (ct.includes("application/x-www-form-urlencoded")) {
      const text = await req.text();
      const form = new URLSearchParams(text);
      email = email || form.get("email") || "";
      token = token || form.get("token") || "";
    }
  }

  const result = await unsubscribe(email, token);
  return NextResponse.json({ ok: result.ok }, { status: result.status });
}
