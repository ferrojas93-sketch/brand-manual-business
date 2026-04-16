import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { limitByIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp",
  "application/pdf",
  "application/postscript",
  "application/illustrator",
]);

type UploadRequest = {
  filename?: string;
  contentType?: string;
  size?: number;
};

function sanitizeFilename(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[^\w.\-]/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 120);
}

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  const ip = getIp(req);
  const rl = await limitByIp(ip);
  if (!rl.success) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  let body: UploadRequest;
  try {
    body = (await req.json()) as UploadRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const filename = body.filename?.trim() ?? "";
  const contentType = body.contentType?.trim() ?? "";
  const size = Number(body.size ?? 0);

  if (!filename || filename.length > 200) {
    return NextResponse.json({ error: "Nombre de archivo inválido" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(contentType)) {
    return NextResponse.json({ error: "Tipo de archivo no permitido" }, { status: 400 });
  }
  if (!Number.isFinite(size) || size <= 0 || size > MAX_SIZE) {
    return NextResponse.json({ error: "Tamaño inválido (máx 5MB)" }, { status: 400 });
  }

  const safeName = sanitizeFilename(filename);
  const path = `uploads/${crypto.randomUUID()}/${safeName}`;

  const { data, error } = await getSupabaseAdmin()
    .storage.from("lead-attachments")
    .createSignedUploadUrl(path);

  if (error || !data) {
    console.error("upload_signed_url_failed", { code: error?.name, message: error?.message });
    return NextResponse.json({ error: "No se pudo preparar la subida" }, { status: 500 });
  }

  return NextResponse.json({
    path: data.path,
    token: data.token,
    url: data.signedUrl,
  });
}
