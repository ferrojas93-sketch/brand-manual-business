import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, ButtonLinkTracked } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { AnatomiaIcon } from "@/components/AnatomiaIcon";
import { ANATOMIA, TIER_LABEL, type Tier } from "@/lib/anatomia";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, breadcrumbListSchema, techArticleSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Anatomía de un manual de marca — 16 capítulos, 48 componentes",
  description:
    "Qué hay dentro de un manual de marca Tramarca: 16 capítulos, 48 componentes documentados, desglosados por tier — Esencial 490€, Profesional 990€, Premium 1.990€ IVA incl.",
  alternates: { canonical: `${SITE_URL}/anatomia` },
};

const schemaGraph = jsonLdGraph(
  breadcrumbListSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Anatomía del manual", url: `${SITE_URL}/anatomia` },
  ]),
  techArticleSchema({
    url: `${SITE_URL}/anatomia`,
    name: "Anatomía de un manual de marca — 16 capítulos, 48 componentes",
    description:
      "Documentación técnica de qué hay dentro de un manual de marca Tramarca. 16 capítulos y 48 componentes explicados por tier (Esencial, Profesional, Premium), alineados con el manual de marca propio publicado.",
    image: `${SITE_URL}/og-tramarca-v4.jpg`,
  })
);

const TIERS: Tier[] = ["E", "P", "M"];

