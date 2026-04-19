import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Anfisbena · 43 páginas · Profesional · 2026
 * Marca de ropa contemporánea con sistema visual inconsistente.
 */
export default function CasoAnfisbena() {
  return (
    <div className="prose-editorial">
      <h2>El brief · siete años de marca operando sin red</h2>
      <p className="lede">
        Anfisbena llegó al estudio en febrero de 2026 con un problema
        que reconocemos enseguida: marca con tracción comercial real,
        siete años en el mercado de ropa contemporánea, ventas
        creciendo, pero sistema visual reconstruido desde cero cada
        vez que entraba un proveedor nuevo. La papelería no coincidía
        con el web. Las fichas de producto en el ecommerce usaban una
        tipografía. Las etiquetas físicas usaban otra. El feed de
        Instagram improvisaba criterio cada lunes<span className="text-lacre">.</span>
      </p>
      <p>
        El brief firmado el 4 de febrero contenía tres cosas
        explícitas: <strong>(1)</strong> documentar el sistema actual
        donde funcionaba (Instagram era el canal con mejor consistencia
        — había que decodificar qué hacían bien y elevarlo a regla);
        <strong> (2)</strong> resolver la inconsistencia tipográfica
        de raíz proponiendo dos familias máximo; <strong>(3)</strong>
        producir guidelines extendidas para papelería comercial y
        editorial — tier Profesional completo, 30-40 páginas.
      </p>
      <p>
        Plazo publicado: 7 días laborables desde kickoff. El brief
        se firmó el martes; el manual se entregó el jueves de la
        semana siguiente, 9 días después incluyendo el fin de semana
        que no contó como laborable<span className="text-lacre">.</span>
      </p>

      <h2>El sistema tipográfico · una sans contemporánea + una mono editorial</h2>
      <p>
        Auditando el sistema actual encontramos cinco familias
        distintas operando: Helvetica Neue en web, Futura en
        etiquetas, Garamond en cartelería de tienda, una geométrica
        sin nombrar en Instagram, y una display custom que nadie
        recordaba haber comprado. La decisión: reducir a dos
        familias con role asignado.
      </p>
      <p>
        Sans editorial contemporánea para títulos, body extenso y
        wordmark. La elegimos por su <em>x-height generoso</em> que
        mantiene legibilidad en el cuerpo de fichas de producto a
        14pt y se vuelve declarativa a 72pt en headlines de campaña.
        El contraste modulado entre trazos verticales y diagonales
        produce wordmarks que aguantan la composición editorial agresiva
        que define la nueva voz visual.
      </p>
      <p>
        Mono específica para metadatos: SKU, precio, talla, composición
        de tejido, signature de campaña. Cada vez que el lector
        encuentra mono sabe que está mirando dato técnico, no
        narrativa. Esta dualidad — narrativa en sans, dato en mono
        — se documentó en el capítulo 03 con ejemplos de cada
        aplicación. La jerarquía final tiene cuatro niveles: H1 64pt
        para campaña, H2 32pt para sección, body 16pt, mono 11pt
        para metadatos<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/anfisbena/spread-04.jpg"
          alt="Anfisbena — spread tipografía: dos familias con jerarquía de cuatro niveles documentada"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo tipográfico · sans contemporánea para narrativa,
          mono para metadatos<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Paleta cromática · cuatro tonos con regla 60/30/10</h2>
      <p>
        La paleta final tiene cuatro colores documentados con role
        operativo asignado. Reducimos desde once tonos detectados en
        materiales actuales (incluidas dos versiones casi idénticas
        del mismo gris cálido que nadie había advertido como duplicidad).
      </p>
      <ul>
        <li><strong>Tinta principal</strong> · negro cálido para
          fondos editoriales, body extenso y wordmark. No #000 puro
          — un negro con base ligeramente cálida que produce contraste
          orgánico con el cream papel.</li>
        <li><strong>Cream papel</strong> · cream con base cálida que
          funciona como fondo principal en aplicaciones impresas y
          como neutro complementario en web.</li>
        <li><strong>Acento de marca</strong> · color saturado único
          aplicado exclusivamente en separadores editoriales,
          highlights de signature y el período tipográfico que cierra
          cada wordmark significativo. Regla 60/30/10: 60% papel, 30%
          tinta, 10% acento.</li>
        <li><strong>Gris medio</strong> · neutro para texto secundario,
          captions, metadatos cuando aparecen sobre cream.</li>
      </ul>
      <p>
        La regla operativa codificada: <strong>el acento nunca debe
        aparecer dos veces seguidas en la misma página</strong>.
        Si el período &quot;.&quot; está en headline, el del cuerpo
        se omite. Esta disciplina produce composiciones rítmicas que
        el lector reconoce como propias de la marca sin identificar
        la causa<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/anfisbena/spread-06.jpg"
          alt="Anfisbena — spread paleta cromática con role operativo asignado a cada color"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático · cuatro tonos con role asignado y regla
          60/30/10 documentada<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Retícula · doce columnas, baseline 4pt</h2>
      <p>
        El sistema editorial completo se asienta en una retícula de
        doce columnas con gutters proporcionales y márgenes generosos
        en formato A4. El baseline grid funciona a 4pt — todos los
        elementos verticales se alinean a múltiplos de cuatro:
        leading body 16pt, leading H2 48pt, margin sections 64pt.
      </p>
      <p>
        Esta disciplina de baseline es lo que produce la sensación
        rítmica que el cliente notó inmediatamente al hojear el manual
        terminado: cada spread tiene composición distinta pero todos
        respiran al mismo pulso. El capítulo 04 documenta el sistema
        con diagramas y tres reglas de excepción para casos donde
        un wordmark grande necesita salirse del grid intencionalmente.
      </p>

      <h2>Aplicaciones · papelería comercial editorial</h2>
      <p>
        La parte más operativa del manual son los catorce capítulos
        de aplicación: lookbook editorial, fichas de producto para
        ecommerce con specs de imagen, etiquetas físicas con bleed
        para imprenta nacional, papelería B2B (carta, sobre, firma
        de email con regla anti-overflow), packaging con pegatina
        signature, social cards Instagram cuadradas y stories
        verticales, signage para showroom.
      </p>
      <p>
        Cada aplicación tiene tres elementos en su capítulo:
        <strong> (1)</strong> spec técnica (medidas, formato, color
        space CMYK o RGB), <strong>(2)</strong> ejemplo en producción
        real (tomado del feed actual de Anfisbena, con permiso),
        <strong> (3)</strong> reglas de excepción — qué hacer cuando
        un proveedor externo tiene template propio. Esta tercera
        parte es la que más usa el equipo de Anfisbena en
        práctica<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/anfisbena/spread-09.jpg"
          alt="Anfisbena — spread aplicaciones papelería comercial con specs técnicas y reglas operativas"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo de aplicaciones · 14 piezas con specs técnicas y
          reglas operativas para producción real<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>La voz · directa, no aspiracional</h2>
      <p>
        El capítulo verbal del manual codifica una decisión que el
        equipo de Anfisbena ya intuía pero no había formulado: la
        voz Anfisbena es directa, no aspiracional. No prometemos
        &quot;experiencias transformadoras&quot; ni &quot;nuevas
        realidades&quot; — describimos la prenda con precisión técnica
        (composición, gramaje, origen del tejido) y dejamos que el
        cliente decida si encaja con su forma de vestir<span className="text-lacre">.</span>
      </p>
      <p>
        Esta voz tiene cuatro reglas operativas documentadas:
        <strong> (1) describe</strong> antes que sugiera,
        <strong> (2) concreto</strong> antes que evocador,
        <strong> (3) técnico cuando proceda</strong> antes que
        publicitario, <strong>(4) trato directo</strong> antes que
        impersonal. Cada copy publicado en cualquier canal pasa por
        estas cuatro reglas antes de salir.
      </p>

      <h2>Después · cómo lo está usando el equipo</h2>
      <p>
        El manual entregado el jueves se aplicó al feed de Instagram
        en el siguiente fin de semana. Para el lunes siguiente todas
        las plantillas de comunicación (firma de email, signature de
        campaña, ficha tipo de producto) ya estaban actualizadas. El
        proveedor de etiquetas físicas recibió el capítulo
        correspondiente como adjunto al siguiente pedido — la
        nueva tirada de etiquetas ya respeta el sistema completo.
      </p>
      <p>
        El equipo de Anfisbena reportó tres semanas después que el
        tiempo dedicado a decisiones de criterio visual en
        comunicación bajó de unas 4 horas semanales a menos de
        30 minutos. El manual no necesita defenderse: cada vez que
        surge una duda, el equipo abre el capítulo correspondiente
        y aplica la regla. El sistema funciona<span className="text-lacre">.</span>
      </p>

      <h2>Por qué este caso es relevante</h2>
      <p>
        Anfisbena ilustra el patrón típico de marca con tracción
        comercial pero sistema visual no documentado: el negocio
        funciona, la marca existe, pero cada nuevo proveedor o
        responsable interno reinventa criterio. El manual no cambió
        la marca — la <strong>codificó</strong>. Lo que la marca ya
        hacía bien quedó documentado como regla; lo que hacía mal
        quedó identificado como excepción a corregir.
      </p>
      <p>
        Si tu marca opera con la misma sensación de improvisación
        constante,{" "}
        <Link href="/precios#profesional">el tier Profesional cubre
        este caso al detalle</Link>: 30-40 páginas, 7 días laborables,
        990€ IVA incluido. <Link href="/contacto">Pide propuesta sin
        compromiso</Link> y te respondemos en 24h con scope cerrado y
        plazo confirmado.
      </p>
    </div>
  );
}
