import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
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
    images: ["/og-tramarca.jpg"],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plexMono.variable} antialiased`}>
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
