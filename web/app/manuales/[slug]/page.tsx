import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { MANUALES, getManual } from "@/lib/manuales";
import { ButtonLink } from "@/components/Button";
import { ManualRequestForm } from "@/components/ManualRequestForm";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import {
  jsonLdGraph,
  breadcrumbListSchema,
  creativeWorkSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  // Solo Tramarca tiene detail page — el resto redirige a /manuales
  return MANUALES.filter((m) => m.showDetail).map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getManual(slug);
  if (!m || !m.showDetail) return {};
  const tierLabel = typeof m.tier === "string" ? m.tier : "Propio";
  return {
    title: `${m.name} — manual de marca ${m.pages}pp`,
    description: `Caso: manual de marca ${m.pages} páginas entregado por Tramarca. Sistema, paleta, tipografía y guidelines de aplicación. Tier ${tierLabel}.`,
    alternates: { canonical: `${SITE_URL}/manuales/${m.slug}` },
  };
}

export default async function ManualDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getManual(slug);
  if (!m) notFound();
  if (!m.showDetail) redirect("/manuales");

  const tierPath =
    typeof m.tier === "string" && m.tier !== "Propio" ? `/precios#${m.tier}` : "/precios";
  const tierLabel = typeof m.tier === "string" ? m.tier : "Propio";

  const manualUrl = `${SITE_URL}/manuales/${m.slug}`;
  const schemaGraph = jsonLdGraph(
    breadcrumbListSchema([
      { name: "Inicio", url: SITE_URL },
      { name: "Manuales", url: `${SITE_URL}/manuales` },
      { name: m.name, url: manualUrl },
    ]),
    creativeWorkSchema({
      url: manualUrl,
      name: `${m.name} — manual de marca ${m.pages} páginas`,
      description: `Manual de marca ${m.pages} páginas entregado por Tramarca para ${m.name}. Sistema, paleta, tipografía y guidelines de aplicación.`,
      image: `${SITE_URL}/portfolio/${m.slug}-cover.jpg`,
      client: m.name,
      tier: tierLabel,
      pages: m.pages,
    })
  );

  return (
    <>
      <JsonLd data={schemaGraph} />
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-8">
          <Link
            href="/manuales"
            className="font-mono text-xs uppercase tracking-widest text-piedra hover:text-lacre"
          >
            ← Todos los manuales
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            {tierLabel} · {m.pages}pp · {m.year} · {m.sector}
          </p>
          <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            {m.name}
            <span className="text-lacre">.</span>
          </h1>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="relative aspect-[1756/1242] bg-arena border border-negro/10 overflow-hidden">
            <Image
              src={`/portfolio/${m.slug}-cover.jpg`}
              alt={m.altCover}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 space-y-12">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-lacre">Brief</h2>
            <p className="mt-4 text-2xl md:text-3xl font-medium leading-snug tracking-tight">
              {m.brief}
            </p>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-lacre">Dirección</h2>
            <p className="mt-4 text-lg md:text-xl text-negro/85 leading-relaxed">
              {m.direction}
            </p>
          </div>
        </div>
      </section>

      {slug === "tramarca" && (
        <section className="bg-papel border-y border-negro/10">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-widest text-lacre">
                  En mano
                </p>
                <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight leading-[1.1]">
                  El libro que queremos que salga de la propuesta<span className="text-lacre">.</span>
                </h2>
                <p className="mt-6 text-base md:text-lg text-piedra leading-[1.6]">
                  Tapa dura, encuadernación cosida, cream con el wordmark en el
                  centro. Lo que la imprenta entrega, lo que el cliente defiende.
                  Escala real, sin retoque<span className="text-lacre">.</span>
                </p>
              </div>
              <div className="lg:col-span-7">
                <figure className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-arena border border-negro/10 shadow-[0_40px_80px_-30px_rgba(12,12,12,0.3)]">
                  <Image
                    src="/hero-v5/tramarca-cover-hand.jpg"
                    alt="Mano sosteniendo el manual Tramarca cerrado — cream con wordmark y period lacre, escala real"
                    fill
                    sizes="(min-width: 1024px) 38vw, 80vw"
                    className="object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lacre mb-12">
            Spreads
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[3, 5, 7, 9, 11, 13].map((p, i) => (
              <div
                key={p}
                className="relative aspect-[1756/1242] bg-papel border border-negro/10 overflow-hidden"
              >
                <Image
                  src={`/portfolio/${m.slug}/spread-${String(p).padStart(2, "0")}.jpg`}
                  alt={`${m.name} — spread ${i + 1} del manual de marca por Tramarca`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lacre mb-10">
            Sistema en cifras
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { k: "Páginas", v: `${m.pages}pp` },
              { k: "Tier", v: tierLabel },
              { k: "Sector", v: m.sector },
              { k: "Año", v: String(m.year) },
            ].map((x) => (
              <div key={x.k} className="border-t border-negro pt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-piedra">
                  {x.k}
                </p>
                <p className="mt-2 text-3xl md:text-4xl font-black tracking-tight">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {m.quote && (
        <section className="section-dark">
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
            <p className="text-3xl md:text-5xl font-black tracking-tight leading-snug text-papel">
              &ldquo;{m.quote}&rdquo;
            </p>
            <p className="mt-8 font-mono text-xs text-piedra uppercase tracking-widest">
              — {m.name}
            </p>
          </div>
        </section>
      )}

      {slug === "tramarca" && (
        <section id="pedir-manual" className="bg-papel border-y border-negro/10 scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                  PDF completo
                </p>
                <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                  Llévatelo en PDF<span className="text-lacre">.</span>
                </h2>
                <p className="mt-5 max-w-md text-base md:text-lg text-piedra leading-[1.6]">
                  Las cincuenta y ocho páginas completas, tal cual las hemos
                  impreso. Déjanos tu email y te llega en menos de un minuto<span className="text-lacre">.</span>
                </p>
              </div>
              <div className="lg:col-span-6">
                <ManualRequestForm />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-dark border-t border-papel/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            ¿Te encaja este tier?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href={tierPath}
              variant="invert"
              size="lg"
              trackAs="cta_ver_tier"
              trackProps={{ tier: tierLabel }}
            >
              Ver el tier {tierLabel} →
            </ButtonLink>
            <ButtonLink
              href="/contacto"
              variant="ghost"
              size="lg"
              trackAs="cta_pedir_propuesta"
              trackProps={{ location: "manual_detail_cierre" }}
            >
              Pedir propuesta
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
