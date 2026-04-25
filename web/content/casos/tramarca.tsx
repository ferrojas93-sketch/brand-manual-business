import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Tramarca v4 · 58 páginas · Propio · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Voz declarativa, frases cortas, sin specs en el flow principal.
 */
export default function CasoTramarca() {
  return (
    <div className="prose-editorial">
      <h2>El cliente más difícil que hemos tenido</h2>
      <p className="lede">
        Marzo de 2026. Llevábamos tres años haciendo manuales de marca
        para otros y vendiendo un sitio web que no tenía manual propio.
        La contradicción era estructural: si lo que entregamos al cliente
        merece cuarenta y ocho páginas de sistema documentado, lo nuestro
        también<span className="text-lacre">.</span>
      </p>
      <p>
        Tramarca era el cliente más difícil del portfolio porque ningún
        otro lo iba a leer con la atención que lo íbamos a leer nosotros.
        Cualquier inconsistencia se convertía en una grieta interna. Cualquier
        atajo, en una excusa para hacer el siguiente. Decidimos tratarnos
        como tratamos al cliente Premium: mismo alcance, mismo plazo, misma
        disciplina de revisión.
      </p>

      <h2>La pregunta que retrasó el arranque</h2>
      <p>
        La primera tentación era publicar rápido. Un manual ligero, veinticinco
        páginas, lo suficiente para tener algo enseñable. Lo descartamos en
        la primera tarde. Si el manual de Tramarca pesaba menos que el de
        Shamusic, el portfolio se desequilibraba. La pregunta correcta no
        era cuánto tardamos sino qué tiene que demostrar.
      </p>
      <p>
        Tenía que demostrar tres cosas concretas. Que el método aguanta
        cuando se aplica a uno mismo. Que cada decisión visible en la
        web tiene una página detrás que la justifica. Que un freelance
        con dos manos puede entregar lo que las agencias venden con
        equipos de seis.
      </p>

      <h2>Tipografía como decisión, no como spec</h2>
      <p>
        Cuatro meses de pruebas con cuatro familias. Fraunces se descartó
        por nostálgica. Inter se descartó por neutra. Terminamos en
        <strong> Satoshi</strong> para títulos y cuerpo, <strong>IBM Plex
        Mono</strong> para todo lo que es dato: paginación, fechas,
        captions, números de capítulo.
      </p>
      <p>
        La regla mental es simple. Cuando el lector ve sans está en
        narrativa. Cuando ve mono está mirando un valor verificable.
        El manual aplica esa regla en cada una de sus cincuenta y ocho
        páginas. Es lo que hace que un spread con doce números distintos
        no se sienta como un dashboard.
      </p>

      <figure>
        <Image
          src="/portfolio/tramarca/spread-04.jpg"
          alt="Tramarca v4 — spread tipografía: Satoshi para narrativa, IBM Plex Mono para dato"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo tipográfico · una familia para narrar, otra para
          marcar dato. La distinción visible sin pensarla<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Un solo color que hace ruido</h2>
      <p>
        La paleta acabó en siete tonos. Seis son neutros: papel cálido,
        dos negros, dos grises, una arena. El séptimo es el lacre. Aparece
        una sola vez por página. Siempre como punto final.
      </p>
      <p>
        Esa restricción la peleamos varias veces. Era tentador usar el
        lacre en separadores, en bordes, en iconos. Cada vez que lo
        probamos el manual perdía silencio. La marca dejaba de tener
        un único gesto y se volvía decorativa. Volvimos a la regla:
        un punto, una vez, al final de la frase que más pesa del spread.
      </p>
      <p>
        El resto del trabajo cromático es invisible. El negro principal
        no es negro puro porque vibra contra el papel cálido. El gris
        de texto secundario tiene la misma temperatura que el papel
        para que las jerarquías se sientan rítmicas, no contrastadas.
        Son decisiones que no se ven hasta que faltan.
      </p>

      <figure>
        <Image
          src="/portfolio/tramarca/spread-06.jpg"
          alt="Tramarca v4 — paleta cromática editorial con seis neutros y un acento"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático · seis neutros que callan, un acento que
          firma<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Catorce aplicaciones, una sola pregunta</h2>
      <p>
        La parte más útil del manual no es teoría. Son los catorce
        capítulos de aplicación: papelería, presentaciones en los
        tres ecosistemas que el cliente realmente usa, firma de email,
        tarjetas con bleed para imprenta nacional, social cards, signage,
        slide opener para reuniones.
      </p>
      <p>
        Cada aplicación responde una pregunta simple: qué hace alguien
        que no soy yo cuando tiene que producir esta pieza. La respuesta
        ocupa una página y tiene tres partes. Cómo se construye. Cómo
        se ve construida. Qué hacer cuando el cliente impone su propio
        template y solo cabe pegar el logo.
      </p>
      <p>
        Esta tercera parte es la que más se usa. Y es la que ningún
        manual de marca incluye, porque admitir que el sistema convive
        con sistemas ajenos parece una concesión. No lo es. Es lo que
        separa un manual usable de un manual decorativo.
      </p>

      <figure>
        <Image
          src="/portfolio/tramarca/spread-09.jpg"
          alt="Tramarca v4 — capítulo de aplicaciones con piezas reales en producción"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Aplicaciones · cada pieza con instrucción clara para alguien
          que no estuvo en la decisión<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>La voz tardó más que la paleta</h2>
      <p>
        El capítulo verbal lo reescribimos cuatro veces. Lo difícil no
        era encontrar palabras que sonaran bien. Era encontrar la forma
        de decir las cosas que coincidiera con cómo trabajamos, sin
        quedarnos en eslóganes.
      </p>
      <p>
        La conclusión, después de cuatro intentos, fue que la voz Tramarca
        es declarativa. No pregunta qué necesita la marca: nombra lo
        que hay que hacer. No propone explorar opciones: ofrece tres
        tiers definidos. No pide tiempo para entender: lee el material
        y responde con una decisión.
      </p>
      <p>
        Esa voz tiene cuatro filtros. Claro antes que sofisticado.
        Directo antes que diplomático. Concreto antes que aspiracional.
        Nombrar antes que generalizar. Cada frase publicada en tramarca.es
        pasa por los cuatro antes de salir. La mayoría no pasa al primer
        intento.
      </p>

      <h2>Cincuenta y ocho páginas, siete revisiones</h2>
      <p>
        El manual completo tomó diez días laborables. Las primeras
        dieciséis horas fueron arquitectura editorial: qué capítulos,
        qué orden, qué tiene que estar en página derecha y qué en
        izquierda. Treinta y dos horas de producción. Veinte de
        auditoría cruzada con cinco roles: dirección creativa, dirección
        de arte, tipografía, copy, UX.
      </p>
      <p>
        Las siete rondas no fueron cosméticas. Cada una encontró un
        fallo de criterio: un caption que rompía la jerarquía del
        capítulo, una aplicación con la spec equivocada, un glosario
        que se contradecía con la voz que el propio manual estaba
        defendiendo. Si las rondas no encontraran nada, el proceso
        no estaría haciendo su trabajo.
      </p>

      <h2>Lo que cambió cuando lo entregamos</h2>
      <p>
        La primera reunión con prospect dura ahora la mitad. Antes había
        que explicar qué entregamos, mostrar referencias sueltas, defender
        cada decisión por separado. Ahora se envía el manual completo
        antes de la llamada. La conversación arranca en la página doce.
      </p>
      <p>
        Vender se volvió más fácil porque vender pasó a ser enseñar.
        Quien lee las cincuenta y ocho páginas y vuelve, vuelve decidido.
        Quien no las lee, no era cliente. El manual hace una primera
        criba que antes ocupaba dos calls.
      </p>
      <p>
        El segundo cambio fue interno. Por primera vez el sistema admite
        que otra persona produzca una pieza sin pasar por el ojo del
        director. La arquitectura del manual, los catorce capítulos
        de aplicación, las reglas con su contraejemplo, hacen que la
        delegación sea operativamente posible. Antes del manual, no
        lo era<span className="text-lacre">.</span>
      </p>

      <h2>Lo que nos llevamos al siguiente manual</h2>
      <p>
        Hicimos esto para nosotros y aprendimos cosas que ya estamos
        aplicando al cliente siguiente. Que la auditoría cruzada de
        cinco roles encuentra blockers que el autor del manual no ve
        nunca. Que las reglas con contraejemplo se siguen, las reglas
        sin contraejemplo se ignoran. Que un manual sin capítulo de
        aplicación es teoría y se queda en el cajón.
      </p>
      <p>
        Y sobre todo aprendimos esto. El manual no es un documento que
        se entrega al final del proyecto. Es la herramienta que hace
        posibles los proyectos siguientes. Un cliente con manual decide
        más rápido, contrata más cosas y pelea menos las decisiones que
        él mismo aprobó.
      </p>

      <h2>Si has llegado hasta aquí</h2>
      <p>
        Este caso es el único del portfolio sin restricciones de
        confidencialidad — cliente y estudio son la misma entidad.
        Funciona como referencia técnica y como prueba de método para
        cualquier marca que quiera el mismo nivel de rigor.
      </p>
      <p>
        Los tres tiers están publicados con alcance, plazo y precio
        cerrados. Si quieres este nivel para tu marca,{" "}
        <Link href="/precios">los tres tiers se ven en una página</Link>.
        Si prefieres comparar con el resto del portfolio antes de
        decidir, <Link href="/manuales">aquí están los cinco casos</Link>.
        Si quieres entender el método antes que el caso,{" "}
        <Link href="/anatomia">la anatomía documenta los cuarenta y
        ocho componentes</Link>.
      </p>
    </div>
  );
}
