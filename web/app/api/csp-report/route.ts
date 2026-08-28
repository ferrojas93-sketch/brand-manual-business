import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { limitByIp } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 8 * 1024;
const NO_CONTENT = () => new NextResponse(null, { status: 204 });
const clip = (v: unknown, n = 500) => String(v ?? "").slice(0, n);

export const runtime = "nodejs";

type LegacyCspReport = {
  "csp-report"?: {
    "document-uri"?: string;
    referrer?: string;
    "violated-directive"?: string;
    "effective-directive"?: string;
    "original-policy"?: string;
    disposition?: string;
    "blocked-uri"?: string;
    "line-number"?: number;
    "column-number"?: number;
    "source-file"?: string;
    "status-code"?: number;
    "script-sample"?: string;
  };
};

type ModernReport = {
  age?: number;
  type?: "csp-violation";
  url?: string;
  user_agent?: string;
  body?: {
    documentURL?: string;
    referrer?: string;
    blockedURL?: string;
    effectiveDirective?: string;
    originalPolicy?: string;
    sourceFile?: string;
    sample?: string;
    disposition?: "enforce" | "report";
    statusCode?: number;
    lineNumber?: number;
    columnNumber?: number;
  };
};

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/**
 * CSP violation report endpoint.
 * Acepta reports tanto en formato legacy (`report-uri`) como modern (`report-to` via `application/reports+json`).
 * Logs a console en todos los casos; opcionalmente persiste en Supabase si la tabla `csp_reports` existe.
 */
export async function POST(req: Request) {
  const ip = getIp(req);
  const contentType = req.headers.get("content-type") ?? "";

  const rl = await limitByIp(ip);
  if (!rl.success) return new NextResponse(null, { status: 429 });
  const declared = Number(req.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) return new NextResponse(null, { status: 413 });

  try {
    let violation: Record<string, unknown> | null = null;

    if (contentType.includes("application/csp-report")) {
      const body = (await req.json()) as LegacyCspReport;
      violation = (body["csp-report"] ?? null) as Record<string, unknown> | null;
    } else if (contentType.includes("application/reports+json")) {
      const body = (await req.json()) as ModernReport[];
      // Modern reports vienen como array. Tomar el primero relevante de tipo csp-violation.
      const first = Array.isArray(body)
        ? body.find((r) => r.type === "csp-violation")
        : undefined;
      if (first?.body) {
        violation = first.body as unknown as Record<string, unknown>;
      }
    } else {
      // Best effort · intentar parsear JSON genérico
      try {
        violation = (await req.json()) as Record<string, unknown>;
      } catch {
        violation = null;
      }
    }

    if (!violation) {
      return NO_CONTENT();
    }

    const directive = clip(
      violation["effective-directive"] ??
        violation["effectiveDirective"] ??
        violation["violated-directive"] ??
        "unknown"
    );
    const blockedUri = clip(violation["blocked-uri"] ?? violation["blockedURL"] ?? "unknown");
    const documentUri = clip(violation["document-uri"] ?? violation["documentURL"] ?? "unknown");

    console.warn("csp_violation", {
      directive,
      blockedUri,
      documentUri,
      ip,
      ua: req.headers.get("user-agent") ?? "unknown",
    });

    // Best-effort persistence · si la tabla no existe, falla silenciosamente.
    try {
      await getSupabaseAdmin()
        .from("csp_reports")
        .insert({
          directive,
          blocked_uri: blockedUri,
          document_uri: documentUri,
          source_file: clip(violation["source-file"] ?? violation["sourceFile"]),
          sample: clip(violation["script-sample"] ?? violation["sample"]),
          ip,
          user_agent: clip(req.headers.get("user-agent"), 300) || null,
        });
    } catch (dbErr) {
      // Tabla no creada aún · log silencioso
      if (process.env.NODE_ENV !== "production") {
        console.warn("csp_report_db_skip", {
          message: dbErr instanceof Error ? dbErr.message : "unknown",
        });
      }
    }

    return NO_CONTENT();
  } catch (err) {
    console.error("csp_report_exception", {
      message: err instanceof Error ? err.message : "unknown",
    });
    return NO_CONTENT();
  }
}

export async function GET() {
  // Health check simple
  return NextResponse.json({ endpoint: "csp-report", status: "ok" });
}
