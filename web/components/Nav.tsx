import Link from "next/link";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { MobileMenu } from "./MobileMenu";

const LINKS = [
  { href: "/anatomia", label: "Anatomía" },
  { href: "/precios", label: "Precios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Nosotros" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-papel/95 backdrop-blur-md border-b border-negro/15">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-negro hover:text-lacre focus-visible:outline-2 focus-visible:outline-lacre focus-visible:outline-offset-4 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ButtonLink href="/contacto" variant="primary" size="md">
              Pedir propuesta
            </ButtonLink>
          </div>
          <MobileMenu links={LINKS} />
        </div>
      </nav>
    </header>
  );
}
