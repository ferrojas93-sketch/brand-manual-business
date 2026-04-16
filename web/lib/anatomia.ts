export type Tier = "E" | "P" | "M"; // Esencial, Profesional, preMium

export type AnatomiaItem = {
  slug: string;
  t: string;
  d: string;
  tiers: Tier[]; // tiers where this component is included
};

export type AnatomiaChapter = {
  n: string;
  title: string;
  kicker: string;
  items: AnatomiaItem[];
};

export const ANATOMIA: AnatomiaChapter[] = [
  {
    n: "01",
    title: "Fundamentos",
    kicker: "El punto de partida. La idea antes de la forma.",
    items: [
      { slug: "01-proposito", t: "Propósito", d: "Para qué existe la marca. Una frase que resista cinco años.", tiers: ["E", "P", "M"] },
      { slug: "01-vision", t: "Visión", d: "Hacia dónde vamos. El lugar al que queremos llegar.", tiers: ["E", "P", "M"] },
      { slug: "01-valores", t: "Valores", d: "Lo que no negociamos. Tres o cuatro principios operativos.", tiers: ["E", "P", "M"] },
      { slug: "01-personalidad", t: "Personalidad", d: "Si la marca fuera persona. Arquetipo y carácter.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "02",
    title: "Sistema de logo",
    kicker: "No es el logo. Es el sistema que lo sostiene.",
    items: [
      { slug: "02-marca-principal", t: "Marca principal", d: "El master. Construcción, proporciones, retícula.", tiers: ["E", "P", "M"] },
      { slug: "02-variantes", t: "Variantes", d: "Horizontal, vertical, iso, responsive, monograma.", tiers: ["E", "P", "M"] },
      { slug: "02-zona-exclusion", t: "Zona de exclusión", d: "Espacio mínimo alrededor. Tamaños mínimos impresos y digitales.", tiers: ["E", "P", "M"] },
      { slug: "02-usos-incorrectos", t: "Usos incorrectos", d: "Qué no se puede hacer. Explícito. Sin interpretación posible.", tiers: ["P", "M"] },
    ],
  },
  {
    n: "03",
    title: "Tipografía",
    kicker: "Lo que se lee es lo que es la marca.",
    items: [
      { slug: "03-display", t: "Familia display", d: "Para titulares. Peso, corte, carácter.", tiers: ["E", "P", "M"] },
      { slug: "03-texto", t: "Familia texto", d: "Para cuerpo. Legibilidad larga. Pareja funcional.", tiers: ["E", "P", "M"] },
      { slug: "03-jerarquia", t: "Jerarquía", d: "H1–H6, párrafo, lede, caption. Reglas por contexto.", tiers: ["P", "M"] },
      { slug: "03-escalas", t: "Sistema de escalas", d: "Ratio modular, escalas responsive, líneas base.", tiers: ["M"] },
    ],
  },
  {
    n: "04",
    title: "Color",
    kicker: "El color no decora. Clasifica.",
    items: [
      { slug: "04-primarios", t: "Primarios", d: "Los tres colores irrenunciables. Con proporciones.", tiers: ["E", "P", "M"] },
      { slug: "04-secundarios", t: "Secundarios + acento", d: "Paleta extendida. Cuándo se usa, cuándo no.", tiers: ["P", "M"] },
      { slug: "04-usos-jerarquia", t: "Usos por jerarquía", d: "Regla 70/20/10. Aplicaciones fondo, texto, acento.", tiers: ["P", "M"] },
      { slug: "04-valores-pantone", t: "Valores técnicos", d: "Pantone C/U, CMYK, RGB, HEX, códigos RAL y vinilos.", tiers: ["M"] },
    ],
  },
  {
    n: "05",
    title: "Iconografía",
    kicker: "Un sistema, no una colección suelta.",
    items: [
      { slug: "05-trazo", t: "Sistema de trazo", d: "Grosor, remates, esquinas. Reglas geométricas.", tiers: ["P", "M"] },
      { slug: "05-tamanos", t: "Tamaños", d: "Escala por contexto. Mínimos legibles.", tiers: ["P", "M"] },
      { slug: "05-coleccion", t: "Colección base", d: "Set inicial: 24 iconos esenciales. Ampliables.", tiers: ["M"] },
      { slug: "05-icono-donts", t: "Do & Don&apos;ts", d: "Construcción correcta vs. bastardeos comunes.", tiers: ["M"] },
    ],
  },
  {
    n: "06",
    title: "Fotografía",
    kicker: "Qué cámara no elige la marca. Qué mirada sí.",
    items: [
      { slug: "06-direccion", t: "Dirección visual", d: "Encuadre, luz, sujeto. Principios no negociables.", tiers: ["P", "M"] },
      { slug: "06-tratamiento", t: "Tratamiento", d: "Color grading, B&N, grano, post.", tiers: ["P", "M"] },
      { slug: "06-composicion", t: "Composición", d: "Regla de tercios, balance, aire. Plantillas reutilizables.", tiers: ["M"] },
      { slug: "06-moodboard", t: "Moodboard", d: "20 referencias. Qué sí, qué no. Con nota.", tiers: ["M"] },
    ],
  },
  {
    n: "07",
    title: "Voz y tono",
    kicker: "La marca suena antes de verse.",
    items: [
      { slug: "07-principios", t: "Principios de voz", d: "Tres adjetivos operativos. Cómo suena cuando habla.", tiers: ["P", "M"] },
      { slug: "07-registro", t: "Registro por canal", d: "Email, web, redes, papel. Adaptación sin perder ADN.", tiers: ["P", "M"] },
      { slug: "07-glosario", t: "Glosario aprobado", d: "Palabras y expresiones canónicas.", tiers: ["M"] },
      { slug: "07-prohibidas", t: "Frases prohibidas", d: "Qué no decimos. Con explicación de por qué.", tiers: ["M"] },
    ],
  },
  {
    n: "08",
    title: "Aplicaciones",
    kicker: "Marca puesta a trabajar.",
    items: [
      { slug: "08-papeleria", t: "Papelería", d: "Tarjeta, carta, sobre, factura, firma manuscrita.", tiers: ["E", "P", "M"] },
      { slug: "08-digital", t: "Digital", d: "Web, email, presentación, avatares de redes.", tiers: ["E", "P", "M"] },
      { slug: "08-merch", t: "Merch", d: "Tote, pin, etiqueta, sello, packaging básico.", tiers: ["P", "M"] },
      { slug: "08-senaletica", t: "Señalética", d: "Cartelería interior/exterior, wayfinding, vinilos.", tiers: ["M"] },
    ],
  },
  {
    n: "09",
    title: "Arquitectura de marca",
    kicker: "Una marca rara vez va sola.",
    items: [
      { slug: "09-marca-producto", t: "Marca ↔ producto", d: "Relación master-submarca. Reglas de nombramiento.", tiers: ["M"] },
      { slug: "09-co-branding", t: "Co-branding", d: "Cómo convivir con otros sellos sin canibalizarse.", tiers: ["M"] },
      { slug: "09-submarcas", t: "Submarcas", d: "Líneas de producto, divisiones, ediciones especiales.", tiers: ["M"] },
      { slug: "09-endorsement", t: "Endorsement", d: "Marcas patrocinadas o avaladas. Jerarquía visual.", tiers: ["M"] },
    ],
  },
  {
    n: "10",
    title: "Governance",
    kicker: "Un manual que no se usa no es un manual.",
    items: [
      { slug: "10-checklist", t: "Checklist de uso", d: "Antes de publicar: qué verificar. Una página imprimible.", tiers: ["P", "M"] },
      { slug: "10-aprobacion", t: "Aprobación", d: "Quién firma qué. Flujo por tipo de pieza.", tiers: ["M"] },
      { slug: "10-versionado", t: "Versionado del manual", d: "Cómo se actualiza sin romper coherencia histórica.", tiers: ["M"] },
      { slug: "10-formacion", t: "Formación del equipo", d: "Sesión de 90 min. Material complementario.", tiers: ["M"] },
    ],
  },
  {
    n: "11",
    title: "Marca en movimiento",
    kicker: "La marca ya no es solo estática.",
    items: [
      { slug: "11-motion-logo", t: "Motion del logo", d: "Entrada, salida, loop. Timing y curvas canónicas.", tiers: ["M"] },
      { slug: "11-microinteracciones", t: "Microinteracciones", d: "Hover, carga, transición. 150–300ms con easing propio.", tiers: ["M"] },
      { slug: "11-video", t: "Video y reel", d: "Aspect ratios, cortinillas, subtítulos, lower thirds.", tiers: ["M"] },
      { slug: "11-audio", t: "Identidad sonora", d: "Logo sonoro, jingle, tono UI. Cuándo suena y cuándo no.", tiers: ["M"] },
    ],
  },
  {
    n: "12",
    title: "Extensiones",
    kicker: "Donde la marca toca el mundo real.",
    items: [
      { slug: "12-accesibilidad", t: "Accesibilidad", d: "WCAG AA. Contraste, tipografía legible, alt-text, foco visible.", tiers: ["P", "M"] },
      { slug: "12-digital-ui", t: "Sistema digital", d: "Tokens, componentes base, estados, dark mode.", tiers: ["M"] },
      { slug: "12-territorial", t: "Territorial", d: "Adaptación por idioma, mercado y sensibilidad cultural.", tiers: ["M"] },
      { slug: "12-legal", t: "Legal y marca registrada", d: "TM, registro, usos autorizados, cesiones, derechos de imagen.", tiers: ["M"] },
    ],
  },
];

export const TIER_LABEL: Record<Tier, string> = {
  E: "Esencial",
  P: "Profesional",
  M: "Premium",
};
