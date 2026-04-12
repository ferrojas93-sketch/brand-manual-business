export type TierId = "esencial" | "profesional" | "premium";

export type Tier = {
  id: TierId;
  name: string;
  label: string;
  price: number;
  priceDisplay: string;
  promise: string;
  pages: string;
  days: number;
  revisions: string;
  deliverables: string[];
  ctaLabel: string;
  featured?: boolean;
};

export const TIERS: Record<TierId, Tier> = {
  esencial: {
    id: "esencial",
    name: "Esencial",
    label: "Para marcas que arrancan y quieren los fundamentos bien hechos.",
    price: 490,
    priceDisplay: "490€",
    promise: "Los fundamentos. Logo, color, tipografía, aplicaciones básicas. Manual que se lee.",
    pages: "20-25 páginas",
    days: 5,
    revisions: "1 revisión",
    deliverables: [
      "20-25 páginas, A4 landscape",
      "Logo + variantes + clearspace",
      "Paleta cromática + usos básicos",
      "Sistema tipográfico",
      "3 aplicaciones clave (papelería, social, firma)",
    ],
    ctaLabel: "Empezar el Esencial",
  },
  profesional: {
    id: "profesional",
    name: "Profesional",
    label: "Para la mayoría de pymes. El que escogen ocho de cada diez.",
    price: 990,
    priceDisplay: "990€",
    promise: "Sistema de marca completo. Voz, visual, guidelines. Lo que necesitas para operar.",
    pages: "30-40 páginas",
    days: 7,
    revisions: "2 revisiones",
    deliverables: [
      "30-40 páginas, A4 landscape",
      "Sistema visual completo",
      "Tono de voz y guidelines verbales",
      "Paleta cromática + usos",
      "Sistema tipográfico",
      "Guidelines de aplicación (web, papelería, social)",
      "Plantillas editables (Figma)",
    ],
    ctaLabel: "Reservar Profesional",
    featured: true,
  },
  premium: {
    id: "premium",
    name: "Premium",
    label: "Para marcas que quieren manual de 40-50 páginas.",
    price: 1990,
    priceDisplay: "1.990€",
    promise: "Estrategia, identidad verbal y guidelines exhaustivas. Formación a tu equipo incluida.",
    pages: "40-50 páginas",
    days: 10,
    revisions: "2 revisiones",
    deliverables: [
      "40-50 páginas, A4 landscape",
      "Estrategia de marca completa",
      "Identidad verbal + tono de voz",
      "Sistema visual extendido (logo, variantes, clearspace, don'ts)",
      "Paleta cromática + usos",
      "Sistema tipográfico jerárquico",
      "Guidelines de aplicación (web, papelería, social, merch)",
      "Formación de equipo (sesión 90min remoto)",
    ],
    ctaLabel: "Abrir Premium",
  },
};

export { SITE_URL } from "./schema";

export const TIERS_ORDER_DESKTOP: TierId[] = ["esencial", "profesional", "premium"];
export const TIERS_ORDER_MOBILE: TierId[] = ["esencial", "profesional", "premium"];

export const FOUNDING_SLOTS_REMAINING = 5;
export const FOUNDING_SLOTS_TOTAL = 5;
