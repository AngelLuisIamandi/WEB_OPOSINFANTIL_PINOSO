import { PracticalCase } from "@/types/oposicion";

export const supuestosPracticos: PracticalCase[] = [
  {
    id: "supuesto-1-acogida-apego-familias",
    number: 1,
    title: "Periodo de Acogida, Apego Seguro e Intervención con las Familias en Aula de 1-2 Años",
    ageGroup: "1-2 años",
    relatedTopics: [11, 12, 13, 20, 21, 22],
    scenario:
      "Usted es Técnico/a de Educación Infantil en la Escuela Infantil Municipal del Ayuntamiento de Pinoso, tutor/a de un aula de 1-2 años (12 niños y niñas, de los cuales 8 asisten por primera vez a la escuela infantil). Durante la primera semana de septiembre, tres niños presentan llanto inconsolable en el momento de la despedida, rechazo al almuerzo y dificultades para conciliar el sueño, mientras que varias familias muestran gran ansiedad y piden quedarse toda la mañana o marcharse sin despedirse 'para que no sufran al verlos salir'.",
    questionsToResolve: [
      "1. Fundamente psicopedagógica y legalmente el periodo de acogida/adaptación y la teoría del apego en el Primer Ciclo de Educación Infantil.",
      "2. Diseñe una planificación progresiva de tiempos, espacios y presencia familiar para las tres primeras semanas del periodo de acogida.",
      "3. Detalle las pautas concretas de intervención con los tres niños que presentan angustia de separación y las orientaciones que dará a las familias sobre el ritual de despedida.",
      "4. Establezca los instrumentos de observación y evaluación que utilizará para valorar la adaptación y cómo registrará la información en el expediente."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: El Decreto 100/2022, de 29 de julio, del Consell, por el que se establece la ordenación y el currículo de Educación Infantil en la Comunitat Valenciana, dispone en sus artículos 5 y 6 que la acción educativa debe garantizar un entorno de afecto, bienestar y seguridad emocional, así como una estrecha cooperación con las familias. Asimismo, regula la organización flexible del periodo de acogida/inclusión respetando los ritmos individuales.",
        "Marco Psicopedagógico: Según la Teoría del Apego de John Bowlby y los estudios de Mary Ainsworth (Situación Extraña) y René Spitz (angustia del octavo mes), entre los 12 y 24 meses el vínculo de apego con las figuras primarias está plenamente consolidado. La entrada a la escuela supone la primera gran separación del microsistema familiar (Bronfenbrenner). La educadora o educador debe constituirse progresivamente en una figura de apego secundario (base segura) sin romper bruscamente el vínculo primario."
      ],
      objetivos: [
        "Facilitar una transición serena, gradual y respetuosa entre el entorno familiar y la escuela infantil, vinculada al Área 1 (Crecimiento en Armonía) del Decreto 100/2022.",
        "Construir un vínculo de apego secundario seguro entre cada niño/a y la educadora de referencia.",
        "Reducir la ansiedad familiar mediante canales de comunicación transparentes, escucha empática y participación activa en el aula.",
        "Individualizar los ritmos de incorporación a las rutinas de alimentación y descanso."
      ],
      propuestaIntervencion: [
        {
          fase: "Fase Previa (Antes del inicio de las clases)",
          acciones: [
            "Realización de la Entrevista Inicial individual (anamnesis) con cada familia para conocer rutinas de sueño, alimentación, alergias, objetos de apego (chupete, doudou, trapito) y forma de calmarse.",
            "Reunión general de aula previa explicando que la adaptación es un proceso biológico y emocional normal (no un problema) y consensuando por qué NUNCA se debe marchar el adulto a escondidas.",
            "Jornada de puertas abiertas para que los niños exploren el aula en brazos o de la mano de sus figuras de apego sin separación."
          ]
        },
        {
          fase: "Primera Semana: Presencia Familiar y Exploración en Base Segura",
          acciones: [
            "Entrada escalonada en pequeños grupos (4 niños por turno de 1 hora los primeros 2 días, ampliando a 1h 30m).",
            "Presencia de un familiar de referencia dentro del aula sentado en un lugar fijo ('isla de seguridad'): el familiar no dirige el juego, sino que actúa como puerto seguro al que el niño puede volver visual o físicamente mientras explora el espacio y conoce a la educadora.",
            "Hacia el 4º-5º día, se realizan primeras despedidas breves (20-30 minutos), anticipadas verbalmente."
          ]
        },
        {
          fase: "Segunda y Tercera Semana: Ampliación Progresiva e Incorporación de Rutinas",
          acciones: [
            "Ampliación progresiva de la franja horaria según la tolerancia emocional de cada niño, incorporando primero el almuerzo/juego en patio y, finalmente, el comedor y la siesta (los momentos de mayor vulnerabilidad afectiva).",
            "Intervención específica con los 3 niños con llanto intenso: validación emocional ('entiendo que eches de menos a mamá/papá, luego vuelve a buscarte después de comer'), disponibilidad corporal y tónico-emocional (abrazo si lo acepta o cercanía tranquila sin invadir), respeto absoluto a su objeto transicional (Winnicott) sin retirarlo en ningún momento del día, y no forzar jamás la ingesta de comida ni el sueño."
          ]
        },
        {
          fase: "Pautas a las Familias para el Ritual de Despedida",
          acciones: [
            "Explicar con empatía a las familias que marcharse sin despedirse ('a hurtadillas') destruye la confianza y genera hipervigilancia y terror a que el adulto desaparezca en cualquier instante.",
            "Establecer un ritual de despedida breve, cálido, predecible y seguro: ponerse a la altura de los ojos del niño, darle un beso/abrazo, entregarlo en brazos o mano de la educadora de referencia, verbalizar cuándo volverán con una referencia temporal vivencial ('vengo después del patio / de comer') y marcharse con serenidad sin prolongar la agonía en la puerta."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Espacio: Aula diáfana con zonas blandas (alfombra cálida, cojines), rincón de las familias con fotografías plastificadas de los padres/hermanos a la altura de los ojos de los niños, iluminación cálida y baja carga estimular.",
        "Materiales: Objetos transicionales traídos de casa, Cesto de los Tesoros / bandejas sensoriales de libre acceso, cuentos de tela y cartón sobre la despedida y el reencuentro.",
        "Tiempo: Horario flexible y personalizado donde el bienestar prima sobre el reloj."
      ],
      atencionDiversidadYFamilias: [
        "Flexibilidad en los tiempos de estancia para aquellas familias con dificultades de conciliación laboral, permitiendo que otro familiar significativo (abuelos) acompañe si ya tiene vínculo seguro.",
        "Información diaria individualizada en la recogida y mediante parte/agenda diaria, destacando siempre los pequeños logros del día y transmitiendo tranquilidad."
      ],
      evaluacion: [
        "Instrumentos (Art. 26 Decreto 100/2022): Diario de aula de la educadora, registro anecdótico y Escala de Observación del Periodo de Acogida (evaluando: reacción en la entrada, relación con la educadora, uso del objeto transicional, actitud ante la comida/higiene/sueño, interacción con el espacio y reacción en el reencuentro).",
        "Registro en el expediente individual del alumno/a (Art. 28 Decreto 100/2022) y entrevista de devolución con las familias al finalizar el primer mes."
      ],
      conclusion:
        "Un periodo de acogida diseñado desde la pedagogía del respeto, la teoría del apego y la corresponsabilidad familiar sienta las bases de la seguridad emocional indispensable para que el niño o niña de 1-2 años pueda pasar del miedo a la curiosidad y al aprendizaje autónomo."
    },
    rubricItems: [
      "Cita correctamente el Decreto 100/2022 del Consell y las funciones de la Base Primera de Pinoso.",
      "Fundamenta la respuesta en Bowlby, Ainsworth, Spitz, Winnicott (objeto transicional) y Bronfenbrenner.",
      "Justifica por qué nunca debe marcharse la familia a escondidas y propone un ritual de despedida claro.",
      "Respeta los ritmos fisiológicos sin forzar la alimentación ni el sueño durante la adaptación.",
      "Incluye técnicas e instrumentos de evaluación cualitativa (escalas de observación, anecdotario, diario)."
    ]
  },
  {
    id: "supuesto-2-control-esfinteres-pikler-habitos",
    number: 2,
    title: "Acompañamiento Respetuoso del Control de Esfínteres y Momentos de Cuidado Cotidiano (Pikler)",
    ageGroup: "2-3 años",
    relatedTopics: [10, 14, 19, 20, 22, 25],
    scenario:
      "En el mes de marzo, en su aula de 2-3 años de la Escuela Infantil Municipal de Pinoso, cuatro familias solicitan retirar el pañal a todos los niños a la vez antes de Semana Santa 'porque en septiembre empiezan el colegio de 3 años'. Entre esos cuatro niños, Martín (26 meses) verbaliza cuándo se ha hecho pis, se interesa por el inodoro y aguanta seco 2-3 horas; en cambio, Lucía (24 meses, nacida en diciembre) no muestra conciencia de llenado ni interés y se pone rígida si le proponen sentarse en el orinal.",
    questionsToResolve: [
      "1. Analice los requisitos madurativos neurofisiológicos, cognitivos y emocionales necesarios para el control de esfínteres.",
      "2. Explique cómo abordará la petición de las familias desde un enfoque respetuoso (Pedagogía Pikler y Decreto 100/2022), diferenciando la intervención con Martín y con Lucía.",
      "3. Describa cómo organiza el espacio del aseo y el momento del cambio de pañal/acompañamiento al baño como momento educativo privilegiado.",
      "4. Concrete cómo actuará ante los inevitables escapes de orina o heces y cómo evaluará la adquisición del hábito."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: El Decreto 100/2022 del Consell (Art. 6 y Área 1: Crecimiento en Armonía) establece el respeto escrupuloso a los ritmos individuales de maduración biológica y el bienestar físico y emocional, prohibiendo prácticas homogeneizadoras que fuercen procesos madurativos.",
        "Marco Neurofisiológico y Pedagógico: El control de esfínteres NO se 'entrena' por condicionamiento, sino que se alcanza por maduración neurológica (mielinización de las vías nerviosas piramidales que conectan la corteza cerebral con la médula sacra), madurez muscular de los esfínteres uretral y anal, madurez cognitiva (reconocer las sensaciones interoceptivas de plenitud y anticipar) y madurez emocional (deseo de autonomía). Según Emmi Pikler (Lóczy), forzar el abandono del pañal antes de tiempo genera falsa autonomía, inseguridad, retenciones o regresiones."
      ],
      objetivos: [
        "Acompañar el proceso de abandono del pañal de forma individualizada, respetando la madurez neurofisiológica y emocional de cada niño/a.",
        "Unificar criterios educativos con las familias mediante la formación e información psicopedagógica, desmontando el mito de las 'retiradas masivas de pañal'.",
        "Transformar el cambio de pañal y el paso por el aseo en momentos de relación afectiva privilegiada, autonomía y construcción del esquema corporal.",
        "Fomentar la autonomía en el vestido/desvestido y la higiene de manos."
      ],
      propuestaIntervencion: [
        {
          fase: "1. Observación de Indicadores de Madurez (Diferenciación Martín vs Lucía)",
          acciones: [
            "Con Martín (26 meses): Presenta claros signos de preparación (permanece seco más de 2 horas, identifica sensaciones interoceptivas, verbaliza, tiene destreza motriz para subirse/bajarse ropa cómoda y muestra interés). Se acuerda con su familia iniciar el acompañamiento respetuoso dejando el pañal durante el día en coordinación simultánea casa-escuela.",
            "Con Lucía (24 meses): No presenta aún madurez neurofisiológica ni deseo, y muestra rechazo tónico. Se explica a su familia que tiene varios meses menos de desarrollo madurativo, que forzarla ahora es contraproducente y que seguiremos observando sus señales sin presionarla."
          ]
        },
        {
          fase: "2. Intervención con las Familias (Reunión Monográfica y Entrevistas)",
          acciones: [
            "Convocar una reunión de aula (o taller sobre autonomía y esfínteres) explicando la base neurológica del control de esfínteres (secuencia: heces nocturnas -> heces diurnas -> orina diurna -> orina nocturna).",
            "Acordar pautas comunes: ropa holgada con goma elástica (sin petos, cinturones ni bodies con corchetes difíciles), calzado con velcro, no sentar al niño durante largos ratos en el orinal para ver si 'suena la flauta', y no utilizar premios, pegatinas, chantajes ni reproches."
          ]
        },
        {
          fase: "3. El Momento del Aseo y Cambio de Pañal (Enfoque Pikler)",
          acciones: [
            "Durante el cambio de pañal (con Lucía y demás niños con pañal): Atención individualizada, contacto visual, anticipación verbal ('ahora te voy a limpiar con agua tibia, ¿me ayudas levantando la pierna?'), fomentando su cooperación activa y el cambio de pie cuando ya tienen estabilidad.",
            "Durante el acompañamiento al inodoro/orinal (con Martín): Invitar sin obligar en momentos clave de transición (al llegar, antes del patio, antes de comer y antes de la siesta), permitiendo que tire de la cadena, use el papel higiénico y se lave y seque las manos de forma autónoma."
          ]
        },
        {
          fase: "4. Gestión Educativa de los Escapes",
          acciones: [
            "Tratar los escapes con absoluta naturalidad y serenidad: jamás avergonzar, comparar con otros compañeros ni mostrar disgusto gestual o verbal.",
            "Verbalizar con calma ('se ha escapado el pis y el pantalón está mojado, vamos a ponernos ropa seca para estar cómodos') e implicar al niño en la medida de sus posibilidades en el cambio de ropa."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Espacio: Aseo integrado y visible desde el aula, cálido, ventilado, con suelo antideslizante, inodoros infantiles a su escala (o reductores con escalón firme para apoyar los pies, indispensable para relajar el suelo pélvico), lavabos, jaboneras y toalleros a su altura, y espejo.",
        "Materiales: Casilleros individuales a la altura de los niños con sus mudas de recambio etiquetadas, cuentos sobre el cuerpo y el orinal en la biblioteca de aula.",
        "Tiempo: Tiempos sin prisa en las rutinas de higiene, integrados como contenido educativo de primer orden."
      ],
      atencionDiversidadYFamilias: [
        "Respeto absoluto a los distintos ritmos madurativos dentro de la misma aula (convivencia natural de niños con pañal y sin pañal).",
        "Registro diario compartido con las familias mediante la agenda o parte diario para mantener coherencia entre el hogar y el centro."
      ],
      evaluacion: [
        "Fases de evaluación del hábito: 1) Fase pasiva, 2) Fase de colaboración, 3) Fase de automatización y 4) Fase de consolidación/generalización.",
        "Instrumentos: Lista de control de indicadores previos de madurez y escala de estimación semanal de autonomía en el aseo y vestido."
      ],
      conclusion:
        "En la escuela infantil de 0-3 años los momentos de higiene y control de esfínteres no son meros trámites asistenciales entre actividades, sino el corazón mismo del currículo del Área de Crecimiento en Armonía, donde el niño construye su autoestima, su esquema corporal y su verdadera autonomía."
    },
    rubricItems: [
      "Explica la base neurofisiológica (mielinización) y la secuencia evolutiva (heces -> orina diurna -> nocturna).",
      "Aplica los principios de Emmi Pikler en el cambio de pañal y rechaza las retiradas masivas de pañal.",
      "Diferencia la respuesta educativa individualizada para Martín (preparado) y Lucía (no preparada).",
      "Detalla las condiciones ergonómicas del baño infantil (apoyo plantar firme, ropa cómoda, casilleros accesibles).",
      "Aborda el tratamiento pedagógico y emocional de los escapes sin premios ni castigos."
    ]
  },
  {
    id: "supuesto-3-cesto-tesoros-juego-heuristico",
    number: 3,
    title: "Diseño y Puesta en Práctica del Cesto de los Tesoros y del Juego Heurístico (Elinor Goldschmied)",
    ageGroup: "1-2 años",
    relatedTopics: [10, 13, 17, 20, 22, 24],
    scenario:
      "En el equipo educativo de la Escuela Infantil Municipal de Pinoso se decide renovar las propuestas metodológicas de exploración sensorial y lógico-matemática eliminando los juguetes comerciales de plástico con luces y sonidos. Como Técnico/a de Educación Infantil, se le encarga diseñar y poner en marcha el 'Cesto de los Tesoros' para los bebés del aula de 0-1 año (8 meses) y sesiones de 'Juego Heurístico' para su aula de 1-2 años (14 alumnos/as de 15 a 22 meses).",
    questionsToResolve: [
      "1. Fundamente pedagógicamente las propuestas de Elinor Goldschmied y su relación con el desarrollo perceptivo y lógico-matemático en el Decreto 100/2022.",
      "2. Detalle las características técnicas, materiales y organización del Cesto de los Tesoros (6-12 meses).",
      "3. Desarrolle minuciosamente las 3 fases de una sesión de Juego Heurístico con objetos en el aula de 1-2 años (espacio, tiempo, cantidades de materiales y rol de la educadora).",
      "4. Establezca los criterios de seguridad, mantenimiento de materiales e implicación de las familias."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: Se enmarca en el Decreto 100/2022 del Consell, especialmente en el Área 2 (Descubrimiento y Exploración del Entorno) y en los principios pedagógicos del artículo 6 (el juego, la manipulación y la experimentación sensorial como ejes del aprendizaje significativo).",
        "Marco Psicopedagógico: Propuestas creadas por la pedagoga británica Elinor Goldschmied. En el primer año (Cesto de los Tesoros), el cerebro del bebé necesita riqueza sensorial (tacto, peso, temperatura, olor, sonido, color y forma) para responder a la pregunta '¿Qué es esto?'. En el segundo año (Juego Heurístico), cuando ya se desplaza, su interés pasa a la acción combinatoria y físicomatemática ('¿Qué puedo hacer con esto?': llenar, vaciar, apilar, encajar, rodar, clasificar), sentando las bases del pensamiento infralógico y lógico-matemático (Piaget, Kamii)."
      ],
      objetivos: [
        "Estimular la exploración multisensorial, la coordinación óculo-manual y la capacidad de concentración desde el primer año de vida.",
        "Favorecer el descubrimiento de las propiedades físicas de los objetos (peso, volumen, textura, temperatura, sonoridad) y las relaciones espaciales y cuantitativas.",
        "Fomentar la actividad autónoma libre de estereotipos comerciales y un clima de serenidad y respeto entre iguales.",
        "Desarrollar hábitos de orden y clasificación perceptiva durante la fase de recogida."
      ],
      propuestaIntervencion: [
        {
          fase: "Propuesta A: El Cesto de los Tesoros (Bebés de 6-10/12 meses)",
          acciones: [
            "Destinatarios: Bebés que ya son capaces de permanecer sentados de forma autónoma pero que aún no se desplazan caminando (máximo 3 bebés alrededor de un cesto).",
            "El Cesto: Cesto de mimbre natural, redondo, sin asas, de fondo plano y paredes rectas y firmes (para que no vuelque si el bebé se apoya), de unos 35 cm de diámetro y 10-12 cm de altura.",
            "Los Objetos (60 a 80 piezas): Totalmente lleno hasta el borde con objetos cotidianos y naturales (NUNCA plástico ni juguetes comerciales): naturales (piñas cerradas, piedras grandes lavadas, conchas grandes, esponja natural, limón/naranja), madera (cucharas de miel, sonajeros, anillas de cortina, carretes, cuencos), metal (flaneras, batidor de varillas, manojo de llaves, colador, cucharas), cuero/tela/caucho/piel (monedero de cuero, pelota de lana, tapón de bañera con cadena, cepillo de uñas de cerdas suaves) y papel/cartón (tubos gruesos, cajitas)."
          ]
        },
        {
          fase: "Propuesta B: El Juego Heurístico en 1-2 años - Fase 1 (Preparación del Espacio)",
          acciones: [
            "Antes de que entren los niños (p. ej. mientras están en el patio o aseo), la educadora despeja totalmente la sala retirando otros juguetes distractores.",
            "Selecciona al menos 15 variedades de objetos inespecíficos (guardados en bolsas de tela con cordón de 50 unidades cada una) y distribuye en el suelo entre 5 y 8 'puntos de juego' bien separados sobre alfombras.",
            "En cada punto coloca montones combinables de objetos junto con 3 o 4 contenedores vacíos por niño (latas metálicas sin bordes cortantes, cilindros de cartón rígido, cajas de madera, cestas)."
          ]
        },
        {
          fase: "Propuesta B: El Juego Heurístico - Fase 2 (Exploración y Combinación Libre - 20 a 25 min)",
          acciones: [
            "Los niños entran de forma tranquila y eligen libremente qué materiales explorar y combinar (meter cadenas dentro de latas, ensartar anillas en cilindros, hacer rodar rulos, apilar tapones, comparar pesos).",
            "No existe el 'error' ni un resultado predeterminado, por lo que no hay frustración ni apenas conflictos por los objetos al haber abundancia (mínimo 50 piezas por variedad y al menos 15 objetos disponibles por niño).",
            "Rol de la educadora: Permanece sentada en una silla baja en un lateral en silencio atento y disponible; no sugiere acciones, no dirige ni interrumpe la concentración; solo reordena discretamente si el material se dispersa demasiado o interviene si surge algún riesgo."
          ]
        },
        {
          fase: "Propuesta B: El Juego Heurístico - Fase 3 (Recogida y Clasificación - 15 min)",
          acciones: [
            "Cuando la educadora observa que decae la concentración, inicia sin prisas la fase de recogida, que forma parte esencial de la actividad (no es un mero trámite).",
            "Permanece sentada con 2 o 3 bolsas de tela abiertas y nombra los objetos que los niños le van trayendo ('Tráeme los rulos de pelo, por favor; mira, dentro de la bolsa de los rulos... ¡dos más!'), trabajando el vocabulario, la clasificación por cualidades, los cuantificadores y el cuidado del material."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Seguridad e Higiene: Todos los objetos deben superar el calibre de seguridad (>3,17 cm de diámetro) para evitar riesgo de atragantamiento, no tener astillas, bordes cortantes ni pinturas tóxicas (UNE-EN 71). Lavado, desinfección periódica y retirada inmediata de cualquier pieza deteriorada.",
        "Tiempo: Sesión de 45-50 minutos totales (5 min preparación, 25 min exploración, 15 min recogida), 2 o 3 veces por semana a media mañana cuando los niños están descansados y alimentados."
      ],
      atencionDiversidadYFamilias: [
        "Al ser material abierto y no estructurado (*loose parts*), se adapta de forma natural al Diseño Universal de Aprendizaje (DUA): cada niño actúa sobre el objeto según su nivel evolutivo sin etiquetas de éxito o fracaso.",
        "Implicación de las familias mediante una 'Carta de Tesoros' al inicio de curso para que aporten objetos cotidianos (tapones de corcho, anillas de madera, botes metálicos, rulos) y exposición fotográfica de documentación pedagógica en el pasillo."
      ],
      evaluacion: [
        "Observación directa y sistemática durante la Fase 2 (nivel de atención sostenida, preferencias sensoriales, esquemas de acción empleados, interacción en la recogida).",
        "Evaluación de la propia práctica docente: adecuación de la cantidad de objetos, estado del material y gestión de los tiempos."
      ],
      conclusion:
        "El Cesto de los Tesoros y el Juego Heurístico demuestran que los materiales más sencillos, naturales y cotidianos ofrecen infinitas más posibilidades de desarrollo neurológico, sensorial y lógico-matemático que cualquier juguete comercial cerrado."
    },
    rubricItems: [
      "Distingue con precisión la edad, objetivos y formato del Cesto de los Tesoros (6-12m) y del Juego Heurístico (12-24m).",
      "Detalla las 3 fases del Juego Heurístico (Preparación, Exploración libre y Recogida clasificatoria) y las cantidades de material.",
      "Describe el rol observador, silencioso y no directivo de la educadora durante la exploración y activo-verbal en la recogida.",
      "Especifica criterios estrictos de seguridad e higiene (no plástico, tamaño >3,17 cm, revisión de piezas).",
      "Vincula la propuesta con el Área 2 del Decreto 100/2022 del Consell."
    ]
  },
  {
    id: "supuesto-4-atelier-reggio-emilia",
    number: 4,
    title: "Creación de un Atelier Reggio Emilia y Propuesta Artística Multisensorial en 2-3 Años",
    ageGroup: "2-3 años",
    relatedTopics: [13, 20, 22, 23, 24],
    scenario:
      "La Escuela Infantil Municipal de Pinoso dispone de una pequeña sala luminosa anexa al patio que hasta ahora se usaba como almacén, y el equipo educativo decide transformarla en un 'Atelier' inspirado en la pedagogía Reggio Emilia de Loris Malaguzzi. Como Técnico/a de Educación Infantil, debe diseñar dicho espacio y planificar una propuesta de experimentación artística sobre el otoño y la luz para su grupo de 2-3 años, huyendo de las fichas tradicionales.",
    questionsToResolve: [
      "1. Fundamente el concepto de Atelier y la figura del atelierista en la pedagogía Reggio Emilia y su engarce con el Decreto 100/2022.",
      "2. Diseñe la organización espacial, estética, cromática y de materiales del nuevo Atelier.",
      "3. Desarrolle una Situación de Aprendizaje / provocación artística con técnicas bidimensionales, tridimensionales y lumínicas (mesa de luz) sobre el otoño.",
      "4. Explique cómo realizará la documentación pedagógica del proceso y su devolución a los niños y a las familias."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: El Decreto 100/2022 del Consell, en el Área 3 (Comunicación y Representación de la Realidad) y el Área 2 (Descubrimiento y Exploración del Entorno), promueve el desarrollo de los lenguajes plástico, visual, corporal y audiovisual mediante situaciones de aprendizaje basadas en la experimentación libre y el goce estético.",
        "Marco Pedagógico: Loris Malaguzzi introdujo en las escuelas municipales de Reggio Emilia el 'Atelier' (taller de arte e investigación) y la figura del 'atelierista' (con referentes como Vea Vecchi) para defender que el niño posee 'Cien Lenguajes' (formas de pensar, expresar y construir conocimiento) que la escuela tradicional reduce a dos. El espacio actúa como el 'tercer educador' y el proceso creativo prima siempre sobre el producto final estandarizado."
      ],
      objetivos: [
        "Transformar la sala en un Atelier estético, ordenado y accesible que invite a la investigación sensorial y artística.",
        "Experimentar con lenguajes bidimensionales, tridimensionales y lumínicos a partir de elementos naturales del entorno de Pinoso en otoño.",
        "Sustituir las fichas dirigidas y estereotipadas por provocaciones e instalaciones artísticas abiertas.",
        "Visibilizar los procesos de pensamiento y creación infantil mediante la documentación pedagógica."
      ],
      propuestaIntervencion: [
        {
          fase: "1. Diseño del Espacio del Atelier ('El Tercer Educador')",
          acciones: [
            "Aprovechamiento de la luz natural mediante estores translúcidos que permitan tanto la máxima claridad como crear penumbra para experiencias lumínicas.",
            "Estanterías bajas abiertas y botes de cristal/metacrilato transparentes a la altura de los niños donde los materiales se ordenan por gamas cromáticas, texturas y tipos (inspiración Remida).",
            "Zonificación en 4 microespacios: 1) Zona de pintura vertical (caballetes y pared lavable para gran formato) y horizontal; 2) Zona de modelado tridimensional (arcilla natural, barro, herramientas de madera); 3) Zona de luz y sombra (mesa de luz, retroproyector y sábana blanca); 4) Zona de piezas sueltas (*loose parts*) y elementos naturales."
          ]
        },
        {
          fase: "2. Provocación Artística: 'Los Colores, Texturas y Luces del Otoño'",
          acciones: [
            "Experiencia Preliminar en el Patio/Entorno: Recolección con cestas de hojas secas, ramas, piñas, cortezas, tierra y frutos otoñales.",
            "Microespacio Lumínico (Mesa de Luz y Retroproyector): Disponer sobre la mesa de luz hojas translúcidas, nervaduras vegetales, rodajas de cítricos deshidratados, acetatos de colores cálidos (ámbar, ocre, carmesí) y lupas para explorar transparencias, superposiciones y sombras proyectadas en la pared.",
            "Microespacio Tridimensional (Arcilla y Naturaleza): Ofrecer bloques de arcilla natural húmeda sobre tablas de madera junto con ramas, piñas, semillas y cantos rodados para amasar, dejar huellas (improntas en el barro) y crear esculturas efímeras.",
            "Microespacio Pictórico con Pigmentos Naturales: Pintura de gran formato en plano vertical con pigmentos naturales elaborados con cúrcuma, pimentón, café, remolacha y arcilla diluida, utilizando como herramientas brochas gruesas, esponjas marinas, rodillos y las propias ramas y hojas."
          ]
        },
        {
          fase: "3. Rol de la Educadora / Atelierista en la Sesión",
          acciones: [
            "Organizar el acceso al Atelier en pequeños grupos (6-8 niños) para garantizar un clima de calma, escucha e investigación profunda.",
            "Presentar el espacio como una 'provocación' estética y cuidada al milímetro, acompañar desde la escucha activa formulando preguntas abiertas ('¿Qué pasa en la pared cuando acercas la hoja a la luz?') y abstenerse de corregir, dirigir o dibujar sobre la obra del niño (respeto a la expresión creadora de Lowenfeld y Arno Stern)."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Materiales: Arcilla natural, mesa de luz LED de bajo voltaje seguro, retroproyector, pigmentos comestibles/naturales no tóxicos, papel continuo de alto gramaje, caballetes, delantales impermeables fáciles de poner.",
        "Tiempo: Sesiones de 45 minutos en pequeño grupo sin prisas, permitiendo que las creaciones en proceso puedan retomarse en sesiones posteriores (zona de 'obras en curso')."
      ],
      atencionDiversidadYFamilias: [
        "Accesibilidad universal (DUA): Las propuestas multisensoriales (táctiles, visuales, olfativas) en distintos planos (suelo, mesa, vertical) permiten la participación plena de todo el alumnado.",
        "Invitación a las familias a aportar materiales naturales del entorno rural y vitivinícola de Pinoso (sarmientos limpios, hojas de parra otoñales, corchos) y apertura del Atelier en talleres familiares."
      ],
      evaluacion: [
        "Documentación Pedagógica (Art. 26 Decreto 100/2022): Secuencia fotográfica del proceso (las manos amasando, el asombro ante la sombra), transcripción literal de las palabras y metáforas espontáneas de los niños, y creación de un panel expositivo documentado a doble altura (para niños y para adultos).",
        "Autoevaluación de la propuesta: estética inicial, riqueza de interacciones y adecuación de los materiales."
      ],
      conclusion:
        "El Atelier transforma la escuela infantil en un laboratorio de belleza, investigación y pensamiento divergente, honrando los cien lenguajes de la infancia y superando definitivamente la producción mecánica de fichas iguales."
    },
    rubricItems: [
      "Explica con rigor la pedagogía Reggio Emilia (Loris Malaguzzi, los Cien Lenguajes, el espacio como 3er educador y el atelierista).",
      "Diseña un Atelier con criterios estéticos, cromáticos, de orden y accesibilidad.",
      "Combina técnicas bidimensionales (pigmentos naturales), tridimensionales (arcilla/improntas) y lumínicas (mesa de luz/proyección).",
      "Contrapone el valor del proceso creativo y la provocación frente a la ficha tradicional.",
      "Incorpora la Documentación Pedagógica (Art. 26 Decreto 100/2022) como herramienta de evaluación y comunicación."
    ]
  },
  {
    id: "supuesto-5-deteccion-precoz-lenguaje-observacion",
    number: 5,
    title: "Detección Precoz de Signos de Alerta en el Desarrollo Comunicativo y Social, Observación y Protocolo con Familias",
    ageGroup: "2-3 años",
    relatedTopics: [4, 7, 10, 15, 19, 22],
    scenario:
      "En el segundo trimestre del curso, en su aula de 2-3 años (niños de 26 a 30 meses), usted observa como Técnico/a de Educación Infantil que Hugo (27 meses) apenas establece contacto ocular, no responde cuando se le llama por su nombre (aunque se gira ante ruidos fuertes), no señala con el dedo para compartir interés (ausencia de protodeclarativos), aún no emite palabras con sentido comunicativo y realiza aleteos de manos y alineación repetitiva de coches. Su familia comenta en la puerta que 'su padre también tardó mucho en hablar y ya hablará'.",
    questionsToResolve: [
      "1. Identifique los hitos evolutivos esperables a los 24-30 meses en comunicación y lenguaje y analice los signos de alerta que presenta Hugo.",
      "2. Describa qué técnicas e instrumentos de observación sistemática y registro aplicará y cómo custodiará los datos en el expediente conforme a la LOPDGDD.",
      "3. Detalle cómo planificará y conducirá la entrevista con la familia de Hugo y la coordinación con el servicio psicopedagógico / Atención Temprana (CDIAT).",
      "4. Proponga estrategias de intervención educativa e inclusión (DUA) dentro del aula ordinaria."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: El Decreto 100/2022 del Consell (Arts. 5, 6 y 20 a 26) establece que en el Primer Ciclo de Educación Infantil la observación directa y sistemática tiene como fin primordial la detección precoz de Necesidades Específicas de Apoyo Educativo (NEAE) y la atención temprana bajo los principios del Diseño Universal de Aprendizaje (DUA). Asimismo, los datos de salud y desarrollo del menor constituyen categorías especiales de datos protegidas por el RGPD y la Ley Orgánica 3/2018 (LOPDGDD, arts. 5, 7 y 9).",
        "Marco Evolutivo y Signos de Alerta: A los 24-30 meses el niño se encuentra en plena explosión léxica y combinación de palabras (habla telegráfica e inicio de frases de 3 elementos), comprende órdenes de dos pasos y utiliza gestos protodeclarativos (Bates) y atención conjunta (Bruner). En Hugo concurren signos de alerta sociocomunicativos clave (ausencia de contacto ocular, falta de respuesta al nombre con audición conservada, ausencia de atención conjunta y de gestos protodeclarativos, ausencia de lenguaje oral a los 27 meses, juego repetitivo no funcional de alineación y estereotipias motoras)."
      ],
      objetivos: [
        "Registrar de forma objetiva, sistemática y contextualizada las conductas comunicativas, sociales y de juego de Hugo.",
        "Acompañar y orientar a la familia con empatía y rigor profesional, sin emitir diagnósticos clínicos (que no competen al TSEI) pero facilitando la derivación temprana a pediatría, orientación educativa y CDIAT.",
        "Implementar medidas de inclusión y apoyos visuales (SAAC) en el aula que reduzcan la frustración de Hugo y favorezcan su comunicación e interacción.",
        "Garantizar la absoluta confidencialidad y protección de datos personales en el expediente del alumno."
      ],
      propuestaIntervencion: [
        {
          fase: "1. Observación Sistemática y Registro en el Expediente",
          acciones: [
            "Aplicar durante 2 semanas una Escala de Observación del Desarrollo Comunicativo y Social y Listas de Control (*checklists*) en diferentes contextos naturales de la jornada (asamblea, juego libre en rincones, patio, comedor).",
            "Complementar con Registros Anecdóticos separando estrictamente la descripción objetiva de la conducta observada de cualquier valoración subjetiva.",
            "Incorporar los registros e informes al expediente individual de Hugo cumpliendo el deber de secreto profesional (art. 5 LOPDGDD) y las medidas de seguridad de archivos públicos."
          ]
        },
        {
          fase: "2. Coordinación con el Equipo Educativo y Servicios Especializados",
          acciones: [
            "Puesta en común en reunión de equipo educativo y con la dirección del centro e intervención del servicio especializado de Orientación Educativa / Gabinete Psicopedagógico Municipal.",
            "Elaborar un informe pedagógico descriptivo de las observaciones en el aula (fortalezas, intereses de Hugo y barreras detectadas) para facilitar la valoración por Pediatría de Atención Primaria y la derivación al Centro de Desarrollo Infantil y Atención Temprana (CDIAT)."
          ]
        },
        {
          fase: "3. Entrevista Individual con la Familia (Comunicación Empática y Eficaz)",
          acciones: [
            "Convocar una entrevista privada en un espacio tranquilo con ambos progenitores, preparando previamente la reunión.",
            "Estrategia comunicativa: Comenzar destacando aspectos positivos reales de Hugo (su bienestar en el centro, lo que le gusta hacer); exponer a continuación los datos objetivos observados en el aula sin utilizar jamás etiquetas diagnósticas clínicas (no decir 'tiene autismo/TEA', pues el diagnóstico es competencia médica/psicopedagógica); desmontar con delicadeza el mito de 'ya hablará' explicando la enorme plasticidad cerebral de la etapa 0-3 años y los beneficios de la Atención Temprana; y ofrecer acompañamiento y seguimiento conjunto."
          ]
        },
        {
          fase: "4. Intervención Inclusiva en el Aula (Diseño Universal de Aprendizaje - DUA)",
          acciones: [
            "Estructuración espacio-temporal y anticipación visual: Uso de agendas visuales con fotografías reales y pictogramas (ARASAAC) a la altura de los ojos para anticipar cada rutina y transición del día, reduciendo la incertidumbre.",
            "Estimulación de la atención conjunta y la intención comunicativa: Ponerse siempre a su altura física para buscar su mirada antes de hablarle, usar frases cortas, claras y entonadas, partir de su centro de interés (los coches) para introducir turnos de interacción recíproca ('toma el coche - dame el coche').",
            "Cuidar el ambiente sensorial del aula evitando ruidos estridentes o sobrecarga visual."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Espacio: Rincones claramente delimitados, incluyendo un 'rincón de la calma' con baja estimulación sensorial.",
        "Materiales: Panel de anticipación de rutinas con fotografías reales de las acciones del aula, pictogramas ARASAAC, objetos reales de referencia (ej. enseñar el babero antes de ir al comedor).",
        "Tiempo: Transiciones suaves y anticipadas con apoyos visuales y canciones cortas."
      ],
      atencionDiversidadYFamilias: [
        "Trabajo en red familia - escuela infantil - orientación psicopedagógica - CDIAT para aplicar las mismas pautas comunicativas y apoyos visuales en casa y en el aula.",
        "Consentimiento informado expreso de los titulares de la patria potestad (art. 7 LOPDGDD) para el intercambio de información entre profesionales externos al centro."
      ],
      evaluacion: [
        "Seguimiento quincenal mediante escalas de estimación de los avances en contacto visual, atención conjunta, comprensión con apoyo visual y bienestar emocional.",
        "Revisión trimestral de las medidas de inclusión adoptadas en el aula."
      ],
      conclusion:
        "La mirada atenta y formada del Técnico/a de Educación Infantil en la etapa 0-3 años es la llave maestra de la detección precoz: observar con rigor técnico, acompañar a la familia sin juzgar ni diagnosticar y estructurar el aula con apoyos visuales permite aprovechar la ventana crítica de neuroplasticidad infantil."
    },
    rubricItems: [
      "Identifica con precisión técnica los signos de alerta (ausencia de protodeclarativos, atención conjunta, respuesta al nombre y lenguaje a los 27m).",
      "Distingue claramente entre observación pedagógica descriptiva y diagnóstico clínico (que no corresponde al TSEI).",
      "Aplica instrumentos de evaluación del Art. 26 del Decreto 100/2022 y la normativa de protección de datos (LOPDGDD).",
      "Diseña una entrevista familiar empática y el protocolo de coordinación con Orientación y CDIAT.",
      "Propone medidas DUA concretas en el aula (agendas visuales con fotos reales/ARASAAC, atención conjunta desde su interés)."
    ]
  },
  {
    id: "supuesto-6-mordiscos-rabietas-autorregulacion",
    number: 6,
    title: "Gestión Educativa de Mordiscos, Rabietas y Conflictos por Objetos en Aula de 1-2 Años",
    ageGroup: "1-2 años",
    relatedTopics: [10, 11, 12, 15, 17, 22],
    scenario:
      "En su aula de 1-2 años (18-22 meses) de la Escuela Infantil Municipal de Pinoso, durante el juego libre se están produciendo episodios frecuentes de disputas por los juguetes y mordiscos, especialmente por parte de Leo (19 meses), quien aún tiene escaso lenguaje expresivo y muerde a sus compañeros cuando quiere un juguete que tiene otro niño o cuando se frustra. La familia de una niña que ha sido mordida dos veces esta semana acude muy enfadada exigiendo saber quién ha sido el niño agresor y pidiendo que se le castigue o separe del grupo.",
    questionsToResolve: [
      "1. Explique desde la psicología evolutiva y la neurociencia por qué se producen los mordiscos, las rabietas y los conflictos instrumentales entre los 15 y 24 meses.",
      "2. Detalle el protocolo de actuación inmediata en el aula cuando se produce un mordisco (con el niño agredido, con el niño que muerde y en el registro/parte de incidencias).",
      "3. Explique cómo atenderá a la familia reclamante preservando la confidencialidad y protección de datos (LOPDGDD) y la convivencia escolar.",
      "4. Proponga medidas preventivas espaciales, materiales y educativas para reducir la incidencia de mordiscos y acompañar las rabietas."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: Base Primera de las Bases de Pinoso (observación de la evolución y estabilidad emocional, confección de partes de incidencias y comunicación a padres/tutores), Decreto 100/2022 del Consell (Área 1: Crecimiento en Armonía, gestión emocional e interacción positiva) y Ley Orgánica 3/2018 LOPDGDD (deber de confidencialidad: jamás se revela el nombre de otro menor a terceras familias).",
        "Marco Psicopedagógico y Neurobiológico: A los 18-22 meses, el niño presenta un pensamiento egocéntrico (Piaget), está en plena fase de afirmación del 'yo' (Wallon), vive conflictos instrumentales por la posesión de objetos ('es mío') y experimenta impulsos intensos con una corteza prefrontal aún inmadura para inhibir la acción y un lenguaje expresivo todavía insuficiente para negociar con palabras. Por tanto, el mordisco en 1-2 años NO es maldad ni agresividad intencional premeditada, sino una respuesta impulsiva de descarga tónico-emocional, frustración, exploración oral/dentición o intento fallido de interacción."
      ],
      objetivos: [
        "Actuar de forma inmediata, serena y educativa ante los episodios de mordisco, garantizando el cuidado físico y emocional de ambos menores.",
        "Prevenir nuevas conductas mediante la reorganización de espacios, multiplicación de materiales y acompañamiento verbal cercano.",
        "Dotar progresivamente a Leo y al grupo de herramientas comunicativas y emocionales alternativas al impulso motor.",
        "Gestionar la comunicación con las familias desde la transparencia, la empatía y el estricto cumplimiento de la protección de datos."
      ],
      propuestaIntervencion: [
        {
          fase: "1. Actuación Inmediata en el Aula ante el Mordisco",
          acciones: [
            "Atender en primer lugar a la víctima: Consolar afectivamente, validar su dolor ('sé que te duele mucho'), lavar la zona con agua y jabón, aplicar frío local (hielo envuelto en paño) y vigilar el estado de la piel.",
            "Intervenir con Leo (quien ha mordido): Ponerse a su altura visual, con tono firme, sereno y sin gritar ni etiquetar ('eres malo'), establecer el límite claro sobre la conducta y no sobre su persona: 'No se muerde. Morder hace daño. Mira, Ana está llorando porque le duele'.",
            "Fomentar la reparación en lugar del castigo o 'rincón de pensar' (que es ineficaz y contraproducente a los 19 meses): Invitar a Leo a acompañar en el cuidado (traer el paño frío, hacer una caricia suave) y darle el modelo comunicativo ('Si quieres el camión, pide: ¿me lo dejas? o avísame').",
            "Cumplimentar el Parte de Incidencias oficial del centro y comunicarlo a la familia del menor lesionado en la recogida (o por teléfono si la marca es importante)."
          ]
        },
        {
          fase: "2. Atención a la Familia Reclamante y Conducción con la Familia de Leo",
          acciones: [
            "Con la familia de la niña mordida: Escucha activa y validación de su preocupación, explicar las medidas de primeros auxilios aplicadas y las medidas pedagógicas preventivas reforzadas en el aula. Explicar con firmeza y amabilidad que, por normativa de Protección de Datos (LOPDGDD) y por ética pedagógica, el centro NUNCA revela la identidad de otros menores ni aplica castigos humillantes o exclusión, sino intervención educativa intensiva.",
            "Con la familia de Leo: Reunión tranquila sin culpabilizar, indagando si hay cambios recientes (salida de molares, falta de sueño, celos, cambios familiares) y acordando pautas comunes de lenguaje y regulación en casa."
          ]
        },
        {
          fase: "3. Medidas Preventivas en el Aula y Acompañamiento de Rabietas",
          acciones: [
            "Observación sistemática (registro ABC: Antecedente - Conducta - Consecuencia) para detectar en qué momentos y por qué desencadenantes muerde Leo (¿hambre/sueño antes de comer?, ¿masificación en un rincón?, ¿disputa por un juguete único?).",
            "Multiplicación de materiales idénticos (en 1-2 años es fundamental que haya varios ejemplares de los juguetes más deseados como coches, muñecos o teléfonos, y potenciar el Juego Heurístico con abundancia de piezas).",
            "Sombra afectiva / cercanía preventiva de la educadora para anticiparse al bloqueo de Leo y prestarle palabras antes de que descargue el impulso con la boca, ofreciendo además mordedores sensoriales seguros si hay molestia gingival.",
            "Ante las rabietas: Contención emocional serena, asegurar que no se haga daño, acompañar sin sermonear durante el pico de desregulación amigdalina y poner nombre a la emoción cuando recupera la calma."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Espacio: Evitar zonas de hacinamiento ampliando las zonas de movimiento y creando un espacio de calma con cojines, pelotas sensoriales y cuentos sobre emociones.",
        "Materiales: Duplicación/triplicación de juguetes estrella en 1-2 años, mordedores de caucho natural higienizados, muñecos y cuentos como 'Los dientes no son para morder'.",
        "Tiempo: Adelantar 10-15 minutos las rutinas de comida y descanso si se detecta que los episodios aumentan por fatiga a final de la mañana."
      ],
      atencionDiversidadYFamilias: [
        "Preservación absoluta del anonimato entre familias para evitar estigmatizaciones en un municipio cercano como Pinoso.",
        "Envío de una circular pedagógica general o píldora formativa para todas las familias del ciclo sobre 'Por qué muerden los niños de 1 a 2 años y cómo lo acompañamos en la escuela'."
      ],
      evaluacion: [
        "Registro diario de frecuencia y contexto de los episodios (hoja de registro conductual ABC) para comprobar la disminución de incidentes tras las medidas ambientales.",
        "Valoración de la evolución del lenguaje expresivo y gestual de Leo."
      ],
      conclusion:
        "Educar en 1-2 años implica comprender la inmadurez neurológica del niño: sustituir el castigo y la etiqueta por límites firmes, reparación, diseño inteligente del ambiente y préstamo de lenguaje transforma el conflicto en una oportunidad de socialización."
    },
    rubricItems: [
      "Explica las causas evolutivas y neurobiológicas del mordisco en 1-2 años (egocentrismo, inmadurez prefrontal, falta de lenguaje oral).",
      "Detalla la secuencia de intervención inmediata (1º víctima, 2º límite firme sin etiquetar y reparación, 3º parte de incidencias).",
      "Aplica la LOPDGDD negándose justificadamente a revelar la identidad del niño que muerde a otra familia.",
      "Rechaza el castigo/aislamiento y propone prevención ambiental (registro ABC, duplicar juguetes, anticipación verbal).",
      "Vincula la actuación con las funciones oficiales de la Base Primera del Ayuntamiento de Pinoso."
    ]
  },
  {
    id: "supuesto-7-coeducacion-diversidad-familiar-cuento",
    number: 7,
    title: "Coeducación, Diversidad Familiar, Educación Afectivo-Sexual y Biblioteca de Aula en 2-3 Años",
    ageGroup: "2-3 años",
    relatedTopics: [8, 13, 16, 18, 20, 21],
    scenario:
      "En su aula de 2-3 años de la Escuela Infantil Municipal de Pinoso conviven diversas estructuras familiares (familias biparentales heterosexuales, dos familias monoparentales, una familia homoparental de dos madres y una familia de acogida). Durante el juego simbólico en el rincón de la casita y los disfraces, varios niños dicen a un compañero que 'los niños no pueden ponerse la falda ni dar el biberón al bebé porque eso es de chicas', y un padre muestra preocupación en la salida al ver a su hijo jugando con muñecas y cocinitas.",
    questionsToResolve: [
      "1. Fundamente legal y pedagógicamente la coeducación, la construcción de la identidad de género y la atención a la diversidad familiar en el Primer Ciclo de Educación Infantil.",
      "2. Explique cómo intervendrá en el momento del juego simbólico con los niños y cómo abordará la conversación con el padre preocupado.",
      "3. Diseñe una revisión coeducativa de los rincones de aula, juguetes y la Biblioteca de Aula (criterios de selección de cuentos y propuestas literarias).",
      "4. Proponga actividades de centro y aula que visibilicen positivamente la diversidad familiar e igualdad de género."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: Constitución Española (art. 14), Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres (arts. 23-25), Ley 9/2003 de la Generalitat para la Igualdad entre Mujeres y Hombres, Ley 23/2018 de igualdad de las personas LGTBI de la CV y Decreto 100/2022 del Consell (art. 6.4: perspectiva coeducativa, educación afectivo-sexual adaptada, prevención de estereotipos sexistas y reconocimiento de la diversidad familiar y afectiva).",
        "Marco Psicopedagógico: Según Lawrence Kohlberg y Félix López, entre los 2 y 3 años los niños adquieren la 'etiqueta o identidad básica de género', apoyándose inicialmente en marcadores externos y estereotipos culturales rígidos (ropa, juguetes, roles). El juego simbólico (Piaget) es el escenario donde ensayan los roles sociales que observan; por ello, una intervención coeducativa temprana evita que las diferencias biológicas se conviertan en desigualdades o limitaciones del desarrollo."
      ],
      objetivos: [
        "Desmontar estereotipos sexistas en el juego simbólico, garantizando que todos los niños y niñas experimenten libremente con roles de cuidado, afecto, acción y construcción.",
        "Visibilizar y normalizar todos los modelos familiares presentes en el aula para fortalecer la identidad y autoestima de cada alumno/a.",
        "Sensibilizar y acompañar a las familias sobre el valor educativo y no sexista del juego en la primera infancia.",
        "Dotar a la Biblioteca de Aula de álbumes ilustrados coeducativos y representativos de la diversidad."
      ],
      propuestaIntervencion: [
        {
          fase: "1. Intervención Educativa Inmediata en el Rincón de Juego Simbólico",
          acciones: [
            "Intervenir con naturalidad, cercanía y sin regañar, formulando preguntas abiertas que rompan el estereotipo a partir de su experiencia real: '¿En casa papá no cocina o no te da de comer y te cuida cuando eres pequeño? ¡Claro que sí! Los niños y los papás también cuidan a los bebés, cocinan y pueden ponerse todos los disfraces del aula'.",
            "Participar brevemente en el juego simbólico modelando roles igualitarios y validando la elección del niño que quería usar el disfraz y dar el biberón."
          ]
        },
        {
          fase: "2. Diálogo Pedagógico con el Padre en la Salida",
          acciones: [
            "Escuchar sin juzgar su inquietud y explicarle con fundamento pedagógico que en la etapa de 0 a 3 años el juego con muñecos y cocinitas no tiene ninguna relación con la orientación sexual futura, sino con la imitación de las figuras de apego que le cuidan y el desarrollo de la empatía, la ternura, la corresponsabilidad doméstica y el lenguaje.",
            "Invitarle a participar en los talleres familiares del aula (por ejemplo, un taller de cocina o de cuentacuentos) para que vea cómo todos los niños y niñas disfrutan de todas las propuestas."
          ]
        },
        {
          fase: "3. Auditoría Coeducativa de Espacios, Juguetes y Biblioteca de Aula",
          acciones: [
            "Reorganización de Rincones: Conectar físicamente el rincón de la casita/cuidados con el de construcciones y taller para evitar la segregación espacial por sexos; sustituir los disfraces estereotipados (princesas rosas vs superhéroes agresivos) por telas abiertas de colores variados, pañuelos, sombreros y utensilios de múltiples oficios.",
            "Selección de cuentos para la Biblioteca de Aula: Retirar o contextualizar cuentos con roles sexistas pasivos e incorporar álbumes ilustrados para 0-3 años con protagonistas diversos, expresión emocional libre y diversidad familiar (ej. *Un puñado de botones*, *Familias* de Oh! Libro, *Rosa Caramelo*, *Arturo y Clementina* adaptado con títeres, *Con tango son tres*)."
          ]
        },
        {
          fase: "4. Actividades de Aula sobre Diversidad Familiar y Cuidados",
          acciones: [
            "El Mural de Nuestras Familias: Crear a la altura de los ojos de los niños un panel con fotografías de cada niño con su estructura familiar real bajo el lema 'Quienes nos quieren y nos cuidan', validando por igual a todas las familias.",
            "Talleres de corresponsabilidad: 'Cuidamos a los bebés del aula' (bañar muñecos diversos en barreños con agua tibia y esponjas, vestirlos y acunarlos) donde niños y niñas ejercitan el cuidado y el buen trato."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Espacio: Lenguaje visual e iconográfico inclusivo en toda la cartelería del centro (evitar usar solo el color rosa/azul o dirigirse únicamente a 'las mamás' en las circulares).",
        "Materiales: Muñecos sexuados anatómicamente y con diversidad étnica, telas abiertas de juego simbólico, álbumes ilustrados coeducativos en estanterías frontales."
      ],
      atencionDiversidadYFamilias: [
        "Adaptación de los impresos administrativos del centro (ficha de matrícula, autorizaciones, entrevistas) utilizando los términos inclusivos 'Progenitor/a 1 - Progenitor/a 2 / Tutores legales' en lugar de 'Padre / Madre'.",
        "Celebración inclusiva del 'Día de las Familias' (15 de mayo) en sustitución de celebraciones excluyentes que puedan incomodar a familias monoparentales, homoparentales o de acogida."
      ],
      evaluacion: [
        "Observación sistemática del uso de los rincones y materiales por parte de niños y niñas (registro de ocupación de espacios y roles asumidos).",
        "Revisión del Plan de Igualdad y Convivencia dentro del Proyecto Educativo de Centro (PEC)."
      ],
      conclusion:
        "Educar en igualdad y diversidad desde los 0-3 años significa abrir todas las puertas del desarrollo humano a cada niño y cada niña, haciendo de la Escuela Infantil Municipal de Pinoso un espacio seguro donde todas las infancias y todas las familias se sientan reconocidas y valoradas."
    },
    rubricItems: [
      "Fundamenta la respuesta en la LO 3/2007, Ley 9/2003 CV, Decreto 100/2022 (Art. 6.4) y teorías de Kohlberg y Félix López.",
      "Resuelve con acierto pedagógico tanto la situación en el aula como la conversación con el padre.",
      "Aplica criterios coeducativos a la organización de rincones, juguetes y Biblioteca de Aula.",
      "Integra medidas reales de inclusión de la diversidad familiar (lenguaje administrativo, mural familiar, Día de las Familias).",
      "Propone indicadores de evaluación del uso equitativo de espacios y materiales."
    ]
  },
  {
    id: "supuesto-8-emergencia-salud-alergia-prl-administracion",
    number: 8,
    title: "Actuación ante Urgencia de Salud/Alergia en el Comedor, Prevención de Riesgos y Gestión Administrativa",
    ageGroup: "0-3 años (Ciclo completo)",
    relatedTopics: [6, 7, 14, 19, 20, 22],
    scenario:
      "En la Escuela Infantil Municipal del Ayuntamiento de Pinoso, durante la hora del comedor escolar, usted está atendiendo a su grupo de 1-2 años. Una niña de 16 meses (Claudia), que no tenía alergias previas diagnosticadas al inicio de curso pero que hoy prueba por primera vez en el centro pescado blanco (merluza), comienza a los pocos minutos a presentar habones rojizos (urticaria) alrededor de la boca y cuello, tos seca repetitiva e hinchazón labial. Al mismo tiempo, otros 10 niños están sentados en las mesas comiendo.",
    questionsToResolve: [
      "1. Establezca el protocolo de actuación urgente paso a paso ante esta sospecha de reacción alérgica aguda / anafilaxia garantizando la seguridad de Claudia y del resto del grupo.",
      "2. Relacione la situación con las funciones administrativas y operativas del puesto de Técnico de Educación Infantil según las Bases de Pinoso (partes de incidencias, registros, expediente y LOPDGDD).",
      "3. Detalle las medidas de prevención de alergias e intolerancias alimentarias y de seguridad contra atragantamientos en el comedor escolar de 0-3 años.",
      "4. Identifique los principales riesgos laborales del Técnico/a de Educación Infantil (Ley 31/1995 LPRL) en las rutinas de comedor, higiene y movilización de niños y sus medidas preventivas."
    ],
    solution: {
      justificacionPedagogicaYLegal: [
        "Marco Legal: Base Primera de la Convocatoria del Ayuntamiento de Pinoso (atención a la alimentación y salud, observación del estado de salud dando cuenta a padres/tutores, confección de partes de incidencias, trabajos administrativos e informes), Ley 31/1995 de Prevención de Riesgos Laborales (art. 20: medidas de emergencia y primeros auxilios), Ley Orgánica 3/2018 LOPDGDD (art. 9: tratamiento de datos de salud) y Decreto 100/2022 del Consell.",
        "Valoración de la Situación: Claudia presenta síntomas cutáneos (urticaria y angioedema labial) asociados a síntomas respiratorios (tos seca repetitiva) tras la ingesta de pescado, lo que constituye una reacción alérgica moderada-grave con riesgo inminente de anafilaxia y compromiso de la vía aérea, requiriendo actuación inmediata siguiendo la conducta PAS (Proteger, Avisar, Socorrer)."
      ],
      objetivos: [
        "Garantizar la atención inmediata de emergencia sanitaria a la menor manteniendo la vigilancia y calma del resto del aula.",
        "Ejecutar correctamente la comunicación de urgencia a los servicios de emergencias (112), dirección del centro y familia.",
        "Registrar documentalmente la incidencia conforme a los procedimientos administrativos municipales y actualizar el protocolo de comedor.",
        "Aplicar las medidas de prevención de riesgos infantiles y laborales (LPRL) en el servicio de comedor e higiene."
      ],
      propuestaIntervencion: [
        {
          fase: "1. Protocolo de Actuación Inmediata ante la Reacción Alérgica (Conducta PAS)",
          acciones: [
            "Proteger y Detener la Exposición: Retirar inmediatamente el plato de pescado, limpiar suavemente los restos de comida de la boca y manos de Claudia con agua sin forzar el vómito, y no dejarla sola en ningún instante.",
            "Garantizar la Seguridad del Grupo (Coordinación de Equipo): Avisar de inmediato mediante el timbre/intercomunicador o a la educadora de apoyo/dirección para que una profesional se quede a cargo de los otros 10 niños en el comedor manteniendo la calma y retirando los platos que puedan suponer riesgo.",
            "Avisar (112 y Familia): Mientras un miembro del equipo atiende a Claudia en posición semiincorporada (para facilitar la respiración si hay dificultad respiratoria) vigilando constantes vitales (conciencia y respiración), dirección llama inmediatamente al 112 (Emergencias Sanitarias / Centro de Salud de Pinoso) indicando síntomas exactos y edad, y contacta telefónicamente con los padres/tutores de Claudia.",
            "Socorrer: Seguir las instrucciones del médico coordinador del 112 (y si se pauta medicación de rescate de urgencia o RCP pediátrica en caso de parada, actuar según protocolo sanitario de urgencia vital hasta la llegada de la ambulancia o traslado al Centro de Salud)."
          ]
        },
        {
          fase: "2. Gestión Administrativa, Documental y Protección de Datos",
          acciones: [
            "Confeccionar el Parte Oficial de Incidencias del Ayuntamiento de Pinoso detallando hora exacta, alimento ingerido, síntomas observados, tiempos de aviso al 112 y a la familia, y actuaciones realizadas.",
            "Una vez confirmado el diagnóstico médico por alergología/pediatría, solicitar a la familia el informe médico oficial y el protocolo de actuación urgente prescrito (con autorización firmada para administración de medicación de rescate como autoinyector de adrenalina/antihistamínico/broncodilatador).",
            "Actualizar el Expediente de la alumna, el Registro de Alergias e Intolerancias del centro y del servicio de cocina/catering, aplicando las garantías del art. 9 RGPD/LOPDGDD (datos de salud accesibles únicamente al personal educativo y de comedor por interés vital del menor, sin exponerlos a terceros ajenos)."
          ]
        },
        {
          fase: "3. Prevención de Alergias y Atragantamientos en el Comedor Infantil (0-3 años)",
          acciones: [
            "Recomendación preventiva con las familias: Los alimentos potencialmente alergénicos (huevo, pescado, legumbres, frutos secos molidos, leche) deben haberse probado previamente en casa durante al menos 3 días consecutivos antes de ofrecerlos por primera vez en el comedor escolar.",
            "Protocolo de comedor seguro para alérgicos: Bandejas, vajilla y utensilios identificados con código visual (p. ej. color rojo y foto/nombre del niño), elaboración sin contaminación cruzada y servirse en primer lugar.",
            "Prevención de asfixia por atragantamiento (AEP): Prohibición absoluta en 0-3 años de frutos secos enteros, palomitas, caramelos duros, uvas o tomates cherry enteros (cortarlos siempre longitudinalmente en cuartos), salchichas cortadas en rodajas redondas o manzana/zanahoria cruda dura; ambiente tranquilo sentado sin correr ni llorar mientras se mastica, y formación de todo el personal en maniobra de desobstrucción de la vía aérea (golpes interescapulares y compresiones torácicas en <1 año / abdominales Heimlich en >1 año)."
          ]
        },
        {
          fase: "4. Prevención de Riesgos Laborales del Técnico/a de Educación Infantil (Ley 31/1995)",
          acciones: [
            "Riesgos ergonómicos y musculoesqueléticos: Evitar flexiones forzadas de tronco al dar de comer o cambiar pañales utilizando sillas ergonómicas con ruedas para adultos a altura regulable, escalerillas para que los niños que ya caminan suban por sí mismos al cambiador, y técnica correcta de levantamiento de cargas (flexionar rodillas, espalda recta y acercar al niño al centro de gravedad corporal).",
            "Riesgos biológicos: Uso de guantes de nitrilo desechables en el cambio de pañal, cura de heridas o contacto con fluidos biológicos, lavado frecuente de manos y ventilación cruzada.",
            "Riesgos de la voz y psicosociales: Higiene vocal (no gritar por encima del ruido ambiental, acercarse al niño para hablar, hidratación frecuente) y coordinación de equipo."
          ]
        }
      ],
      organizacionEspacioTiempoMateriales: [
        "Botiquín de primeros auxilios homologado en lugar accesible para adultos pero fuera del alcance de los niños, revisado periódicamente (sin medicamentos generales salvo los prescritos individualmente con receta y autorización firmada).",
        "Teléfonos de emergencia (112, Centro de Salud de Pinoso, Instituto Nacional de Toxicología) y fichas de alergias visibles en zona interna de cocina y comedor."
      ],
      atencionDiversidadYFamilias: [
        "Inclusión en el comedor: El niño con alergias alimentarias come en la misma mesa que sus compañeros con un menú adaptado de aspecto similar para que no se sienta excluido, extremando la supervisión del adulto.",
        "Comunicación inmediata, transparente y tranquilizadora con la familia."
      ],
      evaluacion: [
        "Revisión trimestral de los protocolos de emergencia, simulacros y actualización trimestral de las fichas médicas de los alumnos con las familias."
      ],
      conclusion:
        "La excelencia profesional del Técnico/a de Educación Infantil une la calidez pedagógica con el rigor sanitario, administrativo y preventivo: saber reaccionar al segundo ante una emergencia vital y gestionar impecablemente la prevención y documentación garantiza una escuela infantil segura."
    },
    rubricItems: [
      "Aplica la conducta PAS y el protocolo de actuación urgente ante sospecha de anafilaxia sin desatender la seguridad del resto del grupo.",
      "Conecta el caso con las funciones administrativas de la Base Primera de Pinoso (parte de incidencias, expediente, avisos) y la LOPDGDD (datos de salud).",
      "Detalla medidas preventivas de alergias (introducción previa en casa, evitar contaminación cruzada, vajilla diferenciada) y de atragantamiento en 0-3 años.",
      "Integra la Ley 31/1995 (LPRL) identificando riesgos ergonómicos, biológicos y vocales del TSEI y sus medidas preventivas.",
      "Estructura la respuesta con claridad, precisión técnica y viabilidad práctica."
    ]
  }
];
