import Image from "next/image";
import Link from "next/link";

/**
 * Pieza 09 · Proceso · Pilar nuevo · target ~3.000 palabras.
 * El brief operativo Tramarca · 23 preguntas reales con razón de cada una.
 * Categoría Proceso necesita más volumen.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Marzo de 2025. Un fundador de scale-up sevillana se sienta a
        rellenar el cuestionario de brief de Tramarca antes del kickoff.
        Veintitrés preguntas estructuradas. Le toma cuarenta y ocho
        minutos. Cuando termina, escribe en el email de envío:{" "}
        <em>&quot;Es la primera vez en seis años que respondemos por
        escrito a estas preguntas. El brief mismo ya nos ha sido
        útil&quot;</em>. Esa frase es el síntoma de algo importante:{" "}
        <strong>el brief no es trámite previo al trabajo creativo. Es
        parte del trabajo</strong><span className="text-lacre">.</span>
      </p>

      <p>
        En Tramarca, sin brief firmado no se empieza. Es regla dura.
        Esta pieza explica por qué, qué hay exactamente en nuestro
        cuestionario de 23 preguntas, qué pasa cuando un brief es
        débil, y qué diferencia editorial hace tener brief sólido vs
        brief vago. Es el documento operativo más importante del
        proceso editorial — más importante que cualquier moodboard
        o reunión de descubrimiento.
      </p>

      <h2>Por qué firmar brief antes del kickoff</h2>
      <p>
        Tres razones operativas concretas que hacen del brief firmado
        regla no negociable en Tramarca:
      </p>

      <h3>1 · El brief impide la ingeniería especulativa</h3>
      <p>
        Sin brief firmado, el estudio empieza a producir basándose en
        intuiciones derivadas de conversaciones informales. El cliente
        ve la propuesta inicial y dice &quot;no es lo que tenía en
        mente&quot;. El estudio reformula intentando capturar lo que
        cree que el cliente quiere. Iteran. Reformulan. La conversación
        se basa en sensaciones, no en criterio. Acaba en parálisis y
        plazos rotos.
      </p>
      <p>
        El brief firmado convierte la conversación de subjetiva a
        objetiva. La pregunta deja de ser &quot;¿te gusta?&quot; y pasa
        a ser &quot;¿esto resuelve lo que firmaste en el brief?&quot;.
        Hay criterio externo verificable.
      </p>

      <h3>2 · El brief protege ambos lados ante scope creep</h3>
      <p>
        El brief documenta scope acordado al inicio. Si durante la
        producción el cliente pide algo fuera de scope (&quot;una cosita
        más&quot; — la frase que activa nuestras alarmas), el brief es
        referencia escrita para decidir si entra en el proyecto actual,
        si se cotiza aparte, o si va al backlog para versión 2.
      </p>
      <p>
        Sin brief escrito, las solicitudes informales se acumulan. El
        proyecto se vuelve deuda técnica. El estudio entrega tarde y
        mal. El cliente paga lo acordado y siente que no recibió valor.
        Pierden ambos. El brief lo previene.
      </p>

      <h3>3 · El brief obliga al cliente a articular antes de comprar</h3>
      <p>
        El acto de rellenar el brief — sentarse 30-50 minutos a
        responder preguntas estructuradas sobre tu propio negocio,
        audiencia, proveedores, restricciones — produce claridad
        interna independientemente del manual posterior. Muchos
        clientes nos dicen que el brief mismo fue valioso porque les
        forzó a articular cosas que tenían intuitivas pero no
        verbalizadas.
      </p>
      <blockquote>
        &quot;Llevábamos cuatro años trabajando con un logo y unos
        colores que mi cofundador eligió en 2021. Hasta que no
        respondimos vuestro brief no nos dimos cuenta de que ninguno
        de los dos sabía exactamente por qué habíamos elegido esos
        elementos. El brief nos forzó a decidir post-hoc lo que
        nunca habíamos decidido propiamente.&quot;
        <cite>— CEO scale-up Sevilla, abril 2025</cite>
      </blockquote>

      <h2>Las 23 preguntas del cuestionario Tramarca</h2>
      <p>
        Nuestro cuestionario se estructura en cinco bloques de
        preguntas. Los reproducimos aquí con el razonamiento detrás
        de cada bloque. Si quieres usarlo como plantilla para tu
        propio brief interno o para evaluar a otros proveedores,
        eres libre — el brief es metodología pública.
      </p>

      <h3>Bloque A · Negocio (5 preguntas)</h3>
      <ol>
        <li>
          ¿Qué hace exactamente tu empresa? (una frase de máximo 25
          palabras, sin jergón sectorial)
        </li>
        <li>
          ¿Cuánto facturáis anualmente? (rango es suficiente: menos de 100k,
          100k-500k, 500k-2M, 2M-10M, más de 10M)
        </li>
        <li>
          ¿Cuánto tiempo lleváis operando? (años, no meses)
        </li>
        <li>
          ¿Cuántas personas en el equipo? (operativo + cualquier
          colaborador externo regular)
        </li>
        <li>
          ¿Qué problema resolvéis para vuestros clientes? (en una
          frase, sin marketing)
        </li>
      </ol>
      <p>
        <strong>Por qué importa este bloque</strong>: contextualiza
        el manual al tamaño y madurez del negocio. Una empresa de 8
        personas que factura 2M€ no necesita el mismo manual que una
        empresa de 50 personas que factura 800k€. La granularidad
        editorial del manual debe escalar con la complejidad
        operacional.
      </p>

      <h3>Bloque B · Audiencia (4 preguntas)</h3>
      <ol start={6}>
        <li>
          ¿Quién es tu cliente tipo? (perfil operativo concreto, no
          persona demográfica genérica)
        </li>
        <li>
          ¿Qué situación lleva a un cliente tipo a contactaros? (el
          trigger concreto)
        </li>
        <li>
          ¿Qué alternativas considera tu cliente antes de elegir?
          (competencia real, no aspiracional)
        </li>
        <li>
          ¿Cuál es la objeción más frecuente que recibís?
        </li>
      </ol>
      <p>
        <strong>Por qué importa</strong>: el tono verbal del manual,
        la jerarquía visual, las decisiones de aplicación digital
        cambian radicalmente según quién es la audiencia primaria.
        Un manual para empresa que vende a CFOs de Fortune 500 será
        editorialmente distinto a uno para empresa que vende a
        autónomos individuales.
      </p>

      <figure className="hero-fig">
        <Image
          src="/blog/brief-manual-marca-cuestionario/fig-02-cuestionario.jpg"
          alt="Cuestionario brief Tramarca impreso sobre mesa de estudio editorial — 23 preguntas estructuradas en 5 bloques con anotaciones manuscritas en margen, fotografía top-down concreto"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 02 · El cuestionario · 23 preguntas, 5 bloques, 30-50
          minutos<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h3>Bloque C · Activos visuales y verbales existentes (4 preguntas)</h3>
      <ol start={10}>
        <li>
          ¿Tenéis logo? Si sí, ¿quién lo diseñó y cuándo? Adjunta
          archivo
        </li>
        <li>
          ¿Tenéis paleta cromática definida? ¿Qué hex codes?
        </li>
        <li>
          ¿Tenéis tipografía corporativa? ¿Qué familias?
        </li>
        <li>
          ¿Tenéis web actual? URL + ¿estás contento con cómo
          funciona?
        </li>
      </ol>
      <p>
        <strong>Por qué importa</strong>: distinguir entre rebrand
        completo (sin nada previo a respetar), rebrand evolutivo
        (preservar equity de elementos existentes que funcionan), o
        creación desde cero (marca nueva). El abordaje editorial
        cambia radicalmente.
      </p>

      <h3>Bloque D · Proveedores externos y casos de uso (5 preguntas)</h3>
      <ol start={14}>
        <li>
          ¿Quién aplicará la marca en los próximos 6 meses? Equipo
          interno, freelances, agencias, imprentas
        </li>
        <li>
          ¿Tenéis web nueva planeada en los próximos 12 meses?
        </li>
        <li>
          ¿Imprimiréis papelería corporativa? ¿En qué cantidad y
          frecuencia?
        </li>
        <li>
          ¿Tenéis presencia retail física? Si sí, ¿qué tipo de
          señalética?
        </li>
        <li>
          ¿Plan de eventos corporativos? Stands, materiales, branding
          temporal
        </li>
      </ol>
      <p>
        <strong>Por qué importa</strong>: este es el bloque más
        infravalorado por clientes pero el más operacionalmente
        crítico. El manual debe documentar las aplicaciones que
        realmente vais a usar, no las teóricas. Un cliente sin
        presencia retail física no necesita capítulo de señalética
        arquitectónica. Un cliente con cinco eventos al año necesita
        ese capítulo extenso.
      </p>

      <h3>Bloque E · Tono, referencias y restricciones (5 preguntas)</h3>
      <ol start={19}>
        <li>
          ¿3-5 marcas que admiráis y por qué? (con una línea por marca,
          no solo nombres)
        </li>
        <li>
          ¿1-2 marcas que no querríais parecer? (lo que no quieres es
          tan informativo como lo que sí)
        </li>
        <li>
          ¿Restricciones legales o sectoriales? (sectores regulados:
          farma, financiero, legal — restricciones específicas)
        </li>
        <li>
          ¿Plazo crítico? Fecha exacta cuando necesitáis el manual
          aplicable (lanzamiento, evento, ronda)
        </li>
        <li>
          ¿Algo más que el estudio debería saber para entender el
          proyecto? (espacio libre)
        </li>
      </ol>
      <p>
        <strong>Por qué importa</strong>: las referencias positivas
        anclan dirección visual sin necesidad de moodboards
        elaborados. Las referencias negativas son aún más útiles —
        eliminan direcciones equivocadas antes de empezar. La pregunta
        23 abierta es donde aparecen las restricciones reales que las
        otras 22 no capturaron.
      </p>

      <h2>Qué pasa con un brief débil</h2>
      <p>
        Hemos tenido — pocas veces, pero ha pasado — proyectos donde
        el cliente rellenó el brief mínimo, sin profundidad, marcando
        opciones genéricas. La consecuencia siempre es la misma:
      </p>

      <h3>Iteración infinita en la dirección visual</h3>
      <p>
        Sin referencias positivas/negativas claras, el primer borrador
        no resuena con el cliente. El estudio reformula. Tampoco. El
        estudio reformula otra vez. La conversación se basa en
        sensaciones (&quot;quiero algo más X&quot;) no en criterio
        (&quot;como X marca, no como Y marca&quot;).
      </p>

      <h3>Aplicaciones documentadas que no se usan</h3>
      <p>
        Si el bloque D no se rellena con detalle, el estudio asume
        aplicaciones genéricas. Documentamos un capítulo extenso de
        señalética arquitectónica para un cliente que nunca abrirá
        oficina física. O ignoramos el sistema de eventos corporativos
        para un cliente que celebra cinco al año. El manual queda
        técnicamente correcto pero operativamente desalineado.
      </p>

      <h3>Plazo desbordado por scope mal acotado</h3>
      <p>
        Sin restricciones legales/sectoriales explícitas, el estudio
        propone soluciones que después no pueden aprobarse. Cliente
        farmacéutico que necesita compliance específico. Cliente
        financiero con restricciones de comunicación de la CNMV.
        Cliente legal con restricciones del Colegio de Abogados. Si
        no se mencionan en brief, aparecen tarde y desbordan plazo.
      </p>

      <h2>Brief sólido vs brief débil · ejemplo lado a lado</h2>

      <p>
        Pregunta: <em>&quot;¿Quién es tu cliente tipo?&quot;</em>
      </p>

      <h3>Brief débil</h3>
      <blockquote>
        &quot;Pymes que necesitan crecer.&quot;
      </blockquote>
      <p>
        ¿Pymes de qué tamaño exactamente? ¿De qué sectores? ¿Crecer
        cómo — internacionalmente, en headcount, en ingresos? ¿En qué
        países o regiones? La respuesta no permite ninguna decisión
        editorial.
      </p>

      <h3>Brief sólido</h3>
      <blockquote>
        &quot;Pymes españolas de servicios B2B con 10-50 empleados,
        facturación anual entre 1M y 8M€, basadas mayoritariamente en
        Madrid y Barcelona, que han tenido crecimiento sostenido los
        últimos 3-5 años y empiezan a profesionalizar funciones que
        antes ejecutaba el fundador. Sectores típicos: consultoría
        técnica, software, comunicación corporativa, legal
        especializado. Cliente decide en 1-3 reuniones, presupuesto
        para servicios profesionales 5k-50k€/proyecto.&quot;
      </blockquote>
      <p>
        Ahora podemos decidir: el manual debe verse profesional sin
        ser corporativo intimidante (cliente es pyme, no Fortune 500),
        debe funcionar bilingüe básico (algunas pymes operan
        internacionalmente), debe incluir aplicaciones para
        propuestas comerciales formales (cliente compra en formato
        propuesta), debe permitir escalar visualmente cuando crezcan
        a 50-100 empleados sin necesitar rebrand.
      </p>

      <h2>Cómo usar este brief si vas a contratarlo en otro estudio</h2>
      <p>
        Si decides contratar tu manual con otro proveedor (estudio
        productizado, freelance, agencia), puedes usar la estructura
        de este brief como referencia para evaluar la propuesta.
        Pregunta al proveedor:
      </p>

      <ol>
        <li>
          <strong>¿Tenéis cuestionario estructurado pre-kickoff?</strong>
          Si la respuesta es vaga (&quot;tenemos sesión inicial donde
          hablamos&quot;), señal débil — la sesión sin estructura
          tiende a ser conversación informal sin captura sistemática.
          Pide cuestionario escrito.
        </li>
        <li>
          <strong>¿Cuántas preguntas tiene el cuestionario?</strong>
          Si tiene 5-10 preguntas, probablemente es brief decorativo.
          Si tiene 20-30 preguntas estructuradas en bloques, es brief
          operativo. Si tiene 50+ preguntas, es brief overengineered
          (hay un sweet spot).
        </li>
        <li>
          <strong>¿Pedís firma del brief antes de empezar
          producción?</strong> La firma convierte el brief de borrador
          informal en compromiso documentado. Sin firma, el brief es
          conversación.
        </li>
        <li>
          <strong>¿Qué pasa si durante la producción aparecen cambios
          de scope?</strong> Buenas respuestas: &quot;cotizamos aparte
          con transparencia&quot;, &quot;evaluamos si entra en scope
          actual o va a backlog&quot;. Mala respuesta: &quot;no se
          preocupe, lo gestionamos&quot; (sinónimo de scope creep
          silencioso futuro).
        </li>
      </ol>

      <h2>Plantilla descargable</h2>
      <p>
        Hemos publicado el cuestionario completo (las 23 preguntas con
        contexto y razonamiento de cada bloque) como plantilla Notion
        gratuita.{" "}
        <Link href="/contacto">Escríbenos a hola@tramarca.es</Link> y
        te enviamos el link directo. Es público, libre de uso para
        cualquier proveedor o equipo interno.
      </p>
      <p>
        La distribuimos gratis porque creemos que mejorar el
        estándar de brief en el sector — independientemente de quién
        ejecute el manual después — beneficia al mercado completo.
        Mejor brief produce mejor manual. Mejor manual reduce coste
        operativo de las empresas. Reduce la opacidad histórica del
        sector.
      </p>

      <figure>
        <Image
          src="/blog/brief-manual-marca-cuestionario/fig-03-firma.jpg"
          alt="Brief firmado con firma manuscrita sobre matte concrete editorial — momento del compromiso entre cliente y estudio Tramarca, fotografía top-down"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 03 · La firma · convierte conversación en compromiso<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Coda · el brief es el primer trabajo editorial</h2>
      <p>
        Un brief de 23 preguntas estructurado y firmado parece trámite
        burocrático antes del trabajo creativo. No lo es. Es{" "}
        <strong>el primer trabajo editorial del proyecto</strong>. El
        estudio que se toma en serio el brief produce mejor manual.
        El cliente que se toma en serio el brief obtiene mejor
        servicio. Ambos lados ganan cuando la inversión inicial es
        sólida.
      </p>
      <p>
        En Tramarca, el brief firmado es regla no negociable porque
        hemos comprobado durante decenas de proyectos que cuando
        existe, todo el proceso editorial subsiguiente fluye. Cuando
        no existe (en nuestros primeros proyectos lo aceptábamos
        más laxamente), el proceso se atasca en iteración informal.
      </p>
      <p>
        Si vas a contratar manual de marca con nosotros,{" "}
        <Link href="/contacto">pedir propuesta lleva 24h</Link>. Te
        enviamos el cuestionario el mismo día y arrancamos el brief
        cuando esté completo. Si vas a contratarlo en otro
        proveedor, exige cuestionario estructurado pre-firma. Es la
        diferencia entre contratar manual editorial y contratar
        archivo bonito.
      </p>

      <aside className="not-prose my-12 md:my-16 bg-papel border border-negro/15 p-6 md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
          Plantilla descargable · gratuita
        </p>
        <h3 className="mt-4 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-negro">
          Las 23 preguntas en PDF<span className="text-lacre">.</span>
        </h3>
        <p className="mt-4 max-w-xl text-base md:text-lg text-piedra leading-[1.6]">
          La plantilla operativa que usamos en kickoff Tramarca. Cinco
          bloques. Imprimible. Funciona contratándonos a nosotros o
          contratando a otro estudio. Sin gate ni email — descarga
          directa<span className="text-lacre">.</span>
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/recursos/brief-tramarca.pdf"
            download
            className="inline-flex items-center justify-center bg-negro text-papel px-6 py-3 font-bold hover:bg-lacre transition-colors"
          >
            Descargar brief PDF →
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center border border-negro text-negro px-6 py-3 font-bold hover:bg-negro hover:text-papel transition-colors"
          >
            Pedir propuesta directamente
          </Link>
        </div>
      </aside>
      <p>
        Para ver cómo aplicamos el brief firmado a nuestro propio
        manual,{" "}
        <Link href="/#pedir-manual">descarga el manual Tramarca
        v4</Link>: 58 páginas, gratis, te llega al momento por email.
        Es el manual que produjimos siguiendo nuestro propio proceso
        editorial, brief firmado incluido<span className="text-lacre">.</span>
      </p>
    </div>
  );
}
