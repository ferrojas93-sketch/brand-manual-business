import type { Metadata } from "next";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Condiciones generales de contratación",
  description:
    "Condiciones generales de contratación de Tramarca: tiers, pagos, plazos, revisiones, propiedad y cancelación.",
  alternates: { canonical: `${SITE_URL}/condiciones` },
};

export default function CondicionesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lacre">Legal</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tighter">
        Condiciones generales
      </h1>
      <p className="mt-4 font-mono text-xs text-piedra uppercase tracking-widest">
        Última actualización: abril 2026
      </p>

      <div className="mt-12 space-y-8 text-base md:text-lg text-negro/85 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">1. Partes y aceptación</h2>
          <p>
            Estas condiciones regulan la relación entre Tramarca (Fernando Rojas Pacheco, titular
            de la marca comercial, contacto{" "}
            <a href="mailto:hola@tramarca.es" className="underline hover:text-lacre">
              hola@tramarca.es
            </a>
            ) y el cliente que formaliza la contratación de un servicio. La contratación
            efectiva se perfecciona cuando el cliente acepta por escrito (email suficiente)
            la propuesta enviada por Tramarca y abona el primer pago.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">2. Tiers y precios</h2>
          <p>
            Tramarca comercializa tres tiers estándar:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <strong>Esencial</strong> — 490 € (IVA incluido)
            </li>
            <li>
              <strong>Profesional</strong> — 990 € (IVA incluido)
            </li>
            <li>
              <strong>Premium</strong> — 1.990 € (IVA incluido)
            </li>
          </ul>
          <p className="mt-3">
            El alcance, número de páginas, entregables y revisiones de cada tier se detallan
            en{" "}
            <a href="/precios" className="underline hover:text-lacre">
              /precios
            </a>
            . El precio incluye el IVA al tipo general vigente (21%). Cualquier trabajo
            fuera del alcance se presupuesta aparte por escrito antes de ejecutarse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">3. Pago</h2>
          <p>
            El pago se estructura en dos hitos: <strong>50% al kickoff</strong> (inicio del
            proyecto tras brief firmado) y <strong>50% a la entrega final</strong> (aceptación
            de los archivos). Métodos disponibles: transferencia SEPA o tarjeta a través de
            Stripe. Emitimos factura electrónica con IVA desglosado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">4. Plazos</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>Esencial: 5 días laborables desde kickoff.</li>
            <li>Profesional: 7 días laborables desde kickoff.</li>
            <li>Premium: 10 días laborables desde kickoff.</li>
          </ul>
          <p className="mt-3">
            Se considera &ldquo;kickoff&rdquo; la fecha en que se cumplen dos condiciones:
            brief firmado por el cliente y primer pago recibido. Las demoras imputables al
            cliente (respuestas tardías, cambios de alcance, material no entregado)
            prorrogan el plazo en la misma cuantía.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">5. Revisiones</h2>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>Esencial: 1 ronda de revisión.</li>
            <li>Profesional: 2 rondas.</li>
            <li>Premium: 2 rondas + ajustes finales.</li>
          </ul>
          <p className="mt-3">
            Cada ronda cubre cambios acotados sobre la dirección aprobada (ajustes de
            tipografía, paleta, copy puntual, layout de elementos existentes). Un cambio de
            dirección creativa o la incorporación de nuevos entregables supone un
            presupuesto adicional, que se comunica por escrito antes de ejecutar.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">6. Propiedad intelectual</h2>
          <p>
            Una vez completado el pago íntegro del proyecto, la propiedad de los diseños
            entregados (manual de marca y archivos fuente) pasa al cliente, con carácter
            exclusivo y con ámbito mundial. Hasta ese momento, Tramarca conserva la
            titularidad.
          </p>
          <p className="mt-3">
            Tramarca se reserva el derecho de incluir el proyecto en su portfolio (web,
            redes, materiales comerciales), salvo pacto expreso por escrito en contrario. Si
            el cliente requiere confidencialidad, debe solicitarla antes del kickoff; puede
            implicar un recargo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">7. Cancelación y desistimiento</h2>
          <p>
            <strong>Antes del kickoff:</strong> una vez recibido el primer pago y firmado
            el brief, el cliente puede cancelar el encargo sin obligación de afrontar el
            segundo pago. El primer pago cubre los trabajos preparatorios ya iniciados
            (revisión del brief, planificación de producción y bloqueo de calendario) y
            no es reembolsable.
          </p>
          <p className="mt-3">
            <strong>Tras el kickoff:</strong> Tramarca retiene el 50% ya abonado en concepto
            de producción iniciada. No se facturará el segundo pago.
          </p>
          <p className="mt-3">
            <strong>Consumidores (persona física sin fines profesionales):</strong> de
            acuerdo con el art. 103.a del Real Decreto Legislativo 1/2007, el derecho de
            desistimiento no aplica cuando la prestación del servicio ha comenzado con el
            consentimiento expreso del consumidor y la aceptación de que perderá tal
            derecho. El cliente consumidor consiente expresamente este extremo al firmar el
            brief de kickoff.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">8. Garantía</h2>
          <p>
            Tramarca entrega los archivos revisados y funcionales. Si se detecta un error
            imputable a Tramarca dentro de los 14 días siguientes a la entrega final (error
            tipográfico en ficha técnica, archivo corrupto, etc.), se corrige sin coste.
            Esta garantía no cubre cambios de criterio del cliente ni adaptaciones a nuevos
            canales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">9. Responsabilidad</h2>
          <p>
            La responsabilidad máxima de Tramarca frente al cliente, por cualquier concepto,
            se limita al importe efectivamente abonado por el proyecto concreto objeto de
            reclamación. No se responde de daños indirectos, lucro cesante ni pérdida de
            oportunidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black tracking-tight mb-3">10. Ley aplicable y foro</h2>
          <p>
            Estas condiciones se rigen por la legislación española. Para cualquier
            controversia, las partes se someten a los Juzgados y Tribunales de Madrid, salvo
            que el cliente sea consumidor, en cuyo caso será competente el juzgado de su
            domicilio conforme al art. 52.3 LEC.
          </p>
        </section>
      </div>
    </section>
  );
}
