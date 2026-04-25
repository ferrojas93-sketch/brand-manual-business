import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Shamusic · 67 páginas (v6) · Premium · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Plataforma music-tech. La marca vive en cadencia semanal documentada,
 * no en un logo + paleta. El reto es codificar lo que vive en ritmo.
 */
export default function CasoShamusic() {
  return (
    <div className="prose-editorial">
      <h2>Una marca que se publica cada semana</h2>
      <p className="lede">
        Marzo de 2026. Shamusic llegó al estudio con una situación que casi
        nunca vemos en proyectos de marca: el sistema visual no era el
        problema central. El problema central era la cadencia. La marca
        publica cada semana —Reels, posters de Sessions, certificados de
        copyright firmados on-chain— y cada lunes el equipo improvisaba
        criterio porque no había manera de no improvisarlo<span className="text-lacre">.</span>
      </p>
      <p>
        Eso cambia el objeto del manual. Una marca estática se documenta
        con un sistema visual y un capítulo verbal. Una marca que se publica
        en cadencia se documenta como un sistema editorial: con plantillas
        que aceptan contenido nuevo cada lunes sin necesidad de inventar
        criterio nuevo cada lunes. La diferencia entre las dos cosas son
        veinte páginas y, sobre todo, una arquitectura distinta.
      </p>

      <h2>La pregunta que justificó el Premium</h2>
      <p>
        El brief inicial proponía un Profesional. Lo descartamos en la
        primera reunión. Un Profesional habría documentado el sistema
        visual y el capítulo verbal, y el problema operativo —el lunes
        del community manager— habría seguido intacto. Para resolverlo
        hacían falta cuatro cosas más que un Profesional no incluye:
        plantillas Reel animadas, governance para terceros, capítulo
        editorial con cadencia documentada, y mantra codificado
        tipográficamente como pieza única de marca.
      </p>
      <p>
        La pregunta correcta no era cuántas páginas cabían en el plazo.
        Era qué tiene que estar en el manual para que el lunes del community
        manager dure quince minutos en vez de noventa. La respuesta dio
        sesenta y siete páginas y diez días laborables. El alcance lo fijó
        la pregunta, no a la inversa.
      </p>

      <h2>Tres tipografías con función estratégica</h2>
      <p>
        El sistema final son tres familias con role asignado y regla de
        combinación documentada. Esta arquitectura compleja se justifica
        solo en Premium. Es la herramienta que permite a Shamusic comunicar
        tres dimensiones simultáneas —rebeldía cultural, autoridad técnica,
        transparencia legal— sin contradecirse en el mismo spread.
      </p>
      <p>
        <strong>Fraunces</strong> en uso exclusivo de masthead, pull-quotes
        y mantra. Una serif variable con eje de optical size. A 144 puntos
        en peso 900 desarrolla un contraste modulado que evoca tradición
        editorial musical sin caer en nostalgia. A 14 puntos en cuerpo, la
        misma familia mantiene legibilidad digital pero pierde el dramatismo.
        Esa dualidad la usa el manual para diferenciar declaración de
        documentación.
      </p>
      <p>
        <strong>Host Grotesk</strong> para body extenso, headlines submantra,
        UI del producto y captions. Su construcción neutra deja a Fraunces
        hacer el trabajo declarativo sin competir. <strong>JetBrains
        Mono</strong> para datos técnicos: hash de smart contract, timestamp
        de registro, ID de track musical, signature criptográfica. Cada vez
        que aparece la mono, el lector sabe que está mirando dato verificable
        on-chain, no narrativa<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-03.jpg"
          alt="Shamusic — tres tipografías Fraunces, Host Grotesk y JetBrains Mono con role asignado"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico · Fraunces declarativo, Host Grotesk
          narrativo, JetBrains Mono para data verificable<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cinco colores y un acento que firma</h2>
      <p>
        La paleta inicial detectada en materiales actuales tenía once tonos
        en uso, incluidos cuatro morados casi idénticos que nadie había
        registrado como duplicidad. Auditamos cada uso, identificamos
        roles operativos, redujimos a cinco con regla de proporción explícita.
      </p>
      <p>
        Midnight como base oscura para masthead editorial y dark mode del
        producto. Paper desaturado para fondos claros y body extenso sobre
        oscuro. Mist gris-azul para texto secundario. Verified green
        reservado exclusivamente para confirmaciones técnicas: copyright
        registrado, transacción ejecutada, documento certificado. Y signal
        magenta como acento único de marca.
      </p>
      <p>
        La regla operativa codificada en página 14: signal magenta nunca
        aparece dos veces seguidas en la misma composición. Si el período
        está en el masthead, el del cuerpo se omite. Esa restricción la
        peleamos varias veces. Era tentador usar el acento en separadores,
        en bordes, en iconos. Cada vez que lo probamos el spread se volvía
        decorativo. La marca dejaba de tener un único gesto y se volvía
        cosmética. Volvimos a la regla y la fijamos: un punto, una vez,
        al final de la frase que más pesa<span className="text-lacre">.</span>
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-05.jpg"
          alt="Shamusic — paleta cromática midnight, paper, mist, verified green, signal magenta"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático · midnight como base, signal magenta como
          acento estratégico único<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>El mantra como pieza tipográfica</h2>
      <p>
        El capítulo verbal se construye alrededor de una pieza única: el
        mantra de marca, codificado tipográficamente en Fraunces 900 a 144
        puntos con cada período en signal magenta. La construcción es
        deliberada. Tres frases de dos palabras. Cada una termina en
        período. Cada período en color de marca. El ritmo de tres y la
        repetición del posesivo son parte del código operativo, no
        decoración tipográfica.
      </p>
      <p>
        El manual documenta cinco aplicaciones del mantra. Completo, para
        aplicaciones primarias de marca. Tercio inicial, para signaling
        de canal artístico. Tercio medio, para comunicación legal y
        certificados de copyright. Tercio final, para campañas de royalties.
        Y silencioso —solo los tres períodos en signal magenta— como
        signature visual abstracta en piezas editoriales avanzadas.
      </p>
      <p>
        Esa última aplicación es la que más usa el equipo. Un mantra
        completo se gasta cuando se publica cada semana. Tres puntos en
        magenta, en cambio, funcionan como firma reconocible sin agotar
        la pieza retórica que el resto del manual está protegiendo.
      </p>

      <h2>El sistema editorial semanal</h2>
      <p>
        La parte que justifica el Premium en este caso es el capítulo
        editorial. Catorce aplicaciones con plantillas operativas —no
        ejemplos sueltos— que el community manager activa cada lunes con
        contenido nuevo de la semana. Reels animados a quince, treinta y
        sesenta segundos. Posters de Sessions live con grid editorial
        replicable. Certificados de copyright PDF firmados on-chain con
        QR de verificación. Artist profile en producto. Social cards
        cuadradas y stories verticales. Plantilla de campaña a sello
        discográfico.
      </p>
      <p>
        Cada aplicación tiene tres elementos en su capítulo. Cómo se
        construye. Cómo se ve construida. Qué hacer cuando un sello externo
        o festival impone su propio template y solo cabe pegar el mantra
        silencioso. Esta tercera parte —reglas de excepción— es la que
        más se usa cuando el equipo entra en negociación con terceros. Y
        es la que ningún manual estándar incluye porque admitir que el
        sistema convive con sistemas ajenos parece una concesión. No lo es.
        Es lo que separa un manual usable de un manual decorativo.
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-07.jpg"
          alt="Shamusic — capítulo de aplicaciones editoriales con plantillas Reel y posters Sessions"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Aplicaciones editoriales · plantillas Reel, posters Sessions y
          certificado de copyright on-chain<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Governance para cuando entren manos nuevas</h2>
      <p>
        La diferencia más concreta entre Profesional y Premium en este
        caso es el capítulo final de governance. Cinco páginas que
        documentan el flujo de aprobación cuando un proveedor externo
        —community manager freelance, agencia de campaña, productor
        audiovisual— tiene que aplicar el sistema sin pasar por el ojo
        de la dirección de marca.
      </p>
      <p>
        Tres reglas operativas. Cualquier asset publicado en canal oficial
        pasa por review interno antes de salir. Los assets externos se
        referencian al capítulo correspondiente del manual antes de
        producirse, no después. Y el log de excepciones aprobadas se
        incorpora a la revisión trimestral del manual. Esa cadencia de
        revisión es parte del sistema, no una excepción al sistema<span className="text-lacre">.</span>
      </p>

      <h2>Sesenta y siete páginas, tres rondas</h2>
      <p>
        El manual completo tomó diez días laborables. Las primeras veinte
        horas fueron arquitectura editorial: qué capítulos, qué orden,
        qué tiene que estar en página derecha y qué en izquierda, qué
        plantillas semanales aguantan publicar durante doce meses sin
        agotarse. Treinta y dos horas de producción. Dieciséis horas de
        auditoría cruzada con dirección creativa, dirección de arte,
        tipografía, copy y UX.
      </p>
      <p>
        Las tres rondas no fueron cosméticas. La primera encontró seis
        spreads donde la jerarquía contradecía la regla del propio capítulo.
        La segunda encontró un certificado de copyright cuyo QR no era
        reproducible a tamaño impreso. La tercera encontró que el mantra
        silencioso, en una aplicación concreta, se confundía con un error
        de impresión. Si las rondas no encuentran nada, el proceso no está
        haciendo su trabajo.
      </p>

      <h2>El lunes que cambió</h2>
      <p>
        El manual entregado el viernes de la segunda semana se aplicó al
        feed durante el siguiente fin de semana. El lunes después, el
        community manager interno reportó la métrica que más nos importaba.
        El tiempo dedicado a decisiones de criterio visual cada planning
        bajó de noventa minutos a quince. La diferencia eran cuatro
        versiones de un Reel hasta encontrar la que funcionaba versus
        aplicar la plantilla del manual con contenido específico de la
        semana.
      </p>
      <p>
        Tres semanas después llegó la métrica que más importaba al equipo
        de Shamusic. La dirección de marca dejó de pedir criterio cada
        jueves antes de producir contenido del fin de semana. Las plantillas
        cubrían el noventa por ciento de los casos. El diez por ciento
        restante se resolvía abriendo el capítulo correspondiente del
        manual<span className="text-lacre">.</span>
      </p>

      <h2>Lo que nos llevamos al siguiente Premium</h2>
      <p>
        Shamusic nos enseñó algo concreto sobre los manuales para marcas
        en cadencia. Una marca que publica semanalmente necesita un manual
        con plantillas, no con ejemplos. La diferencia es operativa. Un
        ejemplo demuestra que algo se puede hacer. Una plantilla garantiza
        que se va a hacer igual la próxima semana, con contenido distinto,
        sin reabrir la decisión.
      </p>
      <p>
        Y nos enseñó otra cosa. La governance no es burocracia. Es lo que
        hace que el sistema sobreviva a la rotación natural del equipo.
        Un manual sin capítulo de governance es un manual que depende de
        que la persona que lo escribió siga ahí. Un manual con governance
        es un manual que delega.
      </p>

      <h2>Si tu marca publica en cadencia</h2>
      <p>
        Shamusic describe el patrón del proyecto Premium: marca con voz
        fuerte, comunidad activa, cadencia semanal y crecimiento que pide
        delegar. La diferencia entre Profesional y Premium se ve en cuatro
        lugares: capítulo verbal extendido con mantra codificado, governance
        para terceros, sistema tipográfico de tres familias con axes
        variables, y plantillas editoriales operativas en lugar de ejemplos
        sueltos.
      </p>
      <p>
        Si quieres alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#premium">los tres tiers se ven en una
        página</Link>. Si prefieres comparar con el resto del portfolio
        antes de decidir, <Link href="/manuales">aquí están los cinco
        casos</Link>.
      </p>
    </div>
  );
}
