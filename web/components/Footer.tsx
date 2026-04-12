import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="section-dark mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo invert />
            <p className="mt-4 text-sm text-ceniza leading-relaxed">
              Tu marca, sin improvisar. Producimos sistemas de marca documentados. Lo que no se escribe, se improvisa.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-piedra font-mono mb-4">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/precios" className="hover:text-lacre transition-colors">Precios</Link></li>
              <li><Link href="/manuales" className="hover:text-lacre transition-colors">Manuales</Link></li>
              <li><Link href="/sobre" className="hover:text-lacre transition-colors">Sobre Tramarca</Link></li>
              <li><Link href="/contacto" className="hover:text-lacre transition-colors">Hablemos de tu marca</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-piedra font-mono mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/aviso-legal" className="hover:text-lacre transition-colors">Aviso legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-lacre transition-colors">Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-lacre transition-colors">Cookies</Link></li>
              <li><Link href="/condiciones" className="hover:text-lacre transition-colors">Condiciones</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-piedra font-mono mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hola@tramarca.es" className="hover:text-lacre transition-colors">
                  hola@tramarca.es
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tramarca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lacre transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-papel/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-piedra">
            Tramarca · Tu marca, sin improvisar · España
          </p>
          <p className="font-mono text-xs text-piedra">© 2026 Tramarca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
