import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Shamusic · 58 páginas (v2 final) · Premium · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Plataforma music-tech blockchain para artistas independientes en
 * LATAM y España. El sistema central no es estético: es prueba legal.
 * Hash inmutable + fecha + certificado verificable en tres segundos.
 */
export default function CasoShamusic() {
  return (
    <div className="prose-editorial">
      <h2>Una marca cuyo diferenciador no es estético</h2>
      <p className="lede">
        Shamusic es una plataforma music-tech construida sobre blockchain
        para artistas independientes en LATAM y España. El producto hace
        una cosa concreta. Cuando un artista sube una canción, el sistema
        genera un hash inmutable, le pone fecha y emite un certificado
        verificable. En tres segundos desde la subida. Eso es lo que
        diferencia a Shamusic del resto de plataformas de música<span className="text-lacre">.</span>
      </p>
      <p>
        Eso cambia el objeto del manual. Una marca de música cuyo
        diferenciador es estético se documenta con paleta, tipografía y
        gramática editorial. Una marca cuyo diferenciador es legal —prueba
        de autoría con respaldo técnico— se documenta como sistema editorial
        y como sistema de pruebas. La diferencia entre las dos cosas son
        veinte páginas y, sobre todo, una arquitectura distinta.
      </p>

      <h2>Un hash vale más que mil pleitos</h2>
      <p>
        El tagline rector del manual es directo: un hash vale más que mil
        pleitos. No es eslogan. Es la promesa operativa del producto
        traducida a una frase que cabe en cualquier formato. El manual la
        coloca como pieza tipográfica con jerarquía de capítulo, y todo
        el sistema visual posterior se mide contra ella.
      </p>
      <p>
        Esa frase obliga a una jerarquía. La marca habla primero del
        problema —el pleito— y resuelve después con la herramienta —el
        hash. Ese orden gobierna las cincuenta y ocho páginas. Cada
        capítulo presenta un caso real y muestra cómo el sistema lo
        resuelve. La marca no se defiende explicando blockchain: se
        defiende mostrando que el certificado está firmado y se puede
        verificar.
      </p>

      <h2>El estado del sector en cifras</h2>
      <p>
        El manual documenta el contexto que justifica la existencia del
        producto. Ochenta por ciento del sector pierde dinero por no
        documentar lo que crea. Ochenta por ciento del reparto se concentra
        en los cien artistas más escuchados. En el mercado español, sesenta
        y siete por ciento de los músicos encuentra obstáculos para
        operar profesionalmente —dato 2025. Sesenta por ciento del catálogo
        en plataformas tiene menos de mil streams. Y en una plataforma
        promedio, menos del treinta por ciento de los ingresos llega al
        artista.
      </p>
      <p>
        Esos cinco datos no van al manual como argumento de venta. Van
        como diagnóstico. El sistema visual de Shamusic se diseña para
        un artista que ya sabe que el sector está roto y que está buscando
        una herramienta concreta para protegerse. La marca no le explica
        el problema: le da el instrumento.
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-03.jpg"
          alt="Shamusic — sistema tipográfico Raleway, Open Sans, Libre Baskerville y Roboto Mono"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico · Raleway display, Open Sans body, Libre
          Baskerville editorial, Roboto Mono para hash y datos
          verificables<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tres personas reales documentadas</h2>
      <p>
        El manual documenta tres personas con detalle suficiente para
        orientar contenido sin caricaturizar al lector. Mateo Vallejo
        Martín, veintiséis años, artista indie. Su canción de referencia
        es "Noche magenta", duración 3:42. Lía Ruiz, treinta y un años,
        creadora de comunidad, género trap. Su canción es "Sin pleitos",
        duración 5:01. Jorge, cuarenta y cuatro años, productor y A and R.
      </p>
      <p>
        Tres personas, tres relaciones distintas con el producto. Mateo
        sube su música y registra autoría. Lía construye comunidad y
        necesita que cada drop quede protegido legalmente sin papeleo.
        Jorge gestiona catálogo de terceros y necesita pruebas defendibles
        cuando hay disputa. Las tres personas viven en el manual porque
        Shamusic les construye contenido específico, no genérico.
      </p>

      <h2>Cuatro tipografías con función estratégica</h2>
      <p>
        El sistema final son cuatro familias con role asignado. Raleway
        para display: masthead, headlines de marca, tagline. Open Sans
        para body extenso, headlines secundarios, UI del producto. Libre
        Baskerville como serif editorial para citas, pull-quotes y
        bloques de manifiesto. Roboto Mono para datos verificables: hash,
        timestamp del certificado, ID de track, signature técnica.
      </p>
      <p>
        Cada vez que aparece la mono, el lector sabe que está mirando
        prueba —un valor que existe en blockchain y que se puede verificar
        externamente, no narrativa de marca. Esa distinción es la que
        sostiene el tagline. Si el manual repitiera el hash en sans
        editorial, el dato perdería el peso de evidencia. La mono es lo
        que permite que un certificado se lea como certificado y no como
        decoración<span className="text-lacre">.</span>
      </p>

      <h2>Seis colores con regla de proporción</h2>
      <p>
        La paleta acabó en seis tonos con role explícito. Midnight #120A25
        como base oscura para masthead editorial y dark mode del producto.
        Obsidian como secundario sobre Midnight. Magenta #CE68D2 como
        acento único de marca. Paper #FFFFFF para fondos claros y body
        sobre oscuro. Mint #6EE7B7 reservado para confirmaciones técnicas
        —certificado emitido, transacción verificada. Y Amber #FFB547
        para advertencias y acento editorial puntual.
      </p>
      <p>
        La regla operativa codificada: Magenta no aparece dos veces seguidas
        en la misma composición. Si el período está en el masthead, el del
        cuerpo se omite. Cada vez que probamos usarlo dos veces el spread
        se volvía decorativo. La marca dejaba de tener un único gesto y
        se volvía cosmética. Volvimos a la regla y la fijamos: un punto,
        una vez, al final de la frase que más pesa.
      </p>
      <p>
        Mint cumple un trabajo distinto. No es acento de marca —es signal
        de prueba. Cuando el sistema confirma que el certificado se ha
        emitido o que el hash coincide con la verificación, Mint aparece
        como marca de éxito técnico. Esa función está separada de Magenta
        y el manual la documenta así. Confundirlas convertiría el sistema
        cromático en decoración y rompería la lectura del producto.
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-05.jpg"
          alt="Shamusic — paleta cromática Midnight, Obsidian, Magenta, Paper, Mint y Amber"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático · Magenta como acento único de marca, Mint
          como signal de prueba técnica<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cómo se documenta una prueba legal en cincuenta y ocho páginas</h2>
      <p>
        El reto editorial central de Shamusic. El producto entrega una
        prueba —hash, fecha, certificado— y la marca tiene que comunicar
        esa prueba sin convertir el manual en documento legal. La solución
        codificada fue tratar el certificado como pieza de marca con la
        misma jerarquía que la portada del manual. El certificado tiene
        retícula, tipografía y reglas de uso documentadas con la misma
        seriedad con la que se documenta el wordmark.
      </p>
      <p>
        Eso obligó a una decisión incómoda. El certificado no se rediseñó
        para que pareciera elegante. Se documentó tal y como funciona
        legalmente —con su jerarquía técnica visible, con la mono reservada
        para los valores verificables, con el QR de verificación en lugar
        no negociable. La elegancia del documento es consecuencia de la
        precisión, no de la decoración. Cuando la marca quiere parecer
        legalmente seria, parecerlo no basta. Tiene que serlo.
      </p>

      <h2>Aplicaciones editoriales y aplicaciones del producto</h2>
      <p>
        El capítulo de aplicaciones cubre los dos territorios donde
        Shamusic vive. Editorial: posters de Sessions live, Reels de
        artista, social cards y stories, plantilla de campaña a sello,
        portada de la newsletter. Producto: artist profile en la
        plataforma, vista del certificado, estado de verificación, perfil
        público de canción con QR.
      </p>
      <p>
        Cada aplicación tiene tres elementos en su capítulo. Cómo se
        construye. Cómo se ve construida. Qué hacer cuando un sello
        externo o un festival impone su propio template y solo cabe pegar
        el wordmark. Esta tercera parte —reglas de excepción— es la que
        más se usa cuando el equipo entra en negociación con terceros.
        Y es la que ningún manual estándar incluye porque admitir que el
        sistema convive con sistemas ajenos parece una concesión. No lo
        es. Es lo que separa un manual usable de un manual decorativo.
      </p>

      <figure>
        <Image
          src="/portfolio/shamusic/spread-07.jpg"
          alt="Shamusic — capítulo de aplicaciones con plantillas editoriales y vista del certificado"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Aplicaciones · plantillas editoriales y vista del certificado
          con QR de verificación<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cincuenta y ocho páginas, tres rondas</h2>
      <p>
        El manual completo se entregó como Premium con tres rondas
        incluidas. La auditoría cruzada recorrió dirección creativa,
        dirección de arte, tipografía, copy y UX, con revisión técnica
        adicional sobre los componentes de prueba —certificado, QR de
        verificación, formato del hash. Las tres rondas no fueron
        cosméticas. Encontraron un certificado cuyo QR no era reproducible
        a tamaño impreso, una jerarquía de masthead que confundía un
        valor verificable con narrativa, y una aplicación donde Mint
        aparecía como decoración rompiendo su rol de signal técnico.
      </p>

      <h2>Lo que el manual cierra para Shamusic</h2>
      <p>
        Documentar el sistema completo —marca, voz, certificado,
        aplicaciones— libera al equipo de Shamusic de defender el producto
        cada vez que un artista nuevo lo prueba. La promesa "un hash vale
        más que mil pleitos" deja de ser una frase de marketing y se
        convierte en algo verificable: el lector descarga un certificado,
        escanea el QR, ve la firma. La marca no defiende el producto. Lo
        muestra<span className="text-lacre">.</span>
      </p>
      <p>
        Para un equipo que opera en LATAM y España, con artistas en
        contextos legales distintos, esa coherencia importa más que la
        elegancia. Un certificado que se reproduce igual en Buenos Aires
        que en Madrid, con la misma tipografía, el mismo hash, el mismo
        QR, es la garantía operativa de que la promesa funciona donde
        sea que opere el artista.
      </p>

      <h2>Lo que nos llevamos al siguiente Premium</h2>
      <p>
        Shamusic nos enseñó algo concreto sobre marcas con sistema técnico
        verificable. La elegancia visual no sustituye la precisión técnica:
        la sigue. Si el certificado funciona legalmente —hash correcto,
        fecha verificable, QR escaneable— la marca puede vestirlo con
        criterio editorial. Si el certificado falla técnicamente, ningún
        criterio editorial lo salva. La jerarquía de la marca se construye
        después de que la jerarquía técnica esté en pie, no antes.
      </p>

      <h2>Si tu marca tiene un diferenciador legal o técnico</h2>
      <p>
        Shamusic describe un patrón cada vez más frecuente: producto
        cuyo valor es verificable —contrato, certificado, prueba técnica—
        y marca que tiene que comunicar ese valor sin convertirse en
        documento legal. El tier Premium cubre exactamente este caso, con
        sistema visual, sistema verbal, capítulo extendido de aplicaciones
        y documentación de los componentes de prueba.
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
