import Image from "next/image";
import Link from "next/link";

/**
 * Pieza 04 · Proceso · Rewrite narrative · target ~3.500 palabras.
 * Sigue caso real de fundadora desde brief hasta entrega + 3 figs nano-banana.
 */
export default function PostBody() {
  return (
    <div className="prose-editorial">
      <p className="lede">
        Lunes 14 de abril, 9:32 am. Una fundadora de un estudio de
        arquitectura nuevo en Valencia firma un brief de cuatro páginas en
        Google Docs. Plazo comprometido: viernes 18 a las 18:00. Tipo:
        manual de marca tier Profesional. Lo que sigue son ocho pasos
        editoriales que se ejecutaron entre ese lunes y el viernes,
        contados con la precisión cronológica de un proceso que ya hemos
        producido decenas de veces<span className="text-lacre">.</span>
      </p>

      <p>
        Hacer un manual de marca profesional toma{" "}
        <strong>entre 5 y 40 días laborables</strong> dependiendo del
        modelo de proveedor — desde 5 días en estudios productizados
        hasta 8-12 semanas en agencias tradicionales con discovery
        extenso. Pero el proceso editorial subyacente es el mismo: ocho
        pasos cerrados con entregable documentado y criterio de aprobación
        en cada uno.
      </p>

      <p>
        Esta pieza describe el proceso real tal como lo ejecutamos en
        Tramarca, ilustrado con un caso anonimizado de un proyecto
        Profesional reciente. Si prefieres encargarlo cerrado con precio
        publicado,{" "}
        <Link href="/precios">ver tiers</Link>. Si quieres hacerlo por tu
        cuenta o con un equipo interno, esta guía funciona como playbook
        operativo: úsala literalmente.
      </p>

      <h2>Caso · Estudio arquitectura Valencia, abril 2026</h2>
      <p>
        La fundadora — a quien llamamos Núria para anonimizar — tiene 38
        años, quince años en estudios grandes, acaba de independizarse
        con dos colaboradoras junior. Marca aún sin definir. Necesita
        identidad visual + sistema documentado para abrir oficina nueva
        en Valencia, presentar al primer cliente importante (un
        ayuntamiento de la provincia) y firmar contratos de
        colaboración con dos arquitectos freelance externos en
        proyectos puntuales.
      </p>
      <p>
        Presupuesto disponible: 990€ (tier Profesional). Plazo
        comprometido: 7 días laborables desde brief firmado. Brief
        firmado lunes 14 a las 9:32 am. Entrega comprometida: viernes
        18 (no — 7 días laborables → miércoles 23 abril a las 18:00).
      </p>

      <h2>Paso 1 · Brief estructurado · Día 0</h2>
      <p>
        <strong>Input</strong>: cuestionario online de 23 preguntas
        completado por la fundadora.
        <br />
        <strong>Output</strong>: documento brief de 2-4 páginas con
        alcance y dirección aprobada.
        <br />
        <strong>Tiempo Núria</strong>: 38 minutos rellenando.
        <strong> Tiempo Tramarca</strong>: 1h 40min revisando + 25 min
        elaborando notas de respuesta.
      </p>
      <p>
        El cuestionario de Tramarca pide datos operativos, no creativos.
        Las preguntas que Núria respondió incluyeron:
      </p>
      <ul>
        <li>
          ¿Qué hace exactamente tu empresa? (una frase de máximo 25
          palabras, sin jergón sectorial)
        </li>
        <li>
          ¿Quién es tu cliente tipo? (perfil operativo concreto, no
          persona demográfica genérica)
        </li>
        <li>
          ¿Qué activos visuales y verbales existen ya? Logo previo,
          paleta, documentos antiguos
        </li>
        <li>
          ¿Qué proveedores externos producen con tu marca o lo harán en
          los próximos seis meses?
        </li>
        <li>
          ¿Qué falla hoy por falta de sistema documentado?
        </li>
        <li>
          ¿Qué referencias admiras? (3-5 marcas con una línea por qué)
        </li>
      </ul>
      <p>
        Núria contestó sus referencias: AOC Studio (Madrid), David
        Chipperfield Architects, OMA Rotterdam. Estilo
        contemporáneo-editorial, sobrio, sistemático. Los proveedores
        externos: una imprenta valenciana para papelería, dos
        arquitectos freelance que firmarían planos con su marca, una
        diseñadora web que prepararía landing en septiembre.
      </p>
      <p>
        El brief se firmó esa mañana lunes a las 12:14. Sin firma, no
        empezamos. Es regla dura. La alternativa es ingeniería
        especulativa que acaba en iteración infinita.
      </p>

      <h2>Paso 2 · Auditoría de activos existentes · Día 1 mañana</h2>
      <p>
        <strong>Input</strong>: acceso a material actual (web, redes,
        papelería).
        <br />
        <strong>Output</strong>: inventario con clasificación &quot;mantener / evolucionar / eliminar&quot;.
        <br />
        <strong>Tiempo</strong>: 2h del estudio.
      </p>
      <p>
        En el caso de Núria había poco que auditar — la marca era nueva.
        Lo único existente: un logo provisional que ella misma había
        dibujado en Illustrator en marzo, una paleta de tres tonos
        grises que aplicaba en presentaciones, y una tipografía
        (Söhne) que usaba en sus emails de freelance previos.
      </p>
      <p>
        El veredicto de auditoría: el logo provisional no servía
        (faltaba estructura geométrica, era reconocible solo por ella),
        la paleta de grises servía como punto de partida (mantener +
        evolucionar añadiendo acento), Söhne como tipografía era
        excelente decisión técnica (mantener, justificar formalmente
        en el manual).
      </p>
      <p>
        En proyectos sin marca previa, este paso es corto. En rebrand
        de marcas establecidas, puede consumir 6-10 horas e involucra
        revisar canales múltiples (web, redes, papelería antigua,
        merchandising, presentaciones, signage si aplica) para
        documentar inconsistencias actuales.
      </p>

      <h2>Paso 3 · Fundamentos · Día 1 tarde + Día 2 mañana</h2>
      <p>
        <strong>Input</strong>: brief + auditoría.
        <br />
        <strong>Output</strong>: capítulos I-III del manual (Provocación,
        Personas, Fundamentos) en borrador.
        <br />
        <strong>Tiempo</strong>: 1.5 jornadas.
      </p>
      <p>
        Aquí se define la parte no visual: propósito, visión, valores,
        personalidad. En tier Profesional esto se resuelve en 2-3
        páginas conciso. La regla operativa: cada concepto debe poder
        refutarse con un ejemplo. &quot;Honesto&quot; es valor vago;
        &quot;publicamos precio cerrado IVA incluido&quot; es valor
        verificable.
      </p>
      <p>
        Para Núria estructuramos:
      </p>
      <ul>
        <li>
          <strong>Propósito</strong>: &quot;Diseñar arquitectura
          contemporánea contenida que dura sin gritar&quot;
        </li>
        <li>
          <strong>Personalidad operativa</strong>: tres adjetivos —
          sobrio, técnico, sistemático
        </li>
        <li>
          <strong>Anti-personalidad</strong>: tres adjetivos a evitar —
          espectacular, decorativo, improvisado
        </li>
        <li>
          <strong>Audiencia primaria</strong>: ayuntamientos provinciales
          + promotores institucionales (no privados premium)
        </li>
      </ul>
      <p>
        Estos cuatro elementos atravesaron todas las decisiones
        siguientes — la elección tipográfica, paleta, jerarquía visual,
        tono verbal del manual mismo.
      </p>

      <figure className="hero-fig">
        <Image
          src="/blog/como-hacer-manual-de-marca-paso-a-paso/fig-02-brief.jpg"
          alt="Brief estructurado de manual de marca firmado en mesa de estudio editorial — cuestionario impreso con anotaciones del estudio Tramarca, fotografía top-down concreto"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 02 · El brief firmado · sin esto no se empieza<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Paso 4 · Sistema visual base · Días 2 tarde + 3 + 4 mañana</h2>
      <p>
        <strong>Input</strong>: brief + auditoría + fundamentos.
        <br />
        <strong>Output</strong>: capítulos IV-VII del manual (logo,
        tipografía, color, iconografía).
        <br />
        <strong>Tiempo</strong>: 2.5 jornadas.
      </p>
      <p>
        El corazón visual del manual. Se resuelve por este orden
        operativo:
      </p>

      <h3>4.1 · Sistema de logo · 8 horas</h3>
      <p>
        Núria recibió el martes a las 16:00 cinco direcciones
        tipográficas iniciales del wordmark de su estudio. Tres
        descartadas tras 30 minutos de revisión por email (asíncrono,
        no llamada). Dos retenidas para siguiente iteración.
        Miércoles mañana, una variante final con micro-ajustes de
        kerning y proporción presentada en spread completo con todas
        las variantes (horizontal, vertical, monograma, isotipo). Núria
        firmó esa dirección a las 11:42 del miércoles.
      </p>
      <p>
        El sistema de logo final incluyó: marca principal, tres
        variantes posicionales, monograma de dos letras para favicons
        y avatares, zona de exclusión documentada con plantilla
        técnica, tamaños mínimos en mm (impreso) y px (digital), y
        cuatro usos incorrectos explícitos con ejemplos visuales.
      </p>

      <h3>4.2 · Sistema tipográfico · 4 horas</h3>
      <p>
        Confirmamos Söhne como familia display (decisión heredada del
        brief). Añadimos JetBrains Mono como familia monospace para
        especificaciones técnicas en planos, alineado con la
        sensibilidad arquitectónica del estudio. Söhne Buch para body
        text. Jerarquía H1-H6 documentada con tamaños y line-heights
        en puntos exactos para tres contextos (impresión, web,
        presentación cliente).
      </p>

      <h3>4.3 · Paleta cromática · 3 horas</h3>
      <p>
        Tres grises principales (warm gray 60%, cool gray 30%, blanco
        10%) + un acento — un naranja terroso muy desaturado, casi
        ladrillo, para destacar elementos críticos en planos. Valores
        técnicos completos: Pantone C+U para imprenta, CMYK para
        offset, RGB+HEX para digital. La regla 60/30/10 documentada
        explícita.
      </p>

      <h3>4.4 · Iconografía · 2 horas</h3>
      <p>
        Sistema de trazo único 1.5pt sobre canvas 24×24px. Biblioteca
        base de doce iconos (vivienda, edificio público, plano,
        documento técnico, herramienta, etc.) extensible. Reglas
        geométricas para añadir iconos futuros sin romper coherencia.
      </p>

      <h2>Paso 5 · Voz y tono · Día 4 tarde</h2>
      <p>
        <strong>Tiempo</strong>: 4 horas.
      </p>
      <p>
        Sistema visual sin voz documentada es medio sistema. Para
        Núria fijamos cuatro principios verbales:
      </p>
      <ul>
        <li>Claro antes que técnico (clientes no son arquitectos)</li>
        <li>Específico antes que aspiracional (cifras, plazos, alcance)</li>
        <li>Sobrio antes que entusiasta (ningún signo de exclamación)</li>
        <li>Tú directo (tuteo en toda comunicación)</li>
      </ul>
      <p>
        Registro por canal: propuestas a ayuntamientos formal-pero-tuteado,
        emails diarios cercanos, web institucional declarativo, LinkedIn
        editorial-corto. Glosario aprobado con 22 términos canónicos
        del estudio (incluyendo cómo nombrar tipos de proyecto, cómo
        referirse a los ayuntamientos, cómo describir fases del
        diseño).
      </p>

      <h2>Paso 6 · Aplicaciones reales · Día 5 + Día 6 mañana</h2>
      <p>
        <strong>Tiempo</strong>: 1.5 jornadas.
      </p>
      <p>
        Si el manual no muestra la marca en aplicaciones reales, es
        decoración. Para el estudio de Núria documentamos:
      </p>
      <ul>
        <li>
          <strong>Papelería</strong>: tarjeta de visita (formato 85×55mm
          estándar europeo), letterhead A4 con margenes documentados,
          sobre americano con dirección remitente, firma email HTML +
          plain text, factura plantilla
        </li>
        <li>
          <strong>Plantilla de presentación cliente</strong>: 12
          slides base (cover, índice, contexto, propuesta, fases,
          presupuesto, equipo, contacto, anexos). Cada slide con
          plantilla técnica detrás
        </li>
        <li>
          <strong>Plano técnico cabecera</strong>: cómo aparece la
          marca en los planos arquitectónicos firmados (cabecera con
          datos del proyecto + logo + número de revisión)
        </li>
        <li>
          <strong>Web institucional</strong>: instrucciones para la
          diseñadora web que llegará en septiembre — tokens CSS,
          componentes mínimos, jerarquía
        </li>
      </ul>
      <p>
        Cada aplicación va en página propia con plantilla técnica
        detrás (dimensiones, bleed para imprenta, márgenes exactos).
        No son mockups decorativos — son instrucciones ejecutables que
        la imprenta valenciana puede usar el día siguiente.
      </p>

      <h2>Paso 7 · Guidelines y governance · Día 6 tarde</h2>
      <p>
        <strong>Tiempo</strong>: 4 horas.
      </p>
      <p>
        Aquí se fija cómo se USA el manual. Tres piezas:
      </p>
      <ol>
        <li>
          <strong>Checklist de uso</strong>: una página imprimible con
          15 puntos a verificar antes de publicar cualquier pieza. Para
          Núria incluyó cosas como &quot;¿el logo respeta zona de
          exclusión?&quot;, &quot;¿la tipografía body es Söhne Buch
          400?&quot;, &quot;¿el acento naranja se usa en menos del 10%
          del área visual?&quot;
        </li>
        <li>
          <strong>Flujo de aprobación</strong>: en estudios pequeños
          (Núria + 2 colaboradoras) hay 2 niveles — colaboradora
          produce, fundadora aprueba. Documentado por escrito qué
          requiere doble approval (presentaciones a cliente, planos
          firmados, comunicación pública) vs solo single approval
          (emails internos, borradores).
        </li>
        <li>
          <strong>Plan de versionado</strong>: el manual entregado es
          v1.0. Cualquier cambio que se haga en los próximos 12 meses
          se documenta como v1.1, v1.2, etc., con changelog público.
          Tras 12 meses revisión completa para v2.0 si crece el
          equipo.
        </li>
      </ol>

      <h2>Paso 8 · Empaquetado y entrega · Día 7</h2>
      <p>
        <strong>Tiempo</strong>: 1 jornada.
      </p>
      <p>
        El paso más infravalorado. Un manual profesional se entrega
        como <strong>paquete operativo completo</strong>, no como PDF
        aislado. Para Núria el paquete incluyó:
      </p>
      <ul>
        <li>PDF A4 landscape del manual completo (38 páginas, 18MB) con bookmarks navegables</li>
        <li>Archivos fuente del logo: SVG vectorial + PNG @1x/@2x/@3x + PDF + EPS para imprenta valenciana</li>
        <li>Figma editable con componentes nombrados consistente para diseñadora web</li>
        <li>Tokens CSS y JSON de color/tipografía para producto digital futuro</li>
        <li>Plantillas editables de papelería en Adobe + Canva</li>
        <li>Guía de onboarding del equipo (1 página resumen ejecutivo)</li>
      </ul>
      <p>
        Todo el paquete entregado en Google Drive con estructura de
        carpetas clara, nombres de archivo consistentes, versión v1.0
        marcada. Email de entrega el miércoles 23 a las 17:42 — 18
        minutos antes del compromiso de plazo.
      </p>

      <figure>
        <Image
          src="/blog/como-hacer-manual-de-marca-paso-a-paso/fig-03-paquete-final.jpg"
          alt="Paquete editorial final entregado de manual de marca — PDF impreso bound, USB drive, papelería samples, archivos fuente sobre mesa estudio Tramarca"
          width={1600}
          height={900}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Fig. 03 · El paquete completo · día 7, 17:42<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tiempos totales según modelo de proveedor</h2>
      <p>
        El cálculo honesto cruzando datos de propuestas firmadas por
        Tramarca y colegas españoles:
      </p>

      <div className="rangos-tabla">
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Días trabajo efectivo</th>
              <th>Plazo calendario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tramarca Esencial</td>
              <td>3-4 días</td>
              <td>5 días laborables</td>
            </tr>
            <tr>
              <td>Tramarca Profesional</td>
              <td>5-6 días (Núria caso)</td>
              <td>7 días laborables</td>
            </tr>
            <tr>
              <td>Tramarca Premium</td>
              <td>7-8 días</td>
              <td>10 días laborables</td>
            </tr>
            <tr>
              <td>Freelance senior</td>
              <td>6-10 días</td>
              <td>3-6 semanas (carga paralela)</td>
            </tr>
            <tr>
              <td>Agencia tradicional</td>
              <td>15-25 días totales</td>
              <td>6-12 semanas (incluye discovery)</td>
            </tr>
            <tr>
              <td>DIY equipo interno</td>
              <td>20-40 días fragmentado</td>
              <td>2-4 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Errores frecuentes que alargan el proceso</h2>

      <h3>1 · Brief incompleto firmado a la ligera</h3>
      <p>
        El error más caro. Si el brief no especifica audiencia
        operativa, proveedores externos involucrados y casos de uso
        críticos, el scope se expande durante producción. El proyecto
        de Núria salió bien porque el brief estaba completo. Hemos
        tenido proyectos donde brief vago añadió 3-5 días extra de
        ida-y-vuelta.
      </p>

      <h3>2 · Revisiones sin criterio estructurado</h3>
      <p>
        Ronda de revisión que llega como &quot;no me convence, prueba
        otra cosa&quot; sin referencias ni dirección no es revisión —
        es parálisis. Pedimos siempre feedback estructurado: qué
        componente concreto, por qué no funciona, qué referencia
        sugiere dirección alternativa. Núria entendió esto desde la
        primera ronda y eso permitió cerrar la dirección visual el
        día 3 sin retrocesos.
      </p>

      <h3>3 · Scope creep silencioso</h3>
      <p>
        El cliente pide &quot;una cosita más&quot; cada semana. Sin
        contrato con scope cerrado y extras cotizados aparte, el
        proyecto se vuelve deuda técnica. Tramarca evita esto
        publicando tiers con entregables documentados — todo lo que no
        esté en la lista se presupuesta aparte con transparencia.
      </p>

      <h2>¿Hacerlo tú o encargarlo?</h2>
      <p>
        El playbook funciona para ambas rutas. Hacerlo internamente
        tiene sentido cuando hay equipo de diseño senior que puede
        dedicar 4-8 semanas exclusivas al proyecto sin abandonar otras
        responsabilidades. Encargarlo tiene sentido cuando no hay ese
        equipo disponible y necesitas el manual operativo en menos
        tiempo.
      </p>
      <p>
        En Tramarca cerramos precio público (<Link href="/precios">490€
        / 990€ / 1.990€ IVA incluido</Link>) y plazos publicados de
        5/7/10 días laborables porque hemos productizado cada paso del
        proceso descrito arriba. Los scope cerrados y la ejecución sin
        discovery prolongado son lo que permite comprometer plazos
        fijos.
      </p>
      <p>
        Si tu proyecto encaja en nuestros tres tiers,{" "}
        <Link href="/contacto">pedir propuesta lleva 24h</Link>. Si
        necesitas algo más amplio (rebrand estratégico profundo,
        naming desde cero, corporate con 50+ empleados), te
        recomendamos colegas especializados.
      </p>
      <p>
        Si prefieres ver cómo queda un manual siguiendo este playbook
        exacto, <Link href="/#pedir-manual">descarga nuestro manual
        Tramarca v4 en PDF</Link> — 58 páginas aplicando los 8 pasos a
        nosotros mismos<span className="text-lacre">.</span>
      </p>
    </div>
  );
}
