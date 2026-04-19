import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PricingCards } from "@/components/PricingCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonLink, ButtonLinkTracked } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/tiers";
import { jsonLdGraph, serviceSchema, breadcrumbListSchema, productSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Precios manual de marca. IVA incluido.",
  description:
    "Cuánto cuesta un manual de marca. Tres tiers: 490€, 990€, 1.990€. IVA incluido. Plazos 5-10 días. Precio cerrado publicado. Aquí los números.",
  alternates: { canonical: `${SITE_URL}/precios` },
};

const pricingFaqs = [
  {
    q: "¿Por qué 490€ y no 399€ como un logo express?",
    a: "Porque esto no es un logo. Es un manual de 20-25 páginas con sistema, aplicaciones y guidelines. Un logo express a 149€ te da un archivo .ai. Aquí te llevas un documento operativo. Cosas distintas.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Pago único al kickoff. Aceptas la propuesta, firmas el brief, recibes link de pago (Stripe — tarjeta, Apple Pay, Google Pay) o número de cuenta para SEPA. El proyecto arranca cuando confirmamos el pago. Factura electrónica con IVA desglosado al instante.",
  },
  {
    q: "¿Emitís factura con IVA detallado?",
    a: "Sí. Factura electrónica española, con IVA 21% desglosado, lista para tu contabilidad. La envía nuestro sistema el día del cobro.",
  },
  {
    q: "¿Y si mi marca ya existe pero quiero rebrand?",
    a: "Igual scope, igual precio. El Profesional y el Premium funcionan muy bien para rebrand. Partimos del activo existente y reconstruimos desde sistema.",
  },
  {
    q: "¿Trabajáis con autónomos o solo empresas?",
    a: "Ambos. Factura con NIF personal o CIF, sin diferencia.",
  },
  {
    q: "¿Subirán los precios?",
    a: "Sí. Tras los primeros diez clientes revisamos tarifas al alza. El precio que se queda cerrado es el del kickoff: una vez firmas brief, tu tier está amarrado a su precio actual.",
  },
  {
    q: "¿Cómo aseguráis que el manual encaja con lo que necesito?",
    a: "El brief firmado antes del kickoff define exactamente el scope acordado: 23 preguntas estructuradas en 5 bloques (negocio, audiencia, activos existentes, proveedores y casos de uso, tono y restricciones). Cualquier ajuste durante las 2 rondas de revisión incluidas se acota contra ese brief. Si quieres ver el cuestionario antes de contratar, escríbenos y te lo enviamos.",
  },
];

const comparisonRows = [
  { label: "Precio (IVA incl.)", esencial: "490€", profesional: "990€", premium: "1.990€" },
  { label: "Páginas", esencial: "20-25", profesional: "30-40", premium: "40-50" },
  { label: "Plazo laborable", esencial: "5 días", profesional: "7 días", premium: "10 días" },
  { label: "Rondas de revisión", esencial: "1", profesional: "2", premium: "2" },
  { label: "Estrategia de marca", esencial: "—", profesional: "Básica", premium: "Completa (arquetipo + posicionamiento)" },
  { label: "Identidad verbal", esencial: "—", profesional: "Tono + vocabulario", premium: "Extendida + naming + tagline" },
  { label: "Sistema visual", esencial: "Logo + paleta + tipografía", profesional: "Completo + jerarquías", premium: "Exhaustivo + don'ts + variable fonts" },
  { label: "Aplicaciones", esencial: "3 (papelería, social, firma)", profesional: "Extendidas (+ web + email)", premium: "Totales (+ merch + signage)" },
  { label: "Plantillas Figma", esencial: "—", profesional: "Base editable", premium: "Biblioteca extendida" },
  { label: "Dirección fotográfica", esencial: "—", profesional: "—", premium: "✓ incluida" },
  { label: "Copia impresa hecha libro", esencial: "—", profesional: "—", premium: "✓ edición única enviada" },
  { label: "Archivos fuente", esencial: "SVG + PNG + PDF", profesional: "+ Figma editable", premium: "+ assets empaquetados" },
];

