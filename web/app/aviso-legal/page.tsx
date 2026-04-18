import type { Metadata } from "next";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Tramarca. Titular, objeto del sitio y condiciones de uso.",
  alternates: { canonical: `${SITE_URL}/aviso-legal` },
};

export default function AvisoLegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lacre">Legal</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tighter">Aviso legal</h1>
      <p className="mt-4 font-mono text-xs text-piedra uppercase tracking-widest">
        Última actualización: abril 2026
      </p>

      <div className="mt-12 space-y-8 text-base md:text-lg text-negro/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">1. Titular del sitio</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
            de la Información y Comercio Electrónico (LSSI-CE), se informa de que el titular
            de este sitio web es Fernando Rojas Pacheco, en nombre de la marca comercial
            &ldquo;Tramarca&rdquo;, con domicilio a efectos de notificaciones en Madrid
            (España) y dirección de contacto electrónico:{" "}
            <a href="mailto:hola@tramarca.es" className="underline hover:text-lacre">
              hola@tramarca.es
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">2. Objeto</h2>
          <p>
            Este sitio web tiene por finalidad informar sobre los servicios productizados de
            manuales de marca ofrecidos por Tramarca (tiers Esencial, Profesional y Premium)
            y permitir a potenciales clientes contactar para solicitar información o
            propuesta. Todos los precios mostrados incluyen el IVA aplicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios
            del sitio y a no emplearlos para actividades ilícitas, lesivas de derechos de
            terceros o que puedan dañar, inutilizar o sobrecargar la web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">4. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio (textos, estructura, código, imágenes, diseños y
            manuales mostrados en el portfolio) son titularidad de Tramarca o de sus
            respectivos clientes, publicados con autorización. Queda prohibida su
            reproducción, distribución o transformación sin autorización expresa por
            escrito.
          </p>
          <p className="mt-3">
            Las marcas y logotipos de terceros mostrados como referencias o ejemplos
            pertenecen a sus respectivos titulares y se utilizan exclusivamente con fines
            informativos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">5. Responsabilidad</h2>
          <p>
            Tramarca se esfuerza por mantener la información del sitio actualizada, pero no
            garantiza la ausencia de errores ni la continuidad del servicio. No asume
            responsabilidad por los daños que puedan derivarse del uso de la información
            contenida en el sitio ni por los contenidos de sitios de terceros a los que se
            enlace.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">
            6. Legislación y jurisdicción
          </h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para cualquier
            controversia, las partes se someten a los Juzgados y Tribunales de Madrid, salvo
            que la normativa aplicable imponga un fuero distinto (por ejemplo, en relaciones
            con consumidores).
          </p>
        </section>
      </div>
    </section>
  );
}
