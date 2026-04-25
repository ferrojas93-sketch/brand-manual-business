import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Claramel · 29 páginas · Esencial · 2026
 * Proyecto propio del estudio. Asistente IA on-device sobre Android,
 * fork de Google AI Edge Gallery con Gemma 4 corriendo localmente
 * sobre Xiaomi 15 Ultra. Privacidad por arquitectura como decisión
 * de marca.
 */
export default function CasoClaramel() {
  return (
    <div className="prose-editorial">
      <h2>Una IA personal que no manda nada al servidor</h2>
      <p className="lede">
        Claramel es un proyecto propio del estudio. Un asistente de
        inteligencia artificial on-device para Android, fork de Google
        AI Edge Gallery, con el modelo Gemma 4 E4B-it corriendo
        localmente sobre Xiaomi 15 Ultra. Lo que el usuario le cuenta
        se queda en el teléfono. Lo que le responde nace de su propia
        mente, no de la nube<span className="text-lacre">.</span>
      </p>
      <p>
        El reto editorial fue particular. Cuando el diferenciador del
        producto es la privacidad por arquitectura —ausencia de servidor,
        modelo local, conversación que no viaja— la marca tiene que
        comunicar lo que no ocurre. Nadie ve lo que no ocurre. La marca
        tenía que hacer visible la promesa sin convertirla en disclaimer.
      </p>

      <h2>Mente clara, voz cálida</h2>
      <p>
        El tagline rector es <em>Mente clara. Voz cálida.</em> Esa es
        la oferta completa del producto en cuatro palabras. Mente clara
        es la precisión del modelo. Voz cálida es el registro de respuesta.
        El manual lo coloca como pieza tipográfica con jerarquía de
        capítulo, no como ornamento. Cada decisión posterior del sistema
        se mide contra esas dos palabras.
      </p>
      <p>
        Mente clara obliga a una jerarquía visual sobria, sin adornos
        que compitan con el contenido del usuario. Voz cálida obliga
        a una paleta no fría —ámbar como protagonista, no azul tech—
        y a una tipografía con presencia editorial, no neutra. Las dos
        consecuencias visuales se derivan del tagline antes de elegir
        ninguna familia ni ningún hex.
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

      <h2>El nombre cruza dos palabras</h2>
      <p>
        Claramel es el cruce entre <em>clara</em> —luz, transparencia,
        claridad mental, la respuesta sin rodeos— y <em>caramel</em>
        —calidez, cuerpo, presencia humana, la dulzura sin empalago.
        El manual documenta esa etimología en la página de origen del
        nombre, con una frase que orienta el sistema entero:
        &laquo;Una mente que no se enreda, con una voz a la que sí
        vuelves&raquo;.
      </p>
      <p>
        Esa lectura del nombre orienta el sistema cromático. La paleta
        gira alrededor del ámbar como tono rector porque el nombre lo
        pide. Cuando el manual decide un color de acento, no lo decide
        en el vacío: lo decide contra la promesa que el nombre ya hizo.
      </p>

      <h2>Cinco colores con función operativa</h2>
      <p>
        La paleta canónica son cinco tonos. Miel como acento rector y
        firma del producto activo. Tinta como base oscura para dark
        mode y body extenso sobre claro. Papel como fondo claro y body
        principal. Salvia para estados secundarios y signaling pasivo.
        Vino reservado para advertencias o acento editorial puntual.
      </p>
      <p>
        La regla operativa codificada: Miel aparece sólo cuando el
        asistente está respondiendo. En idle, en input vacío, en estado
        loading, Miel desaparece. El color funciona como signal real,
        no como decoración. Cuando el producto está callado, el color
        está callado. Cuando responde, el color firma la respuesta.
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
          Paleta · cinco tonos con función definida. Miel sólo aparece
          cuando el asistente responde<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tres tipografías con role separado</h2>
      <p>
        El sistema tipográfico son tres familias con función definida.
        Fraunces para display: masthead, headlines de marca, tagline
        en aplicaciones primarias. Inter para body: contenido del producto,
        UI, captions, copy de marketing. JetBrains Mono para data:
        nombre de modelo, versión, latencia, hash de configuración local.
      </p>
      <p>
        La regla mental es la misma que aplicamos a otros manuales del
        estudio. Cuando el lector ve serif está en territorio editorial.
        Cuando ve sans está leyendo producto. Cuando ve mono está
        mirando un valor verificable de sistema. La distinción es
        invisible hasta que se rompe. En veintinueve páginas no se rompe.
      </p>

      <h2>Cómo se documenta la privacidad sin convertirla en disclaimer</h2>
      <p>
        El reto verbal específico de Claramel: comunicar que el modelo
        corre on-device sin convertir esa información en una página de
        términos legales. La solución codificada en el manual fue tratar
        la privacidad como propiedad del producto, no como característica
        de marketing. Cada vez que el manual habla del modelo lo nombra
        como local. Cada vez que muestra una conversación, indica que
        el contexto vive en el dispositivo.
      </p>
      <p>
        Esa repetición no es eslogan. Es disciplina editorial. Si la
        marca menciona el servidor que no usa cada vez que tiene
        ocasión, suena defensiva. Si dice modelo local con la naturalidad
        con la que dice modelo, la promesa entra en el lector sin
        requerir argumento.
      </p>

      <h2>Veintinueve páginas, una ronda</h2>
      <p>
        El manual se entregó como Esencial: veintinueve páginas A4
        landscape, una ronda de revisión incluida. El alcance del
        Esencial cubre lo que un producto digital necesita para salir
        consistente: cover, prólogo, esencia, manifiesto, identidad,
        color, tipografía, voz, aplicaciones primarias y contraportada.
        Lo que se queda fuera del Esencial es la documentación
        extendida —governance, plantillas comerciales, sistema de
        merch— que un proyecto técnico de fase temprana todavía no
        necesita.
      </p>

      <h2>Lo que el proyecto enseñó al estudio</h2>
      <p>
        Claramel nos enseñó algo concreto sobre marcas de producto
        on-device: el diferenciador invisible —la privacidad por
        arquitectura— se documenta como vocabulario, no como bandera.
        Si cada pieza usa la misma palabra para nombrar el modelo
        local, la promesa entra sin necesidad de argumentar. Si la
        marca cambia de nombre cada vez —&laquo;sin servidor&raquo;,
        &laquo;privado&raquo;, &laquo;offline&raquo;,
        &laquo;local&raquo;— el lector deja de saber qué tiene delante<span className="text-lacre">.</span>
      </p>

      <h2>Si tu producto está en este punto</h2>
      <p>
        Claramel describe un patrón frecuente en producto técnico de
        fase temprana: diferenciador real pero abstracto, urgencia de
        tener marca operativa antes del lanzamiento, alcance acotado
        a lo que el producto necesita ahora —no a lo que necesitará
        en seis meses. El tier Esencial cubre exactamente este caso.
      </p>
      <p>
        Si quieres alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#esencial">los tres tiers se ven en una
        página</Link>. Si prefieres comparar con el resto del portfolio
        antes de decidir, <Link href="/manuales">aquí están los cinco
        casos</Link>.
      </p>
    </div>
  );
}
