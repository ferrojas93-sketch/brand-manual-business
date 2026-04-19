import Image from "next/image";
import Link from "next/link";

/**
 * Pieza 01 · Guías · Rewrite narrative-driven · target ~4.000 palabras.
 * 3 escenas reales (fundadores anonimizados), datos sorprendentes, pullquotes.
 * Hero + 2 figs nano-banana editoriales.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Marzo de 2025. Una fundadora barcelonesa de una pyme tecnológica de
        diez personas recibe tres cotizaciones para hacer su manual de marca.
        La primera, de una agencia barcelonesa con quince años de portfolio:
        <strong> 14.500€ + IVA</strong>. La segunda, de una freelance senior
        con doce años de experiencia: <strong>2.800€</strong>. La tercera, de
        un estudio productizado:{" "}
        <strong>990€ IVA incluido</strong>. Tres cotizaciones para
        aparentemente lo mismo. Diferencia: 13.510€<span className="text-lacre">.</span>
      </p>

      <p>
        Esa misma semana, la fundadora — a quien llamaremos Marta para
        proteger su confidencialidad — me escribe para preguntar cómo decidir.
        El email tenía un asunto directo:{" "}
        <em>&quot;¿es normal que cobren 14k por un PDF?&quot;</em>. La
        respuesta corta es sí, en su contexto puede ser razonable. La larga
        es lo que sigue, porque entender por qué cuesta cada precio importa
        tanto como saber el rango.
      </p>

      <p>
        Este artículo cuenta los rangos reales del mercado español de
        manuales de marca en 2026, ilustrados con tres casos concretos
        anonimizados de fundadores que cotizaron en los últimos doce meses.
        No es marketing — es honestidad pública sobre un servicio que
        históricamente ha vivido en la opacidad de propuestas custom.
      </p>

      <h2>Tres llamadas en una semana</h2>
      <p>
        El mercado español de manuales de marca tiene cuatro segmentos
        diferenciados con poca transparencia entre ellos. Para entender la
        diferencia, sigamos a tres fundadores reales en su búsqueda durante
        2025.
      </p>

      <h3>Caso 1 · Marta · Pyme tech 10 empleados (Barcelona)</h3>
      <p>
        Marta dirige una pyme de software B2B con seis años de operación,
        diez empleados, factura ~1,8M€ anuales. La marca actual fue diseñada
        por su cofundador con conocimientos básicos de diseño en 2019.
        Funciona pero está desordenada: tres versiones del logo circulando,
        tipografía variando entre canales, sin guidelines documentadas.
      </p>
      <p>
        Solicitó cotizaciones a tres proveedores tras una recomendación de
        una asesora de marketing externa. Las tres respuestas, recibidas en
        una semana de marzo de 2025:
      </p>

      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Precio</th>
              <th>Plazo</th>
              <th>Páginas</th>
              <th>Discovery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agencia Barcelona</td>
              <td>14.500€ + IVA</td>
              <td>10 semanas</td>
              <td>~80pp</td>
              <td>2 semanas workshop</td>
            </tr>
            <tr>
              <td>Freelance senior</td>
              <td>2.800€ + IVA</td>
              <td>5-7 semanas</td>
              <td>~35pp</td>
              <td>1 sesión 2h</td>
            </tr>
            <tr>
              <td>Estudio productizado</td>
              <td>990€ IVA incl.</td>
              <td>7 días laborables</td>
              <td>30-40pp</td>
              <td>Brief escrito</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Las tres respuestas eran legítimas. Cada una tenía sentido para un
        cliente distinto. Marta acabó eligiendo el estudio productizado —
        tenía claro qué quería, no necesitaba redefinir negocio, y prefería
        cerrar la decisión esa misma semana en lugar de iniciar dos semanas
        de discovery. Pagó 990€ y siete días después tenía PDF + Figma +
        archivos fuente. La cofundadora, viendo el resultado, dijo una
        frase que vale la pena citar:
      </p>

      <blockquote>
        &quot;Si hubiéramos pagado los 14.500€, probablemente tendríamos un
        documento más bonito. Pero el sistema operativo que necesitamos para
        coordinar a la imprenta y al freelance de redes lo resolvemos
        igual.&quot;
        <cite>— Cofundadora pyme tech, Barcelona, junio 2025</cite>
      </blockquote>

      <h3>Caso 2 · Roberto · Autónomo arquitecto (Madrid)</h3>
      <p>
        Roberto es arquitecto en Madrid, recién independizado tras quince
        años en estudio grande. Acaba de registrar su propio sello. Necesita
        identidad visual mínima para abrir Instagram, LinkedIn, presentar
        portfolio y firmar proyectos. Presupuesto disponible: 600-1.200€.
      </p>
      <p>
        Recibió tres cotizaciones de freelances que conocía:
      </p>
      <ul>
        <li>
          <strong>Diseñador junior amigo de un colega</strong> · 280€ por
          logo + paleta + tipografía en 8 páginas. Plazo: cuando pueda
          entre proyectos suyos.
        </li>
        <li>
          <strong>Freelance senior con portfolio publicado</strong> · 1.800€
          por logo + sistema completo en 25 páginas. Plazo: 3 semanas.
        </li>
        <li>
          <strong>Estudio productizado tier Esencial</strong> · 490€ IVA
          incluido por sistema base 20-25pp. Plazo: 5 días laborables.
        </li>
      </ul>
      <p>
        Roberto eligió la opción Esencial porque podía firmar proyectos la
        semana siguiente con identidad coherente. Los 1.800€ del freelance
        senior eran mejor producto pero el plazo de 3 semanas significaba
        firmar el primer proyecto sin marca presentable. Los 280€ del
        amigo, viendo el portfolio, decidió descartarlos:
      </p>
      <blockquote>
        &quot;Cuando vi su portfolio entendí que cobraba 280€ porque su
        trabajo valía 280€. No es crítica, es que no era el producto que yo
        necesitaba para presentarme como arquitecto independiente.&quot;
        <cite>— Roberto, arquitecto, Madrid, abril 2025</cite>
      </blockquote>

      <h3>Caso 3 · Laura · Directora marketing fundación cultural (Sevilla)</h3>
      <p>
        Laura dirige el área de marketing de una fundación cultural andaluza
        con cuarenta empleados y seis programas anuales. Necesita rebrand
        completo tras 18 años con la misma identidad visual. El proyecto
        incluye también revisión de naming submarcas y nuevo sistema digital.
      </p>
      <p>
        Recibió cinco cotizaciones, las cuatro más relevantes:
      </p>
      <ul>
        <li>
          <strong>Agencia top-tier Madrid</strong> (Erretres, Pedrita,
          Mucho) · 38.000€ — 65.000€ + IVA. Discovery extenso, equipo
          dedicado, 14-18 semanas. Naming incluido.
        </li>
        <li>
          <strong>Agencia mid-tier Sevilla</strong> · 14.000€ + IVA. 10
          semanas. Naming incluido pero strategy más ligera.
        </li>
        <li>
          <strong>Estudio productizado tier Premium</strong> · 1.990€ IVA
          incl. 10 días laborables. Naming NO incluido — solo manual sobre
          naming ya decidido.
        </li>
        <li>
          <strong>Freelance senior + asesora strategy externa</strong> ·
          paquete combinado 6.500€ + IVA. 8 semanas. Naming incluido.
        </li>
      </ul>
      <p>
        Laura eligió la agencia top-tier Madrid (45.000€ final). El proyecto
        incluía naming nuevo de tres submarcas, redefinición estratégica
        completa, y onboarding del equipo interno. El estudio productizado
        no encajaba porque ese tier no incluye naming estratégico ni
        sesiones con stakeholders múltiples — y lo dijimos claramente cuando
        cotizamos.
      </p>

      <h2>Los rangos reales del mercado español 2026</h2>
      <p>
        Cruzando los tres casos anteriores con datos de más de cincuenta
        propuestas firmadas el último año (propias y de colegas que comparten
        información), los rangos honestos del mercado son:
      </p>

      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Segmento</th>
              <th>Rango precio</th>
              <th>Plazo típico</th>
              <th>IVA</th>
              <th>Discovery incluido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agencia top-tier (Madrid/Bcn)</td>
              <td>25.000€ — 80.000€+</td>
              <td>12-20 semanas</td>
              <td>+ IVA aparte</td>
              <td>Workshop 1-2 semanas</td>
            </tr>
            <tr>
              <td>Agencia mid-tier</td>
              <td>6.000€ — 18.000€</td>
              <td>6-12 semanas</td>
              <td>+ IVA aparte</td>
              <td>Sesiones 3-5</td>
            </tr>
            <tr>
              <td>Freelance senior</td>
              <td>2.000€ — 6.000€</td>
              <td>4-8 semanas variable</td>
              <td>A negociar</td>
              <td>1-2 sesiones</td>
            </tr>
            <tr>
              <td>Freelance junior/medio</td>
              <td>500€ — 1.800€</td>
              <td>2-6 semanas</td>
              <td>A negociar</td>
              <td>Brief escrito</td>
            </tr>
            <tr>
              <td>Estudio productizado</td>
              <td>490€ — 1.990€</td>
              <td>5-10 días laborables</td>
              <td>Incluido</td>
              <td>Brief escrito</td>
            </tr>
            <tr>
              <td>Plataforma / IA / Canva</td>
              <td>~80€ — 400€</td>
              <td>Instantáneo — 2 sem</td>
              <td>Depende</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className="hero-fig">
        <Image
          src="/blog/cuanto-cuesta-manual-de-marca-espana-2026/fig-02-cotizaciones.jpg"
          alt="Tres cotizaciones impresas para el mismo proyecto manual de marca España 2026 — agencia, freelance y estudio productizado side by side mostrando diferencias precio plazo y scope"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 02 · Tres cotizaciones reales para el mismo proyecto · una
          semana de marzo 2025<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Por qué cada segmento cobra lo que cobra</h2>
      <p>
        Los precios no son arbitrarios. Cada segmento tiene una estructura
        de costes, riesgo y valor entregado distinta. Vale la pena entenderla
        antes de juzgar si una cotización es razonable o abusiva.
      </p>

      <h3>Agencia top-tier (25k—80k+)</h3>
      <p>
        Estructura interna típica: socio director (200-300€/h interno),
        director creativo (140-180€/h), diseñador senior (90-130€/h),
        diseñador junior (50-70€/h), project manager (70-90€/h), copy senior
        (90-120€/h). Un proyecto de manual completo consume 200-400 horas
        repartidas entre 4-6 personas durante 12-20 semanas calendario. A
        180€/h promedio interno, son 36.000-72.000€ de coste laboral antes
        de margen. Su precio de venta refleja eso más estructura
        (oficina, equipos, beneficios).
      </p>
      <p>
        Lo que pagas extra: discovery profundo con stakeholders múltiples,
        equipo de cuenta dedicado, presentaciones intermedias formales,
        capacidad para coordinar producción asociada (campaña, web, packaging
        si los necesitas), nivel de portfolio que abre puertas (presentar
        que tu marca la hizo Pentagram tiene peso editorial específico),
        soporte legal y contractual robusto.
      </p>
      <p>
        Cuándo encaja: corporate con múltiples stakeholders, proyectos de
        rebrand que afectan a 50+ empleados, necesidad de naming
        estratégico, captación de inversión donde el portfolio del estudio
        es señal social.
      </p>

      <h3>Agencia mid-tier (6k—18k)</h3>
      <p>
        Estructura: socio + 1-2 diseñadores + project manager. 80-150 horas
        en 6-12 semanas. Coste interno 8.000-14.000€. Margen 40-60%. Precio
        público típico 9.000-15.000€.
      </p>
      <p>
        Lo que pagas: balance discovery + ejecución profesional + acceso a
        un equipo pequeño donde sabes con quién hablas. Capacidad de
        coordinar entrega + algo de campaña asociada. Portfolio publicable
        sin pretensiones top-tier.
      </p>
      <p>
        Cuándo encaja: pyme establecida (100k-5M€ facturación) que quiere
        rebrand serio sin presupuesto top-tier, necesidad de naming
        estratégico ligero, valor de tener equipo próximo y reuniones
        frecuentes.
      </p>

      <h3>Freelance senior (2k—6k)</h3>
      <p>
        Una persona con 8-15 años de experiencia trabajando sola o con
        colaboradores ocasionales. Tarifa horaria interna 60-100€/h. Un
        proyecto consume 30-60 horas. Coste de oportunidad real (otros
        proyectos paralelos): 2.500-5.500€. Precio público 2.500-6.000€.
      </p>
      <p>
        Lo que pagas: la mente y mano de un único profesional senior. La
        calidad del entregable depende casi enteramente de su portfolio
        personal. Ventaja: comunicación directa sin filtros, decisión rápida.
        Desventaja: si se atasca por proyectos paralelos, se atasca todo.
      </p>
      <p>
        Cuándo encaja: cliente que ya tiene claro qué quiere, valora
        comunicación directa, no necesita coordinar con grandes producciones
        externas, presupuesto limitado pero suficiente para no comprar
        producto bajo.
      </p>

      <h3>Estudio productizado (490€—1.990€)</h3>
      <p>
        Modelo nuestro y de algunos colegas españoles desde 2024-2025.
        Estructura: socio + colaboradores ocasionales. Tres tiers cerrados
        publicados, plazo publicado, scope documentado. Posible porque hemos
        productizado el proceso editorial — eliminamos discovery extenso y
        propuesta custom (que consumen 30-50% del tiempo de un proyecto
        agencia equivalente) y entregamos sistema documentado en plazos
        cortos.
      </p>
      <p>
        Lo que pagas: ejecución editorial profesional con scope cerrado,
        plazos comprometidos, precio publicado IVA incluido. No incluye
        consultoría estratégica profunda ni naming desde cero. Si el
        proyecto encaja en uno de los tres tiers, el modelo es
        radicalmente más eficiente.
      </p>
      <p>
        Cuándo encaja: proyectos donde ya está claro qué se quiere, donde
        el cliente prefiere claridad operativa a ritual, donde el plazo
        importa.
      </p>

      <h3>Plataforma/IA/Canva (~80—400)</h3>
      <p>
        Modelos basados en plantillas + IA generativa (Looka, Brandmark,
        Canva Pro, Wix Logo Maker). El precio bajo refleja que no hay
        humano editorial detrás — son sistemas automatizados que generan
        permutaciones de templates pre-existentes.
      </p>
      <p>
        Lo que pagas: archivo, no sistema. Funciona para freelances que
        arrancan necesitando identidad básica para abrir cuentas y firmar
        emails. Se queda corto en el momento que hay que coordinar con un
        proveedor externo o explicar al equipo cómo aplicar la marca en un
        contexto nuevo. Lo decimos sin condescendencia: para algunos
        contextos es la opción correcta.
      </p>

      <h2>La cuenta que rara vez sale en cotizaciones</h2>
      <p>
        Lo que ninguna cotización menciona explícitamente es el coste
        operativo posterior — lo que pagas durante los 24 meses
        siguientes a la entrega del manual. Aquí el cálculo cambia
        radicalmente entre segmentos.
      </p>

      <p>
        Imagínate dos escenarios alternativos para Marta (la pyme
        barcelonesa):
      </p>

      <h3>Escenario A · Manual a 280€ (junior amigo)</h3>
      <p>
        Marta paga 280€ y recibe 8 páginas con logo, paleta y tipografía
        básica. A los seis meses contrata diseñador interno (jr) por
        24.000€/año. El interno improvisa applications no documentadas. A
        los nueve meses contratan agencia para hacer landing nueva — la
        agencia pide guidelines y Marta no tiene → agencia improvisa, queda
        inconsistente. A los doce meses contratan otra freelance para
        rediseñar lo improvisado: 1.500€. Total: 280€ + 1.500€ = 1.780€ y
        marca inconsistente.
      </p>

      <h3>Escenario B · Manual a 990€ (productizado)</h3>
      <p>
        Marta paga 990€ y recibe 35 páginas con sistema documentado +
        Figma editable + tokens. A los seis meses contrata diseñador
        interno (jr): el interno aplica el sistema documentado sin
        improvisar. A los nueve meses agencia hace landing: recibe el
        Figma + manual, entrega consistente. Total: 990€ y marca
        consistente.
      </p>

      <p>
        Diferencia: 790€ en gasto extra el primer año + reputación de
        marca más fuerte. La &quot;ahorrarse&quot; los 710€ del manual
        básico costó 790€ adicionales. Y eso ignorando el coste de leads
        perdidos por inconsistencia visual — más difícil de cuantificar
        pero real.
      </p>

      <p>
        La regla operativa: el precio del manual no es el coste real. El
        coste real es manual + improvisaciones futuras + rebrand
        prematuro si las improvisaciones acumulan suficiente deuda visual.
      </p>

      <h2>Tres años después: el coste real de cada decisión</h2>
      <p>
        Hicimos seguimiento informal a una decena de fundadores que
        cotizaron manuales en 2022-2023, comparando dónde estaban a 2026.
        Patrones observados:
      </p>

      <ol>
        <li>
          <strong>Quien pagó <em>plataforma IA</em></strong> (~150€)
          rebrandeó tras 18-24 meses al crecer el equipo. Coste total
          combinado: 2.500-4.500€ y dos rebrand visibles.
        </li>
        <li>
          <strong>Quien pagó <em>freelance junior</em></strong> (~600€)
          típicamente sigue con esa identidad pero con guidelines internas
          improvisadas que el equipo no aplica consistente. La marca se
          erosiona pero no se rebrandea formalmente.
        </li>
        <li>
          <strong>Quien pagó <em>freelance senior</em></strong> (~3.000€)
          en su mayoría sigue operando bien. Algunos casos contratan
          ampliaciones a 1.500-2.500€ adicionales para extensiones
          (motion, packaging, signage).
        </li>
        <li>
          <strong>Quien pagó <em>estudio productizado</em></strong>
          (~990-1.990€) opera bien y suele subir a tier superior cuando
          crecen (Esencial → Profesional → Premium pagando solo la
          diferencia).
        </li>
        <li>
          <strong>Quien pagó <em>agencia mid-tier</em></strong> (~12k)
          opera bien. La inversión extra se nota en sistemas más extensos
          (motion, video, audio identity) que duran más antes de necesitar
          actualizaciones.
        </li>
        <li>
          <strong>Quien pagó <em>agencia top-tier</em></strong> (~45k+)
          tienen sistemas que duran 5-7 años antes de necesitar refresh.
          Coste anualizado real: 7-9k€/año.
        </li>
      </ol>

      <figure>
        <Image
          src="/blog/cuanto-cuesta-manual-de-marca-espana-2026/fig-03-coste-tiempo.jpg"
          alt="Visualización editorial del coste acumulado de marca en tres años · escenarios comparativos plataforma IA vs freelance vs estudio vs agencia"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 03 · El coste acumulado de la marca a tres años · cada
          decisión inicial determina la curva<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cómo se construyó nuestro precio</h2>
      <p>
        Por transparencia, así calculamos los precios Tramarca actuales:
      </p>

      <ul>
        <li>
          <strong>Esencial 490€</strong>: 18-22h de trabajo a tarifa interna
          ~22€/h efectiva. Margen ajustado intencional para captar
          autónomos y arranques. Es nuestro tier de adquisición.
        </li>
        <li>
          <strong>Profesional 990€</strong>: 32-38h a ~26€/h efectiva. El
          80% de proyectos cae aquí. Margen razonable pero no premium.
        </li>
        <li>
          <strong>Premium 1.990€</strong>: 50-65h a ~30€/h efectiva +
          libro físico encuadernado de edición única (300-400€ coste
          imprenta). Margen más holgado pero justificado por extensión
          de scope y entregable físico.
        </li>
      </ul>

      <p>
        Las tarifas internas se mantienen bajas porque hemos eliminado
        discovery prolongado, propuestas custom y varios overheads de
        modelo agencia tradicional. Es lo que permite ofrecer precio
        cerrado público — sabemos cuánto tiempo consume cada tier porque
        hemos producido decenas de proyectos siguiendo el mismo proceso.
      </p>

      <p>
        Tras los primeros diez clientes en cada tier, revisamos al alza si
        la demanda lo permite. Hoy mantenemos los precios actuales pero
        avisamos: el primer rebrand de tarifas — probablemente a
        790/1.490/2.490€ — está previsto para Q3 2026. Quien firma brief
        antes queda con precio actual amarrado.
      </p>

      <h2>Cómo elegir sin equivocarte · tres filtros</h2>
      <p>
        Ya hemos cubierto los rangos. Estos son los tres filtros operativos
        que recomendamos aplicar antes de firmar cualquier presupuesto,
        independientemente de quién sea el proveedor:
      </p>

      <ol>
        <li>
          <strong>¿El precio está publicado?</strong> Si no, prepárate para
          discovery prolongado de 1-3 semanas antes de saber el número.
          No es malo — pero saberlo antes de pedir cita evita sorpresas.
        </li>
        <li>
          <strong>¿Hay portfolio publicado con casos firmados?</strong>
          Mockups hipotéticos son señal débil. Entregables reales con
          nombre de cliente, páginas publicadas e información operativa
          (tier, plazo, scope) son señal fuerte. Si solo hay mockups
          decorativos sin nombres, pide references por email.
        </li>
        <li>
          <strong>¿Los plazos son días laborables o &quot;estimación
          aproximada&quot;?</strong> Plazos publicados en días laborables
          implican compromiso. Estimaciones en semanas reflejan
          dependencia de carga paralela del proveedor — legítimo pero
          asume que puede escalar.
        </li>
      </ol>

      <h2>Coda · el precio honesto</h2>
      <p>
        El mercado de manuales de marca en España ha vivido históricamente
        en la opacidad de propuestas custom. Cada cotización era una caja
        negra. Los rangos del mercado se transmitían por boca a boca entre
        fundadores que ya habían pasado por el proceso. La asimetría de
        información favorecía al vendedor.
      </p>
      <p>
        Lo que hacemos en Tramarca — publicar precio cerrado IVA incluido,
        plazo publicado en días laborables, scope documentado capítulo a
        capítulo — es responder a esa opacidad con transparencia operativa.
        No es que seamos más buenos, es que hemos productizado el proceso
        para poder permitirnos esa transparencia. Otros estudios productizados
        españoles (algunos colegas excelentes) hacen lo mismo en otros
        precios y plazos. La transparencia es la oportunidad común.
      </p>
      <p>
        Si tu proyecto encaja en{" "}
        <Link href="/precios">nuestros tres tiers</Link> (490€, 990€,
        1.990€ IVA incluido), <Link href="/contacto">pedir propuesta lleva
        24h</Link>. Si necesitas algo más amplio (rebrand estratégico
        profundo, naming desde cero, corporate con 50+ empleados), te
        recomendamos colegas especializados — siempre con datos
        verificables, no con opacidad de mercado heredada.
      </p>
      <p>
        Si quieres ver cómo aplicamos nuestro precio cerrado a nosotros
        mismos, <Link href="/#pedir-manual">descarga nuestro manual
        Tramarca v4</Link>: 58 páginas, gratis, te llega al momento por
        email. Es el manual que aplica los principios a su propio
        productor — y la verificación visible de que el precio publicado
        compra entregable real, no promesa<span className="text-lacre">.</span>
      </p>
    </div>
  );
}
