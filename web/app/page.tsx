import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { PricingCards } from "@/components/PricingCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { MANUALES } from "@/lib/manuales";
import { FOUNDING_SLOTS_REMAINING, FOUNDING_SLOTS_TOTAL } from "@/lib/tiers";
import { jsonLdGraph, serviceSchema, faqSchema } from "@/lib/schema";

const portfolioHome = MANUALES.filter((m) => m.slug !== "tramarca").slice(0, 3);
const testimonials = MANUALES.filter((m) => m.testimonial);

const anatomia = [
  {
    n: "01",
    t: "Sistema de logo",
    d: "Marca principal, variantes, monograma, clearspace, tamaños mínimos y usos prohibidos.",
    img: "/portfolio/tramarca/spread-03.jpg",
    alt: "Sistema de logo — spread del manual Tramarca con variantes y clearspace",
  },
  {
    n: "02",
    t: "Paleta cromática",
    d: "Colores primarios, secundarios, ratios de uso, códigos Pantone, CMYK, RGB y HEX.",
    img: "/portfolio/tramarca/spread-05.jpg",
    alt: "Paleta cromática — spread del manual Tramarca con sistema de color aplicado",
  },
  {
    n: "03",
    t: "Sistema tipográfico",
    d: "Familias, pesos, jerarquías, leading y kerning. Reglas para titular, cuerpo y microtexto.",
    img: "/portfolio/tramarca/spread-09.jpg",
    alt: "Sistema tipográfico — spread del manual Tramarca mostrando jerarquía de Satoshi e IBM Plex Mono",
  },
  {
    n: "04",
    t: "Grid y composición",
    d: "Retícula editorial, márgenes, columnas y reglas de composición para cualquier formato.",
    img: "/portfolio/tramarca/spread-07.jpg",
    alt: "Grid y composición — spread del manual Tramarca con retícula editorial",
  },
  {
    n: "05",
    t: "Identidad verbal",
    d: "Tono de voz, vocabulario, frases-patrón. Qué decimos, qué no, cómo suena escrito.",
    img: "/portfolio/tramarca/spread-11.jpg",
    alt: "Identidad verbal — spread del manual Tramarca con tono de voz y frases patrón",
  },
  {
    n: "06",
    t: "Aplicaciones",
    d: "Papelería, firma de email, redes sociales, presentaciones. Marca operando en vida real.",
    img: "/portfolio/tramarca/spread-08.jpg",
    alt: "Aplicaciones — spread del manual Tramarca con papelería y aplicaciones digitales",
  },
  {
    n: "07",
    t: "Guidelines de uso",
    d: "Qué se puede y qué no. Reglas explícitas para que nadie rompa el sistema por inercia.",
    img: "/portfolio/tramarca/spread-10.jpg",
    alt: "Guidelines de uso — spread del manual Tramarca con normas de aplicación",
  },
  {
    n: "08",
    t: "Plantillas editables",
    d: "Figma editable + PDF final + assets sueltos. Entregamos el sistema, no solo la foto.",
    img: "/portfolio/tramarca/spread-12.jpg",
    alt: "Plantillas editables — spread del manual Tramarca mostrando plantillas listas para usar",
  },
];

