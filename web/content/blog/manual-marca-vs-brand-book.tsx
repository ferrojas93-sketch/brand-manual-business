import Image from "next/image";
import Link from "next/link";

/**
 * Pieza 03 · Guías · Rewrite narrative · target ~3.000 palabras.
 * 2 escenas reales (CEO confundió, fundadora pagó dos veces), tabla comparativa,
 * decision tree, 4 escenarios, hero + 2 figs.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Octubre de 2024. Un CEO de scale-up madrileña paga 38.000€ por un
        brand book bellísimo a una agencia top-tier. Tres meses después,
        contratan a una agencia distinta para hacer el manual de marca
        operativo: 14.500€ adicionales. Coste total combinado: 52.500€.
        Cuando la directora de marketing se sentó a calcular,{" "}
        <strong>se dio cuenta de que habían pagado dos veces porque no
        sabían que necesitaban dos cosas distintas</strong><span className="text-lacre">.</span>
      </p>

      <p>
        El error es comprensible. La industria del branding usa los términos
        &quot;brand book&quot;, &quot;manual de marca&quot;, &quot;brand
        guidelines&quot;, &quot;brand bible&quot;, &quot;style guide&quot;
        e &quot;identity manual&quot; como si fueran intercambiables. No lo
        son. Son documentos con propósitos distintos, audiencias primarias
        distintas, longitudes distintas y precios distintos. Confundirlos
        cuesta dinero.
      </p>

      <p>
        Esta pieza fija la diferencia exacta, cuándo necesitas uno, cuándo
        necesitas otro, y cuándo tiene sentido tener los dos. Al final hay
        un árbol de decisión que puedes seguir en sesenta segundos, y
        cuatro escenarios reales según tu fase de empresa.
      </p>

      <h2>Brand Book: el qué y el por qué</h2>
      <p>
        Un brand book es un <strong>documento narrativo</strong> que
        presenta la marca desde su propósito, visión y valores hasta su
        personalidad y tono aspiracional. Su audiencia primaria es{" "}
        <em>interna</em>: equipo fundador, nuevas incorporaciones,
        inversores, socios estratégicos.
      </p>
      <p>
        Su objetivo no es operar producción diaria — es alinear el
        entendimiento emocional de la marca entre stakeholders que necesitan
        creer en ella antes de aplicarla. Los brand books famosos del
        canon contemporáneo siguen este formato: el de Mailchimp publicado
        en 2015 incluye 80 páginas de narrativa sobre por qué la marca
        suena como suena (no cómo aplicarla). El de Stripe Press 2019
        articula 60 páginas de filosofía editorial antes de mostrar una
        sola plantilla técnica.
      </p>

      <p>Contenido típico de un brand book:</p>
      <ul>
        <li>Historia y storytelling del origen — cómo nació la marca, qué problema resolvía</li>
        <li>Propósito, misión, visión, valores articulados</li>
        <li>Arquetipo de marca (sage, creator, rebel, hero, etc.)</li>
        <li>Personalidad expresada en adjetivos operativos</li>
        <li>Moodboard visual extenso (20-40 referencias de tono)</li>
        <li>Manifiesto verbal completo</li>
        <li>Audiencias objetivo (buyer personas detalladas)</li>
        <li>Posicionamiento competitivo en el mercado</li>
        <li>Pocas reglas técnicas, muchas direcciones de tono</li>
      </ul>
      <p>
        Longitud típica: 40-120 páginas con abundantes imágenes
        full-bleed, textos cortos, moodboards. Se lee una vez de principio
        a fin (casi como un libro corto) y después se consulta puntualmente
        para reforzar strategy. No sirve para preguntar &quot;¿qué color va
        en este botón en dark mode?&quot;.
      </p>

      <h2>Manual de marca: el cómo</h2>
      <p>
        Un manual de marca es un{" "}
        <strong>documento técnico-operativo</strong> que fija cómo se
        aplica la identidad visual y verbal en cada contexto de uso real.
        Su audiencia primaria es <em>externa</em>: proveedores, freelances,
        imprentas, agencias subcontratadas, equipo de producción interno.
      </p>
      <p>
        Su objetivo es evitar la improvisación cuando alguien que no
        conoce la marca produce algo con ella. La fundadora de la pyme
        barcelonesa (la del{" "}
        <Link href="/blog/cuanto-cuesta-manual-de-marca-espana-2026">
        artículo sobre cuánto cuesta</Link>) tras encargar manual a un
        estudio productizado dijo:
      </p>
      <blockquote>
        &quot;Le pasamos el PDF al freelance que iba a hacer la landing.
        Una semana después entregó algo que parecía nuestro. Antes del
        manual habríamos tardado tres reuniones en alinear lo que él
        entendía de la marca con lo que nosotros queríamos.&quot;
        <cite>— CEO pyme barcelonesa, julio 2025</cite>
      </blockquote>

      <p>Contenido típico de un manual de marca:</p>
      <ul>
        <li>Sistema de logo con variantes, zona de exclusión, tamaños mínimos</li>
        <li>Paleta cromática con valores técnicos completos (Pantone, CMYK, RGB, HEX, RAL)</li>
        <li>Sistema tipográfico con jerarquía H1-H6 documentada en puntos exactos</li>
        <li>Aplicaciones reales: papelería, digital, merchandising</li>
        <li>Guidelines verbales: registro por canal, glosario aprobado</li>
        <li>Usos correctos e incorrectos con ejemplos visuales explícitos</li>
        <li>Archivos fuente operables (SVG, PNG @1x/@2x/@3x, PDF, Figma)</li>
      </ul>
      <p>
        Longitud típica: 20-50 páginas con mucho diagrama técnico, tablas,
        mockups realistas, pocas imágenes aspiracionales. Se consulta
        constantemente durante la producción. Documentamos los 16
        capítulos y 48 componentes canónicos en{" "}
        <Link href="/anatomia">/anatomia</Link>.
      </p>

      <figure className="hero-fig">
        <Image
          src="/blog/manual-marca-vs-brand-book/fig-02-comparativa.jpg"
          alt="Comparativa visual entre brand book aspiracional grueso y manual de marca operativo delgado side by side sobre concreto editorial — fotografía Pentagram aesthetic"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 02 · El brand book pesa, el manual obliga · ambos
          documentos al lado<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tabla comparativa exhaustiva</h2>
      <p>
        Quince dimensiones de comparación basadas en proyectos reales
        observados en clientes y colegas:
      </p>

      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Dimensión</th>
              <th>Brand Book</th>
              <th>Manual de marca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Propósito principal</td>
              <td>Inspirar, alinear strategy</td>
              <td>Operar producción diaria</td>
            </tr>
            <tr>
              <td>Audiencia primaria</td>
              <td>Interna · equipo, inversores</td>
              <td>Externa · proveedores</td>
            </tr>
            <tr>
              <td>Tono</td>
              <td>Aspiracional, narrativo</td>
              <td>Declarativo, técnico</td>
            </tr>
            <tr>
              <td>Longitud típica</td>
              <td>40-120 páginas</td>
              <td>20-50 páginas</td>
            </tr>
            <tr>
              <td>Imágenes vs texto</td>
              <td>60% imágenes aspiracionales</td>
              <td>60% texto + diagrama técnico</td>
            </tr>
            <tr>
              <td>Frecuencia de uso</td>
              <td>Consulta puntual, 1-2× mes</td>
              <td>Consulta constante, diaria</td>
            </tr>
            <tr>
              <td>Moodboards</td>
              <td>20-40 referencias</td>
              <td>0-5 referencias</td>
            </tr>
            <tr>
              <td>Sistema tipográfico</td>
              <td>Presentado</td>
              <td>Documentado con jerarquía</td>
            </tr>
            <tr>
              <td>Valores técnicos cromáticos</td>
              <td>Paleta mostrada</td>
              <td>Pantone, CMYK, RGB, HEX, RAL</td>
            </tr>
            <tr>
              <td>Usos incorrectos</td>
              <td>Rara vez incluidos</td>
              <td>Siempre incluidos</td>
            </tr>
            <tr>
              <td>Aplicaciones reales</td>
              <td>Rara vez mockups técnicos</td>
              <td>Papelería + digital + merch</td>
            </tr>
            <tr>
              <td>Voz verbal</td>
              <td>Tono general + manifiesto</td>
              <td>Registro por canal + glosario</td>
            </tr>
            <tr>
              <td>Archivos fuente</td>
              <td>Normalmente ausentes</td>
              <td>SVG + PNG + PDF + Figma</td>
            </tr>
            <tr>
              <td>Versionado</td>
              <td>Rara vez previsto</td>
              <td>Log de cambios documentado</td>
            </tr>
            <tr>
              <td>Precio típico España 2026</td>
              <td>3.000€ — 25.000€+</td>
              <td>490€ — 1.990€ (productizado)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Árbol de decisión · sesenta segundos</h2>
      <p>
        Responde estas tres preguntas en orden y sabes cuál necesitas:
      </p>
      <ol>
        <li>
          <strong>¿Vas a delegar producción a proveedores externos en
          los próximos 6 meses?</strong>
          <br />
          Sí → necesitas manual de marca.
          <br />
          No → sigue a la pregunta 2.
        </li>
        <li>
          <strong>¿Necesitas alinear equipo interno sobre propósito y
          strategy?</strong>
          <br />
          Sí → brand book es útil.
          <br />
          No → sigue a la pregunta 3.
        </li>
        <li>
          <strong>¿Estás en proceso de captación de inversión o
          venta?</strong>
          <br />
          Sí → brand book refuerza narrativa para inversores.
          <br />
          No → probablemente no necesitas ninguno todavía. Gasta ese
          dinero en producto o ventas.
        </li>
      </ol>

      <h2>Cuatro escenarios reales · cuál necesitas según tu fase</h2>

      <h3>Autónomo o startup pre-seed (equipo 1-3)</h3>
      <p>
        Manual de marca tier Esencial. El brand book ahora es prematuro —
        el negocio puede pivotar en los próximos 6-12 meses y reescribir
        el brand book sería gasto perdido. Documenta lo operativo primero
        (logo, paleta, tipografía, aplicaciones básicas) para poder
        delegar landing page, redes y papelería sin micromanagement. El
        storytelling aspiracional lo trabajas verbalmente en pitch decks,
        no en PDF.
      </p>
      <p>
        Coste indicativo: 490-1.500€. Cualquier inversión adicional en
        brand book antes de validación de mercado es premature
        optimization.
      </p>

      <h3>Pyme con producto validado (seed/serie A · equipo 5-15)</h3>
      <p>
        Manual de marca tier Profesional. Sistema completo con voz verbal
        documentada. El brand book sigue siendo opcional unless hay
        rondas de inversión próximas donde strategy documentada refuerza
        la narrativa. Prioriza el manual porque el equipo externo ya está
        en contacto con la marca y los costes de improvisación se
        acumulan rápido.
      </p>
      <p>
        Coste indicativo: 990-3.500€. Si añades brand book ligero para
        captación de inversión: +3.000-6.000€ adicionales.
      </p>

      <h3>Marca consolidada en rebrand (serie B+ · equipo 15-50)</h3>
      <p>
        Los dos. Y este es el caso del CEO madrileño con la scale-up que
        pagó dos veces. El brand book articula <em>por qué</em> se
        rebrand (al equipo, a inversores, a medios). El manual de marca
        traduce esa strategy en reglas aplicables de forma inmediata para
        que el rebrand no se degrade en producción.
      </p>
      <p>
        Coste indicativo combinado: 8.000-25.000€ en estudios
        especializados, 20.000-60.000€ en agencias top-tier. La diferencia
        crítica con el caso del CEO madrileño: hacerlo en un proveedor
        coordinado, no en dos paralelos sin comunicación. Cuando son dos
        proveedores distintos, el brand book y el manual no quedan
        alineados — el segundo proveedor tiene que reinterpretar el
        primero.
      </p>

      <h3>Corporate o institucional (serie C+ · equipo 50+)</h3>
      <p>
        Los dos, con discovery workshops incluidos y proceso de aprobación
        multi-stakeholder. Agencia tradicional con equipo dedicado. Brand
        book inspiracional para alinear liderazgo + manual de marca
        extenso (80-120pp) para coordinar equipos distribuidos y agencias
        subcontratadas en múltiples geografías.
      </p>
      <p>
        Coste indicativo: 40.000-150.000€. Plazo: 4-9 meses. Aquí no
        encaja el modelo productizado — la complejidad organizacional
        requiere proceso agencia tradicional.
      </p>

      <figure>
        <Image
          src="/blog/manual-marca-vs-brand-book/fig-03-decision.jpg"
          alt="Visualización editorial del árbol de decisión brand book vs manual de marca según fase de empresa — diagrama tipográfico con paths convergentes hacia los cuatro escenarios canónicos"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 03 · El árbol de decisión · cuatro escenarios, dos
          documentos<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Por qué el CEO pagó dos veces</h2>
      <p>
        Volvamos al CEO madrileño del lede. ¿Por qué pagó dos veces?
        Reconstruyendo el caso (con consentimiento del cliente para
        anonimizarlo en este artículo):
      </p>
      <p>
        En 2024 contrataron una agencia top-tier para &quot;hacer la nueva
        marca&quot;. La agencia entregó 96 páginas con storytelling,
        arquetipo, posicionamiento, moodboards extensos, manifiesto
        verbal y rationale de cada decisión. El proyecto duró 14 semanas
        y costó 38.000€ + IVA. La marca quedó visualmente coherente y
        estratégicamente articulada.
      </p>
      <p>
        El equipo de marketing, en febrero de 2025, intentó usar ese
        documento para coordinar al freelance que diseñaba la nueva
        landing. El freelance preguntó: &quot;¿en qué tipografía van las
        H1?&quot;. El brand book no lo decía. Preguntó: &quot;¿el color
        secundario aplica en CTAs o solo en sub-headlines?&quot;. El brand
        book lo mencionaba pero sin reglas claras. Tras tres semanas de
        idas y venidas, el equipo de marketing concluyó que necesitaban
        otro documento — uno operativo.
      </p>
      <p>
        Contrataron a una agencia distinta (mid-tier especializada en
        digital) para producir el manual operativo. 14.500€ + IVA, 8
        semanas. La nueva agencia tuvo que leer el brand book,
        interpretarlo, y traducirlo a reglas técnicas. Algunas decisiones
        del brand book resultaron operacionalmente débiles y tuvieron
        que reformularse — paleta secundaria que no funcionaba bien en
        digital, tipografía display que no escalaba bien en pequeño.
      </p>
      <p>
        Total: 52.500€ + IVA repartidos entre dos agencias durante 22
        semanas. Si hubieran encargado los dos documentos al mismo
        proveedor desde el inicio, el coste habría sido similar pero la
        coordinación habría salido mejor — el manual habría informado
        decisiones del brand book y viceversa.
      </p>
      <blockquote>
        &quot;En retrospectiva, deberíamos haber preguntado en la primera
        agencia si entregaban brand book + manual operativo combinados.
        Asumimos que &lsquo;hacer la marca&rsquo; incluía ambos. La
        ambigüedad del término nos costó tres meses extra.&quot;
        <cite>— CEO scale-up Madrid, abril 2026</cite>
      </blockquote>

      <h2>¿Puedes tener los dos? Sí · y la combinación ideal</h2>
      <p>
        La combinación ideal para marcas consolidadas que pueden
        permitírselo es:
      </p>
      <ol>
        <li>
          <strong>Brand book primero</strong> producido con la agencia
          o estudio de strategy. Captura el trabajo de posicionamiento,
          arquetipo y manifiesto. Audiencia: equipo interno + inversores.
        </li>
        <li>
          <strong>Manual de marca después</strong> producido consumiendo
          el brand book como input. Traduce strategy en reglas
          aplicables. Audiencia: proveedores + equipo de producción.
        </li>
      </ol>
      <p>
        El orden importa: manual sin brand book queda técnicamente
        correcto pero sin alma; brand book sin manual queda inspiracional
        pero difícil de ejecutar consistentemente. Ambos juntos cierran
        el círculo entre <em>por qué</em> (brand book) y{" "}
        <em>cómo</em> (manual).
      </p>
      <p>
        Idealmente, mismo proveedor o dos proveedores que se han
        coordinado desde el brief. Los proyectos donde brand book y
        manual los hace gente distinta sin coordinación tienden a
        producir documentos desalineados — casos como el del CEO
        madrileño.
      </p>

      <h2>Qué entrega Tramarca exactamente</h2>
      <p>
        Tramarca produce <strong>manuales de marca operativos</strong>,
        no brand books. Hacemos una sola cosa con disciplina editorial.
        Nuestros tres tiers — 490€ Esencial, 990€ Profesional, 1.990€
        Premium IVA incluido — entregan sistema operativo completo con
        plazos publicados de 5, 7 y 10 días laborables respectivamente.
      </p>
      <p>
        Si tu proyecto necesita brand book primero (strategy, arquetipo,
        moodboards aspiracionales), te recomendamos colegas
        especializados en strategy: hay agencias excelentes en Madrid y
        Barcelona que lo hacen a precios que van desde los 4.000€.
        Después, si quieres, podemos hacer el manual de marca operativo
        consumiendo el brand book como input — tardamos menos porque la
        strategy ya está resuelta.
      </p>
      <p>
        <Link href="/precios">Ver tres tiers Tramarca</Link> ·{" "}
        <Link href="/contacto">Pedir propuesta en 24h</Link> ·{" "}
        <Link href="/#pedir-manual">Descargar manual Tramarca v4 en PDF</Link>
      </p>

      <h2>En una frase</h2>
      <p>
        El brand book te dice <strong>por qué</strong> existe tu marca.
        El manual de marca te dice <strong>cómo</strong> se aplica. Uno
        inspira al equipo. El otro evita que tus proveedores
        improvisen. Confundirlos cuesta dinero — el CEO madrileño lo
        descubrió pagando 52.500€ por algo que podría haber costado
        30.000-35.000€ con coordinación correcta desde el inicio<span className="text-lacre">.</span>
      </p>
    </div>
  );
}
