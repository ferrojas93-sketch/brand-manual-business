import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * CSP · reporting group `csp-endpoint` permite browsers modernos hacer POST
 * a /api/csp-report con formato `application/reports+json` (Reporting API v1).
 * Los browsers legacy usan la directiva clásica `report-uri`.
 */
const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com",
  "connect-src 'self' https://plausible.io https://challenges.cloudflare.com https://*.supabase.co",
  "frame-src https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
  "report-uri /api/csp-report",
  "report-to csp-endpoint",
].join("; ");

// Reporting API modern · browsers usan esto para batchear reports.
const reportToHeader = JSON.stringify({
  group: "csp-endpoint",
  max_age: 86400,
  endpoints: [{ url: "/api/csp-report" }],
});

const securityHeaders = [
  {
    key: isProd ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy",
    value: cspDirectives,
  },
  { key: "Report-To", value: reportToHeader },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Rename /manuales -> /trabajos (2026-04-19). 301 permanent para preservar SEO.
      { source: "/manuales", destination: "/trabajos", permanent: true },
      { source: "/manuales/:slug", destination: "/trabajos/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