const homeFaqs = [
  {
    q: "¿Cuánto cuesta un manual de marca con Tramarca?",
    a: "Tres tiers con pricing público e IVA incluido: Esencial 490€ (20-25 páginas), Profesional 990€ (30-40 páginas), Premium 1.990€ (40-50 páginas). Precios finales. Sin sorpresas.",
  },
  {
    q: "¿Qué incluye el IVA? ¿Hay costes ocultos?",
    a: "El IVA 21% está incluido en los precios publicados. No hay costes ocultos. Cada tier detalla entregables, revisiones y plazos por adelantado. Lo que ves, pagas.",
  },
  {
    q: "¿Cuánto tarda en entregarse un manual de marca?",
    a: "Esencial: 5 días laborables. Profesional: 7. Premium: 10. Los plazos se cuentan desde el kickoff con brief firmado. No desde que nos llegó el mail.",
  },
  {
    q: "¿Cuántas revisiones incluye cada tier?",
    a: "Esencial incluye 1 revisión. Profesional y Premium, 2. Cada revisión cubre cambios acotados. Cambios de alcance se presupuestan aparte. Transparencia.",
  },
  {
    q: "¿Qué diferencia a Tramarca de una agencia?",
    a: "Tramarca es productizado: scope cerrado, precio público, plazo publicado. Una agencia hace discovery, propuesta y custom pricing en semanas. Válido, pero distinto.",
  },
  {
    q: "¿Qué es el Founding Customer Program?",
    a: "Los primeros cinco clientes pagan precio full y reciben extras (más páginas, formación, sesión extra) a cambio de case study público, testimonial en vídeo y dos referidos.",
  },
  {
    q: "¿En qué se diferencia Tramarca de otras agencias?",
    a: "Entregamos más páginas por menos dinero con IVA incluido y plazo publicado. Profesional 990€ por 30-40 páginas vs 1.490€+IVA por 20 en otros estudios. Publicamos el precio desde el minuto uno.",
  },
  {
    q: "¿Hay garantía de satisfacción?",
    a: "Sí. Si tras la primera entrega crees que el manual no resuelve el brief acordado, te devolvemos el 50% pagado al kickoff dentro de los 14 días siguientes. Sin dramas. Sin letra pequeña.",
  },
  {
    q: "¿Atendéis fuera de Madrid?",
    a: "Sí. Trabajamos 100% online para toda España. Brief, reviews y entrega por videollamada y email. Ubicación tuya, irrelevante.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — canonical voice, dark, manual-first */}
      <section className="relative section-dark border-b border-papel/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, var(--color-lacre) 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-[1600px] px-6 pt-12 md:pt-16 pb-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: typography — canonical voice */}
            <div className="lg:col-span-7 pb-16 lg:pb-28">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-lacre">
                Sistemas de marca · Documentados · Por escrito
              </p>
              <h1 className="mt-10 text-[14vw] sm:text-[12vw] lg:text-[9.5vw] xl:text-[9rem] font-black tracking-[-0.05em] leading-[0.85] text-papel">
                ¿Qué hay tras
                <br />
                tu marca<span className="text-lacre">?</span>
              </h1>
              <p className="mt-10 max-w-xl text-xl md:text-2xl text-ceniza leading-[1.4]">
                Lo que no se documenta, se improvisa. Lo que se improvisa, no es marca.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <ButtonLink href="/contacto" variant="primary" size="lg">
                  Hablemos de tu marca →
                </ButtonLink>
                <ButtonLink href="/precios" variant="ghost" size="lg" className="text-papel hover:bg-papel/10">
                  Ver precios
                </ButtonLink>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md border-t border-papel/15 pt-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">
                    Esencial
                  </p>
                  <p className="mt-1 text-2xl font-black text-papel">490€</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-lacre">
                    Profesional
                  </p>
                  <p className="mt-1 text-2xl font-black text-papel">990€</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">
                    Premium
                  </p>
                  <p className="mt-1 text-2xl font-black text-papel">1.990€</p>
                </div>
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-piedra">
                IVA incluido. Plazo publicado. Sin discovery.
              </p>
            </div>

            {/* Right: visuals — single dominant on mobile, 3-stack on desktop */}
            <div className="lg:col-span-5 relative w-full">
              {/* Mobile: single cover with lacre tag */}
              <div className="lg:hidden relative mt-4 mb-10">
                <div className="relative aspect-[1756/1242] shadow-2xl border border-negro/10 rotate-[-1deg]">
                  <Image
                    src="/portfolio/tramarca-cover.jpg"
                    alt="Portada del manual propio Tramarca — 34 páginas"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-3 right-4 bg-lacre text-papel font-mono text-[10px] uppercase tracking-widest px-3 py-2 rotate-[-4deg] shadow-xl">
                  IVA incluido
                </div>
              </div>
              {/* Desktop: 3-stack */}
              <div className="hidden lg:block relative h-[85vh] min-h-[600px]">
                <div className="absolute top-0 right-0 w-[85%] aspect-[1756/1242] rotate-[2deg] shadow-2xl">
                  <Image
                    src="/portfolio/tramarca/spread-09.jpg"
                    alt="Spread 9 del manual Tramarca — sistema tipográfico"
                    fill
                    sizes="45vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-[20%] left-0 w-[82%] aspect-[1756/1242] -rotate-[3deg] shadow-2xl border border-negro/10">
                  <Image
                    src="/portfolio/anfisbena/spread-05.jpg"
                    alt="Spread del manual Anfisbena — paleta de color"
                    fill
                    sizes="45vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-[5%] w-[90%] aspect-[1756/1242] rotate-[-1deg] shadow-2xl border-2 border-negro">
                  <Image
                    src="/portfolio/tramarca-cover.jpg"
                    alt="Portada del manual propio Tramarca — 34 páginas, Lacre sobre Papel"
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-[6%] left-[2%] bg-lacre text-papel font-mono text-[10px] uppercase tracking-widest px-3 py-2 rotate-[-6deg] shadow-xl">
                  IVA incluido
                </div>
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

      {/* Prueba radical */}
      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-lacre">
              Prueba radical
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Este es nuestro manual.
              <br />
              <span className="text-ceniza">Por si no te fías del tuyo.</span>
            </h2>
            <p className="mt-8 text-lg text-ceniza leading-relaxed max-w-xl">
              Treinta y cuatro páginas. Tipografía Satoshi. Voz provocativa. Sistema de color
              con Lacre como acento. Hecho por nosotros, para nosotros. Si no te convence el
              nuestro, no vas a querer el que te hagamos.
            </p>
            <div className="mt-10">
              <ButtonLink href="/manuales/tramarca" variant="invert" size="lg">
                Ver manual Tramarca (34pp) →
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[1756/1242] bg-carbon border border-papel/10 overflow-hidden">
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
                <div className="relative aspect-[1756/1242] bg-arena overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                  />
                  <span className="absolute top-0 left-0 bg-negro text-papel font-mono text-[10px] uppercase tracking-widest px-3 py-1.5">
                    {a.n}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">{a.t}</h3>
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

          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-5 p-6 md:p-8 bg-negro text-papel">
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-widest text-lacre">
                Mira el nuestro
              </p>
              <p className="mt-2 text-lg md:text-xl font-black tracking-tight">
                Descarga el manual de marca de Tramarca completo.
              </p>
              <p className="mt-2 text-sm text-ceniza">
                34 páginas, PDF A4 landscape, 29 MB. Lo que entregamos, enseñado en carne propia.
              </p>
            </div>
            <a
              href="/manual-tramarca.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-lacre text-papel px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-lacre-hover transition-colors"
            >
              Descargar PDF →
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-lacre">Portfolio</p>
            <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Tres manuales. Tres marcas reales. Cero mockups.
            </h2>
            <p className="mt-6 text-lg text-piedra leading-relaxed">
              Trabajo publicado. Páginas reales. Clientes reales. Antes de hablar de precio,
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
              Ver los cuatro manuales completos →
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            Lo que dicen
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Tres clientes. Tres sectores.
            <br />
            <span className="text-ceniza">Una misma frase: dejamos de improvisar.</span>
          </h2>

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
                  <figcaption className="mt-8 pt-6 border-t border-papel/10 flex items-center gap-4">
                    <div className="relative w-14 h-14 shrink-0 overflow-hidden bg-negro border border-papel/10">
                      <Image
                        src={`/portfolio/${m.slug}-cover.jpg`}
                        alt={`Manual de ${m.name}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-papel tracking-tight truncate">
                        {m.testimonial!.author}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-piedra truncate">
                        {m.testimonial!.role} · {m.sector}
                      </p>
                    </div>
                    <Link
                      href={`/manuales/${m.slug}`}
                      className="ml-auto font-mono text-[11px] uppercase tracking-widest text-lacre hover:text-papel transition-colors shrink-0"
                    >
                      Caso →
                    </Link>
                  </figcaption>
                </figure>
              ))}
          </div>

          <p className="mt-12 font-mono text-xs text-piedra">
            Case studies completos con dirección de arte, páginas y plazo en{" "}
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
              Todos los tiers incluyen brief inicial, kickoff por videollamada y entrega en
              PDF + Figma. Lo que no incluyen, lo decimos abajo.
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
            Founding Customer Program
          </p>

          {/* Mega counter */}
          <div className="mt-10 flex items-baseline gap-4 md:gap-8 flex-wrap">
            <span className="text-[28vw] md:text-[18vw] lg:text-[16rem] font-black text-lacre tracking-[-0.05em] leading-[0.8]">
              {FOUNDING_SLOTS_REMAINING}
            </span>
            <span className="text-[14vw] md:text-[9vw] lg:text-[8rem] font-black text-ceniza/40 tracking-[-0.05em] leading-[0.8]">
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
                Los primeros cinco clientes entran al Founding Program. Pagan su tier al
                precio full. Reciben extras que luego no se vuelven a ofrecer: más páginas,
                identidad verbal ampliada, formación extendida. A cambio: un case study
                público, un testimonial en vídeo, dos referidos. Esto se cierra cuando se
                cierra. No es urgency de marketing. Es matemática.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <ButtonLink
                  href={{ pathname: "/contacto", query: { founding: "true" } }}
                  variant="invert"
                  size="lg"
                >
                  Reservar plaza Founding →
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

      {/* Proceso */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Proceso</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Cómo funciona. Cuatro pasos. Cero sorpresas.
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              { n: "01", t: "Brief", d: "Rellenas un cuestionario corto. No pedimos tu historia empresarial ni un moodboard. Preguntamos lo que importa: qué haces, a quién, y qué no funciona de tu marca actual." },
              { n: "02", t: "Kickoff (día 1)", d: "Videollamada de 30 minutos. Acordamos dirección y firmamos el brief. Aquí arranca el plazo publicado." },
              { n: "03", t: "Revisiones", d: "Una (Esencial) o dos (Profesional, Premium) revisiones. Cubren cambios acotados. Si quieres reescribir medio manual, lo presupuestamos aparte. Honesto." },
              { n: "04", t: "Entrega", d: "PDF final + Figma editable + assets sueltos. El día que pone en el plazo. No \"aproximadamente\". El día." },
            ].map((s) => (
              <div key={s.n} className="border-t border-negro/15 pt-6">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-sm text-lacre">{s.n}</span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight">{s.t}</h3>
                </div>
                <p className="mt-4 text-base md:text-lg text-piedra leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué NO somos */}
      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Honestidad</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Qué no somos. Por ahorrarte una llamada.
          </h2>
          <div className="mt-16 space-y-12 max-w-4xl">
            {[
              { t: "No somos una agencia de discovery de seis semanas.", d: "Nosotros entregamos en 5-10 días. Una agencia te hace dos meses de workshops, presentación en PDF y tres rondas de propuesta. Todo vale. Pero no es lo mismo." },
              { t: "No somos Canva ni una plantilla.", d: "Si necesitas un brand kit a 12€/mes, usa Canva. Nosotros hacemos manuales que vas a enseñar a tu equipo sin vergüenza." },
              { t: "No hacemos logo express a 150€.", d: "Manual de marca ≠ logo + papelería. Esto es sistema completo. Si solo necesitas logo, hay sitios más baratos. Lo decimos con cariño." },
            ].map((x) => (
              <div key={x.t} className="border-l-2 border-lacre pl-6">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">{x.t}</h3>
                <p className="mt-3 text-base md:text-lg text-negro/80 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">FAQ</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Preguntas que nos hacéis.
          </h2>
          <div className="mt-12">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-48 text-center">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
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
