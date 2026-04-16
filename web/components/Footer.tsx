import Link from "next/link";
import { Logo } from "./Logo";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        {/* Colophon editorial — tipo masthead de revista */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 pb-16 border-b border-papel/10">
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

        {/* Specimen sheet — typography + edition credit */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-piedra-light">
          <div>
            <p className="text-lacre mb-2">Edición</p>
            <p className="text-ceniza">Madrid <span className="text-lacre">·</span> Edición 1 <span className="text-lacre">·</span> {YEAR}</p>
          </div>
          <div>
            <p className="text-lacre mb-2">Tipografía</p>
            <p className="text-ceniza">Satoshi (display) <span className="text-lacre">·</span> IBM Plex Mono (spec)</p>
          </div>
          <div>
            <p className="text-lacre mb-2">Método</p>
            <p className="text-ceniza">Diseñado y escrito <span className="text-lacre">·</span> 100% asíncrono</p>
          </div>
        </div>

        {/* Copyright line */}
        <div className="mt-10 pt-6 border-t border-papel/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra-light">
            © {YEAR} Tramarca. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra-light">
            Impreso en{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lacre transition-colors"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
