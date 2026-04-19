/**
 * Glosario editorial Tramarca — 40 términos clave que aparecen en los
 * manuales que producimos y los blogs que publicamos. Each term has
 * categoria + definicion + ejemplo + relacionado.
 *
 * URL pattern: /glosario#{slug}
 * Schema: DefinedTermSet + DefinedTerm en JSON-LD.
 */

export type Categoria =
  | "tipografia"
  | "color"
  | "layout"
  | "manual"
  | "produccion";

export type TerminoGlosario = {
  slug: string;
  termino: string;
  categoria: Categoria;
  definicion: string;
  ejemplo?: string;
  relacionados?: string[];
};

export const CATEGORIAS: Record<Categoria, string> = {
  tipografia: "Tipografía",
  color: "Color",
  layout: "Layout y composición",
  manual: "Manual de marca",
  produccion: "Producción y oficio",
};

export const TERMINOS: TerminoGlosario[] = [
  // — Tipografía (10)
  {
    slug: "tipografia",
    termino: "Tipografía",
    categoria: "tipografia",
    definicion:
      "Disciplina del diseño de letras y su composición. En un manual de marca, el sistema tipográfico define qué familias se usan, en qué pesos y para qué función específica.",
    ejemplo:
      "Tramarca v4 usa dos familias: Satoshi para narrativa y IBM Plex Mono para datos técnicos.",
    relacionados: ["wordmark", "jerarquia-tipografica", "variable-font"],
  },
  {
    slug: "kerning",
    termino: "Kerning",
    categoria: "tipografia",
    definicion:
      "Ajuste fino del espacio entre dos letras específicas para corregir tensiones visuales que la fuente no resuelve por defecto. Se aplica par por par.",
    ejemplo:
      "El par AV o To suele necesitar kerning negativo para evitar que se vean separados.",
    relacionados: ["tracking", "letterform"],
  },
  {
    slug: "tracking",
    termino: "Tracking",
    categoria: "tipografia",
    definicion:
      "Espaciado uniforme entre todas las letras de un bloque de texto. A diferencia del kerning (que ajusta pares), el tracking afecta a toda una palabra, línea o párrafo.",
    ejemplo:
      "Mastheads en Tramarca llevan tracking negativo (-2%) para densidad visual; captions en mono llevan tracking positivo (+30%) para legibilidad técnica.",
    relacionados: ["kerning", "leading"],
  },
  {
    slug: "leading",
    termino: "Leading (interlineado)",
    categoria: "tipografia",
    definicion:
      "Distancia vertical entre líneas base de texto consecutivas. Define el ritmo de lectura y la densidad visual del bloque.",
    ejemplo:
      "Body 16pt con leading 24pt da ratio 1.5 — estándar editorial cómodo. Datos técnicos en 11pt con leading 16pt mantienen densidad sin sacrificar legibilidad.",
    relacionados: ["baseline-grid", "tracking"],
  },
  {
    slug: "x-height",
    termino: "x-height (altura de x)",
    categoria: "tipografia",
    definicion:
      "Altura de las letras minúsculas sin ascendentes ni descendentes (literalmente la altura de la 'x'). Determina la presencia óptica de una tipografía.",
    ejemplo:
      "Inter y Helvetica Now tienen x-height generoso para legibilidad digital; Garamond tiene x-height bajo, lo que la hace elegante en imprenta pero difícil en pantalla pequeña.",
    relacionados: ["letterform", "optical-size"],
  },
  {
    slug: "optical-size",
    termino: "Optical size (opsz)",
    categoria: "tipografia",
    definicion:
      "Eje variable que adapta la forma de los caracteres al tamaño en que se van a usar. Una versión opsz para 14pt no se ve igual que la versión opsz para 96pt: el contraste, la apertura del cuenco y el peso cambian.",
    ejemplo:
      "Fraunces (variable font) tiene opsz de 9 a 144. En Shamusic v4, el mantra usa Fraunces opsz 144 para mantener contraste editorial dramático a 96pt.",
    relacionados: ["variable-font", "x-height"],
  },
  {
    slug: "variable-font",
    termino: "Variable font (axis variable)",
    categoria: "tipografia",
    definicion:
      "Formato tipográfico que permite interpolar pesos, anchos, óptica y otros ejes dentro de un solo archivo. Reduce peso de descarga y permite ajustes finos sin instalar variantes separadas.",
    ejemplo:
      "Inter Variable cubre del weight 100 al 900 en un único archivo de 350kb; el equivalente en estáticos serían nueve archivos.",
    relacionados: ["optical-size", "tipografia"],
  },
  {
    slug: "wordmark",
    termino: "Wordmark",
    categoria: "tipografia",
    definicion:
      "Logo construido íntegramente desde el nombre de la marca tratado tipográficamente, sin símbolo aparte. La forma viene del letterform, no de un icono añadido.",
    ejemplo:
      "Google, Mailchimp, FedEx y Tramarca son wordmarks. Apple es lo contrario — symbol mark sin texto.",
    relacionados: ["letterform", "tipografia"],
  },
  {
    slug: "letterform",
    termino: "Letterform",
    categoria: "tipografia",
    definicion:
      "Forma específica de una letra dentro de una tipografía. Cada decisión sobre curva, contraste y proporción del letterform afecta cómo lee el ojo el conjunto.",
    ejemplo:
      "El letterform de la 'a' en Satoshi tiene cuenco abierto que mantiene legibilidad a 14pt y se vuelve declarativo a 96pt.",
    relacionados: ["wordmark", "x-height"],
  },
  {
    slug: "jerarquia-tipografica",
    termino: "Jerarquía tipográfica",
    categoria: "tipografia",
    definicion:
      "Sistema de niveles tipográficos (H1, H2, H3, body, caption, mono) que organiza el contenido por importancia y función. Cada nivel tiene tamaño, peso, color y leading definidos.",
    ejemplo:
      "Tramarca v4 documenta 5 niveles: H1 96pt, H2 48pt, H3 32pt, body 16pt, mono 11pt.",
    relacionados: ["tipografia", "leading"],
  },

  // — Color (5)
  {
    slug: "paleta-cromatica",
    termino: "Paleta cromática",
    categoria: "color",
    definicion:
      "Conjunto cerrado de colores que componen la identidad visual de una marca, con role operativo asignado a cada uno. Una paleta sin roles documentados es solo una lista de colores.",
    ejemplo:
      "Una paleta operativa documenta: este color para fondos principales, este para texto secundario, este como acento y solo en estos contextos.",
    relacionados: ["regla-60-30-10", "acento-de-marca", "hex-code"],
  },
  {
    slug: "hex-code",
    termino: "Hex code",
    categoria: "color",
    definicion:
      "Notación hexadecimal de un color (#RRGGBB) usada en web y diseño digital. Cada par representa la intensidad de rojo, verde y azul del 0 al 255.",
    ejemplo:
      "#0C0C0C es el negro mate de Tramarca — no #000 puro, porque el #000 produce contraste vibratorio con cream papel.",
    relacionados: ["paleta-cromatica", "color-space"],
  },
  {
    slug: "color-space",
    termino: "Color space (RGB / CMYK)",
    categoria: "color",
    definicion:
      "Espacio de color en el que se trabaja. RGB (rojo, verde, azul, basado en luz) para digital. CMYK (cian, magenta, amarillo, negro, basado en pigmento) para impresión.",
    ejemplo:
      "Un manual completo documenta cada color en sus dos espacios — porque el verde RGB de pantalla no es el mismo verde CMYK que sale de la imprenta.",
    relacionados: ["pantone", "print-ready"],
  },
  {
    slug: "regla-60-30-10",
    termino: "Regla 60/30/10",
    categoria: "color",
    definicion:
      "Proporción operativa de uso de color en una composición: 60% del área para color dominante (fondo), 30% para color secundario, 10% para acento. Mantiene jerarquía visual sin saturación.",
    ejemplo:
      "Tramarca aplica regla invertida: 60% papel cream, 30% negro mate, 10% lacre como acento.",
    relacionados: ["acento-de-marca", "paleta-cromatica"],
  },
  {
    slug: "acento-de-marca",
    termino: "Acento de marca",
    categoria: "color",
    definicion:
      "Color saturado único reservado para signaling estratégico — separadores, estado activo, signature tipográfica, period del wordmark. Aparece poco para que su aparición tenga peso.",
    ejemplo:
      "El lacre de Tramarca es el acento; aparece exclusivamente en el 'punto final' de cada wordmark significativo y nunca dos veces en la misma página.",
    relacionados: ["regla-60-30-10", "paleta-cromatica"],
  },

  // — Layout y composición (8)
  {
    slug: "reticula",
    termino: "Retícula (grid)",
    categoria: "layout",
    definicion:
      "Sistema invisible de columnas, filas y módulos sobre el que se compone la página. Define dónde puede ir cada elemento. Sin retícula, cada página es una decisión nueva.",
    ejemplo:
      "Manuales Tramarca usan retícula de 12 columnas con gutters proporcionales — cubre desde fichas técnicas densas hasta spreads editoriales abiertos.",
    relacionados: ["baseline-grid", "gutter", "spread"],
  },
  {
    slug: "baseline-grid",
    termino: "Baseline grid",
    categoria: "layout",
    definicion:
      "Cuadrícula horizontal invisible (típicamente a 4pt) sobre la que se alinean todas las líneas base del texto. Produce ritmo vertical sostenido — la sensación de orden que el lector percibe sin identificar.",
    ejemplo:
      "Body 16pt con leading 16pt (4×4), H2 con leading 56pt (4×14), márgenes de sección 64pt (4×16). Todo múltiplo de 4.",
    relacionados: ["reticula", "leading"],
  },
  {
    slug: "gutter",
    termino: "Gutter (canalón)",
    categoria: "layout",
    definicion:
      "Espacio vertical entre dos columnas de una retícula. Sin gutter las columnas se tocan; con gutter excesivo las columnas se desconectan. La medida correcta es disciplina, no decoración.",
    ejemplo:
      "Manuales Tramarca usan gutters de 24pt entre columnas, alineados al baseline 4pt como todo lo demás.",
    relacionados: ["reticula", "margen"],
  },
  {
    slug: "margen",
    termino: "Margen",
    categoria: "layout",
    definicion:
      "Espacio en blanco que rodea el contenido por los cuatro lados de la página. En un manual editorial, los márgenes son tan estructurales como el cuerpo de texto.",
    ejemplo:
      "Manuales A4 horizontal con márgenes 48pt arriba y abajo, 56pt a los lados — proporción asimétrica heredada de tradición editorial Pentagram.",
    relacionados: ["gutter", "reticula"],
  },
  {
    slug: "jerarquia-visual",
    termino: "Jerarquía visual",
    categoria: "layout",
    definicion:
      "Sistema de prioridades visuales que indica al lector el orden de lectura. Se construye con tamaño, peso, color, espacio y contraste. Sin jerarquía clara el lector se pierde.",
    ejemplo:
      "Una portada con masthead 96pt, kicker mono 11pt y fecha en signature pequeña instala jerarquía sin necesidad de instrucciones.",
    relacionados: ["jerarquia-tipografica", "composicion-editorial"],
  },
  {
    slug: "composicion-editorial",
    termino: "Composición editorial",
    categoria: "layout",
    definicion:
      "Disposición de elementos en una página siguiendo principios de magazine y libro: jerarquía declarada, espacios respiratorios, ritmo entre secciones, signposting de capítulo.",
    ejemplo:
      "Tramarca v4 aplica composición editorial estilo Stripe Press / Eye Magazine — masthead claro, body extenso, captions diferenciados, separadores rítmicos.",
    relacionados: ["jerarquia-visual", "spread"],
  },
  {
    slug: "spread",
    termino: "Spread",
    categoria: "layout",
    definicion:
      "Doble página vista al hojear un libro o manual. La unidad real de composición editorial — el ojo lee dos páginas a la vez, no una.",
    ejemplo:
      "Un manual de 58 páginas tiene 29 spreads. Cada spread se compone como unidad, no como dos páginas independientes pegadas.",
    relacionados: ["composicion-editorial", "maqueta"],
  },
  {
    slug: "maqueta",
    termino: "Maqueta",
    categoria: "layout",
    definicion:
      "Esquema estructural de una publicación que define dónde va cada tipo de contenido. La plantilla bajo la cual cada spread es decisión consciente, no improvisación.",
    ejemplo:
      "Cada manual Tramarca arranca con una maqueta de 14 capítulos antes de producir contenido. La maqueta es el primer entregable interno antes del primer spread.",
    relacionados: ["spread", "reticula"],
  },

  // — Manual de marca (10)
  {
    slug: "manual-de-marca",
    termino: "Manual de marca",
    categoria: "manual",
    definicion:
      "Documento operativo que codifica el sistema visual y verbal de una marca. Define qué se puede hacer, qué no, y por qué. A diferencia de un brand kit, contiene reglas y excepciones, no solo activos.",
    ejemplo:
      "Un manual Tramarca tiene 20-50 páginas con sistema, paleta, tipografía, aplicaciones y voz documentadas capítulo a capítulo.",
    relacionados: ["brand-book", "brand-kit", "brand-guidelines"],
  },
  {
    slug: "brand-book",
    termino: "Brand book",
    categoria: "manual",
    definicion:
      "Documento estratégico que articula misión, visión, propósito, audiencia y posicionamiento de la marca. No es manual operativo — es el porqué que justifica las decisiones del manual.",
    ejemplo:
      "El brand book responde 'por qué existimos'. El manual de marca responde 'cómo nos vemos'. Confundir ambos es la fuente de muchas cotizaciones erróneas.",
    relacionados: ["manual-de-marca", "brand-guidelines"],
  },
  {
    slug: "brand-kit",
    termino: "Brand kit",
    categoria: "manual",
    definicion:
      "Paquete mínimo de activos visuales: logo en variantes, paleta de color, tipografía elegida y poco más. Sirve para arrancar pero no contiene reglas operativas ni governance.",
    ejemplo:
      "Un brand kit cabe en 5-10 láminas. Un manual de marca tiene 20-50 páginas. La diferencia de precio entre ambos refleja la diferencia de profundidad.",
    relacionados: ["manual-de-marca", "brand-guidelines"],
  },
  {
    slug: "identidad-visual",
    termino: "Identidad visual",
    categoria: "manual",
    definicion:
      "Conjunto de elementos visuales que componen el reconocimiento de una marca: logo, paleta, tipografía, sistema gráfico. La identidad visual es lo que vives; el manual es donde se documenta.",
    ejemplo:
      "Una identidad visual sin manual operativo se diluye al primer cambio de equipo o proveedor.",
    relacionados: ["sistema-de-marca", "manual-de-marca"],
  },
  {
    slug: "sistema-de-marca",
    termino: "Sistema de marca",
    categoria: "manual",
    definicion:
      "Conjunto coordinado de identidad visual, voz verbal, principios, governance y aplicaciones. Cuando todos estos elementos operan con reglas comunes, hay sistema. Sin reglas, hay solo activos sueltos.",
    ejemplo:
      "Tramarca define sistema de marca como 'lo que tu equipo puede aplicar el lunes sin preguntar'.",
    relacionados: ["identidad-visual", "manual-de-marca", "governance"],
  },
  {
    slug: "brief",
    termino: "Brief",
    categoria: "manual",
    definicion:
      "Documento inicial que captura el contexto del proyecto: negocio, audiencia, activos existentes, restricciones, expectativas. Brief sólido = proyecto sólido. Brief débil = proyecto que se infla.",
    ejemplo:
      "Tramarca usa brief estructurado de 23 preguntas en 5 bloques. Cobertura completa en 45-60 minutos por el cliente.",
    relacionados: ["manual-de-marca", "sistema-de-marca"],
  },
  {
    slug: "brand-guidelines",
    termino: "Brand guidelines",
    categoria: "manual",
    definicion:
      "Sinónimo anglosajón de manual de marca, especialmente en tradición US/UK. La diferencia es regional, no conceptual.",
    ejemplo:
      "El término 'brand guidelines' aparece en mercados anglosajones; 'manual de marca' en mercados hispanos. NASA llamó al suyo Graphics Standards Manual (1976).",
    relacionados: ["manual-de-marca", "brand-book"],
  },
  {
    slug: "aplicaciones-de-marca",
    termino: "Aplicaciones de marca",
    categoria: "manual",
    definicion:
      "Implementaciones concretas del sistema de marca en piezas reales: papelería, web, packaging, RRSS, signage, presentaciones. Sin aplicaciones documentadas, el manual queda en abstracto.",
    ejemplo:
      "Un manual Tramarca Premium documenta 14 aplicaciones distintas con spec técnica y reglas de excepción para cada una.",
    relacionados: ["sistema-de-marca", "manual-de-marca"],
  },
  {
    slug: "governance",
    termino: "Governance de marca",
    categoria: "manual",
    definicion:
      "Capítulo del manual que define quién aprueba qué cuando entra un proveedor externo. Sin governance documentada, cada freelance reinventa criterio y el sistema se diluye en seis meses.",
    ejemplo:
      "Governance Shamusic: cualquier asset de canal oficial pasa por review interno; las excepciones aprobadas se incorporan a revisión trimestral del manual.",
    relacionados: ["sistema-de-marca", "aplicaciones-de-marca"],
  },
  {
    slug: "brand-voice",
    termino: "Brand voice (voz de marca)",
    categoria: "manual",
    definicion:
      "Personalidad verbal codificada de la marca: tono, registro, palabras prohibidas, palabras propias. Cómo escribimos cuando nadie nos mira, en cualquier canal.",
    ejemplo:
      "Voz Tramarca: claro antes que sofisticado, directo antes que diplomático, concreto antes que aspiracional, nombra-lo-exacto antes que generalizar.",
    relacionados: ["sistema-de-marca", "brand-book"],
  },

  // — Producción y oficio (7)
  {
    slug: "bleed",
    termino: "Bleed (sangrado)",
    categoria: "produccion",
    definicion:
      "Margen extra de imagen o color que sobresale del área final de corte. Necesario porque las cortadoras industriales tienen tolerancia de ±1mm — sin sangrado quedan filos blancos.",
    ejemplo:
      "Un manual A4 listo para imprenta lleva 3mm de bleed por cada lado. Sin bleed la imprenta rechaza el archivo o entrega defectuoso.",
    relacionados: ["trim", "print-ready"],
  },
  {
    slug: "trim",
    termino: "Trim (corte)",
    categoria: "produccion",
    definicion:
      "Línea de corte final del documento. Lo que queda dentro del trim es lo que el cliente recibe; lo que está en bleed se recorta.",
    ejemplo:
      "PDF para imprenta documenta dos cajas: trim box (área final) y bleed box (área con sangrado de 3mm). Ambas en el mismo archivo.",
    relacionados: ["bleed", "print-ready"],
  },
  {
    slug: "mockup",
    termino: "Mockup",
    categoria: "produccion",
    definicion:
      "Representación realista de un diseño aplicado en contexto físico (taza, camiseta, fachada, papelería). Sirve para visualizar antes de producir, no como producción real.",
    ejemplo:
      "Un mockup de tarjeta sobre madera en luz cinematográfica vende la idea, pero la imprenta necesita PDF/X listo para producción.",
    relacionados: ["print-ready", "aplicaciones-de-marca"],
  },
  {
    slug: "print-ready",
    termino: "Print-ready (PDF/X)",
    categoria: "produccion",
    definicion:
      "PDF preparado para imprenta profesional según estándar PDF/X-1a o PDF/X-4. Incluye fonts embebidos, color CMYK, bleed, trim y resolución mínima.",
    ejemplo:
      "Manuales Tramarca se entregan en PDF/X-4 con verificación verapdf antes de cliente — cero sorpresas en la imprenta.",
    relacionados: ["bleed", "color-space", "cmyk"],
  },
  {
    slug: "pantone",
    termino: "Pantone",
    categoria: "produccion",
    definicion:
      "Sistema cerrado de tintas con código universal (PMS) para impresión consistente entre proveedores. Garantiza que el mismo verde sale igual en imprenta de Madrid o Tokyo.",
    ejemplo:
      "Una marca corporativa documenta su color como 'Pantone 186 C' además del CMYK y RGB equivalentes. La imprenta usa la lata exacta.",
    relacionados: ["color-space", "cmyk"],
  },
  {
    slug: "cmyk",
    termino: "CMYK",
    categoria: "produccion",
    definicion:
      "Sistema de color sustractivo basado en cuatro tintas: cian, magenta, amarillo y negro (key). Estándar industrial de impresión profesional.",
    ejemplo:
      "Lacre Tramarca en CMYK aproximado: C0 M70 Y75 K20. En RGB: #C4553A. Pantone: 1797 C. Tres notaciones del mismo color para tres contextos.",
    relacionados: ["color-space", "pantone"],
  },
  {
    slug: "imprenta",
    termino: "Imprenta",
    categoria: "produccion",
    definicion:
      "Proceso industrial de producción física en papel. Manuales editoriales se imprimen en offset (tirada media-alta) o digital (tirada corta). Cada proceso tiene sus propias restricciones y libertades.",
    ejemplo:
      "Manual Tramarca v4 versión impresa: papel cream 120g interior + 350g cubierta, encuadernación cosida, foil lacre en wordmark.",
    relacionados: ["print-ready", "cmyk"],
  },
];

export function getTermino(slug: string): TerminoGlosario | undefined {
  return TERMINOS.find((t) => t.slug === slug);
}

export function getTerminosPorCategoria(categoria: Categoria): TerminoGlosario[] {
  return TERMINOS.filter((t) => t.categoria === categoria);
}
