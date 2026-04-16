import Link from "next/link";
import Image from "next/image";
import { FileText, ClipboardCheck, PenTool, MessagesSquare, PackageCheck } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { PricingCards } from "@/components/PricingCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { SpreadFrame } from "@/components/SpreadFrame";
import { Reveal } from "@/components/Reveal";
import { MANUALES } from "@/lib/manuales";
import { FOUNDING_SLOTS_REMAINING, FOUNDING_SLOTS_TOTAL } from "@/lib/tiers";
import { jsonLdGraph, serviceSchema, faqSchema } from "@/lib/schema";

const portfolioHome = MANUALES.filter((m) => m.slug !== "tramarca").slice(0, 3);
const testimonials = MANUALES.filter((m) => m.testimonial);

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
    q: "¿Hay garantía de devolución?",
    a: "Sí. Si tras la primera entrega consideras que el manual no resuelve el brief firmado, devolvemos el 50% del pago de kickoff dentro de los 14 días siguientes a la entrega. O sale el manual completo, o devolvemos: no entregamos a medias. Queda por escrito en el contrato.",
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
    q: "¿Puedo pagar en dos veces?",
    a: "Sí. Los tiers Profesional y Premium se pagan en dos plazos: 50% al kickoff (con brief firmado) y 50% en la entrega final. El tier Esencial se paga íntegro al kickoff. Aceptamos transferencia SEPA o Stripe (tarjeta, Apple Pay, Google Pay). Emitimos factura electrónica en cada pago.",
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
    q: "¿Qué es el Programa Fundador?",
    a: "Los primeros cinco clientes de Tramarca pagan precio full (490€, 990€ o 1.990€ según tier) y reciben extras: +10 páginas sobre el tier elegido, sesión de estrategia adicional de 60 minutos, case study co-producido y prioridad de entrega. A cambio pedimos case study público, testimonial en vídeo y dos referidos cualificados. Tras los cinco, los precios se revisan al alza.",
  },
  {
    q: "¿Trabajáis con autónomos, PYMES o solo empresas grandes?",
    a: "Autónomos, PYMES y empresas medianas. Emitimos factura con NIF personal o CIF, sin diferencia de precio ni de scope. El cliente tipo de Tramarca factura entre 100k€ y 10M€ y necesita un sistema de marca documentado con precio y plazo claros. Empresas grandes con procesos de compra complejos suelen necesitar agencias con equipo dedicado y soporte contractual amplio.",
  },
  {
    q: "¿Atendéis fuera de Madrid? ¿Trabajáis en remoto?",
    a: "Sí. Trabajamos 100% en remoto desde Madrid para toda España y Europa. Brief estructurado online, kickoff por email, reviews por email con deadlines claras, entrega en PDF y Figma. Todo el proceso es asíncrono y por escrito, precisamente porque lo que entregamos es un documento. Si hace falta aclarar algo puntual, un mensaje basta.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — PAPEL split, manual-native composition (01 chapter cover + spread) */}
      <section className="relative bg-papel border-b border-negro/15 overflow-hidden">
        {/* Masthead — dateline editorial (no manual cosmetics) */}
        <div className="relative mx-auto max-w-[1720px] px-6 md:px-10 pt-5 md:pt-6 flex items-center justify-between gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-piedra border-b border-negro/15 pb-3 md:pb-4">
          <span className="font-bold text-negro">
            Tramarca<span className="text-lacre">.</span>
          </span>
          <span className="hidden md:inline text-center">
            Manuales de marca <span className="text-lacre">·</span> Por escrito <span className="text-lacre">·</span> Desde 2026
          </span>
          <span>
            Madrid <span className="text-lacre">·</span> Edición 1
          </span>
        </div>

        <div className="relative mx-auto max-w-[1720px] px-6 md:px-10 pt-4 md:pt-6">
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

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <ButtonLink href="/contacto" variant="primary" size="lg">
                  Pedir propuesta en 24h →
                </ButtonLink>
                <ButtonLink
                  href="/manuales"
                  variant="ghost"
                  size="lg"
                >
                  Ver 5 manuales publicados →
                </ButtonLink>
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
                IVA incluido · Plazo publicado · Sin discovery
              </p>
            </div>

            {/* Right column — editorial collage of 3 images (what we are) */}
            <div className="lg:col-span-5 relative">
              <div className="relative grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 min-h-[520px] lg:min-h-[720px]">
                {/* Image 1 — manual spread (retícula + M) */}
                <figure className="col-span-6 row-span-4 relative overflow-hidden bg-arena">
                  <Image
                    src="/hero/01-manual-spread.jpg"
                    alt="Manual de marca abierto — retícula modular y construcción tipográfica"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/70 via-negro/20 to-transparent p-4 md:p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-lacre">
                      Fig. 01
                    </p>
                    <p className="mt-1 text-papel font-black text-sm md:text-base leading-tight">
                      Sistema antes que estilo<span className="text-lacre">.</span>
                    </p>
                  </figcaption>
                </figure>

                {/* Image 2 — wax seal (lacre literal) */}
                <figure className="col-span-3 row-span-2 relative overflow-hidden bg-arena">
                  <Image
                    src="/hero/02-wax-seal.jpg"
                    alt="Sello de lacre imprimiéndose sobre papel crema"
                    fill
                    sizes="(min-width: 1024px) 21vw, 50vw"
                    className="object-cover"
                  />
                </figure>

                {/* Image 3 — desk flat-lay */}
                <figure className="col-span-3 row-span-2 relative overflow-hidden bg-arena">
                  <Image
                    src="/hero/03-desk-flatlay.jpg"
                    alt="Mesa de estudio editorial con pruebas tipográficas y muestras de color"
                    fill
                    sizes="(min-width: 1024px) 21vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </div>
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
              Treinta y cuatro páginas. Tipografía Satoshi, sistema editorial
              con lacre como acento, voz documentada capítulo a capítulo. Hecho
              por nosotros para nosotros, bajo el mismo estándar que entregamos
              a cliente.
            </p>
            <div className="mt-10">
              <ButtonLink href="/manuales/tramarca" variant="primary" size="lg">
                Ver manual Tramarca (34pp) →
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[1756/1242] bg-papel border border-negro/15 overflow-hidden shadow-[0_30px_60px_-20px_rgba(12,12,12,0.3)]">
            <Image
              src="/portfolio/tramarca-cover.jpg"
              alt="Tramarca — portada del manual propio 34 páginas — manual de marca Lacre sobre Papel"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Cómo funciona — proceso en 5 pasos */}
      <section className="bg-papel border-b border-negro/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-6xl">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                  Cómo funciona
                </p>
                <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                  Cinco pasos<span className="text-lacre">.</span>
                  <br />
                  <span className="text-piedra">Plazo publicado<span className="text-lacre">.</span></span>
                </h2>
              </div>
              <p className="max-w-md text-base md:text-lg text-piedra leading-[1.55]">
                Brief estructurado, confirmación async, producción, revisiones, entrega.
                Sin workshops de seis semanas. Sin videollamadas obligatorias<span className="text-lacre">.</span>
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
                  d: "Revisamos tu brief, devolvemos notas por email y firmamos la dirección. Async: tú decides cuándo respondes.",
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
              <ButtonLink href="/contacto" variant="primary" size="lg">
                Empezar el brief →
              </ButtonLink>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra">
                Respuesta en &lt;24h laborables <span className="text-lacre">·</span> Sin llamada obligatoria
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
            Tier Esencial: capítulos 01-03 + aplicaciones básicas · Profesional: 01-07 · Premium:
            01-08 extendido + formación al equipo.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-lacre">Portfolio</p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Manuales reales. Páginas reales. Cero mockups.
            </h2>
            <p className="mt-6 text-lg text-piedra leading-relaxed">
              Trabajo publicado para clientes reales. Antes de hablar de precio,
              mira lo que sale por la puerta.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-12 gap-5 md:gap-6">
            {portfolioHome.map((m, i) => {
              const span =
                i === 0
                  ? "md:col-span-7"
                  : i === 1
                  ? "md:col-span-5"
                  : "md:col-span-12";
              const featured = i === 0;
              return (
                <Link
                  key={m.slug}
                  href={`/manuales/${m.slug}`}
                  className={`group block relative overflow-hidden ${span}`}
                >
                  <div
                    className={`relative ${
                      featured ? "aspect-[1756/1100]" : "aspect-[1756/1242]"
                    } bg-arena overflow-hidden`}
                  >
                    <Image
                      src={`/portfolio/${m.slug}-cover.jpg`}
                      alt={m.altCover}
                      fill
                      sizes={
                        featured
                          ? "(min-width: 768px) 58vw, 100vw"
                          : "(min-width: 768px) 42vw, 100vw"
                      }
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-negro/80 via-negro/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-papel translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-mono text-xs text-lacre uppercase tracking-widest">
                        Ver caso completo →
                      </p>
                    </div>
                  </div>
                  <div className="pt-5 flex items-baseline justify-between">
                    <h3
                      className={`font-black tracking-tight ${
                        featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {m.name}
                    </h3>
                    <p className="font-mono text-xs text-piedra uppercase tracking-widest shrink-0 pl-4">
                      {typeof m.tier === "string" ? m.tier : ""} · {m.pages}pp
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-negro/75 max-w-2xl">{m.brief}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <ButtonLink href="/manuales" variant="ghost" size="lg">
              Ver el portfolio completo →
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Notas del proyecto — voz editorial del estudio sobre cada caso */}
      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            Notas del proyecto
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Lo que entró por el brief.
            <br />
            <span className="text-ceniza">Lo que salió documentado.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-ceniza leading-relaxed">
            Extractos del brief recibido en cada proyecto, registrados antes de
            empezar. Los testimonios firmados por clientes llegarán cuando
            entreguen su autorización — no antes.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials
              .filter((m) => m.testimonial)
              .map((m) => (
                <figure
                  key={m.slug}
                  className="flex flex-col border border-papel/10 bg-carbon p-8 md:p-10"
                >
                  <span aria-hidden className="font-black text-6xl text-lacre leading-none">
                    “
                  </span>
                  <blockquote className="mt-4 text-lg md:text-xl text-papel leading-[1.4] flex-1">
                    {m.testimonial!.quote}
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-papel/10 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                        Caso · {m.name}
                      </p>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ceniza">
                        {m.sector} · {m.pages}pp
                      </p>
                    </div>
                    <Link
                      href={`/manuales/${m.slug}`}
                      className="font-mono text-[11px] uppercase tracking-widest text-lacre hover:text-papel transition-colors shrink-0"
                    >
                      Ver caso →
                    </Link>
                  </figcaption>
                </figure>
              ))}
          </div>

          <p className="mt-12 font-mono text-xs text-piedra">
            Dirección de arte, páginas y plazo de cada caso en{" "}
            <Link
              href="/manuales"
              className="text-lacre underline underline-offset-4 hover:text-papel"
            >
              /manuales
            </Link>
            .
          </p>
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
              PDF + Figma. Proceso async por escrito. Lo que no incluyen, lo decimos abajo<span className="text-lacre">.</span>
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

      {/* Founding */}
      <section className="section-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-lacre) 0, var(--color-lacre) 1px, transparent 1px, transparent 28px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            Programa Fundador
          </p>

          {/* Mega counter */}
          <div className="mt-10 flex items-baseline gap-4 md:gap-8 flex-wrap">
            <span className="font-black text-lacre leading-[0.8] tabular-nums" style={{ fontSize: "clamp(6rem, 18vw, 14rem)" }}>
              {FOUNDING_SLOTS_REMAINING}
            </span>
            <span className="font-black text-ceniza/75 leading-[0.8] tabular-nums" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              /{FOUNDING_SLOTS_TOTAL}
            </span>
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-ceniza pb-3 md:pb-6">
              plazas
              <br />
              disponibles
            </span>
          </div>

          {/* Slot dots visualizer */}
          <div className="mt-10 flex gap-3 md:gap-4">
            {Array.from({ length: FOUNDING_SLOTS_TOTAL }).map((_, i) => {
              const taken = i < FOUNDING_SLOTS_TOTAL - FOUNDING_SLOTS_REMAINING;
              return (
                <div
                  key={i}
                  className={`h-4 md:h-5 flex-1 max-w-[160px] transition-colors ${
                    taken ? "bg-lacre" : "bg-papel/60 border border-papel"
                  }`}
                  aria-label={taken ? "Plaza ocupada" : "Plaza disponible"}
                />
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
                Precio full. Extras que no se vuelven a publicar.
              </h2>
              <p className="mt-6 text-lg text-ceniza leading-relaxed">
                Los primeros cinco clientes entran al Programa Fundador. Pagan su tier al
                precio completo. Reciben extras que luego no se vuelven a ofrecer: más
                páginas, identidad verbal ampliada, formación extendida. A cambio: un case
                study público, un testimonial en vídeo, dos referidos cualificados. Se
                cierra cuando se cierra. No es urgency de marketing, es matemática.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <ButtonLink
                  href={{ pathname: "/contacto", query: { founding: "true" } }}
                  variant="invert"
                  size="lg"
                >
                  Reservar plaza fundadora →
                </ButtonLink>
                <ButtonLink href="/precios" variant="ghost" size="lg">
                  Ver tiers primero
                </ButtonLink>
              </div>
              <p className="mt-4 font-mono text-xs text-piedra">
                Te respondemos en &lt;24h laborables. Si ya no hay plaza, te lo decimos.
              </p>
            </div>

            <ul className="md:col-span-5 space-y-0 divide-y divide-papel/10 border-y border-papel/10">
              {[
                { k: "+10pp", v: "páginas sobre el tier elegido" },
                { k: "60′", v: "sesión de estrategia adicional" },
                { k: "1×", v: "case study co-producido" },
                { k: "½", v: "plazo prioritario (si hay hueco)" },
              ].map((x) => (
                <li key={x.k} className="flex items-baseline gap-5 py-4">
                  <span className="font-black text-2xl md:text-3xl text-lacre tracking-tight shrink-0 min-w-[64px]">
                    {x.k}
                  </span>
                  <span className="text-base md:text-lg text-papel">{x.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso — movido arriba, 5 pasos, iconos, sin videollamada */}

      {/* Cómo trabajamos — afirmación, no negación */}
      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Cómo trabajamos</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Estudio productizado<span className="text-lacre">.</span>
            {" "}Manuales completos<span className="text-lacre">.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl">
            {[
              {
                t: "Scope cerrado",
                d: "Lo que entregamos está publicado capítulo a capítulo en /anatomia. 48 componentes, 12 secciones. Ningún trabajo empieza sin brief firmado.",
              },
              {
                t: "Plazo publicado",
                d: "5, 7 o 10 días laborables desde kickoff, según tier. No son plazos estimativos. Se incumplen pocas veces y cuando ocurre, lo avisamos antes.",
              },
              {
                t: "Precio cerrado",
                d: "490€, 990€ o 1.990€ con IVA. Sin discovery previo, sin propuesta personalizada, sin extras imprevistos. Lo que lees en la web es lo que pagas.",
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
            <ButtonLink href="/contacto" variant="invert" size="lg">
              Hablemos de tu marca →
            </ButtonLink>
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
