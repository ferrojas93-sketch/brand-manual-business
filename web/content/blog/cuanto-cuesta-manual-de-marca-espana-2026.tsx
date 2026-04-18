import Link from "next/link";

/**
 * Cuerpo editorial del primer post pilar.
 * Estructura SEO-optimizada: intro con featured-snippet target + H2s + internal links + FAQ via schema aparte.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Un manual de marca en España 2026 cuesta entre <strong>80€ y 18.000€</strong>.
        La horquilla es así de ancha porque debajo del mismo término caben cuatro
        mercados distintos: plantillas automatizadas, freelances generalistas,
        estudios productizados y agencias tradicionales. El precio no mide solo
        el trabajo — mide también qué compras, qué plazo se publica y qué
        proveedor hay detrás<span className="text-lacre">.</span>
      </p>

      <p>
        Si has llegado aquí buscando un número redondo, lo más honesto que
        podemos darte son los rangos reales del mercado español tal como los
        vemos desde dentro a mediados de 2026. Lo dividimos en cuatro
        segmentos y después te contamos qué incluye cada precio para que
        elijas sin comerte un &quot;depende&quot;.
      </p>

      <h2>Rangos reales del mercado español 2026</h2>
      <p>
        Esta tabla no es marketing — son los precios que vemos publicados,
        pitched y firmados a lo largo del último año. La hemos construido desde
        el brief de más de 50 propuestas cruzadas con clientes, proveedores y
        colegas. Si tu cotización sale fuera de estos rangos, no es
        necesariamente mala; simplemente merece una explicación por escrito.
      </p>

      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Rango de precio</th>
              <th>Plazo típico</th>
              <th>IVA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agencia tradicional</td>
              <td>6.000€ — 18.000€</td>
              <td>6-12 semanas + discovery</td>
              <td>+ IVA aparte</td>
            </tr>
            <tr>
              <td>Freelance generalista</td>
              <td>800€ — 3.500€</td>
              <td>Variable (2-8 semanas)</td>
              <td>A negociar</td>
            </tr>
            <tr>
              <td>Estudio productizado (ej. Tramarca)</td>
              <td>490€ — 1.990€</td>
              <td>5, 7 o 10 días laborables</td>
              <td>Incluido</td>
            </tr>
            <tr>
              <td>Plantilla / IA / Canva</td>
              <td>~80€</td>
              <td>Instantáneo</td>
              <td>Depende</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Qué incluye cada precio — el detalle</h2>

      <h3>Agencia tradicional (6.000€ — 18.000€ + IVA)</h3>
      <p>
        Es el modelo clásico. Incluye discovery workshop, propuesta
        personalizada por proyecto, equipo multidisciplinar (estratega,
        diseñador senior, diseñador junior, project manager) y timelines entre
        6 y 12 semanas. La calidad del entregable suele ser alta y el
        acompañamiento estratégico profundo. Tiene sentido cuando el proyecto
        necesita redefinición de negocio completa, naming estratégico, tests
        de mercado o producción publicitaria asociada.
      </p>
      <p>
        La contrapartida: discovery extenso, propuesta custom en cada caso,
        cronograma dependiente de agendas cruzadas y factura final que puede
        escalar si el alcance cambia durante el proyecto. Si lo que buscas es
        un documento operativo y no una transformación estratégica, probablemente
        es más agencia de la que necesitas.
      </p>

      <h3>Freelance generalista (800€ — 3.500€)</h3>
      <p>
        Un solo perfil hace el trabajo completo. La calidad depende casi
        enteramente del portfolio del freelance: a 800€ sueles llevarte logo +
        paleta + tipografía en 15-20 páginas, mientras que a 3.500€ un
        freelance senior debería entregarte un sistema completo con aplicaciones
        y voz. El tiempo de entrega es variable porque depende de la carga
        paralela del profesional.
      </p>
      <p>
        Dos riesgos frecuentes: <strong>scope creep sin coste transparente</strong>
        (la revisión nº 5 aparece sin factura previa) y <strong>dependencia
        total de una persona</strong> (si se atasca, se atasca todo). Mitigar
        con contrato por escrito, rondas acotadas y entregable documentado en
        el brief.
      </p>

      <h3>Estudio productizado (490€ — 1.990€ IVA incluido)</h3>
      <p>
        Modelo más reciente. El entregable está cerrado antes de empezar: tres
        tiers publicados, plazo publicado, entregables documentados. Tramarca
        entrega en 5, 7 o 10 días laborables según tier — <Link href="/precios">los precios completos
        están aquí</Link>. Se gana eficiencia a cambio de ritual (nada de
        workshops de medio día).
      </p>
      <p>
        Cuando encaja: proyectos donde el fundador ya tiene claro qué quiere y
        necesita un sistema documentado rápido. Cuando no: si necesitas
        redefinir negocio, naming o estrategia profunda desde cero, el modelo
        productizado se queda corto. Ahí vuelve a tener sentido una agencia.
      </p>

      <h3>Plantilla / IA / Canva (~80€)</h3>
      <p>
        No es manual de marca — es un brand kit. Obtienes un archivo visualmente
        coherente pero sin documentación, sin guidelines, sin aplicaciones
        reales. Funciona para freelancers que arrancan con una idea y necesitan
        identidad básica para abrir Instagram y firmar emails; se queda muy
        corto en el momento en que hay que coordinar con un proveedor externo
        o explicar al equipo cómo aplicar la marca en un contexto nuevo.
      </p>

      <h2>La trampa del precio bajo</h2>
      <p>
        La queja más habitual que escuchamos de marcas que vienen de un
        freelance barato o una plantilla: &quot;tengo el archivo, pero nadie sabe
        usarlo&quot;. Pagar 200€ por un logo suelto sale carato si luego necesitas
        otros 1.500€ para documentar cómo se usa, qué pasa cuando lo coloca un
        proveedor externo, y cómo se comporta en 20 aplicaciones diferentes.
      </p>
      <p>
        La regla cruda: si tu cotización no menciona explícitamente{" "}
        <strong>número de páginas entregadas, sistema tipográfico
        documentado, jerarquía de color con reglas de uso, y aplicaciones
        concretas</strong>, no estás comprando un manual. Estás comprando un
        logo con color.{" "}
        <Link href="/anatomia">Aquí tienes 16 capítulos y 48 componentes</Link>{" "}
        que sí deberían aparecer.
      </p>

      <h2>Cómo elegir sin equivocarte</h2>
      <p>
        Tres filtros que aplicamos nosotros mismos cuando evaluamos un proveedor
        de cualquier servicio productizado:
      </p>
      <ol>
        <li>
          <strong>¿El precio está publicado?</strong> Si no, prepárate para
          discovery prolongado. No es malo — pero debes saberlo antes de pedir
          cita.
        </li>
        <li>
          <strong>¿Hay portfolio con casos firmados?</strong> Mockups hipotéticos
          son señal débil. Entregables reales con nombre de cliente e
          información operativa (páginas, plazo, scope) son señal fuerte.
        </li>
        <li>
          <strong>¿Los plazos son días o &quot;una estimación aproximada&quot;?</strong>{" "}
          Un estudio que publica plazos laborables concretos se compromete a
          ellos. Uno que habla en semanas estimadas está protegiéndose legítimamente
          de su propia carga paralela.
        </li>
      </ol>
      <p>
        Nosotros publicamos precio cerrado IVA incluido, plazos en días
        laborables y un manual propio de 58 páginas que puedes descargar en un
        minuto{" "}
        <Link href="/#pedir-manual">pidiéndonos el PDF aquí</Link>. Si aun así
        no encaja, dinos y te recomendamos a alguien que sí encaje — tenemos
        colegas excelentes para cada perfil.
      </p>
    </div>
  );
}
