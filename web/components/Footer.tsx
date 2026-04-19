import Link from "next/link";
import { Logo } from "./Logo";

const YEAR = 2026;

const navLinks = [
  { href: "/anatomia", label: "Anatomía" },
  { href: "/precios", label: "Precios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/blog", label: "Blog" },
  { href: "/glosario", label: "Glosario" },
  { href: "/sobre", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/condiciones", label: "Condiciones" },
];

export function Footer() {
  return (
    <footer className="section-dark border-t border-papel/10">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        {/* Top row: brand + email inline masthead */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 sm:gap-6">
          <div className="flex items-baseline gap-4 flex-wrap">
            <Logo invert />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-piedra-light">
              Estudio editorial <span className="text-lacre">·</span> Madrid
            </p>
          </div>
          <a
            href="mailto:hola@tramarca.es"
            className="font-black text-base md:text-lg text-papel hover:text-lacre transition-colors tracking-tight shrink-0"
          >
            hola@tramarca.es<span className="text-lacre">.</span>
          </a>
        </div>

        {/* Middle row: nav + legal inline flex-wrap */}
        <nav
          aria-label="Navegación del pie"
          className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ceniza"
        >
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-lacre transition-colors">
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/company/tramarca"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lacre transition-colors"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
        </nav>

        {/* Bottom: legal inline + copyright strip */}
        <div className="mt-5 pt-5 border-t border-papel/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-piedra-light">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lacre transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="shrink-0">
            © {YEAR} Tramarca<span className="text-lacre">.</span> Madrid <span className="text-lacre">·</span> Edición 1
          </p>
        </div>
      </div>
    </footer>
  );
}
