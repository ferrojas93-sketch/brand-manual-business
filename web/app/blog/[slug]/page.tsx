import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { POSTS, getPost, CATEGORY_LABEL } from "@/lib/blog";
import { getPostBody } from "@/content/blog";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/tiers";
import {
  jsonLdGraph,
  breadcrumbListSchema,
  articleSchema,
  faqPageSchema,
} from "@/lib/schema";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BlogScrollTracker } from "@/components/BlogScrollTracker";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      type: "article",
      publishedTime: p.publishedAt,
      modifiedTime: p.updatedAt ?? p.publishedAt,
      url: `${SITE_URL}/blog/${p.slug}`,
      images: [{ url: p.heroImage.src, alt: p.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
      images: [p.heroImage.src],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Body editorial desde registry estático (Turbopack-safe).
  const Body = getPostBody(post.slug);
  if (!Body) notFound();

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const schemaGraph = jsonLdGraph(
    breadcrumbListSchema([
      { name: "Inicio", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url: articleUrl },
    ]),
    articleSchema({
      url: articleUrl,
      headline: post.title,
      description: post.metaDescription,
      image: `${SITE_URL}${post.heroImage.src}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      keywords: [post.primaryKeyword, ...post.secondaryKeywords],
      section: CATEGORY_LABEL[post.category],
    }),
    ...(post.faqs?.length ? [faqPageSchema(post.faqs)] : [])
  );

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  // Posts relacionados · misma categoría, excluyendo el actual
  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2);

  return (
    <>
      <JsonLd data={schemaGraph} />
      <ReadingProgressBar />

      {/* Hero editorial */}
      <article>
        <section className="bg-papel border-b border-negro/10">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
              <span>
                <Link href="/blog" className="hover:text-lacre">Blog</Link>{" "}
                <span className="text-lacre">·</span>{" "}
                <Link href={`/blog?cat=${post.category}`} className="hover:text-lacre">
                  {CATEGORY_LABEL[post.category]}
                </Link>
              </span>
              <span className="hidden sm:inline">{formattedDate}</span>
              <span>{post.readingMinutes} min</span>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 pt-4 md:pt-8 pb-12 md:pb-16">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-lacre">
              {CATEGORY_LABEL[post.category]}
            </p>
            <h1 className="mt-5 font-sans font-black tracking-[-0.035em] leading-[1.02] text-negro text-4xl md:text-5xl lg:text-6xl">
              {post.title}<span className="text-lacre">.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-piedra leading-[1.55]">{post.excerpt}</p>
          </div>

          <div className="mx-auto max-w-[1300px] px-6 pb-12 md:pb-16">
            <figure className="relative aspect-[16/9] overflow-hidden bg-arena border border-negro/10 shadow-[0_40px_80px_-30px_rgba(12,12,12,0.25)]">
              <Image
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                fill
                sizes="(min-width: 1280px) 1300px, 100vw"
                className="object-cover"
                priority
              />
              {post.heroImage.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/70 via-negro/0 to-transparent p-5 md:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-papel">
                    {post.heroImage.caption}
                  </p>
                </figcaption>
              )}
            </figure>
          </div>
        </section>

        {/* Body */}
        <section className="bg-papel">
          <div className="mx-auto max-w-3xl px-6 py-12 md:py-20 post-body">
            <Body />
            <BlogScrollTracker slug={post.slug} />
          </div>
        </section>

        {/* Related posts · misma categoría */}
        {related.length > 0 && (
          <section className="bg-papel border-t border-negro/10">
            <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                También en {CATEGORY_LABEL[post.category]}
              </p>
              <h2 className="mt-4 text-2xl md:text-3xl font-black tracking-tight leading-[1.1]">
                Sigue leyendo<span className="text-lacre">.</span>
              </h2>
              <ul className="mt-8 space-y-6">
                {related.map((r) => (
                  <li key={r.slug} className="border-b border-negro/10 pb-6 last:border-b-0">
                    <Link href={`/blog/${r.slug}`} className="group block">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra-light">
                        {r.readingMinutes} min lectura
                      </p>
                      <h3 className="mt-2 text-xl md:text-2xl font-black tracking-tight leading-[1.15] group-hover:text-lacre transition-colors">
                        {r.title}<span className="text-lacre">.</span>
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-piedra leading-[1.55]">
                        {r.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="bg-arena border-y border-negro/10">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">FAQ</p>
              <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight leading-[1.1]">
                Preguntas frecuentes<span className="text-lacre">.</span>
              </h2>
              <div className="mt-10">
                <FaqAccordion items={post.faqs} />
              </div>
            </div>
          </section>
        )}

        {/* CTA cierre */}
        <section className="section-dark">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">
              ¿Tu manual, por escrito<span className="text-lacre">?</span>
            </h2>
            <p className="mt-6 text-lg text-ceniza max-w-xl mx-auto">
              Tres tiers · 490€ / 990€ / 1.990€ · IVA incluido · plazos publicados<span className="text-lacre">.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink
                href="/contacto"
                variant="invert"
                size="lg"
                trackAs="cta_pedir_propuesta"
                trackProps={{ location: "blog_cierre", slug: post.slug }}
              >
                Pedir propuesta en 24h →
              </ButtonLink>
              <ButtonLink
                href="/precios"
                variant="ghost"
                size="lg"
                trackAs="cta_ver_precios"
                trackProps={{ location: "blog_cierre", slug: post.slug }}
              >
                Ver precios
              </ButtonLink>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
