import Link from "next/link";

/**
 * Pieza 02 · Informational P0 · target ~2.200 palabras.
 * Featured snippet play: primer párrafo respuesta directa.
 * Internal links a /anatomia, /manuales, /blog/manual-marca-vs-brand-book, /precios.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Un manual de marca es un <strong>documento operativo de 20-50 páginas</strong>{" "}
        que fija por escrito cómo se aplica una identidad visual y verbal en
        todos los contextos donde la marca aparece: logo, colores, tipografía,
        aplicaciones digitales, papelería, voz, guidelines. Su función no es
        inspirar — es evitar que alguien improvise<span className="text-lacre">.</span>
      </p>

      <p>
        Se confunde constantemente con otros entregables adyacentes: brand book
        (que es emocional y aspiracional), brand kit (que es archivo suelto),
        guía de estilo (que es subset tipográfico-editorial), libro corporativo
        (que es de presentación interna). Son todos útiles, pero ninguno hace
        lo que hace un manual de marca: <em>operar la marca en producción</em>.
      </p>

      <p>
        Este artículo fija qué es exactamente un manual de marca en 2026, qué
        no es, cuándo lo necesitas y cuándo no, y cómo identificar uno
        profesional frente a uno decorativo. Es largo a propósito: sirve
        también como briefing editorial si vas a encargar uno.
      </p>

      <h2>Definición operativa</h2>
      <p>
        Un manual de marca es un <strong>archivo documentado de reglas</strong>{" "}
        que permite a cualquier persona — equipo interno, proveedor externo,
        freelance contratado, imprenta, agencia subcontratada — aplicar la
        marca sin tener que preguntar cada vez. Todas las decisiones
        visibles están resueltas por escrito. Todas las decisiones no
        documentadas se improvisarán — y ahí empiezan las inconsistencias.
      </p>
      <p>
        La unidad mínima funcional ronda las 20 páginas: logo con sus
        variantes, paleta con reglas de uso, sistema tipográfico con jerarquía,
        aplicaciones básicas (papelería, digital, firma email), y guidelines
        de uso. Por debajo de 20 páginas no es manual — es brand kit.
      </p>
      <p>
        La unidad completa ronda las 40-60 páginas e incluye lo anterior más
        voz verbal documentada, aplicaciones extendidas (merchandising,
        señalética, motion), arquitectura de marca (master-submarca),
        governance (quién aprueba qué, cómo se versiona) y dirección
        fotográfica. En Tramarca publicamos los{" "}
        <Link href="/anatomia">16 capítulos y 48 componentes</Link> al detalle.
      </p>

      <h2>Qué NO es un manual de marca</h2>
      <p>
        Tres confusiones frecuentes que cuestan tiempo y dinero cuando se
        firma un presupuesto con la expectativa equivocada:
      </p>

      <h3>No es un archivo de logo</h3>
      <p>
        Un logo es un entregable gráfico — uno o varios archivos SVG/PNG/PDF
        con variantes. Un manual de marca <em>documenta cómo se usa</em> ese
        logo: zona de exclusión, tamaños mínimos, fondos permitidos, versiones
        monocromas, qué no se puede hacer. Comprar logo sin manual equivale a
        comprar coche sin llaves — tienes el bien, no tienes la instrucción.
      </p>

      <h3>No es un brand book</h3>
      <p>
        El brand book es aspiracional: cuenta la historia de la marca,
        presenta el arquetipo, muestra moodboards, inspira al equipo. Está
        pensado para presentaciones internas y pitch a inversores. Es útil,
        pero no responde a las preguntas operativas diarias ("¿qué tipografía
        usa este PDF?", "¿qué color va en este fondo?"). El brand book mueve
        corazones; el manual de marca mueve producción.
      </p>
      <p>
        Lo desarrollamos en detalle en{" "}
        <Link href="/blog/manual-marca-vs-brand-book">
          Manual de marca vs Brand Book: cuál necesita tu empresa
        </Link>
        .
      </p>

      <h3>No es una guía de estilo editorial</h3>
      <p>
        La guía de estilo (Style Guide) es el subset tipográfico-editorial de
        un manual: reglas de redacción, puntuación, tono, términos aprobados.
        Es un capítulo del manual, no el manual entero. Empresas con comunicación
        intensa (medios, editoriales, publicaciones) tienen ambos documentos
        — el manual para visual + voz base, la guía de estilo para convenciones
        editoriales específicas.
      </p>

      <h2>Qué incluye un manual profesional</h2>
      <p>
        La lista mínima razonable que consideramos en 2026 — independientemente
        de quién lo produzca — es la siguiente. Si tu cotización no la menciona
        explícitamente, no estás comprando un manual: estás comprando un
        archivo con más páginas.
      </p>
      <ol>
        <li>
          <strong>Sistema de logo</strong>: marca principal, variantes
          (horizontal, vertical, iso, monograma para favicons), zona de
          exclusión, tamaños mínimos impresos y digitales, y usos incorrectos
          explícitos con ejemplos.
        </li>
        <li>
          <strong>Sistema tipográfico</strong>: familia display, familia texto,
          jerarquía H1-H6, tamaños y line-heights documentados por contexto.
        </li>
        <li>
          <strong>Paleta cromática con reglas</strong>: primarios, secundarios,
          acento, regla 60/30/10, y valores técnicos (Pantone, CMYK, RGB, HEX,
          RAL).
        </li>
        <li>
          <strong>Aplicaciones reales</strong>: papelería básica, digital (web,
          presentación, avatares), merchandising si aplica.
        </li>
        <li>
          <strong>Voz y tono</strong>: principios verbales, registro por canal,
          ejemplos &quot;decimos / no decimos&quot;. No opcional en B2B.
        </li>
        <li>
          <strong>Guidelines de uso</strong>: qué se puede y qué no. Sin
          interpretación posible.
        </li>
        <li>
          <strong>Archivos fuente</strong>: SVG + PNG + PDF del logo, y Figma
          editable con componentes.
        </li>
      </ol>
      <p>
        En niveles Profesional y Premium se añaden estrategia básica (arquetipo,
        posicionamiento), arquitectura de marca (relación master-submarca),
        governance (flujos de aprobación), dirección fotográfica y sistema
        de motion. Puedes ver la <Link href="/anatomia">anatomía completa con
        16 capítulos</Link> o hojear el{" "}
        <Link href="/manuales/tramarca">manual Tramarca v4 de 58 páginas</Link>{" "}
        como referencia concreta.
      </p>

      <h2>Para qué sirve realmente</h2>
      <p>
        Tres casos de uso reales donde el manual justifica su precio en los
        primeros meses post-entrega:
      </p>

      <h3>Coordinar proveedores externos sin supervisión constante</h3>
      <p>
        Una imprenta externa imprime tarjetas. Un freelance diseña una landing.
        Un motion designer monta una cortinilla. Si existe manual documentado,
        cada uno entrega consistente con la marca sin que tú tengas que
        revisar pixel-a-pixel. Si no existe manual, tú eres el manual — y
        escalar implica clonarte.
      </p>

      <h3>Onboarding de nuevo talento sin confusión</h3>
      <p>
        Contratas diseñador, marketing manager, community manager. Primer día
        les pasas el PDF del manual. Segundo día ya producen sin preguntarte
        por el hex del color primario. Sin manual documentado, cada
        incorporación tarda semanas en alinearse con lo que hay en la cabeza
        del fundador.
      </p>

      <h3>Rebrand parcial sin romper coherencia histórica</h3>
      <p>
        A los tres años quieres actualizar algún elemento (tipografía,
        aplicación digital). Con manual versionado, cambias solo lo necesario
        manteniendo lo que funciona. Sin manual, cada rebrand es rehacer
        desde cero y perder activos históricos reconocibles.
      </p>

      <h2>Cuándo necesitas un manual</h2>
      <p>
        El umbral práctico está en la <strong>segunda persona</strong>. Si
        eres el único que produce comunicación para tu marca y no delegas en
        proveedores externos, puedes operar meses sin manual — tu cabeza es
        el sistema. En el momento en que contratas a alguien (empleado,
        freelance, agencia, imprenta) para producir algo con tu marca,
        necesitas manual. La alternativa es tiempo infinito explicando cada
        decisión.
      </p>
      <p>
        Otros disparadores claros:
      </p>
      <ul>
        <li>Lanzas nueva web o producto digital (equipo externo involucrado).</li>
        <li>Vas a entrar en canales retail o papelería comercial (imprentas externas).</li>
        <li>Equipo crece a 5+ personas con roles diferentes.</li>
        <li>Has detectado inconsistencias que erosionan percepción.</li>
        <li>Estás en proceso de captación de inversión o venta (la marca entra en due diligence).</li>
        <li>Vas a lanzar variantes (submarcas, ediciones especiales, co-branding).</li>
      </ul>

      <h2>Cuándo NO necesitas un manual todavía</h2>
      <p>
        También es honesto decir cuándo no. Si eres autónomo sin equipo que
        factura bajo tu nombre personal, si acabas de validar producto hace
        dos meses y no tienes aún identidad visual definida, o si vas a
        pivotar el negocio en los próximos seis meses — un manual ahora es
        premature optimization. Gasta ese dinero en producto, validación o
        ventas. El manual vendrá cuando la marca tenga suficiente materia
        estable para documentar.
      </p>

      <h2>Quién lo usa internamente</h2>
      <p>
        Tres audiencias canónicas para las que se escribe el manual:
      </p>
      <ul>
        <li>
          <strong>Tu equipo</strong>: marketing, diseño, producto, sales. Abren
          el PDF cuando dudan de un uso concreto.
        </li>
        <li>
          <strong>Tus proveedores externos</strong>: imprentas, agencias, freelances,
          desarrolladores. Reciben el PDF antes de empezar cualquier encargo.
        </li>
        <li>
          <strong>Tú mismo dentro de tres años</strong>: cuando la marca haya
          crecido y hayas olvidado por qué se decidió un color concreto. El
          manual es tu memoria futura contra la tentación de improvisar.
        </li>
      </ul>

      <h2>Cómo distinguir un manual profesional de uno decorativo</h2>
      <p>
        Cinco señales rápidas que aplicamos nosotros mismos cuando evaluamos
        el trabajo de un colega o subcontratado:
      </p>
      <ol>
        <li>
          <strong>¿Hay reglas aplicables o solo ejemplos?</strong> Un manual
          profesional dice &quot;el logo nunca va a menos de 18mm impreso&quot;.
          Uno decorativo muestra el logo bonito y punto.
        </li>
        <li>
          <strong>¿Hay &quot;usos incorrectos&quot; explícitos?</strong> Si no están
          los anti-patrones documentados con ejemplos visuales, no hay freno
          contra la improvisación.
        </li>
        <li>
          <strong>¿Incluye voz verbal?</strong> Identidad visual sin voz es
          mitad del sistema. Si falta, el manual está incompleto.
        </li>
        <li>
          <strong>¿Cubre aplicaciones reales o solo la marca flotando?</strong>
          Mockups en papelería, digital y merch son parte del manual, no un
          extra.
        </li>
        <li>
          <strong>¿Hay versionado previsto?</strong> Un buen manual anticipa
          su propia actualización. Campo &quot;versión&quot; + fecha + changelog
          son señales de profesionalidad operativa.
        </li>
      </ol>

      <h2>Cuánto cuesta</h2>
      <p>
        Los rangos reales del mercado español en 2026 van desde los 80€
        (plantilla automatizada sin sistema) hasta los 18.000€ (agencia
        tradicional con discovery). El sweet spot para pymes operativas está
        entre 490€ y 2.000€ en estudios productizados. Lo analizamos a fondo
        en{" "}
        <Link href="/blog/cuanto-cuesta-manual-de-marca-espana-2026">
          Cuánto cuesta un manual de marca en España 2026
        </Link>
        . En Tramarca publicamos tres tiers cerrados:{" "}
        <Link href="/precios">490€ Esencial · 990€ Profesional · 1.990€ Premium</Link>
        , IVA incluido, con plazos de 5, 7 o 10 días laborables.
      </p>

      <h2>Resumen en una frase</h2>
      <p>
        Un manual de marca es el <strong>documento que permite a otra persona
        producir en tu marca sin preguntarte</strong>. Si tras leer el PDF
        tu proveedor externo entrega consistente, funciona. Si tiene que
        escribirte un WhatsApp, no funciona. Es el único test que importa.
      </p>
    </div>
  );
}
