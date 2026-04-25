import Link from "next/link";
import Image from "next/image";
import { FileText, ClipboardCheck, PenTool, MessagesSquare, PackageCheck } from "lucide-react";
import { ButtonLink, ButtonLinkTracked } from "@/components/Button";
import { PricingCards } from "@/components/PricingCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { SpreadFrame } from "@/components/SpreadFrame";
import { Reveal } from "@/components/Reveal";
import { ManualRequestForm } from "@/components/ManualRequestForm";
import { MANUALES } from "@/lib/manuales";
import { jsonLdGraph, serviceSchema, faqSchema } from "@/lib/schema";

const anatomia = [
  {
    n: "01",
    t: "Color",
    d: "Primarios, secundarios, ratios de uso, Pantone, CMYK, RGB, HEX. El color no decora: clasifica.",
    img: "/recursos/r01-color-swatches.png",
    alt: "Paleta cromática — muestras de color impresas para la marca",
  },
  {
    n: "02",
    t: "Tipografía",
    d: "Familias, pesos, escalas. Jerarquía reglada para titular, cuerpo y microtexto.",
    img: "/recursos/r02-type-specimen.png",
    alt: "Specimen tipográfico — familias y jerarquías documentadas",
  },
  {
    n: "03",
    t: "Grid",
    d: "Retícula editorial, márgenes, columnas. Sistema que sostiene cualquier formato.",
    img: "/recursos/r04-drafting-grid.png",
    alt: "Retícula de construcción — malla editorial con proporciones",
  },
  {
    n: "04",
    t: "Logo system",
    d: "Marca principal, variantes, monograma, clearspace, mínimos y usos prohibidos.",
    img: "/portfolio/tramarca/spread-03.jpg",
    alt: "Sistema de logo — spread con variantes y clearspace",
  },
  {
    n: "05",
    t: "Voz",
    d: "Tono, vocabulario, frases-patrón. Qué decimos, qué no, cómo suena escrito.",
    img: "/recursos/r05-hand-notes.png",
    alt: "Notas del estudio — tono de voz documentado a mano y revisado",
  },
  {
    n: "06",
    t: "Aplicaciones",
    d: "Papelería, firma, redes, presentaciones. La marca operando en el día a día.",
    img: "/portfolio/tramarca/spread-08.jpg",
    alt: "Aplicaciones — papelería y aplicaciones digitales reales",
  },
  {
    n: "07",
    t: "Guidelines",
    d: "Qué se puede y qué no. Reglas explícitas para que nadie rompa el sistema por inercia.",
    img: "/portfolio/tramarca/spread-10.jpg",
    alt: "Guidelines — normas de aplicación y usos prohibidos",
  },
  {
    n: "08",
    t: "Entregable",
    d: "PDF A4 landscape + Figma editable + assets sueltos. El sistema, no solo la foto.",
    img: "/recursos/r06-stacked-books.png",
    alt: "Manuales apilados — entregable final en PDF + Figma + assets",
  },
];

