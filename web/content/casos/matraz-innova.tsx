import Image from "next/image";
import Link from "next/link";

/**
 * Caso de estudio · Matraz Innova · 33 páginas + 120 assets · Profesional · 2026
 * Arc editorial: tensión inicial → decisión → resultado tangible.
 * Consultora con tres verticales — Business, Healthcare & Pharma, IT & Digital.
 * El reto fue separar tres audiencias bajo una sola identidad sin diluirla.
 */
export default function CasoMatrazInnova() {
  return (
    <div className="prose-editorial">
      <h2>Una consultora con tres verticales bajo una sola marca</h2>
      <p className="lede">
        Matraz Innova es una consultora con sede en Las Rozas de Madrid.
        Francisco Javier Tejero, Business Director, llegó al estudio con
        una pregunta clara. La firma opera tres verticales —Business
        Consulting, Healthcare and Pharma, IT and Digital— y cada una
        habla a un comprador distinto. La marca tenía que distinguir
        entre ellos sin partirse en tres<span className="text-lacre">.</span>
      </p>
      <p>
        El problema no era de tono. Era estructural. Tres verticales con
        ciclos de venta distintos, vocabularios distintos y materiales
        distintos, todos firmados por el mismo wordmark. Si el sistema
        no separaba audiencias visualmente, el cliente potencial de un
        vertical se perdía en mensajes pensados para otro. Si las separaba
        demasiado, dejaban de leerse como la misma firma.
      </p>

      <h2>La pregunta que orientó el sistema</h2>
      <p>
        La primera tentación era construir tres sub-marcas. Matraz Innova
        Business, Matraz Innova Healthcare, Matraz Innova IT. Lo descartamos
        en la primera tarde. Tres sub-marcas habrían resuelto la
        diferenciación duplicando coste de mantenimiento por tres y
        diluyendo el wordmark común que la firma quería preservar.
      </p>
      <p>
        La pregunta correcta era otra. Qué partes del sistema son comunes
        a las tres verticales y qué partes deben separarse explícitamente.
        La respuesta dio la arquitectura del manual. Wordmark, tipografía,
        retícula y tono general comparten principio. El color se separa
        por vertical. Esa decisión gobierna las treinta y tres páginas
        del manual y los ciento veinte assets que lo acompañan.
      </p>

      <h2>El logo construido sobre la geometría del matraz</h2>
      <p>
        El logo se compone de cuatro paths SVG con función separada.
        Wordmark Matraz Innova, la "i" central como pivote, el cuello
        del matraz como elemento vertical superior y el cuerpo del matraz
        como base. Esa descomposición permite usar el logo entero en
        aplicaciones primarias y solo el cuerpo del matraz como signo
        reducido en favicon, avatar y signature.
      </p>
      <p>
        El matraz no es ornamento. Es el referente del nombre y el
        elemento que la consultora ya usaba antes del manual. La decisión
        editorial no fue inventar un signo nuevo: fue limpiar el existente,
        documentar las cuatro variantes y fijar la zona de respeto. El
        manual codifica ese sistema con specs reproducibles para imprenta
        y digital.
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-04.jpg"
          alt="Matraz Innova — sistema tipográfico Inter sobre fondo dark theme premium"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema tipográfico · Inter como única familia con jerarquía
          modulada por peso para lectura sostenida<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Tres colores, una vertical cada uno</h2>
      <p>
        El sistema cromático separa las tres verticales por color. Steel
        #C0C0C8 para Business Consulting. Cyan #00B4D8 para Healthcare
        and Pharma. Violet #7B5FFF para IT and Digital. Y un acento teal
        #00D4AA común a las tres como firma de marca cuando la pieza no
        pertenece a un vertical específico.
      </p>
      <p>
        La regla operativa codificada: cada vertical usa solo su color
        más los neutros del sistema. Steel y Cyan no aparecen juntos en
        la misma composición. Cyan y Violet tampoco. Esa disciplina cromática
        permite a un cliente potencial reconocer en la primera mirada qué
        vertical le habla. Cuando el delegado entrega una propuesta a un
        director financiero, el dosier es Steel. Cuando entrega a un
        responsable IT, es Violet. La señal entra antes que el contenido.
      </p>
      <p>
        Sobre los tres colores de vertical opera el dark theme premium:
        fondo #0A0A0B como base oscura del sistema. Esa decisión de fondo
        no es estética. Es funcional. Una consultora con presentaciones
        de cliente proyectadas en sala oscurece su marca para que el
        contenido —datos, gráficos, casos— gane jerarquía sobre el
        envoltorio.
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/spread-06.jpg"
          alt="Matraz Innova — sistema cromático Steel, Cyan y Violet por vertical"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Sistema cromático · un color por vertical. Acento teal común
          como firma de marca<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Inter como sistema completo</h2>
      <p>
        El sistema tipográfico se redujo a una sola familia. Inter cubre
        wordmark, headlines, body, captions y datos. La elección priorizó
        legibilidad a tamaños pequeños —body de presentación a 16 puntos
        sobre fondo oscuro— y autoridad visual a tamaños grandes —masthead
        de propuesta a 64 puntos. La misma familia atraviesa las tres
        verticales sin reescribir el sistema cuando se cambia de Steel
        a Cyan a Violet.
      </p>
      <p>
        Sobre la tipografía opera un patrón hexagonal recurrente como
        textura de marca. Aparece en fondos secundarios, en separadores
        de capítulo y en elementos decorativos del dark theme. Ese patrón
        es la firma silenciosa del sistema cuando el color está callado.
      </p>

      <h2>Ciento veinte assets entregables</h2>
      <p>
        El manual se acompaña de un kit de aplicación con ciento veinte
        assets reproducibles. Logos en veinte variantes —monocromos sobre
        claro, monocromos sobre oscuro, color por vertical, versión
        reducida. Seis plantillas de presentación 1920 por 1080 píxeles
        para Keynote y PowerPoint. Ocho plantillas para social, Instagram
        y LinkedIn. Dos documentos plantilla, dos modelos de tarjeta,
        cuatro piezas de merchandising, ocho iconos del sistema, cinco
        favicons en distintos tamaños, dos patrones hexagonales, una
        plantilla email HTML, los tokens CSS exportables y un specimen
        tipográfico de Inter aplicado al sistema.
      </p>
      <p>
        El kit no es anexo. Es la diferencia entre un manual que se lee
        y un manual que se usa. Cuando un consultor de Matraz Innova
        prepara una propuesta para un cliente de Healthcare a las once de
        la noche del jueves, abre la plantilla Cyan y produce el documento
        sin reabrir decisiones de marca.
      </p>

      <figure>
        <Image
          src="/portfolio/matraz-innova/atmosphere-01.jpg"
          alt="Matraz Innova — kit de aplicación con plantillas de presentación y social"
          width={1756}
          height={1242}
          sizes="(min-width: 768px) 720px, 100vw"
        />
        <figcaption>
          Kit de aplicación · ciento veinte assets organizados por vertical
          y por canal<span className="text-lacre">.</span>
        </figcaption>
      </figure>

      <h2>Treinta y tres páginas, dos rondas</h2>
      <p>
        El manual completo se entregó como Profesional con dos rondas
        incluidas. Las dos rondas no fueron cosméticas. La primera encontró
        spreads donde el sistema cromático violaba su propia regla —Steel
        y Cyan apareciendo juntos en una pieza institucional. La segunda
        encontró tres assets del kit donde el patrón hexagonal contaminaba
        la legibilidad del contenido. Si las rondas no encuentran nada, el
        proceso no está haciendo su trabajo.
      </p>

      <h2>Lo que el manual cierra para Matraz Innova</h2>
      <p>
        Tres verticales con un sistema común liberan al equipo de
        renegociar criterio cada vez que cambia de cliente. La firma se
        reconoce como Matraz Innova entera, mientras que la audiencia de
        cada propuesta lee primero el color que le corresponde. El equipo
        comercial deja de inventar el envoltorio en cada propuesta y dedica
        ese tiempo al contenido específico del caso.
      </p>
      <p>
        La consultora gana otra cosa más sutil. Cuando un cliente de
        Business Consulting entra en conversación cruzada con el equipo
        de Healthcare —un proyecto que necesita las dos perspectivas— el
        sistema permite mezclar verticales con regla. Acento teal común,
        body en neutros del dark theme, color de cada vertical solo donde
        habla el especialista correspondiente. Lo que antes pedía
        improvisar identidad ahora se resuelve abriendo la página del
        manual<span className="text-lacre">.</span>
      </p>

      <h2>Lo que nos llevamos al siguiente cliente con verticales</h2>
      <p>
        Matraz Innova nos enseñó algo concreto sobre consultoras y firmas
        con varias unidades de negocio. La marca común no se defiende
        repitiendo el wordmark. Se defiende repitiendo el sistema —misma
        retícula, misma tipografía, mismo principio— y dejando que el
        color haga la separación. Cuando esa separación es cromática y
        explícita, las verticales coexisten sin diluirse. Cuando es ad
        hoc, cada propuesta vuelve a empezar desde cero.
      </p>

      <h2>Si tu firma opera con varias verticales</h2>
      <p>
        Matraz Innova describe un patrón frecuente en consultoras y
        servicios profesionales: una firma con varias unidades de negocio
        que necesitan ser distinguibles para sus respectivas audiencias
        sin dejar de leerse como la misma marca. El tier Profesional
        cubre exactamente este caso, con sistema cromático separado por
        vertical y kit de aplicación reproducible.
      </p>
      <p>
        Si quieres alcance, plazo y precio cerrados,{" "}
        <Link href="/precios#profesional">los tres tiers se ven en una
        página</Link>. Si prefieres ver el resto del portfolio antes,{" "}
        <Link href="/manuales">aquí están los cinco casos</Link>.
      </p>
    </div>
  );
}
