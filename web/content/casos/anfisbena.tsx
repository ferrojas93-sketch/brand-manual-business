import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Anfisbena · 43 páginas · Profesional · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Voz declarativa, frases cortas. Marca cuya estética nace en el taller,
 * no en Figma — el reto es codificar criterio sin congelarlo.
 */
export default function CasoAnfisbena() {
  return (
    <div className="prose-editorial">
      <h2>Una marca que vive en la costura, no en el archivo</h2>
      <p className="lede">
        Febrero de 2026. Anfisbena llevaba siete años cosiendo bien y
        documentando mal. La marca tenía tracción comercial, dos showrooms,
        una comunidad fiel. Y una contradicción: cada decisión estética
        importante ocurría en una mesa de corte, en un fitting con
        costureras, en una conversación con la fotógrafa de campaña. Casi
        ninguna llegaba al archivo<span className="text-lacre">.</span>
      </p>
      <p>
        El reto no era inventar una marca. Era documentar la que ya existía
        sin matarla. Una identidad que vive en la mano del taller no se
        captura escribiendo reglas: se captura observando dónde la mano
        repite. Lo que repite es sistema. Lo que se improvisa cada vez es
        ruido. El manual tenía que separar lo uno de lo otro.
      </p>

      <h2>La pregunta que cambió el alcance</h2>
      <p>
        El brief inicial pedía un sistema visual nuevo. La primera reunión
        de descubrimiento lo descartó. Anfisbena no necesitaba una marca
        distinta; necesitaba reconocer la suya. La pregunta correcta era
        otra: dónde tu equipo decide bien sin pensar, y dónde decide mal
        cada vez que entra alguien nuevo.
      </p>
      <p>
        La respuesta apareció auditando dos años de feed de Instagram.
        Había un patrón que ningún miembro del equipo habría podido
        verbalizar y que el feed cumplía siete de cada diez veces:
        composición axial, foto cenital sobre superficie neutra, una
        prenda por cuadro, signature en mono al pie. Lo que el equipo
        hacía bien era replicable. Solo nadie lo había escrito.
      </p>

      <h2>Tipografía como decisión, no como inventario</h2>
      <p>
        El sistema previo tenía cinco familias activas. Helvetica en web,
        Futura en etiquetas, Garamond en cartelería, una geométrica sin
        nombre en Instagram, una display que nadie recordaba haber
        comprado. El manual cerró el inventario en dos: una sans editorial
        contemporánea para narrativa y un mono para metadato.
      </p>
      <p>
        La regla mental quedó así. Cuando el lector ve sans, está leyendo
        a la marca. Cuando ve mono, está leyendo un dato verificable —
        SKU, talla, composición, gramaje, origen del tejido. La distinción
        es invisible hasta que se rompe. En cuarenta y tres páginas no se
        rompe nunca.
      </p>

      <figure>
        <Image
          src="/portfolio/anfisbena/spread-04.jpg"
          alt="Anfisbena — spread tipografía: sans editorial para narrativa, mono para dato técnico"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Capítulo tipográfico · una familia para narrar la prenda, otra
          para describirla con precisión<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Cuatro colores y una regla impopular</h2>
      <p>
        La paleta acabó en cuatro tonos. Tinta cálida para body, cream
        papel para fondos editoriales, gris medio para texto secundario,
        un acento saturado único como firma. Once tonos en uso previo —
        incluidos dos grises casi idénticos que nadie había advertido —
        quedaron reducidos a cuatro con función asignada.
      </p>
      <p>
        La regla que peleamos varias veces: el acento aparece una sola vez
        por composición. Si el punto final está en el headline, el del
        cuerpo se omite. Cada vez que probamos usarlo dos veces seguidas,
        el spread se volvía decorativo. La marca dejaba de sentirse precisa
        y empezaba a sentirse adornada. Volvimos a la regla y la fijamos.
      </p>
      <p>
        El resto del trabajo cromático es invisible. La tinta no es negro
        puro porque vibra contra el papel cálido. El gris secundario tiene
        la misma temperatura del papel para que las jerarquías respiren al
        mismo pulso. Son decisiones que solo se notan cuando faltan.
      </p>

      <figure>
        <Image
          src="/portfolio/anfisbena/atmosphere-01.jpg"
          alt="Anfisbena — paleta editorial sobre superficie neutra"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Paleta operativa · cuatro tonos, una regla, un acento que firma<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Catorce aplicaciones, una sola pregunta operativa</h2>
      <p>
        La parte más útil del manual no es teoría. Son los catorce
        capítulos de aplicación: lookbook editorial, ficha de producto
        para ecommerce, etiquetas físicas con bleed para imprenta nacional,
        carta y sobre, firma de email, packaging con pegatina signature,
        social cards cuadradas, stories verticales, signage para showroom.
      </p>
      <p>
        Cada aplicación responde una pregunta simple: qué hace alguien que
        no estuvo en la decisión cuando tiene que producir esta pieza. La
        respuesta ocupa una página y tiene tres partes. Cómo se construye.
        Cómo se ve construida. Qué hacer cuando un proveedor externo
        impone su propio template y solo cabe pegar el wordmark.
      </p>
      <p>
        Esta tercera parte es la que más usa el equipo. Y la que ningún
        manual de marca incluye, porque admitir que el sistema convive
        con sistemas ajenos parece una concesión. No lo es. Es lo que
        separa un manual usable de un manual decorativo.
      </p>

      <figure>
        <Image
          src="/portfolio/anfisbena/spread-09.jpg"
          alt="Anfisbena — capítulo de aplicaciones con piezas en producción real"
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
        El capítulo verbal lo reescribimos tres veces. Lo difícil no era
        encontrar palabras que sonaran bien. Era encontrar la forma de
        describir la prenda que coincidiera con cómo Anfisbena ya hablaba
        cuando hablaba mejor — en fitting con clientas, no en briefing
        con agencia.
      </p>
      <p>
        La conclusión, después de tres intentos, fue que la voz Anfisbena
        es descriptiva. No promete experiencias transformadoras. No invoca
        nuevas realidades. Nombra el tejido, el corte, el origen del paño,
        la decisión técnica de la pieza. Y deja que la clienta termine la
        frase.
      </p>
      <p>
        Esa voz tiene cuatro filtros. Describir antes que sugerir. Concreto
        antes que evocador. Técnico cuando proceda antes que publicitario.
        Trato directo antes que impersonal. Cada copy publicado pasa por
        los cuatro antes de salir. La mayoría no pasa al primer intento.
      </p>

      <h2>Cuarenta y tres páginas, dos rondas</h2>
      <p>
        El manual completo tomó siete días laborables. Las primeras catorce
        horas fueron arquitectura editorial: qué capítulos, qué orden, qué
        en derecha y qué en izquierda. Veintiséis horas de producción.
        Doce horas de auditoría cruzada con dirección creativa, dirección
        de arte, copy y UX.
      </p>
      <p>
        Las dos rondas no fueron cosméticas. La primera encontró cuatro
        spreads donde la jerarquía contradecía la regla del propio capítulo.
        La segunda encontró un caption en mono que estaba en sans, y dos
        excepciones de aplicación que pedían contraejemplo. Si las rondas
        no encuentran nada, el proceso no está haciendo su trabajo.
      </p>

      <h2>Lo que cambió el lunes siguiente</h2>
      <p>
        El manual entregado el jueves se aplicó al feed durante el fin de
        semana. Para el lunes, la firma de email, la ficha tipo de producto
        y la plantilla de campaña ya estaban actualizadas. El proveedor de
        etiquetas físicas recibió el capítulo correspondiente como adjunto
        del siguiente pedido. La tirada nueva ya respeta el sistema.
      </p>
      <p>
        Tres semanas después, el equipo reportó la métrica que más importa.
        El tiempo dedicado a decidir criterio visual cada semana bajó de
        cuatro horas a media hora. El manual no necesita defenderse: cuando
        surge una duda, alguien abre el capítulo y aplica la regla. La
        decisión deja de pesar sobre la fundadora<span className="text-lacre">.</span>
      </p>

      <h2>Lo que nos llevamos al siguiente cliente</h2>
      <p>
        Anfisbena nos enseñó que las marcas con tracción real no necesitan
        ser reinventadas. Necesitan ser leídas. El trabajo del manual fue
        observar dónde la mano del taller ya repetía, codificar esa
        repetición como regla y dar contraejemplos donde la marca solía
        improvisar mal.
      </p>
      <p>
        Lo que la marca ya hacía bien quedó documentado como sistema. Lo
        que hacía mal quedó identificado como excepción a corregir. La
        marca no cambió. Quedó codificada. Es una distinción más fina de
        lo que parece, y es lo que diferencia un manual usable de un
        rebrand innecesario.
      </p>

      <h2>Si tu marca está en este punto</h2>
      <p>
        Anfisbena describe un patrón frecuente: marca con años de operación,
        criterio implícito que funciona, sistema explícito que no existe.
        El tier Profesional cubre exactamente este caso.
      </p>
      <p>
        Si quieres ver el alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#profesional">los tres tiers se ven en una
        página</Link>. Si prefieres comparar con el resto del portfolio
        antes de decidir, <Link href="/manuales">aquí están los cinco
        casos</Link>.
      </p>
    </div>
  );
}
