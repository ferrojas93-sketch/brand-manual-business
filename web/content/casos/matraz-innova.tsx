import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Matraz Innova · 33 páginas · Profesional · 2026
 * Laboratorio farmacéutico con identidad técnica previa.
 */
export default function CasoMatrazInnova() {
  return (
    <div className="prose-editorial">
      <h2>El brief · escalar comunicación a dos audiencias distintas</h2>
      <p className="lede">
        Matraz Innova llegó al estudio en febrero de 2026 con un
        problema específico del sector farmacéutico: identidad técnica
        previa correcta para audiencia profesional sanitaria, pero sin
        sistema documentado para escalar comunicación a consumidor
        final. La marca era coherente en la cabeza del equipo
        fundador y un caos por escrito cada vez que entraba un proveedor
        externo. La directora de marketing lo formuló así durante el
        kickoff: <em>&quot;sabemos hablar a un médico; no sabemos
        hablar a su paciente&quot;</em><span className="text-lacre">.</span>
      </p>
      <p>
        El brief firmado el 8 de febrero contenía cuatro entregables
        explícitos: <strong>(1)</strong> sistema visual con paleta
        institucional documentada y <em>acento de energía</em> para
        comunicación a consumidor; <strong>(2)</strong> tipografía
        funcional que cubra ficha técnica científica y campañas a
        público general sin cambiar de familia;
        <strong> (3)</strong> guidelines extendidas para web,
        papelería y presentaciones (Keynote y PowerPoint, ambas);
        <strong> (4)</strong> capítulo verbal con dos registros
        documentados — científico para profesional sanitario, claro
        para consumidor. Tier Profesional, 30-40 páginas, 7 días
        laborables<span className="text-lacre">.</span>
      </p>

      <h2>Sistema tipográfico · sans funcional con jerarquía clínica</h2>
      <p>
        El sistema tipográfico se redujo a una sola familia sans
        contemporánea con cobertura completa de pesos (Light a Black)
        y soporte multi-idioma — Matraz Innova exporta a tres
        mercados europeos. La elección priorizó <em>legibilidad
        técnica a tamaños pequeños</em> (8-10pt para fichas técnicas
        de producto) y <em>autoridad visual a tamaños grandes</em>
        (48-64pt para masthead de campañas).
      </p>
      <p>
        Una sola familia con role asignado por peso y tamaño:
        Black para wordmark y headlines de campaña, Bold para H2 de
        sección, Regular para body extenso, Light para captions y
        metadatos clínicos. La jerarquía documentada tiene cuatro
        niveles: H1 48pt, H2 28pt, body 14pt, caption clínica
        10pt. La leading body 22pt está calculada para legibilidad
        sostenida en fichas técnicas de tres páginas seguidas<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-04.jpg"
          alt="Matraz Innova — spread sistema tipográfico una sola familia con jerarquía clínica de cuatro niveles"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico de una familia · jerarquía clínica con
          cuatro niveles documentados<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Paleta cromática · institucional con acento de energía</h2>
      <p>
        La paleta final tiene cinco colores documentados con role
        operativo asignado, separados explícitamente en dos sistemas:
      </p>
      <ul>
        <li><strong>Sistema institucional</strong> · azul profundo
          (#1A2A4A aproximado) para comunicación profesional sanitaria,
          fichas técnicas, papelería corporativa B2B y materiales de
          investigación. Trasmite autoridad clínica sin frialdad.</li>
        <li><strong>Cream papel</strong> · #F2EFEA aproximado · fondo
          principal en aplicaciones impresas; neutro complementario
          en web.</li>
        <li><strong>Tinta secundaria</strong> · gris cálido para body
          extenso sobre cream y captions técnicas.</li>
        <li><strong>Acento de energía</strong> · verde botánico para
          comunicación a consumidor final — campañas de salud
          preventiva, packaging de producto OTC, divulgación. Aparece
          exclusivamente en contextos consumidor, nunca en
          documentación clínica.</li>
        <li><strong>Sistema de alerta</strong> · rojo institucional
          reservado para warnings clínicos en ficha técnica. Uso
          regulado por capítulo específico.</li>
      </ul>
      <p>
        La regla operativa codificada: <strong>el acento verde y el
        azul institucional nunca aparecen juntos en la misma
        composición</strong>. La marca distingue audiencia por color:
        si el documento es azul, es profesional; si es verde, es
        consumidor. Esta separación es deliberada y se documenta con
        ejemplos comparativos en el capítulo 06<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-06.jpg"
          alt="Matraz Innova — spread paleta cromática con sistema institucional separado del acento de energía"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático dual · azul institucional para profesional
          sanitario, verde para consumidor final<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Retícula · doce columnas, márgenes amplios para densidad técnica</h2>
      <p>
        El sistema editorial se asienta en una retícula de doce
        columnas con márgenes generosos para permitir densidad
        informativa sin saturación visual — característica fundamental
        en documentación técnica farmacéutica. El baseline grid a 4pt
        permite alineación rítmica entre elementos heterogéneos
        (texto extenso, tablas, ilustraciones de molécula, fotografía
        de producto) sin sensación de desorden<span className="text-lacre">.</span>
      </p>

      <h2>Aplicaciones · catorce capítulos B2B + B2C</h2>
      <p>
        El manual cubre catorce aplicaciones distintas separadas por
        contexto: <strong>B2B sanitario</strong> — ficha técnica de
        producto, presentación a comité clínico (Keynote y PowerPoint,
        ambas plantillas con grid base aplicado), papelería corporativa,
        infografía de mecanismo de acción, póster congreso médico.
        <strong> B2C consumidor</strong> — packaging primario de
        producto OTC, web de divulgación, social cards Instagram,
        plantilla de campaña a farmacia.
      </p>
      <p>
        Cada aplicación incluye spec técnica completa: medidas
        regulatorias para packaging farmacéutico (cumplimiento AEMPS),
        tipografía mínima legal (8pt en ficha técnica, 6pt en folleto
        de información al paciente), reglas de overprint para imprenta
        farmacéutica nacional. Esta tercera capa de regulación es lo
        que diferencia el manual farmacéutico de un manual de marca
        estándar — y la razón por la que el equipo de Matraz Innova
        contrató a Tramarca: porque pueden firmar un manual
        defendible ante AEMPS<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-09.jpg"
          alt="Matraz Innova — spread aplicaciones B2B con specs regulatorias farmacéuticas"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Aplicaciones · 14 piezas con specs técnicas y regulatorias
          (AEMPS) para sector farmacéutico<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>La voz · dos registros para dos audiencias</h2>
      <p>
        El capítulo verbal del manual es el más extenso del proyecto
        (8 páginas) porque resolvía la pregunta inicial del brief:
        <em> cómo hablar a dos audiencias sin contradecirse</em>.
        La solución codificada: <strong>un único principio de
        precisión, dos registros tonales</strong>.
      </p>
      <p>
        Registro técnico — para profesional sanitario, ficha técnica,
        congresos: <strong>(1) técnico-preciso</strong>,
        <strong> (2) verificable</strong>, <strong>(3) referenciado</strong>
        a fuentes (ensayos, vademécums, regulación AEMPS).
      </p>
      <p>
        Registro divulgativo — para consumidor final, packaging,
        web pública: <strong>(1) claro-sin-jerga</strong>,
        <strong> (2) describe el beneficio práctico</strong>,
        <strong> (3) traduce</strong> términos clínicos al lenguaje
        cotidiano sin perder rigor. Cada copy publicado en cualquier
        canal pasa por las tres reglas del registro
        correspondiente<span className="text-lacre">.</span>
      </p>

      <h2>Después · plantillas operando sin preguntar</h2>
      <p>
        El manual entregado el lunes de la segunda semana se aplicó
        a las plantillas internas en cinco días. La directora de
        marketing reportó que el equipo dejó de preguntar criterio
        visual al cabo de tres semanas: las plantillas (papelería,
        Keynote, social cards, ficha técnica tipo) cubrían el 80% de
        casos de comunicación. El 20% restante — casos
        excepcionales — se documenta en log interno y se incorpora
        al manual en revisiones programadas trimestrales.
      </p>

      <h2>Por qué este caso es relevante</h2>
      <p>
        Matraz Innova ilustra el patrón de empresa B2B con
        regulación específica que necesita escalar comunicación a
        público general sin perder autoridad técnica. El tier
        Profesional cubre exactamente este caso — sistema dual con
        separación documentada de audiencias, capítulo verbal
        extendido y aplicaciones con spec regulatoria.
      </p>
      <p>
        Si tu marca opera en sector regulado (farmacéutico, sanitario,
        legal, financiero) y necesita escalar comunicación,{" "}
        <Link href="/precios#profesional">el tier Profesional cubre
        este caso al detalle</Link>: 30-40 páginas, 7 días laborables,
        990€ IVA incluido. <Link href="/contacto">Pide propuesta sin
        compromiso</Link> y respondemos en 24h.
      </p>
    </div>
  );
}
