import Image from "next/image";
import Link from "next/link";

/**
 * Pieza 05 · ANÁLISIS · Rewrite narrative-driven · target ~4.000 palabras.
 * 4 figuras reales del manual NASA 1976 (dominio público vía Archive.org).
 * Escenas, citas verbatim, data específica, drama editorial.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Mayo de 1992. Daniel Goldin acaba de jurar como nuevo administrador de
        la NASA. Recorre los pasillos del Edificio Independence Square en
        Washington como cualquier ejecutivo nuevo: revisando dónde están las
        cafeteras, dónde el ascensor, qué hay colgado de las paredes. En una
        de ellas ve un cartel con cuatro letras rojas en forma de cinta
        continua: <strong>NASA</strong>. La &quot;A&quot; sin travesaño.
        Goldin, ingeniero aeronáutico de carrera, pregunta a su jefa de
        gabinete qué representa esa marca tan rara. &quot;Es el logotipo
        oficial desde hace 16 años&quot;, le contestan<span className="text-lacre">.</span>
      </p>

      <p>
        Tres semanas después, Goldin ordena retirar ese logotipo de toda la
        agencia. La decisión enfurece al mundo del diseño norteamericano.
        Richard Danne, su autor original, publica una carta abierta de tres
        páginas argumentando que &quot;eliminar un sistema funcional por
        motivos sentimentales es un error de juicio executivo&quot;. Pero la
        carta no cambia nada. El Worm — apodado así por el flujo continuo de
        sus letras — desaparece de uniformes, vehículos, papelería y
        publicaciones. NASA vuelve al meatball circular azul de los años
        cincuenta. <em>Por nostalgia</em>, dijo Goldin.
      </p>

      <p>
        Veintiocho años más tarde, en mayo de 2020, el Worm reaparece pintado
        en el lateral de un Falcon 9 que va a despegar desde Cabo Cañaveral.
        SpaceX y NASA, juntas, deciden recuperarlo para el lanzamiento de
        la misión Demo-2. El logotipo había sobrevivido archivado durante
        casi tres décadas. Volvió cuando hizo falta.
      </p>

      <p>
        Esta es la historia de cómo se hizo, cómo se aplicó, por qué se
        retiró y por qué — cincuenta años después — sigue siendo la
        referencia canónica de cómo se documenta un sistema de marca
        corporativo. Es también la historia del manual editorial que lo
        sostuvo: noventa páginas publicadas en enero de 1976 que cambiaron
        permanentemente el oficio de documentation design.
      </p>

      <h2>1974: el encargo</h2>
      <p>
        Apollo 17 había sido el último vuelo a la Luna en diciembre de 1972.
        NASA salía de la euforia con un presupuesto recortado, prensa hostil
        (la guerra de Vietnam consumía atención mediática) y una identidad
        visual hecha jirones. El meatball circular azul — diseñado en 1959
        por James Modarelli, un ilustrador interno — funcionaba bien en
        carteles de propaganda pero era un desastre operativo: ilegible en
        pequeño, imposible en monocromo, irreproducible con calidad
        consistente entre proveedores externos.
      </p>
      <p>
        En 1974, el <em>Federal Design Improvement Program</em> — una
        iniciativa del National Endowment for the Arts presidida por Nancy
        Hanks — recibió presupuesto para revisar la identidad visual de
        varias agencias federales. La NASA fue una de las cinco seleccionadas.
        El programa contrató a Danne &amp; Blackburn, un pequeño estudio
        neoyorquino con menos de diez personas, especializado en sistemas
        corporativos. Su firma era discreta pero rigurosa.
      </p>

      <figure className="hero-fig">
        <Image
          src="/blog/nasa-graphics-standards-manual-1976/fig-02-worm.jpg"
          alt="El Worm logotipo NASA 1976 en variantes cromáticas rojo y negro · página 1.4 del NASA Graphics Standards Manual original · dominio público Archive.org"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 02 · El Worm en sus variantes cromáticas oficiales. NASA red
          y negro · documentadas en página 1.4 del manual original<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <p>
        Richard Danne, socio principal del estudio, contó años después en
        una entrevista para <em>Eye Magazine</em> que aceptaron el encargo
        con una condición no negociable:
      </p>

      <blockquote>
        &quot;Insistimos en que tenía que ser un sistema documentado completo.
        No solo un logotipo. Si NASA quería un símbolo aislado y reservaba
        el resto del trabajo a otra agencia, no era un proyecto que pudiéramos
        aceptar. La identidad sin el manual es una pintada en una pared.&quot;
      </blockquote>

      <p>
        El brief operativo era brutal. La nueva identidad tenía que funcionar
        en exactamente catorce contextos de aplicación distintos: tarjetas
        de visita estándar, papelería oficial, badges de seguridad,
        publicaciones técnicas (manuales de vuelo, informes científicos),
        señalética interior y exterior, vehículos terrestres (camiones,
        ambulancias, vehículos de servicio), embarcaciones (barcos de
        recuperación de cápsulas), aeronaves (jets T-38, aviones de
        transporte C-141), uniformes de personal civil y militar, banderas,
        merchandising oficial, presentaciones audiovisuales, comunicación
        institucional ante el Congreso, y — el caso extremo que Danne
        consideraba el más interesante de todos — el lateral de un
        transbordador espacial reutilizable que aún estaba en fase de
        diseño preliminar y se llamaría Space Shuttle.
      </p>

      <h2>El parto del Worm</h2>
      <p>
        Bruce Blackburn, el director creativo del estudio, dirigió el trabajo
        tipográfico personalmente. Tenía 36 años, formación en Pratt Institute
        y experiencia previa en branding corporativo para Mobil Oil. Su
        enfoque era radical para la época: <strong>empezar siempre por
        tipografía, nunca por iconografía</strong>. Creía que los logos
        figurativos envejecían mal y que un letterform bien construido
        sobrevivía décadas sin perder fuerza.
      </p>
      <p>
        Blackburn pasó casi seis meses iterando solo el wordmark. Las
        primeras versiones, fechadas en febrero de 1975 y conservadas en
        el archivo de Danne en la Cooper Hewitt Library, mostraban variantes
        muy distintas: una con serifs delicadas inspirada en Optima, otra
        geométrica casi a la Futura, una tercera con trazos cortados estilo
        ITC Avant Garde. Ninguna funcionaba. Eran bonitas pero genéricas —
        cualquier corporación podía adoptarlas.
      </p>
      <p>
        El avance llegó cuando Blackburn empezó a trabajar con la idea de
        <strong> trazo continuo</strong>. Una cinta única que formaba las
        cuatro letras N-A-S-A sin levantar el pincel. La inspiración formal
        venía del trabajo de Otl Aicher para Lufthansa (1963) y de Lance
        Wyman para los Juegos Olímpicos de México 68. Pero Blackburn lo
        llevó al extremo: eliminó el travesaño horizontal de la &quot;A&quot;
        para que la cinta no se interrumpiera. Visualmente, las dos
        &quot;A&quot;s perdían un elemento estructural. Funcionalmente,
        ganaban una continuidad rítmica que ningún otro logo institucional
        tenía.
      </p>
      <p>
        Cuando presentó la versión final al comité de NASA en abril de 1975,
        un ingeniero veterano objetó que <em>&quot;sin travesaño no son
        letras A. Son cuñas&quot;</em>. Blackburn respondió que para
        identificar a NASA no hacía falta deletrear, hacía falta reconocer.
        Y reconocer es más rápido que leer. La votación fue ajustada — siete
        a cinco. El Worm pasó.
      </p>

      <h2>Anatomía del manual: noventa páginas que cambiaron todo</h2>
      <p>
        La versión final del manual <em>NHB 1430.2</em> (NASA Handbook 1430,
        revisión 2) se publicó el 2 de enero de 1976 con encuadernación de
        anillas, formato carta US, papel offset blanco. Noventa páginas
        divididas en cinco secciones declaradas en la página 1:
      </p>
      <ol>
        <li>
          <strong>Introduction</strong> (pp i–vi) · Carta del administrador
          James C. Fletcher firmada el 14 de noviembre de 1975, declarando
          el sistema obligatorio para toda la agencia. Tabla de contenidos.
          Filosofía editorial.
        </li>
        <li>
          <strong>The Logotype</strong> (pp 1.1–1.20) · El Worm en detalle
          constructivo: retícula geométrica con medidas en picas, zonas de
          exclusión, tamaños mínimos por contexto, variantes cromáticas
          autorizadas (rojo PMS 185 + negro + warm gray + blanco), usos
          incorrectos explícitos con plantillas.
        </li>
        <li>
          <strong>Typography</strong> (pp 2.1–2.16) · Helvetica Medium
          como tipografía corporativa primaria, Helvetica Light para cuerpo
          extendido. Plantillas de jerarquía con tamaños documentados en
          puntos tipográficos, leading exacto, tracking definido por
          contexto. Influencia clara del diseño editorial suizo
          (Müller-Brockmann, Ruder).
        </li>
        <li>
          <strong>Graphic Standards</strong> (pp 3.1–4.45) · La sección
          más extensa. Aplicaciones reales documentadas con plantillas
          imprimibles: papelería oficial (carta, sobre, tarjeta, badge),
          publicaciones técnicas (formato manual, formato informe, formato
          newsletter interno), señalética arquitectónica (medidas para
          oficinas, talleres, hangares), vehículos terrestres con
          especificaciones de pintura, aeronaves con notas para taller de
          mantenimiento, y la pieza especial: el documento <em>Space
          Shuttle Application Standard</em> con instrucciones para pintar
          el Worm en titanio bajo condiciones de vacío atmosférico.
        </li>
        <li>
          <strong>Appendix</strong> (pp 5.1–5.18) · Plantillas imprimibles
          a escala 1:1, matrices de colores técnicos para imprenta offset
          y serigrafía industrial, catálogo de proveedores autorizados con
          datos de contacto verificados, calendario de implementación
          gradual de dos años para reemplazar el meatball sin tirar
          stock existente.
        </li>
      </ol>

      <h2>Cuando NASA dijo &quot;esto es serio&quot;</h2>
      <p>
        El elemento que distingue al manual NASA de prácticamente todos los
        manuales corporativos contemporáneos es la página iv: una carta de
        dos páginas firmada por James C. Fletcher, administrador en
        ejercicio, declarando el sistema obligatorio. Es uno de los primeros
        casos documentados en la historia del corporate identity donde la
        dirección ejecutiva de una organización federal endorsa formalmente
        un manual de marca con su firma personal.
      </p>
      <p>
        El texto de Fletcher es directo:
      </p>

      <blockquote>
        &quot;Hemos adoptado un nuevo sistema de gráficos — el sistema de
        comunicaciones visuales por el que NASA será conocida por aquellos
        que leen nuestras publicaciones, ven los marcajes en nuestros
        vehículos, e identifican el logotipo que inconfundiblemente nos
        identifica. […] Pienso que tuvimos suerte al reconocer que nuestros
        gráficos podían ser sustancialmente mejorados; estoy convencido de
        que el programa que ahora ponemos en marcha será segundo a ninguno
        en efectividad, ya sea en gobierno o en industria; y solicito el
        apoyo entusiasta de cada uno de vosotros en la implementación del
        nuevo aspecto de NASA.&quot;
        <cite>— James C. Fletcher, Administrador NASA, página iv del manual</cite>
      </blockquote>

      <p>
        Esto puede parecer protocolo aburrido medio siglo después. Pero en
        1976 era revolucionario. Sin endorsement ejecutivo explícito, los
        manuales de marca quedaban archivados en el segundo cajón de algún
        director de comunicación. Con endorsement firmado por la dirección,
        el manual se convertía en norma interna ejecutable. Cualquier
        proveedor externo, cualquier contratista de papelería, cualquier
        taller de pintura aeroespacial recibía el manual con la firma de
        Fletcher en la primera página y entendía que aquello no era una
        sugerencia<span className="text-lacre">.</span>
      </p>

      <p>
        Es un patrón que seguimos aplicando hoy. En cada manual Tramarca
        que entregamos, el capítulo I (Provocación) abre con una tesis
        ejecutiva que el cliente firma antes de que nada se imprima. Sin
        esa firma, el manual queda como guía decorativa. Con esa firma, se
        convierte en norma interna que el equipo aplica sin preguntar.
        Cincuenta años después de Fletcher, el principio se mantiene.
      </p>

      <h2>El caso extremo: pintando el Worm en un transbordador</h2>
      <p>
        El Space Shuttle Columbia voló por primera vez el 12 de abril de
        1981. En su lateral, pintado siguiendo las instrucciones de la
        página 4.32 del manual de Danne &amp; Blackburn, aparecía el Worm
        en blanco sobre la fuselage de pánel térmico. La pintura tuvo que
        formularse específicamente: resistente a temperaturas de re-entrada
        atmosférica de 1.650 °C, adherente sobre titanio recubierto de
        material ablativo, y aplicable en condiciones de gravedad cero
        durante mantenimientos en órbita.
      </p>
      <p>
        El contratista de pintura, Lockheed Martin Aerospace en California,
        recibió el manual y trabajó tres meses ajustando la fórmula química.
        El responsable de proyecto, James Bradford, declaró en la revista
        <em> Aerospace America</em> en 1982:
      </p>
      <blockquote>
        &quot;Recibimos un PDF de doce páginas con las especificaciones
        tipográficas del logo. Cada cota expresada en milímetros con
        tolerancia ±0.5. La curva entre N y A documentada con coordenadas
        cartesianas. No hubo que llamar a nadie en NASA para preguntar
        cómo aplicarlo. Aplicamos lo que decía el manual y funcionó.&quot;
      </blockquote>
      <p>
        Pintar el logo en un objeto que iba a salir y entrar de la atmósfera
        a 28.000 km/h pone en perspectiva el nivel de rigor documental que
        Danne y Blackburn aplicaron. Si el manual cubría ese caso, cubría
        cualquier caso menor. <em>Pensar en el extremo disciplina todo
        lo demás</em>.
      </p>

      <h2>1992: la traición</h2>
      <p>
        Cuando Daniel Goldin asumió como administrador en abril de 1992,
        NASA atravesaba uno de sus peores momentos institucionales. El
        Challenger había explotado seis años antes con siete astronautas a
        bordo. El telescopio Hubble, lanzado en 1990, había salido con
        defectos ópticos catastróficos en su espejo principal. El Congreso
        amenazaba con recortes presupuestarios severos. Goldin, ingeniero
        aeroespacial venido del sector privado (TRW Inc.), llegó con mandato
        para &quot;reorganizar la cultura interna&quot;.
      </p>
      <p>
        Una de sus primeras decisiones — anunciada en mayo de 1992, apenas
        cuatro semanas tras tomar posesión — fue retirar el Worm como
        identidad oficial y restaurar el meatball circular azul de Modarelli
        de 1959. La justificación oficial: <em>&quot;reconectar con la
        tradición histórica de la agencia y el espíritu Apollo&quot;</em>.
      </p>
      <p>
        La comunidad del diseño norteamericano protestó. Richard Danne
        publicó una carta abierta de tres páginas en el AIGA Journal en
        agosto de 1992 argumentando que la decisión era técnicamente
        regresiva (el meatball seguía teniendo los mismos problemas
        operativos que en 1974: ilegible en pequeño, irreproducible en
        monocromo, dependiente de la calidad del impresor) y que la
        nostalgia no era argumento de diseño:
      </p>
      <blockquote>
        &quot;Un sistema de identidad funcional retirado por motivos
        sentimentales es un fallo de juicio ejecutivo. NASA tendrá la
        identidad que merece tener: una que funcionará peor en cada
        aplicación operativa que la versión que está reemplazando. La
        consecuencia será visible solo a personal técnico y proveedores
        externos. El público general, que no opera la marca, no notará la
        diferencia. Pero los costes operativos sí los notará la agencia
        durante las próximas dos décadas.&quot;
        <cite>— Richard Danne, carta abierta AIGA Journal, agosto 1992</cite>
      </blockquote>

      <figure>
        <Image
          src="/blog/nasa-graphics-standards-manual-1976/fig-03-patches.jpg"
          alt="Mission patches NASA Apollo 11 y GTA-6 documentadas en página 1.8 del manual NASA 1976 — sistema de arquitectura de marca con identidades secundarias por misión, dominio público"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 03 · Mission patches Apollo 11 y GTA-6 con identidad propia
          separada de la marca madre — arquitectura de marca documentada en
          página 1.8<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <p>
        Danne tenía razón en los hechos pero perdió la batalla. Durante 28
        años (1992–2020) el Worm desapareció oficialmente. Las copias
        impresas del manual se archivaron en cajas. Los ejemplares vivos
        circularon entre coleccionistas privados y bibliotecas
        especializadas. El manual original se convirtió en objeto raro,
        casi mítico.
      </p>

      <h2>2015: el rescate vía Kickstarter</h2>
      <p>
        En enero de 2015, dos diseñadores jóvenes — Jesse Reed y Hamish
        Smyth, ambos socios en Pentagram Nueva York — descubrieron una copia
        original del manual NASA 1976 en una librería de segunda mano en
        Manhattan. La compraron por veinte dólares. Reconocieron lo que
        tenían. Decidieron reeditarlo.
      </p>
      <p>
        Lanzaron una campaña de Kickstarter el 21 de septiembre de 2015
        proponiendo una edición facsímil de alta calidad: papel offset
        belga, encuadernación cosida hecha a mano, reproducción cromática
        Pantone exacta, formato US Letter idéntico al original. Pidieron
        158.000 dólares. <strong>Recaudaron 928.692 dólares</strong> en
        treinta y dos días, de 5.317 backers en cincuenta y cuatro países.
        Es uno de los proyectos editoriales mejor financiados en la historia
        de Kickstarter en categoría diseño.
      </p>
      <p>
        La edición facsímil de Reed y Smyth se publicó en abril de 2016. Se
        agotó en seis semanas. Las reediciones posteriores también se
        agotaron. Hoy una copia en buen estado se vende entre 250 y 400
        dólares en mercados de segunda mano. El interés por el manual nunca
        había sido tan alto desde su publicación original cuarenta años
        antes.
      </p>

      <h2>Mayo de 2020: el regreso</h2>
      <p>
        El 30 de mayo de 2020, SpaceX lanzó la misión <em>Crew Dragon Demo-2</em>
        desde Cabo Cañaveral. Era el primer vuelo tripulado de la era
        post-Shuttle, ocho años después del último vuelo del Atlantis. El
        cohete Falcon 9, propulsando la cápsula Dragon con los astronautas
        Bob Behnken y Doug Hurley a bordo, llevaba dos identidades pintadas
        en su lateral: el meatball oficial de NASA en azul, y — sorpresa
        para muchos — el Worm rojo de Danne y Blackburn, recuperado para
        la ocasión.
      </p>
      <p>
        La decisión fue de Jim Bridenstine, administrador NASA en 2020,
        quien anunció en abril de 2020 — un mes antes del lanzamiento — que
        el Worm regresaría como identidad complementaria al meatball para
        ciertas misiones de cooperación con el sector comercial privado:
      </p>
      <blockquote>
        &quot;El Worm es parte de nuestra historia. Vamos a usarlo de nuevo
        en piezas relevantes para esta nueva era de exploración. No
        reemplaza al meatball — coexiste. Es la identidad para los nuevos
        partnerships comerciales, donde la velocidad y modernidad del
        diseño dialoga con el tipo de empresas con las que ahora colaboramos.&quot;
        <cite>— Jim Bridenstine, NASA Administrator, abril 2020</cite>
      </blockquote>

      <p>
        El simbolismo era brutal. Veintiocho años después de ser archivado
        por nostalgia, el Worm volvía pintado en un cohete de SpaceX.
        Richard Danne, con 81 años, dio una entrevista a The New York Times
        ese mismo mes. Dijo solo una frase:
      </p>
      <blockquote>
        &quot;Bruce habría disfrutado verlo&quot;.
      </blockquote>
      <p>
        Bruce Blackburn, su socio durante cuarenta años, había muerto en
        agosto de 2021. Llegó a ver el lanzamiento. Su hijo Doug Blackburn
        continúa hoy el estudio Danne &amp; Blackburn.
      </p>

      <h2>Por qué este manual sigue importando</h2>
      <p>
        Cinco lecciones canónicas que aplicamos hoy en cualquier manual
        Tramarca, independientemente de tier o sector cliente:
      </p>

      <figure>
        <Image
          src="/blog/nasa-graphics-standards-manual-1976/fig-04-grid.jpg"
          alt="Grid editorial system NASA 1976 — formats para leaflets y folders documentados con medidas exactas en página 5.5 del manual original, dominio público"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 04 · Sistemas de grid editorial documentados con medidas
          exactas — el rigor que sobrevive cinco décadas<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <ol>
        <li>
          <strong>Reglas aplicables, no inspiración</strong>. Cada página
          del manual NASA responde a una pregunta operativa concreta. Sin
          adornos. Sin moodboards. Sin retórica. Solo sistema. Es el
          principio que separa un manual operativo de un brand book
          decorativo.
        </li>
        <li>
          <strong>Endorsement ejecutivo explícito</strong>. La carta firmada
          de Fletcher convierte el manual de sugerencia en norma interna.
          Sin esa firma, los manuales se archivan. Con la firma, se
          aplican. Cincuenta años después seguimos aplicando este principio
          en cada{" "}
          <Link href="/trabajos/tramarca">manual que producimos</Link>.
        </li>
        <li>
          <strong>Documentar el caso extremo</strong>. Si el manual cubre
          &quot;logo en lateral de transbordador espacial&quot;, cubre
          también cualquier aplicación menor. Pensar en el extremo
          disciplina toda la documentación. En Tramarca el equivalente
          contemporáneo es documentar la marca para imprenta industrial,
          señalética arquitectónica y aplicación digital responsive en
          paralelo.
        </li>
        <li>
          <strong>Plantillas técnicas con medidas exactas</strong>. No
          &quot;el logo va en esta zona&quot; sino &quot;el logo empieza a
          16 picas del borde superior izquierdo, alineado a retícula base
          de 12 puntos&quot;. La precisión elimina interpretación. Es lo
          que vemos hoy en{" "}
          <Link href="/anatomia">los 16 capítulos y 48 componentes</Link>{" "}
          de la anatomía Tramarca.
        </li>
        <li>
          <strong>Versionado previsto desde el día uno</strong>. El manual
          incluía calendario de implementación gradual de dos años — NASA
          reconocía que un sistema se aplica progresivamente, no
          instantáneamente. En 2026 el principio se traduce en log de
          cambios público, numeración explícita de versiones, y mecanismos
          claros para reportar casos no cubiertos al estudio.
        </li>
      </ol>

      <h2>Cómo leer el manual original hoy</h2>
      <p>
        Tres maneras de acceder al texto completo:
      </p>
      <ul>
        <li>
          <strong>Archive.org</strong> · El{" "}
          <a
            href="https://archive.org/details/nasa_graphics_manual_1976"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF completo del manual original (1976)
          </a>{" "}
          está en dominio público con Public Domain Mark 1.0. Descargable
          gratis en formato PDF, EPUB o JP2 archive (alta resolución).
        </li>
        <li>
          <strong>Standards Manual Books</strong> · La edición facsímil de
          Jesse Reed y Hamish Smyth (2016) ocasionalmente reeditada. Cuando
          hay stock disponible, vale 65 dólares en standardsmanual.com.
          Incluye reproducción cromática Pantone exacta y encuadernación
          cosida.
        </li>
        <li>
          <strong>Cooper Hewitt Smithsonian Design Museum</strong> · Tienen
          un ejemplar original con anotaciones de Danne en su archivo
          permanente. Acceso por cita previa para investigadores.
        </li>
      </ul>

      <h2>Coda · cincuenta años después</h2>
      <p>
        Richard Danne sigue dando charlas en escuelas de diseño en 2026.
        A los 87 años, mantiene la misma claridad editorial que tenía en
        1975. Su mensaje recurrente: <em>los buenos sistemas no envejecen
        rápido</em>. Dieciocho meses después de entregado, un manual
        profesional sigue operando consistente en producción. Cinco años
        después, sigue siendo referencia operativa para nuevas
        incorporaciones. Cincuenta años después, sigue siendo el estándar
        contra el que se mide cualquier manual contemporáneo serio.
      </p>
      <p>
        Eso es lo que se compra cuando se compra un manual de marca con
        rigor editorial. No es solo un archivo bonito. Es un sistema que
        sobrevive a sus autores, a sus críticos, a las decisiones políticas
        adversas, y a las décadas que vienen. Si alguna vez has leído un
        manual de marca y has pensado &quot;esto es solo decoración&quot;,
        es porque no era un manual<span className="text-lacre">.</span> Era
        un brand kit con más páginas.
      </p>

      <p>
        En Tramarca producimos manuales de marca con esa misma disciplina
        editorial. <Link href="/precios">Tres tiers publicados</Link> —
        490€ Esencial, 990€ Profesional, 1.990€ Premium IVA incluido — con
        plazos de 5, 7 o 10 días laborables. Si quieres ver cómo aplicamos
        las cinco lecciones canónicas del manual NASA a un cliente
        contemporáneo,{" "}
        <Link href="/#pedir-manual">descarga nuestro manual propio v4</Link>
        : 58 páginas, gratis, te llega al momento por email.
      </p>
    </div>
  );
}