function TierBadge({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Incluido en: ${tiers.map((t) => TIER_LABEL[t]).join(", ")}`}>
      {TIERS.map((t) => (
        <span
          key={t}
          className={`block w-1.5 h-1.5 rounded-full ${tiers.includes(t) ? "bg-lacre" : "bg-negro/15"}`}
        />
      ))}
    </div>
  );
}

export default function AnatomiaPage() {
  const total = ANATOMIA.reduce((s, c) => s + c.items.length, 0);
  return (
    <>
      <JsonLd data={schemaGraph} />
      {/* Hero — editorial index */}
      <section className="relative section-dark noise border-b border-papel/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 85% 20%, var(--color-lacre) 0, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 pt-20 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-lacre">
                Anatomía <span className="text-piedra">·</span> Índice completo
              </p>
              <h1 className="mt-6 font-display font-black tracking-[-0.04em] leading-[0.9] text-papel text-5xl md:text-6xl lg:text-[5rem]">
                Qué hay dentro de un manual<span className="text-lacre">.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-ceniza leading-[1.55]">
                Dieciséis capítulos. {total} componentes. Ni uno de adorno<span className="text-lacre">.</span>
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl border-t border-papel/15 pt-6">
                {TIERS.map((t, i) => (
                  <div key={t}>
                    <p className={`font-mono text-[10px] uppercase tracking-widest ${i === 1 ? "text-lacre" : "text-piedra"}`}>
                      {TIER_LABEL[t]}
                    </p>
                    <p className="mt-1 text-2xl font-black text-papel font-display">
                      {ANATOMIA.reduce((s, c) => s + c.items.filter((i) => i.tiers.includes(t)).length, 0)}
                      <span className="text-piedra text-sm font-mono ml-2">componentes</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="relative aspect-[16/9] overflow-hidden border border-papel/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <Image
                  src="/hero-v5/anatomia-hero-dark.jpg"
                  alt="Manual Tramarca abierto mostrando tipografía y grilla con hairline lacre — fondo editorial oscuro"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-papel">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:py-28 space-y-24 md:space-y-32">
          {ANATOMIA.map((chapter) => (
            <Reveal as="article" key={chapter.n}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
                {/* Chapter header (sticky on desktop) */}
                <header className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display font-black text-5xl md:text-6xl text-lacre leading-none tracking-[-0.03em]">
                      {chapter.n}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                      Capítulo
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl md:text-4xl font-black tracking-tight leading-[1.05]">
                    {chapter.title}<span className="text-lacre">.</span>
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-piedra leading-[1.5] max-w-md">
                    {chapter.kicker}
                  </p>
                </header>

                {/* 2×2 grid of components */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-negro/10 border border-negro/10">
                  {chapter.items.map((item) => (
                    <div
                      key={item.slug}
                      className="group bg-papel p-6 md:p-8 flex flex-col min-h-[260px] hover:bg-arena/50 transition-colors duration-200"
                    >
                      <div className="aspect-[4/3] w-full mb-5 bg-arena/40 border border-negro/5 flex items-center justify-center overflow-hidden">
                        <AnatomiaIcon id={item.slug} className="w-full h-full p-6" />
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-black tracking-tight leading-tight">
                          {item.t}
                        </h3>
                        <TierBadge tiers={item.tiers} />
                      </div>
                      <p
                        className="mt-2 text-sm text-piedra leading-relaxed flex-1"
                        dangerouslySetInnerHTML={{ __html: item.d }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial anchor — el sistema impreso, no solo iconografiado */}
      <section className="bg-negro">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-3xl mb-14 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
              Impreso, no maquetado
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-papel">
              Así se ve un manual Tramarca cuando sale de imprenta<span className="text-lacre">.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-ceniza leading-[1.6]">
              Construcción del logotipo, paleta documentada, hex a pie de página,
              tira de calibración 4-color en la prueba. Cada decisión con su razón
              en la misma página. Si no se puede imprimir, no se entrega<span className="text-lacre">.</span>
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-4 md:gap-6">
            <figure className="md:col-span-8 relative aspect-[16/9] overflow-hidden bg-arena border border-papel/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
              <Image
                src="/hero-v5/anatomia-spread.jpg"
                alt="Doble página del manual Tramarca — sistema de construcción del logo a la izquierda y paleta de color a la derecha"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.3em] text-lacre">
                Fig. 04 · Spread 12/48
              </figcaption>
            </figure>
            <figure className="md:col-span-4 relative aspect-[16/9] md:aspect-auto overflow-hidden bg-papel border border-papel/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
              <Image
                src="/hero-v5/anatomia-cmyk.jpg"
                alt="Detalle macro de calibración 4-color CMYK más lacre sobre papel con retícula impresa"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.3em] text-negro">
                Fig. 05 · Calibración
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Tier comparison table */}
      <section className="bg-arena">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
              Comparativa
            </p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl font-black tracking-tight leading-[1.05] max-w-4xl">
              Qué incluye cada tier<span className="text-lacre">.</span>
              <span className="text-piedra"> Línea por línea<span className="text-lacre">.</span></span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-12 overflow-x-auto border border-negro/15 bg-papel">
              <table className="w-full text-left font-mono text-sm">
                <thead className="bg-negro text-papel">
                  <tr>
                    <th className="px-5 py-4 font-normal uppercase tracking-widest text-[10px]">Componente</th>
                    {TIERS.map((t) => (
                      <th key={t} className="px-5 py-4 font-normal uppercase tracking-widest text-[10px] text-center w-32">
                        {TIER_LABEL[t]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ANATOMIA.flatMap((ch) =>
                    ch.items.map((item, idx) => (
                      <tr key={item.slug} className="border-t border-negro/10 hover:bg-arena/40">
                        <td className="px-5 py-3">
                          <span className="text-piedra">{ch.n}.{idx + 1}</span>{" "}
                          <span className="text-negro">{item.t}</span>
                        </td>
                        {TIERS.map((t) => (
                          <td key={t} className="px-5 py-3 text-center">
                            {item.tiers.includes(t) ? (
                              <span className="inline-block w-2 h-2 rounded-full bg-lacre" />
                            ) : (
                              <span className="inline-block w-4 h-px bg-negro/20" />
                            )}
                          </td>
                        ))}
                      </tr>
                    )),
                  )}
                  <tr className="border-t-2 border-negro">
                    <td className="px-5 py-5 font-sans font-black">Total componentes</td>
                    {TIERS.map((t) => (
                      <td key={t} className="px-5 py-5 text-center font-sans font-black">
                        {ANATOMIA.reduce((s, c) => s + c.items.filter((i) => i.tiers.includes(t)).length, 0)}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-negro/15 bg-negro/5">
                    <td className="px-5 py-5 font-sans font-black">Precio (IVA incluido)</td>
                    <td className="px-5 py-5 text-center font-sans font-black font-display text-xl">490€</td>
                    <td className="px-5 py-5 text-center font-sans font-black font-display text-xl text-lacre">990€</td>
                    <td className="px-5 py-5 text-center font-sans font-black font-display text-xl">1.990€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-dark">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-lacre">
              Siguiente paso
            </p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Tu marca merece este nivel<span className="text-lacre">.</span>
              <br />
              <span className="text-ceniza">Empieza por hablarnos de ella<span className="text-lacre">.</span></span>
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-4">
            <ButtonLinkTracked
              href="/contacto"
              variant="primary"
              size="lg"
              trackAs="cta_pedir_propuesta"
              trackProps={{ location: "anatomia_cierre" }}
            >
              Pedir propuesta →
            </ButtonLinkTracked>
            <ButtonLinkTracked
              href="/precios"
              variant="ghost"
              size="lg"
              className="text-papel/80 hover:text-papel hover:bg-papel/5"
              trackAs="cta_ver_precios"
              trackProps={{ location: "anatomia_cierre" }}
            >
              Ver precios
            </ButtonLinkTracked>
          </div>
        </div>
      </section>
    </>
  );
}
