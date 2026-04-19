import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 pt-24 md:pt-40 pb-24 md:pb-40">
        <p className="font-mono text-xs uppercase tracking-widest text-lacre">404</p>
        <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
          Esta página no existe<span className="text-lacre">.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-xl md:text-2xl text-piedra leading-relaxed">
          Como las reglas de marca que no están escritas.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <ButtonLink href="/contacto" variant="primary" size="lg">
            Pedir propuesta →
          </ButtonLink>
          <ButtonLink href="/precios" variant="ghost" size="lg">
            Ver precios
          </ButtonLink>
          <ButtonLink href="/trabajos" variant="ghost" size="lg">
            Ver trabajos
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
