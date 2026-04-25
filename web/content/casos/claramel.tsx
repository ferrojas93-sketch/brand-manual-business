import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Claramel · 29 páginas · Esencial · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Asistente de IA personalizado on-device. La marca tiene voz literal —
 * la del propio asistente. El reto es documentar cómo habla un producto.
 */
export default function CasoClaramel() {
  return (
    <div className="prose-editorial">
      <h2>El producto que ya hablaba antes que la marca</h2>
      <p className="lede">
        Enero de 2026. Claramel llegó al estudio con un asistente de IA
        que ya respondía en tres idiomas y un nombre que la fundadora
        defendía con argumentos. No traía logo, no traía paleta, no traía
        manifiesto. Traía algo más raro: un producto que ya tenía voz
        literal — la del propio asistente — antes de que existiera la
        marca que lo envolvía<span className="text-lacre">.</span>
      </p>
      <p>
        Eso cambia el orden del trabajo. En la mayoría de proyectos, la
        marca define cómo va a hablar el producto. En Claramel, el producto
        ya hablaba y la marca tenía que aprender a no contradecirlo. La
        primera tarea no fue diseñar nada. Fue leer doscientos turnos de
        conversación reales y extraer qué patrones repite el asistente
        cuando responde bien.
      </p>

      <h2>Cómo se documenta una voz que no es eslogan</h2>
      <p>
        La voz Claramel no vive en una tagline. Vive en cada respuesta que
        el asistente da a una pregunta concreta de un usuario concreto. Eso
        es harder problem que escribir un manifiesto: tienes que codificar
        cómo se comporta una IA sin convertirla en un guion rígido y sin
        dejarla improvisar criterio.
      </p>
      <p>
        La conclusión, después de leer la transcripción, fue que el
        asistente respondía bien cuando hacía tres cosas. Proponer en
        lugar de afirmar. Explicar antes de ejecutar. Reconocer un límite
        antes de inventar una respuesta. Esas tres reglas se quedaron como
        principios verbales del manual y se aplicaron también a la web,
        al onboarding y a los emails transaccionales.
      </p>

      <h2>El logo construido desde la geometría del nombre</h2>
      <p>
        Claramel viene de claro y melodía. La fundadora lo había explicado
        media docena de veces sin que nadie lo capturara. El wordmark final
        toma esa explicación al pie de la letra: una sans contemporánea
        con dos modificaciones casi invisibles. El cuenco de la "a"
        ligeramente abierto, lectura como receptividad. La "l" final con
        un remate sutil, lectura como entrada de conversación.
      </p>
      <p>
        Las modificaciones se perciben solo en aplicación grande — masthead,
        signage, splash de producto. A 16pt el wordmark funciona como una
        sans normal, sin signature visual fuerte. Esa sutileza es deliberada.
        Una marca de IA tiene que envejecer despacio, y los gestos
        tipográficos demasiado expresivos envejecen rápido.
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/spread-04.jpg"
          alt="Claramel — wordmark con cuatro variantes y reglas de zona de protección"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo del wordmark · cuatro variantes con zona de protección
          calculada en múltiplos de altura x<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tres colores que no compiten con el contenido</h2>
      <p>
        La paleta acabó en tres tonos. Tinta cálida para body, cream papel
        para fondos, un acento conversacional saturado. Tres es deliberado.
        Cuatro hubieran sido excedente para un Esencial. Dos hubieran dejado
        al producto sin signal cromático para distinguir estado activo de
        estado pasivo.
      </p>
      <p>
        La regla operativa codificada: el acento aparece solo cuando hay
        conversación activa. En estados pasivos — esperando input, idle,
        loading — el acento desaparece. El color funciona como signal
        real, no como decoración. Cuando el asistente está pensando, el
        producto está callado. Cuando responde, el color firma la respuesta.
      </p>
      <p>
        La proporción quedó 70% papel, 25% tinta, 5% acento. La cifra es
        menos importante que la disciplina: el acento es escaso por
        decisión. Cuando aparece, significa algo.
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/atmosphere-01.jpg"
          alt="Claramel — paleta operativa sobre superficie clara"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Paleta · tres tonos con función definida. El acento solo
          aparece cuando hay conversación activa<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Una sola tipografía y una decisión que duele</h2>
      <p>
        El sistema tipográfico es deliberadamente único. Una sola sans
        contemporánea cubre wordmark, headlines, body, captions y metadatos
        del producto. La decisión de no introducir una segunda familia
        viene del tier — el Esencial cubre marcas en arranque donde la
        simplicidad operacional pesa más que la sofisticación visual.
      </p>
      <p>
        La decisión duele al equipo creativo. Una segunda familia mono
        para los datos técnicos del asistente — versión, latencia, tokens
        consumidos — habría sido más elegante editorialmente. Pero un
        producto en arranque no necesita más superficies que mantener.
        Necesita menos. Una familia, cuatro pesos, tres tamaños base. Eso
        cubre el 95% de la operación.
      </p>
      <p>
        Si Claramel crece y el Esencial deja de ser suficiente, el roadmap
        documentado en la página final del manual indica qué se añade en
        un Profesional posterior: segunda familia mono, capítulo extendido
        de papelería, governance para terceros<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/spread-07.jpg"
          alt="Claramel — sistema tipográfico de una familia con jerarquía sobria"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico · una familia, cuatro pesos, jerarquía
          sobria para producto digital<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cómo habla la IA en tres idiomas</h2>
      <p>
        El capítulo verbal del manual es el más extenso del proyecto.
        Claramel responde en español, inglés y portugués. Documenta variantes
        regionales del español — el "vos" rioplatense, el "vosotros"
        peninsular — porque la voz acompañante se rompe cuando el asistente
        elige el pronombre equivocado al iniciar conversación.
      </p>
      <p>
        Las tres reglas operativas — proponer antes que afirmar, explicar
        antes que ejecutar, reconocer límites antes que inventar — se
        documentan con ejemplos paralelos en cada idioma. No son
        traducciones. Son reescrituras nativas. Lo que en español suena
        natural como "puedo proponerte tres caminos" no funciona como
        "I can propose you three paths" en inglés. Cada idioma tiene su
        forma propia de proponer sin afirmar.
      </p>

      <h2>Aplicaciones mínimas viables</h2>
      <p>
        El Esencial cubre las aplicaciones críticas para un arranque limpio.
        Sistema de logo con cuatro variantes. Componentes básicos del
        producto — botón, input, mensaje del asistente, estado vacío. Meta
        tags y OG card para web. Firma de email simple. Avatar de equipo
        en producto y RRSS.
      </p>
      <p>
        Cada aplicación tiene spec técnica — medidas exactas, formato,
        color space — y un ejemplo aplicado. Lo que el Esencial no cubre
        está documentado explícitamente en la última página, no como
        omisión sino como roadmap. Saber qué falta es parte del manual.
      </p>

      <h2>Lanzamiento dos semanas después</h2>
      <p>
        Claramel lanzó producto público el 26 de enero, dos semanas después
        de recibir el manual. La fundadora aplicó el sistema directamente
        sin intermediación. El manual estaba pensado para que un fundador
        con criterio lo aplique sin agencia, y el resultado lo confirmó.
      </p>
      <p>
        El feedback que más nos importó llegó tres semanas después del
        lanzamiento. Una usuaria preguntó al equipo si el asistente había
        sido entrenado por un escritor. La respuesta era no — el asistente
        seguía las tres reglas del capítulo verbal. Lo que la usuaria
        leía como "voz humana" era disciplina codificada<span className="text-lacre">.</span>
      </p>

      <h2>Lo que nos llevamos al siguiente proyecto de IA</h2>
      <p>
        Claramel nos enseñó algo concreto sobre los manuales para producto
        de IA. La voz no se documenta como manifiesto. Se documenta como
        sistema de filtros — pocas reglas, aplicables turno a turno, con
        contraejemplos para los casos donde el modelo se va por el camino
        fácil. La diferencia entre un asistente que suena humano y uno que
        suena genérico cabe en cuatro páginas de manual.
      </p>

      <h2>Si tu producto está en este punto</h2>
      <p>
        Claramel describe un patrón frecuente: equipo pequeño con criterio,
        producto técnico funcionando, urgencia razonable de tener marca
        operativa antes del lanzamiento público. El tier Esencial cubre
        exactamente este caso — suficiente para arrancar profesionalmente,
        sin sobrediseño que el negocio aún no necesita.
      </p>
      <p>
        Si quieres el alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#esencial">los tres tiers se ven en una
        página</Link>. Si prefieres ver el resto del portfolio antes de
        decidir, <Link href="/manuales">aquí están los cinco casos</Link>.
      </p>
    </div>
  );
}
