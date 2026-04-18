export type Tier = "E" | "P" | "M"; // Esencial, Profesional, preMium

export type AnatomiaItem = {
  slug: string;
  t: string;
  d: string;
  tiers: Tier[]; // tiers where this component is included
};

export type AnatomiaChapter = {
  n: string;
  roman: string; // numeración manual v4 (I a XVI)
  title: string;
  kicker: string;
  items: AnatomiaItem[];
};

/**
 * Estructura alineada con manual Tramarca v4 (58pp · 16 capítulos · 48 componentes).
 * Referencia canónica: `~/Projects/claude/brand-manuals/04-tramarca/dist/tramarca-v4.pdf`.
 */
export const ANATOMIA: AnatomiaChapter[] = [
  {
    n: "01",
    roman: "I",
    title: "Provocación",
    kicker: "Por qué existe este documento. Qué pasa si no existe.",
    items: [
      { slug: "01-tesis", t: "Tesis del manual", d: "Lo que el documento afirma antes del primer diagrama. Una frase que sostenga las siguientes 50 páginas.", tiers: ["E", "P", "M"] },
      { slug: "01-respuesta", t: "Nuestra respuesta", d: "Los 4 pilares del sistema: precio cerrado, plazo publicado, proceso cerrado, entrega editorial.", tiers: ["E", "P", "M"] },
      { slug: "01-mercado", t: "El mercado, en una tabla", d: "Agencia · freelance · plantilla · Tramarca. Rangos reales 2026 sin edulcorar.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "02",
    roman: "II",
    title: "Personas",
    kicker: "Para quién se escribe. Qué fricción resolvemos.",
    items: [
      { slug: "02-audiencia-interna", t: "Audiencia interna", d: "Quién del equipo lo abre: fundador, equipo de marketing, proveedores. Qué necesita cada uno en 3 minutos.", tiers: ["P", "M"] },
      { slug: "02-audiencia-externa", t: "Audiencia externa", d: "Imprenta, agencia colaboradora, freelance de turno. Qué exigen para no romper el sistema.", tiers: ["M"] },
      { slug: "02-friccion", t: "Fricción del lector", d: "Dónde se pierde quien abre un manual nuevo. Cómo ordenamos para que encuentre rápido.", tiers: ["M"] },
    ],
  },
  {
    n: "03",
    roman: "III",
    title: "Fundamentos",
    kicker: "El punto de partida. La idea antes de la forma.",
    items: [
      { slug: "03-proposito", t: "Propósito", d: "Para qué existe la marca. Una frase que resista cinco años sin retoque.", tiers: ["E", "P", "M"] },
      { slug: "03-vision", t: "Visión", d: "Hacia dónde vamos. El lugar al que queremos llegar — con fecha, no perpetuo.", tiers: ["E", "P", "M"] },
      { slug: "03-valores", t: "Valores", d: "Lo que no negociamos. Tres o cuatro principios operativos — no poster motivacional.", tiers: ["E", "P", "M"] },
      { slug: "03-personalidad", t: "Personalidad", d: "Si la marca fuera persona. Arquetipo, carácter, ritmo.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "04",
    roman: "IV",
    title: "Sistema de logo",
    kicker: "No es el logo. Es el sistema que lo sostiene.",
    items: [
      { slug: "04-marca-principal", t: "Marca principal", d: "El master. Construcción, proporciones, retícula de dibujo.", tiers: ["E", "P", "M"] },
      { slug: "04-variantes", t: "Variantes", d: "Horizontal, vertical, iso, responsive, monograma para favicons.", tiers: ["E", "P", "M"] },
      { slug: "04-zona-exclusion", t: "Zona de exclusión", d: "Espacio mínimo alrededor. Tamaños mínimos impresos y digitales, documentados.", tiers: ["E", "P", "M"] },
      { slug: "04-usos-incorrectos", t: "Usos incorrectos", d: "Qué no se puede hacer. Explícito. Sin interpretación posible.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "05",
    roman: "V",
    title: "Tipografía",
    kicker: "Lo que se lee es lo que es la marca.",
    items: [
      { slug: "05-display", t: "Familia display", d: "Para titulares. Peso, corte, carácter. Una sola familia dominante.", tiers: ["E", "P", "M"] },
      { slug: "05-texto", t: "Familia texto", d: "Para cuerpo. Legibilidad larga. Pareja funcional sin conflicto.", tiers: ["E", "P", "M"] },
      { slug: "05-jerarquia", t: "Jerarquía", d: "H1–H6, párrafo, lede, caption. Reglas por contexto y escala modular.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "06",
    roman: "VI",
    title: "Color",
    kicker: "El color no decora. Clasifica.",
    items: [
      { slug: "06-primarios", t: "Primarios", d: "Los tres colores irrenunciables. Con proporciones y reglas de combinación.", tiers: ["E", "P", "M"] },
      { slug: "06-secundarios", t: "Secundarios + acento", d: "Paleta extendida. Cuándo se usa, cuándo no. Regla 60/30/10.", tiers: ["P", "M"] },
      { slug: "06-valores-pantone", t: "Valores técnicos", d: "Pantone C/U, CMYK, RGB, HEX, RAL y vinilos — matching para imprenta y digital.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "07",
    roman: "VII",
    title: "Iconografía",
    kicker: "Un sistema, no una colección suelta.",
    items: [
      { slug: "07-trazo", t: "Sistema de trazo", d: "Grosor, remates, esquinas. Reglas geométricas reutilizables.", tiers: ["P", "M"] },
      { slug: "07-coleccion", t: "Colección base", d: "Set inicial de iconos esenciales. Ampliable sin romper coherencia.", tiers: ["M"] },
    ],
  },
  {
    n: "08",
    roman: "VIII",
    title: "Fotografía",
    kicker: "Qué cámara no elige la marca. Qué mirada sí.",
    items: [
      { slug: "08-direccion", t: "Dirección visual", d: "Encuadre, luz, sujeto. Principios no negociables de estilo.", tiers: ["P", "M"] },
      { slug: "08-tratamiento", t: "Tratamiento", d: "Color grading, B&N, grano, post. Coherencia entre fotógrafos distintos.", tiers: ["P", "M"] },
      { slug: "08-moodboard", t: "Moodboard", d: "20 referencias curadas. Qué sí, qué no. Con nota editorial al margen.", tiers: ["M"] },
    ],
  },
  {
    n: "09",
    roman: "IX",
    title: "Voz y tono",
    kicker: "La marca suena antes de verse.",
    items: [
      { slug: "09-principios", t: "Principios de voz", d: "Claro antes que bonito. Directo sin ser seco. Concreto sobre vago. Nombra lo exacto.", tiers: ["P", "M"] },
      { slug: "09-registro", t: "Registro por canal", d: "Landing, propuesta, email, manual, social. Adaptación sin perder ADN.", tiers: ["P", "M"] },
      { slug: "09-glosario", t: "Glosario aprobado", d: "Palabras y expresiones canónicas. Lo que decimos literal.", tiers: ["M"] },
      { slug: "09-prohibidas", t: "Frases prohibidas", d: "Qué no decimos. Con explicación de por qué. Protección de voz frente a proveedores.", tiers: ["M"] },
    ],
  },
  {
    n: "10",
    roman: "X",
    title: "Aplicaciones",
    kicker: "Marca puesta a trabajar.",
    items: [
      { slug: "10-papeleria", t: "Papelería", d: "Tarjeta, carta, sobre, factura, firma manuscrita. El kit mínimo operativo.", tiers: ["E", "P", "M"] },
      { slug: "10-digital", t: "Digital", d: "Web, email, presentación, avatares de redes. Tokens alineados con marca.", tiers: ["E", "P", "M"] },
      { slug: "10-merch", t: "Merch", d: "Tote, pin, etiqueta, sello, packaging básico. Coherente con el sistema base.", tiers: ["P", "M"] },
      { slug: "10-senaletica", t: "Señalética", d: "Cartelería interior/exterior, wayfinding, vinilos. Reglas de escala real.", tiers: ["M"] },
    ],
  },
  {
    n: "11",
    roman: "XI",
    title: "Arquitectura",
    kicker: "Una marca rara vez va sola.",
    items: [
      { slug: "11-marca-producto", t: "Master ↔ producto", d: "Relación marca madre y submarca. Reglas de nombramiento y jerarquía visual.", tiers: ["M"] },
      { slug: "11-co-branding", t: "Co-branding y endorsement", d: "Cómo convivir con otros sellos sin canibalizarse — jerarquía visible cuando aparecemos cerca.", tiers: ["M"] },
    ],
  },
  {
    n: "12",
    roman: "XII",
    title: "Governance",
    kicker: "Un manual que no se usa no es un manual.",
    items: [
      { slug: "12-checklist", t: "Checklist de uso", d: "Antes de publicar: qué verificar. Una página imprimible para el equipo.", tiers: ["P", "M"] },
      { slug: "12-aprobacion", t: "Aprobación", d: "Quién firma qué. Flujo documentado por tipo de pieza.", tiers: ["M"] },
      { slug: "12-versionado", t: "Versionado del manual", d: "Cómo se actualiza sin romper coherencia histórica. Log público de cambios.", tiers: ["M"] },
    ],
  },
  {
    n: "13",
    roman: "XIII",
    title: "Marca en movimiento",
    kicker: "La marca ya no es solo estática.",
    items: [
      { slug: "13-motion-logo", t: "Motion del logo", d: "Entrada, salida, loop. Timing y curvas de easing canónicas.", tiers: ["M"] },
      { slug: "13-microinteracciones", t: "Microinteracciones", d: "Hover, carga, transición. 150–300ms con easing propio documentado.", tiers: ["M"] },
      { slug: "13-video", t: "Video y reel", d: "Aspect ratios, cortinillas, subtítulos, lower thirds — sin improvisar por publicación.", tiers: ["M"] },
    ],
  },
  {
    n: "14",
    roman: "XIV",
    title: "Extensiones",
    kicker: "Donde la marca toca el mundo real.",
    items: [
      { slug: "14-accesibilidad", t: "Accesibilidad", d: "WCAG AA. Contraste, tipografía legible, alt-text, foco visible. No opcional.", tiers: ["P", "M"] },
      { slug: "14-digital-ui", t: "Sistema digital", d: "Tokens, componentes base, estados, dark mode — para equipos de producto.", tiers: ["M"] },
      { slug: "14-territorial", t: "Territorial", d: "Adaptación por idioma, mercado y sensibilidad cultural — sin perder marca.", tiers: ["M"] },
    ],
  },
  {
    n: "15",
    roman: "XV",
    title: "Servicio",
    kicker: "Cómo se contrata, cómo se entrega.",
    items: [
      { slug: "15-proceso", t: "Proceso", d: "Brief, confirmación, producción, revisiones, entrega. Cinco pasos con plazo documentado por tier.", tiers: ["E", "P", "M"] },
      { slug: "15-entrega", t: "Entrega editorial", d: "Qué sale por la puerta — PDF A4 landscape, Figma editable, assets empaquetados y, en Premium, libro físico encuadernado.", tiers: ["E", "P", "M"] },
      { slug: "15-post-entrega", t: "Governance post-entrega", d: "Soporte durante 30 días + enlace permanente al manual. Versionado si el cliente rebrand.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "16",
    roman: "XVI",
    title: "Portfolio",
    kicker: "Datos verificables, no mockups.",
    items: [
      { slug: "16-casos", t: "Casos documentados", d: "Cada manual firmado con nombre del cliente, sector, páginas publicadas y tier. Cero casos hipotéticos, cero placeholders.", tiers: ["E", "P", "M"] },
    ],
  },
];

export const TIER_LABEL: Record<Tier, string> = {
  E: "Esencial",
  P: "Profesional",
  M: "Premium",
};
