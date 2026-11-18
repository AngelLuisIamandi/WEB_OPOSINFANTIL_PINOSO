import { Topic } from "@/types/oposicion";

export const temas1a5: Topic[] = [
  {
    id: 1,
    slug: "tema-1-sistema-constitucional",
    block: "general",
    title: "El sistema constitucional y la Constitución de 1978",
    officialTitle:
      "Tema 1.- El sistema constitucional. La Constitución de 1978: estructura y contenido. Principios generales. Los derechos y deberes fundamentales.",
    summary:
      "Estudio sistemático de la Constitución Española de 1978: proceso constituyente, cronología oficial, estructura formal y material, las tres reformas constitucionales (1992, 2011 y 2024), los principios del Título Preliminar y el sistema de derechos, deberes y garantías del Título I.",
    readTimeMinutes: 25,
    normativaClave: [
      "Constitución Española de 27 de diciembre de 1978 (BOE núm. 311, de 29 de diciembre de 1978)",
      "Ley Orgánica 2/1979, de 3 de octubre, del Tribunal Constitucional",
      "Ley Orgánica 3/1981, de 6 de abril, del Defensor del Pueblo",
      "Ley Orgánica 4/1981, de 1 de junio, de los estados de alarma, excepción y sitio",
      "Reformas constitucionales de 27 de agosto de 1992 (art. 13.2), 27 de septiembre de 2011 (art. 135) y 15 de febrero de 2024 (art. 49)"
    ],
    sections: [
      {
        title: "1. El sistema constitucional y características de la Constitución de 1978",
        content: [
          "La Constitución Española de 1978 (CE) constituye la norma suprema del ordenamiento jurídico español, vértice de la pirámide normativa y fuente de validez del resto de disposiciones legales y reglamentarias. Surgió como fruto del consenso durante la Transición política, tras la aprobación de la Ley 1/1977, de 4 de enero, para la Reforma Política, y las elecciones generales del 15 de junio de 1977.",
          "Desde la perspectiva de la teoría constitucional, la Carta Magna se define como una Constitución escrita y codificada en un único texto; extensa (con 169 artículos, es la segunda más larga de nuestra historia tras la de Cádiz de 1812); de origen popular, al emanar de la soberanía nacional; rígida en cuanto a los procedimientos agravados para su reforma (Título X); consensuada y elástica, ya que permite el desarrollo legislativo por mayorías de distinto signo político mediante remisiones a leyes orgánicas y ordinarias; e inacabada o abierta respecto al modelo territorial, que dio lugar al Estado de las Autonomías.",
          "El íter cronológico de su aprobación consta de cuatro fechas esenciales que suelen ser objeto de pregunta directa en los cuestionarios oficiales de Administración Local: aprobación por los Plenos del Congreso y del Senado en sesiones separadas el 31 de octubre de 1978; ratificación por el pueblo español mediante referéndum nacional el 6 de diciembre de 1978; sanción y promulgación por el Rey Juan Carlos I ante las Cortes Generales en sesión conjunta el 27 de diciembre de 1978; y publicación y entrada en vigor el mismo día de su inserción en el Boletín Oficial del Estado el 29 de diciembre de 1978 (conforme a su Disposición Final)."
        ],
        highlights: [
          {
            title: "Las 4 fechas clave de la Constitución de 1978",
            type: "importante",
            items: [
              "31 de octubre de 1978: Aprobación del texto definitivo por los Plenos del Congreso de los Diputados y del Senado.",
              "6 de diciembre de 1978: Ratificación en referéndum nacional por el pueblo español.",
              "27 de diciembre de 1978: Sanción y promulgación real ante las Cortes Generales.",
              "29 de diciembre de 1978: Publicación en el BOE núm. 311 y entrada en vigor inmediata (Disposición Final)."
            ]
          }
        ]
      },
      {
        title: "2. Estructura formal y material de la Constitución",
        content: [
          "Atendiendo a su contenido material, la doctrina distingue tradicionalmente dos grandes bloques dentro del texto constitucional: la parte dogmática y la parte orgánica. La parte dogmática abarca el Preámbulo (sin valor normativo directo, aunque con alto valor interpretativo), el Título Preliminar (arts. 1 a 9) y el Título I (arts. 10 a 55), donde se proclaman los valores superiores, los principios constitucionales y el catálogo de derechos y deberes fundamentales. La parte orgánica comprende desde el Título II hasta el Título IX (arts. 56 a 165), regulando la arquitectura institucional del Estado (Corona, Cortes Generales, Gobierno, Poder Judicial, organización territorial y Tribunal Constitucional), cerrándose con el Título X dedicado a la reforma constitucional (arts. 166 a 169).",
          "En su estructura formal, la Constitución consta de un Preámbulo, 169 artículos distribuidos en un Título Preliminar y 10 Títulos numerados, además de 4 Disposiciones Adicionales (relativas a derechos históricos forales y régimen fiscal canario), 9 Disposiciones Transitorias (sobre regímenes preautonómicos y puesta en marcha de instituciones), 1 Disposición Derogatoria (que deroga las Leyes Fundacionales del régimen anterior y cuantas disposiciones se opongan a la CE) y 1 Disposición Final (que ordena su entrada en vigor el día de su publicación en el BOE y su difusión en las demás lenguas de España)."
        ],
        table: {
          headers: ["Título", "Denominación oficial", "Artículos", "División interna"],
          rows: [
            ["Preámbulo", "Exposición de motivos y fines del texto constitucional", "Sin art.", "Texto expositivo inicial"],
            ["Título Preliminar", "Principios generales y valores superiores", "Arts. 1 a 9", "9 artículos sin capítulos"],
            ["Título I", "De los derechos y deberes fundamentales", "Arts. 10 a 55", "Art. 10 + 5 Capítulos (Cap. II con 2 Secciones)"],
            ["Título II", "De la Corona", "Arts. 56 a 65", "Sin capítulos"],
            ["Título III", "De las Cortes Generales", "Arts. 66 a 96", "3 Capítulos (Cámaras, Elaboración leyes, Tratados)"],
            ["Título IV", "Del Gobierno y de la Administración", "Arts. 97 a 107", "Sin capítulos"],
            ["Título V", "De las relaciones entre el Gobierno y las Cortes Generales", "Arts. 108 a 116", "Sin capítulos"],
            ["Título VI", "Del Poder Judicial", "Arts. 117 a 127", "Sin capítulos"],
            ["Título VII", "Economía y Hacienda", "Arts. 128 a 136", "Sin capítulos"],
            ["Título VIII", "De la Organización Territorial del Estado", "Arts. 137 a 158", "3 Capítulos (P. Generales, Adm. Local, CCAA)"],
            ["Título IX", "Del Tribunal Constitucional", "Arts. 159 a 165", "Sin capítulos"],
            ["Título X", "De la reforma constitucional", "Arts. 166 a 169", "Sin capítulos"]
          ]
        },
        highlights: [
          {
            title: "Las 3 reformas de la Constitución Española (vía ordinaria art. 167 CE)",
            type: "legislacion",
            items: [
              "1ª Reforma (27 de agosto de 1992): Modificó el artículo 13.2 añadiendo la expresión «y pasivo» para permitir que los ciudadanos de la Unión Europea pudieran ser elegibles en las elecciones municipales, en cumplimiento del Tratado de Maastricht.",
              "2ª Reforma (27 de septiembre de 2011): Sustituyó íntegramente el artículo 135 para consagrar el principio de estabilidad presupuestaria de todas las Administraciones Públicas y la prioridad absoluta del pago de la deuda pública.",
              "3ª Reforma (15 de febrero de 2024, BOE 17/02/2024): Modificó el artículo 49 sustituyendo el término «disminuidos» por «personas con discapacidad», reforzando su inclusión, autonomía personal y atención específica a mujeres y menores con discapacidad."
            ]
          }
        ]
      },
      {
        title: "3. Principios generales del Título Preliminar (Artículos 1 a 9)",
        content: [
          "El Título Preliminar condensa las decisiones políticas fundamentales del constituyente y goza de la máxima protección frente a la reforma (procedimiento agravado del art. 168 CE). El artículo 1.1 constituye a España en un Estado social y democrático de Derecho y proclama como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político. El artículo 1.2 atribuye la soberanía nacional al pueblo español, del que emanan los poderes del Estado, mientras que el artículo 1.3 establece que la forma política del Estado español es la Monarquía parlamentaria.",
          "El artículo 2 articula el principio de unidad indisoluble de la Nación española con el reconocimiento y garantía del derecho a la autonomía de las nacionalidades y regiones que la integran y la solidaridad entre todas ellas. El artículo 3 regula el régimen lingüístico, estableciendo el castellano como lengua española oficial del Estado (con el deber de conocerla y el derecho a usarla) y la cooficialidad de las demás lenguas españolas en las respectivas Comunidades Autónomas de acuerdo con sus Estatutos (como el valenciano en el Estatuto de Autonomía de la Comunitat Valenciana). Los artículos 4 y 5 definen la bandera de España y la capitalidad del Estado en la villa de Madrid.",
          "Los artículos 6, 7 y 8 reconocen relevancia constitucional a los partidos políticos (instrumento fundamental para la participación política), a los sindicatos de trabajadores y asociaciones empresariales (defensa de intereses económicos y sociales) y a las Fuerzas Armadas (Ejército de Tierra, Armada y Ejército del Aire, cuya misión es garantizar la soberanía e independencia de España y defender su integridad territorial y el ordenamiento constitucional). A todas estas instituciones se les exige que su estructura interna y funcionamiento sean democráticos.",
          "Finalmente, el artículo 9 contiene tres apartados esenciales: el 9.1 consagra el principio de constitucionalidad o vinculación positiva y negativa de ciudadanos y poderes públicos a la Constitución y al resto del ordenamiento jurídico; el 9.2 recoge la cláusula transformadora o de igualdad material (obligación de los poderes públicos de promover las condiciones para que la libertad y la igualdad sean reales y efectivas y remover los obstáculos que impidan su plenitud); y el 9.3 garantiza siete principios técnico-jurídicos básicos del Estado de Derecho."
        ],
        highlights: [
          {
            title: "Los 7 principios garantizados en el artículo 9.3 CE",
            type: "trampa",
            items: [
              "1. Principio de legalidad.",
              "2. Jerarquía normativa.",
              "3. Publicidad de las normas.",
              "4. Irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales (¡Ojo en test!: las favorables sí pueden ser retroactivas).",
              "5. Seguridad jurídica.",
              "6. Responsabilidad de los poderes públicos.",
              "7. Interdicción (prohibición) de la arbitrariedad de los poderes públicos."
            ]
          }
        ]
      },
      {
        title: "4. Los derechos y deberes fundamentales (Título I: arts. 10 a 55)",
        content: [
          "El Título I se abre con el artículo 10, auténtico pórtico axiológico de los derechos fundamentales: el 10.1 declara que la dignidad de la persona, los derechos inviolables que le son inherentes, el libre desarrollo de la personalidad y el respeto a la ley y a los derechos de los demás son fundamento del orden político y de la paz social; el 10.2 ordena interpretar las normas relativas a derechos fundamentales de conformidad con la Declaración Universal de Derechos Humanos y los tratados internacionales ratificados por España.",
          "El Capítulo Primero («De los españoles y los extranjeros», arts. 11 a 13) regula la nacionalidad española (prohibiendo privar de ella a ningún español de origen, art. 11.2), fija la mayoría de edad a los dieciocho años (art. 12) y establece el régimen de libertades públicas de los extranjeros en España y el derecho de sufragio activo y pasivo en elecciones municipales atendiendo a criterios de reciprocidad por tratado o ley (art. 13.2).",
          "El Capítulo Segundo («Derechos y libertades», arts. 14 a 38) comienza con el artículo 14, que proclama la igualdad formal ante la ley sin discriminación alguna, y se divide en dos Secciones: la Sección 1ª («De los derechos fundamentales y de las libertades públicas», arts. 15 a 29), que contiene el núcleo duro de derechos de máxima protección (vida e integridad física art. 15, libertad ideológica y religiosa art. 16, libertad y seguridad personal con detención preventiva máxima de 72 horas y habeas corpus art. 17, honor, intimidad, propia imagen, inviolabilidad del domicilio y secreto de comunicaciones art. 18, libre residencia y circulación art. 19, libertad de expresión e información art. 20, reunión y manifestación art. 21, asociación art. 22, participación política art. 23, tutela judicial efectiva art. 24, legalidad penal art. 25, prohibición de Tribunales de Honor art. 26, derecho a la educación y libertad de enseñanza art. 27, libertad sindical y huelga art. 28, y derecho de petición art. 29); y la Sección 2ª («De los derechos y deberes de los ciudadanos», arts. 30 a 38), que incluye la defensa de España (art. 30), el deber de contribuir al sostenimiento de los gastos públicos (art. 31), el matrimonio (art. 32), la propiedad privada y herencia (art. 33), el derecho de fundación (art. 34), el deber y derecho al trabajo (art. 35), los colegios profesionales (art. 36), la negociación colectiva (art. 37) y la libertad de empresa (art. 38).",
          "El Capítulo Tercero («De los principios rectores de la política social y económica», arts. 39 a 52) recoge directrices para los poderes públicos de especial relevancia para el Técnico de Educación Infantil: protección integral de la familia y de los hijos e investigación de la paternidad, así como la protección prevista en los acuerdos internacionales que velan por los derechos de los niños (art. 39); Seguridad Social (art. 41); protección de la salud (art. 43); acceso a la cultura (art. 44); medio ambiente (art. 45); vivienda digna (art. 47); juventud (art. 48); atención e inclusión de las personas con discapacidad (art. 49 reformado en 2024); tercera edad (art. 50) y defensa de consumidores y usuarios (art. 51)."
        ]
      },
      {
        title: "5. Garantías (Cap. IV) y Suspensión de los derechos (Cap. V)",
        content: [
          "El Capítulo Cuarto (arts. 53 y 54) diseña un sistema escalonado de garantías en tres niveles según la ubicación sistemática del derecho dentro del Título I. Además, el artículo 54 crea la figura del Defensor del Pueblo como alto comisionado de las Cortes Generales, designado por éstas por mayoría de 3/5 de cada Cámara para un mandato de 5 años, con la misión de defender los derechos del Título I supervisando la actividad de la Administración (en la Comunitat Valenciana su homólogo estatutario es el Síndic de Greuges).",
          "Por su parte, el Capítulo Quinto (art. 55) regula la suspensión de determinados derechos fundamentales. La suspensión general (art. 55.1) procede cuando se acuerde la declaración del estado de excepción o de sitio (nunca en el estado de alarma, donde solo caben limitaciones de ejercicio pero no suspensión de derechos). Los derechos susceptibles de suspensión en estado de excepción o sitio son: libertad y seguridad personal (art. 17, salvo el art. 17.3 sobre derechos del detenido —información de derechos y razones de detención, no declarar y asistencia letrada—, que solo puede suspenderse en estado de sitio), inviolabilidad del domicilio y secreto de las comunicaciones (art. 18.2 y 18.3), libertad de residencia y circulación (art. 19), libertad de expresión, información y secuestro de publicaciones (art. 20.1.a, 20.1.d y 20.5), reunión y manifestación (art. 21), huelga y medidas de conflicto colectivo (arts. 28.2 y 37.2). Asimismo, el art. 55.2 contempla la suspensión individual mediante ley orgánica para personas determinadas en investigaciones sobre bandas armadas o elementos terroristas, con intervención judicial y control parlamentario, respecto al plazo máximo de detención (art. 17.2) y los derechos de inviolabilidad domiciliaria y secreto de comunicaciones (arts. 18.2 y 18.3)."
        ],
        table: {
          headers: ["Nivel de Protección (Art. 53 CE)", "Ámbito de artículos", "Garantías normativas y jurisdiccionales"],
          rows: [
            [
              "Nivel Máximo (Art. 53.1 y 53.2 CE)",
              "Art. 14 + Sección 1ª Cap. II (arts. 15 a 29) + Objeción de conciencia (art. 30.2 solo amparo)",
              "Vinculan a todos los poderes públicos; aplicación directa; reserva de Ley Orgánica (art. 81 CE); respeto al contenido esencial; procedimiento preferente y sumario ante tribunales ordinarios; Recurso de Amparo ante el Tribunal Constitucional; reforma por vía agravada (art. 168 CE para arts. 15-29)."
            ],
            [
              "Nivel Medio (Art. 53.1 CE)",
              "Sección 2ª Cap. II (arts. 30 a 38)",
              "Vinculan a todos los poderes públicos; aplicación directa; reserva de Ley ordinaria (respetando su contenido esencial); control por tribunales ordinarios y Recurso de Inconstitucionalidad; reforma por vía ordinaria (art. 167 CE)."
            ],
            [
              "Nivel Mínimo (Art. 53.3 CE)",
              "Capítulo III (Principios rectores, arts. 39 a 52)",
              "Informan la legislación positiva, la práctica judicial y la actuación de los poderes públicos. Solo pueden ser alegados ante la Jurisdicción ordinaria de acuerdo con lo que dispongan las leyes que los desarrollen."
            ]
          ]
        }
      }
    ],
    esquemaVisual: {
      title: "Arquitectura de la Constitución Española de 1978",
      nodes: [
        {
          label: "Cronología Oficial (1978)",
          children: [
            "31 octubre: Aprobación Cortes Generales",
            "6 diciembre: Ratificación en Referéndum",
            "27 diciembre: Sanción y Promulgación Real",
            "29 diciembre: Publicación BOE y entrada en vigor"
          ]
        },
        {
          label: "Estructura Formal (169 arts.)",
          children: [
            "Preámbulo + Título Preliminar (arts. 1-9) + 10 Títulos",
            "4 Disposiciones Adicionales y 9 Transitorias",
            "1 Disposición Derogatoria y 1 Final",
            "Reformas (art. 167): 1992 (art. 13.2), 2011 (art. 135), 2024 (art. 49)"
          ]
        },
        {
          label: "Título Preliminar (arts. 1-9)",
          children: [
            "Art. 1: Estado social y democrático de Derecho, soberanía nacional y Monarquía parlamentaria",
            "Art. 2: Unidad de la Nación, autonomía y solidaridad",
            "Art. 9.2: Igualdad material | Art. 9.3: 7 garantías jurídicas"
          ]
        },
        {
          label: "Título I: Derechos y Garantías (arts. 10-55)",
          children: [
            "Art. 14 + Sec. 1ª (15-29): Ley Orgánica + Preferente y sumario + Amparo TC (+30.2)",
            "Sec. 2ª (30-38): Reserva de ley ordinaria + Contenido esencial",
            "Cap. III (39-52): Principios rectores (alegables según leyes de desarrollo)",
            "Art. 54: Defensor del Pueblo | Art. 55: Suspensión en excepción y sitio"
          ]
        }
      ]
    },
    datosOro: [
      "La Constitución tiene exactamente 169 artículos, 4 Disposiciones Adicionales, 9 Transitorias, 1 Derogatoria y 1 Final.",
      "Los 4 valores superiores del ordenamiento jurídico (art. 1.1 CE) son: libertad, justicia, igualdad y pluralismo político.",
      "El Recurso de Amparo ante el Tribunal Constitucional (art. 53.2 CE) protege exclusivamente el art. 14, la Sección 1ª del Capítulo II (arts. 15 a 29) y la objeción de conciencia del art. 30.2 CE.",
      "En el estado de alarma NUNCA se suspenden derechos fundamentales; la suspensión general del art. 55.1 CE solo procede en los estados de excepción y de sitio.",
      "El artículo 17.3 CE (derechos del detenido: ser informado, guardar silencio y asistencia de abogado) NO puede suspenderse en el estado de excepción, únicamente en el estado de sitio.",
      "La tercera reforma constitucional (15 de febrero de 2024) modificó el artículo 49 CE para consagrar los derechos de las personas con discapacidad, con mención expresa a las necesidades específicas de las mujeres y los menores con discapacidad.",
      "El procedimiento agravado de reforma constitucional (art. 168 CE: mayoría de 2/3, disolución de Cortes, ratificación y referéndum obligatorio) se aplica a la revisión total o a la parcial que afecte al Título Preliminar (arts. 1-9), a la Sección 1ª del Capítulo II del Título I (arts. 15-29) o al Título II (La Corona, arts. 56-65)."
    ],
    temaDesarrollo: {
      introduccion:
        "La Constitución Española de 27 de diciembre de 1978 constituye la piedra angular de nuestro ordenamiento jurídico y la norma suprema que legitima la actuación de todos los poderes públicos, incluida la Administración Local y los servicios públicos educativos municipales. Aprobada por las Cortes el 31 de octubre, ratificada en referéndum el 6 de diciembre, sancionada el 27 de diciembre y publicada en el BOE el 29 de diciembre de 1978, la Carta Magna instaura un marco de convivencia democrática cuyos principios y derechos fundamentales informan de manera directa la labor del Técnico de Educación Infantil.",
      estructuraEpigrafes: [
        {
          epigraph: "1. El sistema constitucional y la Constitución de 1978: estructura y contenido",
          body: "Se expondrá el concepto de Constitución como norma jurídica suprema (art. 9.1 CE), sus caracteres (escrita, extensa, rígida, consensuada y derivada) y su distinción entre parte dogmática (Preámbulo, Título Preliminar y Título I) y parte orgánica (Títulos II a X). Se detallará su estructura formal de 169 artículos en un Título Preliminar y 10 Títulos, junto con sus 4 Disposiciones Adicionales, 9 Transitorias, 1 Derogatoria y 1 Final, haciendo referencia expresa a las tres reformas constitucionales aprobadas por la vía del artículo 167 CE: en 1992 (art. 13.2, sufragio pasivo municipal de ciudadanos de la UE), en 2011 (art. 135, estabilidad presupuestaria) y en febrero de 2024 (art. 49, derechos e inclusión de las personas con discapacidad)."
        },
        {
          epigraph: "2. Los principios generales del Título Preliminar (arts. 1 a 9 CE)",
          body: "Se analizará el artículo 1: la definición de España como Estado social y democrático de Derecho, los cuatro valores superiores (libertad, justicia, igualdad y pluralismo político), la soberanía nacional residente en el pueblo español y la Monarquía parlamentaria como forma política del Estado. Se abordará el principio de unidad y autonomía territorial con solidaridad (art. 2), la oficialidad del castellano y cooficialidad de las lenguas autonómicas como el valenciano (art. 3), el pluralismo político y social a través de partidos, sindicatos y asociaciones empresariales (arts. 6 y 7), la misión de las Fuerzas Armadas (art. 8) y el triple mandato del artículo 9: sujeción normativa (9.1), igualdad material y remoción de obstáculos (9.2) y los siete principios de seguridad y legalidad jurídica (9.3)."
        },
        {
          epigraph: "3. Los derechos y deberes fundamentales en el Título I: clasificación y régimen de garantías",
          body: "Partiendo de la dignidad humana y el libre desarrollo de la personalidad como fundamento del orden político (art. 10), se examinarán los cinco capítulos del Título I: nacionalidad, mayoría de edad y extranjería (Cap. I, arts. 11-13); igualdad (art. 14), derechos fundamentales y libertades públicas (Sección 1ª Cap. II, arts. 15-29, destacando el derecho a la educación del art. 27) y derechos y deberes de los ciudadanos (Sección 2ª Cap. II, arts. 30-38); y principios rectores de la política social y económica (Cap. III, arts. 39-52, subrayando la protección integral de la infancia en el art. 39 y la atención a menores con discapacidad en el art. 49). Finalmente, se explicará el triple nivel de garantías del artículo 53 (reserva de ley orgánica/ordinaria, tutela judicial preferente y sumaria y recurso de amparo ante el TC), la institución del Defensor del Pueblo (art. 54) y los supuestos de suspensión general e individual de derechos en los estados de excepción y sitio (art. 55)."
        }
      ],
      conclusion:
        "En conclusión, la Constitución de 1978 no es un mero documento programático, sino una norma jurídica directamente aplicable que vincula a todos los poderes públicos (art. 9.1 CE). En el ámbito de las Escuelas Infantiles Municipales del Ayuntamiento de Pinoso, los principios de igualdad material (art. 9.2), no discriminación (art. 14), derecho a la educación (art. 27), protección de la infancia (art. 39) e inclusión de menores con discapacidad (art. 49) constituyen el fundamento constitucional directo de la intervención socioeducativa en el primer ciclo de Educación Infantil.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (BOE núm. 311, de 29 de diciembre de 1978), con sus reformas de 1992, 2011 y 2024.",
        "Ley Orgánica 2/1979, de 3 de octubre, del Tribunal Constitucional.",
        "Ley Orgánica 3/1981, de 6 de abril, del Defensor del Pueblo.",
        "Pérez Royo, J. y Carrasco Durán, M.: Curso de Derecho Constitucional, Ed. Marcial Pons."
      ],
      consejosTribunal: [
        "Cita con exactitud las cuatro fechas de 1978 en la introducción (31 octubre, 6 diciembre, 27 diciembre y 29 diciembre).",
        "Menciona obligatoriamente la reciente reforma del artículo 49 CE de febrero de 2024, destacando que incorpora expresamente la atención a las necesidades específicas de los menores con discapacidad.",
        "Diferencia con claridad quirúrgica los tres niveles de garantías del artículo 53 CE y vincula en la conclusión los artículos 27, 39 y 49 CE con el puesto de Técnico de Educación Infantil."
      ]
    },
    questions: [
      {
        id: "t1-q1",
        topicId: 1,
        question:
          "¿En qué fechas exactas fue aprobada por los Plenos de las Cámaras, ratificada en referéndum, sancionada por el Rey y publicada en el BOE la Constitución Española de 1978?",
        options: [
          "31 de octubre, 6 de diciembre, 27 de diciembre y 29 de diciembre de 1978, respectivamente.",
          "27 de octubre, 6 de diciembre, 28 de diciembre y 30 de diciembre de 1978, respectivamente.",
          "31 de octubre, 8 de diciembre, 27 de diciembre y 29 de diciembre de 1978, respectivamente.",
          "30 de octubre, 6 de diciembre, 27 de diciembre y 1 de enero de 1979, respectivamente."
        ],
        correctIndex: 0,
        explanation:
          "La Constitución fue aprobada por los Plenos del Congreso y del Senado el 31 de octubre de 1978, ratificada en referéndum el 6 de diciembre, sancionada y promulgada por el Rey el 27 de diciembre y publicada en el BOE (entrando en vigor ese mismo día según su Disposición Final) el 29 de diciembre de 1978.",
        reference: "Preámbulo y Disposición Final de la Constitución Española de 1978",
        difficulty: "basica"
      },
      {
        id: "t1-q2",
        topicId: 1,
        question:
          "¿Cuál es la estructura formal exacta de las disposiciones finales del texto de la Constitución Española de 1978?",
        options: [
          "9 Disposiciones Adicionales, 4 Disposiciones Transitorias, 1 Derogatoria y 1 Final.",
          "4 Disposiciones Adicionales, 9 Disposiciones Transitorias, 1 Derogatoria y 1 Final.",
          "4 Disposiciones Adicionales, 9 Disposiciones Transitorias, 2 Derogatorias y 1 Final.",
          "5 Disposiciones Adicionales, 9 Disposiciones Transitorias, 1 Derogatoria y 1 Final."
        ],
        correctIndex: 1,
        explanation:
          "Además del Preámbulo y sus 169 artículos repartidos en un Título Preliminar y 10 Títulos, la CE cuenta con 4 Disposiciones Adicionales, 9 Disposiciones Transitorias, 1 Disposición Derogatoria y 1 Disposición Final.",
        reference: "Estructura de la Constitución Española de 1978",
        difficulty: "basica"
      },
      {
        id: "t1-q3",
        topicId: 1,
        question:
          "De acuerdo con el artículo 1.1 de la Constitución Española, ¿cuáles son los valores superiores del ordenamiento jurídico que propugna España como Estado social y democrático de Derecho?",
        options: [
          "La libertad, la justicia, la igualdad y la solidaridad territorial.",
          "La libertad, la justicia, la igualdad y el pluralismo político.",
          "La dignidad humana, la libertad, la igualdad y la seguridad jurídica.",
          "La legalidad, la jerarquía normativa, la igualdad y el pluralismo político."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 1.1 CE dispone literalmente que España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.",
        reference: "Artículo 1.1 de la Constitución Española",
        difficulty: "basica"
      },
      {
        id: "t1-q4",
        topicId: 1,
        question:
          "¿Cuál de los siguientes principios NO se encuentra recogido entre los garantizados expresamente por el artículo 9.3 de la Constitución Española?",
        options: [
          "La irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.",
          "La interdicción de la arbitrariedad de los poderes públicos.",
          "La desconcentración y descentralización administrativa.",
          "La responsabilidad de los poderes públicos y la seguridad jurídica."
        ],
        correctIndex: 2,
        explanation:
          "Los principios de descentralización y desconcentración pertenecen al artículo 103.1 CE (relativo a la Administración Pública). El artículo 9.3 CE garantiza: legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de disposiciones sancionadoras no favorables o restrictivas de derechos individuales, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad de los poderes públicos.",
        reference: "Artículo 9.3 y Artículo 103.1 de la Constitución Española",
        difficulty: "media"
      },
      {
        id: "t1-q5",
        topicId: 1,
        question:
          "Según el artículo 53.2 de la Constitución Española, ¿qué derechos y libertades son susceptibles de tutela a través del recurso de amparo ante el Tribunal Constitucional?",
        options: [
          "Todos los derechos reconocidos en el Capítulo Segundo del Título I (artículos 14 a 38).",
          "Únicamente los derechos reconocidos en la Sección 1ª del Capítulo Segundo del Título I (artículos 15 a 29).",
          "El principio de igualdad del artículo 14, la Sección 1ª del Capítulo Segundo (artículos 15 a 29) y la objeción de conciencia del artículo 30.2.",
          "El artículo 14, los artículos 15 a 29 y los principios rectores de los artículos 39 y 49 cuando afecten a menores."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 53.2 CE circunscribe el recurso de amparo ante el Tribunal Constitucional a las libertades y derechos reconocidos en el artículo 14 y en la Sección primera del Capítulo segundo (arts. 15 a 29), añadiendo que este último recurso será aplicable también a la objeción de conciencia reconocida en el artículo 30.2.",
        reference: "Artículo 53.2 de la Constitución Española",
        difficulty: "media"
      },
      {
        id: "t1-q6",
        topicId: 1,
        question:
          "Respecto a las reformas de la Constitución Española de 1978 hasta la actualidad, señale la afirmación correcta:",
        options: [
          "Se ha reformado en dos ocasiones: en 1992 (artículo 13.2) y en 2011 (artículo 135).",
          "Se ha reformado en tres ocasiones: en 1992 (art. 13.2), en 2011 (art. 135) y en febrero de 2024 (art. 49), todas ellas por el procedimiento ordinario del artículo 167 CE.",
          "La reforma del artículo 49 en febrero de 2024 requirió el procedimiento agravado del artículo 168 CE por pertenecer al Título I.",
          "La reforma de 1992 afectó al artículo 13.2 mediante el procedimiento agravado del artículo 168 CE."
        ],
        correctIndex: 1,
        explanation:
          "La Constitución Española ha experimentado tres reformas (1992 sobre el art. 13.2, 2011 sobre el art. 135 y febrero de 2024 sobre el art. 49). Todas se tramitaron por la vía ordinaria del artículo 167 CE, ya que ninguno de esos preceptos está incluido en el ámbito reservado al artículo 168 CE (revisión total, Título Preliminar, Sección 1ª del Cap. II del Título I o Título II).",
        reference: "Artículos 13.2, 49, 135, 167 y 168 de la Constitución Española",
        difficulty: "media"
      },
      {
        id: "t1-q7",
        topicId: 1,
        question:
          "Conforme a la redacción vigente del artículo 49 de la Constitución Española tras la reforma de 15 de febrero de 2024, ¿a qué colectivos se refiere expresamente el apartado segundo al ordenar que se atiendan sus necesidades específicas?",
        options: [
          "A las personas mayores y a las personas en situación de dependencia severa.",
          "A las mujeres y a los menores con discapacidad.",
          "A los jóvenes desempleados y a las familias numerosas.",
          "A los extranjeros residentes y a los menores en situación de desamparo."
        ],
        correctIndex: 1,
        explanation:
          "El nuevo artículo 49.2 CE establece que los poderes públicos regularán la protección especial de las personas con discapacidad para el pleno ejercicio de sus derechos y deberes y que «se atenderán particularmente las necesidades específicas de las mujeres y los menores con discapacidad».",
        reference: "Artículo 49.2 de la Constitución Española (Reforma de 15 de febrero de 2024)",
        difficulty: "alta"
      },
      {
        id: "t1-q8",
        topicId: 1,
        question:
          "Según el artículo 55.1 de la Constitución Española, ¿qué derechos del artículo 17 NO pueden ser suspendidos cuando se acuerde la declaración del estado de excepción, pudiendo suspenderse únicamente en el estado de sitio?",
        options: [
          "El plazo máximo de detención preventiva de 72 horas (art. 17.2 CE).",
          "Los derechos del detenido del artículo 17.3 CE (ser informado de sus derechos y de las razones de su detención, no ser obligado a declarar y asistencia de abogado).",
          "El procedimiento de «habeas corpus» del artículo 17.4 CE.",
          "En el estado de excepción pueden suspenderse todos los apartados del artículo 17 sin excepción alguna."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 55.1 CE exceptúa expresamente el apartado 3 del artículo 17 de la posibilidad de suspensión durante el estado de excepción; dichas garantías del detenido solo pueden ser suspendidas cuando se declare el estado de sitio.",
        reference: "Artículo 55.1 de la Constitución Española",
        difficulty: "alta"
      },
      {
        id: "t1-q9",
        topicId: 1,
        question:
          "¿En qué parte del Título I de la Constitución Española se ubica la protección integral de los hijos y de la familia, así como la protección prevista en los acuerdos internacionales que velan por los derechos de los niños (artículo 39)?",
        options: [
          "En la Sección 1ª del Capítulo Segundo, por lo que goza de reserva de Ley Orgánica y recurso de amparo.",
          "En la Sección 2ª del Capítulo Segundo, relativa a los derechos y deberes de los ciudadanos.",
          "En el Capítulo Tercero, relativo a los principios rectores de la política social y económica.",
          "En el Capítulo Primero, relativo a los españoles y los extranjeros."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 39 CE abre el Capítulo Tercero del Título I («De los principios rectores de la política social y económica», arts. 39 a 52). Conforme al art. 53.3 CE, informa la legislación positiva, la práctica judicial y la actuación de los poderes públicos.",
        reference: "Artículo 39 y Artículo 53.3 de la Constitución Española",
        difficulty: "media"
      },
      {
        id: "t1-q10",
        topicId: 1,
        question:
          "De acuerdo con el artículo 17.2 de la Constitución Española, la detención preventiva no podrá durar más del tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos y, en todo caso, en el plazo máximo de:",
        options: [
          "24 horas, el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial.",
          "48 horas, el detenido deberá ser puesto en libertad o a disposición del Ministerio Fiscal.",
          "72 horas, el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial.",
          "5 días naturales, salvo prórroga acordada por la autoridad gubernativa."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 17.2 CE establece que, en todo caso, en el plazo máximo de setenta y dos horas (72 horas), el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial.",
        reference: "Artículo 17.2 de la Constitución Española",
        difficulty: "basica"
      },
      {
        id: "t1-q11",
        topicId: 1,
        question:
          "¿Qué figura institucional regula el artículo 54 de la Constitución como alto comisionado de las Cortes Generales designado por éstas para la defensa de los derechos comprendidos en el Título I?",
        options: [
          "El Ministerio Fiscal.",
          "El Presidente del Tribunal Constitucional.",
          "El Defensor del Pueblo.",
          "El Consejo de Estado."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 54 CE regula al Defensor del Pueblo como alto comisionado de las Cortes Generales, designado por éstas para la defensa de los derechos comprendidos en el Título I, a cuyo efecto podrá supervisar la actividad de la Administración, dando cuenta a las Cortes Generales.",
        reference: "Artículo 54 de la Constitución Española",
        difficulty: "basica"
      },
      {
        id: "t1-q12",
        topicId: 1,
        question:
          "Si se pretendiera reformar el artículo 27 de la Constitución Española (derecho a la educación y libertad de enseñanza), ¿qué procedimiento de reforma constitucional debería seguirse obligatoriamente?",
        options: [
          "El procedimiento ordinario del artículo 167 CE, que exige mayoría de 3/5 de cada Cámara y referéndum solo si lo solicita una décima parte de los miembros de cualquiera de las Cámaras.",
          "El procedimiento agravado del artículo 168 CE, que exige aprobación del principio por mayoría de 2/3 de cada Cámara, disolución inmediata de las Cortes, aprobación del nuevo texto por 2/3 de las nuevas Cámaras y referéndum obligatorio.",
          "Mediante Ley Orgánica aprobada por mayoría absoluta del Congreso de los Diputados sin necesidad de reforma constitucional.",
          "El procedimiento del artículo 167 CE pero con referéndum vinculante obligatorio."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 27 CE forma parte de la Sección 1ª del Capítulo Segundo del Título I (arts. 15 a 29). Según el artículo 168.1 CE, cualquier reforma parcial que afecte al Título Preliminar, a la Sección 1ª del Capítulo Segundo del Título I o al Título II requiere el procedimiento agravado (mayoría de 2/3, disolución de Cortes, nueva mayoría de 2/3 y referéndum obligatorio).",
        reference: "Artículo 27 y Artículo 168 de la Constitución Española",
        difficulty: "alta"
      }
    ]
  },
  {
    id: 2,
    slug: "tema-2-administracion-publica-y-local",
    block: "general",
    title: "La Administración Pública y la Administración Local",
    officialTitle:
      "Tema 2.- La Administración Pública: Concepto y clases. La Administración Local: Concepto y entidades que la integran.",
    summary:
      "Análisis jurídico-constitucional de la Administración Pública (art. 103 CE y Ley 40/2015), clasificación del Sector Público (art. 2 LPACAP y LRJSP), régimen constitucional de la Administración Local (arts. 137 y 140-142 CE) y tipología de entidades locales territoriales y potestativas en la LRBRL 7/1985 y la Ley 8/2010 de la Comunitat Valenciana.",
    readTimeMinutes: 25,
    normativaClave: [
      "Constitución Española de 1978 (artículos 97, 103, 106 y 137 a 142)",
      "Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas (LPACAP, art. 2)",
      "Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público (LRJSP, arts. 2 y 3)",
      "Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL, arts. 1 a 4 y 42 a 45)",
      "Ley 8/2010, de 23 de junio, de la Generalitat, de Régimen Local de la Comunitat Valenciana",
      "Carta Europea de Autonomía Local, hecha en Estrasburgo el 15 de octubre de 1985"
    ],
    sections: [
      {
        title: "1. Concepto y principios constitucionales de la Administración Pública",
        content: [
          "Desde un punto de vista subjetivo y orgánico, la Administración Pública es el aparato organizativo dotado de personalidad jurídica propia e integrado en el Poder Ejecutivo, a través del cual se satisfacen de manera directa, objetiva y continuada los intereses generales. A diferencia del Gobierno —que ejerce la función directiva de orientación política y la potestad reglamentaria conforme al artículo 97 CE—, la Administración Pública desempeña una función eminentemente ejecutiva, gestora y prestacional bajo la dirección de aquél.",
          "El precepto nuclear que configura su estatuto constitucional es el artículo 103.1 de la Constitución Española, según el cual la Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con cinco principios organizativos y funcionales: eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho (principio de vinculación positiva a la legalidad). Este marco se completa con el artículo 106 CE, que atribuye a los Tribunales el control de la potestad reglamentaria y de la legalidad de la actuación administrativa, así como el derecho de los particulares a ser indemnizados por toda lesión que sufran en sus bienes y derechos, salvo fuerza mayor, siempre que la lesión sea consecuencia del funcionamiento de los servicios públicos (responsabilidad patrimonial).",
          "En el plano legal, el artículo 3.4 de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público (LRJSP), consagra la regla de la personalidad jurídica única: cada una de las Administraciones Públicas del artículo 2 actúa para el cumplimiento de sus fines con personalidad jurídica única. No existe, por tanto, una sola Administración, sino una pluralidad de Administraciones Públicas, gozando cada una de ellas (el Estado, cada Comunidad Autónoma, cada Ayuntamiento o Diputación) de su propia e independiente personalidad jurídica."
        ],
        highlights: [
          {
            title: "Diferencia clave de examen: Descentralización vs. Desconcentración (Art. 103.1 CE)",
            type: "trampa",
            items: [
              "Descentralización (inter-subjetiva): Transferencia de titularidad y ejercicio de competencias entre sujetos públicos distintos con personalidad jurídica propia (p. ej., del Estado a una Comunidad Autónoma o a un Ayuntamiento; o descentralización funcional hacia un Organismo Autónomo).",
              "Desconcentración (intra-orgánica): Transferencia de titularidad y/o ejercicio de competencias entre órganos jerárquicamente dependientes dentro de una MISMA Administración Pública (sin crear nueva personalidad jurídica)."
            ]
          }
        ]
      },
      {
        title: "2. Clases de Administraciones Públicas y estructura del Sector Público",
        content: [
          "Tanto el artículo 2 de la Ley 39/2015 (LPACAP) como el artículo 2 de la Ley 40/2015 (LRJSP) delimitan de forma idéntica el ámbito subjetivo del Sector Público, diferenciando entre Administraciones Públicas en sentido estricto (territoriales más determinados entes institucionales) y el resto de entidades integrantes del Sector Público Institucional que no tienen la consideración de Administración Pública.",
          "Atendiendo al criterio territorial, las Administraciones Públicas territoriales se caracterizan por proyectar sus competencias sobre toda la población que se encuentra en un territorio determinado y por perseguir una universalidad de fines públicos (generalidad de competencias). Frente a ellas, las entidades del Sector Público Institucional responden al principio de especialidad y descentralización funcional, siendo creadas por una Administración matriz para la gestión de un servicio o actividad concreta.",
          "Es fundamental para los exámenes tipo test distinguir qué entidades del Sector Público tienen la consideración legal de «Administración Pública» (art. 2.3 LPACAP/LRJSP) y cuáles forman parte del Sector Público pero NO tienen la condición de Administración Pública (como las sociedades mercantiles públicas, las fundaciones del sector público, los fondos sin personalidad jurídica o las universidades públicas no transferidas, que se rigen por su normativa específica y supletoriamente por la LPACAP)."
        ],
        table: {
          headers: ["Categoría en Ley 39/2015 y Ley 40/2015", "Entidades incluidas", "¿Tiene condición legal de Administración Pública (Art. 2.3)?"],
          rows: [
            [
              "Administraciones Territoriales (Art. 2.1.a, b, c)",
              "1. Administración General del Estado (AGE).\n2. Administraciones de las Comunidades Autónomas (p. ej. Generalitat Valenciana).\n3. Entidades que integran la Administración Local (Ayuntamiento de Pinoso, Diputación de Alicante, etc.).",
              "SÍ (Administraciones Públicas en sentido pleno y originario)."
            ],
            [
              "Sector Público Institucional con condición de AAPP (Art. 2.2.a y 2.3)",
              "Cualesquiera organismos públicos y entidades de derecho público vinculados o dependientes de las AAPP (Organismos Autónomos, Entidades Públicas Empresariales, Consorcios, Autoridades Administrativas Independientes).",
              "SÍ tienen la consideración de Administración Pública (sujetos al Derecho Administrativo en el ejercicio de potestades públicas)."
            ],
            [
              "Sector Público Institucional SIN condición de AAPP (Art. 2.2.b)",
              "Entidades de derecho privado vinculadas o dependientes de las AAPP (Sociedades Mercantiles Públicas, Fundaciones del Sector Público, Fondos carentes de personalidad jurídica).",
              "NO tienen condición de Administración Pública. Solo se sujetan a las normas de la Ley que específicamente se refieran a ellas y, en todo caso, cuando ejerzan potestades administrativas."
            ],
            [
              "Universidades Públicas (Art. 2.2.c)",
              "Universidades Públicas.",
              "NO se enumeran en el art. 2.3 como AAPP; se rigen por su normativa específica y supletoriamente por las previsiones de las Leyes 39/2015 y 40/2015."
            ]
          ]
        }
      },
      {
        title: "3. La Administración Local: concepto y marco constitucional",
        content: [
          "La Administración Local constituye el escalón administrativo más próximo al ciudadano y el cauce inmediato de participación vecinal en los asuntos públicos. La Constitución Española de 1978 la regula en el Capítulo Segundo («De la Administración Local», artículos 140, 141 y 142) del Título VIII («De la Organización Territorial del Estado»), precedido por el pórtico general del artículo 137 CE.",
          "El artículo 137 CE establece que el Estado se organiza territorialmente en municipios, en provincias y en las Comunidades Autónomas que se constituyan, añadiendo que todas estas entidades gozan de autonomía para la gestión de sus respectivos intereses. A diferencia de la autonomía política y legislativa de las Comunidades Autónomas, la autonomía local tiene naturaleza administrativa y reglamentaria (las entidades locales no aprueban leyes, sino ordenanzas y reglamentos), y está concebida por el Tribunal Constitucional como una «garantía institucional» frente al legislador estatal y autonómico, reforzada por la Carta Europea de Autonomía Local de 15 de octubre de 1985.",
          "Tres preceptos cierran el diseño constitucional local: el artículo 140 garantiza la autonomía de los municipios y su personalidad jurídica plena; el artículo 141 define la provincia como entidad local con personalidad jurídica propia determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado, encomendando su gobierno a las Diputaciones u otras Corporaciones de carácter representativo (y a los Cabildos o Consejos en los archipiélagos); y el artículo 142 consagra el principio de suficiencia financiera de las Haciendas Locales, que se nutrirán fundamentalmente de tributos propios y de participación en los del Estado y de las Comunidades Autónomas."
        ],
        highlights: [
          {
            title: "Marco normativo básico y autonómico del Régimen Local",
            type: "legislacion",
            items: [
              "Carácter bifronte del Régimen Local (STC 214/1989): El Estado dicta las bases (art. 149.1.18ª CE) a través de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL), y del Real Decreto Legislativo 781/1986 (Texto Refundido de Régimen Local).",
              "En la Comunitat Valenciana, el desarrollo legislativo corresponde al Estatuto de Autonomía (LO 5/1982, reformado por LO 1/2006) y a la Ley 8/2010, de 23 de junio, de la Generalitat, de Régimen Local de la Comunitat Valenciana."
            ]
          }
        ]
      },
      {
        title: "4. Entidades que integran la Administración Local (Art. 3 LRBRL)",
        content: [
          "El artículo 3 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL), clasifica las entidades locales en dos grandes bloques: las entidades locales territoriales de existencia obligatoria o necesaria (art. 3.1) y las demás entidades locales de carácter potestativo o contingente (art. 3.2), cuya creación depende de las Comunidades Autónomas o de la voluntad asociativa de los propios municipios.",
          "De acuerdo con el artículo 4.1 de la LRBRL, todas las entidades locales territoriales (Municipio, Provincia e Isla) ostentan, en todo caso, siete grandes potestades administrativas: a) las potestades reglamentaria y de autoorganización; b) las potestades tributaria y financiera; c) la potestad de programación o planificación; d) las potestades expropiatoria y de investigación, deslinde y recuperación de oficio de sus bienes; e) la presunción de legitimidad y la ejecutividad de sus actos; f) las potestades de ejecución forzosa y sancionadora; y g) la potestad de revisión de oficio de sus actos y acuerdos, así como las prelaciones, preferencias y prerrogativas de inembargabilidad de sus bienes y derechos afectos a un uso o servicio público.",
          "En cambio, a las entidades locales del artículo 3.2 (Comarcas, Áreas Metropolitanas y Mancomunidades), el artículo 4.2 LRBRL dispone que les corresponderán aquellas de las citadas potestades que determinen las leyes autonómicas (en el caso de Comarcas y Áreas Metropolitanas) o sus propios Estatutos (en el caso de las Mancomunidades de Municipios), y, en defecto de previsión estatutaria, todas ellas siempre que sean precisas para el cumplimiento de su fin, salvo la potestad expropiatoria (que en las Mancomunidades requiere atribución expresa)."
        ],
        table: {
          headers: ["Tipo de Entidad Local", "Entidades concretas", "Naturaleza y Regulación Legal (LRBRL / Ley 8/2010 CV)"],
          rows: [
            [
              "Entidades Locales Territoriales Obligatorias (Art. 3.1 LRBRL)",
              "1. El Municipio.\n2. La Provincia.\n3. La Isla en los archipiélagos balear y canario.",
              "De existencia constitucionalmente necesaria en todo el territorio nacional. Gozan por ley de todas las potestades del art. 4.1 LRBRL."
            ],
            [
              "Entidades Locales Potestativas / Supramunicipales (Art. 3.2 LRBRL)",
              "1. Las Comarcas u otras entidades que agrupen varios municipios (art. 42 LRBRL).\n2. Las Áreas Metropolitanas (art. 43 LRBRL).\n3. Las Mancomunidades de Municipios (art. 44 LRBRL).",
              "Comarcas: creadas por Ley de la CCAA (no pueden crearse si se oponen expresamente 2/5 de los municipios que representen al menos 1/2 del censo electoral).\nÁreas Metropolitanas: creadas por Ley de la CCAA en grandes aglomeraciones urbanas.\nMancomunidades: asociaciones voluntarias de municipios para la ejecución en común de obras y servicios determinados de su competencia (se rigen por sus Estatutos)."
            ],
            [
              "Entidades de Ámbito Territorial Inferior al Municipio - EATIM (Art. 24 bis LRBRL y Título IV Ley 8/2010 CV)",
              "Caseríos, parroquias, aldeas, barrios, anteiglesias, concejos, pedanías, lugares anejos.",
              "Tras la Ley 27/2013 (LRSAL), las de nueva creación carecen de personalidad jurídica y son órganos de gestión desconcentrada para la administración de núcleos de población separados. Las existentes antes de 2013 conservaron su personalidad jurídica."
            ]
          ]
        }
      }
    ],
    esquemaVisual: {
      title: "Mapa de las Administraciones Públicas y Entidades Locales",
      nodes: [
        {
          label: "Principios Constitucionales (Art. 103.1 CE)",
          children: [
            "Servicio con objetividad a los intereses generales",
            "5 principios: Eficacia, Jerarquía, Descentralización, Desconcentración y Coordinación",
            "Sometimiento pleno a la ley y al Derecho + Personalidad jurídica única (Art. 3.4 LRJSP)"
          ]
        },
        {
          label: "Clasificación del Sector Público (Art. 2 Ley 39/2015 y 40/2015)",
          children: [
            "AAPP Territoriales: AGE + CCAA + Entidades de la Administración Local",
            "Sector Público Institucional CON condición de AAPP: Organismos Públicos (OA y EPE) y Entidades de Derecho Público",
            "Sector Público Institucional SIN condición de AAPP: Entidades de Derecho Privado (Sociedades, Fundaciones) + Universidades Públicas"
          ]
        },
        {
          label: "Entidades Locales Territoriales Obligatorias (Art. 3.1 LRBRL)",
          children: [
            "El Municipio (Art. 140 CE: personalidad jurídica plena)",
            "La Provincia (Art. 141 CE: personalidad jurídica propia, gobierno por Diputaciones)",
            "La Isla en los archipiélagos balear y canario (Cabildos y Consejos Insulares)"
          ]
        },
        {
          label: "Entidades Locales Potestativas (Art. 3.2 LRBRL y Ley 8/2010 CV)",
          children: [
            "Comarcas (Art. 42 LRBRL: agrupación por intereses comunes, veto de 2/5 municipios con 1/2 censo)",
            "Áreas Metropolitanas (Art. 43 LRBRL: grandes aglomeraciones urbanas, creadas por Ley autonómica)",
            "Mancomunidades de Municipios (Art. 44 LRBRL: asociación voluntaria para obras/servicios comunes)",
            "Entidades Locales Menores / EATIM (Art. 24 bis LRBRL: gestión desconcentrada de núcleos separados)"
          ]
        }
      ]
    },
    datosOro: [
      "Los 5 principios de actuación de la Administración Pública del artículo 103.1 CE son: eficacia, jerarquía, descentralización, desconcentración y coordinación.",
      "El artículo 140 CE atribuye a los municipios personalidad jurídica PLENA, mientras que el artículo 141 CE atribuye a las provincias personalidad jurídica PROPIA (pregunta clásica literal de examen).",
      "Las 3 Entidades Locales Territoriales obligatorias del artículo 3.1 LRBRL son exclusivamente: el Municipio, la Provincia y la Isla en los archipiélagos balear y canario.",
      "Las Comarcas, las Áreas Metropolitanas y las Mancomunidades de Municipios son entidades locales del artículo 3.2 LRBRL (potestativas).",
      "Según el artículo 42.2 LRBRL, no podrá crearse la comarca si a ello se oponen expresamente las dos quintas partes (2/5) de los municipios que debieran agruparse en ella, siempre que representen al menos la mitad (1/2) del censo electoral del territorio correspondiente.",
      "Las Mancomunidades de Municipios (art. 44 LRBRL) tienen personalidad y capacidad jurídica para el cumplimiento de sus fines específicos y se rigen por sus propios Estatutos, pero NO pueden asumir la totalidad de las competencias asignadas a los municipios.",
      "En el artículo 2 de las Leyes 39/2015 y 40/2015, las entidades de derecho privado vinculadas o dependientes de las AAPP forman parte del Sector Público Institucional, pero NO tienen la consideración de Administración Pública."
    ],
    temaDesarrollo: {
      introduccion:
        "La configuración de la Administración Pública en el Estado social y democrático de Derecho (art. 1.1 CE) responde a la necesidad de contar con una organización profesionalizada y permanente que sirva con objetividad los intereses generales bajo el principio de legalidad (art. 103.1 CE). Dentro de la estructura territorial del Estado diseñada en el Título VIII de la Constitución, la Administración Local ocupa una posición vertebradora esencial como nivel de gobierno más cercano a la ciudadanía, marco en el que se encuadra el Ayuntamiento de Pinoso y la prestación del servicio público de Educación Infantil.",
      estructuraEpigrafes: [
        {
          epigraph: "1. La Administración Pública: concepto, caracteres y principios constitucionales",
          body: "Se definirá la Administración Pública diferenciándola del Gobierno (arts. 97 y 103 CE) y explicando el principio de personalidad jurídica única de cada Administración (art. 3.4 de la Ley 40/2015, LRJSP). Se desglosarán los principios del artículo 103.1 CE (objetividad en el servicio a los intereses generales, eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho), así como el control jurisdiccional y el régimen de responsabilidad patrimonial del artículo 106 CE y los principios de buena administración, transparencia y servicio efectivo a los ciudadanos del artículo 3 de la LRJSP."
        },
        {
          epigraph: "2. Clases de Administraciones Públicas y delimitación del Sector Público",
          body: "Con arreglo al artículo 2 de la Ley 39/2015 (LPACAP) y de la Ley 40/2015 (LRJSP), se expondrá la clasificación tripartita de las Administraciones Territoriales (Administración General del Estado, Administraciones de las Comunidades Autónomas y Entidades que integran la Administración Local) y la composición del Sector Público Institucional (organismos públicos y entidades de derecho público —como Organismos Autónomos, Entidades Públicas Empresariales, Consorcios y Autoridades Administrativas Independientes—, entidades de derecho privado y Universidades Públicas), precisando cuáles ostentan la condición legal de Administración Pública conforme al artículo 2.3."
        },
        {
          epigraph: "3. La Administración Local: concepto, garantía constitucional y entidades que la integran",
          body: "Se analizará el régimen constitucional de la Administración Local en los artículos 137, 140 (autonomía municipal y personalidad jurídica plena), 141 (provincia y Diputaciones) y 142 (suficiencia financiera de las Haciendas Locales), junto con la Carta Europea de Autonomía Local de 1985 y el carácter bifronte de su regulación (Ley 7/1985 LRBRL y Ley 8/2010 de Régimen Local de la Comunitat Valenciana). Finalmente, se detallarán las entidades locales del artículo 3 de la LRBRL: las territoriales obligatorias (Municipio, Provincia e Isla, titulares de las potestades del art. 4.1) y las potestativas (Comarcas del art. 42, Áreas Metropolitanas del art. 43 y Mancomunidades de Municipios del art. 44), así como los entes de gestión desconcentrada de ámbito inferior al municipio (art. 24 bis LRBRL)."
        }
      ],
      conclusion:
        "En suma, la pluralidad de Administraciones Públicas en España se articula sobre los principios de autonomía, descentralización y coordinación. La Administración Local, encabezada por el Municipio como entidad básica de la organización territorial del Estado, materializa de forma inmediata el servicio objetivo a los intereses generales de los vecinos, haciendo efectivos derechos sociales y educativos fundamentales en el ámbito municipal.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (artículos 103, 106 y 137 a 142).",
        "Ley 39/2015, de 1 de octubre, LPACAP y Ley 40/2015, de 1 de octubre, LRJSP.",
        "Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL).",
        "Ley 8/2010, de 23 de junio, de la Generalitat, de Régimen Local de la Comunitat Valenciana."
      ],
      consejosTribunal: [
        "Destaca con precisión el contraste literal entre el art. 140 CE (personalidad jurídica PLENA del municipio) y el art. 141 CE (personalidad jurídica PROPIA de la provincia).",
        "Al exponer el artículo 2 de las Leyes 39/2015 y 40/2015, subraya qué entes del Sector Público Institucional tienen la consideración de Administración Pública (organismos públicos y entidades de derecho público) y cuáles no (entidades de derecho privado).",
        "Cita expresamente la Ley 8/2010, de 23 de junio, de Régimen Local de la Comunitat Valenciana para demostrar dominio del marco normativo autonómico aplicable al Ayuntamiento de Pinoso."
      ]
    },
    questions: [
      {
        id: "t2-q1",
        topicId: 2,
        question:
          "De acuerdo con el artículo 103.1 de la Constitución Española, la Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con los principios de:",
        options: [
          "Legalidad, jerarquía normativa, publicidad, seguridad jurídica y responsabilidad.",
          "Eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.",
          "Eficiencia, transparencia, participación, desconcentración y autonomía local.",
          "Eficacia, economía, suficiencia financiera, descentralización y lealtad institucional."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 103.1 CE establece literalmente que la Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con los principios de eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.",
        reference: "Artículo 103.1 de la Constitución Española",
        difficulty: "basica"
      },
      {
        id: "t2-q2",
        topicId: 2,
        question:
          "Según el artículo 2.3 de la Ley 39/2015 (LPACAP) y de la Ley 40/2015 (LRJSP), ¿cuál de los siguientes entes integrantes del sector público NO tiene la consideración de Administración Pública?",
        options: [
          "La Administración General del Estado y las Administraciones de las Comunidades Autónomas.",
          "Las Entidades que integran la Administración Local.",
          "Los organismos públicos y entidades de derecho público vinculados o dependientes de las Administraciones Públicas.",
          "Las entidades de derecho privado vinculadas o dependientes de las Administraciones Públicas (como las sociedades mercantiles públicas o fundaciones del sector público)."
        ],
        correctIndex: 3,
        explanation:
          "Conforme al artículo 2.3 de las Leyes 39/2015 y 40/2015, tienen la consideración de Administraciones Públicas la AGE, las Administraciones de las CCAA, las Entidades que integran la Administración Local, así como los organismos públicos y entidades de derecho público previstos en la letra a) del apartado 2. Las entidades de derecho privado de la letra b) forman parte del Sector Público Institucional, pero no tienen la condición de Administración Pública.",
        reference: "Artículo 2 de la Ley 39/2015 y Artículo 2 de la Ley 40/2015",
        difficulty: "media"
      },
      {
        id: "t2-q3",
        topicId: 2,
        question:
          "¿Cómo califica literalmente la Constitución Española la personalidad jurídica de los municipios (art. 140 CE) y de las provincias (art. 141 CE)?",
        options: [
          "Personalidad jurídica propia para los municipios y personalidad jurídica plena para las provincias.",
          "Personalidad jurídica plena para los municipios y personalidad jurídica propia para las provincias.",
          "Personalidad jurídica única tanto para los municipios como para las provincias.",
          "Personalidad jurídica originaria para los municipios y personalidad jurídica derivada para las provincias."
        ],
        correctIndex: 1,
        explanation:
          "Es una distinción clásica en exámenes oficiales: el artículo 140 CE dispone que «Los municipios gozarán de personalidad jurídica plena», mientras que el artículo 141.1 CE establece que «La provincia es una entidad local con personalidad jurídica propia».",
        reference: "Artículos 140 y 141.1 de la Constitución Española",
        difficulty: "media"
      },
      {
        id: "t2-q4",
        topicId: 2,
        question:
          "Conforme al artículo 3.1 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL), son entidades locales territoriales:",
        options: [
          "El Municipio, la Provincia, la Isla y las Comarcas.",
          "El Municipio, la Provincia y la Isla en los archipiélagos balear y canario.",
          "El Municipio, la Provincia, las Mancomunidades de Municipios y las Áreas Metropolitanas.",
          "Únicamente el Municipio y la Provincia."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 3.1 de la LRBRL enumera de forma tasada las entidades locales territoriales obligatorias: a) El Municipio, b) La Provincia, y c) La Isla en los archipiélagos balear y canario. Las Comarcas, Áreas Metropolitanas y Mancomunidades se regulan en el artículo 3.2 como entidades locales potestativas.",
        reference: "Artículo 3.1 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t2-q5",
        topicId: 2,
        question:
          "De acuerdo con el artículo 42.2 de la Ley 7/1985 (LRBRL), ¿en qué supuesto NO podrá crearse una comarca por la Comunidad Autónoma?",
        options: [
          "Si a ello se oponen expresamente la mitad de los municipios que debieran agruparse en ella, cualquiera que sea su población.",
          "Si a ello se oponen expresamente las dos quintas partes (2/5) de los municipios que debieran agruparse en ella, siempre que, en este caso, tales municipios representen al menos la mitad (1/2) del censo electoral del territorio correspondiente.",
          "Si a ello se oponen expresamente las tres quintas partes (3/5) de los municipios afectados o la Diputación Provincial respectiva.",
          "Si a ello se opone cualquier municipio de más de 20.000 habitantes incluido en su ámbito territorial."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 42.2 LRBRL establece que no podrá crearse la comarca si a ello se oponen expresamente las dos quintas partes de los municipios que debieran agruparse en ella, siempre que tales municipios representen al menos la mitad del censo electoral del territorio correspondiente.",
        reference: "Artículo 42.2 de la Ley 7/1985 (LRBRL)",
        difficulty: "alta"
      },
      {
        id: "t2-q6",
        topicId: 2,
        question:
          "Según el artículo 44 de la Ley 7/1985 (LRBRL), las asociaciones voluntarias de municipios para la ejecución en común de obras y servicios determinados de su competencia reciben la denominación de:",
        options: [
          "Consorcios locales interadministrativos.",
          "Áreas Metropolitanas.",
          "Mancomunidades de municipios.",
          "Comarcas municipales."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 44.1 de la LRBRL reconoce a los municipios el derecho a asociarse con otros en mancomunidades para la ejecución en común de obras y servicios determinados de su competencia. Tienen personalidad y capacidad jurídicas para el cumplimiento de sus fines específicos y se rigen por sus Estatutos propios.",
        reference: "Artículo 44 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t2-q7",
        topicId: 2,
        question:
          "¿A qué órgano corresponde la creación, modificación o supresión de las Áreas Metropolitanas según el artículo 43.1 de la Ley 7/1985 (LRBRL)?",
        options: [
          "Al Consejo de Ministros mediante Real Decreto, a iniciativa de las Diputaciones Provinciales.",
          "A las Comunidades Autónomas, mediante Ley, previa audiencia de la Administración del Estado y de los Ayuntamientos y Diputaciones afectados.",
          "Al Pleno de los Ayuntamientos interesados mediante acuerdo adoptado por mayoría absoluta, sin necesidad de Ley autonómica.",
          "A la Diputación Provincial correspondiente mediante Norma Foral u Ordenanza provincial."
        ],
        correctIndex: 1,
        explanation:
          "Según el artículo 43.1 LRBRL, las Comunidades Autónomas, previa audiencia de la Administración del Estado y de los Ayuntamientos y Diputaciones afectados, podrán crear, modificar y suprimir, mediante Ley, áreas metropolitanas, de acuerdo con lo dispuesto en sus respectivos Estatutos.",
        reference: "Artículo 43.1 de la Ley 7/1985 (LRBRL)",
        difficulty: "media"
      },
      {
        id: "t2-q8",
        topicId: 2,
        question:
          "En relación con el principio constitucional del artículo 142 CE sobre las Haciendas Locales, ¿cuál es el principio rector que debe garantizar que las Corporaciones locales dispongan de medios suficientes para el desempeño de sus funciones?",
        options: [
          "El principio de soberanía tributaria originaria de los municipios.",
          "El principio de suficiencia financiera, nutriéndose fundamentalmente de tributos propios y de participación en los del Estado y de las Comunidades Autónomas.",
          "El principio de autofinanciación exclusiva mediante tasas y precios públicos municipales.",
          "El principio de solidaridad interprovincial gestionado por el Tribunal de Cuentas."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 142 CE consagra el principio de suficiencia financiera: las Haciendas locales deberán disponer de los medios suficientes para el desempeño de las funciones que la ley atribuye a las Corporaciones respectivas y se nutrirán fundamentalmente de tributos propios y de participación en los del Estado y de las Comunidades Autónomas.",
        reference: "Artículo 142 de la Constitución Española",
        difficulty: "basica"
      },
      {
        id: "t2-q9",
        topicId: 2,
        question:
          "De acuerdo con el artículo 24 bis de la Ley 7/1985 (introducido por la Ley 27/2013, LRSAL), los entes de ámbito territorial inferior al Municipio que se creen para la administración descentralizada de núcleos de población separados:",
        options: [
          "Gozan de personalidad jurídica plena e independiente de la del Municipio matriz.",
          "Carecen de personalidad jurídica, como forma de organización desconcentrada del Municipio, y su iniciativa corresponde indistintamente a la población interesada o al Ayuntamiento correspondiente.",
          "Tienen la consideración de entidades locales territoriales del artículo 3.1 de la LRBRL.",
          "Están prohibidos en todo el territorio nacional desde el año 2013."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 24 bis LRBRL dispone que las leyes de las CCAA sobre régimen local regularán los entes de ámbito territorial inferior al Municipio, que carecerán de personalidad jurídica, como forma de organización desconcentrada del mismo para la administración de núcleos de población separados (sin perjuicio de que los constituidos antes de la entrada en vigor de la Ley 27/2013 conservaran su personalidad jurídica).",
        reference: "Artículo 24 bis de la Ley 7/1985 (LRBRL)",
        difficulty: "alta"
      },
      {
        id: "t2-q10",
        topicId: 2,
        question:
          "Según el artículo 3.4 de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público (LRJSP), cada una de las Administraciones Públicas del artículo 2 actúa para el cumplimiento de sus fines con:",
        options: [
          "Personalidad jurídica compartida con el Gobierno de la Nación.",
          "Personalidad jurídica única.",
          "Capacidad de obrar limitada al Derecho privado.",
          "Personalidad jurídica delegada del Poder Legislativo."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 3.4 de la Ley 40/2015 establece textualmente que «Cada una de las Administraciones Públicas del artículo 2 actúa para el cumplimiento de sus fines con personalidad jurídica única».",
        reference: "Artículo 3.4 de la Ley 40/2015 (LRJSP)",
        difficulty: "basica"
      },
      {
        id: "t2-q11",
        topicId: 2,
        question:
          "¿Cuál de las siguientes potestades NO está atribuida a las Entidades Locales Territoriales en el artículo 4.1 de la Ley 7/1985 (LRBRL)?",
        options: [
          "Las potestades reglamentaria y de autoorganización.",
          "La potestad legislativa para dictar leyes ordinarias y decretos legislativos de ámbito municipal.",
          "Las potestades expropiatoria y de investigación, deslinde y recuperación de oficio de sus bienes.",
          "Las potestades de ejecución forzosa y sancionadora."
        ],
        correctIndex: 1,
        explanation:
          "Las Entidades Locales carecen de potestad legislativa (reservada a las Cortes Generales y a las Asambleas Legislativas de las Comunidades Autónomas). Su potestad normativa es de rango exclusivamente reglamentario (ordenanzas, reglamentos y bandos), conforme al artículo 4.1.a) de la LRBRL.",
        reference: "Artículo 4.1 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t2-q12",
        topicId: 2,
        question:
          "Según el artículo 141.2 y 141.4 de la Constitución Española, el gobierno y la administración autónoma de las provincias estarán encomendados a Diputaciones u otras Corporaciones de carácter representativo, mientras que en los archipiélagos las islas tendrán además su administración propia en forma de:",
        options: [
          "Veguerías o Consejos Comarcales en ambos archipiélagos.",
          "Cabildos o Consejos.",
          "Juntas Generales y Diputaciones Forales.",
          "Mancomunidades Insulares."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 141.4 CE dispone literalmente que «En los archipiélagos, las islas tendrán además su administración propia en forma de Cabildos o Consejos» (Cabildos Insulares en Canarias y Consejos Insulares en Illes Balears).",
        reference: "Artículo 141.4 de la Constitución Española",
        difficulty: "media"
      }
    ]
  },
  {
    id: 3,
    slug: "tema-3-el-municipio",
    block: "general",
    title: "El Municipio: elementos, organización y competencias",
    officialTitle:
      "Tema 3.- El Municipio: concepto y elementos. El término municipal. La población: especial referencia al empadronamiento. La organización. Competencias municipales. El alcalde. La Junta de Gobierno Local. El Ayuntamiento Pleno. Competencias de cada órgano municipal.",
    summary:
      "Estudio integral de la entidad básica local (LRBRL 7/1985 y Ley 8/2010 CV): concepto y elementos constitutivos (término municipal, población/Padrón y organización), tipología de competencias y servicios mínimos obligatorios por tramos demográficos, y distribución de atribuciones entre Alcaldía, Pleno y Junta de Gobierno Local.",
    readTimeMinutes: 30,
    normativaClave: [
      "Constitución Española de 1978 (artículo 140)",
      "Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL, Títulos II y V)",
      "Ley 8/2010, de 23 de junio, de la Generalitat, de Régimen Local de la Comunitat Valenciana",
      "Real Decreto 1690/1986, de 11 de julio, Reglamento de Población y Demarcación Territorial de las Entidades Locales",
      "Real Decreto 2568/1986, de 28 de noviembre, Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales (ROF)"
    ],
    sections: [
      {
        title: "1. Concepto y elementos del Municipio. El término municipal",
        content: [
          "De acuerdo con los artículos 1.1 y 11.1 de la Ley 7/1985 (LRBRL), en consonancia con el artículo 140 CE, el Municipio es la entidad local básica de la organización territorial del Estado y el cauce inmediato de participación ciudadana en los asuntos públicos, gozando de autonomía y personalidad jurídica plena. El artículo 11.2 LRBRL identifica sus tres elementos constitutivos esenciales: el territorio (término municipal), la población y la organización.",
          "El término municipal (art. 12 LRBRL) es el ámbito físico donde el Ayuntamiento ejerce sus competencias, y cada municipio pertenece a una única provincia. La creación, supresión o alteración de términos municipales (por incorporación, fusión o segregación, art. 13 LRBRL) se regula por la legislación autonómica (en la Comunitat Valenciana, la Ley 8/2010), sin que nunca pueda suponer modificación de los límites provinciales. Requiere audiencia de los municipios interesados, dictamen del Consejo de Estado u órgano consultivo autonómico (Consell Jurídic Consultiu de la Comunitat Valenciana), informe de la Administración que ejerza la tutela financiera y comunicación a la Administración General del Estado para su inscripción en el Registro de Entidades Locales.",
          "Tras la reforma operada por la Ley 27/2013 (LRSAL), el artículo 13.2 LRBRL exige para la creación de nuevos municipios la existencia de núcleos de población territorialmente diferenciados de, al menos, 5.000 habitantes, siempre que los municipios resultantes sean financieramente sostenibles y cuenten con recursos suficientes para cumplir las competencias municipales sin merma de la calidad de los servicios (la Ley 8/2010 CV prevé además especificidades históricas o geográficas dentro del marco básico). Asimismo, el art. 13.4 regula los convenios de fusión voluntaria entre municipios colindantes de la misma provincia."
        ]
      },
      {
        title: "2. La población municipal y el Padrón de habitantes",
        content: [
          "Toda persona que viva en España está obligada a inscribirse en el Padrón del municipio en el que resida habitualmente; quien resida en varios municipios debe inscribirse únicamente en aquel en que habite durante más tiempo al año (art. 15 LRBRL). El conjunto de personas inscritas en el Padrón integra la población del municipio, y los inscritos ostentan la condición jurídica de vecinos desde el mismo momento de su inscripción, que constituye prueba de la residencia en el municipio y del domicilio habitual.",
          "El Padrón municipal (art. 16 LRBRL) es un registro administrativo gestionado por el Ayuntamiento por medios informáticos, bajo la coordinación y supervisión del Instituto Nacional de Estadística (INE). Sus datos son confidenciales y solo pueden cederse a otras Administraciones cuando sean necesarios para el ejercicio de sus competencias y exclusivamente para asuntos en los que la residencia o el domicilio sean datos relevantes.",
          "Los datos de inscripción obligatoria en el Padrón (art. 16.2 LRBRL) son seis bloques: 1) nombre y apellidos; 2) sexo; 3) domicilio habitual; 4) nacionalidad; 5) lugar y fecha de nacimiento; y 6) número de DNI (o para extranjeros, NIE en vigor o número de pasaporte/documento de identidad) junto con el certificado o título escolar o académico que se posea. Respecto a los extranjeros no comunitarios sin autorización de residencia de larga duración (ENCSARP), el artículo 16.1 párrafo segundo exige la renovación periódica de su inscripción cada 2 años, declarándose su caducidad sin necesidad de audiencia previa si no se renueva.",
          "El artículo 18 LRBRL reconoce a los vecinos derechos y deberes fundamentales: ser elector y elegible según la legislación electoral; participar en la gestión municipal; utilizar los servicios públicos municipales y acceder a los aprovechamientos comunales; contribuir mediante prestaciones económicas y personales legalmente previstas; ser informado, previa petición razonada, y dirigir solicitudes a la Administración municipal en relación con todos los expedientes y documentación municipal; pedir la consulta popular (que requiere acuerdo por mayoría absoluta del Pleno y autorización del Gobierno de la Nación, salvo en asuntos relativos a la Hacienda Local, art. 71 LRBRL); exigir la prestación y, en su caso, el establecimiento del correspondiente servicio público obligatorio; y ejercer la iniciativa popular (suscrita al menos por el 20 % de vecinos en municipios de hasta 5.000 hab., el 15 % entre 5.001 y 20.000 hab. —tramo de Pinoso—, y el 10 % a partir de 20.001 hab., según el art. 70 bis LRBRL)."
        ],
        highlights: [
          {
            title: "Reglas de oro sobre el Padrón Municipal (Arts. 15-17 LRBRL)",
            type: "trampa",
            items: [
              "Renovación cada 2 años: Solo obligatoria para extranjeros NO comunitarios SIN autorización de residencia de larga duración (ENCSARP). Su falta de renovación produce baja por caducidad mediante resolución motivada del Alcalde sin necesidad de audiencia previa.",
              "Baja de oficio por inscripción indebida: Requiere informe favorable del Consejo de Empadronamiento y audiencia al interesado.",
              "Inscripción de extranjeros: No constituye prueba de su residencia legal en España ni les atribuye ningún derecho que no les confiera la legislación vigente (art. 18.2 LRBRL)."
            ]
          }
        ]
      },
      {
        title: "3. La organización municipal: órganos necesarios y complementarios",
        content: [
          "El Gobierno y la administración municipal, salvo en aquellos municipios que legalmente funcionen en régimen de Concejo Abierto (donde el gobierno corresponde a un Alcalde y una Asamblea vecinal de la que forman parte todos los electores, art. 29 LRBRL), corresponden al Ayuntamiento, integrado por el Alcalde y los Concejales (art. 19 LRBRL).",
          "El artículo 20.1 de la LRBRL establece qué órganos son de existencia obligatoria en los Ayuntamientos de régimen común, distinguiendo un umbral demográfico clave situado en los 5.000 habitantes (superado por el municipio de Pinoso, que cuenta con más de 8.000 habitantes y una corporación de 13 concejales según la escala del art. 179 LOREG para el tramo de 5.001 a 10.000 residentes)."
        ],
        table: {
          headers: ["Tipo de Órgano (Art. 20 LRBRL)", "Ámbito de municipios", "Composición y función principal"],
          rows: [
            [
              "Alcalde, Tenientes de Alcalde y Pleno",
              "Existen en TODOS los Ayuntamientos.",
              "Órganos de gobierno ejecutivo (Alcalde y Tenientes de Alcalde) y órgano colegiado supremo de representación política (Pleno)."
            ],
            [
              "Comisión Especial de Cuentas",
              "Existe en TODOS los Municipios (Art. 20.1.e y 116 LRBRL).",
              "Integrada por miembros de todos los grupos políticos municipales. Examina, estudia e informa las cuentas anuales antes de que se sometan al Pleno (antes del 1 de junio)."
            ],
            [
              "Junta de Gobierno Local",
              "Obligatoria en municipios > 5.000 hab. (como Pinoso); en los de ≤ 5.000 hab. solo si lo dispone su Reglamento Orgánico o lo acuerda el Pleno.",
              "Integrada por el Alcalde y un número de Concejales no superior al tercio (1/3) del número legal de los mismos, nombrados y separados libremente por el Alcalde dando cuenta al Pleno."
            ],
            [
              "Órganos de estudio, informe y consulta (Comisiones Informativas)",
              "Obligatorios en municipios > 5.000 hab.; en los de ≤ 5.000 hab. si lo dispone su Reglamento Orgánico o lo acuerda el Pleno.",
              "Estudian, informan y dictaminan los asuntos que hayan de ser sometidos a la decisión del Pleno, con participación proporcional de todos los grupos políticos."
            ],
            [
              "Comisión Especial de Sugerencias y Reclamaciones",
              "Obligatoria en municipios de Gran Población (Título X); en el resto, solo si lo acuerda el Pleno por mayoría absoluta o lo prevé su Reglamento Orgánico.",
              "Defensa de los derechos de los vecinos ante la Administración municipal; supervisa la actividad municipal y rinde informe anual al Pleno."
            ]
          ]
        }
      },
      {
        title: "4. Competencias municipales: propias, mínimas obligatorias y delegadas",
        content: [
          "El sistema competencial local (arts. 7, 25, 26 y 27 LRBRL) clasifica las competencias de los municipios en tres categorías: 1) Competencias propias (art. 25), determinadas por Ley estatal o autonómica y ejercidas en régimen de autonomía y bajo la propia responsabilidad; 2) Competencias delegadas (art. 27), ejercidas en los términos de la delegación (por plazo no inferior a 5 años y acompañadas del 100 % de la financiación necesaria); y 3) Competencias distintas de las propias y de las atribuidas por delegación (art. 7.4, denominadas impropias), que solo pueden ejercerse cuando no se ponga en riesgo la sostenibilidad financiera del conjunto de la Hacienda municipal y no se incurra en un supuesto de ejecución simultánea del mismo servicio público con otra Administración, requiriendo dos informes previos y vinculantes (de no duplicidad y de sostenibilidad financiera).",
          "Entre las materias de competencia propia del artículo 25.2 LRBRL destacan, por su conexión con la plaza de Técnico de Educación Infantil, la evaluación e información de situaciones de necesidad social y atención inmediata a personas en situación o riesgo de exclusión social (letra e), la participación en la vigilancia del cumplimiento de la escolaridad obligatoria y cooperación con las Administraciones educativas en la creación, construcción y sostenimiento de centros docentes públicos, así como la intervención en sus órganos de gestión (letra n), y las actuaciones en la promoción de la igualdad entre hombres y mujeres así como contra la violencia de género (letra o).",
          "Por su parte, el artículo 26.1 LRBRL fija los servicios mínimos obligatorios que todo Ayuntamiento debe prestar, por sí o asociado, escalonados en cuatro tramos de población."
        ],
        table: {
          headers: ["Tramo de población (Art. 26.1 LRBRL)", "Servicios mínimos obligatorios acumulativos"],
          rows: [
            [
              "En TODOS los municipios (Art. 26.1.a)",
              "Alumbrado público, cementerio, recogida de residuos, limpieza viaria, abastecimiento domiciliario de agua potable, alcantarillado, acceso a los núcleos de población y pavimentación de las vías públicas."
            ],
            [
              "En municipios con población > 5.000 habitantes (Art. 26.1.b — Tramo aplicable a Pinoso)",
              "Además de los anteriores: parque público, biblioteca pública y tratamiento de residuos."
            ],
            [
              "En municipios con población > 20.000 habitantes (Art. 26.1.c)",
              "Además de los anteriores: protección civil, evaluación e información de situaciones de necesidad social y atención inmediata a personas en situación o riesgo de exclusión social, prevención y extinción de incendios e instalaciones deportivas de uso público."
            ],
            [
              "En municipios con población > 50.000 habitantes (Art. 26.1.d)",
              "Además de los anteriores: transporte colectivo urbano de viajeros y medio ambiente urbano."
            ]
          ]
        }
      },
      {
        title: "5. Atribuciones del Alcalde, del Pleno y de la Junta de Gobierno Local",
        content: [
          "En los municipios de régimen común (artículos 21, 22 y 23 LRBRL), las competencias de gobierno y administración se distribuyen entre el Alcalde, el Pleno y la Junta de Gobierno Local conforme a reglas precisas que diferencian las atribuciones de dirección ejecutiva, las de control político y normativo, y las de asistencia colegiada.",
          "El Alcalde (art. 21 LRBRL) es el Presidente de la Corporación y ostenta la máxima representación del municipio. Dirige el gobierno y la administración municipal; convoca y preside las sesiones del Pleno y de la Junta de Gobierno Local y decide los empates con voto de calidad; dirige, inspecciona e impulsa los servicios y obras municipales; dicta bandos; desarrolla la gestión económica conforme al Presupuesto aprobado y autoriza y dispone gastos dentro de los límites de su competencia; aprueba la Oferta de Empleo Público de acuerdo con el Presupuesto y la plantilla aprobados por el Pleno, aprueba las bases de las pruebas para la selección del personal y para los concursos de provisión de puestos de trabajo y distribuye las retribuciones complementarias que no sean fijas y periódicas; desempeña la jefatura superior de todo el personal y acuerda su nombramiento y sanciones (incluida la separación del servicio de los funcionarios de la Corporación —salvo los de habilitación nacional— y el despido del personal laboral, dando cuenta al Pleno en la primera sesión que celebre); ejerce la jefatura de la Policía Municipal; ejercita acciones judiciales y administrativas en caso de urgencia dando cuenta al Pleno; sanciona las faltas de desobediencia a su autoridad o por infracción de las ordenanzas municipales; aprueba los instrumentos de planeamiento de desarrollo no atribuidos expresamente al Pleno y los proyectos de obras y servicios cuando sea competente para su contratación; otorga las licencias (salvo que las leyes sectoriales lo atribuyan al Pleno o a la Junta de Gobierno); y ostenta la cláusula residual de competencia (todas aquellas atribuciones que la legislación asigne al municipio y no estén expresamente atribuidas a otros órganos).",
          "El Ayuntamiento Pleno (art. 22 LRBRL), integrado por todos los Concejales y presidido por el Alcalde, ejerce las grandes potestades normativas, presupuestarias, organizativas y de control político: el control y la fiscalización de los órganos de gobierno; los acuerdos relativos a la participación en organizaciones supramunicipales, alteración del término municipal, creación o supresión de municipios o entidades submunicipales, alteración de la capitalidad y cambio de nombre o bandera; la aprobación inicial del planeamiento general y la aprobación que ponga fin a la tramitación municipal de los planes urbanísticos; la aprobación del Reglamento Orgánico y de las ordenanzas; la determinación de los recursos propios de carácter tributario y la aprobación y modificación de los Presupuestos y de la cuenta general; la aprobación de las formas de gestión de los servicios y de los expedientes de municipalización; la aceptación de la delegación de competencias hecha por otras Administraciones; el planteamiento de conflictos de competencias y el ejercicio de acciones judiciales y administrativas en materias de competencia plenaria; la declaración de lesividad de los actos del Ayuntamiento; la alteración de la calificación jurídica de los bienes de dominio público; la aprobación de la plantilla de personal y de la relación de puestos de trabajo (RPT), la fijación de la cuantía de las retribuciones complementarias fijas y periódicas de los funcionarios y el número y régimen del personal eventual; y la votación sobre la moción de censura al Alcalde y sobre la cuestión de confianza planteada por el mismo (que son públicas y se realizan mediante llamamiento nominal).",
          "La Junta de Gobierno Local (art. 23 LRBRL), presidida por el Alcalde e integrada por un número de Concejales no superior al tercio del número legal de los mismos, tiene solamente dos tipos de atribuciones en los municipios de régimen común: 1) La asistencia permanente al Alcalde en el ejercicio de sus atribuciones; y 2) Las atribuciones que el Alcalde u otro órgano municipal (el Pleno en las materias delegables del art. 22.4 LRBRL) le delegue o le atribuyan las leyes."
        ],
        highlights: [
          {
            title: "Distinción clave en materia de Personal entre Alcalde y Pleno (Arts. 21 y 22 LRBRL)",
            type: "importante",
            items: [
              "Compete al PLENO (Art. 22.2.i): Aprobar la Plantilla de personal y la Relación de Puestos de Trabajo (RPT), fijar la cuantía de las retribuciones complementarias FIJAS y PERIÓDICAS de los funcionarios, y determinar el número y régimen del personal eventual.",
              "Compete al ALCALDE (Art. 21.1.g y h): Aprobar la Oferta de Empleo Público (OEP), aprobar las bases de las convocatorias de selección y provisión, distribuir las retribuciones complementarias que NO sean fijas y periódicas (productividad/gratificaciones), ostentar la jefatura superior de todo el personal y acordar la separación del servicio de funcionarios municipales y el despido del personal laboral (dando cuenta al Pleno)."
            ]
          }
        ]
      }
    ],
    esquemaVisual: {
      title: "Estructura, Competencias y Órganos del Municipio",
      nodes: [
        {
          label: "Elementos del Municipio (Art. 11.2 LRBRL)",
          children: [
            "1. Término municipal (Art. 12-13: mín. 5.000 hab. para nuevos municipios)",
            "2. Población y Padrón (Art. 15-18: renovación cada 2 años para extranjeros ENCSARP)",
            "3. Organización (Art. 19-20: Ayuntamiento o Concejo Abierto)"
          ]
        },
        {
          label: "Órganos Necesarios (Art. 20 LRBRL)",
          children: [
            "En TODOS los municipios: Alcalde, Tenientes de Alcalde, Pleno y Comisión Especial de Cuentas",
            "En municipios > 5.000 hab. (como Pinoso): Junta de Gobierno Local (máx. 1/3 concejales) y Comisiones Informativas"
          ]
        },
        {
          label: "Servicios Mínimos Obligatorios (Art. 26.1 LRBRL)",
          children: [
            "Todos: Alumbrado, cementerio, residuos, limpieza, agua potable, alcantarillado, acceso y pavimentación",
            "> 5.000 hab. (Pinoso): + Parque público, biblioteca pública y tratamiento de residuos",
            "> 20.000 hab.: + Protección civil, atención social inmediata, extinción de incendios e instalaciones deportivas",
            "> 50.000 hab.: + Transporte colectivo urbano y medio ambiente urbano"
          ]
        },
        {
          label: "Reparto de Atribuciones (Arts. 21, 22 y 23 LRBRL)",
          children: [
            "Alcalde (Art. 21): Jefatura personal, OEP, bases selectivas, bandos, licencias y cláusula residual",
            "Pleno (Art. 22): Ordenanzas, Presupuestos, Plantilla y RPT, lesividad, moción de censura y cuestión de confianza",
            "Junta de Gobierno Local (Art. 23): Asistencia al Alcalde + competencias delegadas por Alcalde o Pleno"
          ]
        }
      ]
    },
    datosOro: [
      "Los 3 elementos del Municipio según el artículo 11.2 LRBRL son: el territorio (término municipal), la población y la organización.",
      "La creación de nuevos municipios (art. 13.2 LRBRL) solo puede realizarse sobre la base de núcleos de población territorialmente diferenciados de, al menos, 5.000 habitantes, siempre que los municipios resultantes sean financieramente sostenibles.",
      "Los extranjeros no comunitarios sin autorización de residencia de larga duración (ENCSARP) deben renovar su inscripción en el Padrón municipal cada 2 años (art. 16.1 LRBRL).",
      "La Comisión Especial de Cuentas (arts. 20.1.e y 116 LRBRL) es obligatoria en TODOS los municipios, cualquiera que sea su población.",
      "La Junta de Gobierno Local y las Comisiones Informativas son obligatorias en municipios con población superior a 5.000 habitantes (como Pinoso) y en los de menos cuando así lo disponga su Reglamento Orgánico o lo acuerde el Pleno.",
      "El número de Concejales que integran la Junta de Gobierno Local no puede ser superior al tercio (1/3) del número legal de miembros de la Corporación, además del Alcalde (art. 23.1 LRBRL).",
      "En un municipio de más de 5.000 habitantes como Pinoso, los tres servicios mínimos obligatorios adicionales a los básicos son: parque público, biblioteca pública y tratamiento de residuos (art. 26.1.b LRBRL)."
    ],
    temaDesarrollo: {
      introduccion:
        "El Municipio constituye la entidad local básica de la organización territorial del Estado y el cauce inmediato de participación ciudadana en los asuntos públicos (arts. 1.1 y 11.1 de la Ley 7/1985, LRBRL, y art. 140 CE). En el ámbito de la Comunitat Valenciana, su regulación básica estatal se complementa con la Ley 8/2010, de 23 de junio, de Régimen Local. El conocimiento de sus elementos constitutivos, de sus servicios obligatorios y del reparto de atribuciones entre el Alcalde, el Pleno y la Junta de Gobierno Local resulta esencial para comprender el funcionamiento del Ayuntamiento de Pinoso.",
      estructuraEpigrafes: [
        {
          epigraph: "1. Concepto y elementos del Municipio: el término municipal y la población (el empadronamiento)",
          body: "Se expondrá el concepto legal de Municipio (art. 11 LRBRL) y sus tres elementos: término municipal, población y organización. Se analizará la regulación del término municipal y sus alteraciones (arts. 12 y 13 LRBRL y Ley 8/2010 CV), destacando el requisito de al menos 5.000 habitantes y sostenibilidad financiera para la creación de nuevos municipios. A continuación, se abordará la población y el Padrón municipal (arts. 15 a 18 LRBRL): obligación de inscripción, condición de vecino, carácter de registro administrativo coordinado con el INE, los seis bloques de datos obligatorios del art. 16.2, la renovación bienal de los extranjeros no comunitarios sin residencia de larga duración, y el estatuto de derechos y deberes vecinales del artículo 18."
        },
        {
          epigraph: "2. La organización municipal y las competencias municipales",
          body: "Se examinará el artículo 20 de la LRBRL, diferenciando los órganos necesarios en todos los municipios (Alcalde, Tenientes de Alcalde, Pleno y Comisión Especial de Cuentas) de los exigibles en municipios de más de 5.000 habitantes como Pinoso (Junta de Gobierno Local y órganos de estudio, informe y consulta o Comisiones Informativas), así como la Comisión Especial de Sugerencias y Reclamaciones. Seguidamente se explicará el régimen de competencias propias (art. 25, con especial mención a la cooperación educativa y servicios sociales), los servicios mínimos obligatorios por tramos de población del artículo 26.1 (todos, >5.000, >20.000 y >50.000 hab.), las competencias delegadas (art. 27) y las competencias impropias sujetas a informes de no duplicidad y sostenibilidad financiera (art. 7.4)."
        },
        {
          epigraph: "3. El Alcalde, la Junta de Gobierno Local y el Ayuntamiento Pleno: competencias de cada órgano",
          body: "Se desarrollarán de forma sistemática y comparada las atribuciones de los tres órganos de gobierno en los municipios de régimen común: el Alcalde (art. 21 LRBRL) como presidente ejecutivo, jefe superior del personal, competente para aprobar la OEP y las bases de selección y titular de la cláusula residual; el Pleno (art. 22 LRBRL) como órgano de máxima representación política, titular de la potestad reglamentaria (ordenanzas y reglamentos), presupuestaria, de aprobación de la plantilla y RPT y de control político mediante moción de censura y cuestión de confianza; y la Junta de Gobierno Local (art. 23 LRBRL), integrada por el Alcalde y hasta un tercio de los concejales, encargada de la asistencia permanente al Alcalde y del ejercicio de competencias delegadas."
        }
      ],
      conclusion:
        "En definitiva, el diseño legal del Municipio equilibra la eficacia ejecutiva de la Alcaldía y la Junta de Gobierno Local con el control democrático y normativo del Ayuntamiento Pleno. Esta estructura organizativa permite a corporaciones locales como el Ayuntamiento de Pinoso gestionar con cercanía y rigor jurídico tanto los servicios mínimos obligatorios como las prestaciones educativas y sociales dirigidas a la primera infancia.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (artículo 140).",
        "Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (artículos 11 a 27).",
        "Ley 8/2010, de 23 de junio, de la Generalitat, de Régimen Local de la Comunitat Valenciana.",
        "Real Decreto 1690/1986, de 11 de julio (Reglamento de Población y Demarcación Territorial) y Real Decreto 2568/1986, de 28 de noviembre (ROF)."
      ],
      consejosTribunal: [
        "Ejemplifica siempre el tramo de más de 5.000 habitantes con el municipio de Pinoso (tanto en órganos obligatorios del art. 20 como en servicios mínimos del art. 26.1.b).",
        "No confundas nunca las competencias de personal entre el Pleno (aprueba Plantilla, RPT y retribuciones complementarias fijas y periódicas) y el Alcalde (aprueba la OEP, las bases de las pruebas selectivas y la separación del servicio / despido).",
        "Recuerda que la Junta de Gobierno Local en municipios de régimen común NO tiene competencias propias resolutorias por ley, sino únicamente la asistencia al Alcalde y las que le deleguen el Alcalde o el Pleno."
      ]
    },
    questions: [
      {
        id: "t3-q1",
        topicId: 3,
        question:
          "De acuerdo con el artículo 11.2 de la Ley 7/1985 (LRBRL), ¿cuáles son los elementos del Municipio?",
        options: [
          "El territorio, la población y la autonomía financiera.",
          "El territorio, la población y la organización.",
          "El término municipal, el Padrón de habitantes y el Ayuntamiento Pleno.",
          "El territorio, los vecinos y las ordenanzas municipales."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 11.2 de la LRBRL dispone literalmente que «Son elementos del Municipio el territorio, la población y la organización».",
        reference: "Artículo 11.2 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t3-q2",
        topicId: 3,
        question:
          "Según el artículo 13.2 de la Ley 7/1985 (LRBRL), la creación de nuevos municipios solo podrá realizarse sobre la base de núcleos de población territorialmente diferenciados de, al menos:",
        options: [
          "1.000 habitantes, siempre que cuenten con informe favorable de la Diputación Provincial.",
          "2.500 habitantes, siempre que dispongan de suelo dotacional suficiente.",
          "5.000 habitantes y siempre que los municipios resultantes sean financieramente sostenibles y cuenten con recursos suficientes para el cumplimiento de las competencias municipales.",
          "10.000 habitantes, salvo autorización expresa del Consejo de Ministros."
        ],
        correctIndex: 2,
        explanation:
          "Tras la reforma introducida por la Ley 27/2013, el artículo 13.2 LRBRL exige para la creación de nuevos municipios núcleos de población territorialmente diferenciados de al menos 5.000 habitantes y sostenibilidad financiera sin disminución en la calidad de los servicios prestados.",
        reference: "Artículo 13.2 de la Ley 7/1985 (LRBRL)",
        difficulty: "media"
      },
      {
        id: "t3-q3",
        topicId: 3,
        question:
          "Conforme al artículo 16.1 de la Ley 7/1985 (LRBRL), ¿qué colectivo de personas inscritas en el Padrón municipal está obligado a renovar periódicamente su inscripción cada dos años?",
        options: [
          "Todos los ciudadanos extranjeros residentes en el municipio, incluidos los ciudadanos de Estados miembros de la Unión Europea.",
          "Los extranjeros no comunitarios sin autorización de residencia de larga duración (permanente).",
          "Los españoles que residan en varios municipios durante el mismo año natural.",
          "Los extranjeros no comunitarios, aunque dispongan de autorización de residencia de larga duración."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 16.1 párrafo segundo de la LRBRL establece que la inscripción en el Padrón Municipal de los extranjeros no comunitarios sin autorización de residencia permanente (larga duración) deberá ser objeto de renovación periódica cada dos años, declarándose su caducidad sin necesidad de audiencia previa si no se realiza.",
        reference: "Artículo 16.1 de la Ley 7/1985 (LRBRL)",
        difficulty: "media"
      },
      {
        id: "t3-q4",
        topicId: 3,
        question:
          "¿Cuál de los siguientes datos NO figura como obligatorio en la inscripción en el Padrón municipal según el artículo 16.2 de la Ley 7/1985 (LRBRL)?",
        options: [
          "El certificado o título escolar o académico que se posea.",
          "El estado civil y el régimen económico matrimonial del vecino.",
          "El lugar y fecha de nacimiento y la nacionalidad.",
          "El sexo y el domicilio habitual."
        ],
        correctIndex: 1,
        explanation:
          "El estado civil no es un dato obligatorio del Padrón municipal. El artículo 16.2 LRBRL enumera como obligatorios: nombre y apellidos, sexo, domicilio habitual, nacionalidad, lugar y fecha de nacimiento, documento de identificación (DNI/NIE/pasaporte) y certificado o título escolar o académico que se posea.",
        reference: "Artículo 16.2 de la Ley 7/1985 (LRBRL)",
        difficulty: "media"
      },
      {
        id: "t3-q5",
        topicId: 3,
        question:
          "Según el artículo 20.1 de la Ley 7/1985 (LRBRL), ¿cuáles son los órganos que existen obligatoriamente en TODOS los Ayuntamientos, con independencia de su cifra de población?",
        options: [
          "El Alcalde, los Tenientes de Alcalde, el Pleno y la Junta de Gobierno Local.",
          "El Alcalde, los Tenientes de Alcalde, el Pleno y la Comisión Especial de Cuentas.",
          "El Alcalde, el Pleno, la Junta de Gobierno Local y las Comisiones Informativas.",
          "El Alcalde, los Tenientes de Alcalde, el Pleno y la Comisión Especial de Sugerencias y Reclamaciones."
        ],
        correctIndex: 1,
        explanation:
          "De acuerdo con el artículo 20.1.a) y e) de la LRBRL, el Alcalde, los Tenientes de Alcalde, el Pleno y la Comisión Especial de Cuentas existen en todos los Ayuntamientos. La Junta de Gobierno Local y las Comisiones Informativas solo son obligatorias por ley en municipios con población superior a 5.000 habitantes.",
        reference: "Artículo 20.1 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t3-q6",
        topicId: 3,
        question:
          "En un municipio de más de 5.000 y menos de 20.000 habitantes (como es el caso de Pinoso), ¿qué servicios mínimos obligatorios debe prestar el Ayuntamiento además de los exigidos en todos los municipios, según el artículo 26.1.b) de la LRBRL?",
        options: [
          "Parque público, biblioteca pública, mercado y tratamiento de residuos.",
          "Parque público, biblioteca pública y tratamiento de residuos.",
          "Parque público, biblioteca pública, protección civil e instalaciones deportivas de uso público.",
          "Biblioteca pública, escuela infantil municipal y prevención y extinción de incendios."
        ],
        correctIndex: 1,
        explanation:
          "¡Cuidado con la trampa clásica del «mercado»! Tras la reforma de la Ley 27/2013, se suprimió el servicio de mercado como obligatorio en los municipios de más de 5.000 habitantes. Actualmente, el artículo 26.1.b) LRBRL exige únicamente: parque público, biblioteca pública y tratamiento de residuos.",
        reference: "Artículo 26.1.b) de la Ley 7/1985 (LRBRL)",
        difficulty: "alta"
      },
      {
        id: "t3-q7",
        topicId: 3,
        question:
          "De acuerdo con el artículo 23.1 de la Ley 7/1985 (LRBRL), la Junta de Gobierno Local se integra por el Alcalde y un número de Concejales:",
        options: [
          "No superior a la mitad del número legal de miembros de la Corporación, elegidos por el Pleno.",
          "No superior al tercio (1/3) del número legal de los mismos, nombrados y separados libremente por el Alcalde, dando cuenta al Pleno.",
          "Equivalente a un representante de cada grupo político municipal, nombrados por el Pleno por mayoría absoluta.",
          "No superior al cuarto (1/4) del número legal de concejales, designados por sorteo."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 23.1 de la LRBRL dispone que la Junta de Gobierno Local se integra por el Alcalde y un número de Concejales no superior al tercio del número legal de los mismos, nombrados y separados libremente por aquél, dando cuenta al Pleno.",
        reference: "Artículo 23.1 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t3-q8",
        topicId: 3,
        question:
          "En un Ayuntamiento de régimen común como el de Pinoso, ¿a qué órgano municipal le corresponde aprobar la Oferta de Empleo Público (OEP) y las bases de las pruebas para la selección del personal, y a qué órgano le corresponde aprobar la Plantilla de personal y la Relación de Puestos de Trabajo (RPT)?",
        options: [
          "Ambas atribuciones corresponden en exclusiva al Ayuntamiento Pleno.",
          "La aprobación de la OEP y de las bases de selección corresponde al Alcalde (art. 21.1.g LRBRL), mientras que la aprobación de la Plantilla y de la RPT corresponde al Pleno (art. 22.2.i LRBRL).",
          "La aprobación de la OEP corresponde al Pleno y la aprobación de la RPT corresponde a la Junta de Gobierno Local.",
          "La aprobación de las bases de selección corresponde al Tribunal Calificador y la OEP al Pleno."
        ],
        correctIndex: 1,
        explanation:
          "En los municipios de régimen común, el artículo 21.1.g) LRBRL atribuye al Alcalde aprobar la Oferta de Empleo Público de acuerdo con el Presupuesto y la plantilla aprobados por el Pleno, así como aprobar las bases de las pruebas para la selección del personal; mientras que el artículo 22.2.i) LRBRL atribuye al Pleno la aprobación de la plantilla de personal y de la relación de puestos de trabajo (RPT).",
        reference: "Artículos 21.1.g) y 22.2.i) de la Ley 7/1985 (LRBRL)",
        difficulty: "alta"
      },
      {
        id: "t3-q9",
        topicId: 3,
        question:
          "Según los artículos 21.1.h) y 22.4 de la Ley 7/1985 (LRBRL), ¿a qué órgano corresponde acordar la separación del servicio de los funcionarios de la Corporación (no habilitados nacionales) y el despido del personal laboral, y qué característica tiene dicha competencia?",
        options: [
          "Corresponde al Pleno por mayoría absoluta y es delegable en la Junta de Gobierno Local.",
          "Corresponde al Alcalde (dando cuenta al Pleno en la primera sesión que celebre) y es una competencia INDELEGABLE del Alcalde según el artículo 21.3 LRBRL.",
          "Corresponde a la Junta de Gobierno Local previo dictamen de la Comisión Informativa de Personal.",
          "Corresponde al Alcalde, pero puede delegarla en cualquier concejal delegado de Recursos Humanos."
        ],
        correctIndex: 1,
        explanation:
          "Conforme al artículo 21.1.h) de la LRBRL, corresponde al Alcalde acordar la separación del servicio de los funcionarios de la Corporación y el despido del personal laboral, dando cuenta al Pleno en la primera sesión que celebre. Además, el artículo 21.3 LRBRL prohíbe expresamente al Alcalde delegar esta atribución.",
        reference: "Artículos 21.1.h) y 21.3 de la Ley 7/1985 (LRBRL)",
        difficulty: "alta"
      },
      {
        id: "t3-q10",
        topicId: 3,
        question:
          "¿Qué requisitos exige el artículo 7.4 de la Ley 7/1985 (LRBRL) para que una Entidad Local pueda ejercer competencias distintas de las propias y de las atribuidas por delegación?",
        options: [
          "Únicamente acuerdo del Pleno adoptado por mayoría simple.",
          "Que no se ponga en riesgo la sostenibilidad financiera del conjunto de la Hacienda municipal y que no se incurra en un supuesto de ejecución simultánea del mismo servicio público con otra Administración Pública, previos informes vinculantes de la Administración competente por razón de materia y de la que tenga atribuida la tutela financiera.",
          "Autorización previa por Ley de las Cortes Generales.",
          "Que el municipio supere los 50.000 habitantes y cuente con superávit en los tres ejercicios anteriores."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 7.4 LRBRL condiciona el ejercicio de competencias impropias a que no se ponga en riesgo la sostenibilidad financiera municipal y no exista duplicidad (ejecución simultánea del mismo servicio con otra AAPP), exigiendo dos informes previos y vinculantes: el de inexistencia de duplicidades y el de sostenibilidad financiera.",
        reference: "Artículo 7.4 de la Ley 7/1985 (LRBRL)",
        difficulty: "media"
      },
      {
        id: "t3-q11",
        topicId: 3,
        question:
          "De acuerdo con el artículo 23.2 de la Ley 7/1985 (LRBRL), ¿cuáles son las competencias que corresponden a la Junta de Gobierno Local en los municipios de régimen común?",
        options: [
          "La aprobación de las ordenanzas fiscales, los presupuestos y las licencias urbanísticas mayores.",
          "La asistencia al Alcalde en el ejercicio de sus atribuciones y las atribuciones que el Alcalde u otro órgano municipal le delegue o le atribuyan las leyes.",
          "El control y la fiscalización de la actuación del Alcalde y de los Tenientes de Alcalde.",
          "La resolución de los recursos de reposición interpuestos contra acuerdos del Ayuntamiento Pleno."
        ],
        correctIndex: 1,
        explanation:
          "En los municipios de régimen común (a diferencia de los de Gran Población del Título X), el artículo 23.2 LRBRL establece que corresponde a la Junta de Gobierno Local: a) La asistencia al Alcalde en el ejercicio de sus atribuciones, y b) Las atribuciones que el Alcalde u otro órgano municipal le delegue o le atribuyan las leyes.",
        reference: "Artículo 23.2 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t3-q12",
        topicId: 3,
        question:
          "Según el artículo 71 de la Ley 7/1985 (LRBRL), para que los Alcaldes puedan someter a consulta popular aquellos asuntos de la competencia propia municipal y de carácter local que sean de especial relevancia para los intereses de los vecinos, se requiere:",
        options: [
          "Acuerdo previo del Pleno por mayoría simple y autorización de la Diputación Provincial.",
          "Acuerdo previo del Pleno por mayoría absoluta y autorización del Gobierno de la Nación, con excepción de los asuntos relativos a la Hacienda local.",
          "Decreto directo de Alcaldía sin intervención del Pleno, incluyendo las ordenanzas fiscales.",
          "Acuerdo del Pleno por mayoría de dos tercios (2/3) y ratificación de las Cortes Valencianas."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 71 LRBRL dispone que los Alcaldes, previo acuerdo por mayoría absoluta del Pleno y autorización del Gobierno de la Nación, podrán someter a consulta popular aquellos asuntos de la competencia propia municipal y de carácter local que sean de especial relevancia para los intereses de los vecinos, con excepción de los relativos a la Hacienda local.",
        reference: "Artículo 71 de la Ley 7/1985 (LRBRL)",
        difficulty: "media"
      }
    ]
  },
  {
    id: 4,
    slug: "tema-4-procedimiento-administrativo-comun",
    block: "general",
    title: "Ley del Procedimiento Administrativo Común (Ley 39/2015) y Transparencia",
    officialTitle:
      "Tema 4.- Ley del Procedimiento Administrativo Común de las Administraciones Públicas: ámbito de aplicación y principios informadores. Los interesados: capacidad y representación. Derechos de los ciudadanos en sus relaciones con las Administraciones Públicas. Las garantías en el desarrollo del procedimiento. La transparencia de las Administraciones Públicas y acceso a la información pública.",
    summary:
      "Análisis sistemático de la Ley 39/2015 (LPACAP): estructura, ámbito subjetivo y principios del procedimiento; capacidad de obrar, condición de interesado, representación y apoderamientos; distinción entre derechos de las personas (art. 13) y de los interesados (art. 53); garantías procedimentales, plazos y silencio; y marco de transparencia estatal (Ley 19/2013) y autonómico valenciano (Ley 1/2022).",
    readTimeMinutes: 30,
    normativaClave: [
      "Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas (LPACAP)",
      "Real Decreto 203/2021, de 30 de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del sector público por medios electrónicos",
      "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno",
      "Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana"
    ],
    sections: [
      {
        title: "1. Ámbito de aplicación, estructura y principios informadores de la Ley 39/2015",
        content: [
          "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas (LPACAP), que entró en vigor con carácter general al año de su publicación en el BOE (el 2 de octubre de 2016), articula las relaciones ad extra entre las Administraciones Públicas y los ciudadanos, separándolas de la regulación organizativa ad intra contenida en la Ley 40/2015 (LRJSP). Su estructura formal consta de 133 artículos distribuidos en un Título Preliminar y seis Títulos numerados (Título I: De los interesados en el procedimiento; Título II: De la actividad de las Administraciones Públicas; Título III: De los actos administrativos; Título IV: De las disposiciones sobre el procedimiento administrativo común; Título V: De la revisión de los actos en vía administrativa; y Título VI: De la iniciativa legislativa y de la potestad para dictar reglamentos y otras disposiciones), además de 5 Disposiciones Adicionales, 5 Transitorias, 1 Derogatoria y 7 Finales.",
          "Su ámbito subjetivo de aplicación (art. 2 LPACAP) comprende a las Administraciones Territoriales (AGE, CCAA y Entidades Locales como el Ayuntamiento de Pinoso) y al Sector Público Institucional (organismos públicos y entidades de derecho público, que tienen condición de AAPP; entidades de derecho privado cuando ejerzan potestades administrativas; y Universidades Públicas con carácter supletorio).",
          "El procedimiento administrativo común —definido en la Exposición de Motivos como el conjunto ordenado de trámites y actuaciones formalmente realizadas, según el cauce legalmente previsto, para dictar un acto administrativo o expresar la voluntad de la Administración— se rige por siete grandes principios informadores: 1) Impulso de oficio y celeridad (art. 71: se impulsa de oficio en todos sus trámites y a través de medios electrónicos, guardando el orden riguroso de incoación en asuntos de homogénea naturaleza); 2) Simplificación administrativa y concentración de trámites (art. 72 y tramitación simplificada en 30 días del art. 96); 3) Tramitación electrónica por defecto; 4) Antiformalismo e in dubio pro actione (subsanación de defectos en 10 días del art. 68 y calificación del recurso pese al error en su denominación del art. 115.2); 5) Contradicción e igualdad de los interesados (art. 75.4); 6) Congruencia y prohibición de la reformatio in peius (art. 88: la resolución decidirá todas las cuestiones planteadas sin que en ningún caso pueda agravar la situación inicial del solicitante); y 7) Transparencia, publicidad y gratuidad general."
        ]
      },
      {
        title: "2. Los interesados: capacidad de obrar, concepto y representación",
        content: [
          "El artículo 3 LPACAP amplía la capacidad de obrar ante las Administraciones Públicas más allá de las reglas civiles ordinarias, reconociéndola a tres grupos: a) Las personas físicas o jurídicas que ostenten capacidad de obrar con arreglo a las normas civiles; b) Los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuación esté permitida por el ordenamiento jurídico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela (con la excepción de los menores incapacitados cuando la extensión de la incapacitación afecte al ejercicio y defensa de los derechos o intereses de que se trate); y c) Cuando la Ley así lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jurídica y los patrimonios independientes o autónomos.",
          "Por su parte, el artículo 4.1 LPACAP atribuye la condición de interesado en el procedimiento administrativo a tres categorías de sujetos: a) Quienes lo promuevan como titulares de derechos o intereses legítimos individuales o colectivos; b) Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisión que en el mismo se adopte (éstos son interesados necesarios a los que la Administración debe emplazar de oficio conforme al art. 8); y c) Aquellos cuyos intereses legítimos, individuales o colectivos, puedan resultar afectados por la resolución y se personen en el procedimiento en tanto no haya recaído resolución definitiva.",
          "En cuanto a la representación (art. 5 LPACAP), los interesados con capacidad de obrar pueden actuar por medio de representante, entendiéndose con éste las actuaciones administrativas salvo manifestación expresa en contra. Pueden ser representantes cualquier persona física con capacidad de obrar y las personas jurídicas siempre que ello esté previsto en sus Estatutos. La Ley distingue con rigor cuándo se presume la representación y cuándo debe acreditarse obligatoriamente, otorgando un plazo de subsanación de 10 días hábiles si falta o es insuficiente la acreditación.",
          "El artículo 6 LPACAP regula los Registros Electrónicos de Apoderamientos (como el registro general Apodera), donde pueden inscribirse los poderes generales o específicos conferidos apud acta (presencial o electrónicamente) o mediante documento público o privado con firma electrónica. Los poderes inscritos tienen una validez máxima de 5 años a contar desde la fecha de inscripción, pudiendo ser revocados o prorrogados por el poderdante antes de su expiración por un plazo máximo de otros 5 años."
        ],
        table: {
          headers: ["Aspecto de la Representación (Arts. 5 y 6 LPACAP)", "Regla legal aplicable", "Plazos y requisitos clave"],
          rows: [
            [
              "Actos que requieren ACREDITACIÓN obligatoria (Art. 5.3)",
              "1. Formular solicitudes.\n2. Presentar declaraciones responsables o comunicaciones.\n3. Interponer recursos.\n4. Desistir de acciones.\n5. Renunciar a derechos.",
              "Se acredita por cualquier medio válido en Derecho que deje constancia fidedigna (apoderamiento apud acta presencial o electrónico, o inscripción en el Registro Electrónico de Apoderamientos)."
            ],
            [
              "Actos en los que se PRESUME la representación (Art. 5.3 in fine)",
              "Actos y gestiones de mero trámite.",
              "No requiere acreditación previa."
            ],
            [
              "Subsanación de falta o insuficiencia de acreditación (Art. 5.6)",
              "No impide que se tenga por realizado el acto de que se trate si se aporta o subsana dentro del plazo concedido.",
              "Plazo de 10 días hábiles (o plazo superior cuando las circunstancias del caso así lo requieran)."
            ],
            [
              "Registro Electrónico de Apoderamientos (Art. 6.6)",
              "Inscripción de poderes generales o para procedimientos concretos.",
              "Validez máxima de 5 años desde la inscripción (prorrogable por otros 5 años máximo antes de su vencimiento)."
            ]
          ]
        }
      },
      {
        title: "3. Derechos de las personas (Art. 13) vs. Derechos de los interesados (Art. 53) y relación electrónica (Art. 14)",
        content: [
          "Uno de los puntos más preguntados en los exámenes de Administración Local consiste en diferenciar los derechos generales de todas las personas en sus relaciones con las AAPP (artículo 13 LPACAP, que no exigen ser parte en un procedimiento concreto) frente a los derechos específicos de quienes ostentan la condición de interesados dentro de un procedimiento administrativo en curso (artículo 53 LPACAP).",
          "En el artículo 13 se reconocen a las personas con capacidad de obrar, entre otros: el derecho a comunicarse con las AAPP a través de un Punto de Acceso General electrónico; a ser asistidos en el uso de medios electrónicos en sus relaciones con las AAPP; a utilizar las lenguas oficiales en el territorio de su Comunidad Autónoma (como el valenciano y el castellano en el Ayuntamiento de Pinoso, regulándose la lengua de los procedimientos en el art. 15); al acceso a la información pública, archivos y registros; a ser tratados con respeto y deferencia por las autoridades y empleados públicos; a exigir las responsabilidades de las AAPP y autoridades cuando corresponda; y a la obtención y utilización de los medios de identificación y firma electrónica y a la protección de datos de carácter personal.",
          "Por su parte, el artículo 14 LPACAP distingue entre las personas físicas —que pueden elegir en todo momento si se comunican por medios electrónicos o no, salvo que estén obligadas— y los sujetos obligados en todo caso a relacionarse electrónicamente con las AAPP (art. 14.2): a) las personas jurídicas; b) las entidades sin personalidad jurídica; c) quienes ejerzan una actividad profesional para la que se requiera colegiación obligatoria, para los trámites y actuaciones que realicen con las AAPP en ejercicio de dicha actividad (incluidos notarios y registradores); d) quienes representen a un interesado que esté obligado a relacionarse electrónicamente; y e) los empleados de las Administraciones Públicas para los trámites y actuaciones que realicen con ellas por razón de su condición de empleado público (incluyendo los procesos selectivos según el art. 14.3)."
        ],
        table: {
          headers: ["Derechos de las PERSONAS (Art. 13 LPACAP)", "Derechos de los INTERESADOS en el procedimiento (Art. 53.1 LPACAP)"],
          rows: [
            [
              "• Comunicarse a través de un Punto de Acceso General electrónico.\n• Ser asistidos en el uso de medios electrónicos.\n• Utilizar las lenguas oficiales en el territorio de su CCAA.\n• Acceso a la información pública, archivos y registros (Ley 19/2013).\n• Ser tratados con respeto y deferencia.\n• Exigir responsabilidades de las AAPP y autoridades.\n• Obtener medios de identificación y firma electrónica.\n• Protección de datos personales.",
              "• Conocer en cualquier momento el estado de la tramitación, el sentido del silencio, el órgano competente y los actos dictados, y obtener copia de documentos.\n• Identificar a las autoridades y al personal bajo cuya responsabilidad se tramiten los procedimientos.\n• No presentar documentos originales (salvo excepción) y obtener copia autenticada.\n• No presentar datos o documentos no exigidos por las normas o que ya se encuentren en poder de las AAPP o hayan sido elaborados por éstas.\n• Formular alegaciones, utilizar medios de defensa y aportar documentos en cualquier fase anterior al trámite de audiencia.\n• Obtener información y orientación acerca de los requisitos jurídicos o técnicos.\n• Actuar asistidos de asesor cuando lo consideren conveniente.\n• Cumplir las obligaciones de pago a través de medios electrónicos."
            ]
          ]
        }
      },
      {
        title: "4. Las garantías en el desarrollo del procedimiento administrativo",
        content: [
          "El Título IV de la LPACAP articula el procedimiento administrativo común como un cauce de garantías para el ciudadano a lo largo de sus fases de iniciación (de oficio o a solicitud del interesado, con plazo de 10 días para subsanación y mejora de la solicitud del art. 68 y posibilidad de medidas provisionales del art. 56), ordenación (expediente electrónico art. 70, impulso de oficio art. 71 y cumplimiento de trámites por los interesados en 10 días salvo que la norma fije otro, art. 73), instrucción (arts. 75 a 83) y terminación (resolución, desistimiento, renuncia, caducidad, imposibilidad material sobrevenida o terminación convencional art. 86).",
          "En la fase de instrucción destacan cinco garantías esenciales: 1) Alegaciones (art. 76): los interesados pueden aducir alegaciones y aportar documentos en cualquier momento anterior al trámite de audiencia; 2) Prueba (arts. 77 y 78): cuando la Administración no tenga por ciertos los hechos alegados o la naturaleza del procedimiento lo exija, se abrirá un período de prueba por un plazo no superior a 30 días ni inferior a 10 días (y un período extraordinario de hasta 10 días); 3) Informes (arts. 79 y 80): salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes, y se emitirán electrónicamente en el plazo de 10 días; 4) Trámite de audiencia (art. 82): instruido el procedimiento e inmediatamente antes de redactar la propuesta de resolución, se pondrá de manifiesto a los interesados para que en un plazo no inferior a 10 días ni superior a 15 días puedan alegar y presentar los documentos y justificaciones que estimen pertinentes (solo se puede prescindir de él cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado); y 5) Información pública (art. 83): anuncio en el diario oficial correspondiente para que cualquier persona física o jurídica pueda examinar el expediente y formular alegaciones en un plazo que en ningún caso podrá ser inferior a 20 días.",
          "Como garantía frente a la inactividad administrativa, el artículo 21 LPACAP impone la obligación de dictar resolución expresa y notificarla en todos los procedimientos: el plazo máximo será el fijado por la norma reguladora, que no podrá exceder de 6 meses salvo que una norma con rango de Ley establezca uno mayor o así venga previsto en el Derecho de la UE; y cuando la norma no fije plazo máximo, éste será de 3 meses. En los procedimientos iniciados a solicitud del interesado (art. 24), el vencimiento del plazo sin notificación legitima al interesado para entenderla estimada por silencio administrativo positivo, salvo que una norma con rango de ley o de Derecho de la UE o internacional establezca lo contrario, o que se trate de las excepciones de silencio negativo del art. 24.1 (derecho de petición art. 29 CE, facultades relativas al dominio público o al servicio público, actividades que puedan dañar el medio ambiente, procedimientos de responsabilidad patrimonial y procedimientos de impugnación de actos y disposiciones o revisión de oficio, con la salvedad del recurso de alzada contra la desestimación por silencio de una solicitud previa si no versa sobre las materias excluidas). En los procedimientos iniciados de oficio (art. 25), la falta de resolución produce silencio negativo si pudieran derivarse el reconocimiento de derechos, y produce la caducidad en los procedimientos sancionadores o susceptibles de producir efectos desfavorables o de gravamen.",
          "Respecto al cómputo de plazos (art. 30 LPACAP), cuando los plazos se señalen por horas se entiende que éstas son hábiles (todas las horas del día que formen parte de un día hábil) y no podrán tener una duración superior a 24 horas; cuando se señalen por días, siempre que por Ley o en el Derecho de la UE no se exprese otro cómputo, se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos. Los plazos expresados en días se cuentan a partir del día siguiente a aquel en que tenga lugar la notificación o publicación o se produzca el silencio; y si se fijan en meses o años, se computan de fecha a fecha a partir del día siguiente, concluyendo el mismo día en que se produjo la notificación, publicación o silencio en el mes o el año de vencimiento (si en el mes de vencimiento no hubiera día equivalente, el plazo expira el último día del mes). Cuando el último día del plazo sea inhábil, se entenderá prorrogado al primer día hábil siguiente."
        ]
      },
      {
        title: "5. Transparencia de las Administraciones Públicas y acceso a la información pública",
        content: [
          "El artículo 105.b) de la Constitución Española y el artículo 13.d) de la Ley 39/2015 consagran el derecho de las personas al acceso a la información pública, archivos y registros, remitiendo su regulación a la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (norma básica estatal) y, en el ámbito autonómico y local valenciano, a la Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana (aplicable también a las entidades locales como el Ayuntamiento de Pinoso).",
          "La transparencia se articula sobre dos pilares complementarios: 1) La publicidad activa, por la cual las Administraciones Públicas deben publicar de forma periódica, actualizada, proactiva, gratuita y en formatos reutilizables la información institucional, organizativa, de planificación, de relevancia jurídica y económica, presupuestaria y estadística en sus respectivos Portales de Transparencia; y 2) El derecho de acceso a la información pública, que permite a cualquier persona solicitar contenidos o documentos, cualquiera que sea su formato o soporte, que obren en poder de los sujetos incluidos en la Ley y que hayan sido elaborados o adquiridos en el ejercicio de sus funciones, sin que el solicitante esté obligado a motivar su solicitud.",
          "El derecho de acceso sólo puede ser limitado o inadmitido por causas tasadas (seguridad nacional, defensa, protección de datos personales especialmente protegidos, investigación de ilícitos, secreto profesional, información auxiliar o en curso de elaboración, o solicitudes manifiestamente repetitivas o abusivas). Conforme al artículo 20 de la Ley 19/2013 (y concordantes de la Ley 1/2022 CV), la resolución en la que se conceda o deniegue el acceso deberá notificarse al solicitante en el plazo máximo de 1 mes desde la recepción de la solicitud por el órgano competente para resolver (ampliable por otro mes en caso de volumen o complejidad), teniendo el silencio administrativo carácter desestimatorio (negativo). Frente a toda resolución expresa o presunta en materia de acceso puede interponerse una reclamación potestativa y previa a la vía contencioso-administrativa en el plazo de 1 mes ante el Consejo de Transparencia y Buen Gobierno (o, en la Comunitat Valenciana, ante el Consell Valencià de Transparència), que dispone de un plazo máximo de 3 meses para resolver y notificar."
        ],
        highlights: [
          {
            title: "Resumen de Plazos Clave en la Ley 39/2015 y Ley de Transparencia",
            type: "importante",
            items: [
              "Subsanación de solicitud (art. 68) / Subsanación de representación (art. 5.6) / Trámites de interesados (art. 73) / Emisión de informes (art. 80): 10 días hábiles.",
              "Período ordinario de prueba (art. 77.2): No superior a 30 días ni inferior a 10 días.",
              "Trámite de audiencia (art. 82.2): No inferior a 10 días ni superior a 15 días.",
              "Información pública (art. 83.2): En ningún caso inferior a 20 días hábiles.",
              "Plazo máximo legal para resolver un procedimiento (art. 21): No puede exceder de 6 meses (salvo Ley o norma UE); plazo supletorio si la norma no fija otro: 3 meses. En tramitación simplificada (art. 96): 30 días.",
              "Resolución de solicitud de acceso a la información pública (Ley 19/2013 y Ley 1/2022 CV): 1 mes (ampliable por otro mes), con silencio negativo."
            ]
          }
        ]
      }
    ],
    esquemaVisual: {
      title: "Esquema Integral de la Ley 39/2015 (LPACAP) y Transparencia",
      nodes: [
        {
          label: "Interesados y Representación (Arts. 3 a 6 LPACAP)",
          children: [
            "Capacidad de obrar (Art. 3): Personas físicas/jurídicas + menores para sus derechos permitidos + grupos sin personalidad cuando la Ley lo declare",
            "Concepto de interesado (Art. 4): Quienes promueven (derechos o intereses) + titulares de derechos afectados + titulares de intereses legítimos que se personen",
            "Representación (Art. 5): Acreditar en 5 actos clave (solicitar, declaración responsable/comunicación, recurrir, desistir, renunciar); se presume en mero trámite. Subsanación: 10 días",
            "Registro Electrónico de Apoderamientos (Art. 6): Validez máxima 5 años (prorrogable otros 5 años)"
          ]
        },
        {
          label: "Derechos y Relación Electrónica (Arts. 13, 14 y 53 LPACAP)",
          children: [
            "Art. 13: Derechos de las PERSONAS (Punto de Acceso General, asistencia electrónica, lenguas cooficiales, acceso a información pública)",
            "Art. 14.2: Obligados electrónicos (Personas jurídicas, entes sin personalidad, colegiados en su ejercicio, representantes de obligados y empleados públicos)",
            "Art. 53: Derechos de los INTERESADOS (estado de tramitación, copia de documentos, no aportar originales ni documentos en poder de AAPP, alegar antes de audiencia)"
          ]
        },
        {
          label: "Garantías, Plazos y Silencio (Arts. 21, 24, 25, 30 y 75-83 LPACAP)",
          children: [
            "Plazo para resolver (Art. 21): Máximo 6 meses (salvo Ley/UE); supletorio 3 meses",
            "Silencio a solicitud (Art. 24): Regla general positivo; negativo en petición art. 29 CE, dominio/servicio público, medio ambiente, responsabilidad patrimonial y recursos",
            "Instrucción: Prueba (10 a 30 días) | Informes (10 días, facultativos y no vinculantes) | Audiencia (10 a 15 días) | Información pública (mín. 20 días)",
            "Cómputo de plazos (Art. 30): Sábados, domingos y festivos son INHÁBILES"
          ]
        },
        {
          label: "Transparencia y Acceso a la Información (Ley 19/2013 y Ley 1/2022 CV)",
          children: [
            "Publicidad activa (Portal de Transparencia) + Derecho de acceso sin obligación de motivar",
            "Plazo de resolución: 1 mes (prorrogable otro mes por complejidad) | Silencio negativo",
            "Reclamación potestativa en 1 mes ante el Consell Valencià de Transparència (resuelve en 3 meses)"
          ]
        }
      ]
    },
    datosOro: [
      "Desde la entrada en vigor de la Ley 39/2015, los SÁBADOS son días inhábiles a efectos del cómputo de plazos administrativos (junto con domingos y festivos, art. 30.2 LPACAP).",
      "La representación (art. 5.3 LPACAP) se presume para actos de mero trámite, pero debe acreditarse obligatoriamente para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos.",
      "Los poderes inscritos en el Registro Electrónico de Apoderamientos tienen una validez máxima de 5 años desde la fecha de inscripción (art. 6.6 LPACAP).",
      "El plazo supletorio para resolver y notificar un procedimiento cuando la norma reguladora no fije plazo máximo es de 3 meses, y el máximo que puede fijar una norma reglamentaria es de 6 meses (art. 21 LPACAP).",
      "El trámite de audiencia dura entre 10 y 15 días hábiles (art. 82.2 LPACAP), mientras que el período de información pública nunca puede ser inferior a 20 días hábiles (art. 83.2 LPACAP).",
      "Salvo disposición expresa en contrario, los informes en el procedimiento administrativo son facultativos y no vinculantes, y se emiten en el plazo de 10 días (art. 80 LPACAP).",
      "En el derecho de acceso a la información pública (Ley 19/2013 y Ley 1/2022 CV), el solicitante NO está obligado a motivar su solicitud, el plazo máximo para resolver es de 1 mes y el sentido del silencio es desestimatorio (negativo)."
    ],
    temaDesarrollo: {
      introduccion:
        "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas (LPACAP), constituye el pilar normativo que regula las relaciones externas (ad extra) entre las Administraciones Públicas —incluido el Ayuntamiento de Pinoso— y la ciudadanía. Concebida bajo el paradigma de una Administración íntegramente electrónica, transparente, ágil y garantista, la Ley conjuga las prerrogativas públicas orientadas al interés general con el catálogo de derechos de las personas, de los interesados y de acceso a la información pública.",
      estructuraEpigrafes: [
        {
          epigraph: "1. Ámbito de aplicación, principios informadores y régimen de los interesados (capacidad y representación)",
          body: "Se expondrá la estructura de la Ley 39/2015 (133 artículos en un Título Preliminar y seis Títulos), su ámbito subjetivo (art. 2: AAPP territoriales y Sector Público Institucional) y sus principios informadores (impulso de oficio, celeridad, simplificación, tramitación electrónica, antiformalismo, contradicción y congruencia). A continuación se analizará el Título I: la capacidad de obrar ampliada del artículo 3 (incluyendo a los menores de edad y grupos sin personalidad cuando la ley lo prevea), la triple vía para ostentar la condición de interesado del artículo 4, el régimen de representación del artículo 5 (presunción en actos de mero trámite frente a acreditación en los cinco actos de disposición, con plazo de subsanación de 10 días) y los Registros Electrónicos de Apoderamientos del artículo 6 (validez máxima de 5 años)."
        },
        {
          epigraph: "2. Derechos de los ciudadanos en sus relaciones con las AAPP y garantías en el desarrollo del procedimiento",
          body: "Se establecerá la distinción sistemática entre los derechos de las personas en sus relaciones con las AAPP (art. 13 LPACAP: Punto de Acceso General, asistencia en medios electrónicos, uso de lenguas cooficiales como el valenciano, acceso a archivos e información pública, trato respetuoso y protección de datos) y los derechos de los interesados en un procedimiento administrativo (art. 53.1 LPACAP: conocer el estado de tramitación, no aportar originales ni documentos ya en poder de las AAPP, formular alegaciones y actuar con asesor), precisando los sujetos obligados a relacionarse electrónicamente (art. 14.2). Seguidamente se desarrollarán las garantías procedimentales: obligación de resolver y plazos (art. 21: 6 meses máximo, 3 meses supletorio), régimen del silencio administrativo a solicitud del interesado (art. 24) y de oficio (art. 25), cómputo de plazos con exclusión de sábados, domingos y festivos (art. 30), e instrucción garantista mediante prueba (10-30 días), informes (10 días), trámite de audiencia (10-15 días) e información pública (mínimo 20 días)."
        },
        {
          epigraph: "3. La transparencia de las Administraciones Públicas y el acceso a la información pública",
          body: "Partiendo de los artículos 105.b) CE y 13.d) LPACAP, se expondrá el régimen de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, y su desarrollo en la Comunitat Valenciana mediante la Ley 1/2022, de 13 de abril. Se explicarán las obligaciones de publicidad activa de las entidades locales en sus Portales de Transparencia y la configuración del derecho de acceso a la información pública: ausencia de necesidad de motivar la solicitud, causas de inadmisión y límites legales, plazo máximo de resolución de 1 mes (ampliable por otro mes), sentido desestimatorio del silencio y reclamación potestativa previa ante el Consell Valencià de Transparència."
        }
      ],
      conclusion:
        "En conclusión, el procedimiento administrativo común regulado en la Ley 39/2015 y la legislación de transparencia no representan un obstáculo burocrático, sino la principal garantía de objetividad, seguridad jurídica y participación ciudadana en el quehacer diario de la Administración Local y de sus servicios públicos educativos.",
      bibliografiaYNormativa: [
        "Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.",
        "Real Decreto 203/2021, de 30 de marzo, Reglamento de actuación y funcionamiento del sector público por medios electrónicos.",
        "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno.",
        "Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana."
      ],
      consejosTribunal: [
        "Diferencia con absoluta nitidez en el examen de desarrollo el artículo 13 LPACAP (derechos de las personas en general) del artículo 53 LPACAP (derechos de los interesados en un procedimiento).",
        "Enumera sin dudar los 5 actos que exigen acreditar la representación según el artículo 5.3 LPACAP y el plazo de 10 días para subsanarla.",
        "Cita en el apartado de transparencia tanto la Ley estatal 19/2013 como la vigente Ley autonómica 1/2022, de 13 de abril, de la Comunitat Valenciana (que derogó a la anterior Ley 2/2015)."
      ]
    },
    questions: [
      {
        id: "t4-q1",
        topicId: 4,
        question:
          "De acuerdo con el artículo 4.1 de la Ley 39/2015 (LPACAP), ¿en qué supuesto se requiere que el titular de intereses legítimos, individuales o colectivos, se persone en el procedimiento antes de que recaiga resolución definitiva para ser considerado interesado?",
        options: [
          "Cuando él mismo haya promovido el procedimiento mediante solicitud.",
          "Cuando, sin haber iniciado el procedimiento, tenga derechos subjetivos que puedan resultar afectados por la decisión que en el mismo se adopte.",
          "Cuando, sin haber iniciado el procedimiento, ostente intereses legítimos (individuales o colectivos) que puedan resultar afectados por la resolución.",
          "En todos los casos es obligatorio personarse mediante procurador y abogado antes del trámite de audiencia."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 4.1 LPACAP distingue tres supuestos: a) quienes lo promuevan (como titulares de derechos o intereses legítimos); b) los que, sin haber iniciado el procedimiento, tengan DERECHOS que puedan resultar afectados (son interesados aunque no se personen); y c) aquellos cuyos INTERESES LEGÍTIMOS puedan resultar afectados y se personen en el procedimiento en tanto no haya recaído resolución definitiva.",
        reference: "Artículo 4.1 de la Ley 39/2015 (LPACAP)",
        difficulty: "media"
      },
      {
        id: "t4-q2",
        topicId: 4,
        question:
          "Según el artículo 5.3 y 5.6 de la Ley 39/2015 (LPACAP), ¿para cuál de las siguientes actuaciones se presume la representación sin necesidad de acreditarla, y qué plazo debe conceder el órgano administrativo para subsanar la falta o insuficiencia de acreditación cuando ésta sí sea exigible?",
        options: [
          "Se presume para interponer recursos administrativos; el plazo de subsanación es de 15 días hábiles.",
          "Se presume para presentar declaraciones responsables; el plazo de subsanación es de 5 días hábiles.",
          "Se presume para los actos y gestiones de mero trámite; el plazo de subsanación cuando sea exigible (formular solicitudes, declaraciones responsables/comunicaciones, recursos, desistir o renunciar) es de 10 días hábiles (o superior cuando las circunstancias lo requieran).",
          "Nunca se presume la representación ante las Administraciones Públicas; el plazo de subsanación es de 20 días."
        ],
        correctIndex: 2,
        explanation:
          "Conforme al artículo 5.3 LPACAP, debe acreditarse la representación para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos, presumiéndose para los actos y gestiones de mero trámite. El artículo 5.6 fija un plazo de 10 días (o superior si las circunstancias lo requieren) para aportar o subsanar el defecto de acreditación.",
        reference: "Artículos 5.3 y 5.6 de la Ley 39/2015 (LPACAP)",
        difficulty: "basica"
      },
      {
        id: "t4-q3",
        topicId: 4,
        question:
          "Conforme al artículo 6.6 de la Ley 39/2015 (LPACAP), los poderes inscritos en el Registro Electrónico de Apoderamientos tendrán una validez determinada máxima de:",
        options: [
          "2 años a contar desde la fecha de inscripción, sin posibilidad de prórroga.",
          "4 años a contar desde la fecha de otorgamiento del poder notarial.",
          "5 años a contar desde la fecha de inscripción, pudiendo el poderdante revocar o prorrogar el poder en cualquier momento antes de la finalización de dicho plazo (por una validez máxima de otros 5 años).",
          "10 años a contar desde la fecha de inscripción."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 6.6 de la LPACAP establece que los poderes inscritos en el registro tendrán una validez determinada máxima de cinco años a contar desde la fecha de inscripción, y que las prórrogas otorgadas por el poderdante tendrán una validez determinada máxima de cinco años a contar desde la fecha de inscripción.",
        reference: "Artículo 6.6 de la Ley 39/2015 (LPACAP)",
        difficulty: "media"
      },
      {
        id: "t4-q4",
        topicId: 4,
        question:
          "De acuerdo con el artículo 14.2 de la Ley 39/2015 (LPACAP), ¿cuál de los siguientes sujetos NO está obligado por ley, con carácter general, a relacionarse a través de medios electrónicos con las Administraciones Públicas?",
        options: [
          "Las personas jurídicas y las entidades sin personalidad jurídica.",
          "Los empleados de las Administraciones Públicas para los trámites y actuaciones que realicen con ellas por razón de su condición de empleado público.",
          "Las personas físicas para cualquier solicitud administrativa, salvo que acrediten carecer de conexión a internet.",
          "Quienes ejerzan una actividad profesional para la que se requiera colegiación obligatoria, para los trámites y actuaciones que realicen con las Administraciones Públicas en ejercicio de dicha actividad profesional."
        ],
        correctIndex: 2,
        explanation:
          "Según el artículo 14.1 LPACAP, las personas físicas podrán elegir en todo momento si se comunican con las Administraciones Públicas para el ejercicio de sus derechos y obligaciones a través de medios electrónicos o no, salvo que estén obligadas (como los colegiados en ejercicio de su actividad o los empleados públicos en trámites por razón de su condición).",
        reference: "Artículo 14 de la Ley 39/2015 (LPACAP)",
        difficulty: "basica"
      },
      {
        id: "t4-q5",
        topicId: 4,
        question:
          "Sistemáticamente, dentro de la Ley 39/2015 (LPACAP), el derecho a «no presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder de las Administraciones Públicas o que hayan sido elaborados por éstas» se configura como:",
        options: [
          "Un derecho general de las personas en sus relaciones con las AAPP del artículo 13.",
          "Un derecho de los interesados en el procedimiento administrativo del artículo 53.1.d).",
          "Una potestad discrecional de la Administración del artículo 88.",
          "Un principio exclusivo de los procedimientos sancionadores del artículo 53.2."
        ],
        correctIndex: 1,
        explanation:
          "Es una distinción frecuente en test: mientras que el artículo 13 regula los derechos de las personas en sus relaciones con las AAPP, el artículo 53.1.d) regula como derecho específico del interesado en el procedimiento administrativo el de no presentar datos y documentos no exigidos por las normas o que ya se encuentren en poder de las AAPP o hayan sido elaborados por éstas.",
        reference: "Artículo 53.1.d) de la Ley 39/2015 (LPACAP)",
        difficulty: "media"
      },
      {
        id: "t4-q6",
        topicId: 4,
        question:
          "Según el artículo 21.2 y 21.3 de la Ley 39/2015 (LPACAP), el plazo máximo en el que debe notificarse la resolución expresa será el fijado por la norma reguladora del correspondiente procedimiento, que no podrá exceder de ____ salvo que una norma con rango de Ley o el Derecho de la UE establezca uno mayor; y cuando las normas reguladoras no fijen el plazo máximo, éste será de ____:",
        options: [
          "3 meses / 1 mes.",
          "6 meses / 3 meses.",
          "1 año / 6 meses.",
          "6 meses / 2 meses."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 21.2 LPACAP establece que el plazo máximo fijado por la norma reguladora no podrá exceder de 6 meses (salvo Ley o Derecho de la UE), y el artículo 21.3 dispone que cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será de 3 meses.",
        reference: "Artículos 21.2 y 21.3 de la Ley 39/2015 (LPACAP)",
        difficulty: "basica"
      },
      {
        id: "t4-q7",
        topicId: 4,
        question:
          "De acuerdo con el artículo 24.1 de la Ley 39/2015 (LPACAP), en los procedimientos iniciados a solicitud del interesado, ¿en cuál de los siguientes supuestos el silencio administrativo tiene carácter DESESTIMATORIO (negativo)?",
        options: [
          "En todos los procedimientos en los que la Administración no dicte resolución expresa en el plazo de 10 días.",
          "En los procedimientos relativos al ejercicio del derecho de petición del art. 29 CE, aquellos cuya estimación tuviera como consecuencia que se transfirieran al solicitante o a terceros facultades relativas al dominio público o al servicio público, impliquen actividades que puedan dañar el medio ambiente y en los procedimientos de responsabilidad patrimonial.",
          "Únicamente en las solicitudes de licencias de apertura de centros privados de educación infantil.",
          "En ningún caso, ya que la Ley 39/2015 eliminó por completo el silencio negativo en procedimientos iniciados a instancia de parte."
        ],
        correctIndex: 1,
        explanation:
          "Aunque la regla general en procedimientos iniciados a solicitud del interesado es el silencio positivo, el artículo 24.1 párrafo segundo de la LPACAP establece que el silencio tendrá efecto desestimatorio en el derecho de petición (art. 29 CE), transferencia de facultades sobre dominio público o servicio público, actividades que puedan dañar el medio ambiente, responsabilidad patrimonial y procedimientos de impugnación de actos y disposiciones (con la excepción del doble silencio en alzada).",
        reference: "Artículo 24.1 de la Ley 39/2015 (LPACAP)",
        difficulty: "alta"
      },
      {
        id: "t4-q8",
        topicId: 4,
        question:
          "Conforme al artículo 30.2 de la Ley 39/2015 (LPACAP), siempre que por Ley o en el Derecho de la Unión Europea no se exprese otro cómputo, cuando los plazos se señalen por días se entiende que éstos son:",
        options: [
          "Naturales, incluyéndose los sábados, domingos y festivos.",
          "Hábiles, excluyéndose del cómputo únicamente los domingos y los declarados festivos.",
          "Hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
          "Hábiles para el ciudadano y naturales para la Administración."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 30.2 LPACAP establece que cuando los plazos se señalen por días, se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
        reference: "Artículo 30.2 de la Ley 39/2015 (LPACAP)",
        difficulty: "basica"
      },
      {
        id: "t4-q9",
        topicId: 4,
        question:
          "En la fase de instrucción del procedimiento administrativo común (Ley 39/2015), ¿cuáles son los plazos legales del trámite de audiencia (art. 82.2) y del período de información pública (art. 83.2), respectivamente?",
        options: [
          "Trámite de audiencia: no inferior a 10 días ni superior a 15 días. Información pública: en ningún caso inferior a 20 días.",
          "Trámite de audiencia: no inferior a 15 días ni superior a 30 días. Información pública: en ningún caso inferior a 10 días.",
          "Trámite de audiencia: 10 días fijos improrrogables. Información pública: 1 mes.",
          "Trámite de audiencia: entre 10 y 20 días. Información pública: entre 10 y 15 días."
        ],
        correctIndex: 0,
        explanation:
          "Según el artículo 82.2 LPACAP, el plazo del trámite de audiencia no será inferior a 10 días ni superior a 15 días; por su parte, el artículo 83.2 LPACAP dispone que el plazo para formular alegaciones en el trámite de información pública en ningún caso podrá ser inferior a 20 días.",
        reference: "Artículos 82.2 y 83.2 de la Ley 39/2015 (LPACAP)",
        difficulty: "media"
      },
      {
        id: "t4-q10",
        topicId: 4,
        question:
          "Según el artículo 80 de la Ley 39/2015 (LPACAP), salvo disposición expresa en contrario, los informes que se soliciten en la instrucción de un procedimiento administrativo serán:",
        options: [
          "Preceptivos y vinculantes, y se emitirán en el plazo de 15 días.",
          "Facultativos y no vinculantes, y serán emitidos a través de medios electrónicos en el plazo de 10 días.",
          "Preceptivos y no vinculantes, y se emitirán en el plazo de 20 días.",
          "Facultativos y vinculantes, y se emitirán en el plazo de 30 días."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 80.1 y 80.2 de la LPACAP dispone que, salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes, y serán emitidos a través de medios electrónicos en el plazo de diez días.",
        reference: "Artículo 80 de la Ley 39/2015 (LPACAP)",
        difficulty: "basica"
      },
      {
        id: "t4-q11",
        topicId: 4,
        question:
          "De acuerdo con el artículo 20 de la Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno (y la Ley 1/2022 de la Comunitat Valenciana), ¿cuál es el plazo máximo para resolver y notificar una solicitud de acceso a la información pública y cuál es el sentido del silencio si transcurre dicho plazo sin resolución expresa?",
        options: [
          "Plazo máximo de 3 meses y silencio estimatorio (positivo).",
          "Plazo máximo de 1 mes desde la recepción de la solicitud por el órgano competente para resolver (ampliable por otro mes en caso de volumen o complejidad) y silencio desestimatorio (negativo).",
          "Plazo máximo de 15 días hábiles y silencio positivo.",
          "Plazo máximo de 6 meses y caducidad del procedimiento."
        ],
        correctIndex: 1,
        explanation:
          "Conforme al artículo 20.1 y 20.4 de la Ley 19/2013 (y concordantes de la Ley 1/2022 de la Generalitat), la resolución en la que se conceda o deniegue el acceso deberá notificarse en el plazo máximo de un mes desde la recepción de la solicitud (ampliable por otro mes si el volumen o la complejidad de la información lo hace necesario), entendiéndose desestimada (silencio negativo) si transcurre el plazo máximo sin haberse dictado y notificado resolución expresa.",
        reference: "Artículo 20 de la Ley 19/2013 y Ley 1/2022 de la Comunitat Valenciana",
        difficulty: "alta"
      },
      {
        id: "t4-q12",
        topicId: 4,
        question:
          "En el ejercicio del derecho de acceso a la información pública regulado en la Ley 19/2013 y en la Ley 1/2022 de Transparencia de la Comunitat Valenciana, respecto a la motivación de la solicitud por parte del ciudadano:",
        options: [
          "El solicitante está obligado a acreditar un interés legítimo directo y a motivar jurídicamente su solicitud.",
          "El solicitante NO está obligado a motivar su solicitud de acceso a la información; podrá exponer los motivos por los que solicita la información, que podrán ser tenidos en cuenta cuando se dicte la resolución, pero la ausencia de motivación no será por sí sola causa de rechazo.",
          "Solo están exentos de motivar su solicitud los concejales de la Corporación y los sindicatos más representativos.",
          "La falta de motivación determina la inadmisión automática a trámite sin posibilidad de subsanación."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 17.3 de la Ley 19/2013 establece expresamente que el solicitante no está obligado a motivar su solicitud de acceso a la información. Sin embargo, podrá exponer los motivos por los que solicita la información y que podrán ser tenidos en cuenta cuando se dicte la resolución; no obstante, la ausencia de motivación no será por sí sola causa de rechazo de la solicitud.",
        reference: "Artículo 17.3 de la Ley 19/2013 de Transparencia",
        difficulty: "media"
      }
    ]
  },
  {
    id: 5,
    slug: "tema-5-estatuto-basico-empleado-publico",
    block: "general",
    title: "El Estatuto Básico del Empleado Público y la Función Pública Local",
    officialTitle:
      "Tema 5.- El Estatuto Básico del Empleado Público. El personal funcionario de la Administración Local: clases de empleados públicos, selección, provisión y carrera administrativa. Personal laboral.",
    summary:
      "Estudio del TREBEP (RDL 5/2015), la Ley 4/2021 de la Función Pública Valenciana y el régimen local: tipología de empleados públicos (con las reformas de interinidad de la Ley 20/2021), grupos de clasificación profesional (Grupo B para Técnico de Educación Infantil), escalas y subescalas locales, acceso y selección, provisión de puestos, carrera profesional y personal laboral.",
    readTimeMinutes: 30,
    normativaClave: [
      "Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP)",
      "Ley 4/2021, de 16 de abril, de la Generalitat, de la Función Pública Valenciana (LFPV)",
      "Ley 20/2021, de 28 de diciembre, de medidas urgentes para la reducción de la temporalidad en el empleo público",
      "Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LRBRL, Título VII, arts. 89 a 104 bis)",
      "Real Decreto Legislativo 781/1986, de 18 de abril, Texto Refundido de las disposiciones legales vigentes en materia de Régimen Local (TRRL, arts. 126 a 177)"
    ],
    sections: [
      {
        title: "1. El Estatuto Básico del Empleado Público: marco normativo y clases de empleados",
        content: [
          "El mandato del artículo 103.3 de la Constitución Española —que reserva a la ley la regulación del estatuto de los funcionarios públicos y el acceso a la función pública de acuerdo con los principios de mérito y capacidad— se materializa con carácter básico en el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP), estructurado en 100 artículos y 8 Títulos. En el ámbito de las entidades locales de la Comunitat Valenciana (como el Ayuntamiento de Pinoso), el artículo 3 del TREBEP y el artículo 92 de la LRBRL establecen un orden de prelación específico: el personal funcionario local se rige primero por la legislación estatal básica (TREBEP y LRBRL), segundo por la legislación autonómica de función pública (la Ley 4/2021, de 16 de abril, de la Función Pública Valenciana - LFPV) y tercero por las normas reglamentarias propias de cada Corporación.",
          "El artículo 8 del TREBEP (y art. 16 LFPV) define a los empleados públicos como quienes desempeñan funciones retribuidas en las Administraciones Públicas al servicio de los intereses generales, clasificándolos en cuatro categorías: 1) Funcionarios de carrera (art. 9): vinculados por una relación estatutaria regulada por el Derecho Administrativo en virtud de nombramiento legal para servicios profesionales retribuidos de carácter permanente, reservándoseles en exclusiva el ejercicio de funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas o en la salvaguardia de los intereses generales; 2) Funcionarios interinos (art. 10); 3) Personal laboral, ya sea fijo, por tiempo indefinido o temporal (art. 11); y 4) Personal eventual (art. 12): el que realiza funciones expresamente calificadas como de confianza o asesoramiento especial en virtud de nombramiento y con carácter no permanente (su cese es libre y se produce, en todo caso, cuando cese la autoridad a la que presta asesoramiento, sin que su desempeño constituya mérito para el acceso a la función pública o la promoción interna).",
          "Tras la profunda reforma del artículo 10 del TREBEP por la Ley 20/2021, de 28 de diciembre (y su reflejo en el art. 18 de la Ley 4/2021 LFPV), el nombramiento de funcionarios interinos por razones expresamente justificadas de necesidad y urgencia se sujeta a plazos máximos improrrogables en sus cuatro supuestos legales."
        ],
        table: {
          headers: ["Supuesto de Funcionario Interino (Art. 10.1 TREBEP)", "Duración máxima legal", "Consecuencia al vencimiento"],
          rows: [
            [
              "a) Existencia de plazas vacantes cuando no sea posible su cobertura por funcionarios de carrera.",
              "Máximo de 3 años desde el nombramiento.",
              "Fin de la relación de interinidad y la vacante solo podrá ser ocupada por funcionario de carrera (salvo que el proceso selectivo quede desierto, en cuyo caso cabe otro nombramiento). Excepcionalmente puede permanecer si se ha publicado la convocatoria dentro de los 3 años."
            ],
            [
              "b) Sustitución transitoria de los titulares.",
              "El tiempo estrictamente necesario que dure la causa de sustitución.",
              "Cese automático al reincorporarse el titular o perder éste el derecho a la reserva del puesto."
            ],
            [
              "c) Ejecución de programas de carácter temporal (que no respondan a necesidades permanentes).",
              "Máximo de 3 años (ampliable hasta 12 meses más por las leyes de función pública autonómicas; art. 18.2.c LFPV).",
              "Cese automático al finalizar el programa o cumplirse el tope máximo."
            ],
            [
              "d) Exceso o acumulación de tareas.",
              "Plazo máximo de 9 meses, dentro de un período de 18 meses.",
              "Cese automático al cumplirse el plazo máximo."
            ]
          ]
        }
      },
      {
        title: "2. Grupos de clasificación profesional y estructura de la Función Pública Local",
        content: [
          "El artículo 76 del TREBEP (y art. 25 de la Ley 4/2021 LFPV) clasifica los cuerpos y escalas de funcionarios en tres grandes Grupos en función de la titulación exigida para el ingreso, a los que se suman las Agrupaciones Profesionales de la Disposición Adicional Sexta del TREBEP (en la Comunitat Valenciana denominadas Agrupaciones Profesionales Funcionariales - APF, para las que no se exige estar en posesión de ninguna de las titulaciones previstas en el sistema educativo).",
          "En la Administración Local (arts. 92 y 92 bis LRBRL y arts. 167-172 TRRL 781/1986), los funcionarios se estructuran en dos grandes bloques: 1) Funcionarios de Administración Local con habilitación de carácter nacional (art. 92 bis LRBRL), a los que se reservan las funciones públicas necesarias en todas las Corporaciones locales a través de la Escala de Secretaría (fe pública y asesoramiento legal preceptivo), la Escala de Intervención-Tesorería (control y fiscalización interna de la gestión económico-financiera y presupuestaria, contabilidad, tesorería y recaudación) y la Escala de Secretaría-Intervención (en municipios pequeños); y 2) Funcionarios propios de cada Corporación Local, que se dividen a su vez en la Escala de Administración General (funciones comunes de trámite, estudio y gestión administrativa: subescalas Técnica, de Gestión, Administrativa, Auxiliar y Subalterna) y la Escala de Administración Especial (funciones que constituyen el objeto peculiar de una carrera, profesión, arte u oficio: subescala Técnica —Técnicos Superiores, Medios y Auxiliares, donde se encuadra el puesto de Técnico de Educación Infantil— y subescala de Servicios Especiales, como Policía Local, Extinción de Incendios o Plazas de Cometidos Especiales)."
        ],
        table: {
          headers: ["Grupo / Subgrupo (Art. 76 TREBEP)", "Titulación académica exigida para el acceso", "Ejemplo en Administración Local (Ayuntamiento de Pinoso)"],
          rows: [
            [
              "Grupo A — Subgrupo A1",
              "Título universitario de Grado (o Licenciado, Ingeniero o Arquitecto), más Máster habilitante cuando lo exija la profesión.",
              "Técnico de Administración General (TAG), Psicólogo, Letrado, Secretario/Interventor."
            ],
            [
              "Grupo A — Subgrupo A2",
              "Título universitario de Grado (o Diplomado Universitario, Ingeniero Técnico o Arquitecto Técnico).",
              "Técnico de Gestión, Trabajador Social, Maestro de Educación Infantil, Educador Social."
            ],
            [
              "Grupo B",
              "Título de Técnico Superior (Formación Profesional de Grado Superior).",
              "Técnico de Educación Infantil (Técnico Superior en Educación Infantil — plaza objeto de esta convocatoria)."
            ],
            [
              "Grupo C — Subgrupo C1",
              "Título de Bachiller o Técnico (Formación Profesional de Grado Medio).",
              "Administrativo de Administración General, Agente de Policía Local."
            ],
            [
              "Grupo C — Subgrupo C2",
              "Título de Graduado en Educación Secundaria Obligatoria (ESO).",
              "Auxiliar Administrativo, Auxiliar de Servicios."
            ],
            [
              "Agrupaciones Profesionales (DA 6ª TREBEP / APF en LFPV)",
              "Sin requisito de titulación académica del sistema educativo.",
              "Subalterno, Conserje, Peón de servicios múltiples."
            ]
          ]
        }
      },
      {
        title: "3. Selección de personal y órganos de selección",
        content: [
          "De acuerdo con el artículo 55 del TREBEP, todos los ciudadanos tienen derecho al acceso al empleo público conforme a los principios constitucionales de igualdad, mérito y capacidad, junto con los principios rectores de publicidad de las convocatorias y de sus bases, transparencia, imparcialidad y profesionalidad de los miembros de los órganos de selección, independencia y discrecionalidad técnica en su actuación, adecuación entre el contenido de los procesos selectivos y las funciones o tareas a desarrollar, y agilidad, sin perjuicio de la objetividad.",
          "Para poder participar en los procesos selectivos (art. 56 TREBEP), es necesario reunir seis requisitos generales en la fecha de finalización del plazo de presentación de instancias y mantenerlos hasta la toma de posesión: 1) Tener la nacionalidad española (o ser nacional de un Estado miembro de la UE o de Estados con tratado de libre circulación de trabajadores, salvo en empleos que impliquen ejercicio del poder público, art. 57); 2) Poseer la capacidad funcional para el desempeño de las tareas; 3) Tener cumplidos 16 años y no exceder, en su caso, de la edad máxima de jubilación forzosa; 4) No haber sido separado mediante expediente disciplinario del servicio de cualquiera de las AAPP ni hallarse en inhabilitación absoluta o especial para empleos o cargos públicos por resolución judicial; 5) Poseer la titulación exigida (para esta convocatoria: Título de Técnico Superior en Educación Infantil o equivalente); y 6) En las convocatorias con plazas en contacto habitual con menores (como las Escuelas Infantiles Municipales), acreditar no haber sido condenado por sentencia firme por delitos contra la libertad e indemnidad sexual conforme al artículo 57 de la LO 8/2021 (LOPIVI) mediante certificación negativa del Registro Central de Delincuentes Sexuales.",
          "Asimismo, el artículo 59 del TREBEP (y art. 64 de la Ley 4/2021 LFPV) exige que en las Ofertas de Empleo Público se reserve un cupo no inferior al 7 % de las vacantes para ser cubiertas entre personas con discapacidad (grado igual o superior al 33 %), de modo que al menos el 2 % de la oferta total corresponda a personas que acrediten discapacidad intelectual y el resto a cualquier otro tipo de discapacidad.",
          "Los sistemas selectivos de funcionarios de carrera (art. 61 TREBEP) son la oposición y el concurso-oposición (que es el sistema establecido en las bases del Ayuntamiento de Pinoso para Técnico de Educación Infantil, con fase de oposición eliminatoria sobre 60 puntos y fase de concurso de méritos sobre 40 puntos), y solo en virtud de ley podrá aplicarse, con carácter excepcional, el sistema de concurso que consistirá únicamente en la valoración de méritos. Los órganos de selección (art. 60 TREBEP y art. 67 LFPV) serán colegiados y su composición deberá ajustarse a los principios de imparcialidad, profesionalidad y paridad entre mujeres y hombres (presencia equilibrada donde ningún sexo supere el 60 % ni sea inferior al 40 %). No pueden formar parte de ellos el personal de elección o de designación política, los funcionarios interinos ni el personal eventual, y la pertenencia a los mismos será siempre a título individual, no pudiendo ostentarse ésta en representación o por cuenta de nadie. Además, todos sus miembros deben poseer una titulación igual o superior a la exigida para el acceso a las plazas convocadas."
        ]
      },
      {
        title: "4. Provisión de puestos de trabajo y carrera administrativa",
        content: [
          "Una vez adquirida la condición de funcionario de carrera mediante la superación del proceso selectivo, el nombramiento por el órgano competente (el Alcalde en la Administración Local), el acto de acatamiento de la Constitución y del Estatuto de Autonomía y la toma de posesión dentro del plazo establecido (art. 62 TREBEP), la provisión de puestos de trabajo (arts. 78 a 84 TREBEP y arts. 111 a 132 LFPV) se lleva a cabo por dos procedimientos ordinarios basados en igualdad, mérito, capacidad y publicidad: 1) El concurso (procedimiento normal de provisión), consistente en la valoración de los méritos y capacidades y, en su caso, aptitudes de los candidatos por órganos colegiados de carácter técnico; y 2) La libre designación con convocatoria pública, reservada para puestos de especial responsabilidad y confianza previstos en la RPT, en la que el órgano competente aprecia discrecionalmente la idoneidad de los candidatos y puede acordar también su cese discrecional (debiendo asignarse al funcionario cesado otro puesto correspondiente a su cuerpo o escala). Existen, además, formas extraordinarias o temporales de provisión como la comisión de servicios (en caso de urgente e inaplazable necesidad, por plazo general de 1 año prorrogable por otro año en la LFPV), la adscripción provisional, la permuta, la redistribución de efectivos o la movilidad por razón de violencia de género o por motivos de salud.",
          "Por su parte, la carrera profesional (arts. 16 a 20 TREBEP y arts. 89 a 101 LFPV) es el conjunto ordenado de oportunidades de ascenso y expectativas de progreso profesional conforme a los principios de igualdad, mérito y capacidad. El artículo 16.3 del TREBEP distingue cuatro modalidades que pueden aplicarse de forma aislada o simultánea, vinculadas a la evaluación periódica del desempeño (art. 20 TREBEP)."
        ],
        table: {
          headers: ["Modalidad de Carrera Profesional (Art. 16.3 TREBEP)", "Definición legal y efectos para el funcionario"],
          rows: [
            [
              "a) Carrera horizontal (Art. 17 TREBEP)",
              "Consiste en la progresión de grado, categoría, escalón u otros conceptos análogos, SIN necesidad de cambiar de puesto de trabajo, valorando la trayectoria, actuación profesional, calidad de los trabajos, conocimientos adquiridos y el resultado de la evaluación del desempeño."
            ],
            [
              "b) Carrera vertical",
              "Consiste en el ascenso en la estructura de puestos de trabajo por los procedimientos de provisión (concurso o libre designación) establecidos en el Capítulo III del Título V del TREBEP (implica cambio efectivo a un puesto de nivel superior)."
            ],
            [
              "c) Promoción interna vertical (Art. 18 TREBEP)",
              "Consiste en el ascenso desde un cuerpo o escala de un Subgrupo, o Grupo de clasificación profesional en el supuesto de que éste no tenga Subgrupo, a otro superior (p. ej., del Subgrupo C1 al Grupo B o del Grupo B al Subgrupo A2), exigiendo poseer la titulación requerida, una antigüedad de al menos 2 años de servicio activo en el subgrupo o grupo inferior y superar las pruebas selectivas."
            ],
            [
              "d) Promoción interna horizontal",
              "Consiste en el acceso a cuerpos o escalas del MISMO Subgrupo profesional (de acuerdo con lo dispuesto en el art. 18 TREBEP)."
            ]
          ]
        }
      },
      {
        title: "5. El personal laboral al servicio de la Administración Local",
        content: [
          "Conforme al artículo 11 del TREBEP y al artículo 19 de la Ley 4/2021 (LFPV), es personal laboral el que en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones Públicas. En función de la duración del contrato, éste podrá ser fijo, por tiempo indefinido o temporal.",
          "En cuanto a su régimen jurídico (art. 7 TREBEP), el personal laboral al servicio de las Administraciones Públicas se rige, además de por la legislación laboral (Real Decreto Legislativo 2/2015, Estatuto de los Trabajadores) y por las demás normas convencionalmente aplicables (convenios colectivos), por los preceptos del propio TREBEP que así lo dispongan expresamente (tales como el código de conducta y deberes éticos, los principios de acceso, el régimen de incompatibilidades, los permisos de conciliación y el régimen disciplinario básico).",
          "En el ámbito de la Administración Local, el artículo 92.2 de la Ley 7/1985 (LRBRL) establece como regla general que las funciones que impliquen la participación directa o indirecta en el ejercicio de las potestades públicas o en la salvaguardia de los intereses generales del Estado y de las Administraciones Públicas corresponden exclusivamente a los funcionarios públicos; pudiendo desempeñar el personal laboral los puestos de naturaleza no permanente, aquellos cuyas actividades sean propias de oficios, vigilancia, custodia, porteo y otros análogos, así como los de carácter instrumental correspondientes a las áreas de mantenimiento y conservación de edificios, equipos e instalaciones, artes gráficas, encuestas, protección civil y comunicación social, o expresión artística y servicios sociales o educativos cuando no impliquen ejercicio de autoridad. Sus sistemas selectivos (art. 61.7 TREBEP) son igualmente la oposición, el concurso-oposición o el concurso de valoración de méritos, respetando siempre los principios de igualdad, mérito, capacidad y publicidad."
        ]
      }
    ],
    esquemaVisual: {
      title: "Estructura del Empleo Público en el TREBEP y la Administración Local",
      nodes: [
        {
          label: "4 Clases de Empleados Públicos (Arts. 8-12 TREBEP)",
          children: [
            "1. Funcionarios de carrera (Art. 9: nombramiento legal, permanentes, reserva de potestades públicas)",
            "2. Funcionarios interinos (Art. 10 tras Ley 20/2021): Vacante (máx. 3 años) | Sustitución | Programas (máx. 3 años + 12m) | Acumulación tareas (máx. 9 meses en 18 meses)",
            "3. Personal laboral (Art. 11: contrato escrito; fijo, por tiempo indefinido o temporal)",
            "4. Personal eventual (Art. 12: confianza o asesoramiento especial; cese libre o automático)"
          ]
        },
        {
          label: "Grupos de Clasificación (Art. 76 TREBEP) y Escalas Locales",
          children: [
            "Grupo A (A1 y A2: Grado universitario) | Grupo B (Técnico Superior FP — Técnico de Educación Infantil) | Grupo C (C1: Bachiller/Técnico; C2: ESO) | Agrupaciones Profesionales (DA 6ª)",
            "Habilitación Nacional (Art. 92 bis LRBRL): Secretaría, Intervención-Tesorería y Secretaría-Intervención",
            "Propios de la Corporación: Escala de Administración General y Escala de Administración Especial (Técnica y Servicios Especiales)"
          ]
        },
        {
          label: "Selección y Órganos de Selección (Arts. 55-62 TREBEP)",
          children: [
            "Sistemas selectivos (Art. 61): Oposición, Concurso-Oposición y excepcionalmente Concurso (por ley)",
            "Cupo discapacidad (Art. 59): Mínimo 7 % de las vacantes en OEP (al menos 2 % para discapacidad intelectual)",
            "Órganos de selección (Art. 60): Colegiados, paritarios, técnicos; EXCLUIDOS cargos políticos, interinos y eventuales; participación siempre a título individual"
          ]
        },
        {
          label: "Provisión y Carrera Administrativa (Arts. 16-20 y 78-80 TREBEP)",
          children: [
            "Provisión ordinaria (Art. 78): Concurso (regla general) y Libre Designación con convocatoria pública",
            "4 Modalidades de Carrera (Art. 16.3): Carrera horizontal (sin cambiar de puesto), Carrera vertical (cambio de puesto), Promoción interna vertical (ascenso de subgrupo con 2 años de antigüedad) y Promoción interna horizontal"
          ]
        }
      ]
    },
    datosOro: [
      "La plaza de Técnico de Educación Infantil se encuadra en el Grupo B de clasificación profesional del artículo 76 del TREBEP (requiere el título de Técnico Superior en Educación Infantil) y dentro de la Escala de Administración Especial, Subescala Técnica.",
      "Los 4 supuestos de nombramiento de funcionarios interinos (art. 10.1 TREBEP reformado por Ley 20/2021) son: vacante (máx. 3 años), sustitución transitoria, ejecución de programas temporales (máx. 3 años, ampliable 12 meses por ley autonómica) y exceso o acumulación de tareas (máx. 9 meses dentro de 18 meses).",
      "En los órganos de selección (art. 60 TREBEP) NO pueden formar parte el personal de elección o designación política, los funcionarios interinos ni el personal eventual, y la pertenencia es siempre a título individual.",
      "En las Ofertas de Empleo Público se reservará un cupo no inferior al 7 % de las vacantes para personas con discapacidad, de modo que al menos el 2 % corresponda a discapacidad intelectual (art. 59 TREBEP).",
      "La carrera horizontal (art. 16.3.a y 17 TREBEP) consiste en la progresión de grado o categoría SIN necesidad de cambiar de puesto de trabajo, mientras que la carrera vertical consiste en el ascenso en la estructura de puestos mediante concurso o libre designación.",
      "Para participar en la promoción interna vertical (art. 18.2 TREBEP), los funcionarios deben poseer los requisitos de titulación, tener una antigüedad de, al menos, 2 años de servicio activo en el inferior Subgrupo o Grupo y superar las correspondientes pruebas selectivas.",
      "Los procedimientos ordinarios de provisión de puestos de trabajo reservados a funcionarios de carrera (art. 78 TREBEP) son dos: el concurso (sistema normal) y la libre designación con convocatoria pública."
    ],
    temaDesarrollo: {
      introduccion:
        "El régimen jurídico de los empleados públicos encuentra su anclaje en el artículo 103.3 de la Constitución Española, que consagra un modelo de función pública profesionalizada basado en los principios de igualdad, mérito, capacidad e imparcialidad. Desarrollado con carácter básico por el Real Decreto Legislativo 5/2015, de 30 de octubre (TREBEP), y en nuestro ámbito autonómico por la Ley 4/2021, de 16 de abril, de la Función Pública Valenciana (LFPV), este bloque normativo —junto con la Ley 7/1985 LRBRL y el RDL 781/1986 TRRL— regula el estatuto del personal al servicio del Ayuntamiento de Pinoso.",
      estructuraEpigrafes: [
        {
          epigraph: "1. El Estatuto Básico del Empleado Público y las clases de empleados públicos en la Administración Local",
          body: "Se expondrá el objeto, ámbito de aplicación y prelación de fuentes del personal funcionario local (art. 3 TREBEP y art. 92 LRBRL: legislación básica estatal, legislación autonómica valenciana —Ley 4/2021— y reglamentos propios de la corporación). Se analizarán las cuatro clases de empleados públicos de los artículos 8 a 12 del TREBEP (y arts. 16 a 20 LFPV): funcionarios de carrera (reserva de funciones que impliquen ejercicio de potestades públicas), funcionarios interinos (detallando los cuatro supuestos tasados y plazos máximos del art. 10.1 tras la Ley 20/2021: vacante máx. 3 años, sustitución, programas máx. 3 años y acumulación de tareas máx. 9 meses en 18 meses), personal laboral (fijo, por tiempo indefinido o temporal) y personal eventual. Asimismo, se explicarán los Grupos de clasificación profesional del artículo 76 TREBEP (Grupo A: A1 y A2; Grupo B: Técnico Superior, donde se ubica el Técnico de Educación Infantil; Grupo C: C1 y C2; y Agrupaciones Profesionales DA 6ª) y la estructura local en funcionarios con habilitación de carácter nacional (art. 92 bis LRBRL) y funcionarios propios (Escala de Administración General y Escala de Administración Especial)."
        },
        {
          epigraph: "2. Selección, provisión de puestos de trabajo y carrera administrativa",
          body: "Se desarrollarán los principios rectores del acceso al empleo público (art. 55 TREBEP), los requisitos generales de participación (art. 56 TREBEP y certificado negativo de delitos sexuales para puestos en contacto con menores), la reserva mínima del 7 % de vacantes para personas con discapacidad (art. 59), la composición técnica, paritaria e individual de los órganos de selección con exclusión de cargos políticos, interinos y eventuales (art. 60 TREBEP y art. 67 LFPV), y los sistemas selectivos de oposición, concurso-oposición y excepcionalmente concurso (art. 61). Seguidamente se explicarán los sistemas de provisión de puestos (arts. 78 a 84 TREBEP: concurso como procedimiento normal, libre designación con convocatoria pública y formas temporales como la comisión de servicios) y las cuatro modalidades de carrera profesional del artículo 16.3 del TREBEP (carrera horizontal, carrera vertical, promoción interna vertical con requisito de 2 años de antigüedad y promoción interna horizontal), vinculadas a la evaluación del desempeño (art. 20)."
        },
        {
          epigraph: "3. Régimen jurídico del personal laboral al servicio de la Administración Local",
          body: "Se abordará el concepto y modalidades del personal laboral (art. 11 TREBEP), su sistema dual de fuentes (art. 7 TREBEP: legislación laboral, convenios colectivos y preceptos del TREBEP que así lo dispongan), los puestos que pueden ser desempeñados por personal laboral en las Entidades Locales conforme al artículo 92.2 de la LRBRL y sus sistemas de selección y provisión con pleno respeto a los principios de igualdad, mérito, capacidad y publicidad."
        }
      ],
      conclusion:
        "En conclusión, el marco estatutario configurado por el TREBEP y la Ley 4/2021 de la Función Pública Valenciana garantiza que el acceso, la provisión y la promoción profesional en las Corporaciones Locales respondan estrictamente al mérito y la capacidad técnica. En el caso del Técnico de Educación Infantil, su encuadramiento en el Grupo B dentro de la Escala de Administración Especial reconoce la alta cualificación pedagógica exigida para la atención educativa en el primer ciclo de Educación Infantil.",
      bibliografiaYNormativa: [
        "Real Decreto Legislativo 5/2015, de 30 de octubre, texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP).",
        "Ley 4/2021, de 16 de abril, de la Generalitat, de la Función Pública Valenciana (LFPV).",
        "Ley 20/2021, de 28 de diciembre, de medidas urgentes para la reducción de la temporalidad en el empleo público.",
        "Ley 7/1985, de 2 de abril (LRBRL, arts. 89 a 104) y Real Decreto Legislativo 781/1986, de 18 de abril (TRRL, arts. 126 a 177)."
      ],
      consejosTribunal: [
        "Menciona expresamente que la plaza a la que opositas (Técnico de Educación Infantil) pertenece al Grupo B del artículo 76 del TREBEP y a la Escala de Administración Especial, Subescala Técnica.",
        "Domina al milímetro los plazos máximos de los funcionarios interinos del artículo 10.1 TREBEP tras la reforma de la Ley 20/2021 (3 años para vacante y programas; 9 meses dentro de 18 meses para acumulación de tareas).",
        "Distingue sin vacilar las 4 modalidades de carrera del artículo 16.3 TREBEP (horizontal vs vertical; promoción interna vertical vs horizontal)."
      ]
    },
    questions: [
      {
        id: "t5-q1",
        topicId: 5,
        question:
          "De acuerdo con el artículo 8.2 del Real Decreto Legislativo 5/2015 (TREBEP), los empleados públicos se clasifican en:",
        options: [
          "Funcionarios de carrera, funcionarios en prácticas, personal laboral y personal directivo.",
          "Funcionarios de carrera, funcionarios interinos, personal laboral (ya sea fijo, por tiempo indefinido o temporal) y personal eventual.",
          "Funcionarios de Administración General, funcionarios de Administración Especial y personal contratado administrativo.",
          "Funcionarios de carrera, funcionarios con habilitación nacional y personal laboral fijo."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 8.2 del TREBEP clasifica a los empleados públicos en cuatro categorías: a) Funcionarios de carrera, b) Funcionarios interinos, c) Personal laboral, ya sea fijo, por tiempo indefinido o temporal, y d) Personal eventual.",
        reference: "Artículo 8.2 del RDL 5/2015 (TREBEP)",
        difficulty: "basica"
      },
      {
        id: "t5-q2",
        topicId: 5,
        question:
          "Según la redacción vigente del artículo 10.1.d) del TREBEP (tras la reforma operada por la Ley 20/2021), ¿cuál es el plazo máximo de duración del nombramiento de un funcionario interino por exceso o acumulación de tareas?",
        options: [
          "Un plazo máximo de 6 meses, dentro de un período de 12 meses.",
          "Un plazo máximo de 9 meses, dentro de un período de 18 meses.",
          "Un plazo máximo de 12 meses, prorrogable por otros 6 meses.",
          "Un plazo máximo de 3 años improrrogables."
        ],
        correctIndex: 1,
        explanation:
          "¡Cuidado con las versiones antiguas! Tras la Ley 20/2021, el artículo 10.1.d) del TREBEP amplió el supuesto de exceso o acumulación de tareas a un plazo máximo de nueve meses, dentro de un período de dieciocho meses (anteriormente era de 6 meses en un período de 12 meses).",
        reference: "Artículo 10.1.d) del RDL 5/2015 (TREBEP)",
        difficulty: "alta"
      },
      {
        id: "t5-q3",
        topicId: 5,
        question:
          "Conforme al artículo 10.1.a) y 10.4 del TREBEP, en el supuesto de nombramiento de funcionario interino por existencia de plazas vacantes cuando no sea posible su cobertura por funcionarios de carrera, ¿cuál es el plazo máximo de duración desde el nombramiento?",
        options: [
          "1 año desde el nombramiento.",
          "2 años desde el nombramiento.",
          "3 años desde el nombramiento, transcurridos los cuales se producirá el fin de la relación de interinidad y la vacante solo podrá ser ocupada por funcionario de carrera (salvo que el proceso selectivo quede desierto o se haya publicado la convocatoria dentro de dicho plazo).",
          "5 años desde la aprobación de la Oferta de Empleo Público."
        ],
        correctIndex: 2,
        explanation:
          "El artículo 10.1.a) y 10.4 del TREBEP fija un máximo de tres años para la cobertura interina de plazas vacantes, transcurridos los cuales finaliza la relación de interinidad y la vacante solo puede ser ocupada por funcionario de carrera, salvo que el correspondiente proceso selectivo quede desierto.",
        reference: "Artículo 10.1.a) y 10.4 del RDL 5/2015 (TREBEP)",
        difficulty: "media"
      },
      {
        id: "t5-q4",
        topicId: 5,
        question:
          "De acuerdo con el artículo 76 del TREBEP, ¿en qué Grupo de clasificación profesional se integran los cuerpos y escalas para cuyo ingreso se exige estar en posesión del título de Técnico Superior (como es el caso de la plaza de Técnico de Educación Infantil del Ayuntamiento de Pinoso)?",
        options: [
          "En el Grupo A, Subgrupo A2.",
          "En el Grupo B.",
          "En el Grupo C, Subgrupo C1.",
          "En las Agrupaciones Profesionales de la Disposición Adicional Sexta."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 76 del TREBEP establece literalmente que para el acceso a los cuerpos o escalas del Grupo B se exigirá estar en posesión del título de Técnico Superior (Formación Profesional de Grado Superior). Para el Grupo A (A1 y A2) se exige título universitario de Grado; para el C1, Bachiller o Técnico; y para el C2, Graduado en ESO.",
        reference: "Artículo 76 del RDL 5/2015 (TREBEP)",
        difficulty: "basica"
      },
      {
        id: "t5-q5",
        topicId: 5,
        question:
          "Según el artículo 60 del TREBEP (y art. 67 de la Ley 4/2021 LFPV), respecto a la composición de los órganos de selección (Tribunales calificadores), señale la afirmación correcta:",
        options: [
          "Podrán formar parte de ellos el Alcalde, los Concejales delegados de personal y un representante designado por cada sindicato.",
          "El personal de elección o de designación política, los funcionarios interinos y el personal eventual NO podrán formar parte de los órganos de selección, y la pertenencia a los mismos será siempre a título individual, no pudiendo ostentarse ésta en representación o por cuenta de nadie.",
          "Los funcionarios interinos con más de 5 años de antigüedad sí pueden ser vocales de los órganos de selección.",
          "La composición de los órganos de selección no está sujeta al principio de paridad entre mujeres y hombres."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 60.2 y 60.3 del TREBEP prohíbe expresamente que formen parte de los órganos de selección el personal de elección o de designación política, los funcionarios interinos y el personal eventual, y establece que la pertenencia a los órganos de selección será siempre a título individual, no pudiendo ostentarse en representación o por cuenta de nadie.",
        reference: "Artículo 60 del RDL 5/2015 (TREBEP)",
        difficulty: "basica"
      },
      {
        id: "t5-q6",
        topicId: 5,
        question:
          "Conforme al artículo 59.1 del TREBEP, en las ofertas de empleo público se reservará un cupo de las vacantes para ser cubiertas entre personas con discapacidad (grado igual o superior al 33 %) no inferior al:",
        options: [
          "5 %, correspondiendo al menos el 1 % a discapacidad intelectual.",
          "7 %, de modo que al menos el 2 % de las plazas ofertadas lo sea para ser cubiertas por personas que acrediten discapacidad intelectual y el resto para cualquier otro tipo de discapacidad.",
          "10 %, sin distinción por tipo de discapacidad.",
          "3 %, reservado íntegramente al turno de promoción interna."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 59.1 del TREBEP establece que en las ofertas de empleo público se reservará un cupo no inferior al siete por ciento (7 %) de las vacantes para ser cubiertas entre personas con discapacidad, de modo que al menos el dos por ciento (2 %) de las plazas ofertadas lo sea para personas que acrediten discapacidad intelectual y el resto para personas que acrediten cualquier otro tipo de discapacidad.",
        reference: "Artículo 59.1 del RDL 5/2015 (TREBEP)",
        difficulty: "media"
      },
      {
        id: "t5-q7",
        topicId: 5,
        question:
          "De acuerdo con los artículos 16.3 y 17 del TREBEP, la modalidad de carrera profesional que consiste en la progresión de grado, categoría, escalón u otros conceptos análogos SIN necesidad de cambiar de puesto de trabajo se denomina:",
        options: [
          "Carrera vertical.",
          "Promoción interna vertical.",
          "Carrera horizontal.",
          "Promoción interna horizontal."
        ],
        correctIndex: 2,
        explanation:
          "Según el artículo 16.3.a) del TREBEP, la carrera horizontal consiste en la progresión de grado, categoría, escalón u otros conceptos análogos, sin necesidad de cambiar de puesto de trabajo. Por el contrario, la carrera vertical (letra b) consiste en el ascenso en la estructura de puestos de trabajo por los procedimientos de provisión (concurso o libre designación).",
        reference: "Artículos 16.3 y 17 del RDL 5/2015 (TREBEP)",
        difficulty: "media"
      },
      {
        id: "t5-q8",
        topicId: 5,
        question:
          "Según el artículo 18.2 del TREBEP, para poder participar en procesos de promoción interna vertical (ascenso desde un cuerpo o escala de un Subgrupo o Grupo a otro superior), los funcionarios deberán poseer los requisitos exigidos para el ingreso, superar las pruebas selectivas y tener una antigüedad en el inferior Subgrupo o Grupo de clasificación profesional de, al menos:",
        options: [
          "1 año de servicio activo.",
          "2 años de servicio activo.",
          "3 años de servicio activo.",
          "5 años de servicio activo."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 18.2 del TREBEP dispone expresamente que los funcionarios deberán poseer los requisitos exigidos para el ingreso, tener una antigüedad de, al menos, dos años de servicio activo en el inferior Subgrupo, o Grupo de clasificación profesional, en el supuesto de que éste no tenga Subgrupo, y superar las correspondientes pruebas selectivas.",
        reference: "Artículo 18.2 del RDL 5/2015 (TREBEP)",
        difficulty: "media"
      },
      {
        id: "t5-q9",
        topicId: 5,
        question:
          "Conforme al artículo 78.2 del TREBEP, ¿cuáles son los dos procedimientos de provisión de puestos de trabajo del personal funcionario de carrera?",
        options: [
          "La oposición y el concurso-oposición.",
          "El concurso y la libre designación con convocatoria pública.",
          "La permuta y la transferencia forzosa.",
          "La promoción interna y la evaluación del desempeño."
        ],
        correctIndex: 1,
        explanation:
          "No deben confundirse los sistemas de selección para el acceso (oposición, concurso-oposición y excepcionalmente concurso, art. 61 TREBEP) con los procedimientos de provisión de puestos de trabajo ya siendo funcionario de carrera, que según el artículo 78.2 del TREBEP son el concurso (procedimiento normal) y la libre designación con convocatoria pública.",
        reference: "Artículo 78.2 del RDL 5/2015 (TREBEP)",
        difficulty: "basica"
      },
      {
        id: "t5-q10",
        topicId: 5,
        question:
          "Dentro de la estructura de la función pública propia de las Corporaciones Locales (RDL 781/1986 TRRL y LRBRL), ¿en qué Escala y Subescala se integran los funcionarios que realizan tareas que son objeto de una carrera, profesión, arte u oficio, como un Técnico de Educación Infantil?",
        options: [
          "En la Escala de Habilitación de Carácter Nacional, Subescala de Secretaría-Intervención.",
          "En la Escala de Administración General, Subescala de Gestión.",
          "En la Escala de Administración Especial, Subescala Técnica (Técnicos Medios / Técnicos Superiores o Auxiliares según titulación).",
          "En la Escala de Administración General, Subescala Administrativa."
        ],
        correctIndex: 2,
        explanation:
          "Conforme a los artículos 167 y 170 a 172 del TRRL 781/1986, los funcionarios de las Corporaciones Locales que desempeñan funciones que constituyen el objeto peculiar de una carrera, profesión, arte u oficio se integran en la Escala de Administración Especial, Subescala Técnica.",
        reference: "Artículos 167 y 170-172 del Real Decreto Legislativo 781/1986 (TRRL)",
        difficulty: "media"
      },
      {
        id: "t5-q11",
        topicId: 5,
        question:
          "Respecto al personal eventual regulado en el artículo 12 del TREBEP y el artículo 104 de la Ley 7/1985 (LRBRL), señale la opción INCORRECTA:",
        options: [
          "Solo realiza funciones expresamente calificadas como de confianza o asesoramiento especial.",
          "Su nombramiento y cese serán libres, y el cese tendrá lugar, en todo caso, cuando se produzca el de la autoridad a la que se preste la función de confianza o asesoramiento.",
          "La condición de personal eventual constituirá mérito preferente para el acceso a la Función Pública y para la promoción interna.",
          "En el Ayuntamiento, el número, características y retribuciones del personal eventual serán determinados por el Pleno al comienzo de su mandato."
        ],
        correctIndex: 2,
        explanation:
          "La opción C es falsa: el artículo 12.4 del TREBEP establece tajantemente que «La condición de personal eventual NO podrá constituir mérito para el acceso a la Función Pública o para la promoción interna».",
        reference: "Artículo 12.4 del RDL 5/2015 (TREBEP) y Artículo 104 de la Ley 7/1985 (LRBRL)",
        difficulty: "basica"
      },
      {
        id: "t5-q12",
        topicId: 5,
        question:
          "De acuerdo con el artículo 61.6 del TREBEP, los sistemas selectivos de funcionarios de carrera serán los de oposición y concurso-oposición, y solo en virtud de ley podrá aplicarse, con carácter excepcional, el sistema de:",
        options: [
          "Libre designación directa por el Alcalde.",
          "Concurso, que consistirá únicamente en la valoración de méritos.",
          "Entrevista curricular vinculante sin baremo público.",
          "Sorteo público entre inscritos en el servicio público de empleo."
        ],
        correctIndex: 1,
        explanation:
          "El artículo 61.6 del TREBEP dispone que los sistemas selectivos de funcionarios de carrera serán los de oposición y concurso-oposición, y que «Sola en virtud de ley podrá aplicarse, con carácter excepcional, el sistema de concurso que consistirá únicamente en la valoración de méritos».",
        reference: "Artículo 61.6 del RDL 5/2015 (TREBEP)",
        difficulty: "basica"
      }
    ]
  }
];
