import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MANUALES, getManual } from "@/lib/manuales";
import { ButtonLink } from "@/components/Button";
import { SITE_URL } from "@/lib/tiers";

export function generateStaticParams() {
  return MANUALES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getManual(slug);
  if (!m) return {};
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

  const tierPath =
    typeof m.tier === "string" && m.tier !== "Propio" ? `/precios#${m.tier}` : "/precios";
  const tierLabel = typeof m.tier === "string" ? m.tier : "Propio";

  return (
    <>
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

      <section className="section-dark border-t border-papel/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            ¿Te encaja este tier?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href={tierPath} variant="invert" size="lg">
              Ver el tier {tierLabel} →
            </ButtonLink>
            <ButtonLink href="/contacto" variant="ghost" size="lg">
              Hablamos
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
