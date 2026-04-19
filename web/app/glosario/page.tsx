import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, breadcrumbListSchema } from "@/lib/schema";
import {
  TERMINOS,
  CATEGORIAS,
  type Categoria,
  type TerminoGlosario,
} from "@/lib/glosario";

export const metadata: Metadata = {
  title: "Glosario editorial · 40 términos clave de manuales de marca",
  description:
    "Glosario operativo de tipografía, color, layout, manual de marca y producción editorial. 40 términos definidos con ejemplos reales aplicados en los manuales que producimos.",
  alternates: { canonical: `${SITE_URL}/glosario` },
};

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glosario editorial Tramarca",
  description:
    "40 términos clave de tipografía, color, layout, manual de marca y producción editorial.",
  url: `${SITE_URL}/glosario`,
  hasDefinedTerm: TERMINOS.map((t) => ({
    "@type": "DefinedTerm",
    name: t.termino,
    description: t.definicion,
    url: `${SITE_URL}/glosario#${t.slug}`,
    inDefinedTermSet: `${SITE_URL}/glosario`,
    termCode: t.slug,
  })),
};

const schemaGraph = jsonLdGraph(
  breadcrumbListSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Glosario", url: `${SITE_URL}/glosario` },
  ]),
  definedTermSetSchema
);

const ORDER: Categoria[] = [
  "tipografia",
  "color",
  "layout",
  "manual",
  "produccion",
];

function TermCard({ t }: { t: TerminoGlosario }) {
  return (
    <article
      id={t.slug}
      className="group scroll-mt-24 border-t border-negro/15 pt-8 pb-2"
    >
      <header className="flex items-baseline justify-between gap-4 mb-4">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-negro">
          {t.termino}
          <span className="text-lacre">.</span>
        </h3>
        <a
          href={`#${t.slug}`}
          aria-label={`Enlace permanente al término ${t.termino}`}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra hover:text-lacre transition-colors"
        >
          #{t.slug}
        </a>
      </header>
      <p className="text-base md:text-lg text-negro/85 leading-[1.6] max-w-2xl">
        {t.definicion}
      </p>
      {t.ejemplo && (
        <p className="mt-4 text-sm md:text-base text-piedra leading-[1.55] max-w-2xl border-l-2 border-lacre pl-4 italic">
          {t.ejemplo}
        </p>
      )}
      {t.relacionados && t.relacionados.length > 0 && (
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-piedra">
          Relacionados ·{" "}
          {t.relacionados.map((slug, i) => (
            <span key={slug}>
              <a
                href={`#${slug}`}
                className="text-negro/70 hover:text-lacre transition-colors normal-case tracking-normal"
              >
                {slug.replace(/-/g, " ")}
              </a>
              {i < t.relacionados!.length - 1 && (
                <span className="text-piedra"> · </span>
              )}
            </span>
          ))}
        </p>
      )}
    </article>
  );
}

export default function GlosarioPage() {
  return (
    <>
      <JsonLd data={schemaGraph} />

      <section className="bg-papel border-b border-negro/15">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
            <span>
              XVII <span className="text-lacre">·</span> Glosario
            </span>
            <span className="hidden md:inline">40 términos editoriales</span>
            <span>Tramarca.es/glosario</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-piedra">
                Glosario <span className="text-lacre">·</span> 40 términos clave
              </p>
              <h1
                className="mt-5 font-sans font-black tracking-[-0.04em] leading-[0.9] text-negro"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                El vocabulario<br />
                que usamos<span className="text-lacre">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-piedra leading-[1.55]">
                Cuarenta términos editoriales que aparecen en cada manual
                que producimos y en cada artículo del blog. Definidos con
                ejemplos reales aplicados, no diccionario abstracto<span className="text-lacre">.</span>
              </p>
            </div>
            <div className="lg:col-span-5">
              <nav
                aria-label="Categorías del glosario"
                className="bg-arena/60 border border-negro/10 p-6 md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre mb-4">
                  Categorías
                </p>
                <ul className="space-y-3">
                  {ORDER.map((cat) => {
                    const count = TERMINOS.filter(
                      (t) => t.categoria === cat
                    ).length;
                    return (
                      <li key={cat}>
                        <a
                          href={`#cat-${cat}`}
                          className="flex items-baseline justify-between text-base md:text-lg font-bold text-negro hover:text-lacre transition-colors"
                        >
                          <span>{CATEGORIAS[cat]}</span>
                          <span className="font-mono text-xs text-piedra">
                            {count} términos
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-papel">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 md:py-20">
          {ORDER.map((cat) => {
            const items = TERMINOS.filter((t) => t.categoria === cat);
            if (items.length === 0) return null;
            return (
              <section
                key={cat}
                id={`cat-${cat}`}
                className="scroll-mt-24 mb-16 md:mb-24 last:mb-0"
              >
                <header className="border-b border-negro pb-6 mb-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                    Categoría {ORDER.indexOf(cat) + 1} · {items.length} términos
                  </p>
                  <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-negro">
                    {CATEGORIAS[cat]}
                    <span className="text-lacre">.</span>
                  </h2>
                </header>
                <div>
                  {items.map((t) => (
                    <TermCard key={t.slug} t={t} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="section-dark border-t border-papel/10">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
            Aplicado en cada manual
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Si te interesa ver el vocabulario<br />
            en producción real<span className="text-lacre">.</span>
          </h2>
          <p className="mt-8 text-lg text-ceniza max-w-2xl mx-auto leading-[1.6]">
            Los cinco casos de estudio del portfolio documentan cómo cada
            uno de estos términos se aplica en proyectos concretos. Nada
            de teoría sin práctica<span className="text-lacre">.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/trabajos"
              className="inline-flex items-center justify-center gap-2 bg-papel text-negro px-8 py-4 font-bold hover:bg-lacre hover:text-papel transition-colors"
            >
              Ver casos de estudio →
            </Link>
            <Link
              href="/anatomia"
              className="inline-flex items-center justify-center gap-2 border border-papel/40 text-papel px-8 py-4 font-bold hover:bg-papel/10 transition-colors"
            >
              Anatomía de un manual
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
