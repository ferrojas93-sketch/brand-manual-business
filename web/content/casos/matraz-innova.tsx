import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Matraz Innova · 33 páginas · Profesional · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Laboratorio farmacéutico. Dos audiencias polares (médico y paciente),
 * una marca, sin perder rigor ni accesibilidad. AEMPS en el horizonte.
 */
export default function CasoMatrazInnova() {
  return (
    <div className="prose-editorial">
      <h2>Una marca para dos lectores que no se conocen</h2>
      <p className="lede">
        Febrero de 2026. Matraz Innova llegó al estudio con una pregunta
        que reconocemos enseguida: cómo hablar con autoridad clínica al
        médico que prescribe y, al día siguiente, hablar con claridad
        accesible al paciente que tiene la caja en la mano. La directora
        de marketing lo formuló sin rodeos: <em>sabemos hablar a un
        médico; no sabemos hablar a su paciente</em><span className="text-lacre">.</span>
      </p>
      <p>
        El problema no era de tono. Era estructural. Una sola marca tiene
        que aparecer en ficha técnica regulada por AEMPS — donde cualquier
        ambigüedad puede convertirse en sanción — y en packaging de
        consumidor — donde cualquier formalidad excesiva expulsa al lector.
        Una sola marca, dos códigos de lectura. Sin contradecirse.
      </p>

      <h2>La pregunta que orientó el sistema</h2>
      <p>
        La primera tentación era construir dos sub-marcas. Matraz Innova
        Pharma para profesional sanitario y Matraz Innova Care para
        consumidor. Lo descartamos en la primera tarde. Dos sub-marcas
        habrían resuelto el problema de comunicación duplicando el coste
        de mantenimiento. Para una empresa que exporta a tres mercados
        europeos, eso no es opción.
      </p>
      <p>
        La pregunta correcta era otra: qué partes del sistema son comunes
        a las dos audiencias y qué partes deben separarse explícitamente.
        La respuesta dio la arquitectura del manual. Tipografía, retícula
        y voz comparten principio. Color y registro tonal se separan por
        audiencia. Esa decisión gobierna las treinta y tres páginas.
      </p>

      <h2>Una sola tipografía con dos profundidades de lectura</h2>
      <p>
        El sistema tipográfico se redujo a una sola sans contemporánea con
        cobertura completa de pesos y soporte multi-idioma. La elección
        priorizó dos cosas a la vez. Legibilidad clínica a tamaños pequeños
        — 8 a 10 puntos para fichas técnicas que el médico lee a la luz
        del despacho. Autoridad visual a tamaños grandes — 48 a 64 puntos
        para el masthead de campañas a paciente.
      </p>
      <p>
        La regla mental quedó así. Una familia, peso modulado por contexto.
        Black para wordmark y headlines de campaña. Bold para encabezados
        de sección. Regular para body extenso. Light para captions y
        metadatos clínicos. La leading body se calculó a 22 puntos
        específicamente para sostener la lectura de fichas técnicas de
        tres páginas seguidas sin fatigar.
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-04.jpg"
          alt="Matraz Innova — sistema tipográfico una familia con jerarquía clínica"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico · una familia, jerarquía clínica de cuatro
          niveles documentada con leading calculada para lectura sostenida<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>El color como lectura primaria</h2>
      <p>
        La paleta acabó en cinco tonos separados explícitamente en dos
        sistemas. Azul institucional profundo para comunicación profesional
        sanitaria. Verde botánico para comunicación a consumidor final.
        Cream papel como neutro común. Tinta secundaria gris cálida para
        body extenso. Y un rojo institucional reservado para warnings
        clínicos en ficha técnica, regulado por capítulo específico.
      </p>
      <p>
        La regla operativa codificada en página 14: el azul institucional
        y el verde de consumidor nunca aparecen juntos en la misma
        composición. La marca distingue audiencia por color. Si el documento
        es azul, está hablando al profesional. Si es verde, está hablando
        al paciente. Esa separación cromática es la lectura primaria del
        sistema, antes incluso del contenido.
      </p>
      <p>
        La disciplina cromática hace algo más sutil. Permite a la fuerza
        comercial reconocer en una fracción de segundo qué materiales son
        para qué visita. Cuando el delegado entra en la consulta del médico
        con la carpeta azul, sabe que es la correcta. Cuando entra en
        farmacia con la verde, también.
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-06.jpg"
          alt="Matraz Innova — sistema cromático dual azul institucional y verde de consumidor"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático dual · azul institucional para profesional,
          verde para consumidor. Nunca juntos en la misma composición<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Catorce aplicaciones, dos códigos regulatorios</h2>
      <p>
        El manual cubre catorce aplicaciones distintas separadas por
        contexto de uso. En el bloque B2B sanitario: ficha técnica de
        producto, presentación a comité clínico en Keynote y PowerPoint
        — ambas plantillas con grid base aplicado — papelería corporativa,
        infografía de mecanismo de acción, póster para congreso médico.
        En el bloque B2C consumidor: packaging primario de OTC, web de
        divulgación, social cards Instagram, plantilla de campaña a
        farmacia.
      </p>
      <p>
        Cada aplicación incluye spec técnica completa. Medidas regulatorias
        para packaging farmacéutico cumpliendo AEMPS. Tipografía mínima
        legal — ocho puntos en ficha técnica, seis puntos en folleto de
        información al paciente. Reglas de overprint para imprenta
        farmacéutica nacional. Esta tercera capa de regulación es lo que
        diferencia un manual farmacéutico de un manual de marca estándar.
      </p>
      <p>
        Y es la razón por la que Matraz Innova vino a Tramarca. Buscaban
        un manual defendible ante AEMPS sin renunciar a una identidad que
        comunique salud accesible al consumidor. Ese cruce — rigor
        regulatorio más accesibilidad de lectura — es donde el manual
        tiene más densidad por página.
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/atmosphere-01.jpg"
          alt="Matraz Innova — packaging farmacéutico con specs regulatorias"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Aplicaciones · packaging farmacéutico con specs técnicas y
          cumplimiento AEMPS documentado<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Dos registros, un solo principio</h2>
      <p>
        El capítulo verbal es el más extenso del proyecto: ocho páginas.
        Resolvía la pregunta inicial del brief — cómo hablar a dos
        audiencias sin contradecirse. La solución codificada cabe en una
        línea. Un único principio de precisión, dos registros tonales.
      </p>
      <p>
        Registro técnico para profesional sanitario: técnico-preciso,
        verificable, referenciado a fuentes — ensayos, vademécums,
        regulación AEMPS. Cada afirmación clínica lleva su cita
        bibliográfica al pie. La voz no presume autoridad: la documenta.
      </p>
      <p>
        Registro divulgativo para consumidor final: claro sin jerga,
        describe el beneficio práctico, traduce términos clínicos al
        lenguaje cotidiano sin perder rigor. La voz no condesciende:
        confía en que el lector entiende cuando se le explica bien. Cada
        copy publicado pasa por las tres reglas del registro correspondiente
        antes de salir<span className="text-lacre">.</span>
      </p>

      <h2>Treinta y tres páginas, dos rondas</h2>
      <p>
        El manual completo tomó siete días laborables. Las primeras dieciséis
        horas fueron arquitectura: qué capítulos comparten las dos audiencias
        y cuáles se separan. Veintidós horas de producción. Ocho horas de
        auditoría cruzada con dirección creativa, dirección de arte, copy
        y revisión regulatoria informada — todas las menciones a AEMPS
        verificadas contra la documentación pública vigente antes del cierre.
      </p>
      <p>
        Las dos rondas no fueron cosméticas. La primera encontró un caption
        en el capítulo de packaging que confundía términos regulatorios.
        La segunda encontró tres ejemplos de aplicación donde el verde de
        consumidor aparecía en una ficha técnica clínica — exactamente lo
        que el sistema prohibía. Si las rondas no encuentran nada, el
        proceso no está haciendo su trabajo.
      </p>

      <h2>Lo que cambió tres semanas después</h2>
      <p>
        El manual entregado el lunes de la segunda semana se aplicó a las
        plantillas internas en cinco días. La directora de marketing
        reportó que el equipo dejó de preguntar criterio visual al cabo
        de tres semanas. Las plantillas — papelería, Keynote, social cards,
        ficha técnica tipo — cubrían el ochenta por ciento de los casos
        de comunicación.
      </p>
      <p>
        El veinte por ciento restante se documenta en log interno y se
        incorpora al manual en revisiones programadas trimestrales. Esa
        cadencia de revisión es parte del sistema, no una excepción. El
        manual es vivo: lo que la realidad regulatoria modifique, el
        manual lo registra.
      </p>

      <h2>Lo que nos llevamos al siguiente cliente regulado</h2>
      <p>
        Matraz Innova nos enseñó dos cosas concretas sobre los manuales
        para sector regulado. Primero: el color puede hacer parte del
        trabajo de la voz si el sistema lo separa con disciplina. Una
        marca que distingue audiencia por color libera a la voz para
        concentrarse en otros matices. Segundo: la regulación no es un
        anexo del manual. Es un capítulo. Cuando va al final como nota
        técnica, la fuerza comercial la ignora. Cuando va integrada en
        cada aplicación, la cumple sin pensarlo.
      </p>

      <h2>Si tu marca opera en sector regulado</h2>
      <p>
        Matraz Innova describe un patrón frecuente en farmacéutica,
        sanitaria, legal y financiera: dos audiencias con expectativas
        opuestas, una marca que tiene que hablar a las dos sin perder ni
        rigor ni accesibilidad. El tier Profesional cubre exactamente este
        caso, con sistema dual documentado y capítulo verbal extendido.
      </p>
      <p>
        Si quieres alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#profesional">los tres tiers se ven en una
        página</Link>. Si prefieres ver el resto del portfolio antes,{" "}
        <Link href="/manuales">aquí están los cinco casos</Link>.
      </p>
    </div>
  );
}
