import Link from "next/link";

/**
 * Pieza 07 · Análisis pilar · target ~3.800 palabras.
 * Cierra task #13 "Mejores prácticas" como hub central.
 * 15 manuales históricos + canon contemporáneo · link bait major.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Un manual de marca que sobrevive a su década original es un manual
        escrito con disciplina editorial extrema. Estos son{" "}
        <strong>quince manuales de marca</strong> que cambiaron cómo se
        documenta una identidad visual — desde NASA 1976 hasta Stripe Press
        2019 — analizados con el ojo de quien produce manuales hoy. El canon
        editorial en orden cronológico<span className="text-lacre">.</span>
      </p>

      <p>
        No es una lista de &quot;los más bonitos&quot;. Es una selección de
        manuales que <em>funcionan</em>: documentos operativos que siguen
        usándose (o se mantuvieron cincuenta años), sistemas que resolvieron
        problemas reales de escalabilidad visual, piezas editoriales que
        elevaron el oficio del documentation design. Cada entrada incluye el
        contexto, qué contiene, por qué sigue siendo referencia, y qué
        podemos aprender hoy.
      </p>

      <h2>01 · IBM Design Guide (1956-1972) · Paul Rand</h2>
      <p>
        <strong>Diseñador</strong>: Paul Rand · <strong>Contexto</strong>:
        IBM en plena expansión corporativa post-WW2. Rand introduce el
        logotipo rayado horizontal (1972) después de casi veinte años
        evolucionando la identidad. El manual resultante es uno de los
        primeros documentos corporativos que trata la marca como{" "}
        <em>sistema</em> y no como logo aislado.
      </p>
      <p>
        Rand documenta aplicaciones en arquitectura, publicaciones, vehículos
        de servicio, papelería, incluso programación de anuncios de TV.
        Introduce el concepto de &quot;brand identity as corporate asset&quot;
        que el resto del siglo copiará. <strong>Aprendizaje</strong>: tratar
        el manual como infraestructura corporativa, no como decoración, fue
        la revolución editorial que aún define el oficio.
      </p>

      <h2>02 · Lufthansa (1963) · Otl Aicher + Tomás Gonda</h2>
      <p>
        <strong>Diseñador</strong>: Otl Aicher (Hochschule für Gestaltung Ulm) ·{" "}
        <strong>Contexto</strong>: Lufthansa encarga a la escuela Ulm un
        sistema completo tras la recuperación de la aerolínea. El resultado
        es el <em>primer manual de marca corporativo verdaderamente
        sistemático</em> en Europa.
      </p>
      <p>
        Grid estricto, Helvetica como única tipografía (decisión radical en
        1963), grúa estilizada como símbolo canónico, paleta amarillo y azul
        reducida al mínimo. Todo aplicado con rigor alemán a aviones, boletos,
        uniformes, señalética en aeropuertos internacionales.{" "}
        <strong>Aprendizaje</strong>: la reducción sistemática al mínimo
        elemento necesario es más fuerte que la expansión decorativa. Cinco
        colores bien documentados baten a veinte colores improvisados.
      </p>

      <h2>03 · British Rail Corporate Identity Manual (1965) · Design Research Unit</h2>
      <p>
        <strong>Diseñador</strong>: Design Research Unit (Gerry Barney para
        el logo) · <strong>Contexto</strong>: British Rail necesita unificar
        veinte compañías ferroviarias nacionalizadas bajo una sola marca. El
        manual resultante es un monstruo editorial de más de 300 páginas
        que cubre desde papelería hasta pintura de locomotoras.
      </p>
      <p>
        El famoso logo de la flecha doble, Helvetica como tipo corporativo
        (antes de que Lufthansa la popularizara globalmente), sistema de
        señalética ferroviaria que todavía se usa en Reino Unido.{" "}
        <strong>Aprendizaje</strong>: un manual puede coordinar decenas de
        entidades independientes bajo una identidad común — si está
        documentado con el nivel de detalle operativo suficiente. El tamaño
        del documento fue proporcional al problema que resolvía.
      </p>

      <h2>04 · Mexico '68 Olympics (1968) · Lance Wyman</h2>
      <p>
        <strong>Diseñador</strong>: Lance Wyman · <strong>Contexto</strong>:
        Juegos Olímpicos de México 1968. Wyman diseña un sistema tipográfico
        y señalético basado en ondas radiales inspiradas en el arte huichol
        mexicano. El manual resultante se considera una de las piezas más
        ambiciosas de identidad en deporte hasta hoy.
      </p>
      <p>
        Tipografía custom, pictogramas de deportes (uno por disciplina),
        sistema de señalética multilingüe para visitantes internacionales,
        aplicación a estadios, medallas, uniformes. Wyman documenta todo en
        un manual que se convierte en el <em>benchmark</em> para futuras
        olimpiadas. <strong>Aprendizaje</strong>: la identidad visual puede
        ser profundamente cultural sin sacrificar la sistematización. Wyman
        extrae del arte mexicano un lenguaje geométrico utilizable
        globalmente.
      </p>

      <h2>05 · NASA Graphics Standards Manual (1976) · Danne &amp; Blackburn</h2>
      <p>
        <strong>Diseñadores</strong>: Richard Danne y Bruce Blackburn ·{" "}
        <strong>Contexto</strong>: NASA necesita unificar la identidad
        espacial tras la euforia Apollo. El resultado es el &quot;Worm&quot;,
        un logotipo tipográfico rojo sin travesaños, aplicado con rigor desde
        tarjetas de visita hasta el lateral del transbordador espacial.
      </p>
      <p>
        Noventa páginas que se convierten en referencia de documentation
        editorial. Reeditado vía Kickstarter en 2015 por Reed y Smyth. El
        Worm fue retirado en 1992 (vuelta del meatball) y recuperado en 2020
        cuando NASA+SpaceX lo pintaron en el Falcon 9.{" "}
        <strong>Aprendizaje</strong>: plantillas técnicas con medidas
        exactas eliminan la improvisación. Cada decisión soportada por
        ejemplo concreto. Lo analizamos en detalle en{" "}
        <Link href="/blog/nasa-graphics-standards-manual-1976">
          nuestra pieza dedicada al manual NASA 1976
        </Link>
        .
      </p>

      <h2>06 · FedEx · Landor Associates (1994) · Lindon Leader</h2>
      <p>
        <strong>Diseñador</strong>: Lindon Leader en Landor Associates ·{" "}
        <strong>Contexto</strong>: FedEx quiere rebrand tras el cambio de
        nombre oficial (era Federal Express). Leader descubre por accidente
        la flecha entre la &quot;E&quot; y la &quot;X&quot; del logotipo —
        el famoso espacio negativo que es hoy ejemplo canónico en todo
        manual de diseño del mundo.
      </p>
      <p>
        El manual documenta variantes cromáticas por división (púrpura-naranja
        Express, púrpura-verde Ground, púrpura-azul Freight), guidelines de
        aplicación a flota, uniformes, señalética. Cuarenta premios de
        diseño, incluyendo el FedEx logo como uno de los mejores del siglo
        XX. <strong>Aprendizaje</strong>: un detalle tipográfico puede
        ser más memorable que el logotipo completo — si el manual lo
        protege con disciplina.
      </p>

      <h2>07 · Apple Identity Guidelines (2001-2007)</h2>
      <p>
        <strong>Diseñador</strong>: equipo interno Apple (dirigido por
        Jonathan Ive en esa era) · <strong>Contexto</strong>: Apple transición
        del &quot;rainbow apple&quot; multicolor al monochrome apple con la
        llegada del iMac y después del iPod. El manual correspondiente
        nunca se publicó al público, pero copias filtradas muestran su
        estructura.
      </p>
      <p>
        Lo que hace Apple singular: prácticamente cero adorno, tipografía
        genérica (primero Myriad, después San Francisco custom), foco
        absoluto en fotografía de producto con fondos blancos. El manual
        más importante es casi invisible — la ausencia de reglas visuales
        llamativas es su regla. <strong>Aprendizaje</strong>: la restricción
        radical es posible cuando el producto es suficientemente fuerte
        para hablar por sí solo. Solo funciona para muy pocas marcas en el
        mundo.
      </p>

      <h2>08 · MoMA Identity (2004) · Matthew Carter</h2>
      <p>
        <strong>Diseñador</strong>: Matthew Carter (tipógrafo, también diseñó
        Verdana y Georgia) · <strong>Contexto</strong>: Museum of Modern Art
        New York encarga rebrand editorial durante su expansión. Carter
        diseña la tipografía custom <em>MoMA Sans</em> y un sistema de
        publicaciones que mantiene coherencia entre catálogos, señalética y
        merchandising durante casi dos décadas.
      </p>
      <p>
        El manual MoMA es referencia en identidad institucional cultural.
        Documenta desde tipografía de muros de exposición hasta etiquetas
        de cafetería. <strong>Aprendizaje</strong>: las instituciones
        culturales tienen la oportunidad de producir manuales con mayor
        vida útil porque sus productos cambian menos rápido. Invertir en
        tipografía custom paga dividendos durante décadas.
      </p>

      <h2>09 · City of Melbourne (2009) · Landor Associates</h2>
      <p>
        <strong>Diseñador</strong>: equipo Landor Australia · <strong>Contexto</strong>:
        Melbourne busca rebrand que refleje su identidad cultural cambiante.
        Landor crea un logotipo &quot;M&quot; modular cuyo patrón interior
        cambia según el contexto de uso — eventos culturales, servicios
        municipales, instalaciones deportivas.
      </p>
      <p>
        Uno de los primeros manuales en documentar sistemáticamente un
        logotipo variable. El guideline incluye plantillas para generar
        nuevas variantes internamente siguiendo reglas geométricas
        establecidas. <strong>Aprendizaje</strong>: un manual puede
        documentar no solo un sistema cerrado sino un sistema generativo —
        reglas que permiten crear nuevas instancias sin romper coherencia.
      </p>

      <h2>10 · Mailchimp Voice &amp; Tone Guide (2012)</h2>
      <p>
        <strong>Autora principal</strong>: Kate Kiefer Lee · <strong>Contexto</strong>:
        Mailchimp publica en abierto su guía de voz verbal —{" "}
        <a href="https://voiceandtone.com" target="_blank" rel="noopener noreferrer">voiceandtone.com</a>{" "}
        — que se convierte en referencia global para documentación de
        identidad verbal.
      </p>
      <p>
        No es un manual visual completo — es específicamente la sección
        de voz y tono. Pero su precisión al documentar qué tono usar en
        diferentes contextos (email de bienvenida vs email post-incidente
        vs comunicación con churn) redefine cómo las empresas escriben su
        propia voz. <strong>Aprendizaje</strong>: publicar tu guía de
        voz en abierto construye autoridad editorial y obliga a mayor
        rigor interno. Reemplaza el &quot;nos comunicamos con tono amigable&quot;
        por ejemplos literales.
      </p>

      <h2>11 · MasterCard (2016) · Pentagram · Michael Bierut</h2>
      <p>
        <strong>Diseñador</strong>: Michael Bierut en Pentagram ·{" "}
        <strong>Contexto</strong>: MasterCard renueva identidad tras
        décadas de variaciones del logo de dos círculos rojo-amarillo
        solapados. Pentagram simplifica: dos círculos geométricos
        perfectamente calculados, tipografía FF Mark actualizada,
        sistema de aplicaciones consistente.
      </p>
      <p>
        El manual correspondiente es un ejemplo de modernización sin
        ruptura — preserva el equity del logo histórico mientras
        actualiza la ejecución técnica. <strong>Aprendizaje</strong>:
        rebranding de marca consolidada no significa reinventar —
        significa depurar. A veces el trabajo más valioso es eliminar
        cincuenta variantes acumuladas para volver a tres canónicas.
      </p>

      <h2>12 · Oatly (ongoing desde 2014) · Forsman &amp; Bodenfors</h2>
      <p>
        <strong>Agencia</strong>: Forsman &amp; Bodenfors (Suecia) ·{" "}
        <strong>Contexto</strong>: Oatly pasa de marca sueca local a
        fenómeno global con un rebrand deliberadamente desobediente —
        tipografía hecha a mano, texto abundante en packaging, tono
        verbal irreverente.
      </p>
      <p>
        El manual Oatly documenta un sistema que se <em>ve</em>{" "}
        deliberadamente artesanal pero tiene rigor editorial extremo por
        detrás. Cada pieza de packaging incluye un mini-ensayo; la voz
        verbal está documentada con precisión para que múltiples
        copywriters produzcan texto indistinguible.{" "}
        <strong>Aprendizaje</strong>: la marca puede parecer caótica
        superficialmente y ser internamente disciplinadísima. El manual
        no se ve como manual — pero existe y funciona.
      </p>

      <h2>13 · Slack (2019) · Pentagram · Michael Bierut</h2>
      <p>
        <strong>Diseñador</strong>: Michael Bierut en Pentagram ·{" "}
        <strong>Contexto</strong>: Slack reemplaza el icono de hash
        multicolor original por un logotipo más geométrico y
        tipografía custom. Rebrand controvertido en su momento —
        usuarios nostálgicos del logo original — pero resolvió
        problemas técnicos reales (el logo antiguo era ilegible en
        pequeño, imposible en monocromo).
      </p>
      <p>
        El manual documenta el razonamiento del cambio con claridad
        editorial. <strong>Aprendizaje</strong>: la nostalgia no
        debe ser argumento de diseño. Si un sistema no funciona
        técnicamente en las aplicaciones reales (pequeño, monocromo,
        vehículos), el rebrand es inevitable — mejor hacerlo
        proactivamente que forzado.
      </p>

      <h2>14 · Stripe Press (2019-ongoing)</h2>
      <p>
        <strong>Diseñador</strong>: equipo interno Stripe dirigido por
        Tyler Thompson · <strong>Contexto</strong>: Stripe, empresa
        fintech, lanza editorial de libros sobre progreso tecnológico
        y económico. Stripe Press es ejemplo canónico contemporáneo
        de identidad editorial que combina rigor tipográfico con
        contemporaneidad visual.
      </p>
      <p>
        Los libros de Stripe Press (<em>The Revolt of the Public</em>,{" "}
        <em>Working in Public</em>, <em>The Dream Machine</em>) son
        objetos físicos producidos con estándares de high-end
        publishing. El manual editorial implícito — visible en la
        consistencia entre volúmenes — es referencia para cualquier
        manual de marca contemporáneo que busque tono editorial serio
        sin ser aburrido. <strong>Aprendizaje</strong>: una empresa
        de software puede producir manuales al nivel de editoriales
        literarias. Es cuestión de disciplina, no de sector.
      </p>

      <h2>15 · Tramarca Brand Manual v4 (2026)</h2>
      <p>
        <strong>Estudio</strong>: Tramarca · <strong>Contexto</strong>:
        nuestro propio manual como aplicación del estándar editorial
        que vendemos. Cincuenta y ocho páginas, 16 capítulos, 48
        componentes documentados. Tipografía Satoshi + IBM Plex Mono.
        Paleta de siete colores con Lacre como único acento.
      </p>
      <p>
        Es el manual que permite construir nuestro negocio — scope
        cerrado, plazos publicados, precio IVA incluido — con la
        misma disciplina documental que los clásicos. Heredamos la
        tradición de Danne &amp; Blackburn (reglas aplicables sin
        interpretación), la restricción tipográfica de Aicher (dos
        tipografías y punto), y la honestidad de Mailchimp al publicar
        voz verbal en abierto. <strong>Puedes descargarlo</strong>{" "}
        <Link href="/#pedir-manual">dejando tu email</Link> — llega en
        un minuto. O ver los{" "}
        <Link href="/anatomia">16 capítulos y 48 componentes</Link>{" "}
        desglosados uno a uno.
      </p>

      <h2>Hilos comunes entre los quince</h2>
      <p>
        Cinco patrones que se repiten en el canon independientemente de
        década o sector:
      </p>
      <ol>
        <li>
          <strong>Restricción tipográfica radical</strong>. Casi todos
          usan 1-2 familias tipográficas máximo. La tentación de ampliar
          la paleta tipográfica es el primer error del manual amateur.
        </li>
        <li>
          <strong>Sistema antes que logo</strong>. Ninguno empieza por
          el logo — todos empiezan por la arquitectura visual que lo
          sostiene. El logo es consecuencia, no punto de partida.
        </li>
        <li>
          <strong>Aplicaciones documentadas con casos extremos</strong>.
          NASA documenta logo en lateral de transbordador espacial.
          Lufthansa en fuselaje de avión. FedEx en lateral de camión.
          Si el manual resuelve el caso extremo, resuelve los demás.
        </li>
        <li>
          <strong>Versionado y evolución previstas</strong>. Los
          manuales que sobreviven décadas incluyen mecanismos para
          actualizarse sin romper. Los que no, se archivan en el primer
          rebrand.
        </li>
        <li>
          <strong>Endorsement ejecutivo explícito</strong>. Los manuales
          efectivos llevan firma de la dirección que los adopta. Sin
          esa firma, son sugerencias ignoradas.
        </li>
      </ol>

      <h2>Qué NO encontrarás en esta lista</h2>
      <p>
        Los manuales que fueron rebrands icónicos pero que se archivaron
        sin continuidad (ej. el famoso rebrand de Gap 2010 que duró una
        semana). Los manuales que son visualmente bellos pero
        operativamente pobres (muchos de los rebrands digitales
        post-2015 caen aquí — moodboards preciosos, guidelines pobres).
        Los manuales que son solo brand books aspiracionales sin
        componente técnico aplicable.
      </p>
      <p>
        El canon editorial se mide por supervivencia — manuales que
        siguen usándose décadas después de escritos. Por eso predominan
        clásicos 1960-1990 en esta lista. Los contemporáneos (Oatly,
        Stripe Press, Mailchimp) incluidos son apuestas — el tiempo
        dirá si sobreviven como NASA 1976.
      </p>

      <h2>Cómo usar este canon si produces tu propio manual</h2>
      <p>
        Cuatro usos prácticos de esta lista para quien encarga o
        produce manual de marca hoy:
      </p>
      <ol>
        <li>
          <strong>Como benchmark de rigor</strong>. Si tu manual no
          documenta aplicaciones con el nivel de detalle de NASA 1976,
          el listón está bajo.
        </li>
        <li>
          <strong>Como escuela tipográfica</strong>. Estudia las
          decisiones de Aicher, Carter, Rand. Sus restricciones son
          plantillas transferibles.
        </li>
        <li>
          <strong>Como referencia al cotizar</strong>. Si contratas
          agencia o estudio, pregunta qué manual clásico usan como
          referencia. Las respuestas reveladoras aquí predicen la
          calidad del entregable.
        </li>
        <li>
          <strong>Como inspiración honesta</strong>. No imitar
          superficialmente el estilo visual — adoptar la disciplina
          editorial que los sostiene. Eso es lo que transfiere.
        </li>
      </ol>

      <h2>Coda · por qué producir manuales importa</h2>
      <p>
        Cada uno de estos quince manuales resolvió un problema
        operacional concreto. Ninguno se hizo por vanidad editorial.
        NASA necesitaba coordinar contratistas aeroespaciales en veinte
        países. Lufthansa, la confianza en una aerolínea recuperada.
        MoMA, coherencia entre exposiciones. FedEx, reconocimiento
        instantáneo en movimiento. Mailchimp, que sus treinta copywriters
        hablaran con una voz.
      </p>
      <p>
        El manual no es el final del trabajo de marca — es el
        <strong> infraestructura que permite que el trabajo diario
        suceda sin que el fundador sea cuello de botella</strong>. Por
        eso duran décadas los buenos manuales. Por eso la inversión
        paga. Por eso en Tramarca publicamos precio cerrado (<Link href="/precios">490€ · 990€ · 1.990€ IVA incluido</Link>) y plazo
        publicado — porque hemos resuelto qué incluye un manual
        profesional de 2026 y cuánto cuesta producirlo con
        disciplina.
      </p>
      <p>
        Si tu marca necesita su propio manual en esa tradición,{" "}
        <Link href="/contacto">pedir propuesta lleva 24h</Link>. Si
        primero quieres ver cómo aplicamos los principios a nosotros
        mismos,{" "}
        <Link href="/#pedir-manual">descarga el manual Tramarca v4 en PDF</Link>.
        Cincuenta años después de Danne &amp; Blackburn, el oficio
        sigue siendo el mismo: <em>documentar reglas aplicables sin
        interpretación</em>. Lo demás es decoración<span className="text-lacre">.</span>
      </p>
    </div>
  );
}
