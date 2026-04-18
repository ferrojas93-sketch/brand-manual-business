import Link from "next/link";

/**
 * Pieza 04 · Proceso · target ~2.800 palabras · Schema HowTo 8 steps.
 * Cierra task #12 (5 piezas pilar). P0 informational vol 720-1100.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Hacer un manual de marca profesional toma <strong>entre 5 y 40 días
        laborables</strong> y se estructura en ocho pasos cerrados: brief,
        auditoría, fundamentos, sistema visual, voz, aplicaciones, guidelines
        y empaquetado. Cada paso tiene entregable documentado y criterio de
        aprobación. No es proceso creativo abierto — es ingeniería editorial
        con fases operativas<span className="text-lacre">.</span>
      </p>

      <p>
        Esta guía describe el proceso real tal como lo ejecutamos en Tramarca
        para cualquiera de nuestros tres tiers (490€, 990€, 1.990€). Si
        prefieres encargarlo cerrado con precio publicado,{" "}
        <Link href="/precios">ver tiers</Link>. Si quieres hacerlo por tu
        cuenta o con un equipo interno, esta guía funciona como playbook
        operativo: úsala literalmente.
      </p>

      <h2>Paso 1 · Brief estructurado (Día 0)</h2>
      <p>
        <strong>Input</strong>: cuestionario corto completado por el cliente.
        <br />
        <strong>Output</strong>: documento de 2-4 páginas con alcance y
        dirección aprobada.
        <br />
        <strong>Tiempo</strong>: 30-45 minutos de cliente + 2 horas de estudio.
      </p>
      <p>
        Antes de cualquier diseño, se fija por escrito qué hace la empresa, a
        quién vende, qué no funciona de la identidad actual y qué debe
        resolver el manual. No es brainstorm creativo — es recolección de
        datos operativos. Las preguntas típicas que cubrimos:
      </p>
      <ul>
        <li>¿Qué hace exactamente tu empresa? (una frase, sin jergón)</li>
        <li>¿Quién es tu cliente tipo? (perfil operativo, no persona demográfica)</li>
        <li>¿Qué activos visuales y verbales existen ya? (logo, paleta, docs previos)</li>
        <li>¿Qué proveedores externos producen con tu marca? (imprentas, freelances)</li>
        <li>¿Qué falla hoy por falta de sistema documentado?</li>
        <li>¿Qué referencias admiras? (3-5 marcas, con una línea por qué)</li>
      </ul>
      <p>
        El brief se firma antes de pasar al paso 2. Sin brief firmado, no se
        empieza — esta es una regla dura. La alternativa es ingeniería
        especulativa que acaba en iteración infinita.
      </p>

      <h2>Paso 2 · Auditoría de activos existentes (Día 1)</h2>
      <p>
        <strong>Input</strong>: acceso a material actual (web, redes,
        papelería, presentaciones).
        <br />
        <strong>Output</strong>: inventario con clasificación &quot;mantener /
        evolucionar / eliminar&quot;.
        <br />
        <strong>Tiempo</strong>: medio día de estudio.
      </p>
      <p>
        Todo proyecto, excepto el de una marca que arranca desde cero, tiene
        activos previos. Auditar significa revisarlos con honestidad: qué hay
        que tenga equity (nombre, color reconocible, tagline), qué hay que
        redisene (logo con problemas técnicos, tipografía desalineada), qué
        hay que eliminar (variantes rotas, capas de cambios acumulados).
      </p>
      <p>
        La auditoría a menudo revela tensiones: el cliente cree que su color
        principal es verde cuando en redes aparece azul, el logo oficial
        vive en un PDF antiguo con tres versiones distintas circulando, la
        tipografía varía entre canales. Documentar esto es el primer valor
        entregado — solo con ver el diagnóstico escrito, el cliente entiende
        por qué necesita manual.
      </p>

      <h2>Paso 3 · Fundamentos (Días 2-3)</h2>
      <p>
        <strong>Input</strong>: brief + auditoría.
        <br />
        <strong>Output</strong>: capítulos I-III del manual (Provocación,
        Personas, Fundamentos) en borrador.
        <br />
        <strong>Tiempo</strong>: dos jornadas de trabajo.
      </p>
      <p>
        Aquí se define la parte no visual: propósito, visión, valores,
        personalidad. En tiers Esencial y Profesional esto se resuelve en
        1-2 páginas conciso. En tier Premium se extiende a 4-5 páginas con
        arquetipo, posicionamiento y propuesta de valor documentada. La regla
        operativa: cada concepto debe poder refutarse con un ejemplo. &quot;Honesto&quot;
        es valor vago; &quot;publicamos precios con IVA incluido&quot; es valor
        verificable.
      </p>
      <p>
        Ver nuestros{" "}
        <Link href="/anatomia#fundamentos">16 capítulos documentados en /anatomia</Link>{" "}
        para la estructura canónica completa.
      </p>

      <h2>Paso 4 · Sistema visual base (Días 3-5)</h2>
      <p>
        <strong>Input</strong>: brief + auditoría + fundamentos.
        <br />
        <strong>Output</strong>: capítulos IV-VII (logo, tipografía, color,
        iconografía) con todas sus variantes documentadas.
        <br />
        <strong>Tiempo</strong>: 2-3 jornadas.
      </p>
      <p>
        El corazón visual del manual. Se resuelve por este orden operativo:
      </p>
      <ol>
        <li>
          <strong>Sistema de logo</strong>: marca principal, variantes
          horizontal/vertical/iso/monograma, zona de exclusión, tamaños
          mínimos impresos (mm) y digitales (px), usos correctos vs
          incorrectos con ejemplos visuales explícitos.
        </li>
        <li>
          <strong>Paleta cromática</strong>: primarios, secundarios, acento,
          regla de proporción (60/30/10 es canon), valores técnicos
          completos (Pantone C/U, CMYK, RGB, HEX, RAL si aplica).
        </li>
        <li>
          <strong>Sistema tipográfico</strong>: familia display, familia
          texto, jerarquía H1-H6 con tamaños y leading documentados, reglas
          de tracking, caps vs mayúscula, cursivas permitidas o prohibidas.
        </li>
        <li>
          <strong>Iconografía</strong> (Profesional+): sistema de trazo,
          grosor canónico, biblioteca base de 12-24 iconos. Solo si el caso
          lo requiere.
        </li>
      </ol>
      <p>
        Cada decisión va acompañada de plantilla técnica: no &quot;el logo
        mide 30mm&quot;, sino &quot;el ancho total del logotipo es 30mm con
        altura de la X equivalente a 1/3 del ancho&quot;.
      </p>

      <h2>Paso 5 · Voz y tono verbal (Día 5)</h2>
      <p>
        <strong>Input</strong>: fundamentos + ejemplos de comunicación actual.
        <br />
        <strong>Output</strong>: capítulo IX (Voz y tono) con registro por canal.
        <br />
        <strong>Tiempo</strong>: media jornada a 1 día.
      </p>
      <p>
        Sistema visual sin voz documentada es medio sistema. Se resuelve
        fijando principios verbales (tres o cuatro adjetivos operativos),
        registro por canal (landing vs email vs social), y glosario de
        términos aprobados/prohibidos. Ejemplo canónico del registro Tramarca:
      </p>
      <ul>
        <li><strong>Landing</strong>: provocador, directo, afirmativo</li>
        <li><strong>Propuesta comercial</strong>: riguroso, datos, rangos</li>
        <li><strong>Email a cliente</strong>: cercano, tuteo, firmeza</li>
        <li><strong>Manual de marca</strong>: declarativo, cada regla un outcome</li>
        <li><strong>LinkedIn</strong>: afilado, ideas cortas, sin hashtag</li>
      </ul>

      <h2>Paso 6 · Aplicaciones reales (Días 5-7)</h2>
      <p>
        <strong>Input</strong>: sistema visual base + voz documentada.
        <br />
        <strong>Output</strong>: capítulo X (Aplicaciones) con mockups realistas.
        <br />
        <strong>Tiempo</strong>: 1-2 jornadas según tier.
      </p>
      <p>
        Si el manual no muestra la marca en aplicaciones reales, es decoración.
        Se documentan al menos tres categorías:
      </p>
      <ul>
        <li>
          <strong>Papelería</strong>: tarjeta de visita, carta con
          letterhead, sobre, factura, firma de email HTML.
        </li>
        <li>
          <strong>Digital</strong>: web landing, presentación base,
          avatares de redes, firma email, plantilla newsletter.
        </li>
        <li>
          <strong>Merchandising</strong> (Profesional+): tote, pin, etiqueta,
          sello, packaging básico si el producto es físico.
        </li>
      </ul>
      <p>
        Cada aplicación va en página propia con plantilla técnica detrás
        (dimensiones, bleed para imprenta, márgenes exactos). No son mockups
        decorativos — son instrucciones ejecutables.
      </p>

      <h2>Paso 7 · Guidelines y governance (Día 7-8)</h2>
      <p>
        <strong>Input</strong>: sistema completo.
        <br />
        <strong>Output</strong>: capítulo XII (Governance) con checklist de
        uso y flujo de aprobación.
        <br />
        <strong>Tiempo</strong>: media jornada.
      </p>
      <p>
        Aquí se fija cómo se USA el manual. Se resuelve con tres piezas:
      </p>
      <ol>
        <li>
          <strong>Checklist de uso</strong>: una página imprimible con 10-15
          puntos que verificar antes de publicar cualquier pieza. Se imprime,
          se pega en la pared del equipo.
        </li>
        <li>
          <strong>Flujo de aprobación</strong>: quién firma qué. En PYMEs
          típicamente hay 2-3 niveles: autor → revisor marca → aprobación
          ejecutiva. Documentar evita cuellos de botella y microdecisiones
          que llegan al fundador.
        </li>
        <li>
          <strong>Plan de versionado</strong>: cómo se actualiza el manual.
          Log de cambios público, numeración clara, mecanismo para reportar
          casos de uso no cubiertos.
        </li>
      </ol>

      <h2>Paso 8 · Empaquetado y entrega (Día 8-10)</h2>
      <p>
        <strong>Input</strong>: manual completo aprobado en rondas previas.
        <br />
        <strong>Output</strong>: PDF final + archivos fuente + Figma editable.
        <br />
        <strong>Tiempo</strong>: 1 jornada + tiempo de imprenta si Premium.
      </p>
      <p>
        El paso más infravalorado. Un manual profesional se entrega como{" "}
        <strong>paquete operativo completo</strong>, no como PDF aislado.
        Contenido canónico del entregable:
      </p>
      <ul>
        <li>PDF A4 landscape del manual completo con bookmarks funcionales</li>
        <li>Archivos fuente del logo en todas las variantes: SVG vectorial + PNG @1x/@2x/@3x + PDF + EPS si aplica</li>
        <li>Figma editable con componentes del sistema</li>
        <li>Tokens CSS/JSON de color y tipografía para equipos de producto</li>
        <li>Plantillas de papelería editables (Adobe + Canva)</li>
        <li>Guía de onboarding del equipo (1-2 pp resumen ejecutivo)</li>
        <li>En tier Premium: copia física del manual encuadernada como libro de edición única, enviada a oficina del cliente</li>
      </ul>
      <p>
        Todo el paquete entregado en Google Drive o Dropbox con estructura
        de carpetas clara. Nombres de archivo consistentes. Versión
        numerada (v1.0 inicial, v1.1 tras primera actualización).
      </p>

      <h2>Tiempos totales según contexto</h2>
      <p>
        El cálculo honesto según tier y modelo de producción:
      </p>
      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Días trabajo</th>
              <th>Plazo calendario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tramarca Esencial</td>
              <td>3-4 días trabajo efectivo</td>
              <td>5 días laborables desde brief</td>
            </tr>
            <tr>
              <td>Tramarca Profesional</td>
              <td>5-6 días trabajo efectivo</td>
              <td>7 días laborables desde brief</td>
            </tr>
            <tr>
              <td>Tramarca Premium</td>
              <td>7-8 días trabajo efectivo</td>
              <td>10 días laborables desde brief</td>
            </tr>
            <tr>
              <td>Freelance senior</td>
              <td>6-10 días trabajo</td>
              <td>3-6 semanas (carga paralela)</td>
            </tr>
            <tr>
              <td>Agencia tradicional</td>
              <td>15-25 días trabajo total</td>
              <td>6-12 semanas (incluye discovery)</td>
            </tr>
            <tr>
              <td>DIY con equipo interno</td>
              <td>20-40 días trabajo fragmentado</td>
              <td>2-4 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Errores frecuentes que alargan el proceso</h2>
      <p>
        Tres patrones que observamos constantemente en proyectos que se
        atascan más de lo esperado:
      </p>
      <ol>
        <li>
          <strong>Brief incompleto firmado a la ligera</strong>. Si el brief
          no especifica audiencia operativa, proveedores externos involucrados
          y casos de uso críticos, el scope se expande durante la producción.
          Invertir 2h extra en brief bien hecho ahorra 2 semanas después.
        </li>
        <li>
          <strong>Revisiones sin criterio estructurado</strong>. Ronda de
          revisión que llega como &quot;no me convence, prueba otra cosa&quot;
          sin referencias ni dirección no es revisión — es parálisis. Pedir
          siempre feedback estructurado: qué componente concreto, por qué no
          funciona, qué referencia sugiere dirección alternativa.
        </li>
        <li>
          <strong>Scope creep silencioso</strong>. El cliente pide
          &quot;una cosita más&quot; cada semana. Sin contrato con scope
          cerrado y extras cotizados aparte, el proyecto se vuelve deuda
          técnica. Tramarca evita esto publicando tiers con entregables
          documentados — todo lo que no esté en la lista se presupuesta
          aparte con transparencia.
        </li>
      </ol>

      <h2>¿Hacerlo tú o encargarlo?</h2>
      <p>
        El playbook funciona para ambas rutas. Hacerlo internamente tiene
        sentido cuando hay equipo de diseño senior que puede dedicar 4-8
        semanas exclusivas al proyecto sin abandonar otras responsabilidades.
        Encargarlo tiene sentido cuando no hay ese equipo disponible y
        necesitas el manual operativo en menos tiempo.
      </p>
      <p>
        En Tramarca cerramos precio público (<Link href="/precios">490€ / 990€ / 1.990€ IVA incluido</Link>)
        y plazos publicados de 5/7/10 días laborables porque hemos
        productizado cada paso del proceso descrito arriba. Los scope cerrados
        y la ejecución sin discovery prolongado son lo que permite
        comprometer plazos fijos. Si tu proyecto encaja en nuestros tres
        tiers, <Link href="/contacto">pedir propuesta lleva 24h</Link>. Si
        necesitas algo más amplio (rebrand estratégico profundo, naming desde
        cero, corporate con 50+ empleados), te recomendamos colegas
        especializados.
      </p>
      <p>
        Si prefieres ver cómo queda un manual siguiendo este playbook exacto,
        <Link href="/#pedir-manual"> descarga nuestro manual Tramarca v4 en PDF</Link> —
        58 páginas aplicando los 8 pasos a nosotros mismos.
      </p>
    </div>
  );
}
