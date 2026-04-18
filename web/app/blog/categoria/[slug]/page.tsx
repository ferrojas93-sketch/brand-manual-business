import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  POSTS,
  CATEGORY_LABEL,
  CATEGORY_KICKER,
  type BlogCategory,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, breadcrumbListSchema, collectionPageSchema } from "@/lib/schema";

const CATEGORIES: BlogCategory[] = ["guias", "analisis", "curiosidades", "proceso"];

export function generateStaticParams() {
  return CATEGORIES.map((slug) => ({ slug }));
}

function isValidCategory(slug: string): slug is BlogCategory {
  return (CATEGORIES as string[]).includes(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidCategory(slug)) return {};
  const label = CATEGORY_LABEL[slug];
  return {
    title: `${label} · Blog`,
    description: `Piezas editoriales Tramarca en la categoría ${label}. ${CATEGORY_KICKER[slug]}`,
    alternates: { canonical: `${SITE_URL}/blog/categoria/${slug}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isValidCategory(slug)) notFound();

  const posts = POSTS.filter((p) => p.category === slug).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const schemaGraph = jsonLdGraph(
    breadcrumbListSchema([
      { name: "Inicio", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: CATEGORY_LABEL[slug], url: `${SITE_URL}/blog/categoria/${slug}` },
    ]),
    collectionPageSchema({
      url: `${SITE_URL}/blog/categoria/${slug}`,
      name: `Tramarca · Blog · ${CATEGORY_LABEL[slug]}`,
      description: CATEGORY_KICKER[slug],
      items: posts.map((p) => ({
        name: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        image: `${SITE_URL}${p.heroImage.src}`,
      })),
    })
  );

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Masthead editorial */}
      <section className="bg-papel border-b border-negro/15">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
            <Link href="/blog" className="hover:text-lacre">
              ← Blog
            </Link>
            <span className="hidden md:inline">{CATEGORY_LABEL[slug]}</span>
            <span>{posts.length} {posts.length === 1 ? "pieza" : "piezas"}</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-14 md:pb-20">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-lacre">
            Categoría
          </p>
          <h1
            className="mt-5 font-sans font-black tracking-[-0.04em] leading-[0.9] text-negro"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            {CATEGORY_LABEL[slug]}<span className="text-lacre">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-piedra leading-[1.55]">
            {CATEGORY_KICKER[slug]}
          </p>
        </div>
      </section>

      {/* Piezas */}
      <section className="bg-arena">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
          {posts.length === 0 ? (
            <p className="font-mono text-sm text-piedra">
              Primera pieza en camino · vuelve pronto.
            </p>
          ) : (
            <ul className="grid md:grid-cols-2 gap-10 md:gap-14">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <figure className="relative aspect-[4/3] overflow-hidden bg-papel border border-negro/10">
                      <Image
                        src={p.heroImage.src}
                        alt={p.heroImage.alt}
                        fill
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-[700ms] ease-out"
                      />
                    </figure>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-piedra-light">
                      {new Intl.DateTimeFormat("es-ES", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(p.publishedAt))}{" "}
                      <span className="text-lacre">·</span> {p.readingMinutes} min
                    </p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-black tracking-tight leading-[1.1] group-hover:text-lacre transition-colors">
                      {p.title}<span className="text-lacre">.</span>
                    </h2>
                    <p className="mt-3 text-base text-piedra leading-[1.55]">
                      {p.excerpt}
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