export default function PreciosPage() {
  return (
    <>
      {/* Hero compacto + price cards arriba, horizontal en desktop */}
      <section className="bg-papel border-b border-negro/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-10 md:pb-14">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                Precios <span className="text-piedra">·</span> IVA incluido
              </p>
              <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95]">
                Cuánto cuesta un manual
                <br className="hidden sm:block" /> de marca con Tramarca
                <span className="text-lacre">.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base md:text-lg text-piedra leading-[1.55]">
                Tres tiers productizados: <strong className="text-negro">490€, 990€ o 1.990€, IVA incluido</strong>.
                Entrega en 5, 7 o 10 días laborables. Páginas reales, revisiones incluidas,
                precio final<span className="text-lacre">.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-piedra">
                <span>Precio publicado</span>
                <span className="text-lacre">·</span>
                <span>Plazo garantizado</span>
                <span className="text-lacre">·</span>
                <span>Sin sorpresas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price cards — arriba para que los precios estén a mano */}
      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <PricingCards />
        </div>
      </section>

      <section className="bg-papel">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">Comparativa</p>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
                Los tres tiers al detalle<span className="text-lacre">.</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-piedra md:max-w-[14rem] md:text-right">
              Misma base. Distinto alcance<span className="text-lacre">.</span>
            </p>
          </div>

          {/* Mobile: card-stack con toda la info por tier — evita scroll horizontal que ocultaba Profesional/Premium */}
          <div className="md:hidden mt-12 space-y-5">
            {(
              [
                { key: "esencial", name: "Esencial", price: "490€", variant: "ghost", highlight: false },
                { key: "profesional", name: "Profesional", price: "990€", variant: "primary", highlight: true },
                { key: "premium", name: "Premium", price: "1.990€", variant: "ghost", highlight: false },
              ] as const
            ).map((tier) => (
              <article
                key={tier.name}
                className={cn(
                  "border border-negro/15 bg-papel",
                  tier.highlight && "border-lacre/50"
                )}
              >
                <header
                  className={cn(
                    "relative px-5 pt-6 pb-5 border-b border-negro/15",
                    tier.highlight && "bg-lacre/[0.06] border-lacre/20"
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute -top-2.5 left-5 bg-negro text-lacre border border-lacre font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 font-bold">
                      Recomendado
                    </span>
                  )}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-black tracking-tight">{tier.name}</h3>
                    <p
                      className={cn(
                        "text-2xl font-black tracking-tight tabular-nums",
                        tier.highlight && "text-lacre"
                      )}
                    >
                      {tier.price}
                      <span className="ml-2 font-mono text-[10px] font-normal text-piedra">
                        IVA incl.
                      </span>
                    </p>
                  </div>
                </header>
                <dl className="divide-y divide-negro/10">
                  {comparisonRows.slice(1).map((r) => (
                    <div
                      key={r.label}
                      className="flex items-start justify-between gap-4 px-5 py-3"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-piedra w-[38%] shrink-0 pt-[2px]">
                        {r.label}
                      </dt>
                      <dd className="text-sm text-negro text-right flex-1 leading-snug">
                        {r[tier.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="px-5 py-5 border-t border-negro/15">
                  <ButtonLink
                    href="/contacto"
                    variant={tier.variant}
                    size="md"
                    className="w-full"
                  >
                    {tier.name} →
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop/tablet: tabla comparativa horizontal */}
          <div className="hidden md:block mt-12 overflow-x-auto">
            <div className="min-w-[780px] border border-negro/15">
              <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] bg-negro text-papel">
                <div className="px-5 py-6 font-mono text-[10px] uppercase tracking-[0.25em] text-piedra self-end">
                  Comparativa
                </div>
                <div className="px-5 py-6 border-l border-papel/15">
                  <p className="text-xl md:text-2xl font-black tracking-tight">Esencial</p>
                  <p className="mt-2 text-base md:text-lg font-black tracking-tight tabular-nums">
                    490€ <span className="font-mono text-[10px] font-normal text-ceniza/70">IVA incl.</span>
                  </p>
                </div>
                <div className="relative px-5 py-6 border-l border-papel/15 bg-lacre/15">
                  <span className="absolute -top-2.5 left-5 bg-negro text-lacre border border-lacre font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 font-bold">
                    Recomendado
                  </span>
                  <p className="text-xl md:text-2xl font-black tracking-tight">Profesional</p>
                  <p className="mt-2 text-base md:text-lg font-black tracking-tight tabular-nums text-lacre">
                    990€ <span className="font-mono text-[10px] font-normal text-ceniza/70">IVA incl.</span>
                  </p>
                </div>
                <div className="px-5 py-6 border-l border-papel/15">
                  <p className="text-xl md:text-2xl font-black tracking-tight">Premium</p>
                  <p className="mt-2 text-base md:text-lg font-black tracking-tight tabular-nums">
                    1.990€ <span className="font-mono text-[10px] font-normal text-ceniza/70">IVA incl.</span>
                  </p>
                </div>
              </div>

              {comparisonRows.slice(1).map((r, idx) => (
                <div
                  key={r.label}
                  className={cn(
                    "grid grid-cols-[1.1fr_1fr_1fr_1fr] border-t border-negro/10 text-[13px] md:text-sm",
                    idx % 2 === 1 && "bg-arena/35",
                  )}
                >
                  <div className="px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-piedra">
                    {r.label}
                  </div>
                  <div className="px-5 py-3.5 border-l border-negro/10 text-negro">{r.esencial}</div>
                  <div className="px-5 py-3.5 border-l border-negro/10 text-negro bg-lacre/[0.06] font-medium">
                    {r.profesional}
                  </div>
                  <div className="px-5 py-3.5 border-l border-negro/10 text-negro">{r.premium}</div>
                </div>
              ))}

              <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] border-t-2 border-negro">
                <div className="px-5 py-5" />
                <div className="px-5 py-5 border-l border-negro/10">
                  <ButtonLink href="/contacto" variant="ghost" size="md" className="w-full">
                    Esencial →
                  </ButtonLink>
                </div>
                <div className="px-5 py-5 border-l border-negro/10 bg-lacre/[0.06]">
                  <ButtonLink href="/contacto" variant="primary" size="md" className="w-full">
                    Profesional →
                  </ButtonLink>
                </div>
                <div className="px-5 py-5 border-l border-negro/10">
                  <ButtonLink href="/contacto" variant="ghost" size="md" className="w-full">
                    Premium →
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Lo que va en todos los tiers.
            </h2>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-negro/85">
              {[
                "Brief inicial (cuestionario estructurado)",
                "Kickoff por email tras confirmar brief",
                "Entrega en PDF final (A4 landscape) + Figma editable",
                "Alineación de revisiones por email con deadlines claras",
                "Soporte post-entrega durante 30 días (dudas de uso)",
                "Facturación con IVA detallado (para tu contabilidad)",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-lacre mt-1">→</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Lo que queda fuera del tier<span className="text-lacre">.</span>
            </h2>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-negro/85">
              {[
                "Copywriting extenso (web, campañas, slogans comerciales)",
                "Naming / verbal identity para marca nueva",
                "Diseño web, landing pages, ecommerce",
                "Packaging, ilustración, motion, fotografía",
                "Marketing ads, SEO, estrategia digital",
                "Cambios ilimitados (cubrimos 1-2 revisiones)",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-piedra mt-1">✕</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base text-piedra">
              Si tu proyecto necesita algo que no entra en el tier, lo cotizamos aparte.
              Sin problema<span className="text-lacre">.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Ancla comparativa — referencia de mercado, al final para no tapar tiers */}
      <section className="bg-papel border-y border-negro/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
            Referencia de mercado
          </p>
          <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] max-w-3xl">
            Para que tengas contexto de lo que cuesta un manual fuera de aquí<span className="text-lacre">.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-4 gap-px bg-negro/10 border border-negro/10">
            <div className="bg-papel p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                Agencia tradicional
              </p>
              <p className="mt-3 text-2xl md:text-3xl font-black tracking-tight tabular-nums">
                6.000€–18.000€
              </p>
              <p className="mt-2 text-sm text-piedra leading-relaxed">
                + IVA aparte. Discovery de semanas antes de empezar.
                Pricing custom en cada propuesta.
              </p>
            </div>
            <div className="bg-papel p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                Freelance generalista
              </p>
              <p className="mt-3 text-2xl md:text-3xl font-black tracking-tight tabular-nums">
                800€–3.500€
              </p>
              <p className="mt-2 text-sm text-piedra leading-relaxed">
                Plazo variable. Alcance negociado cada vez. Calidad
                dependiente de quién coja tu proyecto.
              </p>
            </div>
            <div className="bg-papel p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                Canva + logo barato
              </p>
              <p className="mt-3 text-2xl md:text-3xl font-black tracking-tight tabular-nums">
                ~80€
              </p>
              <p className="mt-2 text-sm text-piedra leading-relaxed">
                Plantilla + un archivo. Sin sistema, sin documentación,
                sin soporte, sin aplicaciones.
              </p>
            </div>
            <div className="bg-negro text-papel p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                Tramarca
              </p>
              <p className="mt-3 text-2xl md:text-3xl font-black tracking-tight tabular-nums">
                490€–1.990€
              </p>
              <p className="mt-2 text-sm text-ceniza leading-relaxed">
                IVA incluido. 5 a 10 días laborables. Precio cerrado publicado.
                Lo que ves es lo que pagas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature moment — close-up del objeto, contenido no full-bleed */}
      <section className="bg-negro">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <figure className="md:col-span-7 relative aspect-[4/3] overflow-hidden border border-papel/10">
              <Image
                src="/hero-v5/precios-binding.jpg"
                alt="Detalle de encuadernación de un manual Tramarca — lomo con marcapáginas lacre"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                Fig. 03 · Acabado
              </p>
              <p className="mt-3 text-papel font-black text-2xl md:text-3xl leading-tight">
                Lo que pagas es un objeto defendible<span className="text-lacre">.</span>
              </p>
              <p className="mt-5 text-ceniza text-sm md:text-base leading-relaxed">
                Tapa dura, encuadernación cosida, marcapáginas textil. No un PDF
                con logo, un libro que tu equipo saca cuando alguien duda<span className="text-lacre">.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Preguntas sobre precio.
          </h2>
          <div className="mt-12">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Tres tiers. Precios cerrados.
          </h2>
          <div className="mt-10">
            <ButtonLinkTracked
              href="/contacto"
              variant="invert"
              size="lg"
              trackAs="cta_pedir_propuesta"
              trackProps={{ location: "precios_cierre" }}
            >
              Pedir propuesta en 24h →
            </ButtonLinkTracked>
          </div>
          <p className="mt-6 font-mono text-xs text-piedra">
            Respondemos en menos de 24 horas laborables. Sí o no.
          </p>
        </div>
      </section>

      <JsonLd
        data={jsonLdGraph(
          productSchema,
          serviceSchema,
          breadcrumbListSchema([
            { name: "Inicio", url: SITE_URL },
            { name: "Precios", url: `${SITE_URL}/precios` },
          ])
        )}
      />
    </>
  );
}
