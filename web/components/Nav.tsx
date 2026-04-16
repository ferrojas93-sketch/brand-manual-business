import Link from "next/link";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

const LINKS = [
  { href: "/precios", label: "Precios" },
  { href: "/anatomia", label: "Anatomía" },
  { href: "/manuales", label: "Manuales" },
  { href: "/sobre", label: "Nosotros" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-papel/80 border-b border-negro/10">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-negro/80 hover:text-negro transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <ButtonLink href="/contacto" variant="primary" size="md">
          Hablemos de tu marca
        </ButtonLink>
      </nav>
    </header>
  );
}
