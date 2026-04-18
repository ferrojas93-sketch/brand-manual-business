import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { POSTS, CATEGORY_LABEL, type BlogCategory } from "@/lib/blog";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, breadcrumbListSchema, collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog · Notas sobre manuales de marca",
  description:
    "Guías, análisis de manuales famosos (NASA, Mailchimp, British Rail), curiosidades de logos y decisiones editoriales del estudio Tramarca. Contenido sin adornos.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const schemaGraph = jsonLdGraph(
  breadcrumbListSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ]),
  collectionPageSchema({
    url: `${SITE_URL}/blog`,
    name: "Blog Tramarca — Notas sobre manuales de marca",
    description:
      "Artículos editoriales sobre sistemas de marca, manuales famosos, curiosidades de logos y proceso de producción.",
    items: POSTS.map((p) => ({
      name: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      image: `${SITE_URL}${p.heroImage.src}`,
    })),
  })
);

const CATEGORIES: BlogCategory[] = ["guias", "analisis", "curiosidades", "proceso"];

const categoryTint: Record<BlogCategory, string> = {
  guias: "bg-papel",
  analisis: "bg-negro text-papel",
  curiosidades: "bg-arena",
  proceso: "bg-lacre text-papel",
};

export default function BlogIndexPage() {
  const all = [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const [featured, ...rest] = all;
  const categoryCount: Record<BlogCategory, number> = {
    guias: POSTS.filter((p) => p.category === "guias").length,
    analisis: POSTS.filter((p) => p.category === "analisis").length,
    curiosidades: POSTS.filter((p) => p.category === "curiosidades").length,
    proceso: POSTS.filter((p) => p.category === "proceso").length,
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Masthead editorial */}
      <section className="bg-papel border-b border-negro/15">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
            <span>Tramarca <span className="text-lacre">·</span> Blog</span>
            <span className="hidden md:inline">Notas del estudio</span>
            <span>Edición 1</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-piedra">
                Blog <span className="text-lacre">·</span> Sin adornos
              </p>
              <h1
                className="mt-5 font-sans font-black tracking-[-0.045em] leading-[0.88] text-negro"
                style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
              >
                Notas del<br />estudio<span className="text-lacre">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-piedra leading-[1.55]">
                Guías operativas, análisis de manuales famosos, curiosidades
                de logos y decisiones editoriales que tomamos por dentro. Un
                punto final al final<span className="text-lacre">.</span>
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-10">
              <div className="border-t-2 border-negro pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre mb-5">
                  Categorías
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map((c) => (
                    <li key={c}>
                      <Link
                        href={`/blog/categoria/${c}`}
                        className={`group block border border-negro/15 p-4 hover:border-lacre transition-colors ${categoryTint[c]}`}
                        aria-label={`Ver categoría ${CATEGORY_LABEL[c]}`}
                      >
                        <p className={`font-black text-lg md:text-xl tracking-tight ${c === "proceso" || c === "analisis" ? "text-papel group-hover:text-papel" : "text-negro group-hover:text-lacre"}`}>
                          {CATEGORY_LABEL[c]}<span className="text-lacre">.</span>
                        </p>
                        <p className={`mt-1 font-mono text-[10px] uppercase tracking-[0.25em] ${c === "proceso" || c === "analisis" ? "text-ceniza" : "text-piedra-light"}`}>
                          {categoryCount[c]} {categoryCount[c] === 1 ? "pieza" : "piezas"}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured · primera pieza full-bleed */}
      {featured && (
        <section className="bg-negro text-papel">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block"
          >
            <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-24">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-lacre">
                    Destacado <span className="text-piedra-light">·</span> {CATEGORY_LABEL[featured.category]}
                  </p>
                  <h2
                    className="mt-5 font-sans font-black tracking-[-0.04em] leading-[0.95] text-papel group-hover:text-lacre transition-colors"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                  >
                    {featured.title}<span className="text-lacre">.</span>
                  </h2>
                  <p className="mt-6 max-w-xl text-lg md:text-xl text-ceniza leading-[1.5]">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-piedra-light">
                    <span>
                      {new Intl.DateTimeFormat("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(featured.publishedAt))}
                    </span>
                    <span className="text-lacre">·</span>
                    <span>{featured.readingMinutes} min lectura</span>
                  </div>
                  <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-lacre underline underline-offset-4 group-hover:text-papel transition-colors">
                    Leer pieza completa →
                  </p>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <figure className="relative aspect-[4/5] overflow-hidden border border-papel/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                    <Image
                      src={featured.heroImage.src}
                      alt={featured.heroImage.alt}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-[900ms] ease-out"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/80 via-negro/30 to-transparent p-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-lacre">
                        {featured.heroImage.caption}
                      </p>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Resto · grid asimétrico */}
      {rest.length > 0 && (
        <section className="bg-papel">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
            <div className="flex items-baseline justify-between mb-12 pb-5 border-b border-negro/15">
              <h2 className="font-black text-2xl md:text-3xl tracking-tight">
                Más piezas<span className="text-lacre">.</span>
              </h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                {rest.length} publicad{rest.length === 1 ? "a" : "as"}
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {rest.map((p, i) => {
                // Pattern asimétrico: cada 4º post tiene layout más grande
                const isLarge = i === 0 || i === 3;
                return (
                  <li
                    key={p.slug}
                    className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
                  >
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <figure
                        className={`relative overflow-hidden bg-arena border border-negro/10 ${
                          isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={p.heroImage.src}
                          alt={p.heroImage.alt}
                          fill
                          sizes={
                            isLarge
                              ? "(min-width: 1024px) 62vw, 100vw"
                              : "(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 100vw"
                          }
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                        />
                        <span
                          className={`absolute top-4 left-4 font-mono text-[9px] uppercase tracking-[0.28em] px-2.5 py-1 ${
                            p.category === "analisis"
                              ? "bg-negro text-lacre"
                              : p.category === "proceso"
                              ? "bg-lacre text-papel"
                              : "bg-papel text-negro border border-negro/15"
                          }`}
                        >
                          {CATEGORY_LABEL[p.category]}
                        </span>
                      </figure>
                      <div className="mt-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra-light">
                          {new Intl.DateTimeFormat("es-ES", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }).format(new Date(p.publishedAt))}{" "}
                          <span className="text-lacre">·</span> {p.readingMinutes} min
                        </p>
                        <h3
                          className={`mt-3 font-black tracking-tight leading-[1.1] group-hover:text-lacre transition-colors ${
                            isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                          }`}
                        >
                          {p.title}<span className="text-lacre">.</span>
                        </h3>
                        <p className={`mt-3 text-piedra leading-[1.55] ${isLarge ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
                          {p.excerpt}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* CTA cierre · manual propio */}
      <section className="bg-arena border-t border-negro/10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                Mientras lees
              </p>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
                Hojea nuestro manual<span className="text-lacre">.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base md:text-lg text-piedra leading-[1.55]">
                Cincuenta y ocho páginas aplicando los principios a nosotros
                mismos. PDF gratuito, te llega al momento<span className="text-lacre">.</span>
              </p>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
              <Link
                href="/#pedir-manual"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-medium tracking-tight bg-negro text-papel hover:bg-lacre transition-colors"
              >
                Pedir manual en PDF →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
