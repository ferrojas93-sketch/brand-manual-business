import Image from "next/image";
import Link from "next/link";

/**
 * Pieza 02 · Guías · Rewrite narrative · target ~3.500 palabras.
 * Empieza con escena real, mantiene rigor pedagógico pero con pulso editorial.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Septiembre de 2024. Una freelance ilustradora barcelonesa abre el
        email que le ha enviado su cliente, una marca de cosmética nueva.
        Asunto: <em>&quot;portada Instagram urgente, hoy&quot;</em>. En el
        cuerpo, una frase: &quot;como tú sabes mejor cómo aplicar la
        marca&quot;. Adjunto: un PDF de tres páginas con un logo, dos
        colores y el nombre de una tipografía. <strong>Eso no es un manual
        de marca.</strong> Es un brand kit. Es la diferencia entre poder
        ejecutar y tener que improvisar<span className="text-lacre">.</span>
      </p>

      <p>
        El término &quot;manual de marca&quot; circula con tanta
        elasticidad en el mercado español que se aplica indistintamente
        a un PDF de tres páginas con paleta y a un sistema documentado de
        sesenta páginas con governance. Para un fundador que cotiza por
        primera vez, esta ambigüedad es el primer obstáculo. ¿Qué estás
        comprando exactamente cuando contratas un manual? ¿Cómo distingues
        uno operativo de uno decorativo?
      </p>

      <p>
        Esta pieza fija qué es exactamente un manual de marca en 2026,
        qué entrega un manual profesional, qué no es manual aunque se
        venda como tal, y cuáles son las cinco señales que distinguen
        operativo de decorativo. Es largo a propósito — sirve también
        como briefing editorial si vas a encargar uno o producirlo
        internamente.
      </p>

      <h2>Una definición operativa, no académica</h2>
      <p>
        Las definiciones académicas describen un manual de marca como
        &quot;documento que sistematiza la identidad visual y verbal de
        una organización para garantizar consistencia en sus
        aplicaciones&quot;. Es correcta pero blanda. La definición
        operativa que proponemos es más directa:
      </p>

      <blockquote>
        Un manual de marca es el documento que permite a otra persona
        producir en tu marca sin preguntarte<span className="text-lacre">.</span>
        <cite>— Definición operativa Tramarca</cite>
      </blockquote>

      <p>
        Si tras leer el manual tu proveedor externo entrega consistente,
        funciona. Si tiene que escribirte un WhatsApp, no funciona. Es el
        único test que importa al final del día. Toda otra definición es
        teoría.
      </p>

      <p>
        Físicamente, un manual de marca profesional en 2026 es:
      </p>
      <ul>
        <li>
          <strong>Un PDF</strong> de 20-60 páginas en formato A4 landscape,
          con bookmarks navegables y resolución alta para impresión
        </li>
        <li>
          <strong>Una biblioteca Figma</strong> editable con componentes,
          variables de color y tipografía sincronizadas
        </li>
        <li>
          <strong>Archivos fuente del logo</strong> en SVG vectorial, PNG
          rasterizado en múltiples densidades, PDF vectorial y EPS para
          imprenta
        </li>
        <li>
          <strong>Tokens CSS o JSON</strong> de la paleta y tipografía
          para equipos de producto digital
        </li>
        <li>
          <strong>Plantillas editables</strong> de papelería en Adobe y
          Canva listas para usar
        </li>
        <li>
          <strong>Opcionalmente</strong>: copia física encuadernada como
          libro, en tier Premium
        </li>
      </ul>

      <p>
        Por debajo de ese paquete operativo, el documento se convierte en
        otra cosa — útil para otros usos, pero no manual.
      </p>

      <figure className="hero-fig">
        <Image
          src="/blog/que-es-un-manual-de-marca/fig-02-paquete.jpg"
          alt="Paquete editorial completo de un manual de marca profesional 2026 — PDF impreso, archivos fuente, biblioteca Figma, tokens y plantillas extendidas sobre mesa de estudio"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 02 · Lo que entrega un manual profesional · sistema, no PDF
          aislado<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Qué NO es un manual de marca</h2>
      <p>
        Tres confusiones frecuentes que cuestan tiempo, dinero y
        oportunidades cuando se firman presupuestos con la expectativa
        equivocada.
      </p>

      <h3>No es un brand kit</h3>
      <p>
        Lo que la freelance recibió de su cliente cosmética en septiembre
        de 2024 era un brand kit — ese PDF de tres páginas con logo,
        paleta y tipografía. Los brand kits son útiles para freelances que
        arrancan necesitando identidad básica para abrir Instagram y firmar
        emails. Funcionan durante 6-12 meses como sistema mínimo.
      </p>
      <p>
        El problema empieza cuando hay que delegar producción a alguien
        que no conoce la marca. El proveedor externo abre el brand kit y
        encuentra: logo, color, tipo. ¿Cómo se aplica el logo en una
        cabecera de email? ¿Qué color va en un fondo dark mode? ¿La
        tipografía Display se usa en cuerpo o solo en titulares? El brand
        kit no responde. Por eso el cliente tuvo que escribirle a la
        freelance &quot;como tú sabes mejor cómo aplicar la marca&quot;.
        Esa frase es la confesión de que el sistema no estaba documentado.
      </p>

      <h3>No es un brand book</h3>
      <p>
        El brand book — también llamado &quot;libro de marca&quot; o
        &quot;brand bible&quot; — es aspiracional. Cuenta la historia
        del origen de la marca, presenta el arquetipo, muestra moodboards
        de inspiración, articula manifiesto. Su audiencia primaria es
        interna: equipo fundador, nuevas incorporaciones, inversores en
        rondas de captación.
      </p>
      <p>
        Es útil pero no responde a las preguntas operativas diarias.
        &quot;¿Qué tipografía usa este PDF?&quot; no aparece en un brand
        book. &quot;¿Qué color va en este botón en dark mode?&quot;
        tampoco. El brand book mueve corazones; el manual de marca mueve
        producción. Ambos pueden coexistir — de hecho la combinación
        ideal en marcas consolidadas es brand book primero (para alinear
        strategy) + manual de marca después (para traducir strategy en
        reglas aplicables). Lo desarrollamos en{" "}
        <Link href="/blog/manual-marca-vs-brand-book">manual de marca vs
        brand book</Link>.
      </p>

      <h3>No es una guía de estilo editorial</h3>
      <p>
        La guía de estilo (Style Guide en inglés) es el subset
        tipográfico-editorial de un manual: reglas de redacción,
        puntuación, tono editorial, términos aprobados, expresiones
        prohibidas. Es un capítulo del manual, no el manual entero.
      </p>
      <p>
        Empresas con comunicación intensa (medios, editoriales,
        publicaciones, plataformas SaaS B2B) suelen tener ambos: el
        manual de marca para visual + voz base, y la guía de estilo
        para convenciones editoriales específicas (cómo se escribe el
        nombre del producto, qué términos técnicos se usan, qué
        anglicismos se traducen). Mailchimp publicó su guía de estilo
        en abierto en 2012 — voiceandtone.com — y se convirtió en
        referencia global. Pero no es manual completo.
      </p>

      <h2>Qué incluye un manual profesional · la lista mínima</h2>
      <p>
        La lista mínima razonable que consideramos en 2026 —
        independientemente de quién lo produzca, qué tier o cuánto
        cueste — es la siguiente. Si tu cotización no la menciona
        explícitamente, no estás comprando un manual:
      </p>

      <ol>
        <li>
          <strong>Sistema de logo completo</strong>: marca principal,
          variantes (horizontal, vertical, iso, monograma para favicons),
          zona de exclusión documentada con plantilla, tamaños mínimos
          impresos en mm y digitales en px, usos correctos vs
          incorrectos con ejemplos visuales explícitos.
        </li>
        <li>
          <strong>Sistema tipográfico jerárquico</strong>: familia
          display, familia texto, jerarquía H1-H6 con tamaños y
          line-heights documentados por contexto (impresión, web,
          presentación).
        </li>
        <li>
          <strong>Paleta cromática con reglas</strong>: primarios,
          secundarios, acento, regla de proporción (60/30/10 es canon),
          valores técnicos completos (Pantone C+U, CMYK, RGB, HEX, RAL
          si hay aplicación signage).
        </li>
        <li>
          <strong>Aplicaciones reales</strong>: papelería básica
          (tarjeta, carta, sobre, firma email), digital (web, presentación,
          avatares de redes), y al menos un par de piezas merchandising
          si el sector lo requiere.
        </li>
        <li>
          <strong>Voz y tono</strong>: principios verbales (3-5 adjetivos
          operativos), registro por canal (landing, email, propuesta,
          social, manual), ejemplos &quot;decimos / no decimos&quot;.
        </li>
        <li>
          <strong>Guidelines de uso</strong>: qué se puede y qué no.
          Sin interpretación posible.
        </li>
        <li>
          <strong>Archivos fuente operables</strong>: SVG + PNG (@1x,
          @2x, @3x) + PDF del logo en todas las variantes, Figma
          editable con componentes nombrados consistente.
        </li>
      </ol>

      <p>
        En tiers superiores (Profesional/Premium) se añaden estrategia
        básica (arquetipo, posicionamiento), arquitectura de marca
        (relación master-submarca), governance (flujos de aprobación
        documentados), dirección fotográfica y sistema de motion. Puedes
        ver la <Link href="/anatomia">anatomía completa con 16 capítulos
        y 48 componentes</Link> al detalle, o hojear el{" "}
        <Link href="/manuales/tramarca">manual Tramarca v4 de 58
        páginas</Link> como referencia concreta.
      </p>

      <h2>Para qué sirve realmente · tres casos de uso</h2>
      <p>
        Tres escenarios reales donde el manual justifica su precio en
        los primeros meses post-entrega.
      </p>

      <h3>Coordinar proveedores externos sin supervisión constante</h3>
      <p>
        Una imprenta externa imprime tarjetas para un evento corporativo.
        Un freelance diseña una landing temporal para una campaña. Un
        motion designer monta una cortinilla de bienvenida para podcast.
        Si existe manual documentado, cada uno entrega consistente con
        la marca sin que tú tengas que revisar pixel-a-pixel.
      </p>
      <p>
        Si no existe manual, tú eres el manual — y escalar el negocio
        implica clonarte. La fundadora de la pyme barcelonesa de la pieza{" "}
        <Link href="/blog/cuanto-cuesta-manual-de-marca-espana-2026">
        sobre cuánto cuesta un manual</Link> calculó que dedicaba 8-10
        horas semanales antes del manual revisando entregables externos.
        Tras documentar el sistema, bajó a 1-2 horas.
      </p>

      <h3>Onboarding de nuevo talento sin confusión</h3>
      <p>
        Contratas diseñador, marketing manager, community manager. Primer
        día les pasas el PDF + Figma + acceso a archivos. Segundo día ya
        producen sin preguntarte por el hex del color primario o la
        tipografía display. Sin manual documentado, cada incorporación
        tarda semanas en alinearse con lo que solo está en la cabeza del
        fundador.
      </p>
      <p>
        Es coste de oportunidad puro. Una nueva incorporación que tarda
        cuatro semanas en operar autónoma sobre la marca cuesta entre
        2.400€ y 4.000€ de tiempo perdido (según seniority). Ese coste
        se repite cada nueva contratación. El manual lo elimina.
      </p>

      <h3>Rebrand parcial sin romper coherencia histórica</h3>
      <p>
        A los tres años quieres actualizar algún elemento — cambiar la
        tipografía display, ampliar la paleta con un secundario nuevo,
        actualizar el sistema de iconografía. Con manual versionado,
        cambias solo lo necesario manteniendo lo que funciona. Sin
        manual, cada rebrand parcial es rehacer desde cero porque
        nadie sabe exactamente qué había antes ni por qué.
      </p>

      <figure>
        <Image
          src="/blog/que-es-un-manual-de-marca/fig-03-coordinacion.jpg"
          alt="Múltiples proveedores externos imprenta freelance agencia trabajando en paralelo con un manual de marca como sistema operativo común — fotografía editorial top-down concreto"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 03 · El manual es la infraestructura que permite producir
          sin supervisión constante<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cuándo necesitas un manual de marca</h2>
      <p>
        El umbral práctico está en la <strong>segunda persona</strong>.
        Si eres el único que produce comunicación para tu marca y no
        delegas en proveedores externos, puedes operar meses sin manual —
        tu cabeza es el sistema. En el momento en que contratas a
        alguien para producir algo con tu marca, necesitas manual.
      </p>
      <p>
        Otros disparadores claros que observamos en clientes nuevos:
      </p>
      <ul>
        <li>
          Lanzas nueva web o producto digital con equipo externo
          involucrado
        </li>
        <li>
          Vas a entrar en canales retail o papelería comercial donde
          intervienen imprentas externas
        </li>
        <li>
          Equipo crece a 5+ personas con roles diferentes y empezás a
          notar inconsistencias visibles entre canales
        </li>
        <li>
          Estás en proceso de captación de inversión o venta — la marca
          entra en due diligence
        </li>
        <li>
          Vas a lanzar variantes (submarcas, ediciones especiales,
          co-branding con partners)
        </li>
        <li>
          La gente del equipo te pregunta más de una vez por semana
          sobre detalles visuales (&quot;¿qué color va aquí?&quot;,
          &quot;¿esta tipo está bien?&quot;)
        </li>
      </ul>

      <h2>Cuándo NO necesitas un manual todavía</h2>
      <p>
        También es honesto decir cuándo no. Si eres autónomo sin equipo
        que factura bajo tu nombre personal, si acabas de validar
        producto hace dos meses y no tienes aún identidad visual
        definida, o si vas a pivotar el negocio en los próximos seis
        meses, un manual ahora es premature optimization. Gasta ese
        dinero en producto, validación o ventas. El manual vendrá cuando
        la marca tenga suficiente materia estable para documentar.
      </p>
      <p>
        Hemos rechazado al menos seis proyectos en 2025 donde el cliente
        nos llegaba con presupuesto pero el negocio aún no tenía
        suficiente forma para que el manual valiera la pena.
        Recomendamos siempre esperar al menos 6-12 meses tras validación
        de mercado.
      </p>

      <h2>Cómo distinguir un manual profesional de uno decorativo</h2>
      <p>
        Cinco señales rápidas que aplicamos nosotros mismos cuando
        evaluamos el trabajo de un colega o subcontratado, ordenadas
        por valor diagnóstico:
      </p>

      <ol>
        <li>
          <strong>¿Hay reglas aplicables o solo ejemplos?</strong> Un
          manual profesional dice &quot;el logo nunca va a menos de 18mm
          impreso ni 80px digital&quot;. Uno decorativo muestra el logo
          bonito en mockups y punto. Si el documento no obliga a nada,
          no documenta — solo presenta.
        </li>
        <li>
          <strong>¿Hay usos incorrectos explícitos?</strong> Si no están
          los anti-patrones documentados con ejemplos visuales (logo
          deformado, mal contraste, color incorrecto), no hay freno
          contra la improvisación. Los proveedores externos asumirán que
          si no está prohibido, está permitido.
        </li>
        <li>
          <strong>¿Incluye voz verbal?</strong> Identidad visual sin voz
          documentada es mitad del sistema. Si falta, el manual está
          incompleto. Algunas plataformas SaaS B2B contemporáneas tienen
          voz mejor documentada que sistema visual — Mailchimp es el
          caso canónico.
        </li>
        <li>
          <strong>¿Cubre aplicaciones reales o solo la marca flotando?</strong>
          Mockups de marca aplicada en papelería, digital, merchandising
          y signage son parte del manual operativo. Si el documento solo
          muestra el logo en pantalla blanca, falta la mitad del trabajo.
        </li>
        <li>
          <strong>¿Hay versionado previsto?</strong> Un buen manual
          anticipa su propia actualización. Campo &quot;versión&quot; +
          fecha + changelog son señales de profesionalidad operativa. Si
          el manual se entrega como PDF cerrado sin mecanismo para
          actualizarse, va a quedar archivado en cinco años.
        </li>
      </ol>

      <h2>Cuánto cuesta un manual profesional</h2>
      <p>
        Los rangos reales del mercado español en 2026 van desde los 80€
        (plantilla automatizada sin sistema) hasta los 80.000€ (agencia
        top-tier con discovery extenso). El sweet spot para pymes
        operativas está entre 490€ y 2.000€ en estudios productizados.
        Lo analizamos a fondo en la pieza{" "}
        <Link href="/blog/cuanto-cuesta-manual-de-marca-espana-2026">cuánto
        cuesta un manual de marca en España 2026</Link> con tres casos
        reales.
      </p>
      <p>
        En Tramarca publicamos tres tiers cerrados:{" "}
        <Link href="/precios">490€ Esencial · 990€ Profesional · 1.990€
        Premium</Link>, todos con IVA incluido y plazos de 5, 7 o 10
        días laborables.
      </p>

      <h2>Coda · el único test que importa</h2>
      <p>
        Septiembre de 2024. La freelance ilustradora barcelonesa pasó
        cuatro horas esa tarde decidiendo cómo aplicar el logo a la
        portada de Instagram. Color del fondo, tamaño del logo, posición
        relativa, qué tipografía secundaria usar. Decisiones que un
        manual de marca habría resuelto en quince segundos. Eso es lo
        que paga el manual: tiempo recuperado, decisiones eliminadas,
        consistencia automática.
      </p>
      <p>
        En una frase: <strong>un manual de marca es el documento que
        permite a otra persona producir en tu marca sin
        preguntarte</strong>. Si tras leer el PDF tu proveedor entrega
        consistente, funciona. Si tiene que escribirte WhatsApp, no
        funciona. Es el único test que importa.
      </p>
      <p>
        Si quieres ver un manual operativo completo aplicado a su propio
        productor,{" "}
        <Link href="/#pedir-manual">descarga nuestro Tramarca v4 en
        PDF</Link>: 58 páginas, gratis, te llega al momento por email.
        Es el documento que te pasa cualquier proveedor externo que
        contrates para tu marca, una vez producido. La verificación
        visible de qué compras cuando compras manual editorial<span className="text-lacre">.</span>
      </p>
    </div>
  );
}
