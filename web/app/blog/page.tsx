import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { POSTS, CATEGORY_LABEL, CATEGORY_KICKER, type BlogCategory } from "@/lib/blog";
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

export default function BlogIndexPage() {
  const recent = [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Masthead editorial */}
      <section className="bg-papel border-b border-negro/15">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
            <span>Tramarca <span className="text-lacre">·</span> Blog</span>
            <span className="hidden md:inline">Notas del estudio</span>
            <span>Edición 1</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-piedra">
                Blog <span className="text-lacre">·</span> Sin adornos
              </p>
              <h1
                className="mt-5 font-sans font-black tracking-[-0.04em] leading-[0.9] text-negro"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                Notas del estudio<span className="text-lacre">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-piedra leading-[1.6]">
                Guías operativas, análisis de manuales famosos, curiosidades
                de logos y decisiones editoriales que tomamos por dentro. Un
                punto final al final<span className="text-lacre">.</span>
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre mb-4">
                Categorías
              </p>
              <ul className="space-y-3">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <Link
                      href={`/blog?cat=${c}`}
                      className="group flex items-baseline justify-between border-b border-negro/15 pb-2 hover:border-lacre transition-colors"
                    >
                      <span className="text-lg font-black tracking-tight group-hover:text-lacre transition-colors">
                        {CATEGORY_LABEL[c]}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-piedra-light">
                        {CATEGORY_KICKER[c]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Listado de piezas */}
      <section className="bg-arena">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
          {recent.length === 0 ? (
            <p className="font-mono text-sm text-piedra">
              Publicando primera pieza · vuelve en unos días.
            </p>
          ) : (
            <ul className="grid md:grid-cols-2 gap-10 md:gap-14">
              {recent.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <figure className="relative aspect-[16/11] overflow-hidden bg-papel border border-negro/10">
                      <Image
                        src={p.heroImage.src}
                        alt={p.heroImage.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-[700ms] ease-out"
                      />
                    </figure>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-lacre">
                      {CATEGORY_LABEL[p.category]} <span className="text-piedra-light">·</span>{" "}
                      {new Intl.DateTimeFormat("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(p.publishedAt))}
                    </p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-black tracking-tight leading-[1.1] group-hover:text-lacre transition-colors">
                      {p.title}<span className="text-lacre">.</span>
                    </h2>
                    <p className="mt-3 text-base text-piedra leading-[1.55]">{p.excerpt}</p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-piedra-light">
                      {p.readingMinutes} min de lectura
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