const homeFaqs = [
  {
    q: "¿Qué diferencia a Tramarca de una agencia de branding?",
    a: "Tramarca es un estudio productizado: scope cerrado, precio público, plazo publicado, entregables documentados. Una agencia tradicional hace discovery workshops, propuesta personalizada, pricing custom y timelines de 6-12 semanas. Ambos modelos son válidos según el caso. Tramarca encaja mejor para equipos que ya tienen claro el proyecto y prefieren claridad operativa. Para proyectos que necesitan un discovery profundo, una agencia tradicional puede ser mejor elección.",
  },
  {
    q: "¿Cómo aseguráis que el manual encaja con lo que necesito?",
    a: "El brief firmado antes del kickoff define exactamente el scope acordado: 23 preguntas estructuradas en 5 bloques. Cualquier ajuste durante las 2 rondas de revisión incluidas se acota contra ese brief. Si quieres ver el cuestionario antes de contratar, escríbenos y te lo enviamos.",
  },
  {
    q: "¿Qué pasa si necesito más revisiones de las incluidas?",
    a: "Si tras las revisiones incluidas quieres una ronda adicional, te pasamos presupuesto acotado antes de empezar: tarifa por horas o fija según el alcance. Lo decides tú. También puedes ampliar a un tier superior en cualquier momento pagando solo la diferencia (490→990→1.990€). Nunca aparece un extra sin que lo hayas aprobado antes por escrito.",
  },
  {
    q: "¿Cuánto cuesta un manual de marca en España?",
    a: "En agencias tradicionales un manual de marca profesional suele costar entre 1.500€ y 8.000€ más IVA, tras un proceso de discovery y propuesta personalizada. En Tramarca publicamos tres tiers con precio cerrado e IVA incluido: Esencial 490€ (20-25 páginas, 5 días), Profesional 990€ (30-40 páginas, 7 días) y Premium 1.990€ (40-50 páginas, 10 días). Lo que ves en la web es el precio final.",
  },
  {
    q: "¿Sirve Tramarca para rebrand o solo para marca nueva?",
    a: "Ambos. Los tiers Profesional y Premium funcionan especialmente bien para rebrand: partimos del activo existente, auditamos qué funciona y qué no, y reconstruimos desde sistema. Para marca nueva sin naming ni posicionamiento previo, recomendamos Premium (incluye estrategia completa e identidad verbal). Mismo precio, mismo plazo.",
  },
  {
    q: "¿Cómo y cuándo se paga?",
    a: "Pago único al kickoff en los tres tiers (Esencial, Profesional, Premium). Una vez aceptas la propuesta y firmas el brief, recibes el link de pago Stripe (tarjeta, Apple Pay, Google Pay) o el número de cuenta para transferencia SEPA. El proyecto arranca cuando confirmamos el pago: a partir de ese momento corre el contador del plazo (5/7/10 días laborables). Factura electrónica con IVA 21% desglosado emitida automáticamente.",
  },
  {
    q: "¿Qué incluye un manual de marca?",
    a: "Un manual de marca Tramarca incluye sistema de identidad visual (logo, paleta, tipografía, grid), aplicaciones (papelería, firma de email, RRSS), guidelines de uso y, según el tier, estrategia de marca, identidad verbal y plantillas Figma editables. Entregamos PDF A4 landscape y archivos fuente. Todo documentado capítulo a capítulo: 48 componentes repartidos en 12 capítulos. Puedes ver el índice completo en /anatomia.",
  },
  {
    q: "¿Cuánto tarda en entregarse un manual de marca?",
    a: "Plazo publicado y garantizado desde el kickoff con brief firmado: Esencial 5 días laborables, Profesional 7 días, Premium 10 días. No son plazos orientativos. Si el brief se firma el lunes, el manual Esencial está entregado el viernes. Las revisiones incluidas no alargan el plazo base: se cuentan como rondas acotadas dentro del proceso.",
  },
  {
    q: "¿Cuántas revisiones incluye cada tier?",
    a: "Esencial incluye 1 ronda de revisión. Profesional y Premium incluyen 2 rondas. Cada ronda cubre cambios acotados sobre la dirección ya aprobada en el brief. Los cambios de scope (añadir capítulos, rebrand total, entregables nuevos) se presupuestan aparte con precio transparente. Preferimos revisiones acotadas a revisiones ilimitadas porque protege el plazo y el foco del proyecto.",
  },
  {
    q: "¿Cuál es la diferencia entre un manual de marca y un logo?",
    a: "Un logo es un archivo. Un manual de marca es un sistema documentado: cómo se usa ese logo, con qué colores, en qué tipografías, en qué aplicaciones, con qué tono verbal y qué evitar. Un manual Tramarca te da un documento operativo de 20-50 páginas que cualquiera en tu equipo puede aplicar sin tener que preguntar cada vez. Si solo necesitas un logo aislado, hay estudios especializados que lo hacen muy bien.",
  },
  {
    q: "¿El IVA va incluido? ¿Hay costes ocultos?",
    a: "Sí, el IVA 21% está incluido en los precios publicados (490€, 990€, 1.990€). No hay fees de discovery ni tarifas por revisión adicional dentro del scope acordado. Emitimos factura electrónica española con IVA desglosado para tu contabilidad. El precio que ves es el precio final.",
  },
  {
    q: "¿Trabajáis con autónomos, PYMES o solo empresas grandes?",
    a: "Autónomos, PYMES y empresas medianas. Emitimos factura con NIF personal o CIF, sin diferencia de precio ni de scope. El cliente tipo de Tramarca factura entre 100k€ y 10M€ y necesita un sistema de marca documentado con precio y plazo claros. Empresas grandes con procesos de compra complejos suelen necesitar agencias con equipo dedicado y soporte contractual amplio.",
  },
  {
    q: "¿Atendéis fuera de Madrid? ¿Trabajáis en remoto?",
    a: "Sí. Trabajamos 100% en remoto desde Madrid para toda España y Europa. Brief estructurado online, kickoff por email, reviews por email con deadlines claras, entrega en PDF y Figma. Lo que entregamos es un documento; el proceso para fabricarlo también va por escrito.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — PAPEL split, manual-native composition (01 chapter cover + spread) */}
      <section className="relative bg-papel border-b border-negro/15 overflow-hidden">
        <div className="relative mx-auto max-w-[1720px] px-6 md:px-10 pt-10 md:pt-14">
          {/* Diagonal Lacre line cutting across (manual signature) */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line x1="0" y1="72" x2="100" y2="28" stroke="var(--color-lacre)" strokeWidth="0.18" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-24 md:pb-32">
            {/* Left column — typography block, manual-faithful */}
            <div className="lg:col-span-7 pt-2 md:pt-4">
              {/* Vertical Lacre tick aligned with H1 baseline (manual pages 3,5) */}
              <div className="flex items-start gap-6">
                <span aria-hidden className="mt-[0.18em] block w-[3px] h-[0.72em] bg-lacre shrink-0" style={{ fontSize: "clamp(3.5rem, 10.5vw, 10rem)" }} />
                <h1 className="font-sans font-black tracking-[-0.045em] leading-[0.88] text-negro"
                    style={{ fontSize: "clamp(3.5rem, 10.5vw, 10rem)" }}>
                  Tu marca,
                  <br />
                  por escrito<span className="text-lacre">.</span>
                </h1>
              </div>

              <div className="mt-14 max-w-2xl">
                <p className="text-2xl md:text-[1.75rem] text-negro leading-[1.25] font-black tracking-tight">
                  Un manual de marca documentado,
                  <br />
                  <span className="text-piedra">desde <span className="tabular-nums">490€</span></span><span className="text-lacre">.</span>
                </p>
                <p className="mt-6 max-w-xl text-base md:text-lg text-piedra leading-[1.6]">
                  Logo, colores, tipografía, tono de voz y aplicaciones — todo
                  en un PDF editorial de 20-50 páginas. Precio cerrado. Entrega
                  en 5, 7 o 10 días laborables. Lo que no se documenta, se
                  improvisa.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <ButtonLinkTracked
                  href="/contacto"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  trackAs="cta_pedir_propuesta"
                  trackProps={{ location: "home_hero" }}
                >
                  Pedir propuesta en 24h →
                </ButtonLinkTracked>
                <ButtonLinkTracked
                  href="/trabajos"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto"
                  trackAs="cta_ver_manuales"
                  trackProps={{ location: "home_hero" }}
                >
                  Ver 5 manuales publicados →
                </ButtonLinkTracked>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl border-t-2 border-negro pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">Esencial</p>
                  <p className="mt-2 text-3xl font-black text-negro tracking-tight tabular-nums">490€</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-lacre">Profesional</p>
                  <p className="mt-2 text-3xl font-black text-negro tracking-tight tabular-nums">990€<span className="text-lacre">.</span></p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">Premium</p>
                  <p className="mt-2 text-3xl font-black text-negro tracking-tight tabular-nums">1.990€</p>
                </div>
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-piedra">
                IVA incluido · Plazo publicado · Scope cerrado
              </p>
            </div>

            {/* Right column — logo specimen (Pentagram-style construction page) */}
            <div className="lg:col-span-5 relative">
              <figure
                className="relative overflow-hidden bg-negro aspect-square lg:aspect-[4/5]"
                aria-label="Specimen del punto Lacre — el icónico de Tramarca con marcas de construcción"
              >
                {/* Background grid — very subtle */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #F4F0EB 1px, transparent 1px), linear-gradient(to bottom, #F4F0EB 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                {/* Top mono caption row */}
                <div className="absolute top-5 left-5 right-5 md:top-7 md:left-7 md:right-7 flex items-start justify-between z-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-papel/55">
                    Cap. 02 · Identidad
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-papel/55">
                    v4 · 2026
                  </p>
                </div>

                {/* Centered specimen — Lacre dot with construction marks */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 md:gap-12 z-10">
                  <div className="relative">
                    {/* Crosshair construction marks */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 -top-12 md:-top-14 -translate-x-1/2 h-8 md:h-10 w-px bg-papel/25"
                    />
                    <span
                      aria-hidden
                      className="absolute left-1/2 -bottom-12 md:-bottom-14 -translate-x-1/2 h-8 md:h-10 w-px bg-papel/25"
                    />
                    <span
                      aria-hidden
                      className="absolute top-1/2 -left-12 md:-left-14 -translate-y-1/2 w-8 md:w-10 h-px bg-papel/25"
                    />
                    <span
                      aria-hidden
                      className="absolute top-1/2 -right-12 md:-right-14 -translate-y-1/2 w-8 md:w-10 h-px bg-papel/25"
                    />

                    {/* The Lacre dot — the brand's icónico */}
                    <div
                      className="rounded-full bg-lacre shadow-[0_0_60px_-20px_rgba(196,85,58,0.5)]"
                      style={{ width: "clamp(110px, 19vw, 200px)", aspectRatio: "1 / 1" }}
                    />

                    {/* Hex annotation, right of the dot */}
                    <p className="absolute left-full top-1/2 -translate-y-1/2 ml-12 md:ml-16 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-papel/50 whitespace-nowrap hidden sm:block">
                      Lacre · #C4553A
                    </p>
                  </div>

                  {/* Wordmark below */}
                  <p className="font-sans font-black text-2xl md:text-3xl tracking-[-0.03em] text-papel">
                    Tramarca<span className="text-lacre">.</span>
                  </p>
                </div>

                {/* Bottom mono caption row */}
                <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7 flex items-end justify-between z-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-papel/55">
                    El Punto Final
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-papel/55">
                    Specimen 02
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* Hero bottom ticker */}
        <div className="mt-0 border-t border-negro/15 bg-negro text-papel overflow-hidden">
          <div className="flex gap-12 py-4 whitespace-nowrap animate-marquee">
            {Array.from({ length: 2 }).map((_, r) => (
              <div
                key={r}
                className="flex gap-12 items-center font-mono text-xs uppercase tracking-widest shrink-0"
              >
                <span>490€ Esencial</span>
                <span className="text-lacre">·</span>
                <span>IVA incluido</span>
                <span className="text-lacre">·</span>
                <span>Entrega en 5 días</span>
                <span className="text-lacre">·</span>
                <span>990€ Profesional</span>
                <span className="text-lacre">·</span>
                <span>IVA incluido</span>
                <span className="text-lacre">·</span>
                <span>Entrega en 7 días</span>
                <span className="text-lacre">·</span>
                <span>1.990€ Premium</span>
                <span className="text-lacre">·</span>
                <span>IVA incluido</span>
                <span className="text-lacre">·</span>
                <span>Entrega en 10 días</span>
                <span className="text-lacre">·</span>
                <span>Tu marca sin improvisar</span>
                <span className="text-lacre">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué entregamos — flatlay product shot editorial */}
      <section className="bg-papel border-b border-negro/15">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                Qué entregamos
              </p>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Un sistema, no un PDF suelto<span className="text-lacre">.</span>
              </h2>
              <p className="mt-8 text-lg text-piedra leading-[1.6] max-w-xl">
                Manual editorial + aplicaciones + retícula + papelería + assets
                listos para Figma. Todo empaquetado, todo documentado, todo
                usable desde el día uno<span className="text-lacre">.</span>
              </p>
              <ul className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.25em] text-piedra">
                <li><span className="text-lacre">·</span>&nbsp; PDF A4 landscape editable</li>
                <li><span className="text-lacre">·</span>&nbsp; Biblioteca Figma con variables</li>
                <li><span className="text-lacre">·</span>&nbsp; SVG + PNG @1x/2x/3x</li>
                <li><span className="text-lacre">·</span>&nbsp; Tokens CSS + tipografía documentada</li>
              </ul>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="relative aspect-[16/9] overflow-hidden bg-arena border border-negro/10 shadow-[0_40px_80px_-30px_rgba(12,12,12,0.3)]">
                <Image
                  src="/hero-v5/home-system-flatlay.jpg"
                  alt="Sistema de marca Tramarca completo — libro encuadernado, manual abierto, papelería y tarjetas con acento lacre"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  priority
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/70 via-negro/20 to-transparent p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-lacre">
                    Fig. 02 · Entregable completo
                  </p>
                  <p className="mt-1 text-papel font-black text-sm md:text-base leading-tight">
                    Manual + aplicaciones + papelería + Figma<span className="text-lacre">.</span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba radical — fondo claro para respetar contraste con cover */}
      <section className="bg-arena border-y border-negro/15">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-lacre">
              Nuestro manual
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Este es el nuestro.
              <br />
              <span className="text-piedra">Para que veas cómo trabajamos.</span>
            </h2>
            <p className="mt-8 text-lg text-piedra leading-relaxed max-w-xl">
              Cincuenta y ocho páginas. Tipografía Satoshi, sistema editorial
              con lacre como acento, voz documentada capítulo a capítulo. Hecho
              por nosotros para nosotros, bajo el mismo estándar que entregamos
              a cliente.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLinkTracked
                href="/trabajos/tramarca"
                variant="primary"
                size="lg"
                trackAs="cta_ver_manual_tramarca"
                trackProps={{ location: "home_manual_section" }}
              >
                Ver manual Tramarca (58pp) →
              </ButtonLinkTracked>
              <ButtonLinkTracked
                href="#pedir-manual"
                variant="ghost"
                size="lg"
                trackAs="cta_descargar_manual"
                trackProps={{ location: "home_manual_section" }}
              >
                Descargar PDF
              </ButtonLinkTracked>
            </div>
          </div>
          <div className="relative aspect-[1756/1242] bg-papel border border-negro/15 overflow-hidden shadow-[0_30px_60px_-20px_rgba(12,12,12,0.3)]">
            <Image
              src="/portfolio/tramarca-cover.jpg"
              alt="Tramarca — portada del manual propio 58 páginas — matte black con punto lacre"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pedir manual — gated PDF */}
      <section id="pedir-manual" className="bg-papel border-b border-negro/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                El manual, en tu bandeja
              </p>
              <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Pide el manual<span className="text-lacre">.</span>
                <br />
                <span className="text-piedra">Te lo mandamos ahora<span className="text-lacre">.</span></span>
              </h2>
              <p className="mt-6 max-w-lg text-lg text-piedra leading-[1.6]">
                Cincuenta y ocho páginas, PDF editorial. Déjanos tu email y te
                llega al momento — lo abres, lo hojeas y decides si encaja<span className="text-lacre">.</span>
              </p>
              <ul className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.25em] text-piedra">
                <li><span className="text-lacre">·</span>&nbsp; 58 páginas <span className="text-lacre">·</span> 16 capítulos <span className="text-lacre">·</span> 48 componentes</li>
                <li><span className="text-lacre">·</span>&nbsp; Tipografía Satoshi + IBM Plex Mono</li>
                <li><span className="text-lacre">·</span>&nbsp; Paleta, voz, aplicaciones reales</li>
                <li><span className="text-lacre">·</span>&nbsp; Enlace válido 24h · respuesta en &lt;1 min</li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <ManualRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona — proceso en 5 pasos */}
      <section className="bg-papel border-t-2 border-negro/15 border-b border-negro/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-6xl">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                  Cómo trabajamos contigo
                </p>
                <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                  Del brief al manual<span className="text-lacre">.</span>
                  <br />
                  <span className="text-piedra">En cinco pasos<span className="text-lacre">.</span></span>
                </h2>
              </div>
              <p className="max-w-md text-base md:text-lg text-piedra leading-[1.55]">
                Recibes un cuestionario, lo respondes, confirmamos dirección y
                producimos. El plazo arranca el día del kickoff —no de la primera
                conversación— y se cumple<span className="text-lacre">.</span>
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-negro/10 border border-negro/10">
              {[
                {
                  n: "01",
                  t: "Brief",
                  d: "Cuestionario corto. Qué haces, a quién, qué no funciona de tu marca actual. Sin moodboard ni historia empresarial.",
                  Icon: FileText,
                  dur: "15 min",
                },
                {
                  n: "02",
                  t: "Confirmación",
                  d: "Revisamos tu brief, devolvemos notas por email y firmamos la dirección. Tú decides cuándo respondes.",
                  Icon: ClipboardCheck,
                  dur: "Día 1",
                },
                {
                  n: "03",
                  t: "Producción",
                  d: "El estudio trabaja. Construcción del sistema: tipografía, color, grid, componentes. Iteración interna antes de enseñar nada.",
                  Icon: PenTool,
                  dur: "Días 2–7",
                },
                {
                  n: "04",
                  t: "Revisiones",
                  d: "Una ronda (Esencial) o dos (Profesional, Premium). Feedback estructurado por email. Cambios acotados, nunca reescrituras.",
                  Icon: MessagesSquare,
                  dur: "1–2 rondas",
                },
                {
                  n: "05",
                  t: "Entrega",
                  d: "PDF A4 landscape + Figma editable + assets sueltos. El día que pone el plazo, no aproximadamente.",
                  Icon: PackageCheck,
                  dur: "Día 5 / 7 / 10",
                },
              ].map(({ n, t, d, Icon, dur }) => (
                <li
                  key={n}
                  className="relative bg-papel p-6 md:p-8 flex flex-col min-h-[320px] transition-colors hover:bg-arena/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                      Paso {n}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra">
                      {dur}
                    </span>
                  </div>
                  <div className="mt-6 w-12 h-12 flex items-center justify-center border border-negro/15 bg-arena/40 text-lacre">
                    <Icon className="w-6 h-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-[1.6rem] font-black tracking-[-0.02em] leading-[1.1]">
                    {t}<span className="text-lacre">.</span>
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-piedra leading-[1.5] flex-1">
                    {d}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <ButtonLinkTracked
                href="/contacto"
                variant="primary"
                size="lg"
                trackAs="cta_pedir_propuesta"
                trackProps={{ location: "home_proceso" }}
              >
                Empezar el brief →
              </ButtonLinkTracked>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra">
                Respuesta en &lt;24h laborables <span className="text-lacre">·</span> Todo por escrito
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Anatomía de un manual — visual */}
      <section className="bg-arena">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-6xl">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-lacre">
                Anatomía de un manual
              </p>
              <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Qué hay dentro.
                <br />
                <span className="text-piedra">Página por página.</span>
              </h2>
            </div>
            <p className="max-w-md text-base md:text-lg text-piedra leading-relaxed">
              Un manual Tramarca no es un logo con color. Es un sistema documentado, por
              escrito, con reglas aplicables. Ocho capítulos. Cero adornos.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {anatomia.map((a) => (
              <article
                key={a.n}
                className="group relative flex flex-col border border-negro/10 hover:border-lacre transition-colors bg-papel"
              >
                <div className="relative aspect-[4/3] bg-arena overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                  />
                  <span className="absolute top-0 left-0 bg-negro text-papel font-mono text-[10px] uppercase tracking-widest px-3 py-1.5">
                    Cap. {a.n}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">
                    {a.t}<span className="text-lacre">.</span>
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-piedra leading-relaxed flex-1">
                    {a.d}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 font-mono text-xs text-piedra max-w-2xl">
            Ocho de los dieciséis capítulos publicados en <Link href="/anatomia" className="text-lacre underline underline-offset-4 hover:text-lacre-hover">/anatomia</Link>.
            Scope por tier: Esencial 20-25pp · Profesional 30-40pp · Premium 40-50pp + libro físico.
          </p>
        </div>
      </section>

      {/* Portfolio — lista editorial minimal estilo p56 manual v4 */}
      <section className="bg-papel border-y border-negro/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-lacre">
                Portfolio
              </p>
              <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Hemos trabajado con<span className="text-lacre">.</span>
              </h2>
              <p className="mt-6 max-w-md text-base md:text-lg text-piedra leading-relaxed">
                Cinco manuales publicados con caso de estudio detallado —
                brief, decisiones tipográficas, paleta, aplicaciones y
                spreads internos del sistema<span className="text-lacre">.</span>
              </p>
              <div className="mt-10">
                <ButtonLink href="/trabajos" variant="ghost" size="lg">
                  Ver portfolio completo →
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="border-t border-negro/15">
                {MANUALES.map((m) => {
                  const tierUpper =
                    typeof m.tier === "string" ? m.tier.toUpperCase() : "PROPIO";
                  const isTramarca = m.showDetail;
                  const logoBg =
                    m.logoBg === "dark"
                      ? "bg-negro"
                      : m.logoBg === "lacre"
                      ? "bg-lacre"
                      : "bg-arena border border-negro/10";

                  const Body = (
                    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[96px_1fr] gap-4 sm:gap-6 py-5">
                      <div
                        className={`relative aspect-[3/1] overflow-hidden ${logoBg} flex items-center justify-center`}
                      >
                        <Image
                          src={m.logo}
                          alt={`Logo de ${m.name}`}
                          fill
                          sizes="96px"
                          className="object-contain p-2.5"
                        />
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                          <h3 className="text-lg md:text-xl font-black tracking-tight leading-none">
                            {m.name}<span className="text-lacre">.</span>
                          </h3>
                          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-piedra-light shrink-0">
                            {tierUpper === "PROPIO" ? "META" : tierUpper} <span className="text-lacre">·</span> {m.pages}PP
                          </span>
                        </div>
                        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-lacre">
                          {m.sector}
                        </p>
                        <p className="mt-2 text-[13px] text-negro/75 leading-[1.55]">
                          {m.companyDetail}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={m.slug} className="border-b border-negro/15">
                      {isTramarca ? (
                        <Link
                          href={`/trabajos/${m.slug}`}
                          className="block hover:bg-arena/40 transition-colors px-2 -mx-2"
                        >
                          {Body}
                        </Link>
                      ) : (
                        <div className="px-2 -mx-2">{Body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                Datos verificables en tramarca.es/trabajos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-lacre">
              Los tres tiers
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Tres tiers. Pricing en la home.{" "}
              <span className="underline decoration-lacre decoration-4 underline-offset-8">
                IVA incluido.
              </span>
            </h2>
            <p className="mt-6 text-lg text-negro/80 leading-relaxed">
              Esencial 490€. Profesional 990€. Premium 1.990€. Todos con IVA incluido. Todos
              con plazo publicado. Todos con entregables cerrados. Sin sorpresas en la
              factura. Sin &quot;depende, contáctanos&quot;. Lo que ves es lo que pagas.
            </p>
          </div>
          <div className="mt-16">
            <PricingCards />
          </div>
          <div className="mt-16 max-w-3xl">
            <p className="text-base text-negro/80">
              Todos los tiers incluyen brief estructurado, kickoff por email y entrega en
              PDF + Figma. Lo que no incluyen, lo decimos abajo<span className="text-lacre">.</span>
            </p>
            <Link
              href="/precios"
              className="inline-block mt-6 font-mono text-sm text-lacre underline underline-offset-4 hover:text-lacre-hover"
            >
              Ver comparativa completa de tiers →
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos — afirmación, no negación */}
      <section className="bg-arena border-t-2 border-negro/15">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Cómo trabajamos</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Estudio productizado<span className="text-lacre">.</span>
            {" "}Manuales completos<span className="text-lacre">.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
            {[
              {
                t: "Precio cerrado",
                d: "490€, 990€ o 1.990€ con IVA. Publicado desde el minuto cero. Lo que lees en la web es lo que pagas.",
              },
              {
                t: "Plazo publicado",
                d: "5, 7 o 10 días laborables desde kickoff, según tier. Días laborables, no estimados.",
              },
              {
                t: "Proceso cerrado",
                d: "Dos rondas de revisión incluidas. Brief firmado antes del kickoff — todo por escrito, deadlines claras.",
              },
              {
                t: "Entrega editorial",
                d: "PDF A4 landscape + Figma + assets. Premium añade libro físico encuadernado de edición única.",
              },
            ].map((x) => (
              <div key={x.t} className="border-l-2 border-lacre pl-6">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">{x.t}</h3>
                <p className="mt-3 text-base md:text-lg text-negro/80 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-base md:text-lg text-piedra max-w-3xl leading-relaxed">
            Si tu proyecto pide discovery profundo de seis semanas, una agencia
            tradicional servirá mejor. Si necesitas solo un logo, hay estudios
            especializados. Nosotros entregamos sistema de marca documentado,
            con plazo y precio, para equipos que prefieren claridad a ritual.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">FAQ</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Preguntas que nos hacéis<span className="text-lacre">.</span>
          </h2>
          <div className="mt-12">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-48 text-center">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.02] md:leading-[0.95] lg:leading-[0.88]">
            ¿Tu marca
            <br />
            está por escrito<span className="text-lacre">?</span>
          </h2>
          <p className="mt-10 text-xl md:text-2xl text-ceniza max-w-2xl mx-auto leading-relaxed">
            Tres tiers. <strong className="text-papel">IVA incluido.</strong> Plazo publicado.
            Si encaja, lo cerramos hoy.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLinkTracked
              href="/contacto"
              variant="invert"
              size="lg"
              trackAs="cta_pedir_propuesta"
              trackProps={{ location: "home_cierre" }}
            >
              Pedir propuesta en 24h →
            </ButtonLinkTracked>
            <a
              href="mailto:hola@tramarca.es"
              className="font-mono text-sm text-ceniza hover:text-lacre transition-colors underline underline-offset-4"
            >
              Escríbenos a hola@tramarca.es
            </a>
          </div>
        </div>
      </section>

      <JsonLd data={jsonLdGraph(serviceSchema, faqSchema)} />
    </>
  );
}
