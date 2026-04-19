import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Tramarca v4 · 58 páginas · Propio · 2026
 * Modelo de profundidad para los 5 casos. Vocabulario: retícula,
 * jerarquía, opsz, axis variable, voz declarativa, sistema operativo.
 */
export default function CasoTramarca() {
  return (
    <div className="prose-editorial">
      <h2>El brief que nos hicimos a nosotros mismos</h2>
      <p className="lede">
        Marzo de 2026. Después de tres años produciendo manuales para
        otros, asumimos que el sitio web público no podía sostenerse
        sin que aplicásemos el mismo estándar a nuestra propia marca.
        El brief lo firmé yo conmigo mismo en un café de Malasaña: si
        no podemos publicar un manual Tramarca defendible, no tenemos
        autoridad moral para vender manuales a nadie<span className="text-lacre">.</span>
      </p>
      <p>
        Las restricciones eran tres: <strong>(1)</strong> el manual
        debía ser tier Premium completo (40-50 páginas) para demostrar
        en hechos lo que vendemos como descripción. <strong>(2)</strong>
        Ningún elemento podía ser placeholder — cada componente, ratio,
        valor hex y aplicación debía ser producción real. <strong>(3)</strong>
        El manual entero debía hacerse con la misma metodología y plazo
        que aplicamos a clientes Premium: diez días laborables,
        documentado capítulo a capítulo.
      </p>

      <h2>Las decisiones tipográficas</h2>
      <p>
        El sistema tipográfico final son dos familias: <strong>Satoshi</strong>
        para títulos y cuerpo extenso, <strong>IBM Plex Mono</strong>
        para metadatos, captions, datos técnicos y signaling editorial.
        Ninguna serif. La decisión vino de cuatro meses de prueba con
        Fraunces y Inter — terminamos descartando ambas por motivos
        operativos.
      </p>
      <p>
        Satoshi tiene una construcción geométrica que mantiene legibilidad
        a 14pt en cuerpo y se vuelve <em>declarativa</em> a 96pt en
        masthead — la curva de la &quot;a&quot; minúscula y el contraste
        modulado entre trazos verticales y horizontales producen
        wordmarks que aguantan la <em>composición editorial agresiva</em>
        que define el manual. Black weight (900) para todos los
        despliegues mayores; Regular (400) para cuerpo continuado.
        La jerarquía tipográfica final tiene cinco niveles: H1 96pt,
        H2 48pt, H3 32pt, body 16pt, mono 11pt.
      </p>
      <p>
        IBM Plex Mono cumple función específica: marca lo que es
        <em> dato</em> versus lo que es <em>narrativa</em>. Cada vez
        que el lector ve mono, sabe que está mirando un valor técnico
        (paginación, fecha, signature, data). Cuando ve Satoshi sabe
        que está en cuerpo editorial. Esta dualidad — <strong>narrativa
        en sans, dato en mono</strong> — es regla operativa documentada
        en el capítulo 03 del manual.
      </p>

      <figure>
        <Image
          src="/portfolio/tramarca/spread-04.jpg"
          alt="Tramarca v4 — spread tipografía: Satoshi y IBM Plex Mono con jerarquía de cinco niveles documentada"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Spread del capítulo tipográfico · jerarquía de 5 niveles
          documentada con ejemplos en producción<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Paleta cromática · negro mate más Lacre como acento único</h2>
      <p>
        La paleta final tiene siete colores documentados con role asignado:
      </p>
      <ul>
        <li><strong>Negro</strong> #0C0C0C · matte black para fondos
          principales y cuerpo. No usamos #000 puro — el #0C0C0C tiene
          warmth suficiente para que el cream papel #F4F0EB no produzca
          contraste vibratorio en pantalla.</li>
        <li><strong>Carbón</strong> #1C1C1C · tonalidad ligeramente más
          clara para sub-fondos cuando hay capas dark sobre dark.</li>
        <li><strong>Lacre</strong> #C4553A · el único acento. Aparece
          exclusivamente en el &quot;punto final&quot; (el período al
          final de cada wordmark significativo) y en separadores
          editoriales. Regla 60/30/10 invertida: 60% papel, 30% negro,
          10% lacre.</li>
        <li><strong>Papel</strong> #F4F0EB · cream con base cálida que
          contrasta con el lacre sin competir.</li>
        <li><strong>Piedra</strong> #7A7672 · gris cálido para texto
          secundario.</li>
        <li><strong>Ceniza</strong> #B5B1AC · gris medio para texto
          sobre fondos oscuros.</li>
        <li><strong>Arena</strong> #E4E2DC · neutro claro para tiles
          sutiles y separadores.</li>
      </ul>
      <p>
        La regla operativa codificada en el manual: <strong>el lacre
        nunca debe aparecer dos veces seguidas en la misma página</strong>.
        Si el período &quot;.&quot; está en H1, el del cuerpo se omite.
        Esta regla aparece textualmente en la página 14 del manual y
        produce las composiciones disciplinadas que el lector encuentra
        consistentemente a lo largo de las 58 páginas.
      </p>

      <figure>
        <Image
          src="/portfolio/tramarca/spread-06.jpg"
          alt="Tramarca v4 — spread paleta cromática con valores hex y roles operativos"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático con role operativo asignado a cada color y
          regla del &ldquo;punto final&rdquo; documentada<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Retícula · doce columnas, gutters proporcionales, baseline 4pt</h2>
      <p>
        El sistema editorial completo se asienta en una retícula de
        doce columnas con gutters de 24pt y márgenes de 48pt en
        páginas A4 horizontal (apaisado). El baseline grid funciona
        a 4pt — todos los elementos verticales se alinean a múltiplos
        de cuatro: leading body 16pt (4 × 4), leading H2 56pt (4 × 14),
        margin sections 64pt (4 × 16).
      </p>
      <p>
        Esta disciplina de baseline es lo que produce la sensación
        rítmica que el lector percibe sin identificar la causa. Cada
        spread tiene composiciones diferentes pero todas respetan el
        mismo grid subyacente. El capítulo 04 del manual documenta el
        sistema con diagramas y reglas de excepción para casos donde
        un elemento — typically un wordmark grande — necesita
        salirse del grid intencionalmente.
      </p>

      <h2>El sistema de aplicación · catorce piezas documentadas</h2>
      <p>
        La parte más operativa del manual son los catorce capítulos
        de aplicación: papelería corporativa, presentaciones (Keynote,
        PowerPoint, Google Slides — sí, los tres), web component library,
        firma de email con regla anti-overflow, tarjetas de visita
        con bleed específico para imprenta nacional, social cards
        para Instagram cuadradas y stories verticales, signage para
        eventos, slide opener para cliente meetings.
      </p>
      <p>
        Cada aplicación tiene tres elementos en su capítulo:
        <strong> (1)</strong> spec técnica (medidas, formato, color
        space CMYK o RGB), <strong>(2)</strong> ejemplo en producción
        real (no mockup), y <strong>(3)</strong> reglas de excepción
        — qué hacer cuando el cliente tiene template propio y solo
        podemos pegar nuestro logo. Esta tercera parte es la que más
        usamos en práctica.
      </p>

      <figure>
        <Image
          src="/portfolio/tramarca/spread-09.jpg"
          alt="Tramarca v4 — spread aplicaciones papelería con specs técnicas e instrucciones operativas"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo de aplicaciones · specs técnicas y reglas
          operativas para producción real<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>La voz · declarativa, no consultiva</h2>
      <p>
        El capítulo verbal del manual codifica una decisión que tardamos
        meses en formular: <strong>la voz Tramarca es declarativa, no
        consultiva</strong>. No preguntamos &quot;¿qué necesita tu marca?&quot;
        — afirmamos &quot;tu marca necesita un sistema documentado&quot;.
        No proponemos &quot;podríamos explorar opciones&quot; — declaramos
        &quot;estos tres tiers cubren tu caso&quot;.
      </p>
      <p>
        Esta voz tiene cuatro reglas operativas documentadas:
        <strong> (1) claro</strong> antes que sofisticado,
        <strong> (2) directo</strong> antes que diplomático,
        <strong> (3) concreto</strong> antes que aspiracional,
        <strong> (4) nombra-lo-exacto</strong> antes que generalizar.
        Cada palabra publicada en tramarca.es pasa por estas cuatro
        reglas antes de salir.
      </p>
      <p>
        El tagline final — <em>&quot;el punto final&quot;</em> — encapsula
        las cuatro reglas en tres palabras y un período tipográfico
        coloreado en lacre. Es la única excepción a la regla anti-doble
        del lacre: en el tagline el punto siempre está y siempre
        en lacre. Es el único elemento de la marca con licencia para
        repetirse sin disciplina.
      </p>

      <h2>Diez días, sesenta y ocho horas de producción</h2>
      <p>
        El manual entero se produjo en 10 días laborables con 68 horas
        de trabajo total registradas. Las primeras 16 horas fueron
        brief y arquitectura editorial — qué capítulos, qué jerarquía,
        qué páginas mínimas. Las siguientes 32 horas fueron producción
        de cada capítulo en orden cronológico. Las últimas 20 horas
        fueron auditoría: revisión cruzada con cinco roles
        diferentes (creative director, art director, typography
        specialist, conversion copywriter, ui/ux designer) y siete
        rondas de iteración.
      </p>
      <p>
        Las siete rondas no fueron correcciones cosméticas: cada una
        encontró al menos un fallo de criterio (un caption inconsistente,
        un spread con jerarquía distinta del resto, una aplicación con
        spec técnica incorrecta). El registro de las siete rondas está
        documentado internamente y produjo nueve aprendizajes
        operativos que ahora aplicamos a manuales de cliente.
      </p>

      <h2>Por qué este caso es relevante</h2>
      <p>
        Este caso de estudio tiene una característica única en el
        portfolio: <strong>es el único proyecto donde cliente y estudio
        son la misma entidad</strong>. Eso permite documentar todo —
        decisiones, hex codes exactos, ratios, sistema tipográfico
        completo — sin restricciones de confidencialidad. Funciona
        como referencia técnica y como prueba de método.
      </p>
      <p>
        Si quieres ver el manual completo en PDF (58 páginas, 60MB,
        edición revisada),{" "}
        <Link href="#pedir-manual">déjanos tu email y te llega al
        instante</Link>. Si prefieres ver en este browser otros casos
        del portfolio, <Link href="/trabajos">vuelve al listado</Link>.
        Si te interesa nuestra metodología en abstracto sin caso
        específico, <Link href="/anatomia">la anatomía de un manual
        documenta los 48 componentes</Link>.
      </p>
    </div>
  );
}
