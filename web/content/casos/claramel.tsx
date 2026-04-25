import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Claramel · 29 páginas · Profesional · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Proyecto propio del estudio. Asistente IA on-device sobre Android,
 * fork de Google AI Edge Gallery con Gemma 4 corriendo localmente.
 * El reto fue documentar una marca cuyo diferenciador es lo invisible.
 */
export default function CasoClaramel() {
  return (
    <div className="prose-editorial">
      <h2>Una marca para un producto que no manda nada al servidor</h2>
      <p className="lede">
        Claramel es un proyecto propio del estudio. Un asistente de IA
        on-device para Android, fork de Google AI Edge Gallery, con el
        modelo Gemma 4 E4B-it corriendo localmente sobre Xiaomi 15 Ultra.
        Nada sale del dispositivo. Esa es la decisión técnica de
        partida<span className="text-lacre">.</span>
      </p>
      <p>
        El reto editorial fue particular. Cuando el diferenciador del
        producto es la privacidad por arquitectura —ausencia de servidor,
        modelo local, conversación que no viaja— la marca tiene que
        comunicar lo que no ocurre. Nadie ve lo que no ocurre. La marca
        tenía que hacer visible la promesa sin convertirla en disclaimer.
      </p>

      <h2>El método del estudio aplicado a un proyecto propio</h2>
      <p>
        Documentamos Claramel con el mismo método con el que documentamos
        a un cliente externo: descubrimiento, arquitectura, sistema visual,
        sistema verbal, aplicaciones, governance. Ningún atajo por ser
        proyecto propio. Cuando el estudio hace algo para sí mismo, la
        tentación es tratar la marca como secundaria al producto y
        publicar antes de tiempo. La descartamos.
      </p>
      <p>
        La decisión fue tratar Claramel como un Profesional completo. Veintinueve
        páginas, dos rondas de revisión, auditoría cruzada por dirección
        creativa, dirección de arte, tipografía y copy. El criterio del
        manual de cliente se aplica idéntico al manual interno. Si no
        aguanta, el método no aguanta.
      </p>

      <h2>El isotipo es una gota de luz</h2>
      <p>
        El isotipo final es un disco ámbar como cuerpo de la IA y un disco
        cream como chispa de luz arriba a la izquierda. El concepto que
        gobernó la decisión: una gota de luz atrapada en una perla de
        caramelo. La metáfora orienta el sistema cromático completo y
        explica por qué la paleta gira alrededor del ámbar como tono
        rector.
      </p>
      <p>
        El disco como geometría primaria es deliberado. Un asistente de
        IA conversacional necesita un signo blando, no un signo rígido.
        El círculo no impone dirección de lectura. Funciona en avatar
        cuadrado, en favicon a 16 píxeles, en signature email a tamaño
        botón. La forma se reconoce sin requerir tamaño grande, y eso
        importa para un producto que vive principalmente en pantalla
        pequeña.
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

      <h2>Mente clara, voz cálida</h2>
      <p>
        El tagline rector es Mente clara. Voz cálida. Esa es la oferta
        completa del producto en cinco palabras. Mente clara es la
        precisión del modelo. Voz cálida es el registro de respuesta.
        El manual lo coloca como pieza tipográfica con jerarquía de
        capítulo, no como ornamento. Cada decisión posterior del sistema
        se mide contra esas dos palabras.
      </p>
      <p>
        Mente clara obliga a una jerarquía visual sobria, sin adornos que
        compitan con el contenido del usuario. Voz cálida obliga a una
        paleta no fría —ámbar como protagonista, no azul tech— y a una
        tipografía con presencia editorial, no neutra. Las dos
        consecuencias visuales se derivan del tagline antes de elegir
        ninguna familia ni ningún hex.
      </p>

      <h2>Cinco colores con función operativa</h2>
      <p>
        La paleta canónica son cinco tonos. Miel #E8A026 como acento
        rector y firma del producto activo. Tinta #141A2E como base oscura
        para dark mode y body extenso sobre claro. Papel #F5EAD1 como
        fondo claro y body principal. Salvia #8AA38C para estados secundarios
        y signaling pasivo. Vino #6B2137 reservado para advertencias o
        acento editorial puntual.
      </p>
      <p>
        La regla operativa codificada: Miel aparece solo cuando el
        asistente está respondiendo. En idle, en input vacío, en estado
        loading, Miel desaparece. El color funciona como signal real, no
        como decoración. Cuando el producto está callado, el color está
        callado. Cuando responde, el color firma la respuesta.
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/atmosphere-01.jpg"
          alt="Claramel — paleta operativa con miel, tinta, papel, salvia y vino"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Paleta · cinco tonos con función definida. Miel solo aparece
          cuando el asistente responde<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tres tipografías con role separado</h2>
      <p>
        El sistema tipográfico son tres familias con función definida.
        Fraunces para display: masthead, headlines de marca, tagline en
        aplicaciones primarias. Inter para body: contenido del producto,
        UI, captions, copy de marketing. JetBrains Mono para data: nombre
        de modelo, versión, latencia, hash de configuración local.
      </p>
      <p>
        La regla mental es la misma que aplicamos a otros manuales del
        estudio. Cuando el lector ve serif está en territorio editorial.
        Cuando ve sans está leyendo producto. Cuando ve mono está mirando
        un valor verificable de sistema. La distinción es invisible hasta
        que se rompe. En veintinueve páginas no se rompe.
      </p>

      <figure>
        <Image
          src="/portfolio/claramel/spread-07.jpg"
          alt="Claramel — sistema tipográfico Fraunces, Inter y JetBrains Mono con role separado"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico · Fraunces editorial, Inter producto,
          JetBrains Mono dato de sistema<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cómo se documenta la privacidad sin convertirla en disclaimer</h2>
      <p>
        El reto verbal específico de Claramel: comunicar que el modelo
        corre on-device sin convertir esa información en una página de
        términos legales. La solución codificada en el manual fue tratar
        la privacidad como propiedad del producto, no como característica
        de marketing. Cada vez que el manual habla del modelo lo nombra
        como local. Cada vez que muestra una conversación, indica que el
        contexto vive en el dispositivo.
      </p>
      <p>
        Esa repetición no es eslogan. Es disciplina editorial. Si la
        marca menciona el servidor que no usa cada vez que tiene ocasión,
        suena defensiva. Si dice modelo local con la naturalidad con la
        que dice modelo, la promesa entra en el lector sin requerir
        argumento. El manual codifica ese vocabulario y lo aplica de
        forma uniforme en producto, web, copy comercial y respuestas del
        propio asistente.
      </p>

      <h2>Aplicaciones del producto antes que aplicaciones de marca</h2>
      <p>
        En un producto digital on-device, las aplicaciones del manual
        no son papelería ni signage. Son componentes del propio producto.
        El manual cubre, por orden de prioridad: avatar de la IA en el
        chat, estados del asistente —idle, escuchando, pensando, respondiendo—,
        tipografía aplicada a la respuesta del modelo, indicador on-device
        siempre visible, screen de configuración local, splash de bienvenida.
      </p>
      <p>
        Cada aplicación incluye spec técnica completa: medidas exactas,
        formato, color space y comportamiento de estado. La parte que
        más usa el equipo del producto es la documentación de estados.
        Distinguir visualmente cuándo el modelo está pensando y cuándo
        está respondiendo es lo que hace que la conversación se sienta
        natural sin saturar al usuario con información de sistema.
      </p>

      <h2>Veintinueve páginas, dos rondas</h2>
      <p>
        El manual completo se entregó como Profesional con dos rondas
        incluidas. La auditoría cruzada encontró cosas que el método tenía
        que encontrar. Una jerarquía de respuesta del asistente que
        contradecía la regla de Mente clara con un peso tipográfico
        excesivo. Un estado pasivo en el que Miel seguía apareciendo
        contra la regla operativa codificada en el propio manual. Un
        glosario que confundía modelo local con modelo offline —no son
        lo mismo, y el manual lo separa.
      </p>

      <h2>Lo que el proyecto enseñó al estudio</h2>
      <p>
        Claramel nos enseñó dos cosas concretas. Primera, sobre marcas de
        producto on-device: el diferenciador invisible —la privacidad por
        arquitectura— se documenta como vocabulario, no como bandera. Si
        cada pieza usa la misma palabra para nombrar el modelo local, la
        promesa entra sin necesidad de argumentar. Si la marca cambia
        de nombre cada vez —"sin servidor", "privado", "offline", "local"—
        el lector deja de saber qué tiene delante.
      </p>
      <p>
        Segunda, sobre proyectos propios: el método aguanta cuando se
        aplica al estudio mismo. No hay descuento de rigor por ser proyecto
        interno. Si Claramel se documentara con menos disciplina que un
        cliente, el portfolio se desequilibraría hacia dentro. La decisión
        editorial fue clara: mismo alcance, mismo plazo, mismas rondas<span className="text-lacre">.</span>
      </p>

      <h2>Si tu producto está en este punto</h2>
      <p>
        Claramel describe un patrón frecuente: producto técnico funcionando,
        diferenciador real pero abstracto, urgencia razonable de tener
        marca operativa antes del lanzamiento. El tier Profesional cubre
        exactamente este caso, con sistema visual, sistema verbal y
        aplicaciones de producto documentados.
      </p>
      <p>
        Si quieres el alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#profesional">los tres tiers se ven en una
        página</Link>. Si prefieres ver el resto del portfolio antes de
        decidir, <Link href="/manuales">aquí están los cinco casos</Link>.
      </p>
    </div>
  );
}
