import { SITE_URL } from "@/lib/tiers";

const OG_IMAGE = {
  url: "/og-tramarca-v4.jpg",
  width: 1200,
  height: 630,
  alt: "Tramarca — estudio editorial de manuales de marca. Tres tiers con precio cerrado e IVA incluido.",
};

/**
 * openGraph por página. Next.js NO fusiona `openGraph` con el del layout:
 * si una página lo define, sustituye el bloque entero. Este helper devuelve
 * el bloque completo con la `url` correcta para que cada cita social/AI
 * apunte a la página real y no a la home.
 */
export function ogFor(path: string) {
  return {
    type: "website" as const,
    locale: "es_ES",
    siteName: "Tramarca",
    url: `${SITE_URL}${path}`,
    images: [OG_IMAGE],
  };
}
