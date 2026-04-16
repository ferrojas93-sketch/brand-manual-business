import Link from "next/link";
import { Logo } from "./Logo";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        {/* Colophon editorial — tipo masthead de revista */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 pb-10 border-b border-papel/10">
          <div className="md:col-span-5">
            <Logo invert />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-lacre">
              Colofón
            </p>
            <p className="mt-4 text-base text-ceniza leading-relaxed">
              Tramarca. Estudio editorial de manuales de marca.
              <br />
              Precio cerrado, plazo publicado, sistema documentado.
              <br />
              Si necesitas verlos antes de creerte nada, están{" "}
              <Link
                href="/manuales"
                className="text-papel underline decoration-lacre decoration-2 underline-offset-4 hover:text-lacre transition-colors"
              >
                aquí
              </Link>
              <span className="text-lacre">.</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lacre mb-4">
              Índice
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/manuales" className="text-ceniza hover:text-lacre transition-colors">
                  Manuales
                </Link>
              </li>
              <li>
                <Link href="/anatomia" className="text-ceniza hover:text-lacre transition-colors">
                  Anatomía
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-ceniza hover:text-lacre transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-ceniza hover:text-lacre transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-ceniza hover:text-lacre transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lacre mb-4">
              Legal
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/aviso-legal" className="text-ceniza hover:text-lacre transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-ceniza hover:text-lacre transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-ceniza hover:text-lacre transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/condiciones" className="text-ceniza hover:text-lacre transition-colors">
                  Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-lacre mb-4">
              Contacto
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hola@tramarca.es"
                  className="text-ceniza hover:text-lacre transition-colors break-words"
                >
                  hola@tramarca.es
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tramarca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ceniza hover:text-lacre transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright line */}
        <div className="mt-8 pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra-light">
            © {YEAR} Tramarca. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra-light">
            Madrid <span className="text-lacre">·</span> España
          </p>
        </div>
      </div>
    </footer>
  );
}
