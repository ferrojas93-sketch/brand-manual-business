import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Shamusic · 46 páginas · Premium · 2026
 * Plataforma music-tech blockchain. Sistema completo Premium.
 * Datos reales del manual: Fraunces + Host Grotesk + JetBrains Mono,
 * paleta midnight + signal magenta, mantra Tu música. Tu copyright.
 */
export default function CasoShamusic() {
  return (
    <div className="prose-editorial">
      <h2>El brief · plataforma con voz pero sin sistema</h2>
      <p className="lede">
        Shamusic llegó al estudio en marzo de 2026 con la situación
        más interesante que vemos en proyectos de music-tech: producto
        técnicamente sólido (registro de copyright musical en blockchain
        para artistas independientes), comunidad activa, voz de marca
        con fuerza estratégica real. Y un sistema visual que no
        resistía el escrutinio: tres tipografías compitiendo, cuatro
        morados sin role asignado, cada post de Instagram improvisando
        criterio. La dirección de marca lo formuló con precisión:
        <em> &quot;tenemos la voz, tenemos la comunidad, pero cada
        publicación parece de una marca distinta&quot;</em><span className="text-lacre">.</span>
      </p>
      <p>
        El brief firmado el 4 de marzo era el más extenso del
        portfolio: <strong>(1)</strong> auditar el sistema actual y
        racionalizar paleta cromática a un núcleo operativo;
        <strong> (2)</strong> sistema tipográfico jerárquico con tres
        familias que cubran wordmark, narrativa editorial, datos
        técnicos y código de smart contract; <strong>(3)</strong>
        capítulo verbal con mantra codificado que el equipo pueda
        aplicar a cada Reel, Stories, post, certificado y
        comunicación legal; <strong>(4)</strong> governance documentada
        para escalar el sistema cuando entren marketers externos;
        <strong> (5)</strong> aplicaciones full Premium — Reels,
        posters, Sessions live, certificado de copyright PDF,
        artista profile, papelería B2B con sellos discográficos.
        Tier Premium completo, 40-50 páginas, 10 días laborables<span className="text-lacre">.</span>
      </p>

      <h2>Sistema tipográfico · tres familias con role estratégico</h2>
      <p>
        El sistema final son tres familias con role asignado y regla
        de combinación documentada. Esta arquitectura tipográfica
        compleja se justifica solo en tier Premium — es la
        herramienta que permite a Shamusic comunicar tres dimensiones
        simultáneas (rebeldía cultural, autoridad técnica, transparencia
        legal) sin contradecirse.
      </p>
      <ul>
        <li><strong>Fraunces</strong> · serif variable de Frank Adebiaye
          y CJ Dunn. Variable axes de <em>opsz</em> (optical size) y
          <em> SOFT</em> (suavidad de cuenco). Uso exclusivo en
          masthead, pull-quotes y mantra verbal. La elección viene
          de una característica única: a opsz 144pt el peso 900
          desarrolla un <em>contraste modulado</em> que evoca tradición
          editorial musical (vinilo, magazine) sin caer en nostalgia.
          A opsz 14pt en cuerpo, la misma familia mantiene legibilidad
          digital pero pierde el dramatismo. Esta dualidad la usa
          el manual para diferenciar <em>declaración</em> versus
          <em> documentación</em>.</li>
        <li><strong>Host Grotesk</strong> · sans contemporánea.
          Función central: cuerpo extenso, headlines sub-mantra,
          UI del producto, captions extendidos. Su construcción
          neutra (sin signature visual fuerte) permite que Fraunces
          haga el trabajo declarativo sin competir.</li>
        <li><strong>JetBrains Mono</strong> · mono específica para
          datos técnicos: hash de smart contract, timestamp de
          registro, ID de track musical, signature criptográfica,
          metadatos editoriales. Cada vez que aparece mono el lector
          sabe que está mirando dato verificable on-chain, no
          narrativa.</li>
      </ul>
      <p>
        La jerarquía documentada tiene seis niveles: Mantra Fraunces
        Black opsz 144 a 96pt, H1 Fraunces 700 opsz 60 a 56pt, H2 Host
        Grotesk Bold 32pt, body Host Grotesk Regular 16pt, caption Host
        Grotesk Medium 12pt, mono JetBrains Mono Regular 11pt para datos<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-03.jpg"
          alt="Shamusic — spread sistema tipográfico tres familias Fraunces Host Grotesk JetBrains Mono"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico de tres familias · Fraunces declarativo,
          Host Grotesk narrativo, JetBrains Mono para data verificable<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Paleta cromática · midnight, signal magenta y la regla 60/30/10</h2>
      <p>
        La paleta inicial detectada en materiales actuales tenía
        once tonos en uso (incluidos cuatro morados casi idénticos
        que nadie había registrado como duplicidad). Auditamos cada
        uso, identificamos roles operativos y reducimos a un sistema
        de cinco colores con regla de proporción explícita:
      </p>
      <ul>
        <li><strong>Midnight</strong> · azul-negro saturado para
          fondos principales, dark mode del producto, masthead
          editorial. Reemplaza al &quot;negro&quot; previo que era
          en realidad #0E0F1F sin documentar.</li>
        <li><strong>Signal magenta</strong> · acento único de marca,
          el más distintivo del sistema. Aparece exclusivamente en
          tres contextos: punto final del wordmark, signature de
          mantra (&quot;Tu música<span className="text-lacre">.</span>
          Tu copyright<span className="text-lacre">.</span> Tu
          dinero<span className="text-lacre">.</span>&quot;) y signal
          de transacción on-chain confirmada en el producto.
          Regla 60/30/10: 60% midnight, 30% paper, 10% signal.</li>
        <li><strong>Paper</strong> · cream desaturado para fondos
          claros y body extenso sobre dark.</li>
        <li><strong>Mist</strong> · gris-azul medio para texto
          secundario sobre midnight; preserva contraste sin saturación.</li>
        <li><strong>Verified green</strong> · verde reservado
          exclusivamente para confirmaciones técnicas — copyright
          registrado, transacción ejecutada, documento certificado.
          Uso regulado por capítulo de signaling<span className="text-lacre">.</span></li>
      </ul>
      <p>
        La regla operativa codificada en página 14: <strong>signal
        magenta nunca aparece dos veces seguidas en la misma
        composición</strong>. Si el período &quot;.&quot; está en
        masthead, el del cuerpo se omite. Esta disciplina produce
        las composiciones que el feed de Shamusic muestra
        consistentemente desde abril de 2026<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-05.jpg"
          alt="Shamusic — spread paleta cromática midnight signal magenta con regla 60/30/10"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático · midnight base, signal magenta como
          acento estratégico único, regla 60/30/10 documentada<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>El mantra · &quot;Tu música. Tu copyright. Tu dinero.&quot;</h2>
      <p>
        El capítulo verbal se construye alrededor de una pieza única:
        el mantra de marca — <em>&quot;Tu música<span className="text-lacre">.</span>
        Tu copyright<span className="text-lacre">.</span> Tu
        dinero<span className="text-lacre">.</span>&quot;</em> —
        codificado tipográficamente en Fraunces 900 opsz 144 con cada
        período en signal magenta. La construcción es deliberada:
        tres frases de dos palabras, cada una termina en período,
        cada período en color de marca. El ritmo de tres y la
        repetición del posesivo &quot;tu&quot; son parte de la
        codificación operativa.
      </p>
      <p>
        El manual documenta cinco aplicaciones del mantra: completo
        (todas las aplicaciones de marca primarias), tercio
        (&quot;Tu música.&quot;) para signaling de canal artístico,
        tercio medio (&quot;Tu copyright.&quot;) para comunicación
        legal y certificados, tercio final (&quot;Tu dinero.&quot;)
        para campañas de royalties, y silencioso — solo los tres
        períodos en signal magenta — como signature visual abstracta
        en pieces editoriales avanzadas<span className="text-lacre">.</span>
      </p>

      <h2>Aplicaciones · catorce capítulos para creator economy</h2>
      <p>
        El manual cubre catorce aplicaciones específicas del sector
        music-tech: <strong>(1)</strong> sistema de Reel con plantillas
        animadas para 15s, 30s, 60s; <strong>(2)</strong> posters de
        Sessions live con grid editorial; <strong>(3)</strong>
        certificado de copyright PDF firmado on-chain con QR de
        verificación; <strong>(4)</strong> artista profile en producto
        web; <strong>(5)</strong> social cards Instagram cuadradas y
        stories verticales; <strong>(6)</strong> avatar de equipo y
        artistas; <strong>(7)</strong> firma de email con regla
        anti-overflow; <strong>(8)</strong> papelería B2B para
        contacto con sellos discográficos; <strong>(9)</strong>
        plantilla de presentación a inversores; <strong>(10)</strong>
        signage para eventos Sessions presenciales; entre otras.
      </p>
      <p>
        Cada aplicación tiene tres elementos en su capítulo:
        <strong> (1)</strong> spec técnica, <strong>(2)</strong>
        ejemplo en producción real (sacado del feed de Shamusic con
        permiso explícito), <strong>(3)</strong> reglas de excepción
        para casos donde un sello externo o festival impone su
        plantilla<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-07.jpg"
          alt="Shamusic — spread aplicaciones Reels y posters Sessions con plantillas animadas"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo de aplicaciones · 14 piezas editorial-grade
          incluidas Reels animados y posters de Sessions live<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Governance · cómo escala el sistema cuando entran terceros</h2>
      <p>
        La diferencia más concreta entre tier Profesional y Premium
        en este caso fue el capítulo de governance — cinco páginas
        finales que documentan el flujo de aprobación cuando un
        proveedor externo (community manager freelance, agencia
        creativa de campaña, productor audiovisual) tiene que aplicar
        el sistema. Tres reglas operativas: <strong>(1)</strong>
        cualquier asset publicado en canal oficial debe pasar por
        review interno de marca; <strong>(2)</strong> los assets
        externos se referencian al capítulo correspondiente del
        manual antes de producirse, no después; <strong>(3)</strong>
        log de excepciones aprobadas se incorpora a revisión
        trimestral del manual<span className="text-lacre">.</span>
      </p>

      <h2>Después · feed consistente sin improvisación semanal</h2>
      <p>
        El manual entregado el viernes de la segunda semana se aplicó
        al feed de Instagram en el siguiente fin de semana. El
        community manager interno reportó que el tiempo dedicado a
        decisiones de criterio visual cada lunes de planning bajó de
        90 minutos (cuatro versiones de un Reel hasta encontrar la
        que funcionaba) a 15 minutos (aplicar la plantilla del manual
        con contenido específico de la semana).
      </p>
      <p>
        Tres semanas después, la dirección de marca reportó la métrica
        que más importaba: el equipo dejó de pedir criterio cada
        jueves antes de producir contenido del fin de semana. Las
        plantillas cubren el 90% de casos. El 10% restante se
        resuelve abriendo el capítulo correspondiente del
        manual<span className="text-lacre">.</span>
      </p>

      <h2>Por qué este caso es relevante</h2>
      <p>
        Shamusic ilustra el patrón del proyecto Premium: marca con
        voz fuerte y comunidad activa que necesita codificar el
        sistema visual para escalar sin diluirse. La diferencia entre
        Profesional y Premium se ve en cuatro lugares concretos:
        capítulo verbal extendido con mantra codificado, governance
        para terceros, sistema tipográfico de tres familias con
        variable axes, y capítulo de aplicaciones extendido a creator
        economy (Reels, Sessions, certificados on-chain).
      </p>
      <p>
        Si tu marca opera en sector con velocidad alta de publicación
        (música, gaming, streaming, creator economy) y comunidad
        activa,{" "}
        <Link href="/precios#premium">el tier Premium cubre este caso
        al detalle</Link>: 40-50 páginas, 10 días laborables, 1.990€
        IVA incluido. <Link href="/contacto">Pide propuesta sin
        compromiso</Link> y respondemos en 24h con scope cerrado y
        plazo confirmado.
      </p>
    </div>
  );
}
