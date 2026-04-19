import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Claramel · 29 páginas · Esencial · 2026
 * Asistente de IA personalizada arrancando sin más activo que un nombre.
 */
export default function CasoClaramel() {
  return (
    <div className="prose-editorial">
      <h2>El brief · arrancar sin más activo que un nombre y un producto</h2>
      <p className="lede">
        Claramel llegó al estudio en enero de 2026 con la situación
        que vemos cada vez más en proyectos de IA: producto técnico
        funcionando, equipo pequeño con criterio, pero ningún activo
        de marca todavía. La fundadora describió el estado en una
        sola frase durante la primera llamada: <em>&quot;tenemos un
        nombre que nos gusta y un producto que funciona; el resto
        está por hacer&quot;</em><span className="text-lacre">.</span>
      </p>
      <p>
        El brief firmado el 12 de enero contenía tres entregables
        explícitos: <strong>(1)</strong> logo construido desde el
        nombre con sistema de aplicación documentado;
        <strong> (2)</strong> paleta corta y sistema tipográfico
        sobrio que pueda escalar cuando la marca crezca;
        <strong> (3)</strong> guidelines mínimas pero suficientes para
        producto y web — tier Esencial, 20-25 páginas. El plazo
        publicado: 5 días laborables desde kickoff. El manual se
        entregó el viernes de la misma semana, dentro del compromiso<span className="text-lacre">.</span>
      </p>

      <h2>El logo · construido desde la geometría del nombre</h2>
      <p>
        El nombre Claramel — combinación de <em>claro</em> y
        <em> melodía</em> — sugería tono cálido y voz acompañante.
        El logo final es un wordmark construido desde una sans
        contemporánea con dos modificaciones específicas: el cuenco
        de la &quot;a&quot; ligeramente abierto para señal de
        receptividad, y la &quot;l&quot; final con remate sutil que
        evoca la entrada de una conversación.
      </p>
      <p>
        Las modificaciones son <em>perceptibles solo a tamaño grande</em>
        — a 16pt de uso cotidiano funciona como wordmark sans normal.
        Esta sutileza es deliberada: la marca debía sentirse familiar
        sin elementos que envejezcan rápido. El sistema de logo se
        documenta con cuatro variantes (positivo cream, negativo
        oscuro, monocromo digital, monocromo print) y reglas de zona
        de protección en múltiplos de la altura de la &quot;x&quot;
        del wordmark<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/spread-04.jpg"
          alt="Claramel — spread del logo con cuatro variantes y reglas de zona de protección"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo del logo · cuatro variantes documentadas con
          reglas operativas de zona de protección<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Paleta cromática · tres tonos para escalar</h2>
      <p>
        La paleta final tiene tres colores documentados con role
        operativo asignado. La decisión deliberada fue mantenerla
        corta para que la marca pueda crecer sin reinventar criterio:
      </p>
      <ul>
        <li><strong>Tinta principal</strong> · negro suave para body
          y wordmark sobre fondos claros. Base ligeramente cálida
          que evita el contraste vibratorio del #000 puro.</li>
        <li><strong>Cream papel</strong> · fondo principal en
          aplicaciones de producto. Cálido, sin saturación, neutro
          en cualquier contexto de aplicación.</li>
        <li><strong>Acento conversacional</strong> · color saturado
          único aplicado exclusivamente en estados de interacción
          dentro del producto (cursor activo, mensaje del asistente,
          punto final de wordmark significativo). Regla 70/25/5: 70%
          papel, 25% tinta, 5% acento.</li>
      </ul>
      <p>
        La regla operativa codificada: <strong>el acento aparece solo
        cuando hay conversación activa</strong>. En estados pasivos
        (esperando input, idle, loading) el acento se suprime. Esta
        regla mantiene el color como signal real, no como decoración<span className="text-lacre">.</span>
      </p>

      <h2>Sistema tipográfico · una sans única, jerarquía sobria</h2>
      <p>
        El sistema tipográfico es deliberadamente único: una sola
        familia sans contemporánea que cubre wordmark, headlines,
        body, captions y metadatos. La decisión de no introducir una
        segunda familia (mono o serif) viene del tier — el Esencial
        cubre marcas en arranque donde la simplicidad operacional
        es el mayor activo. Una familia, cuatro pesos
        (Regular, Medium, Bold, Black), tres tamaños base (32pt
        headline, 16pt body, 12pt caption).
      </p>
      <p>
        La jerarquía documentada en el capítulo 03 cubre tres niveles
        suficientes para producto digital: H1 para títulos de feature,
        H2 para secciones, body con leading 24pt para legibilidad
        extendida en pantalla<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/spread-07.jpg"
          alt="Claramel — spread sistema tipográfico con jerarquía de tres niveles para producto digital"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico de una sola familia · jerarquía de tres
          niveles para producto digital<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Aplicaciones · producto y web mínimas viables</h2>
      <p>
        El tier Esencial cubre las aplicaciones críticas para un
        arranque limpio: <strong>(1)</strong> sistema de logo
        completo con cuatro variantes; <strong>(2)</strong> componentes
        básicos de UI para el producto (botón, input, mensaje del
        asistente, estado vacío); <strong>(3)</strong> meta-tags y
        OG card para web; <strong>(4)</strong> firma de email simple;
        <strong> (5)</strong> avatar de equipo en producto y RRSS.
      </p>
      <p>
        Cada aplicación tiene spec técnica explícita (medidas exactas,
        formato, color space) y un ejemplo aplicado. Lo que <em>no</em>
        cubre el Esencial — papelería extendida, signage físico,
        social cards a múltiples formatos, governance — está
        documentado en una página final de roadmap como referencia
        para cuando la marca crezca y necesite escalar al
        Profesional<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/spread-09.jpg"
          alt="Claramel — spread aplicaciones producto y web con specs técnicas"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Aplicaciones críticas para arranque · producto, web, firma
          de email y avatar de equipo<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>La voz · acompañante, no autoritaria</h2>
      <p>
        El capítulo verbal codifica una decisión central para producto
        de IA conversacional: la voz Claramel es <strong>acompañante,
        no autoritaria</strong>. El asistente no <em>responde</em> con
        certeza — <em>propone</em> con criterio. No <em>dicta</em>
        soluciones — <em>sugiere</em> caminos. Esta diferencia es
        crucial cuando el producto es IA generativa: la confianza del
        usuario depende de que el sistema reconozca sus propios
        límites<span className="text-lacre">.</span>
      </p>
      <p>
        Tres reglas operativas documentadas: <strong>(1) propone</strong>
        antes que afirme, <strong>(2) explica</strong> antes que ejecute,
        <strong> (3) reconoce límites</strong> antes que invente. Cada
        respuesta del asistente debería pasar por estas tres reglas
        antes de salir al usuario.
      </p>

      <h2>Después · marca con base operativa desde el día uno</h2>
      <p>
        Claramel lanzó producto público dos semanas después de recibir
        el manual. El equipo aplicó el sistema directamente sin
        intermediación de proveedor: el manual estaba pensado para que
        un fundador con criterio lo aplique sin agencia. La fundadora
        reportó que el ahorro de tiempo en decisiones visuales en las
        primeras seis semanas justificó el coste del manual antes de
        terminar el primer mes<span className="text-lacre">.</span>
      </p>

      <h2>Por qué este caso es relevante</h2>
      <p>
        Claramel ilustra el patrón del proyecto en arranque: equipo
        pequeño con criterio, producto técnico funcionando, urgencia
        razonable de tener marca operativa antes del lanzamiento
        público. El tier Esencial cubre exactamente este caso —
        suficiente para arrancar profesionalmente, sin sobre-diseño
        que el negocio aún no necesita.
      </p>
      <p>
        Si tu situación es similar (producto listo, marca por
        construir),{" "}
        <Link href="/precios#esencial">el tier Esencial cubre este
        caso al detalle</Link>: 20-25 páginas, 5 días laborables,
        490€ IVA incluido. <Link href="/contacto">Pide propuesta sin
        compromiso</Link> y respondemos en 24h con scope cerrado.
      </p>
    </div>
  );
}
