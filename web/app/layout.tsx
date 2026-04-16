import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CookieBanner } from "@/components/CookieBanner";
import {
  jsonLdGraph,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  SITE_URL,
} from "@/lib/schema";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  src: [
    { path: "../public/fonts/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-900.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tu marca, por escrito. Manuales de marca 490€–1.990€ IVA incluido · Tramarca",
    template: "%s · Tramarca",
  },
  description:
    "Estudio editorial de manuales de marca. Sistemas documentados capítulo a capítulo en 5, 7 o 10 días laborables. Tres tiers con precio cerrado e IVA incluido: 490€, 990€, 1.990€.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Tramarca",
    images: [
      {
        url: "/og-tramarca.jpg",
        width: 1200,
        height: 630,
        alt: "Tramarca — estudio editorial de manuales de marca. Tres tiers con precio cerrado e IVA incluido.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu marca, por escrito · Tramarca",
    description:
      "Estudio editorial de manuales de marca. 490€–1.990€ IVA incl., entrega en 5–10 días laborables.",
    images: ["/og-tramarca.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-ES": SITE_URL,
      es: SITE_URL,
    },
  },
  robots: { index: true, follow: true },
  category: "design",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plexMono.variable} ${satoshi.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-papel text-negro font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <JsonLd
          data={jsonLdGraph(organizationSchema, localBusinessSchema, websiteSchema)}
        />
        <Script
          async
          src="https://plausible.io/js/pa-4rFp7GhF-k5b0oHbUj-Ri.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
