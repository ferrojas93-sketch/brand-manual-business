import Link from "next/link";

/**
 * Cuerpo editorial expandido · target ~3.000 palabras.
 * Estructura SEO con featured-snippet target (intro directa), 7 H2s, tabla comparativa,
 * 4 casos típicos, checklist de entregables, internal links al sistema (/anatomia, /precios,
 * /manuales/tramarca) y FAQ externa via schema.
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
        vemos desde dentro a mediados de 2026. Los hemos cruzado con briefs de
        más de cincuenta propuestas firmadas el último año y con colegas de
        estudio que publican sus tarifas. Lo dividimos en cuatro segmentos,
        explicamos qué incluye cada uno, qué debería entregarse mínimamente
        para llamar &quot;manual&quot; a algo, y cerramos con cuatro casos típicos
        para que te sitúes sin pedir cita.
      </p>

      <p>
        No es un artículo de vendedor: si tu proyecto encaja mejor con una
        agencia tradicional, lo vas a ver en los casos finales. Si encaja con un
        freelance serio, también. Prefiere perder una venta bien explicada a
        ganar una mal calificada.
      </p>

      <h2>Rangos reales del mercado español 2026</h2>
      <p>
        Esta tabla no es marketing — son los precios que vemos publicados,
        pitched y firmados a lo largo del último año. Si tu cotización sale
        fuera de estos rangos, no es necesariamente mala; simplemente merece una
        explicación por escrito antes de firmar.
      </p>

      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Precio</th>
              <th>Plazo típico</th>
              <th>IVA</th>
              <th>Páginas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agencia tradicional</td>
              <td>6.000€ — 18.000€</td>
              <td>6-12 semanas + discovery</td>
              <td>+ IVA aparte</td>
              <td>40-120pp</td>
            </tr>
            <tr>
              <td>Freelance generalista</td>
              <td>800€ — 3.500€</td>
              <td>2-8 semanas (variable)</td>
              <td>A negociar</td>
              <td>15-40pp</td>
            </tr>
            <tr>
              <td>Estudio productizado (Tramarca)</td>
              <td>490€ — 1.990€</td>
              <td>5, 7 o 10 días laborables</td>
              <td>Incluido</td>
              <td>20-50pp</td>
            </tr>
            <tr>
              <td>Plantilla / IA / Canva</td>
              <td>~80€</td>
              <td>Instantáneo</td>
              <td>Depende</td>
              <td>10-15pp (auto)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Los números son honestos pero merecen contexto. Lo que hace que un
        manual profesional valga 2.000€ y otro &quot;manual&quot; cueste 80€ no es
        solo cuántas horas se invierten — es cuánto se documenta, cuánto se
        estructura, y qué pasa cuando alguien del equipo tiene que aplicarlo
        sin llamar al diseñador.
      </p>

      <h2>Qué incluye cada precio — el detalle</h2>

      <h3>Agencia tradicional (6.000€ — 18.000€ + IVA)</h3>
      <p>
        Es el modelo clásico. Incluye discovery workshop (medio día o jornada
        completa con el equipo de la agencia y el cliente), propuesta
        personalizada por proyecto, equipo multidisciplinar (estratega,
        diseñador senior, diseñador junior, project manager, a veces copy y
        motion) y timelines entre 6 y 12 semanas. La calidad del entregable
        suele ser alta, el acompañamiento estratégico es profundo y el manual
        final puede llegar a 80-120 páginas con naming, arquitectura de marca,
        plantillas de presentación y dirección fotográfica completa.
      </p>
      <p>
        Tiene sentido cuando el proyecto necesita redefinir el negocio, renombrar
        la empresa, hacer tests de mercado o coordinar producción publicitaria
        asociada. Las agencias grandes (con PM dedicado) funcionan especialmente
        bien cuando el cliente es corporativo y hay múltiples stakeholders que
        aprobar en paralelo.
      </p>
      <p>
        La contrapartida es estructural: discovery extenso, propuesta custom
        en cada caso (dos o tres semanas solo para recibir los números),
        cronograma dependiente de agendas cruzadas (tu project manager más el
        diseñador más el estratega) y factura final que puede escalar si el
        alcance se mueve durante el proyecto. Si lo que buscas es un documento
        operativo y no una transformación estratégica, probablemente es más
        agencia de la que necesitas.
      </p>

      <h3>Freelance generalista (800€ — 3.500€)</h3>
      <p>
        Un solo perfil hace el trabajo completo. La calidad depende casi
        enteramente del portfolio del freelance: a 800€ sueles llevarte logo +
        paleta + tipografía en 15-20 páginas sin sistema de aplicaciones, mientras
        que a 3.500€ un freelance senior con 8-15 años de experiencia debería
        entregarte un sistema completo con aplicaciones, voz y guidelines
        extendidas hasta 30-35 páginas. El tiempo de entrega es variable
        porque depende de la carga paralela del profesional — un freelance bueno
        tiene lista de espera.
      </p>
      <p>
        Dos riesgos frecuentes: <strong>scope creep sin coste transparente</strong>
        (la revisión número cinco aparece sin factura previa) y{" "}
        <strong>dependencia total de una persona</strong> (si se atasca por un
        proyecto paralelo, se atasca todo). Se mitigan con contrato por escrito,
        rondas acotadas al número, entregables documentados en el brief y
        reunión intermedia si el plazo se mueve. Cuando funciona, funciona muy
        bien: conocemos freelances seniors que entregan manuales excelentes por
        debajo de 2.500€.
      </p>

      <h3>Estudio productizado (490€ — 1.990€ IVA incluido)</h3>
      <p>
        Modelo más reciente en España, nacido de la frustración compartida con
        el ritual extenso del modelo agencia. El entregable está cerrado antes
        de empezar: tres tiers publicados, plazo publicado, entregables
        documentados capítulo por capítulo. Tramarca entrega en 5, 7 o 10 días
        laborables según tier —{" "}
        <Link href="/precios">los precios completos están aquí</Link>. Se gana
        eficiencia a cambio de ritual (nada de workshops de medio día, nada de
        propuesta custom que tarda tres semanas).
      </p>
      <p>
        Cuando encaja: proyectos donde el fundador ya tiene claro qué quiere,
        hay una idea de marca definida, y lo que necesita es un sistema
        documentado rápido para operar. Cuando no encaja: si hay que redefinir
        negocio, hacer naming estratégico, o posicionar en un mercado nuevo
        desde cero — ahí vuelve a tener sentido una agencia con discovery. El
        modelo productizado es un sprint editorial, no una consultoría estratégica.
      </p>

      <h3>Plantilla / IA / Canva (~80€)</h3>
      <p>
        No es manual de marca — es un <strong>brand kit</strong>. Obtienes un
        archivo visualmente coherente pero sin documentación, sin guidelines,
        sin aplicaciones reales, sin voz. Funciona para freelancers que arrancan
        con una idea y necesitan identidad básica para abrir Instagram y firmar
        emails; se queda muy corto el día que hay que coordinar con un proveedor
        externo o explicar al equipo cómo aplicar la marca en un contexto nuevo.
      </p>
      <p>
        Las plantillas de IA (Looka, Brandmark, Canva Pro) han mejorado mucho
        en 2026, pero siguen entregando <em>artefacto sin sistema</em>. Si te
        dicen &quot;aquí tienes tu manual de marca en 10 minutos&quot;, lo que
        te están dando es el archivo sin el manual.
      </p>

      <h2>Qué entregables debe tener un manual profesional</h2>
      <p>
        Antes de valorar precio, comprueba que el scope te entrega un sistema,
        no un logo con color. La lista mínima que consideramos razonable para un
        manual operativo — independiente de quien lo produzca — es la siguiente:
      </p>
      <ol>
        <li>
          <strong>Sistema de logo</strong>: marca principal, variantes (horizontal,
          vertical, iso, monograma para favicons), zona de exclusión, tamaños
          mínimos impresos y digitales, y usos incorrectos explícitos.
        </li>
        <li>
          <strong>Sistema tipográfico</strong>: familia display, familia texto,
          jerarquía H1-H6 con reglas por contexto, tamaños y line-heights
          documentados.
        </li>
        <li>
          <strong>Paleta cromática con reglas</strong>: primarios, secundarios,
          acento, regla 60/30/10, y valores técnicos (Pantone, CMYK, RGB, HEX,
          RAL y vinilos si aplica).
        </li>
        <li>
          <strong>Aplicaciones reales</strong>: al menos papelería básica
          (tarjeta, carta, firma de email), digital (web, presentación, avatares
          de redes) y un par de piezas merch si aplica.
        </li>
        <li>
          <strong>Voz y tono</strong>: principios verbales, registro por canal,
          ejemplos &quot;decimos / no decimos&quot;. No opcional en proyectos B2B o
          con comunicación editorial.
        </li>
        <li>
          <strong>Guidelines de uso</strong>: qué se puede y qué no. Sin
          interpretación posible.
        </li>
        <li>
          <strong>Archivos fuente</strong>: SVG + PNG + PDF del logo en todas
          sus variantes, y preferiblemente Figma editable con componentes.
        </li>
      </ol>
      <p>
        Si la cotización que te han pasado no menciona explícitamente este
        bloque mínimo, no estás comprando un manual. Estás comprando un archivo
        más bonito. Nosotros publicamos los 48 componentes desglosados capítulo
        a capítulo en <Link href="/anatomia">/anatomia</Link> — te sirve como
        checklist incluso si al final no nos contratas a nosotros.
      </p>

      <h2>La trampa del precio bajo</h2>
      <p>
        La queja más habitual que escuchamos de marcas que vienen de un
        freelance barato o una plantilla:{" "}
        <em>&quot;tengo el archivo, pero nadie sabe usarlo&quot;</em>. Pagar 200€
        por un logo suelto sale caro si luego necesitas otros 1.500€ para
        documentar cómo se usa, qué pasa cuando lo coloca un proveedor externo,
        y cómo se comporta en veinte aplicaciones diferentes.
      </p>
      <p>
        El patrón clásico: el cliente contrata logo a 300€ con freelance junior,
        a los seis meses tiene un equipo de diez personas improvisando aplicaciones
        en Canva, a los doce meses la marca es irreconocible entre canales, y a
        los dieciocho meses contrata rebrand completo a 4.000€. Total real del
        recorrido: 4.300€ y dieciocho meses de marca inconsistente que ya ha
        costado leads perdidos. El precio bajo no ahorra dinero — lo aplaza.
      </p>
      <p>
        La regla cruda: si en tu cotización no aparece explícitamente{" "}
        <strong>número de páginas entregadas, sistema tipográfico documentado,
        jerarquía de color con reglas de uso, voz verbal y aplicaciones
        concretas</strong>, no estás comprando un manual. Estás comprando un logo
        con color.{" "}
        <Link href="/anatomia">Aquí tienes los 16 capítulos y 48 componentes</Link>{" "}
        que sí deberían aparecer.
      </p>

      <h2>Casos típicos — qué elige cada perfil</h2>
      <p>
        Para situarte sin pedir cita, cuatro escenarios reales basados en
        propuestas firmadas el último año. Si te reconoces en alguno, sabes por
        dónde empezar la conversación.
      </p>

      <h3>Autónomo que arranca consultora o estudio solo</h3>
      <p>
        Acaba de registrar autónomo, factura sus primeros clientes, necesita
        sistema mínimo para operar con cara y ojos. No tiene presupuesto para
        3.500€ ni necesita 50 páginas. Lo que sí necesita: logo que aguante,
        papelería digital, aplicación web, algo que pueda entregar a proveedores
        sin improvisar. <strong>Rango razonable: 490€ — 1.200€.</strong>{" "}
        Encaja en tier Esencial productizado o freelance serio con scope cerrado.
      </p>

      <h3>PYME nueva con 3-10 empleados</h3>
      <p>
        Ya factura, ya tiene equipo, está en la fase de estandarizar para no
        seguir improvisando cada vez que un proveedor externo pregunta por un
        color o un tamaño. Necesita sistema completo con voz verbal, aplicaciones
        digitales, plantillas editables para que el equipo no tenga que preguntar.
        <strong> Rango razonable: 990€ — 2.500€.</strong> Encaja en tier
        Profesional productizado o freelance senior. Una agencia a 6.000€ aquí
        es overkill en la mayoría de los casos.
      </p>

      <h3>Marca con 5+ años que necesita rebrand</h3>
      <p>
        Tiene activos antiguos desordenados — tres versiones del logo
        circulando, paleta que se ha ido ensuciando, comunicación desalineada.
        Puede necesitar strategy light (no reposicionamiento total), refresh
        visual, sistema nuevo completo con migración documentada del pasado.{" "}
        <strong>Rango razonable: 1.990€ — 6.000€.</strong> El tier Premium
        productizado funciona bien; por encima de 4.000€ ya tiene más sentido
        una agencia con discovery corto.
      </p>

      <h3>Corporate o institucional (50+ empleados)</h3>
      <p>
        Hay múltiples stakeholders que aprobar, procesos de compra con legal y
        finanzas, timeline dependiente de ciclos presupuestarios. Aquí el modelo
        productizado no encaja: hacen falta discovery workshops, propuesta
        personalizada, presentaciones intermedias, PM dedicado.{" "}
        <strong>Rango razonable: 8.000€ — 18.000€ + IVA.</strong> Agencia
        tradicional o estudio mediano con equipo de cuenta.
      </p>

      <h2>Señales de alerta antes de firmar</h2>
      <p>
        Independientemente del proveedor que elijas, estos son los filtros que
        aplicamos nosotros mismos cuando recomendamos a un colega o evaluamos a
        un subcontratado:
      </p>
      <ul>
        <li>
          <strong>Cotización sin páginas entregadas específicas.</strong> &quot;Un
          manual completo&quot; puede ser 10 o 120 páginas. Pide el rango.
        </li>
        <li>
          <strong>Revisiones ilimitadas como argumento de venta.</strong>{" "}
          Suele significar que el proveedor cobra por hora y no quiere cerrar
          scope. Es fricción que pagas tú en tiempo y alineación.
        </li>
        <li>
          <strong>Plazos en semanas estimadas, no en días laborables.</strong>{" "}
          Un estudio que publica plazos concretos se compromete. Uno que habla
          en semanas se protege legítimamente de su propia carga paralela —
          sabe que puede escalar.
        </li>
        <li>
          <strong>Portfolio con mockups hipotéticos en lugar de entregables reales.</strong>{" "}
          Señal débil. Entregables firmados con nombre de cliente, páginas
          publicadas e información operativa son señal fuerte.
        </li>
        <li>
          <strong>Precio sin IVA desglosado</strong>. En B2C, exige IVA
          incluido. En B2B, exige la factura con IVA detallado antes de firmar
          para cuadrar con tu contabilidad.
        </li>
        <li>
          <strong>Falta de contrato por escrito</strong>. Un email bien redactado
          vale, un contrato firmado es mejor. Si no hay ninguno, hay problema.
        </li>
      </ul>

      <h2>Cómo elegir sin equivocarte</h2>
      <p>
        Tres filtros que aplicamos nosotros mismos cuando evaluamos un proveedor
        de cualquier servicio productizado, no solo manuales:
      </p>
      <ol>
        <li>
          <strong>¿El precio está publicado?</strong> Si no, prepárate para
          discovery prolongado. No es malo — pero debes saberlo antes de pedir
          cita. Los estudios productizados publican rangos cerrados; las
          agencias personalizan cada propuesta.
        </li>
        <li>
          <strong>¿Hay portfolio con casos firmados?</strong> Mockups hipotéticos
          son señal débil. Entregables reales con nombre de cliente y
          información operativa (páginas, plazo, tier) son señal fuerte. Si un
          estudio no puede mostrar trabajo publicado, pide references por email.
        </li>
        <li>
          <strong>¿Los plazos son días o &quot;una estimación aproximada&quot;?</strong>{" "}
          Un estudio que publica plazos laborables concretos se compromete a
          ellos. Uno que habla en semanas estimadas está protegiéndose
          legítimamente de su carga paralela.
        </li>
      </ol>
      <p>
        Si el proveedor pasa los tres filtros, probablemente estás en terreno
        seguro. Si no pasa ninguno, no necesariamente es mal proveedor — puede
        ser un gran freelance que trabaja así — pero asume que firmar con él
        implica discovery más largo, plazos más variables y factura final más
        dependiente del alcance real.
      </p>

      <h2>Por qué podemos cerrar el precio</h2>
      <p>
        Publicamos precio fijo IVA incluido porque hemos cerrado el scope antes
        de empezar. Los 48 componentes que entregamos están documentados
        capítulo a capítulo en <Link href="/anatomia">nuestra anatomía pública</Link>,
        las dos rondas de revisión están cerradas por contrato, y el plazo se
        cuenta en días laborables desde el brief firmado — no desde la primera
        conversación. Si el proyecto no encaja en ese molde (rebrand estratégico
        profundo, naming desde cero, corporate con 50+ empleados), te lo decimos
        antes de firmar y te recomendamos a alguien que sí encaje.
      </p>
      <p>
        Nosotros publicamos precio cerrado IVA incluido, plazos en días
        laborables y un manual propio de 58 páginas que puedes descargar en un
        minuto —{" "}
        <Link href="/#pedir-manual">pide el PDF aquí</Link>. Si al revisarlo
        ves que no encaja, dinos; tenemos colegas excelentes para cada perfil.
      </p>
    </div>
  );
}
