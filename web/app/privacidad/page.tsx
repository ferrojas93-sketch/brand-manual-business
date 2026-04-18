import type { Metadata } from "next";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Tramarca. Tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: `${SITE_URL}/privacidad` },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lacre">Legal</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tighter">
        Política de privacidad
      </h1>
      <p className="mt-4 font-mono text-xs text-piedra uppercase tracking-widest">
        Última actualización: abril 2026
      </p>

      <div className="mt-12 space-y-8 text-base md:text-lg text-negro/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">1. Responsable del tratamiento</h2>
          <p>
            Responsable: Fernando Rojas Pacheco, titular de la marca comercial Tramarca. Contacto:{" "}
            <a href="mailto:hola@tramarca.es" className="underline hover:text-lacre">
              hola@tramarca.es
            </a>
            . Ámbito territorial: España / Unión Europea.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">2. Datos que tratamos</h2>
          <p>A través del formulario de contacto recogemos:</p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Empresa o proyecto</li>
            <li>Tier de interés (Esencial, Profesional, Premium o indefinido)</li>
            <li>Mensaje o consulta</li>
            <li>Fecha y hora de consentimiento</li>
          </ul>
          <p className="mt-3">
            No recogemos datos de categorías especiales (art. 9 RGPD) ni datos de menores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">3. Finalidad</h2>
          <p>Tratamos tus datos con dos finalidades:</p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>Responder a tu consulta y, en su caso, preparar una propuesta comercial.</li>
            <li>
              Gestionar la relación comercial posterior (envío de propuesta, contrato,
              kickoff, entregables y facturación) si decides contratar un servicio.
            </li>
          </ul>
          <p className="mt-3">
            No utilizamos tus datos para publicidad de terceros, perfilado automatizado ni
            decisiones automáticas que te produzcan efectos jurídicos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">4. Base legal</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <strong>Consentimiento</strong> (art. 6.1.a RGPD) para el envío del formulario.
            </li>
            <li>
              <strong>Ejecución de contrato</strong> (art. 6.1.b RGPD) si formalizamos un
              encargo.
            </li>
            <li>
              <strong>Obligación legal</strong> (art. 6.1.c RGPD) para conservación fiscal de
              facturas (Ley 58/2003 General Tributaria: 4 años; Código de Comercio: 6 años).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">5. Plazos de conservación</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              Leads sin contratación: hasta 24 meses desde el último contacto o hasta que
              solicites la supresión.
            </li>
            <li>Clientes: durante la relación contractual y 6 años adicionales (obligación mercantil).</li>
            <li>
              Facturas y documentación fiscal: 4 años (AEAT) / 6 años (Código de Comercio).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">6. Destinatarios (encargados)</h2>
          <p>
            No cedemos tus datos a terceros con fines comerciales. Utilizamos los siguientes
            proveedores como encargados del tratamiento, todos ellos con cláusulas RGPD:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <strong>Supabase</strong> (almacenamiento de leads — infraestructura en la UE).
            </li>
            <li>
              <strong>Resend</strong> (envío transaccional de correos — cláusulas contractuales
              tipo de la Comisión Europea para transferencias fuera del EEE).
            </li>
            <li>
              <strong>Vercel</strong> (hosting — cláusulas contractuales tipo de la Comisión
              Europea para transferencias fuera del EEE).
            </li>
            <li>
              <strong>Stripe Payments Europe, Ltd.</strong> (pasarela de pago — Irlanda, UE),
              solo si decides pagar un servicio contratado.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">7. Tus derechos</h2>
          <p>
            Puedes ejercer en cualquier momento los derechos de acceso, rectificación,
            supresión, oposición, limitación del tratamiento, portabilidad y a no ser objeto
            de decisiones automatizadas, escribiendo a{" "}
            <a href="mailto:hola@tramarca.es" className="underline hover:text-lacre">
              hola@tramarca.es
            </a>
            , indicando claramente el derecho que ejerces y acompañando copia de un
            documento que acredite tu identidad.
          </p>
          <p className="mt-3">
            Si consideras que el tratamiento no se ajusta a la normativa, puedes reclamar
            ante la Agencia Española de Protección de Datos:{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lacre"
            >
              aepd.es
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">8. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger tus datos:
            cifrado en tránsito (HTTPS), control de acceso con claves de servicio, registros
            de auditoría y segregación de entornos. Ningún sistema es 100% infalible; ante
            un incidente que afecte a tus datos, te lo comunicaremos conforme al art. 34
            RGPD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">9. Cambios</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios legales, técnicos o de
            servicio. Publicaremos la versión actualizada en esta misma página con su fecha.
          </p>
        </section>
      </div>
    </section>
  );
}
