import type { Metadata } from "next";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Tramarca. Tipos de cookies utilizadas y opciones de configuración.",
  alternates: { canonical: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lacre">Legal</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tighter">
        Política de cookies
      </h1>
      <p className="mt-4 font-mono text-xs text-piedra uppercase tracking-widest">
        Última actualización: abril 2026
      </p>

      <div className="mt-12 space-y-8 text-base md:text-lg text-negro/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">1. Qué son las cookies</h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web guarda en tu
            navegador para recordar información sobre tu visita. Esta política describe qué
            cookies usa tramarca.es y cómo puedes gestionarlas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">2. Cookies que utilizamos</h2>
          <p>
            Actualmente tramarca.es <strong>solo utiliza cookies estrictamente técnicas</strong>{" "}
            necesarias para que el sitio funcione (por ejemplo, proteger el formulario frente
            a abuso mediante tokens de sesión). Estas cookies están exentas del requisito de
            consentimiento previo conforme a la Guía sobre el uso de cookies de la AEPD
            (enero 2024).
          </p>
          <p className="mt-3">
            <strong>No utilizamos:</strong> cookies publicitarias, cookies de redes sociales,
            píxeles de seguimiento de terceros ni cookies analíticas personalizadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">3. Tabla de cookies</h2>
          <div className="overflow-x-auto">
            <table className="mt-3 w-full text-sm border border-negro/10">
              <thead className="bg-arena">
                <tr>
                  <th className="text-left p-3 border-b border-negro/10">Cookie</th>
                  <th className="text-left p-3 border-b border-negro/10">Finalidad</th>
                  <th className="text-left p-3 border-b border-negro/10">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-negro/10 font-mono text-xs">
                    __vercel_*
                  </td>
                  <td className="p-3 border-b border-negro/10">
                    Seguridad y despliegue (proveedor de hosting Vercel).
                  </td>
                  <td className="p-3 border-b border-negro/10">Sesión</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">4. Analítica futura</h2>
          <p>
            Si en el futuro activamos una herramienta de analítica, será una solución
            respetuosa con la privacidad (datos agregados, sin identificadores personales,
            sin transferencia a terceros con fines publicitarios). Actualizaremos esta
            página e incluiremos un banner de consentimiento antes de activarla, conforme a
            la normativa vigente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">
            5. Cómo gestionar las cookies
          </h2>
          <p>
            Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Ten
            en cuenta que bloquear cookies técnicas puede afectar al funcionamiento del
            sitio.
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lacre"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lacre"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lacre"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lacre"
              >
                Edge
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
