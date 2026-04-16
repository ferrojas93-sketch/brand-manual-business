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
    promise: "Los fundamentos del sistema de marca, documentados y listos para aplicar.",
    pages: "20-25 páginas",
    days: 5,
    revisions: "1 revisión",
    deliverables: [
      "Manual 20-25 páginas · PDF A4 landscape",
      "Logo: sistema, variantes y clearspace",
      "Paleta cromática con códigos (HEX · RGB · CMYK)",
      "Sistema tipográfico base (display + body)",
      "Grid y construcción del sistema",
      "3 aplicaciones clave: papelería, firma email, social",
      "Usos correctos e incorrectos del logo",
      "Archivos fuente: logo en SVG + PNG + PDF",
    ],
    ctaLabel: "Empezar con Esencial",
  },
  profesional: {
    id: "profesional",
    name: "Profesional",
    label: "Para la mayoría de pymes. El que escogen ocho de cada diez.",
    price: 990,
    priceDisplay: "990€",
    promise: "Sistema de marca completo con voz verbal y plantillas editables. Lo que necesitas para operar sin preguntar cada decisión.",
    pages: "30-40 páginas",
    days: 7,
    revisions: "2 revisiones",
    deliverables: [
      "Manual 30-40 páginas · PDF A4 landscape",
      "Todo lo del tier Esencial +",
      "Sistema visual extendido con jerarquías y composición",
      "Tono de voz documentado + vocabulario de marca",
      "Guidelines verbales (qué decir, qué evitar, ejemplos)",
      "Guidelines de aplicación extendidas (web, papelería, social, email)",
      "Sistema tipográfico jerárquico (display + H1-H4 + body + caption)",
      "Paleta cromática extendida con roles y combinaciones",
      "Plantillas editables en Figma (posts social, portada, firma)",
      "Archivos fuente completos (SVG · PNG · PDF · Figma)",
    ],
    ctaLabel: "Empezar con Profesional",
    featured: true,
  },
  premium: {
    id: "premium",
    name: "Premium",
    label: "Para marcas que quieren sistema completo y el manual como objeto físico.",
    price: 1990,
    priceDisplay: "1.990€",
    promise: "Estrategia, identidad verbal, guidelines exhaustivas y tu manual encuadernado como libro impreso de edición única.",
    pages: "40-50 páginas",
    days: 10,
    revisions: "2 revisiones",
    deliverables: [
      "Manual 40-50 páginas · PDF A4 landscape",
      "Todo lo del tier Profesional +",
      "Copia física del manual encuadernada como libro (edición única, enviada a tu oficina)",
      "Estrategia de marca: arquetipo, posicionamiento, propuesta de valor",
      "Identidad verbal completa: naming, tagline, vocabulario extendido",
      "Sistema visual exhaustivo: logo, variantes, clearspace, usos, don'ts",
      "Guidelines de aplicación totales (web, papelería, social, merch, signage)",
      "Sistema tipográfico con OpenType features y variable fonts",
      "Paleta cromática completa con jerarquía 60/30/10",
      "Biblioteca de plantillas Figma extendida",
      "Dirección para fotografía e imagen de marca",
      "Archivos fuente completos + assets empaquetados",
    ],
    ctaLabel: "Empezar con Premium",
  },
};

export { SITE_URL } from "./schema";

export const TIERS_ORDER_DESKTOP: TierId[] = ["esencial", "profesional", "premium"];
export const TIERS_ORDER_MOBILE: TierId[] = ["esencial", "profesional", "premium"];

export const FOUNDING_SLOTS_REMAINING = 5;
export const FOUNDING_SLOTS_TOTAL = 5;
