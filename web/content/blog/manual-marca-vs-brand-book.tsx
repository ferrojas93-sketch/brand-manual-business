import Link from "next/link";

/**
 * Pieza 03 · Commercial intent · KD 20 sweet spot · target ~2.000 palabras.
 * Tabla comparativa + decision tree + 4 escenarios.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Un <strong>brand book es aspiracional</strong> — cuenta la historia,
        presenta el arquetipo, inspira al equipo. Un{" "}
        <strong>manual de marca es operativo</strong> — fija reglas aplicables
        para que cualquier proveedor produzca consistente sin preguntarte.
        Ambos son útiles, pero resuelven problemas distintos: uno mueve
        corazones; el otro mueve producción<span className="text-lacre">.</span>
      </p>

      <p>
        La confusión entre los dos cuesta dinero. Hemos visto empresas firmar
        presupuestos de 12.000€ por un brand book bellísimo que luego no
        responde a preguntas operativas del día a día, y otras gastar 400€ en
        un manual básico que no tiene el peso estratégico que necesitaban
        para presentar a inversores. El problema no es el precio: es que
        compraron el documento equivocado.
      </p>

      <p>
        Esta guía fija la diferencia exacta, cuándo necesitas uno, cuándo
        necesitas otro, y cuándo tiene sentido tener los dos. Al final hay
        un árbol de decisión que puedes seguir en 60 segundos.
      </p>

      <h2>Brand Book: qué es exactamente</h2>
      <p>
        Un brand book — también llamado &quot;brand bible&quot; o &quot;libro
        de marca&quot; — es un <strong>documento narrativo</strong> que
        presenta la marca desde su propósito, visión y valores hasta su
        personalidad y tono aspiracional. Su audiencia primaria es
        <em> interna</em>: equipo fundador, nuevas incorporaciones,
        inversores, socios estratégicos. Su objetivo es alinear entendimiento
        emocional de la marca, no operar producción.
      </p>
      <p>
        Contenido típico:
      </p>
      <ul>
        <li>Historia / storytelling del origen</li>
        <li>Propósito, misión, visión, valores</li>
        <li>Arquetipo de marca (sabio, creador, rebelde, etc.)</li>
        <li>Personalidad expresada en adjetivos operativos</li>
        <li>Moodboard visual extenso (20-40 referencias)</li>
        <li>Manifiesto verbal</li>
        <li>Audiencias objetivo (buyer personas)</li>
        <li>Posicionamiento en el mercado</li>
        <li>Pocas reglas, muchas direcciones de tono</li>
      </ul>
      <p>
        Longitud típica: 40-120 páginas con abundantes imágenes full-bleed,
        textos cortos, moodboards. Se lee una vez de principio a fin y
        después se consulta puntualmente para reforzar strategy. No sirve
        para preguntar &quot;¿qué color va en este botón?&quot;.
      </p>

      <h2>Manual de marca: qué es exactamente</h2>
      <p>
        Un manual de marca es un{" "}
        <strong>documento técnico-operativo</strong> que fija cómo se aplica
        la identidad visual y verbal en cada contexto de uso. Su audiencia
        primaria es <em>externa</em>: proveedores, freelances, imprentas,
        agencias subcontratadas, equipo de producción. Su objetivo es evitar
        la improvisación cuando alguien que no conoce la marca produce algo
        con ella.
      </p>
      <p>
        Contenido típico:
      </p>
      <ul>
        <li>Sistema de logo con variantes, zona de exclusión, tamaños mínimos</li>
        <li>Paleta cromática con valores técnicos (Pantone, CMYK, RGB, HEX)</li>
        <li>Sistema tipográfico con jerarquía H1-H6 documentada</li>
        <li>Aplicaciones reales: papelería, digital, merch</li>
        <li>Guidelines verbales: registro por canal, glosario</li>
        <li>Usos correctos e incorrectos con ejemplos explícitos</li>
        <li>Archivos fuente (SVG, PNG, PDF, Figma)</li>
      </ul>
      <p>
        Longitud típica: 20-50 páginas con mucho diagrama técnico, tablas,
        mockups realistas, pocas imágenes aspiracionales. Se consulta
        constantemente durante la producción. Nosotros documentamos 16
        capítulos y 48 componentes — puedes verlos en{" "}
        <Link href="/anatomia">/anatomia</Link>.
      </p>

      <h2>Tabla comparativa</h2>
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
              <td>Interna (equipo, inversores)</td>
              <td>Externa (proveedores)</td>
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
              <td>Sistema tipográfico detallado</td>
              <td>Presentado</td>
              <td>Documentado con jerarquía</td>
            </tr>
            <tr>
              <td>Valores técnicos cromáticos</td>
              <td>Paleta mostrada</td>
              <td>Pantone, CMYK, RGB, HEX</td>
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
              <td>3.000€ — 15.000€</td>
              <td>490€ — 1.990€ (productizado)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Árbol de decisión · 60 segundos</h2>
      <p>
        Responde estas tres preguntas en orden y sabes cuál necesitas:
      </p>
      <ol>
        <li>
          <strong>¿Vas a delegar producción a proveedores externos en los
          próximos 6 meses?</strong>
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
          Sí → brand book refuerza narrativa.
          <br />
          No → probablemente no necesitas ninguno de los dos todavía — gasta
          ese dinero en producto o ventas.
        </li>
      </ol>

      <h2>Cuatro escenarios — cuál necesitas según tu caso</h2>

      <h3>Autónomo o startup muy temprana (pre-seed, equipo 1-3)</h3>
      <p>
        Manual de marca tier Esencial. El brand book ahora es prematuro — el
        negocio puede pivotar. Documenta lo operativo primero (logo, paleta,
        tipografía, aplicaciones) para poder delegar landing page, redes y
        papelería sin micromanagement. El storytelling aspiracional lo
        trabajas verbalmente en pitch decks, no en PDF.
      </p>

      <h3>PYME con producto validado (seed, equipo 5-15)</h3>
      <p>
        Manual de marca tier Profesional. Sistema completo con voz verbal
        documentada. El brand book sigue siendo optional unless hay rondas
        de inversión próximas donde strategy documentada refuerza la
        narrativa. Prioriza el manual porque el equipo externo ya está en
        contacto con la marca.
      </p>

      <h3>Marca consolidada haciendo rebrand (serie A+, equipo 15-50)</h3>
      <p>
        Los dos. El brand book articula <em>por qué</em> se rebrand (al
        equipo, a inversores, a medios). El manual de marca traduce esa
        strategy en reglas aplicables de forma inmediata para que el rebrand
        no se degrade en producción. Presupuesto típico combinado: 4.000€ —
        8.000€ en estudios especializados, 8.000€ — 20.000€ en agencias.
      </p>

      <h3>Corporate o institucional (equipo 50+, rondas serie B+)</h3>
      <p>
        Los dos, con discovery workshops incluidos y process de aprobación
        multi-stakeholder. Agencia tradicional con equipo dedicado. Brand
        book inspiracional para alinear liderazgo + manual de marca extenso
        (80-120pp) para coordinar equipos distribuidos y agencias
        subcontratadas.
      </p>

      <h2>¿Puedes tener los dos?</h2>
      <p>
        Sí, y es la combinación ideal para marcas consolidadas. La estrategia
        canónica es:
      </p>
      <ol>
        <li>
          <strong>Brand book</strong> producido primero con la agencia o estudio
          de strategy. Captura el trabajo de posicionamiento.
        </li>
        <li>
          <strong>Manual de marca</strong> producido después, consumiendo el
          brand book como input. Traduce strategy en reglas aplicables.
        </li>
      </ol>
      <p>
        El orden importa: manual sin brand book queda técnicamente correcto
        pero sin alma; brand book sin manual queda inspiracional pero
        difícil de ejecutar consistentemente. Ambos juntos cierran el círculo
        entre <em>por qué</em> (brand book) y <em>cómo</em> (manual).
      </p>

      <h2>Qué entrega Tramarca exactamente</h2>
      <p>
        Tramarca produce <strong>manuales de marca</strong>, no brand books.
        Hacemos una sola cosa y la hacemos bien. Nuestros tres tiers — 490€
        Esencial, 990€ Profesional, 1.990€ Premium IVA incluido — entregan
        sistema operativo completo con plazos publicados de 5, 7 y 10 días
        laborables respectivamente.
      </p>
      <p>
        Si tu proyecto necesita brand book (strategy, arquetipo, moodboards
        aspiracionales), te recomendamos colegas especializados en strategy:
        hay agencias excelentes en Madrid y Barcelona que lo hacen a precios
        que van desde los 4.000€. Después, si quieres, podemos hacer el
        manual de marca operativo consumiendo el brand book como input —
        tardamos menos porque la strategy ya está resuelta.
      </p>
      <p>
        <Link href="/precios">Ver precios Tramarca</Link> ·{" "}
        <Link href="/contacto">Pedir propuesta en 24h</Link> ·{" "}
        <Link href="/#pedir-manual">Descargar manual Tramarca v4 en PDF</Link>
      </p>

      <h2>En una frase</h2>
      <p>
        El brand book te dice <strong>por qué</strong> existe tu marca. El
        manual de marca te dice <strong>cómo</strong> se aplica. Uno inspira
        al equipo. El otro evita que tus proveedores improvisen.
      </p>
    </div>
  );
}
