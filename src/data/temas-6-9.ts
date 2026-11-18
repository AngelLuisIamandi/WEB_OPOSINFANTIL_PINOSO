import { Topic } from "@/types/oposicion";

export const temas6a9: Topic[] = [
  // =========================================================================
  // TEMA 6: LEY DE PREVENCIÓN DE RIESGOS LABORALES
  // =========================================================================
  {
    id: 6,
    slug: "tema-6-prevencion-riesgos-laborales",
    block: "general",
    title: "Tema 6. Prevención de Riesgos Laborales",
    officialTitle:
      "Tema 6.- Ley de Prevención de Riesgos Laborales. Objeto. Ámbito de aplicación. Derechos. Obligaciones.",
    summary:
      "Análisis sistemático de la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales: fundamento constitucional, objeto, conceptos técnicos del art. 4, ámbito subjetivo (inclusiones y exclusiones), catálogo de derechos de protección y deberes empresariales del Capítulo III, obligaciones del personal, órganos de representación preventiva y aplicación práctica en Escuelas Infantiles municipales.",
    readTimeMinutes: 35,
    normativaClave: [
      "Constitución Española de 1978 (art. 40.2 y art. 43)",
      "Directiva Marco 89/391/CEE del Consejo, de 12 de junio de 1989, relativa a la aplicación de medidas para promover la mejora de la seguridad y de la salud de los trabajadores en el trabajo",
      "Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales (LPRL)",
      "Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento de los Servicios de Prevención (RSP)",
      "Real Decreto 486/1997, de 14 de abril, sobre disposiciones mínimas de seguridad y salud en los lugares de trabajo",
      "Real Decreto 1299/2006, de 10 de noviembre, cuadro de enfermedades profesionales (incluye nódulos de las cuerdas vocales en docentes y educadores)",
    ],
    sections: [
      {
        title: "1. Marco Constitucional, Estructura y Objeto de la Ley 31/1995 (Arts. 1 y 2)",
        content: [
          "El fundamento constitucional de la seguridad y salud laboral en España reside en el artículo 40.2 de la Constitución Española (ubicado en el Capítulo III del Título I, sobre principios rectores de la política social y económica), el cual encomienda a los poderes públicos velar por la seguridad e higiene en el trabajo, en conexión directa con el derecho a la vida e integridad física (art. 15 CE) y la protección de la salud (art. 43 CE). Asimismo, la normativa española transpone el acervo comunitario encabezado por la Directiva Marco 89/391/CEE.",
          "La Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales (en adelante, LPRL), constituye el pilar básico del régimen jurídico preventivo. Su estructura formal consta de una Exposición de Motivos, 54 artículos distribuidos en 7 Capítulos, 17 Disposiciones Adicionales, 2 Disposiciones Transitorias, 1 Disposición Derogatoria y 2 Disposiciones Finales.",
          "De acuerdo con el artículo 1 LPRL, la normativa sobre prevención está integrada por la propia Ley 31/1995, sus disposiciones de desarrollo o complemento (como el RD 39/1997 de Servicios de Prevención) y cuantas otras normas, legales o convencionales (convenios colectivos), contengan prescripciones relativas a la adopción de medidas preventivas en el ámbito laboral.",
          "El objeto de la Ley (art. 2 LPRL) es promover la seguridad y la salud de los trabajadores mediante la aplicación de medidas y el desarrollo de las actividades necesarias para la prevención de riesgos derivados del trabajo. Para ello, establece los principios generales relativos a la prevención de los riesgos profesionales, la eliminación o disminución de los factores de riesgo, la información, la consulta, la participación equilibrada y la formación de los trabajadores en materia preventiva. Sus disposiciones tienen carácter de Derecho necesario mínimo indisponible, pudiendo ser mejoradas y desarrolladas en los convenios colectivos.",
        ],
        highlights: [
          {
            title: "Estructura de los 7 Capítulos de la LPRL (54 artículos)",
            type: "legislacion",
            items: [
              "Capítulo I (arts. 1 a 4): Objeto, ámbito de aplicación y definiciones.",
              "Capítulo II (arts. 5 a 13): Política en materia de prevención de riesgos para proteger la seguridad y la salud en el trabajo (INSST, Inspección de Trabajo y Seguridad Social, Comisión Nacional de Seguridad y Salud en el Trabajo).",
              "Capítulo III (arts. 14 a 29): Derechos y obligaciones (núcleo esencial de examen).",
              "Capítulo IV (arts. 30 a 32 bis): Servicios de prevención y presencia de recursos preventivos.",
              "Capítulo V (arts. 33 a 40): Consulta y participación de los trabajadores (Delegados de Prevención y Comité de Seguridad y Salud).",
              "Capítulo VI (arts. 41): Obligaciones de los fabricantes, importadores y suministradores.",
              "Capítulo VII (arts. 42 a 54): Responsabilidades y sanciones (hoy integradas mayoritariamente en el TRLISOS, RD Legislativo 5/2000).",
            ],
          },
        ],
      },
      {
        title: "2. Definiciones Legales Clave (Artículo 4 LPRL)",
        content: [
          "El artículo 4 de la LPRL establece un glosario técnico-jurídico de precisión obligatoria en los exámenes tipo test y de desarrollo, diferenciando nítidamente entre prevención, riesgo, daño, condición de trabajo y equipos.",
          "La prevención (art. 4.1º) se concibe como el conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la empresa (o Administración Pública) con el fin de evitar o disminuir los riesgos derivados del trabajo.",
          "El riesgo laboral (art. 4.2º) es la posibilidad de que un trabajador sufra un determinado daño derivado del trabajo. Para calificar un riesgo desde el punto de vista de su gravedad, se valorarán conjuntamente dos variables: la probabilidad de que se produzca el daño y la severidad del mismo.",
          "Los daños derivados del trabajo (art. 4.3º) abarcan las enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo. Por su parte, el riesgo laboral grave e inminente (art. 4.4º) es aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud de los trabajadores.",
        ],
        table: {
          headers: ["Concepto legal (Art. 4 LPRL)", "Apartado", "Elementos definitorios esenciales"],
          rows: [
            [
              "Prevención",
              "Art. 4.1º",
              "Conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la entidad para evitar o disminuir riesgos.",
            ],
            [
              "Riesgo laboral",
              "Art. 4.2º",
              "Posibilidad de sufrir un daño derivado del trabajo. Se califica valorando conjuntamente probabilidad + severidad del daño.",
            ],
            [
              "Daños derivados del trabajo",
              "Art. 4.3º",
              "Enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo.",
            ],
            [
              "Riesgo laboral grave e inminente",
              "Art. 4.4º",
              "Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud.",
            ],
            [
              "Procesos, actividades o equipos potencialmente peligrosos",
              "Art. 4.5º",
              "Aquellos que, en ausencia de medidas preventivas específicas, originen riesgos para la seguridad y salud de quienes los desarrollan o utilizan.",
            ],
            [
              "Equipo de trabajo",
              "Art. 4.6º",
              "Cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo.",
            ],
            [
              "Condición de trabajo",
              "Art. 4.7º",
              "Cualquier característica del mismo que pueda tener influencia significativa en la generación de riesgos (locales, instalaciones, equipos, agentes físicos/químicos/biológicos, procedimientos y organización/ordenación del trabajo).",
            ],
            [
              "Equipo de Protección Individual (EPI)",
              "Art. 4.8º",
              "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos, así como cualquier complemento o accesorio destinado a tal fin.",
            ],
          ],
        },
      },
      {
        title: "3. Ámbito de Aplicación: Inclusiones y Exclusiones (Artículo 3 LPRL)",
        content: [
          "El artículo 3 de la LPRL delimita el ámbito subjetivo y funcional de la norma bajo una vocación universalista, aplicable tanto al sector privado como a las Administraciones Públicas, incluido el Ayuntamiento de Pinoso y su personal de Escuelas Infantiles.",
          "Dentro de las inclusiones (art. 3.1 LPRL), la ley comprende tanto a los trabajadores vinculados por una relación laboral en los términos del Estatuto de los Trabajadores (personal laboral municipal), como al personal con relación de carácter administrativo o estatutario al servicio de las Administraciones Públicas (personal funcionario de carrera o interino, como las plazas de Técnico de Educación Infantil). Igualmente, aplica a las sociedades cooperativas en las que existan socios cuya actividad consista en la prestación de su trabajo personal, y contempla deberes específicos para trabajadores autónomos y fabricantes/suministradores.",
          "Cuando en la LPRL se hace referencia a 'trabajadores' y 'empresarios', se entienden también comprendidos en estos términos, respectivamente, el personal con relación de carácter administrativo o estatutario y la Administración Pública para la que presta servicios (en nuestro caso, la Corporación Local).",
          "En cuanto a las exclusiones (art. 3.2 LPRL), la ley no será de aplicación en aquellas actividades cuyas particularidades lo impidan en el ámbito de las funciones públicas de: a) Policía, seguridad y resguardo aduanero; b) Servicios operativos de protección civil y peritaje forense en los casos de grave riesgo, catástrofe y calamidad pública; y c) Fuerzas Armadas y actividades militares de la Guardia Civil. No obstante, incluso en estos colectivos la LPRL inspirará la normativa específica que se dicte para regular su protección.",
          "Respecto al servicio del hogar familiar (art. 3.4 LPRL), tras la modificación operada por el Real Decreto-ley 16/2022, se suprimió la exclusión histórica absoluta, reconociéndose el derecho a una protección eficaz en materia de seguridad y salud en el trabajo, si bien con especificidades reglamentarias adaptadas al ámbito doméstico (RD 893/2024).",
          "Finalmente, en los centros y establecimientos penitenciarios (art. 3.3 LPRL), se adaptarán las disposiciones de la ley a aquellas actividades cuyas características justifiquen una regulación especial.",
        ],
        highlights: [
          {
            title: "Trampa frecuente de examen en el Art. 3.2 LPRL",
            type: "trampa",
            items: [
              "Los servicios de protección civil y peritaje forense NO están excluidos en todo momento de la LPRL, sino ÚNICAMENTE 'en los casos de grave riesgo, catástrofe y calamidad pública'. En su actividad ordinaria diaria sí se les aplica la LPRL.",
              "El personal funcionario y laboral de un Ayuntamiento (incluidos Técnicos de Educación Infantil) está PLENAMENTE incluido en el ámbito de aplicación del art. 3.1 LPRL.",
            ],
          },
        ],
      },
      {
        title: "4. Derechos de los Trabajadores y Obligaciones del Empresario (Arts. 14 a 28 LPRL)",
        content: [
          "El Capítulo III de la LPRL (artículos 14 a 29) articula un sistema de correlatividad jurídica: los derechos de protección de los trabajadores constituyen, simultáneamente, obligaciones legales del empresario o de la Administración empleadora.",
          "El artículo 14 consagra el derecho de los trabajadores a una protección eficaz en materia de seguridad y salud en el trabajo, y el correlativo deber del empresario o Administración de proteger a su personal frente a los riesgos laborales. El coste de las medidas relativas a la seguridad y la salud en el trabajo no deberá recaer en modo alguno sobre los trabajadores (art. 14.5 LPRL).",
          "El artículo 15 establece los 9 principios generales de la acción preventiva que el empleador debe aplicar en el siguiente orden lógico: 1) Evitar los riesgos; 2) Evaluar los riesgos que no se puedan evitar; 3) Combatir los riesgos en su origen; 4) Adaptar el trabajo a la persona (concepción ergonómica de puestos, equipos y métodos); 5) Tener en cuenta la evolución de la técnica; 6) Sustituir lo peligroso por lo que entrañe poco o ningún peligro; 7) Planificar la prevención integrando técnica, organización, condiciones de trabajo, relaciones sociales y factores ambientales; 8) Adoptar medidas que antepongan la protección colectiva a la individual; y 9) Dar las debidas instrucciones a los trabajadores. Además, el empresario tomará en consideración las capacidades profesionales en materia de seguridad y salud en el momento de encomendar las tareas, y solo los trabajadores con información suficiente y adecuada podrán acceder a zonas de riesgo grave y específico.",
          "El artículo 16 regula el Plan de prevención de riesgos laborales, la evaluación de los riesgos y la planificación de la actividad preventiva. La prevención debe integrarse en el sistema general de gestión de la entidad a través de la implantación y aplicación de un Plan de Prevención (que incluye estructura organizativa, responsabilidades, funciones, prácticas, procedimientos y recursos). Los instrumentos esenciales para la gestión y aplicación de dicho Plan son dos: la evaluación de riesgos laborales (inicial y periódica cuando cambien las condiciones o se detecten daños) y la planificación de la actividad preventiva.",
          "El artículo 17 obliga a proporcionar equipos de trabajo adecuados y Equipos de Protección Individual (EPI) gratuitos, velando por su uso efectivo cuando los riesgos no se puedan evitar o limitar suficientemente por medios técnicos de protección colectiva. En una Escuela Infantil, por ejemplo, es obligatorio el suministro gratuito de guantes desechables para el cambio de pañales o cura de heridas.",
          "El artículo 18 garantiza los derechos de información, consulta y participación de los trabajadores sobre los riesgos generales y específicos de su puesto, las medidas de protección y las actuaciones de emergencia. En las empresas que cuenten con representantes de los trabajadores, la información se facilitará a través de estos, si bien deberá informarse directamente a cada trabajador de los riesgos específicos que afecten a su puesto de trabajo y de las medidas aplicables.",
          "El artículo 19 regula el derecho y deber de formación: el empresario garantizará que cada trabajador reciba una formación teórica y práctica, suficiente y adecuada, en materia preventiva, tanto en el momento de su contratación (cualquiera que sea la modalidad o duración), como cuando se produzcan cambios en las funciones o se introduzcan nuevas tecnologías o equipos. La formación deberá estar centrada específicamente en el puesto de trabajo, adaptarse a la evolución de los riesgos, impartirse siempre que sea posible dentro de la jornada de trabajo (o en su defecto en otras horas pero con el descuento en aquella del tiempo invertido) y su coste no recaerá en ningún caso sobre los trabajadores.",
          "El artículo 20 regula las medidas de emergencia (primeros auxilios, lucha contra incendios y evacuación), debiendo el empleador designar al personal encargado de ponerlas en práctica y comprobar periódicamente su funcionamiento. En una Escuela Infantil municipal, el Plan de Autoprotección y los simulacros de evacuación con lactantes y caminantes (uso de cunas de evacuación o cuerdas guía) son esenciales.",
          "El artículo 21 aborda el riesgo grave e inminente: el empleador debe informar lo antes posible a los afectados, adoptar medidas e instrucciones para interrumpir la actividad y permitir abandonar el lugar de trabajo. El trabajador tiene derecho a interrumpir su actividad y abandonar el lugar de trabajo cuando considere que dicha actividad entraña un riesgo grave e inminente para su vida o salud. Asimismo, los representantes legales (por mayoría de sus miembros) o los Delegados de Prevención (cuando no sea posible reunir con urgencia a aquellos) podrán acordar la paralización de la actividad, comunicándolo de inmediato a la empresa y a la autoridad laboral, la cual en el plazo de 24 horas anulará o ratificará la paralización acordada. Los trabajadores o sus representantes no podrán sufrir perjuicio alguno por estas medidas, a menos que hubieran obrado de mala fe o cometido negligencia grave.",
          "El artículo 22 regula la vigilancia de la salud: el empresario garantizará a los trabajadores la vigilancia periódica de su estado de salud en función de los riesgos inherentes al trabajo. Por regla general, requiere el consentimiento del trabajador (carácter voluntario), exceptuándose, previo informe de los representantes de los trabajadores, los supuestos en que la realización de los reconocimientos sea imprescindible para evaluar los efectos de las condiciones de trabajo sobre la salud, para verificar si el estado de salud del trabajador puede constituir un peligro para el mismo, para los demás trabajadores o para otras personas relacionadas con la empresa (ej. menores de la Escuela Infantil), o cuando así esté establecido en una disposición legal. Los datos médicos son estrictamente confidenciales: el empleador y los órganos de prevención solo serán informados de las conclusiones en términos de 'apto' o 'no apto' o la necesidad de adaptar el puesto, sin que los resultados puedan usarse con fines discriminatorios.",
          "Completan el capítulo la obligación de elaborar y conservar la documentación preventiva a disposición de la autoridad laboral (art. 23); el deber de coordinación de actividades empresariales cuando en un mismo centro concurran trabajadores de varias empresas o contratas (art. 24, desarrollado por RD 171/2004); la protección de trabajadores especialmente sensibles a determinados riesgos (art. 25); la protección de la maternidad y lactancia natural (art. 26: evaluación específica, adaptación de condiciones o tiempo de trabajo, cambio a puesto compatible y, si no fuera técnica u objetivamente posible, paso a situación de suspensión del contrato o licencia por riesgo durante el embarazo o riesgo durante la lactancia natural de hijos menores de 9 meses); la protección de los menores de 18 años con evaluación previa específica (art. 27) y la igualdad de nivel de protección para trabajadores temporales o de ETT (art. 28).",
        ],
        highlights: [
          {
            title: "Reglas de oro de los Arts. 19, 21 y 22 LPRL",
            type: "importante",
            items: [
              "Formación (art. 19): Teórica y práctica, suficiente y adecuada, al contratar y ante cambios de funciones/equipos, dentro de la jornada laboral (o descontando el tiempo) y 100 % gratuita.",
              "Riesgo grave e inminente (art. 21): La autoridad laboral dispone de un plazo máximo de 24 HORAS para anular o ratificar la paralización acordada por los representantes de los trabajadores.",
              "Vigilancia de la salud (art. 22): Voluntaria salvo 3 excepciones (evaluar efectos de las condiciones, peligro para sí mismo/terceros o disposición legal), previo informe de los representantes. El empleador NUNCA accede al diagnóstico médico sin consentimiento expreso, solo a las conclusiones de aptitud.",
              "Maternidad y lactancia (art. 26): Escalonamiento obligatorio de medidas: 1º Adaptación de condiciones o tiempo de trabajo (incluida la no realización de trabajo nocturno o a turnos); 2º Cambio de puesto o función; 3º Suspensión/licencia por riesgo durante el embarazo o lactancia natural (hasta los 9 meses del bebé).",
            ],
          },
        ],
      },
      {
        title: "5. Obligaciones de los Trabajadores y Órganos de Participación (Arts. 29 y 33 a 40 LPRL)",
        content: [
          "El artículo 29 de la LPRL regula las obligaciones de los trabajadores en materia de prevención de riesgos. Corresponde a cada trabajador velar, según sus posibilidades y mediante el cumplimiento de las medidas de prevención que en cada caso sean adoptadas, por su propia seguridad y salud en el trabajo y por la de aquellas otras personas a las que pueda afectar su actividad profesional (como los niños y niñas de 0 a 3 años en la Escuela Infantil), a causa de sus actos y omisiones en el trabajo, de conformidad con su formación y las instrucciones del empresario.",
          "En particular, los trabajadores, con arreglo a su formación y siguiendo las instrucciones del empresario, deberán: 1º Usar adecuadamente las máquinas, aparatos, herramientas, sustancias peligrosas y cualesquiera otros medios con los que desarrollen su actividad; 2º Utilizar correctamente los medios y equipos de protección (EPI) facilitados por el empresario; 3º No poner fuera de funcionamiento y utilizar correctamente los dispositivos de seguridad existentes; 4º Informar de inmediato a su superior jerárquico directo y a los trabajadores designados o al servicio de prevención acerca de cualquier situación que, a su juicio, entrañe, por motivos razonables, un riesgo para la seguridad y la salud; 5º Contribuir al cumplimiento de las obligaciones establecidas por la autoridad competente; y 6º Cooperar con el empresario para que este pueda garantizar unas condiciones de trabajo seguras.",
          "El incumplimiento por los trabajadores de las obligaciones en materia de prevención de riesgos tendrá la consideración de incumplimiento laboral a los efectos previstos en el artículo 58.1 del Estatuto de los Trabajadores o de falta disciplinaria conforme a la normativa de función pública (art. 29.3 LPRL).",
          "Por último, el Capítulo V (arts. 33 a 40 LPRL) regula la consulta y participación de los trabajadores. Los Delegados de Prevención (art. 35) son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo, designados por y entre los representantes del personal con arreglo a una escala legal según la plantilla. Por su parte, el Comité de Seguridad y Salud (art. 38) es el órgano paritario y colegiado de participación destinado a la consulta regular y periódica de las actuaciones de la empresa o Administración en materia de prevención; se constituirá en todas las empresas o centros de trabajo que cuenten con 50 o más trabajadores, estando formado por los Delegados de Prevención, de una parte, y por el empresario y/o sus representantes en número igual al de los Delegados de Prevención, de la otra. Se reúne trimestralmente y siempre que lo solicite alguna de las representaciones.",
        ],
        table: {
          headers: ["Número de trabajadores de la entidad/centro", "Número de Delegados de Prevención (Art. 35.2 LPRL)"],
          rows: [
            ["Hasta 30 trabajadores", "1 Delegado de Prevención (será el Delegado de Personal)"],
            ["De 31 a 49 trabajadores", "1 Delegado de Prevención (elegido por y entre los Delegados de Personal)"],
            ["De 50 a 100 trabajadores", "2 Delegados de Prevención"],
            ["De 101 a 500 trabajadores", "3 Delegados de Prevención"],
            ["De 501 a 1.000 trabajadores", "4 Delegados de Prevención"],
            ["De 1.001 a 2.000 trabajadores", "5 Delegados de Prevención"],
            ["De 2.001 a 3.000 trabajadores", "6 Delegados de Prevención"],
            ["De 3.001 a 4.000 trabajadores", "7 Delegados de Prevención"],
            ["De 4.001 en adelante", "8 Delegados de Prevención"],
          ],
        },
        highlights: [
          {
            title: "Riesgos Laborales Específicos del Técnico de Educación Infantil (0-3 años)",
            type: "ejemplo",
            items: [
              "Riesgos ergonómicos y musculoesqueléticos: Sobreesfuerzos por manipulación manual de cargas (coger en brazos a lactantes y niños/as), posturas forzadas (agacharse, arrodillarse, mobiliario de talla infantil). Prevención: higiene postural (flexionar rodillas manteniendo espalda recta), cambiadores con escalerilla de acceso autónomo para niños de 2-3 años y sillas ergonómicas de adulto con ruedas.",
              "Riesgos biológicos: Exposición a virus, bacterias y parásitos por contacto con fluidos corporales (saliva, mucosidad, orina, heces, sangre) en el cambio de pañal o higiene. Prevención: lavado de manos frecuente, uso de guantes desechables (EPI), protocolos de desinfección de superficies y vacunación.",
              "Trastornos de la voz (disfonías y nódulos vocales): Reconocidos como enfermedad profesional en el RD 1299/2006 para profesionales de centros educativos. Prevención: higiene vocal, hidratación, control acústico del aula y evitar gritar.",
              "Riesgos psicosociales: Estrés laboral, carga mental y emocional por atención constante a menores vulnerables y relación con familias.",
            ],
          },
        ],
      },
    ],
    esquemaVisual: {
      title: "Arquitectura de la Ley 31/1995 de Prevención de Riesgos Laborales (LPRL)",
      nodes: [
        {
          label: "Marco General (Cap. I, Arts. 1-4)",
          children: [
            "Fundamento: Art. 40.2 CE y Directiva Marco 89/391/CEE",
            "Estructura: 7 Capítulos y 54 artículos (Derecho necesario mínimo indisponible)",
            "Ámbito (Art. 3): Incluye personal laboral (ET) y personal funcionario/estatutario de AAPP",
            "Exclusiones (Art. 3.2): Policía/aduanas, FFAA, y protección civil/peritaje forense en grave riesgo o catástrofe",
          ],
        },
        {
          label: "Principios y Gestión (Arts. 14-16)",
          children: [
            "Art. 14: Derecho a protección eficaz; coste preventivo NUNCA recae sobre el trabajador",
            "Art. 15: 9 principios (1º evitar riesgos, 2º evaluar los inevitables, 3º combatir en origen, 8º colectiva sobre individual)",
            "Art. 16: Plan de Prevención + 2 instrumentos esenciales: Evaluación de riesgos y Planificación preventiva",
          ],
        },
        {
          label: "Derechos Específicos (Arts. 17-28)",
          children: [
            "Art. 17: Equipos de trabajo seguros y EPI gratuitos",
            "Art. 19: Formación teórica y práctica, suficiente y adecuada, en jornada laboral y gratuita",
            "Art. 21: Riesgo grave e inminente (autoridad laboral resuelve paralización en 24 horas)",
            "Art. 22: Vigilancia de la salud voluntaria (salvo 3 excepciones) y confidencial",
            "Art. 26: Protección de maternidad y lactancia (adaptación -> cambio de puesto -> suspensión/licencia)",
          ],
        },
        {
          label: "Deberes y Participación (Arts. 29 y 33-40)",
          children: [
            "Art. 29: Obligaciones del trabajador (su incumplimiento es falta laboral o disciplinaria)",
            "Art. 35: Delegados de Prevención (de 1 hasta 8 según escala de plantilla)",
            "Art. 38: Comité de Seguridad y Salud (en centros de 50 o más trabajadores, paritario y colegiado, reunión trimestral)",
          ],
        },
      ],
    },
    datosOro: [
      "Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales (LPRL): consta de 54 artículos repartidos en 7 capítulos; su base constitucional es el art. 40.2 CE.",
      "Art. 4.2º LPRL: Para calificar un riesgo laboral desde el punto de vista de su gravedad se valoran conjuntamente dos factores: la PROBABILIDAD de que se produzca el daño y la SEVERIDAD del mismo.",
      "Art. 15 LPRL (9 principios de la acción preventiva): el primer principio es EVITAR los riesgos; el segundo, EVALUAR los que no se puedan evitar; y el octavo, anteponer la protección COLECTIVA a la INDIVIDUAL.",
      "Art. 16.2 LPRL: Los dos instrumentos esenciales para la gestión y aplicación del Plan de Prevención son la evaluación de riesgos laborales y la planificación de la actividad preventiva.",
      "Art. 19 LPRL: La formación preventiva debe ser teórica y práctica, suficiente y adecuada, impartirse dentro de la jornada de trabajo (o descontando el tiempo invertido) y ser totalmente gratuita para el trabajador.",
      "Art. 21.3 LPRL: Acordada la paralización de actividades por riesgo grave e inminente por los representantes legales o Delegados de Prevención, la autoridad laboral dispone de 24 HORAS para anularla o ratificarla.",
      "Art. 38 LPRL: El Comité de Seguridad y Salud es un órgano paritario y colegiado que se constituye en empresas o centros de trabajo que cuenten con 50 o más trabajadores y se reúne trimestralmente.",
    ],
    temaDesarrollo: {
      introduccion:
        "La protección de la seguridad y la salud de las personas trabajadoras constituye uno de los pilares del Estado social y democrático de Derecho proclamado en el artículo 1.1 de la Constitución Española de 1978. El artículo 40.2 del texto constitucional encomienda expresamente a los poderes públicos velar por la seguridad e higiene en el trabajo, mandato que se conecta con el derecho fundamental a la vida y a la integridad física (art. 15 CE) y con el derecho a la protección de la salud (art. 43 CE). En cumplimiento de este mandato y de la transposición de la Directiva Marco 89/391/CEE, se promulgó la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales (LPRL). En el ámbito de las Administraciones Locales, como el Ayuntamiento de Pinoso, y específicamente en el puesto de Técnico de Educación Infantil, esta norma adquiere una relevancia singular: garantiza entornos laborales saludables frente a riesgos ergonómicos, biológicos, vocales y psicosociales, redundando directamente en la calidad educativa y en la seguridad de los niños y niñas del primer ciclo de Educación Infantil (0-3 años).",
      estructuraEpigrafes: [
        {
          epigraph: "1. La Ley 31/1995, de Prevención de Riesgos Laborales: Objeto y Definiciones (Arts. 1, 2 y 4)",
          body: "La Ley 31/1995, de 8 de noviembre, consta de 54 artículos estructurados en 7 Capítulos, 17 Disposiciones Adicionales, 2 Transitorias, 1 Derogatoria y 2 Finales. Conforme a su artículo 1, la normativa preventiva está integrada por la propia LPRL, sus disposiciones reglamentarias de desarrollo (destacando el Real Decreto 39/1997, Reglamento de los Servicios de Prevención) y las normas legales o convencionales que contengan prescripciones preventivas.\n\nEl artículo 2 establece que el objeto de la Ley es promover la seguridad y la salud de los trabajadores mediante la aplicación de medidas y el desarrollo de las actividades necesarias para la prevención de riesgos derivados del trabajo. Sus preceptos tienen carácter de Derecho necesario mínimo indisponible, pudiendo ser mejorados en los convenios colectivos o acuerdos de condiciones de trabajo de los empleados públicos.\n\nPara dotar de rigor técnico al sistema, el artículo 4 LPRL define ocho conceptos fundamentales: 1) Prevención (conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la entidad para evitar o disminuir riesgos); 2) Riesgo laboral (posibilidad de que un trabajador sufra un determinado daño derivado del trabajo, calificándose su gravedad valorando conjuntamente la probabilidad de que se produzca el daño y la severidad del mismo); 3) Daños derivados del trabajo (enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo); 4) Riesgo laboral grave e inminente (aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud); 5) Procesos, actividades o equipos potencialmente peligrosos; 6) Equipo de trabajo (cualquier máquina, aparato, instrumento o instalación utilizada en el trabajo); 7) Condición de trabajo (cualquier característica del mismo que pueda tener influencia significativa en la generación de riesgos, incluyendo locales, instalaciones, agentes físicos, químicos y biológicos, procedimientos y organización del trabajo); y 8) Equipo de Protección Individual o EPI (cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos).",
        },
        {
          epigraph: "2. Ámbito de Aplicación: Inclusiones y Exclusiones (Artículo 3 LPRL)",
          body: "El artículo 3 de la LPRL consagra un ámbito subjetivo de aplicación generalizado que abarca tanto al sector privado como al sector público. De acuerdo con el artículo 3.1, la Ley y sus normas de desarrollo son de aplicación tanto en el ámbito de las relaciones laborales reguladas en el texto refundido de la Ley del Estatuto de los Trabajadores, como en el de las relaciones de carácter administrativo o estatutario del personal al servicio de las Administraciones Públicas (con las peculiaridades previstas en la propia Ley o en sus normas de desarrollo), así como a las sociedades cooperativas con socios de trabajo. Por consiguiente, el personal funcionario y laboral del Ayuntamiento de Pinoso, incluidas las plazas de Técnico de Educación Infantil, se encuentra plenamente amparado por la LPRL.\n\nPor el contrario, el artículo 3.2 establece que la Ley no será de aplicación en aquellas actividades cuyas particularidades lo impidan en el ámbito de las funciones públicas de:\na) Policía, seguridad y resguardo aduanero.\nb) Servicios operativos de protección civil y peritaje forense en los casos de grave riesgo, catástrofe y calamidad pública.\nc) Fuerzas Armadas y actividades militares de la Guardia Civil.\nNo obstante, la LPRL inspirará la normativa específica que se dicte para regular la protección de la seguridad y salud en estos colectivos. Asimismo, en los establecimientos penitenciarios se adaptarán las disposiciones de la Ley (art. 3.3), y en la relación laboral de carácter especial del servicio del hogar familiar (art. 3.4, reformado por RDL 16/2022 y desarrollado por RD 893/2024) se reconoce el derecho a una protección eficaz con especificidades adaptadas al hogar.",
        },
        {
          epigraph: "3. Derechos de los Trabajadores y Deberes Empresariales (Capítulo III, Arts. 14 a 28 LPRL)",
          body: "El Capítulo III de la LPRL articula el catálogo de derechos de los trabajadores, que se traducen en correlativas obligaciones del empresario o Administración Pública. El artículo 14 proclama el derecho a una protección eficaz en materia de seguridad y salud en el trabajo, estableciendo que el coste de las medidas relativas a la seguridad y salud no deberá recaer en modo alguno sobre los trabajadores.\n\nEl artículo 15 enumera los nueve principios generales de la acción preventiva: 1) Evitar los riesgos; 2) Evaluar los riesgos que no se puedan evitar; 3) Combatir los riesgos en su origen; 4) Adaptar el trabajo a la persona; 5) Tener en cuenta la evolución de la técnica; 6) Sustituir lo peligroso por lo que entrañe poco o ningún peligro; 7) Planificar la prevención; 8) Adoptar medidas que antepongan la protección colectiva a la individual; y 9) Dar las debidas instrucciones a los trabajadores.\n\nConforme al artículo 16, la prevención debe integrarse en el sistema general de gestión de la entidad a través del Plan de Prevención de Riesgos Laborales, cuyos dos instrumentos esenciales de gestión y aplicación son la evaluación de los riesgos laborales y la planificación de la actividad preventiva.\n\nJunto a ello, el Capítulo III reconoce un haz de derechos específicos:\n- Equipos de trabajo y medios de protección (art. 17): deber de proporcionar equipos adecuados y EPI gratuitos, velando por su uso efectivo.\n- Información, consulta y participación (art. 18): información sobre riesgos generales y específicos del puesto y medidas de protección y emergencia.\n- Formación de los trabajadores (art. 19): formación teórica y práctica, suficiente y adecuada, al momento de la contratación y ante cambios de funciones o tecnologías, impartida dentro de la jornada laboral (o con descuento del tiempo invertido) y gratuita.\n- Medidas de emergencia (art. 20) y actuación en caso de riesgo grave e inminente (art. 21): derecho del trabajador a interrumpir su actividad y abandonar el lugar de trabajo, y facultad de los representantes legales o Delegados de Prevención de acordar la paralización, que la autoridad laboral ratificará o anulará en 24 horas.\n- Vigilancia de la salud (art. 22): periódica, voluntaria (salvo que sea imprescindible para evaluar efectos de las condiciones, verificar peligro para el propio trabajador o terceros —como los menores de la escuela infantil— o por disposición legal, previo informe de la representación del personal) y presidida por la confidencialidad médica.\n- Documentación (art. 23) y Coordinación de actividades empresariales (art. 24).\n- Protección de colectivos específicos: trabajadores especialmente sensibles (art. 25), protección de la maternidad y lactancia natural hasta los 9 meses mediante adaptación, cambio de puesto o suspensión/licencia por riesgo (art. 26), protección de menores de 18 años (art. 27) y trabajadores temporales o de ETT (art. 28).",
        },
        {
          epigraph: "4. Obligaciones de los Trabajadores (Art. 29), Representación y Aplicación en la Escuela Infantil",
          body: "El artículo 29 de la LPRL impone a cada trabajador el deber de velar, según sus posibilidades y mediante el cumplimiento de las medidas preventivas adoptadas, por su propia seguridad y salud y por la de aquellas otras personas a las que pueda afectar su actividad profesional, de conformidad con su formación y las instrucciones del empleador. En particular, los trabajadores deben: 1º Usar adecuadamente máquinas, aparatos, herramientas y medios de trabajo; 2º Utilizar correctamente los equipos de protección individual (EPI) facilitados; 3º No poner fuera de funcionamiento y utilizar correctamente los dispositivos de seguridad; 4º Informar de inmediato a su superior jerárquico directo y al servicio de prevención de cualquier situación que entrañe un riesgo; 5º Contribuir al cumplimiento de las obligaciones establecidas por la autoridad competente; y 6º Cooperar con el empresario para garantizar condiciones seguras. El incumplimiento de estas obligaciones constituye incumplimiento laboral (art. 58.1 ET) o falta disciplinaria funcionarial (art. 29.3 LPRL).\n\nEn el Capítulo V se articulan los órganos de representación especializada: los Delegados de Prevención (art. 35, elegidos por y entre los representantes del personal según una escala de 1 a 8 delegados) y el Comité de Seguridad y Salud (art. 38), órgano paritario y colegiado de consulta regular que se constituye en empresas o centros de trabajo de 50 o más trabajadores y se reúne trimestralmente.\n\nEn una Escuela Infantil Municipal de primer ciclo (0-3 años), estos preceptos se concretan en la prevención de cuatro grandes grupos de riesgos para el Técnico de Educación Infantil: 1) Riesgos ergonómicos y musculoesqueléticos derivados de la manipulación de niños en brazos y posturas forzadas a baja altura (prevenidos mediante higiene postural, cambiadores con escalerilla de acceso autónomo y sillas ergonómicas bajas para educadores); 2) Riesgos biológicos por contacto con fluidos corporales en el cambio de pañal y alimentación (uso de guantes EPI, lavado de manos y protocolos de higiene); 3) Trastornos de la voz (nódulos en cuerdas vocales reconocidos como enfermedad profesional en el RD 1299/2006); y 4) Riesgos psicosociales y planes de autoprotección adaptados a la evacuación de bebés y caminantes.",
        },
      ],
      conclusion:
        "En conclusión, la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales, supera la visión meramente reparadora del accidente laboral para instaurar una auténtica cultura preventiva integrada en todas las fases de la actividad pública y privada. Para el Técnico de Educación Infantil del Ayuntamiento de Pinoso, conocer y aplicar los derechos y obligaciones preventivos no solo protege su propia salud laboral frente a riesgos ergonómicos, biológicos o vocales, sino que garantiza un entorno escolar seguro, saludable y ejemplarizante para el desarrollo integral de los niños y niñas de 0 a 3 años.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (artículos 15, 40.2 y 43).",
        "Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales (BOE núm. 269, de 10 de noviembre de 1995).",
        "Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento de los Servicios de Prevención.",
        "Real Decreto Legislativo 5/2000, de 4 de agosto, por el que se aprueba el texto refundido de la Ley sobre Infracciones y Sanciones en el Orden Social (TRLISOS).",
        "Instituto Nacional de Seguridad y Salud en el Trabajo (INSST): Guías técnicas de prevención de riesgos laborales en el sector docente y de atención a la infancia.",
      ],
      consejosTribunal: [
        "Cita siempre el precepto constitucional exacto (art. 40.2 CE) y la fecha completa de la Ley 31/1995, de 8 de noviembre.",
        "Diferencia con precisión las 8 definiciones del artículo 4 LPRL, especialmente la fórmula de calificación del riesgo laboral (probabilidad + severidad) y el concepto de condición de trabajo.",
        "Enumera ordenadamente los 9 principios de la acción preventiva del artículo 15 LPRL: el tribunal valora muy positivamente que respetes su jerarquía legal (1º evitar, 2º evaluar, 8º anteponer protección colectiva a la individual).",
        "Vincula el final del tema con las funciones reales del Técnico de Educación Infantil en la Escuela Infantil Municipal de Pinoso (ergonomía en cambiadores y cunas, EPI en cambio de pañal, higiene vocal y plan de evacuación de 0 a 3 años).",
      ],
    },
    questions: [
      {
        id: "t6-q1",
        topicId: 6,
        question:
          "¿En qué artículo de la Constitución Española se encomienda a los poderes públicos velar por la seguridad e higiene en el trabajo, sirviendo de fundamento directo a la Ley 31/1995, de Prevención de Riesgos Laborales?",
        options: [
          "En el artículo 35.1 de la Constitución Española.",
          "En el artículo 40.2 de la Constitución Española.",
          "En el artículo 43.3 de la Constitución Española.",
          "En el artículo 28.2 de la Constitución Española.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 40.2 de la Constitución Española establece expresamente que los poderes públicos velarán por la seguridad e higiene en el trabajo, constituyendo el mandato constitucional que desarrolla la Ley 31/1995.",
        reference: "Art. 40.2 CE y Exposición de Motivos Ley 31/1995",
        difficulty: "basica",
      },
      {
        id: "t6-q2",
        topicId: 6,
        question:
          "De acuerdo con el artículo 4.2º de la Ley 31/1995, de Prevención de Riesgos Laborales, para calificar un riesgo desde el punto de vista de su gravedad, se valorarán conjuntamente:",
        options: [
          "La peligrosidad del equipo de trabajo y la cualificación profesional del trabajador.",
          "La frecuencia de la exposición y el coste económico de las medidas preventivas.",
          "La probabilidad de que se produzca el daño y la severidad del mismo.",
          "El número de trabajadores afectados y la duración de la jornada laboral.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 4.2º de la LPRL define el riesgo laboral como la posibilidad de que un trabajador sufra un determinado daño derivado del trabajo, precisando que para calificar un riesgo desde el punto de vista de su gravedad se valorarán conjuntamente la probabilidad de que se produzca el daño y la severidad del mismo.",
        reference: "Art. 4.2º Ley 31/1995 (LPRL)",
        difficulty: "basica",
      },
      {
        id: "t6-q3",
        topicId: 6,
        question:
          "Según el artículo 3.2 de la Ley 31/1995, de Prevención de Riesgos Laborales, ¿en cuál de los siguientes supuestos NO será de aplicación dicha Ley?",
        options: [
          "En las relaciones de carácter administrativo o estatutario del personal al servicio de las Administraciones Locales.",
          "En las sociedades cooperativas en las que existan socios cuya actividad consista en la prestación de su trabajo personal.",
          "En los servicios operativos de protección civil y peritaje forense en los casos de grave riesgo, catástrofe y calamidad pública.",
          "En los centros educativos municipales de primer ciclo de Educación Infantil.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 3.2.b) de la LPRL excluye de su aplicación aquellas actividades cuyas particularidades lo impidan en el ámbito de las funciones públicas de los servicios operativos de protección civil y peritaje forense en los casos de grave riesgo, catástrofe y calamidad pública.",
        reference: "Art. 3.2 Ley 31/1995 (LPRL)",
        difficulty: "media",
      },
      {
        id: "t6-q4",
        topicId: 6,
        question:
          "Conforme al artículo 15.1 de la Ley 31/1995, ¿cuál es el orden correcto de los tres primeros principios generales de la acción preventiva que debe aplicar el empresario?",
        options: [
          "1º Evaluar los riesgos, 2º Evitar los riesgos y 3º Dar las debidas instrucciones a los trabajadores.",
          "1º Evitar los riesgos, 2º Evaluar los riesgos que no se puedan evitar y 3º Combatir los riesgos en su origen.",
          "1º Planificar la prevención, 2º Adaptar el trabajo a la persona y 3º Anteponer la protección individual a la colectiva.",
          "1º Combatir los riesgos en su origen, 2º Sustituir lo peligroso y 3º Evaluar todos los riesgos.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 15.1 de la LPRL establece en sus letras a), b) y c) los tres primeros principios de la acción preventiva: a) Evitar los riesgos; b) Evaluar los riesgos que no se puedan evitar; y c) Combatir los riesgos en su origen.",
        reference: "Art. 15.1 Ley 31/1995 (LPRL)",
        difficulty: "basica",
      },
      {
        id: "t6-q5",
        topicId: 6,
        question:
          "Según el artículo 16.2 de la Ley 31/1995, ¿cuáles son los dos instrumentos esenciales para la gestión y aplicación del plan de prevención de riesgos laborales?",
        options: [
          "La auditoría externa y la memoria anual de siniestralidad.",
          "La evaluación de los riesgos laborales y la planificación de la actividad preventiva.",
          "La vigilancia periódica de la salud y la entrega de equipos de protección individual.",
          "El nombramiento de Delegados de Prevención y la constitución del Comité de Seguridad y Salud.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 16.2 de la LPRL dispone expresamente que los instrumentos esenciales para la gestión y aplicación del plan de prevención de riesgos, que podrán ser llevados a cabo por fases de forma programada, son la evaluación de los riesgos laborales y la planificación de la actividad preventiva.",
        reference: "Art. 16.2 Ley 31/1995 (LPRL)",
        difficulty: "media",
      },
      {
        id: "t6-q6",
        topicId: 6,
        question:
          "En relación con la formación de los trabajadores en materia preventiva regulada en el artículo 19 de la Ley 31/1995, señale la afirmación INCORRECTA:",
        options: [
          "Debe ser teórica y práctica, suficiente y adecuada, y centrada específicamente en el puesto de trabajo o función de cada trabajador.",
          "Deberá impartirse, siempre que sea posible, dentro de la jornada de trabajo o, en su defecto, en otras horas pero con el descuento en aquella del tiempo invertido en la misma.",
          "Su coste podrá compartirse al 50 % entre la empresa y el trabajador cuando se trate de formación especializada.",
          "Se debe garantizar tanto en el momento de su contratación, cualquiera que sea la modalidad o duración de esta, como cuando se produzcan cambios en las funciones que desempeñe o se introduzcan nuevas tecnologías.",
        ],
        correctIndex: 2,
        explanation:
          "Tanto el artículo 14.5 como el artículo 19.2 in fine de la LPRL establecen tajantemente que el coste de la formación y de las medidas relativas a la seguridad y la salud en el trabajo no recaerá en ningún caso sobre los trabajadores.",
        reference: "Art. 19 Ley 31/1995 (LPRL)",
        difficulty: "basica",
      },
      {
        id: "t6-q7",
        topicId: 6,
        question:
          "De acuerdo con el artículo 21.3 de la Ley 31/1995, cuando los representantes legales de los trabajadores o los Delegados de Prevención acuerden la paralización de la actividad de los trabajadores afectados por un riesgo grave e inminente, ¿en qué plazo deberá la autoridad laboral anular o ratificar la paralización acordada?",
        options: [
          "En el plazo de 24 horas.",
          "En el plazo de 48 horas.",
          "En el plazo de 72 horas.",
          "En el plazo de 5 días hábiles.",
        ],
        correctIndex: 0,
        explanation:
          "El artículo 21.3 de la LPRL establece que tal acuerdo será comunicado de inmediato a la empresa y a la autoridad laboral, la cual, en el plazo de veinticuatro horas, anulará o ratificará la paralización acordada.",
        reference: "Art. 21.3 Ley 31/1995 (LPRL)",
        difficulty: "alta",
      },
      {
        id: "t6-q8",
        topicId: 6,
        question:
          "Respecto a la vigilancia de la salud regulada en el artículo 22 de la Ley 31/1995, señale cuál de las siguientes afirmaciones se ajusta a la legalidad vigente:",
        options: [
          "Tiene carácter obligatorio en todos los puestos de trabajo de las Administraciones Públicas sin excepción.",
          "El empresario y las personas u órganos con responsabilidades en materia de prevención tendrán acceso libre a toda la historia clínica laboral del trabajador.",
          "Solo podrá llevarse a cabo cuando el trabajador preste su consentimiento, salvo las excepciones previstas legalmente previo informe de los representantes de los trabajadores.",
          "Las medidas de vigilancia y control de la salud podrán ser realizadas por cualquier técnico superior en prevención de riesgos laborales aunque no sea personal sanitario.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 22.1 LPRL establece como regla general la voluntariedad (consentimiento del trabajador), de la que solo se exceptúan, previo informe de los representantes de los trabajadores, los supuestos en que sea imprescindible para evaluar efectos de las condiciones de trabajo, verificar si el estado de salud constituye un peligro para sí mismo, para los demás trabajadores o para terceros, o cuando así esté establecido en una disposición legal.",
        reference: "Art. 22 Ley 31/1995 (LPRL)",
        difficulty: "media",
      },
      {
        id: "t6-q9",
        topicId: 6,
        question:
          "Según el artículo 26 de la Ley 31/1995, sobre protección de la maternidad, si los resultados de la evaluación revelasen un riesgo para la seguridad y la salud o una posible repercusión sobre el embarazo o la lactancia de las trabajadoras, ¿qué medida debe adoptar el empresario en PRIMER lugar?",
        options: [
          "Declarar directamente el paso de la trabajadora a la situación de suspensión del contrato por riesgo durante el embarazo.",
          "Adoptar las medidas necesarias para evitar la exposición a dicho riesgo, a través de una adaptación de las condiciones o del tiempo de trabajo de la trabajadora afectada.",
          "Cambiar inmediatamente a la trabajadora a un puesto de trabajo de distinta categoría profesional con reducción proporcional de retribuciones.",
          "Reducir su jornada laboral a la mitad con disminución proporcional del salario.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 26.1 LPRL establece una prelación obligatoria: en primer lugar, la adaptación de las condiciones o del tiempo de trabajo (incluida la no realización de trabajo nocturno o a turnos). Solo cuando la adaptación no resultase posible o suficiente, procede el cambio a un puesto o función compatible (art. 26.2) y, si tampoco fuera técnica u objetivamente posible, la suspensión del contrato o licencia por riesgo durante el embarazo o la lactancia natural de hijos menores de 9 meses (art. 26.3 y 26.4).",
        reference: "Art. 26 Ley 31/1995 (LPRL)",
        difficulty: "media",
      },
      {
        id: "t6-q10",
        topicId: 6,
        question:
          "Conforme al artículo 29.3 de la Ley 31/1995, el incumplimiento por los trabajadores de las obligaciones en materia de prevención de riesgos a que se refieren los apartados anteriores tendrá la consideración de:",
        options: [
          "Infracción administrativa sancionable directamente por la Inspección de Trabajo con multa económica al trabajador.",
          "Incumplimiento laboral a los efectos previstos en el artículo 58.1 del Estatuto de los Trabajadores o de falta, en su caso, conforme a lo establecido en la correspondiente normativa sobre régimen disciplinario de los funcionarios públicos.",
          "Delito leve de imprudencia profesional en todo caso.",
          "Mera advertencia verbal sin efectos disciplinarios posibles.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 29.3 de la LPRL dispone expresamente que el incumplimiento por los trabajadores de sus obligaciones preventivas tendrá la consideración de incumplimiento laboral (art. 58.1 ET) o de falta disciplinaria conforme a la normativa sobre régimen disciplinario de los funcionarios públicos o del personal estatutario.",
        reference: "Art. 29.3 Ley 31/1995 (LPRL)",
        difficulty: "media",
      },
      {
        id: "t6-q11",
        topicId: 6,
        question:
          "De acuerdo con la escala del artículo 35.2 de la Ley 31/1995, ¿cuántos Delegados de Prevención corresponden a una entidad o centro de trabajo que cuenta con una plantilla de 75 trabajadores?",
        options: [
          "1 Delegado de Prevención.",
          "2 Delegados de Prevención.",
          "3 Delegados de Prevención.",
          "4 Delegados de Prevención.",
        ],
        correctIndex: 1,
        explanation:
          "Según la escala del artículo 35.2 LPRL: de 50 a 100 trabajadores corresponden 2 Delegados de Prevención (hasta 49 corresponde 1; de 101 a 500 corresponden 3; de 501 a 1.000 corresponden 4).",
        reference: "Art. 35.2 Ley 31/1995 (LPRL)",
        difficulty: "alta",
      },
      {
        id: "t6-q12",
        topicId: 6,
        question:
          "Según el artículo 38 de la Ley 31/1995, el Comité de Seguridad y Salud se constituirá en todas las empresas o centros de trabajo que cuenten con:",
        options: [
          "30 o más trabajadores, reuniéndose mensualmente.",
          "50 o más trabajadores, siendo un órgano paritario y colegiado que se reunirá trimestralmente y siempre que lo solicite alguna de las representaciones en el mismo.",
          "100 o más trabajadores, reuniéndose semestralmente.",
          "250 o más trabajadores, estando integrado exclusivamente por personal técnico sanitario.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 38.1 y 38.2 de la LPRL establece que el Comité de Seguridad y Salud es el órgano paritario y colegiado de participación, que se constituirá en todas las empresas o centros de trabajo que cuenten con 50 o más trabajadores, y que se reunirá trimestralmente y siempre que lo solicite alguna de las representaciones en el mismo.",
        reference: "Art. 38 Ley 31/1995 (LPRL)",
        difficulty: "basica",
      },
    ],
  },

  // =========================================================================
  // TEMA 7: PROTECCIÓN DE DATOS PERSONALES (LOPDGDD Y RGPD)
  // =========================================================================
  {
    id: 7,
    slug: "tema-7-proteccion-datos-personales",
    block: "general",
    title: "Tema 7. Protección de Datos de Carácter Personal",
    officialTitle:
      "Tema 7.- La Ley Orgánica de Protección de Datos de carácter personal: disposiciones generales, principios de la protección de datos, derechos de las personas, ficheros de titularidad pública, infracciones y sanciones.",
    summary:
      "Estudio integral del derecho fundamental a la protección de datos personales (art. 18.4 CE) a través del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD): disposiciones generales, principios del tratamiento, edad del consentimiento de menores (14 años), derechos ARSULIPO, tratamientos de titularidad pública (RAT, DPD, DA 7ª) y régimen sancionador con la especialidad del art. 77 para Administraciones Públicas.",
    readTimeMinutes: 40,
    normativaClave: [
      "Constitución Española de 1978 (art. 18.4) y STC 292/2000 (derecho fundamental autónomo a la autodeterminación informativa)",
      "Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD)",
      "Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)",
      "Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad (ENS)",
    ],
    sections: [
      {
        title: "1. Marco Normativo, Evolución Legislativa y Disposiciones Generales (Título I LOPDGDD)",
        content: [
          "El fundamento constitucional de la protección de datos personales se encuentra en el artículo 18.4 de la Constitución Española, según el cual la ley limitará el uso de la informática para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos. El Tribunal Constitucional, en su emblemática STC 292/2000, consagró la protección de datos como un derecho fundamental autónomo (libertad informática o autodeterminación informativa), distinto del derecho a la intimidad del art. 18.1 CE, que confiere a la persona el poder jurídico de control y disposición sobre sus datos personales.",
          "En cuanto a la evolución normativa, aunque el enunciado tradicional de las convocatorias alude a la terminología clásica ('ficheros de titularidad pública'), la antigua Ley Orgánica 15/1999 (LOPD) fue derogada. Hoy el marco jurídico vigente está constituido por el binomio formado por el Reglamento (UE) 2016/679, de 27 de abril (RGPD, plenamente aplicable desde el 25 de mayo de 2018), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), que entró en vigor el 7 de diciembre de 2018. La LOPDGDD consta de 97 artículos estructurados en 10 Títulos, 22 Disposiciones Adicionales, 6 Transitorias, 1 Derogatoria y 16 Finales.",
          "El Título I de la LOPDGDD (artículos 1 a 3) regula las disposiciones generales. El artículo 1 establece su doble objeto: a) Adaptar el ordenamiento jurídico español al RGPD y completar sus disposiciones (el derecho fundamental del art. 18.4 CE se ejercerá con arreglo al RGPD y a esta ley orgánica); y b) Garantizar los derechos digitales de la ciudadanía conforme al mandato del artículo 18.4 CE.",
          "El artículo 2 delimita el ámbito de aplicación: se aplica a cualquier tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento no automatizado de datos contenidos o destinados a ser incluidos en un fichero. En cambio, NO será de aplicación: 1) A los tratamientos excluidos del RGPD (actividades exclusivamente personales o domésticas, seguridad nacional y prevención/investigación de infracciones penales, que se rigen por la LO 7/2021); 2) A los tratamientos de datos de personas fallecidas (salvo lo dispuesto en el art. 3); y 3) A los tratamientos sometidos a la normativa sobre protección de materias clasificadas.",
          "El artículo 3 regula los datos de las personas fallecidas: las personas vinculadas al fallecido por razones familiares o de hecho, así como sus herederos, podrán dirigirse al responsable o encargado del tratamiento al objeto de solicitar el acceso a los datos personales de aquel y, en su caso, su rectificación o supresión, salvo que la persona fallecida lo hubiese prohibido expresamente o así lo establezca una ley (prohibición que no afecta al derecho de los herederos a acceder a los datos de carácter patrimonial del causante). En caso de fallecimiento de menores de edad o personas con discapacidad, estas facultades podrán ejercerse también por sus representantes legales o por el Ministerio Fiscal.",
        ],
        highlights: [
          {
            title: "Estructura de los 10 Títulos de la LO 3/2018 (LOPDGDD - 97 artículos)",
            type: "legislacion",
            items: [
              "Título I (arts. 1-3): Disposiciones generales (objeto, ámbito y datos de personas fallecidas).",
              "Título II (arts. 4-10): Principios de protección de datos (exactitud, confidencialidad, consentimiento, menores de 14 años, categorías especiales).",
              "Título III (arts. 11-18): Derechos de las personas (transparencia y derechos ARSULIPO).",
              "Título IV (arts. 19-27): Disposiciones aplicables a tratamientos concretos (videovigilancia, sistemas de exclusión publicitaria, denuncias internas).",
              "Título V (arts. 28-39): Responsable y encargado del tratamiento (incluye RAT art. 31, bloqueo art. 32 y DPD art. 34).",
              "Título VI (arts. 40-43): Transferencias internacionales de datos.",
              "Título VII (arts. 44-62): Autoridades de protección de datos (Agencia Española de Protección de Datos - AEPD y autoridades autonómicas).",
              "Título VIII (arts. 63-69): Procedimientos en caso de posible vulneración de la normativa de protección de datos.",
              "Título IX (arts. 70-78): Régimen sancionador (infracciones muy graves, graves y leves; art. 77 régimen de las AAPP).",
              "Título X (arts. 79-97): Garantía de los derechos digitales (incluye desconexión digital en el ámbito laboral art. 88).",
            ],
          },
        ],
      },
      {
        title: "2. Principios de la Protección de Datos (Título II LOPDGDD y Art. 5 RGPD)",
        content: [
          "El artículo 5 del RGPD y el Título II de la LOPDGDD (arts. 4 a 10) establecen los principios rectores que todo responsable del tratamiento (como el Ayuntamiento de Pinoso o una Escuela Infantil Municipal) debe cumplir y ser capaz de demostrar:",
          "1. Licitud, lealtad y transparencia (art. 5.1.a RGPD): los datos deben ser tratados de manera lícita (con base jurídica del art. 6 RGPD), leal y transparente en relación con el interesado.",
          "2. Limitación de la finalidad (art. 5.1.b RGPD): recogidos con fines determinados, explícitos y legítimos, sin ser tratados ulteriormente de manera incompatible con dichos fines.",
          "3. Minimización de datos (art. 5.1.c RGPD): adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados (en una matrícula de escuela infantil no pueden pedirse datos excesivos ajenos a la función educativa o asistencial).",
          "4. Exactitud (art. 5.1.d RGPD y art. 4 LOPDGDD): los datos serán exactos y, si fuera necesario, actualizados. Según el art. 4.2 LOPDGDD, no será imputable al responsable del tratamiento la inexactitud de los datos personales, con respecto a los fines para los que se tratan, cuando los datos inexactos hubiesen sido obtenidos por el responsable directamente del afectado (por ejemplo, si los progenitores facilitan un teléfono erróneo).",
          "5. Limitación del plazo de conservación (art. 5.1.e RGPD): mantenidos de forma que se permita la identificación de los interesados durante no más tiempo del necesario para los fines del tratamiento.",
          "6. Integridad y confidencialidad (art. 5.1.f RGPD y art. 5 LOPDGDD): tratados de tal manera que se garantice una seguridad adecuada. El artículo 5 LOPDGDD regula el deber de confidencialidad: los responsables y encargados del tratamiento y todas las personas que intervengan en cualquier fase de este estarán sujetas al deber de confidencialidad, obligación que es complementaria del deber de secreto profesional y que se mantendrá aun cuando hubiese finalizado la relación del obligado con el responsable o encargado del tratamiento.",
          "7. Responsabilidad proactiva o 'accountability' (art. 5.2 RGPD): el responsable del tratamiento será responsable del cumplimiento de todos los principios anteriores y capaz de demostrarlo.",
          "En cuanto al tratamiento basado en el consentimiento del afectado (art. 6 LOPDGDD), se entiende por consentimiento toda manifestación de voluntad libre, específica, informada e inequívoca por la que el interesado acepta, ya sea mediante una declaración o una clara acción afirmativa, el tratamiento de datos personales que le conciernen (queda desterrado el consentimiento tácito o por omisión). Cuando se pretenda fundar el tratamiento en el consentimiento para una pluralidad de finalidades, será preciso que conste de manera específica e inequívoca que dicho consentimiento se otorga para todas ellas.",
          "Especialísima importancia para un Técnico de Educación Infantil reviste el artículo 7 LOPDGDD sobre el consentimiento de los menores de edad: el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea MAYOR DE CATORCE (14) AÑOS (salvo los supuestos en que la ley exija la asistencia de los titulares de la patria potestad o tutela). El tratamiento de los datos de los menores de catorce años, fundado en el consentimiento, solo será lícito si consta el del titular de la patria potestad o tutela. Por consiguiente, en el primer ciclo de Educación Infantil (0 a 3 años), cualquier tratamiento basado en el consentimiento (como la captación y difusión de fotografías o vídeos de actividades escolares en la web o redes sociales municipales) exige SIEMPRE el consentimiento expreso, informado e inequívoco de los progenitores o tutores legales.",
          "Finalmente, el artículo 9 LOPDGDD regula las categorías especiales de datos (origen étnico, ideología, afiliación sindical, religión, datos genéticos, biométricos, datos relativos a la salud o a la orientación sexual): el mero consentimiento del afectado no bastará por sí solo para levantar la prohibición de tratar datos cuya finalidad principal sea identificar su ideología, afiliación sindical, religión, orientación sexual, creencias u origen racial o étnico. En las Escuelas Infantiles, el tratamiento de datos de salud de los niños y niñas (alergias e intolerancias alimentarias, cartilla de vacunación, enfermedades crónicas, informes psicopedagógicos) se ampara en el artículo 9.2 RGPD (interés público esencial, asistencia sanitaria o social y protección de intereses vitales del menor) bajo estricto secreto profesional.",
        ],
        highlights: [
          {
            title: "Edad del consentimiento de menores (Art. 7 LOPDGDD) vs. RGPD",
            type: "trampa",
            items: [
              "El artículo 8 del RGPD fija como regla general los 16 años, pero permite a los Estados miembros rebajarla por ley hasta un mínimo de 13 años.",
              "España, en el artículo 7.1 de la LOPDGDD (LO 3/2018), fijó la edad en CATORCE (14) AÑOS.",
              "En Educación Infantil (0-3 años), el consentimiento para tratamientos no amparados en obligación legal o misión pública (ej. uso de imágenes del menor en redes o revistas) debe ser prestado SIEMPRE por los titulares de la patria potestad o tutela.",
            ],
          },
        ],
      },
      {
        title: "3. Derechos de las Personas: De los Derechos ARCO a los Derechos ARSULIPO (Título III LOPDGDD)",
        content: [
          "El Título III de la LOPDGDD (artículos 11 a 18), en conexión con los artículos 12 a 22 del RGPD, regula los derechos de las personas sobre sus datos. Frente al acrónimo clásico ARCO (Acceso, Rectificación, Cancelación y Oposición) de la derogada ley de 1999, la normativa actual consagra los derechos ARSULIPO (también denominados ARCO-POL): Acceso, Rectificación, Supresión (olvido), Limitación del tratamiento, Portabilidad y Oposición (más el derecho a no ser objeto de decisiones individuales automatizadas).",
          "Conforme al artículo 12 LOPDGDD y al artículo 12 RGPD, el ejercicio de estos derechos es gratuito (salvo solicitudes manifiestamente infundadas o excesivas, especialmente por su carácter repetitivo), puede realizarse directamente o por medio de representante legal o voluntario, y el responsable del tratamiento está obligado a responder en el plazo máximo de UN (1) MES a partir de la recepción de la solicitud, plazo que podrá prorrogarse otros DOS (2) MESES más en caso necesario, teniendo en cuenta la complejidad y el número de solicitudes (informando al interesado de la prórroga dentro del primer mes).",
        ],
        table: {
          headers: ["Derecho (Título III LOPDGDD / RGPD)", "Precepto", "Contenido esencial y particularidades legales"],
          rows: [
            [
              "Transparencia e información al afectado",
              "Art. 11 LOPDGDD / Arts. 13-14 RGPD",
              "Se articula mediante el sistema de 'información por capas': una información básica en primera capa (identidad del responsable, finalidad y posibilidad de ejercer derechos) y una dirección electrónica para acceder de forma sencilla e inmediata al resto de la información (segunda capa).",
            ],
            [
              "Derecho de Acceso",
              "Art. 13 LOPDGDD / Art. 15 RGPD",
              "Derecho a obtener confirmación de si se están tratando o no sus datos y a acceder a ellos, fines, destinatarios y plazo de conservación. Se considera repetitivo si se ejerce en más de una ocasión durante el plazo de 6 meses, a menos que exista causa legítima para ello.",
            ],
            [
              "Derecho de Rectificación",
              "Art. 14 LOPDGDD / Art. 16 RGPD",
              "Derecho a obtener sin dilación indebida la rectificación de los datos inexactos o a que se completen los incompletos. El afectado deberá indicar a qué datos se refiere y la corrección que haya de realizarse, aportando documentación justificativa cuando sea preciso.",
            ],
            [
              "Derecho de Supresión ('derecho al olvido')",
              "Art. 15 y 93-94 LOPDGDD / Art. 17 RGPD",
              "Sustituye al antiguo derecho de cancelación. Permite obtener la supresión cuando los datos ya no sean necesarios, se retire el consentimiento o se hayan tratado ilícitamente. Incluye el derecho al olvido en búsquedas de Internet (art. 93) y en redes sociales (art. 94).",
            ],
            [
              "Derecho a la Limitación del tratamiento",
              "Art. 16 LOPDGDD / Art. 18 RGPD",
              "Consiste en el marcado de los datos conservados con el fin de limitar su tratamiento en el futuro (mientras se impugna su exactitud o la licitud del tratamiento, o cuando el interesado los necesite para formular o defender reclamaciones).",
            ],
            [
              "Derecho a la Portabilidad",
              "Art. 17 LOPDGDD / Art. 20 RGPD",
              "Derecho a recibir los datos facilitados en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable, cuando el tratamiento se efectúe por medios automatizados y se base en el consentimiento o en un contrato (no se aplica a misiones de interés público de las AAPP).",
            ],
            [
              "Derecho de Oposición y decisiones automatizadas",
              "Art. 18 LOPDGDD / Arts. 21-22 RGPD",
              "Derecho a oponerse en cualquier momento, por motivos relacionados con su situación particular, a que sus datos sean objeto de tratamiento (salvo motivos legítimos imperiosos del responsable), y a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles.",
            ],
          ],
        },
      },
      {
        title: "4. Tratamientos ('Ficheros') de Titularidad Pública, RAT, DPD y Publicaciones Oficiales",
        content: [
          "En la derogada LO 15/1999 existía la obligación de crear y modificar los 'ficheros de titularidad pública' mediante disposición de carácter general publicada en el boletín oficial e inscribirlos en el Registro General de la AEPD. Con el RGPD y la LOPDGDD se suprimió la inscripción de ficheros en la AEPD y se sustituyó por la obligación de cada Administración Pública de llevar un Registro de Actividades de Tratamiento (RAT) interno y público.",
          "La base jurídica de los tratamientos realizados por las Administraciones Públicas se regula en el artículo 8 LOPDGDD: el tratamiento de datos personales solo podrá considerarse fundado en el cumplimiento de una obligación legal exigible al responsable (art. 6.1.c RGPD) o en el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos conferidos al responsable (art. 6.1.e RGPD) cuando así lo prevea una norma con RANGO DE LEY (o de Derecho de la Unión Europea). En el ámbito municipal y educativo, esta habilitación legal reside en la Ley 7/1985 (LBRL) y en la Ley Orgánica 2/2006 de Educación (LOE, Disposición Adicional 23ª).",
          "El artículo 31 LOPDGDD regula el Registro de Actividades de Tratamiento (RAT): los órganos de las Administraciones Públicas están obligados a mantener un registro de actividades de tratamiento (donde constan el nombre y datos del responsable y del DPD, fines del tratamiento, categorías de interesados y de datos, destinatarios, plazos de supresión y medidas de seguridad del Esquema Nacional de Seguridad). Las Administraciones Públicas tienen la obligación de hacer público un inventario de sus actividades de tratamiento accesible por medios electrónicos en su Portal de Transparencia.",
          "El artículo 32 LOPDGDD regula el bloqueo de los datos: cuando proceda la rectificación o la supresión de los datos, el responsable estará obligado a bloquearlos, lo que consiste en la identificación y reserva de los mismos, adoptando medidas técnicas y organizativas, para impedir su tratamiento, excepto para su puesta a disposición de los jueces y tribunales, el Ministerio Fiscal o las Administraciones Públicas competentes (en particular las autoridades de protección de datos) para la exigencia de posibles responsabilidades derivadas del tratamiento y solo por el plazo de prescripción de las mismas. Transcurrido ese plazo, deberá procederse a la destrucción de los datos.",
          "El artículo 34 LOPDGDD establece los supuestos de designación obligatoria de un Delegado de Protección de Datos (DPD o DPO), además de todas las Administraciones Públicas (art. 37.1.a RGPD): en particular, la letra b) del artículo 34.1 LOPDGDD obliga a designar un DPD en 'los centros docentes que ofrezcan enseñanzas en cualquiera de los niveles establecidos en la legislación reguladora del derecho a la educación, así como en las Universidades públicas y privadas'. El DPD actúa con plena independencia funcional y su designación debe comunicarse a la AEPD o autoridad autonómica en el plazo de 10 días.",
          "Mención especial merece la Disposición Adicional Séptima (DA 7ª) de la LOPDGDD sobre identificación de los interesados en las notificaciones por medio de anuncios y publicaciones de actos administrativos (ej. listas de admitidos en oposiciones del Ayuntamiento de Pinoso o listas de admisión de alumnos en la Escuela Infantil Municipal): cuando sea necesaria la publicación de un acto administrativo que contuviese datos personales del afectado, se identificará al mismo mediante su nombre y apellidos, añadiendo cuatro cifras numéricas aleatorias del documento nacional de identidad (en la práctica, la AEPD recomienda las posiciones 4ª, 5ª, 6ª y 7ª del DNI, por ejemplo ***4567**), número de identidad de extranjero, pasaporte o documento equivalente. Cuando la publicación se refiera a una pluralidad de afectados, estas cifras aleatorias deberán alternarse. En ningún caso debe publicarse el nombre y apellidos de manera conjunta con el número completo del DNI.",
        ],
        highlights: [
          {
            title: "Disposición Adicional 7ª LOPDGDD: Publicación de actos administrativos",
            type: "importante",
            items: [
              "Prohibición absoluta: NUNCA se publicará el nombre y apellidos junto con el número completo del DNI/NIE.",
              "En publicaciones de actos administrativos (ej. listados de baremación de escuela infantil o procesos selectivos): Nombre y apellidos + 4 cifras numéricas aleatorias del DNI/NIE.",
              "En notificaciones por medio de anuncios en el BOE/TEU (cuando ha sido infructuosa la notificación personal): se identificará al afectado EXCLUSIVAMENTE mediante el número completo de su DNI, NIE, pasaporte o documento equivalente (sin nombre ni apellidos).",
            ],
          },
        ],
      },
      {
        title: "5. Régimen Sancionador: Infracciones, Prescripción y Régimen Especial de las AAPP (Título IX LOPDGDD)",
        content: [
          "El Título IX de la LOPDGDD (artículos 70 a 78), completando el artículo 83 del RGPD, regula el régimen sancionador en materia de protección de datos.",
          "Según el artículo 70 LOPDGDD, están sujetos al régimen sancionador: 1) Los responsables de los tratamientos; 2) Los encargados de los tratamientos; 3) Los representantes de los responsables o encargados no establecidos en la UE; 4) Las entidades de certificación; y 5) Las entidades acreditadas de supervisión de los códigos de conducta. En cambio, NO será de aplicación al Delegado de Protección de Datos (DPD).",
          "La LOPDGDD clasifica las infracciones en tres categorías atendiendo a su gravedad y plazo de prescripción:",
          "- Infracciones MUY GRAVES (art. 72 LOPDGDD): vulneración de los principios básicos y condiciones del consentimiento (arts. 5, 6, 7 y 9 RGPD), exigencia de pago de un canon para acceder a los datos propios, impedimento o no atención reiterada de los derechos ARSULIPO, o transferencias internacionales ilícitas. Prescriben a los TRES (3) AÑOS.",
          "- Infracciones GRAVES (art. 73 LOPDGDD): tratamiento de datos de un menor sin recabar su consentimiento cuando tenga capacidad o el de sus representantes legales sin esfuerzos razonables para verificarlo, falta de adopción de medidas técnicas y organizativas de seguridad apropiadas, incumplimiento de la obligación de designar un Delegado de Protección de Datos (DPD) o de llevar el Registro de Actividades de Tratamiento (RAT). Prescriben a los DOS (2) AÑOS.",
          "- Infracciones LEVES (art. 74 LOPDGDD): incumplimientos de carácter meramente formal, como no facilitar toda la información exigida al afectado, publicar un RAT incompleto o no comunicar a la AEPD la designación del DPD en el plazo de 10 días. Prescriben al AÑO (1 año).",
          "En el sector privado, las sanciones económicas del artículo 83 RGPD pueden alcanzar hasta 20 millones de euros o el 4 % del volumen de negocio total anual global (para las infracciones del art. 83.5 RGPD / muy graves), o hasta 10 millones de euros o el 2 % del volumen de negocio (para las del art. 83.4 RGPD / graves), prescribiendo las sanciones impuestas por más de 300.000 € a los 3 años, las de entre 40.001 € y 300.000 € a los 2 años, y las de hasta 40.000 € al año (art. 78 LOPDGDD).",
          "Sin embargo, el artículo 77 de la LOPDGDD establece un RÉGIMEN ESPECIAL APLICABLE A LAS ADMINISTRACIONES PÚBLICAS (como el Ayuntamiento de Pinoso, la Generalitat Valenciana, los órganos constitucionales o los organismos públicos): cuando las autoridades y organismos públicos enumerados en el art. 77.1 cometan alguna de las infracciones tipificadas en los artículos 72 a 74, la autoridad de protección de datos competente (la AEPD) NO les impondrá sanción económica de multa, sino que dictará una resolución sancionadora con APERCIBIMIENTO, estableciendo las medidas que proceda adoptar para que cese la conducta o se corrijan los efectos de la infracción. Además, la resolución se comunicará al responsable, al Delegado de Protección de Datos, al Defensor del Pueblo (o institución autonómica análoga, como el Síndic de Greuges en la Comunitat Valenciana), se publicará en la web de la AEPD y en el diario oficial correspondiente, y podrá proponer la iniciación de actuaciones disciplinarias cuando existan indicios suficientes para ello.",
        ],
        table: {
          headers: ["Tipo de Infracción (LOPDGDD)", "Artículo", "Plazo de Prescripción", "Sanción en Sector Privado vs. Sector Público (AAPP)"],
          rows: [
            [
              "Muy Graves",
              "Art. 72 LOPDGDD",
              "3 años",
              "Privado: Hasta 20.000.000 € o 4 % facturación anual (art. 83.5 RGPD). AAPP (art. 77): Apercibimiento + medidas correctoras + comunicación al Defensor del Pueblo + publicación oficial + posible expediente disciplinario (sin multa económica).",
            ],
            [
              "Graves",
              "Art. 73 LOPDGDD",
              "2 años",
              "Privado: Hasta 10.000.000 € o 2 % facturación anual (art. 83.4 RGPD). AAPP (art. 77): Apercibimiento + medidas correctoras + publicación oficial (sin multa económica).",
            ],
            [
              "Leves",
              "Art. 74 LOPDGDD",
              "1 año",
              "Privado: Multas de cuantía inferior (hasta 40.000 € de referencia en prescripción art. 78) o apercibimiento. AAPP (art. 77): Apercibimiento + medidas correctoras.",
            ],
          ],
        },
      },
    ],
    esquemaVisual: {
      title: "Esquema Integral de la LO 3/2018 (LOPDGDD) y el RGPD (UE) 2016/679",
      nodes: [
        {
          label: "Marco y Disposiciones Generales (Arts. 1-3)",
          children: [
            "Fundamento: Art. 18.4 CE y STC 292/2000 (autodeterminación informativa)",
            "Estructura LOPDGDD: 10 Títulos y 97 artículos (en vigor desde el 7/12/2018)",
            "Doble objeto (Art. 1): Adaptar el ordenamiento al RGPD y garantizar los derechos digitales",
            "Exclusiones (Art. 2): Ámbito doméstico, materias clasificadas y personas fallecidas (salvo acceso/rectificación/supresión por familiares/herederos del Art. 3)",
          ],
        },
        {
          label: "Principios y Consentimiento (Arts. 4-10)",
          children: [
            "Art. 5 RGPD: Licitud/lealtad/transparencia, finalidad, minimización, exactitud, conservación, integridad/confidencialidad y responsabilidad proactiva",
            "Art. 5 LOPDGDD: Deber de confidencialidad permanente (incluso tras finalizar la relación laboral)",
            "Art. 6 LOPDGDD: Consentimiento libre, específico, informado e inequívoco (acción afirmativa)",
            "Art. 7 LOPDGDD: Edad mínima del menor en España = 14 AÑOS (en 0-3 años deciden siempre los titulares de patria potestad o tutela)",
          ],
        },
        {
          label: "Derechos ARSULIPO y Titularidad Pública",
          children: [
            "Derechos (Arts. 11-18): Acceso, Rectificación, Supresión (olvido), Limitación, Portabilidad y Oposición",
            "Plazo de respuesta (Art. 12): 1 MES prorrogable 2 meses más por complejidad",
            "Titularidad pública: Base legal con rango de ley (Art. 8), Registro de Actividades de Tratamiento RAT (Art. 31), Bloqueo (Art. 32) y DPD obligatorio en AAPP y centros docentes (Art. 34)",
            "DA 7ª: En publicaciones de actos administrativos, Nombre y apellidos + 4 cifras aleatorias del DNI",
          ],
        },
        {
          label: "Régimen Sancionador (Arts. 70-78)",
          children: [
            "El DPD nunca es sujeto responsable sancionable (Art. 70.2)",
            "Prescripción de infracciones: Muy graves = 3 años (Art. 72); Graves = 2 años (Art. 73); Leves = 1 año (Art. 74)",
            "Régimen especial AAPP (Art. 77): Sin multa económica; se les impone Apercibimiento + medidas correctoras + comunicación al Defensor del Pueblo y publicación oficial",
          ],
        },
      ],
    },
    datosOro: [
      "Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD): desarrolla el art. 18.4 CE y adapta el RGPD (UE) 2016/679; consta de 97 artículos en 10 Títulos.",
      "Art. 7 LOPDGDD: La edad mínima en España para que un menor preste por sí mismo el consentimiento para el tratamiento de sus datos personales es de 14 AÑOS. En Educación Infantil (0-3 años) se exige siempre el consentimiento de los titulares de la patria potestad o tutela.",
      "Art. 5 LOPDGDD: El deber de confidencialidad obliga a todas las personas que intervengan en cualquier fase del tratamiento y se mantiene INDEFINIDAMENTE, aun cuando hubiese finalizado la relación laboral o funcionarial.",
      "Art. 12 RGPD y Art. 12 LOPDGDD: El plazo para resolver las solicitudes de ejercicio de los derechos ARSULIPO es de 1 MES desde la recepción de la solicitud, prorrogable por otros 2 MESES más en caso de especial complejidad.",
      "Art. 31 y 34 LOPDGDD: Los antiguos 'ficheros de titularidad pública' han sido sustituidos por el Registro de Actividades de Tratamiento (RAT), de publicación obligatoria por las AAPP. La designación de Delegado de Protección de Datos (DPD) es obligatoria en todas las AAPP y en todos los centros docentes.",
      "Disposición Adicional 7ª LOPDGDD: En la publicación de actos administrativos (ej. listas de admitidos) se identificará al interesado con su nombre y apellidos más 4 cifras numéricas aleatorias de su DNI/NIE.",
      "Arts. 72-74 y 77 LOPDGDD: Las infracciones muy graves prescriben a los 3 años, las graves a los 2 años y las leves al año. A las Administraciones Públicas (art. 77) NO se les imponen multas económicas, sino resolución de apercibimiento con medidas correctoras.",
    ],
    temaDesarrollo: {
      introduccion:
        "El artículo 18.4 de la Constitución Española de 1978 dispone que 'la ley limitará el uso de la informática para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos'. A partir de este precepto, la jurisprudencia constitucional (STC 292/2000) configuró el derecho fundamental autónomo a la protección de datos personales como una facultad de autodeterminación informativa que otorga a la ciudadanía el poder de control sobre sus datos. Actualmente, este derecho se rige por el Reglamento (UE) 2016/679, de 27 de abril, General de Protección de Datos (RGPD), y por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), que derogó definitivamente la antigua Ley Orgánica 15/1999. En el ámbito de las Escuelas Infantiles Municipales, donde se tratan datos de menores de 0 a 3 años especialmente sensibles (salud, alergias, situación sociofamiliar e imagen), el dominio riguroso de esta normativa resulta inexcusable para el Técnico de Educación Infantil.",
      estructuraEpigrafes: [
        {
          epigraph: "1. Disposiciones Generales de la Ley Orgánica 3/2018 (Título I, Arts. 1 a 3)",
          body: "La Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), estructurada en 10 Títulos y 97 artículos, establece en su artículo 1 un doble objeto: en primer lugar, adaptar el ordenamiento jurídico español al Reglamento (UE) 2016/679 (RGPD) y completar sus disposiciones; y, en segundo lugar, garantizar los derechos digitales de la ciudadanía conforme al mandato del artículo 18.4 de la Constitución.\n\nDe acuerdo con el artículo 2, la Ley se aplica a cualquier tratamiento total o parcialmente automatizado de datos personales, así como al tratamiento no automatizado de datos contenidos o destinados a ser incluidos en un fichero. Quedan excluidos de su ámbito los tratamientos realizados en el ejercicio de actividades exclusivamente personales o domésticas, los sometidos a la normativa sobre materias clasificadas y los tratamientos de datos de personas fallecidas.\n\nNo obstante, el artículo 3 regula expresamente las facultades respecto a los datos de personas fallecidas: las personas vinculadas al fallecido por razones familiares o de hecho, así como sus herederos, pueden dirigirse al responsable o encargado del tratamiento para solicitar el acceso a los datos personales de aquel y, en su caso, su rectificación o supresión, salvo prohibición expresa del causante o disposición legal. En caso de fallecimiento de menores de edad o de personas con discapacidad, estas facultades podrán ejercerse también por sus representantes legales o por el Ministerio Fiscal.",
        },
        {
          epigraph: "2. Principios de la Protección de Datos y Consentimiento de Menores (Título II, Arts. 4 a 10 LOPDGDD y Art. 5 RGPD)",
          body: "El sistema de protección de datos descansa sobre siete principios cardinales recogidos en el artículo 5 del RGPD y desarrollados en el Título II de la LOPDGDD:\n1) Licitud, lealtad y transparencia.\n2) Limitación de la finalidad (datos recogidos con fines determinados, explícitos y legítimos).\n3) Minimización de datos (adecuados, pertinentes y limitados a lo estrictamente necesario).\n4) Exactitud de los datos (art. 4 LOPDGDD), precisando la ley española que no será imputable al responsable la inexactitud cuando los datos hubiesen sido obtenidos directamente del afectado.\n5) Limitación del plazo de conservación.\n6) Integridad y confidencialidad: el artículo 5 LOPDGDD impone el deber de confidencialidad a los responsables, encargados y a todas las personas que intervengan en cualquier fase del tratamiento (incluidos los Técnicos de Educación Infantil), obligación complementaria del secreto profesional que se mantiene incluso después de finalizar la relación laboral o estatutaria.\n7) Responsabilidad proactiva o 'accountability' (art. 5.2 RGPD), que exige al responsable cumplir los principios anteriores y estar en condiciones de demostrarlo.\n\nRespecto al consentimiento (art. 6 LOPDGDD), debe consistir en una manifestación de voluntad libre, específica, informada e inequívoca mediante una declaración o una clara acción afirmativa, quedando prohibido el consentimiento tácito. Si el tratamiento tiene una pluralidad de finalidades, debe constar de manera específica que el consentimiento se otorga para todas ellas.\n\nEn cuanto a los menores de edad, el artículo 7 de la LOPDGDD establece que el tratamiento de los datos personales de un menor únicamente podrá fundarse en su consentimiento cuando sea MAYOR DE CATORCE (14) AÑOS. Para los menores de 14 años —y, por tanto, en todo el primer ciclo de Educación Infantil (0 a 3 años)—, el tratamiento fundado en el consentimiento (como la captación y publicación de fotografías o vídeos escolares) solo será lícito si consta el consentimiento del titular de la patria potestad o tutela. Por su parte, el artículo 9 regula las categorías especiales de datos (entre los que figuran los datos de salud y alergias de los alumnos, cuyo tratamiento en los centros educativos se fundamenta en razones de interés público esencial y atención sanitaria o educativa conforme al art. 9.2 RGPD).",
        },
        {
          epigraph: "3. Derechos de las Personas (Título III, Arts. 11 a 18 LOPDGDD y Arts. 12 a 22 RGPD)",
          body: "El Título III de la LOPDGDD actualiza los clásicos derechos ARCO para consagrar los denominados derechos ARSULIPO (o ARCO-POL). Según el artículo 12 LOPDGDD y el artículo 12 RGPD, el ejercicio de estos derechos es gratuito y el responsable debe resolver y notificar en el plazo máximo de UN (1) MES desde la recepción de la solicitud, prorrogable por otros DOS (2) MESES más atendiendo a la complejidad y número de solicitudes.\n\nLos derechos reconocidos son:\n- Transparencia e información al afectado (art. 11 LOPDGDD): instrumentada mediante el sistema de información por capas (primera capa con información básica —responsable, finalidad y derechos— y segunda capa detallada).\n- Derecho de Acceso (art. 13 LOPDGDD y art. 15 RGPD): permite obtener confirmación de si se tratan sus datos y copia de los mismos. Se puede considerar repetitivo si se ejerce más de una vez durante el plazo de 6 meses sin causa legítima.\n- Derecho de Rectificación (art. 14 LOPDGDD y art. 16 RGPD): derecho a corregir datos inexactos o completar datos incompletos.\n- Derecho de Supresión o 'derecho al olvido' (art. 15, 93 y 94 LOPDGDD y art. 17 RGPD): sustituye al antiguo derecho de cancelación cuando los datos ya no sean necesarios, se retire el consentimiento o el tratamiento sea ilícito.\n- Derecho a la Limitación del tratamiento (art. 16 LOPDGDD y art. 18 RGPD): marcado de los datos conservados para limitar su tratamiento futuro mientras se verifica su exactitud o licitud.\n- Derecho a la Portabilidad (art. 17 LOPDGDD y art. 20 RGPD): recepción de los datos en formato estructurado, de uso común y lectura mecánica para transmitirlos a otro responsable en tratamientos automatizados basados en el consentimiento o en un contrato.\n- Derecho de Oposición y a no ser objeto de decisiones individuales automatizadas (art. 18 LOPDGDD y arts. 21-22 RGPD).",
        },
        {
          epigraph: "4. Tratamientos ('Ficheros') de Titularidad Pública, Infracciones y Sanciones (Títulos V y IX LOPDGDD)",
          body: "Con la entrada en vigor del RGPD y la LOPDGDD, desapareció la obligación de crear 'ficheros de titularidad pública' por disposición general e inscribirlos en la AEPD, siendo sustituida por un modelo de responsabilidad proactiva aplicable a los tratamientos realizados por las Administraciones Públicas.\n\nEn primer lugar, conforme al artículo 8 LOPDGDD, el tratamiento de datos por una Administración Pública fundado en el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos requiere que dicha competencia esté prevista en una norma con rango de ley (como la LBRL 7/1985 para los municipios o la DA 23ª de la LOE para los centros docentes). En segundo lugar, el artículo 31 LOPDGDD obliga a todas las Administraciones Públicas a llevar y hacer público por medios electrónicos un Registro de Actividades de Tratamiento (RAT). En tercer lugar, el artículo 32 impone el deber de bloqueo de los datos rectificados o suprimidos durante el plazo de prescripción de las posibles responsabilidades. En cuarto lugar, el artículo 34 exige la designación obligatoria de un Delegado de Protección de Datos (DPD) tanto en las Administraciones Públicas como en todos los centros docentes que ofrezcan enseñanzas regladas (comunicándolo a la AEPD en el plazo de 10 días). Finalmente, la Disposición Adicional 7ª establece que en la publicación de actos administrativos (ej. listas de admitidos) se identificará al interesado mediante su nombre y apellidos y cuatro cifras numéricas aleatorias de su DNI/NIE.\n\nEn cuanto al régimen sancionador (Título IX, arts. 70 a 78 LOPDGDD), están sujetos los responsables y encargados del tratamiento, pero nunca el Delegado de Protección de Datos (art. 70.2). Las infracciones se clasifican en muy graves (art. 72, que prescriben a los 3 años), graves (art. 73, que prescriben a los 2 años) y leves (art. 74, que prescriben al año). Ahora bien, el artículo 77 de la LOPDGDD consagra un régimen especial para las Administraciones Públicas (incluido el Ayuntamiento de Pinoso): cuando cometan una infracción, no se les impone multa pecuniaria, sino una resolución de apercibimiento con las medidas correctoras que proceda adoptar, dando traslado al Defensor del Pueblo (o Síndic de Greuges), publicando la resolución y proponiendo, en su caso, la apertura de actuaciones disciplinarias.",
        },
      ],
      conclusion:
        "En definitiva, la Ley Orgánica 3/2018 (LOPDGDD) y el Reglamento (UE) 2016/679 han transformado la gestión pública de los datos personales, pasando de un control meramente burocrático de inscripción de ficheros a un compromiso permanente de responsabilidad proactiva y garantía de derechos digitales. En una Escuela Infantil Municipal, el respeto escrupuloso al deber de confidencialidad (art. 5), la exigencia del consentimiento de los representantes legales para menores de 14 años (art. 7) y la protección reforzada de los datos de salud e imagen de los niños y niñas de 0 a 3 años constituyen garantías jurídicas esenciales del servicio público educativo.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (artículo 18.4) y Sentencia del Tribunal Constitucional 292/2000, de 30 de noviembre.",
        "Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD).",
        "Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (BOE núm. 294, de 6 de diciembre de 2018).",
        "Agencia Española de Protección de Datos (AEPD): Guía para Centros Educativos sobre Protección de Datos.",
      ],
      consejosTribunal: [
        "Explica en el primer párrafo por qué el epígrafe menciona 'ficheros de titularidad pública' (terminología de la derogada LO 15/1999) y cómo hoy se articula en la LO 3/2018 (LOPDGDD) a través de los tratamientos realizados por Administraciones Públicas y el Registro de Actividades de Tratamiento (RAT, art. 31): eso demuestra al tribunal un dominio jurídico sobresaliente.",
        "Destaca con claridad la edad de 14 años del artículo 7 LOPDGDD y su consecuencia directa en Educación Infantil (0-3 años): consentimiento obligatorio de los titulares de la patria potestad o tutela.",
        "No olvides mencionar la especialidad del artículo 77 LOPDGDD: las Administraciones Públicas en España reciben apercibimiento y medidas correctoras, no multa económica.",
      ],
    },
    questions: [
      {
        id: "t7-q1",
        topicId: 7,
        question:
          "¿Cuál es la norma estatal vigente que adapta el ordenamiento jurídico español al Reglamento (UE) 2016/679 (RGPD) y desarrolla el artículo 18.4 de la Constitución Española?",
        options: [
          "La Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal.",
          "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.",
          "La Ley 19/2013, de 9 de diciembre, de protección de datos y buen gobierno.",
          "La Ley Orgánica 7/2021, de 26 de mayo, de garantía de los derechos digitales de las Administraciones Públicas.",
        ],
        correctIndex: 1,
        explanation:
          "La norma vigente es la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), que derogó la antigua Ley Orgánica 15/1999.",
        reference: "Art. 1 y Disposición Derogatoria Única LO 3/2018 (LOPDGDD)",
        difficulty: "basica",
      },
      {
        id: "t7-q2",
        topicId: 7,
        question:
          "De acuerdo con el artículo 7 de la Ley Orgánica 3/2018 (LOPDGDD), el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su propio consentimiento cuando sea:",
        options: [
          "Mayor de 12 años.",
          "Mayor de 13 años.",
          "Mayor de 14 años.",
          "Mayor de 16 años en todo caso.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 7.1 de la LOPDGDD establece que el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea mayor de catorce años. Por debajo de los 14 años, solo será lícito si consta el consentimiento del titular de la patria potestad o tutela.",
        reference: "Art. 7 LO 3/2018 (LOPDGDD)",
        difficulty: "basica",
      },
      {
        id: "t7-q3",
        topicId: 7,
        question:
          "Respecto al deber de confidencialidad regulado en el artículo 5 de la Ley Orgánica 3/2018 (LOPDGDD), señale la afirmación correcta:",
        options: [
          "Se extingue en el momento en que finaliza el contrato laboral o la relación funcionarial del empleado público.",
          "Solo vincula al responsable del tratamiento y al Delegado de Protección de Datos, pero no al personal técnico o educativo.",
          "Se mantendrá aun cuando hubiese finalizado la relación del obligado con el responsable o encargado del tratamiento, siendo complementario de los deberes de secreto profesional.",
          "Tiene una duración máxima de 5 años desde la recogida de los datos personales.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 5.1 y 5.3 de la LOPDGDD dispone que los responsables y encargados del tratamiento y todas las personas que intervengan en cualquier fase de este estarán sujetas al deber de confidencialidad, obligación que es complementaria del secreto profesional y que se mantendrá aun cuando hubiese finalizado la relación del obligado con el responsable o encargado del tratamiento.",
        reference: "Art. 5 LO 3/2018 (LOPDGDD)",
        difficulty: "media",
      },
      {
        id: "t7-q4",
        topicId: 7,
        question:
          "Según el artículo 4.2 de la Ley Orgánica 3/2018 (LOPDGDD), relativo al principio de exactitud de los datos:",
        options: [
          "El responsable del tratamiento responderá siempre con sanción muy grave de cualquier dato inexacto aunque el ciudadano lo haya falsificado.",
          "No será imputable al responsable del tratamiento, siempre que este haya adoptado todas las medidas razonables para que se supriman o rectifiquen sin dilación, la inexactitud de los datos personales cuando los datos inexactos hubiesen sido obtenidos por el responsable directamente del afectado.",
          "La actualización de los datos personales solo puede realizarse cada dos años.",
          "El principio de exactitud no se aplica a las Administraciones Locales.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 4.2.a) de la LOPDGDD establece expresamente que no será imputable al responsable del tratamiento (siempre que haya adoptado todas las medidas razonables para suprimirlos o rectificarlos sin dilación) la inexactitud de los datos personales cuando hubiesen sido obtenidos directamente del afectado.",
        reference: "Art. 4.2 LO 3/2018 (LOPDGDD)",
        difficulty: "alta",
      },
      {
        id: "t7-q5",
        topicId: 7,
        question:
          "Conforme al artículo 12.3 del RGPD y al artículo 12 de la LOPDGDD, ¿en qué plazo debe el responsable del tratamiento informar al interesado sobre las actuaciones derivadas de una solicitud de ejercicio de los derechos de acceso, rectificación, supresión u oposición?",
        options: [
          "En el plazo de 10 días hábiles, improrrogables.",
          "En el plazo de 1 mes a partir de la recepción de la solicitud, prorrogable otros 2 meses en caso necesario teniendo en cuenta la complejidad y el número de solicitudes.",
          "En el plazo de 3 meses a partir de la recepción de la solicitud, prorrogable por otros 3 meses.",
          "En el plazo de 15 días naturales.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 12.3 del RGPD (al que remite el art. 12 LOPDGDD) establece el plazo de un mes a partir de la recepción de la solicitud, que podrá prorrogarse otros dos meses en caso necesario, teniendo en cuenta la complejidad y el número de solicitudes, informando al interesado de la prórroga en el plazo de un mes.",
        reference: "Art. 12.3 RGPD y Art. 12 LO 3/2018 (LOPDGDD)",
        difficulty: "basica",
      },
      {
        id: "t7-q6",
        topicId: 7,
        question:
          "De acuerdo con el artículo 13.3 de la Ley Orgánica 3/2018 (LOPDGDD), a los efectos de lo establecido en el artículo 12.5 del RGPD, se podrá considerar repetitivo el ejercicio del derecho de acceso cuando se ejerza en más de una ocasión durante el plazo de:",
        options: [
          "Tres meses, en todo caso.",
          "Seis meses, a menos que exista causa legítima para ello.",
          "Un año, salvo autorización judicial.",
          "Dos años desde el último acceso.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 13.3 de la LOPDGDD dispone que se podrá considerar repetitivo el ejercicio del derecho de acceso en más de una ocasión durante el plazo de seis meses, a menos que exista causa legítima para ello.",
        reference: "Art. 13.3 LO 3/2018 (LOPDGDD)",
        difficulty: "media",
      },
      {
        id: "t7-q7",
        topicId: 7,
        question:
          "Según el artículo 8 de la Ley Orgánica 3/2018 (LOPDGDD), para que un tratamiento de datos realizado por una Administración Pública pueda considerarse fundado en el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos, ¿qué requisito normativo se exige?",
        options: [
          "Que la competencia esté atribuida por una norma con rango de ley (o de Derecho de la Unión Europea).",
          "Que baste una mera instrucción verbal de la Alcaldía o Concejalía delegada.",
          "Que exista autorización previa e individualizada del Consejo de Ministros.",
          "Que el fichero haya sido previamente inscrito en el Registro Mercantil.",
        ],
        correctIndex: 0,
        explanation:
          "El artículo 8.2 de la LOPDGDD establece que el tratamiento de datos personales solo podrá considerarse fundado en el cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos conferidos al responsable cuando derive de una competencia atribuida por una norma con rango de ley.",
        reference: "Art. 8.2 LO 3/2018 (LOPDGDD)",
        difficulty: "media",
      },
      {
        id: "t7-q8",
        topicId: 7,
        question:
          "Conforme al artículo 32 de la Ley Orgánica 3/2018 (LOPDGDD), ¿en qué consiste el bloqueo de los datos cuando se procede a su rectificación o supresión?",
        options: [
          "En su publicación inmediata en el tablón de edictos municipal durante 30 días.",
          "En la identificación y reserva de los mismos, adoptando medidas técnicas y organizativas, para impedir su tratamiento, excepto para su puesta a disposición de los jueces y tribunales, el Ministerio Fiscal o las Administraciones Públicas competentes para la exigencia de posibles responsabilidades y solo por el plazo de prescripción de las mismas.",
          "En el borrado físico instantáneo sin conservar copia alguna ni siquiera para atender requerimientos judiciales.",
          "En la cesión automática de los datos al Instituto Nacional de Estadística.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 32.1 y 32.2 de la LOPDGDD define el bloqueo como la identificación y reserva de los datos, adoptando medidas técnicas y organizativas para impedir su tratamiento, excepto para su puesta a disposición de jueces y tribunales, Ministerio Fiscal o AAPP competentes para la exigencia de posibles responsabilidades derivadas del tratamiento y solo por el plazo de prescripción de las mismas, destruyéndose una vez transcurrido dicho plazo.",
        reference: "Art. 32 LO 3/2018 (LOPDGDD)",
        difficulty: "media",
      },
      {
        id: "t7-q9",
        topicId: 7,
        question:
          "De acuerdo con la Disposición Adicional Séptima de la Ley Orgánica 3/2018 (LOPDGDD), cuando sea necesaria la publicación de un acto administrativo que contuviese datos personales del afectado (por ejemplo, una lista de admitidos en un proceso selectivo municipal), ¿cómo se identificará al interesado?",
        options: [
          "Mediante su nombre y apellidos junto con el número completo de su DNI y su domicilio particular.",
          "Mediante su nombre y apellidos, añadiendo cuatro cifras numéricas aleatorias del documento nacional de identidad, número de identidad de extranjero, pasaporte o documento equivalente.",
          "Exclusivamente mediante sus iniciales sin ningún dígito de su documento de identidad.",
          "Mediante su fecha de nacimiento y el nombre de sus progenitores.",
        ],
        correctIndex: 1,
        explanation:
          "La Disposición Adicional Séptima (apartado 1, párrafo primero) de la LOPDGDD dispone que en la publicación de actos administrativos se identificará al afectado mediante su nombre y apellidos, añadiendo cuatro cifras numéricas aleatorias del DNI, NIE, pasaporte o documento equivalente, prohibiendo publicar el nombre y apellidos de manera conjunta con el número completo del documento.",
        reference: "Disposición Adicional 7ª.1 LO 3/2018 (LOPDGDD)",
        difficulty: "alta",
      },
      {
        id: "t7-q10",
        topicId: 7,
        question:
          "Según el artículo 70.2 de la Ley Orgánica 3/2018 (LOPDGDD), ¿a cuál de las siguientes figuras NO le es de aplicación el régimen sancionador del Título IX de dicha ley?",
        options: [
          "Al responsable del tratamiento.",
          "Al encargado del tratamiento.",
          "Al Delegado de Protección de Datos (DPD).",
          "A las entidades acreditadas de supervisión de los códigos de conducta.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 70.2 de la LOPDGDD establece expresamente que 'No será de aplicación al delegado de protección de datos el régimen sancionador establecido en este Título'.",
        reference: "Art. 70.2 LO 3/2018 (LOPDGDD)",
        difficulty: "media",
      },
      {
        id: "t7-q11",
        topicId: 7,
        question:
          "Conforme a los artículos 72, 73 y 74 de la Ley Orgánica 3/2018 (LOPDGDD), ¿cuáles son los plazos de prescripción de las infracciones muy graves, graves y leves en materia de protección de datos?",
        options: [
          "Las muy graves prescriben a los 5 años, las graves a los 3 años y las leves al año.",
          "Las muy graves prescriben a los 3 años, las graves a los 2 años y las leves al año.",
          "Las muy graves prescriben a los 4 años, las graves a los 2 años y las leves a los 6 meses.",
          "Las muy graves prescriben a los 2 años, las graves al año y las leves a los 6 meses.",
        ],
        correctIndex: 1,
        explanation:
          "Según los artículos 72.1, 73 y 74 de la LOPDGDD: las infracciones muy graves prescriben a los tres años, las infracciones graves prescriben a los dos años y las infracciones leves prescriben al año.",
        reference: "Arts. 72, 73 y 74 LO 3/2018 (LOPDGDD)",
        difficulty: "basica",
      },
      {
        id: "t7-q12",
        topicId: 7,
        question:
          "De acuerdo con el artículo 77 de la Ley Orgánica 3/2018 (LOPDGDD), cuando una Administración Pública (como un Ayuntamiento) cometa una infracción de las previstas en los artículos 72 a 74 de la ley, ¿qué sanción dictará la autoridad de protección de datos competente?",
        options: [
          "Una multa administrativa de hasta 20 millones de euros con embargo de cuentas municipales.",
          "Una resolución sancionando a la entidad con apercibimiento, con indicación de las medidas que proceda adoptar para que cese la conducta o se corrijan los efectos de la infracción, sin imposición de sanción económica de multa.",
          "La disolución inmediata de la Corporación Local.",
          "Una multa coercitiva diaria de 6.000 euros contra el Alcalde y el Secretario municipal.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 77.2 de la LOPDGDD establece que cuando los responsables o encargados enumerados en el apartado 1 (entre ellos las Administraciones Locales) cometiesen alguna de las infracciones de los arts. 72 a 74, la autoridad de protección de datos dictará resolución sancionando a las mismas con apercibimiento y estableciendo las medidas que proceda adoptar, además de comunicarlo al Defensor del Pueblo y publicarlo oficialmente, sin multa económica.",
        reference: "Art. 77 LO 3/2018 (LOPDGDD)",
        difficulty: "media",
      },
    ],
  },

  // =========================================================================
  // TEMA 8: POLÍTICAS DE IGUALDAD DE GÉNERO. NORMATIVA VIGENTE
  // =========================================================================
  {
    id: 8,
    slug: "tema-8-politicas-igualdad-genero",
    block: "general",
    title: "Tema 8. Políticas de Igualdad de Género. Normativa Vigente",
    officialTitle: "Tema 8.- Políticas de igualdad de Género. Normativa vigente.",
    summary:
      "Recorrido exhaustivo por el marco normativo internacional, europeo, constitucional, estatal y autonómico valenciano en materia de igualdad de género: Ley Orgánica 3/2007 (LOIEMH), Ley Orgánica 2/2024 de representación paritaria, Ley Orgánica 1/2004, Leyes 15/2022 y 4/2023, Ley 9/2003 y Ley 7/2012 de la Generalitat Valenciana, y aplicación de la coeducación en el ciclo 0-3 años.",
    readTimeMinutes: 40,
    normativaClave: [
      "Convención sobre la eliminación de todas las formas de discriminación contra la mujer (CEDAW, ONU, 1979) y Agenda 2030 (ODS 5)",
      "Constitución Española de 1978 (arts. 1.1, 9.2, 14, 23.2, 32.1 y 35.1)",
      "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres (LOIEMH)",
      "Ley Orgánica 2/2024, de 1 de agosto, de representación paritaria y presencia equilibrada de mujeres y hombres",
      "Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género",
      "Real Decreto-ley 6/2019, de 1 de marzo, y Reales Decretos 901/2020 (Planes de Igualdad) y 902/2020 (Igualdad retributiva)",
      "Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación, y Ley 4/2023, de 28 de febrero (Trans y LGTBI)",
      "Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres (Comunitat Valenciana)",
      "Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en el ámbito de la Comunitat Valenciana",
    ],
    sections: [
      {
        title: "1. Marco Internacional, Europeo y Constitucional de la Igualdad de Género",
        content: [
          "Las políticas públicas de igualdad de género tienen su origen en el Derecho Internacional de los Derechos Humanos. El texto fundacional específico es la Convención sobre la eliminación de todas las formas de discriminación contra la mujer (CEDAW), aprobada por la Asamblea General de Naciones Unidas el 18 de diciembre de 1979 y ratificada por España en 1983. Posteriormente, la IV Conferencia Mundial sobre la Mujer celebrada en Beijing (Pekín) en 1995 consagró a escala global dos estrategias clave: el empoderamiento de las mujeres y la transversalidad de género ('gender mainstreaming'). En la actualidad, la Agenda 2030 de la ONU dedica su Objetivo de Desarrollo Sostenible número 5 (ODS 5) a 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas'.",
          "En el ámbito de la Unión Europea, la igualdad entre mujeres y hombres es un valor fundacional (arts. 2 y 3 TUE). El Tratado de Funcionamiento de la Unión Europea (TFUE) consagra la transversalidad de género en su artículo 8 y la igualdad de retribución para un mismo trabajo o un trabajo de igual valor en su artículo 157, mientras que la Carta de los Derechos Fundamentales de la UE dedica su artículo 23 a la igualdad entre mujeres y hombres en todos los ámbitos, admitiendo expresamente medidas de acción positiva.",
          "En el ordenamiento constitucional español (Constitución de 1978), la igualdad despliega una triple dimensión jurídica: 1) Como valor superior del ordenamiento jurídico junto con la libertad, la justicia y el pluralismo político (art. 1.1 CE); 2) Como igualdad formal ante la ley y prohibición de discriminación por razón de sexo (art. 14 CE, derecho fundamental susceptible de recurso de amparo); y 3) Como igualdad material, real y efectiva (art. 9.2 CE), que impone a los poderes públicos el mandato de promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integra sean reales y efectivas, removiendo los obstáculos que impidan o dificulten su plenitud. Se completa con el acceso en condiciones de igualdad a las funciones y cargos públicos (art. 23.2 CE), la plena igualdad jurídica en el matrimonio (art. 32.1 CE) y la prohibición de discriminación por razón de sexo en el trabajo y la remuneración (art. 35.1 CE).",
        ],
      },
      {
        title: "2. La Ley Orgánica 3/2007, de 22 de marzo (LOIEMH): Estructura, Conceptos y Políticas Públicas",
        content: [
          "La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres (en adelante, LOIEMH), constituye la norma cabecera del Estado español para hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres, en particular mediante la eliminación de la discriminación de la mujer en cualesquiera ámbitos de la vida (político, civil, laboral, económico, social y cultural), en desarrollo de los artículos 9.2 y 14 CE.",
          "Su estructura consta de Exposición de Motivos, un Título Preliminar y 8 Títulos numerados (con un total de 78 artículos), 31 Disposiciones Adicionales, 12 Transitorias, 1 Derogatoria y 8 Finales.",
          "El Título I (arts. 3 a 13) define los conceptos jurídicos nucleares que todo opositor debe dominar con exactitud:",
          "- Principio de igualdad de trato entre mujeres y hombres (art. 3): supone la ausencia de toda discriminación, directa o indirecta, por razón de sexo, y, especialmente, las derivadas de la maternidad, la asunción de obligaciones familiares y el estado civil. Es un principio informador del ordenamiento jurídico (art. 4).",
          "- Discriminación directa e indirecta (art. 6): Se considera discriminación DIRECTA por razón de sexo la situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable. Se considera discriminación INDIRECTA por razón de sexo la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados. En cualquier caso, se considera discriminatoria toda orden de discriminar, directa o indirectamente, por razón de sexo.",
          "- Acoso sexual y acoso por razón de sexo (art. 7): constituye ACOSO SEXUAL cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo. Constituye ACOSO POR RAZÓN DE SEXO cualquier comportamiento realizado en función del sexo de una persona, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo. Ambos se consideran en todo caso discriminatorios, así como el condicionamiento de un derecho a la aceptación de una situación constitutiva de acoso.",
          "- Discriminación por embarazo o maternidad (art. 8): constituye discriminación DIRECTA por razón de sexo todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad.",
          "- Indemnidad frente a represalias (art. 9), nulidad radical y pleno derecho de los actos y cláusulas discriminatorias (art. 10), acciones positivas por parte de los poderes públicos y personas físicas o jurídicas privadas en favor de las mujeres para corregir situaciones patentes de desigualdad de hecho en tanto subsistan (art. 11) e inversión de la carga de la prueba en los procedimientos judiciales (art. 13: salvo en los procesos penales, corresponde a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad).",
          "El Título II (arts. 14 a 35) regula las políticas públicas para la igualdad. El artículo 15 consagra el principio de transversalidad ('mainstreaming'): el principio de igualdad de trato y oportunidades informará, con carácter transversal, la actuación de todos los Poderes Públicos. El artículo 16 y la Disposición Adicional 1ª definen la presencia o composición equilibrada como la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo no superen el SESENTA POR CIENTO (60 %) ni sean menos del CUARENTA POR CIENTO (40 %), regla reforzada y extendida a órganos constitucionales, Gobierno, listas electorales (cremallera) y grandes empresas por la Ley Orgánica 2/2024, de 1 de agosto, de representación paritaria y presencia equilibrada de mujeres y hombres.",
          "Asimismo, el artículo 17 prevé el Plan Estratégico de Igualdad de Oportunidades; el artículo 19 exige que los proyectos de disposiciones de carácter general y los planes de especial relevancia económica, social, cultural y artística que se sometan a la aprobación del Consejo de Ministros incorporen un Informe sobre su impacto por razón de género; y los artículos 23 a 25 regulan la educación para la igualdad de mujeres y hombres (coeducación, eliminación de estereotipos sexistas en materiales didácticos y formación del profesorado).",
        ],
        table: {
          headers: ["Título de la LO 3/2007 (LOIEMH)", "Artículos", "Contenido principal"],
          rows: [
            ["Título Preliminar", "Arts. 1-2", "Objeto de la Ley y ámbito de aplicación (universal, toda persona física o jurídica)."],
            ["Título I", "Arts. 3-13", "El principio de igualdad y la tutela contra la discriminación (directa, indirecta, acoso, acciones positivas, carga de la prueba)."],
            ["Título II", "Arts. 14-35", "Políticas públicas para la igualdad (transversalidad art. 15, presencia equilibrada 40-60 %, informe impacto de género art. 19, educación arts. 23-25)."],
            ["Título III", "Arts. 36-41", "Igualdad y medios de comunicación (corporaciones públicas y publicidad ilícita)."],
            ["Título IV", "Arts. 42-50", "El derecho al trabajo en igualdad de oportunidades (Planes de igualdad en empresas de 50 o más trabajadores arts. 45-49, distintivo empresarial art. 50)."],
            ["Título V", "Arts. 51-68", "El principio de igualdad en el empleo público (criterios de actuación de las AAPP, tribunales de selección paritarios art. 53, formación, protocolos acoso)."],
            ["Título VI", "Arts. 69-72", "Igualdad de trato en el acceso a bienes y servicios y su suministro."],
            ["Título VII", "Arts. 73-74", "La igualdad en la responsabilidad social de las empresas."],
            ["Título VIII", "Arts. 75-78", "Disposiciones organizativas (Comisión Interministerial de Igualdad, Unidades de Igualdad en cada Ministerio y Consejo de Participación de la Mujer)."],
          ],
        },
        highlights: [
          {
            title: "Planes de Igualdad en Empresas (Art. 45 LOIEMH) y Empleo Público (Título V LOIEMH y DA 7ª TREBEP)",
            type: "importante",
            items: [
              "En el sector empresarial (art. 45.2 LOIEMH, tras el RDL 6/2019 y RD 901/2020): están obligadas a elaborar y aplicar un Plan de Igualdad todas las empresas de CINCUENTA (50) O MÁS personas trabajadoras (anteriormente el umbral era de más de 250), así como cuando lo establezca el convenio colectivo o la autoridad laboral en sustitución de sanciones. Deben inscribirse en el Registro de Planes de Igualdad e incluir una auditoría retributiva (RD 902/2020).",
              "En las Administraciones Públicas (art. 51-64 LOIEMH y Disposición Adicional 7ª del TREBEP, RD Legislativo 5/2015): TODAS las Administraciones Públicas (incluido el Ayuntamiento de Pinoso) están obligadas a elaborar y aplicar un Plan de Igualdad para su personal, a respetar la composición equilibrada (40 %-60 %) en los órganos de selección y valoración (art. 53 LOIEMH y art. 60 TREBEP) y a contar con protocolos frente al acoso sexual y por razón de sexo.",
            ],
          },
        ],
      },
      {
        title: "3. Otras Leyes Estatales Clave en Materia de Igualdad y Violencia de Género",
        content: [
          "Junto a la LO 3/2007 y la reciente LO 2/2024 de representación paritaria, el bloque normativo estatal vigente en materia de igualdad y no discriminación se integra por las siguientes leyes esenciales:",
          "1. Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género: actúa contra la violencia que, como manifestación de la discriminación, la situación de desigualdad y las relaciones de poder de los hombres sobre las mujeres, se ejerce sobre estas por parte de quienes sean o hayan sido sus cónyuges o de quienes estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia. En su Título I (Capítulo I, arts. 4 a 9) regula medidas de sensibilización y educación desde la etapa de Educación Infantil para el aprendizaje en la resolución pacífica de conflictos y el respeto a la igualdad entre hombres y mujeres. Además, creó la Delegación del Gobierno contra la Violencia de Género, el Observatorio Estatal de Violencia sobre la Mujer y los Juzgados de Violencia sobre la Mujer.",
          "2. Ley Orgánica 10/2022, de 6 de septiembre, de garantía integral de la libertad sexual: amplía la prevención, detección y atención integral frente a todas las violencias sexuales, poniendo el consentimiento afirmativo en el centro y reforzando la educación afectivo-sexual en las etapas educativas.",
          "3. Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación (conocida como 'Ley Zerolo'): garantiza el derecho de toda persona a la igualdad de trato y no discriminación con independencia de su nacionalidad, edad o residencia legal, abarcando causas como sexo, origen racial o étnico, discapacidad, edad, religión, orientación o identidad sexual, expresión de género, enfermedad o condición de salud y situación socioeconómica, creando la Autoridad Independiente para la Igualdad de Trato y la No Discriminación.",
          "4. Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI: desarrolla políticas públicas en el ámbito laboral, sanitario y educativo para erradicar la LGTBIfobia y garantizar el respeto a la diversidad familiar (familias monoparentales, homoparentales, reconstituidas), aspecto de aplicación directa en la relación cotidiana con las familias de una Escuela Infantil.",
        ],
      },
      {
        title: "4. Normativa Autonómica de la Comunitat Valenciana: Ley 9/2003 y Ley 7/2012",
        content: [
          "En el ámbito de la Comunitat Valenciana, el Estatut d'Autonomia (reformado por LO 1/2006) encomienda en sus artículos 10 y 11 a la Generalitat la garantía de la igualdad de derechos de hombres y mujeres en todos los ámbitos, la conciliación de la vida familiar y laboral y la erradicación de la violencia de género.",
          "La norma autonómica de cabecera en materia de igualdad es la Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres (pionera en España, anterior incluso a la LO 3/2007 estatal). Consta de 53 artículos distribuidos en 5 Títulos:",
          "- Título I (Disposiciones generales, arts. 1-5): establece como objeto regular y hacer efectivo el principio de igualdad de mujeres y hombres en la Comunitat Valenciana y remover los obstáculos que impidan su plenitud.",
          "- Título II (Políticas públicas para la promoción de la igualdad, arts. 6-38): regula los Planes de Igualdad de la Generalitat, la conciliación, la violencia contra las mujeres, la formación y empleo, los Planes de Igualdad en las empresas (visado e incentivos de la Generalitat con el sello 'Fent Empresa. Iguals en Oportunitats'), la coeducación en el sistema educativo valenciano (arts. 27-31: fomento de proyectos coeducativos, eliminación de estereotipos sexistas en libros de texto y materiales curriculares, y juguete no sexista ni violento) y el uso de un lenguaje administrativo no sexista (art. 48).",
          "- Título III (Medidas de control y promoción de la igualdad en el sector público valenciano, arts. 39-48): regula la paridad, la contratación pública y la corrección del lenguaje administrativo.",
          "- Título IV (Instituciones de protección del derecho a la igualdad, arts. 49-53): regula la Defensoría de la Igualdad (asumida por el Síndic de Greuges de la Comunitat Valenciana) y el Consell Valencià de les Dones como órgano consultivo y de participación.",
          "En segundo lugar, destaca la Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en el ámbito de la Comunitat Valenciana, que adopta un concepto amplio de violencia sobre la mujer (física, psicológica, sexual, económica, mutilación genital femenina, matrimonios forzados y trata), regula la Red de la Generalitat de Asistencia Social Integral a las Víctimas (Centros Mujer 24 Horas y Centros Mujer Rurales y de Interior) e impone al personal de los centros educativos y servicios sociales el deber de colaboración y comunicación inmediata ante cualquier indicio de violencia sobre la mujer o sobre sus hijos e hijas menores.",
        ],
        highlights: [
          {
            title: "Coeducación en el Primer Ciclo de Educación Infantil (0-3 años) y en el Ayuntamiento de Pinoso",
            type: "ejemplo",
            items: [
              "En el Decreto 100/2022, de 29 de julio, del Consell (currículo de Educación Infantil en la Comunitat Valenciana), la perspectiva de género y la coeducación constituyen principios pedagógicos transversales en el ciclo 0-3 años.",
              "Actuaciones prácticas del Técnico de Educación Infantil: 1) Selección de cuentos infantiles, canciones y materiales libres de estereotipos de género; 2) Organización igualitaria de los rincones de juego simbólico y patio (evitando dividir juegos o colores 'de niños' y 'de niñas'); 3) Uso de lenguaje inclusivo y no sexista con el alumnado y las familias; 4) Visibilización y acogida de la diversidad familiar; y 5) Colaboración con la Concejalía de Igualdad del Ayuntamiento de Pinoso en las acciones del Plan Municipal de Igualdad y en fechas señaladas (8 de marzo y 25 de noviembre).",
            ],
          },
        ],
      },
    ],
    esquemaVisual: {
      title: "Mapa Normativo de las Políticas de Igualdad de Género (Estatal y Comunitat Valenciana)",
      nodes: [
        {
          label: "Marco Internacional, UE y CE",
          children: [
            "ONU: Convención CEDAW (1979), Conferencia de Beijing (1995: empoderamiento y mainstreaming) y Agenda 2030 (ODS 5)",
            "Unión Europea: Arts. 2 y 3 TUE, Arts. 8 y 157 TFUE y Art. 23 Carta de Derechos Fundamentales UE",
            "Constitución Española: Art. 1.1 (valor superior), Art. 9.2 (igualdad material), Art. 14 (igualdad formal y no discriminación), Arts. 23.2, 32 y 35",
          ],
        },
        {
          label: "LO 3/2007 (LOIEMH) y LO 2/2024",
          children: [
            "Estructura LOIEMH: Título Preliminar + 8 Títulos (78 artículos)",
            "Conceptos (Arts. 3-11): Discriminación directa e indirecta (Art. 6), acoso sexual y por razón de sexo (Art. 7), embarazo/maternidad = discriminación directa (Art. 8), acciones positivas (Art. 11)",
            "Políticas (Arts. 14-25): Transversalidad (Art. 15), presencia equilibrada 40%-60% (DA 1ª y LO 2/2024), informe de impacto de género (Art. 19), coeducación (Arts. 23-25)",
            "Planes de Igualdad: Obligatorios en empresas de 50 o más trabajadores (Art. 45 tras RDL 6/2019 y RD 901/2020) y en todas las AAPP (Título V y DA 7ª TREBEP)",
          ],
        },
        {
          label: "Otras Leyes Estatales",
          children: [
            "LO 1/2004, de 28 de diciembre: Medidas de Protección Integral contra la Violencia de Género",
            "LO 10/2022, de 6 de septiembre: Garantía integral de la libertad sexual",
            "Ley 15/2022, de 12 de julio: Integral para la igualdad de trato y la no discriminación",
            "Ley 4/2023, de 28 de febrero: Igualdad real y efectiva de personas trans y derechos LGTBI",
          ],
        },
        {
          label: "Normativa Comunitat Valenciana y 0-3 Años",
          children: [
            "Estatut d'Autonomia CV: Arts. 10 y 11",
            "Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres (Defensoría de la Igualdad en el Síndic de Greuges, Consell Valencià de les Dones, coeducación y lenguaje no sexista)",
            "Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en la Comunitat Valenciana",
            "Decreto 100/2022 del Consell: Coeducación y prevención de estereotipos desde el ciclo 0-3 años",
          ],
        },
      ],
    },
    datosOro: [
      "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres (LOIEMH): desarrolla los artículos 9.2 y 14 CE y consta de un Título Preliminar y 8 Títulos (78 artículos).",
      "Art. 8 LOIEMH: Todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye siempre discriminación DIRECTA por razón de sexo.",
      "Disposición Adicional 1ª LOIEMH y Ley Orgánica 2/2024, de 1 de agosto: Se entiende por composición o presencia equilibrada aquella en la que las personas de cada sexo no superen el 60 % ni sean menos del 40 %.",
      "Art. 15 LOIEMH: El principio de igualdad de trato y oportunidades entre mujeres y hombres informará, con carácter TRANSVERSAL ('mainstreaming'), la actuación de todos los Poderes Públicos.",
      "Art. 45.2 LOIEMH (modificado por RDL 6/2019 y desarrollado por RD 901/2020): Las empresas de 50 o más personas trabajadoras están obligadas a elaborar y aplicar un Plan de Igualdad. En las Administraciones Públicas (DA 7ª TREBEP), todas están obligadas a aprobar su Plan de Igualdad.",
      "En la Comunitat Valenciana rigen dos leyes autonómicas fundamentales: la Ley 9/2003, de 2 de abril, para la Igualdad entre Mujeres y Hombres (que atribuye la Defensoría de la Igualdad al Síndic de Greuges), y la Ley 7/2012, de 23 de noviembre, Integral contra la Violencia sobre la Mujer.",
      "Art. 13 LOIEMH: En los procedimientos judiciales en que la parte actora alegue discriminación por razón de sexo, corresponde a la persona demandada probar la ausencia de discriminación (inversión de la carga de la prueba), salvo en los procesos penales.",
    ],
    temaDesarrollo: {
      introduccion:
        "La igualdad entre mujeres y hombres constituye un principio jurídico universal reconocido en los principales textos internacionales sobre derechos humanos, un valor fundacional de la Unión Europea (arts. 2 y 3 TUE y art. 8 TFUE) y un derecho fundamental en el ordenamiento constitucional español. Nuestra Constitución de 1978 proclama la igualdad como valor superior del ordenamiento jurídico (art. 1.1 CE), consagra la igualdad formal ante la ley prohibiendo toda discriminación por razón de sexo (art. 14 CE) y encomienda a los poderes públicos promover las condiciones para que la igualdad sea real y efectiva, removiendo los obstáculos que impidan o dificulten su plenitud (art. 9.2 CE). Como ha señalado la doctrina constitucional, el tránsito de la igualdad formal a la igualdad material exigía una acción normativa decidida que se materializó a nivel estatal en la Ley Orgánica 3/2007, de 22 de marzo, y en la Comunitat Valenciana en la Ley 9/2003, de 2 de abril. En el primer ciclo de Educación Infantil (0-3 años), etapa en la que se construyen los primeros esquemas de identidad y socialización, la aplicación de las políticas de igualdad a través de la coeducación resulta determinante.",
      estructuraEpigrafes: [
        {
          epigraph: "1. Marco Internacional, Europeo y Constitucional de las Políticas de Igualdad",
          body: "En la esfera internacional, el hito normativo fundamental es la Convención sobre la eliminación de todas las formas de discriminación contra la mujer (CEDAW), adoptada por la Asamblea General de la ONU en 1979 y ratificada por España en 1983. Posteriormente, la IV Conferencia Mundial sobre la Mujer celebrada en Beijing en 1995 consolidó dos ejes estratégicos de las políticas públicas contemporáneas: el empoderamiento de las mujeres y la transversalidad de género ('gender mainstreaming'). Asimismo, la Agenda 2030 para el Desarrollo Sostenible dedica el Objetivo de Desarrollo Sostenible 5 (ODS 5) a lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas.\n\nEn el Derecho de la Unión Europea, el Tratado de Funcionamiento de la UE consagra en su artículo 8 la transversalidad de género en todas sus acciones y en su artículo 157 el principio de igualdad de retribución entre trabajadores y trabajadoras para un mismo trabajo o para un trabajo de igual valor. Por su parte, el artículo 23 de la Carta de los Derechos Fundamentales de la UE garantiza la igualdad entre mujeres y hombres en todos los ámbitos, avalando el mantenimiento o adopción de medidas que ofrezcan ventajas concretas en favor del sexo menos representado.\n\nEn el marco constitucional español, el eje vertebrador lo conforman los artículos 1.1 (valor superior de la igualdad), 14 (igualdad ante la ley y no discriminación por razón de sexo) y 9.2 (mandato de igualdad material y fundamento constitucional de las acciones positivas), complementados por el artículo 23.2 (acceso en condiciones de igualdad a las funciones y cargos públicos), el artículo 32.1 (igualdad jurídica en el matrimonio) y el artículo 35.1 (prohibición de discriminación por razón de sexo en el ámbito laboral).",
        },
        {
          epigraph: "2. La Ley Orgánica 3/2007, de 22 de marzo (LOIEMH), y la Ley Orgánica 2/2024",
          body: "La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres (LOIEMH), estructurada en un Título Preliminar y ocho Títulos con un total de 78 artículos, tiene por objeto hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres mediante la eliminación de la discriminación de la mujer en cualesquiera ámbitos de la vida.\n\nEn su Título I (arts. 3 a 13) define las categorías jurídicas esenciales:\n- El principio de igualdad de trato (art. 3), que implica la ausencia de toda discriminación directa o indirecta por razón de sexo, y especialmente las derivadas de la maternidad, las obligaciones familiares y el estado civil.\n- La discriminación directa (trato menos favorable en atención al sexo) y la discriminación indirecta (disposición, criterio o práctica aparentemente neutros que ponen a personas de un sexo en desventaja particular salvo justificación objetiva y proporcional), reguladas en el artículo 6.\n- El acoso sexual (comportamiento verbal o físico de naturaleza sexual) y el acoso por razón de sexo (comportamiento realizado en función del sexo de una persona), que atentan contra la dignidad creando un entorno intimidatorio, degradante u ofensivo, considerados discriminatorios en todo caso (art. 7).\n- La consideración como discriminación directa de todo trato desfavorable relacionado con el embarazo o la maternidad (art. 8), la garantía de indemnidad frente a represalias (art. 9), las acciones positivas para corregir situaciones patentes de desigualdad de hecho (art. 11) y la inversión de la carga de la prueba en los procesos judiciales no penales (art. 13).\n\nEn su Título II (arts. 14 a 35), la Ley articula las políticas públicas de igualdad bajo el principio de transversalidad (art. 15), el criterio de presencia o composición equilibrada del 40 %-60 % (art. 16 y DA 1ª, reforzado en todos los ámbitos de decisión política, administrativa y societaria por la Ley Orgánica 2/2024, de 1 de agosto, de representación paritaria y presencia equilibrada de mujeres y hombres), la obligatoriedad de los informes de impacto por razón de género (art. 19) y la integración del principio de igualdad en el sistema educativo (arts. 23 a 25).\n\nEn el ámbito laboral (Título IV), tras la reforma del Real Decreto-ley 6/2019 y los Reales Decretos 901/2020 y 902/2020, todas las empresas de 50 o más personas trabajadoras están obligadas a elaborar, registrar y aplicar un Plan de Igualdad que incluya diagnóstico, auditoría retributiva y protocolo frente al acoso (art. 45). Por su parte, el Título V (arts. 51 a 68), en concordancia con la Disposición Adicional 7ª del TREBEP, obliga a todas las Administraciones Públicas (incluido el Ayuntamiento de Pinoso) a aprobar su Plan de Igualdad, a garantizar la composición paritaria en los tribunales de selección (art. 53) y a formar a su personal en igualdad.",
        },
        {
          epigraph: "3. Normativa Estatal Complementaria y Legislación de la Comunitat Valenciana",
          body: "El marco estatal se completa con cuatro leyes fundamentales: 1) La Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género, que aborda de forma multidisciplinar (educativa, social, sanitaria, policial y judicial) la violencia ejercida sobre las mujeres por quienes sean o hayan sido sus cónyuges o parejas de afectividad análoga, aún sin convivencia; 2) La Ley Orgánica 10/2022, de 6 de septiembre, de garantía integral de la libertad sexual; 3) La Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación; y 4) La Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI.\n\nEn el ámbito autonómico de la Comunitat Valenciana, al amparo de los artículos 10 y 11 del Estatut d'Autonomia, destacan dos normas de referencia:\n- La Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres: estructurada en 5 Títulos y 53 artículos, regula los Planes de Igualdad de la Generalitat, el visado de planes empresariales con el sello 'Fent Empresa. Iguals en Oportunitats', las medidas coeducativas en los centros docentes valencianos (arts. 27 a 31, incluyendo el fomento de juegos y juguetes no sexistas ni violentos), el uso de un lenguaje administrativo no sexista (art. 48), la Defensoría de la Igualdad (encomendada al Síndic de Greuges) y el Consell Valencià de les Dones.\n- La Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en el ámbito de la Comunitat Valenciana, que articula la red autonómica de asistencia integral (Centros Mujer) e impone el deber de comunicación y colaboración a todos los profesionales del ámbito educativo y social.",
        },
        {
          epigraph: "4. Aplicación de las Políticas de Igualdad y Coeducación en la Escuela Infantil (0-3 Años)",
          body: "Tanto el artículo 24 de la LO 3/2007 como la Ley Orgánica 2/2006 de Educación (modificada por la LOMLOE 3/2020) y el Decreto 100/2022, de 29 de julio, del Consell, por el que se establece la ordenación y el currículo de Educación Infantil en la Comunitat Valenciana, sitúan la igualdad de género y la coeducación como principios pedagógicos transversales desde el primer ciclo (0 a 3 años).\n\nEn el desempeño diario del Técnico de Educación Infantil en una Escuela Infantil Municipal como la del Ayuntamiento de Pinoso, la normativa vigente se traduce en pautas de intervención concretas:\n1) Diseño de espacios y selección de materiales: organización de rincones de juego simbólico y psicomotricidad sin segregación por sexos, utilizando cuentos, imágenes y juguetes no sexistas ni violentos (art. 31 Ley 9/2003).\n2) Lenguaje y expectativas educativas: empleo de un lenguaje inclusivo y no sexista tanto con los niños y niñas como en las comunicaciones escritas a las familias, fomentando la expresión emocional, el cuidado mutuo y la autonomía en ambos sexos por igual.\n3) Atención a la diversidad familiar y corresponsabilidad: reconocimiento de todos los modelos familiares y fomento de la implicación corresponsable de padres y madres en las tutorías, reuniones y actividades del centro.\n4) Prevención y detección temprana: coordinación con el equipo educativo, la Concejalía de Igualdad y los Servicios Sociales municipales ante cualquier indicador de violencia de género en el entorno familiar de los menores.",
        },
      ],
      conclusion:
        "En conclusión, el ordenamiento jurídico vigente —integrado en armonía por la normativa internacional, europea, constitucional, estatal (LO 3/2007, LO 2/2024, LO 1/2004, Leyes 15/2022 y 4/2023) y autonómica valenciana (Leyes 9/2003 y 7/2012)— proporciona un sólido entramado institucional para erradicar toda forma de discriminación y alcanzar una democracia paritaria. En la Escuela Infantil Municipal, el Técnico de Educación Infantil actúa como agente clave de transformación social, sembrando desde los 0 a 3 años los valores de igualdad, respeto, corresponsabilidad y convivencia pacífica.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (artículos 1.1, 9.2, 14, 23.2, 32.1 y 35.1).",
        "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres (BOE núm. 71, de 23 de marzo de 2007).",
        "Ley Orgánica 2/2024, de 1 de agosto, de representación paritaria y presencia equilibrada de mujeres y hombres.",
        "Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género.",
        "Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres (DOGV núm. 4474).",
        "Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en el ámbito de la Comunitat Valenciana.",
        "Decreto 100/2022, de 29 de julio, del Consell, por el que se establece la ordenación y el currículo de Educación Infantil en la Comunitat Valenciana.",
      ],
      consejosTribunal: [
        "Estructura siempre el tema siguiendo la pirámide normativa: Internacional/UE -> Constitución (arts. 1.1, 9.2 y 14) -> Normativa Estatal (LO 3/2007, LO 2/2024, LO 1/2004, Ley 15/2022, Ley 4/2023) -> Normativa Autonómica Valenciana (Ley 9/2003 y Ley 7/2012).",
        "Distingue con precisión quirúrgica los conceptos de los artículos 6, 7 y 8 de la LO 3/2007 (discriminación directa vs. indirecta; acoso sexual vs. acoso por razón de sexo; embarazo/maternidad como discriminación directa).",
        "Cita el umbral actualizado de obligatoriedad de los Planes de Igualdad en las empresas: 50 o más personas trabajadoras (art. 45.2 LOIEMH tras RDL 6/2019 y RD 901/2020), así como la obligatoriedad en todas las Administraciones Públicas (DA 7ª TREBEP).",
      ],
    },
    questions: [
      {
        id: "t8-q1",
        topicId: 8,
        question:
          "De acuerdo con el artículo 6.2 de la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres (LOIEMH), la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro (salvo justificación objetiva y legítima) se denomina:",
        options: [
          "Discriminación directa por razón de sexo.",
          "Discriminación indirecta por razón de sexo.",
          "Acoso por razón de sexo.",
          "Medida de acción positiva.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 6.2 de la LO 3/2007 define la discriminación indirecta por razón de sexo como la situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que pueda justificarse objetivamente en atención a una finalidad legítima y que los medios sean necesarios y adecuados.",
        reference: "Art. 6.2 LO 3/2007 (LOIEMH)",
        difficulty: "basica",
      },
      {
        id: "t8-q2",
        topicId: 8,
        question:
          "Según el artículo 8 de la Ley Orgánica 3/2007 (LOIEMH), todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye:",
        options: [
          "Discriminación indirecta por razón de sexo.",
          "Discriminación directa por razón de sexo.",
          "Acoso sexual ambiental.",
          "Infracción leve de carácter meramente formal.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 8 de la LO 3/2007 establece taxativamente que 'Constituye discriminación directa por razón de sexo todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad'.",
        reference: "Art. 8 LO 3/2007 (LOIEMH)",
        difficulty: "basica",
      },
      {
        id: "t8-q3",
        topicId: 8,
        question:
          "Conforme al artículo 7 de la Ley Orgánica 3/2007 (LOIEMH), ¿qué diferencia existe entre el acoso sexual y el acoso por razón de sexo?",
        options: [
          "El acoso sexual solo puede ser físico, mientras que el acoso por razón de sexo solo puede ser verbal.",
          "El acoso sexual exige un comportamiento, verbal o físico, de naturaleza sexual, mientras que el acoso por razón de sexo es cualquier comportamiento realizado en función del sexo de una persona, ambos con el propósito o efecto de atentar contra su dignidad y crear un entorno intimidatorio, degradante u ofensivo.",
          "El acoso sexual solo se aplica en el sector privado y el acoso por razón de sexo en la Administración Pública.",
          "No existe ninguna diferencia legal; la Ley los regula como sinónimos idénticos en un único apartado.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 7.1 define el acoso sexual como cualquier comportamiento, verbal o físico, de naturaleza sexual, mientras que el artículo 7.2 define el acoso por razón de sexo como cualquier comportamiento realizado en función del sexo de una persona, en ambos casos con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.",
        reference: "Art. 7 LO 3/2007 (LOIEMH)",
        difficulty: "media",
      },
      {
        id: "t8-q4",
        topicId: 8,
        question:
          "Según la Disposición Adicional Primera de la Ley Orgánica 3/2007 (LOIEMH) y la Ley Orgánica 2/2024, se entenderá por composición o presencia equilibrada la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo:",
        options: [
          "Sean exactamente el 50 % en todos los casos sin admitir decimales.",
          "No superen el 60 % ni sean menos del 40 %.",
          "No superen el 70 % ni sean menos del 30 %.",
          "No superen el 55 % ni sean menos del 45 %.",
        ],
        correctIndex: 1,
        explanation:
          "La Disposición Adicional Primera de la LO 3/2007 (reforzada por la LO 2/2024) define la composición equilibrada como la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo no superen el sesenta por ciento ni sean menos del cuarenta por ciento.",
        reference: "Disposición Adicional 1ª LO 3/2007 (LOIEMH) y LO 2/2024",
        difficulty: "basica",
      },
      {
        id: "t8-q5",
        topicId: 8,
        question:
          "De acuerdo con el artículo 15 de la Ley Orgánica 3/2007 (LOIEMH), el principio de igualdad de trato y oportunidades entre mujeres y hombres informará la actuación de todos los Poderes Públicos con carácter:",
        options: [
          "Sectorial y exclusivo de los Ministerios o Concejalías de Igualdad.",
          "Transversal.",
          "Subsidiario y potestativo.",
          "Temporal y transitorio.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 15 de la LO 3/2007 regula la 'Transversalidad del principio de igualdad de trato entre mujeres y hombres', disponiendo que informará, con carácter transversal, la actuación de todos los Poderes Públicos.",
        reference: "Art. 15 LO 3/2007 (LOIEMH)",
        difficulty: "basica",
      },
      {
        id: "t8-q6",
        topicId: 8,
        question:
          "Conforme al artículo 45.2 de la Ley Orgánica 3/2007 (LOIEMH), tras la modificación operada por el Real Decreto-ley 6/2019 y el Real Decreto 901/2020, ¿a partir de qué plantilla están obligadas las empresas a elaborar y aplicar un Plan de Igualdad?",
        options: [
          "En empresas de más de 250 personas trabajadoras únicamente.",
          "En empresas de 50 o más personas trabajadoras.",
          "En empresas de 100 o más personas trabajadoras.",
          "En empresas de 10 o más personas trabajadoras.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 45.2 de la LO 3/2007, modificado por el RDL 6/2019, establece que en el caso de las empresas de cincuenta o más trabajadores, las medidas de igualdad deberán dirigirse a la elaboración y aplicación de un plan de igualdad.",
        reference: "Art. 45.2 LO 3/2007 (LOIEMH) y RD 901/2020",
        difficulty: "media",
      },
      {
        id: "t8-q7",
        topicId: 8,
        question:
          "Según el artículo 13 de la Ley Orgánica 3/2007 (LOIEMH), relativo a la prueba en los procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo:",
        options: [
          "Corresponderá a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad, salvo en los procesos penales.",
          "Corresponderá siempre y en exclusiva a la víctima aportar prueba plena e indubitada de la intencionalidad discriminatoria del empleador.",
          "La inversión de la carga de la prueba se aplica únicamente en los procesos penales.",
          "El órgano judicial no podrá recabar informe o dictamen de los organismos públicos competentes en materia de igualdad.",
        ],
        correctIndex: 0,
        explanation:
          "El artículo 13.1 y 13.2 de la LO 3/2007 establece que, de acuerdo con las Leyes procesales, en aquellos procedimientos en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por razón de sexo, corresponderá a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad, no siendo de aplicación lo anterior a los procesos penales.",
        reference: "Art. 13 LO 3/2007 (LOIEMH)",
        difficulty: "media",
      },
      {
        id: "t8-q8",
        topicId: 8,
        question:
          "¿Cuál es la ley autonómica de cabecera en la Comunitat Valenciana cuyo objeto es regular y hacer efectivo el principio de igualdad de mujeres y hombres?",
        options: [
          "La Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres.",
          "La Ley 12/2008, de 3 de julio, de la Generalitat, de Protección Integral de la Infancia y la Adolescencia.",
          "La Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno.",
          "La Ley 4/2021, de 16 de abril, de la Generalitat, de la Función Pública Valenciana.",
        ],
        correctIndex: 0,
        explanation:
          "En la Comunitat Valenciana, la norma específica que regula y hace efectivo el principio de igualdad entre mujeres y hombres es la Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres.",
        reference: "Art. 1 Ley 9/2003, de 2 de abril, de la Generalitat",
        difficulty: "basica",
      },
      {
        id: "t8-q9",
        topicId: 8,
        question:
          "De acuerdo con el artículo 49 de la Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres, ¿qué institución ejerce las funciones de Defensoría de la Igualdad en la Comunitat Valenciana?",
        options: [
          "El Consell Jurídic Consultiu.",
          "El Síndic de Greuges.",
          "La Sindicatura de Comptes.",
          "El Comité Econòmic i Social.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 49 de la Ley 9/2003 de la Generalitat encomienda la Defensoría de la Igualdad al Síndic de Greuges para velar por el cumplimiento de lo dispuesto en dicha ley.",
        reference: "Art. 49 Ley 9/2003, de 2 de abril, de la Generalitat",
        difficulty: "alta",
      },
      {
        id: "t8-q10",
        topicId: 8,
        question:
          "¿Qué norma autonómica regula de manera integral la prevención, protección y asistencia frente a la violencia sobre la mujer en el ámbito de la Comunitat Valenciana?",
        options: [
          "La Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en el ámbito de la Comunitat Valenciana.",
          "La Ley Orgánica 1/2004, de 28 de diciembre, de la Generalitat Valenciana.",
          "La Ley 3/2019, de 18 de febrero, de Servicios Sociales Inclusivos.",
          "El Decreto 100/2022, de 29 de julio, del Consell.",
        ],
        correctIndex: 0,
        explanation:
          "La norma autonómica específica en esta materia es la Ley 7/2012, de 23 de noviembre, de la Generalitat, Integral contra la Violencia sobre la Mujer en el ámbito de la Comunitat Valenciana.",
        reference: "Ley 7/2012, de 23 de noviembre, de la Generalitat",
        difficulty: "media",
      },
      {
        id: "t8-q11",
        topicId: 8,
        question:
          "Conforme al artículo 75 y siguientes de la Ley Orgánica 3/2007 (LOIEMH), ¿qué órganos colegiados adscritos a la Administración General del Estado se regulan en el Título VIII ('Disposiciones organizativas') de dicha Ley?",
        options: [
          "El Consejo de Estado y el Tribunal de Cuentas.",
          "La Comisión Interministerial de Igualdad entre mujeres y hombres y el Consejo de Participación de la Mujer (además de las Unidades de Igualdad en cada Ministerio).",
          "El Consejo de Transparencia y Buen Gobierno y la Agencia Española de Protección de Datos.",
          "El Comité de Seguridad y Salud y la Comisión Nacional de Prevención.",
        ],
        correctIndex: 1,
        explanation:
          "El Título VIII de la LO 3/2007 (artículos 76, 77 y 78) regula tres figuras organizativas: la Comisión Interministerial de Igualdad entre mujeres y hombres (art. 76), las Unidades de Igualdad en todos los Ministerios (art. 77) y el Consejo de Participación de la Mujer (art. 78).",
        reference: "Arts. 76, 77 y 78 LO 3/2007 (LOIEMH)",
        difficulty: "alta",
      },
      {
        id: "t8-q12",
        topicId: 8,
        question:
          "Según el artículo 31 de la Ley 9/2003, de 2 de abril, de la Generalitat, para la Igualdad entre Mujeres y Hombres, en relación con los juguetes y la coeducación, el Consell:",
        options: [
          "Prohibirá que niños y niñas compartan el mismo espacio de patio en las escuelas infantiles.",
          "Llevará a cabo campañas de concienciación dirigidas a las familias sobre el uso del juguete no sexista y no violento como medio para el desarrollo educativo igualitario en la infancia.",
          "Establecerá catálogos diferenciados de juguetes para niños y para niñas en los centros de primer ciclo.",
          "Limitará las actividades coeducativas exclusivamente a la etapa de Educación Secundaria Obligatoria.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 31 de la Ley 9/2003 de la Generalitat dispone que el Consell llevará a cabo campañas de concienciación dirigidas a las familias sobre el uso del juguete no sexista y no violento como medio para el desarrollo educativo igualitario en la infancia, y fomentará en las escuelas infantiles la eliminación de estereotipos.",
        reference: "Art. 31 Ley 9/2003, de 2 de abril, de la Generalitat",
        difficulty: "media",
      },
    ],
  },

  // =========================================================================
  // TEMA 9: LEY 19/2013 DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN Y BUEN GOBIERNO
  // =========================================================================
  {
    id: 9,
    slug: "tema-9-ley-transparencia-buen-gobierno",
    block: "general",
    title: "Tema 9. Ley 19/2013 de Transparencia, Acceso a la Información y Buen Gobierno",
    officialTitle:
      "Tema 9.- Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno: objeto y ámbito subjetivo de aplicación. El consejo de transparencia y buen gobierno: funciones.",
    summary:
      "Análisis riguroso de la Ley 19/2013, de 9 de diciembre (LTAIBG): fundamento constitucional (art. 105.b CE), estructura, triple objeto (art. 1), ámbito subjetivo de aplicación (arts. 2, 3 y 4), síntesis de publicidad activa, derecho de acceso y buen gobierno, y estudio completo del Consejo de Transparencia y Buen Gobierno (naturaleza, composición y funciones del art. 38), con referencia a la Ley 1/2022 de la Comunitat Valenciana.",
    readTimeMinutes: 40,
    normativaClave: [
      "Constitución Española de 1978 (arts. 9.3, 20.1.d, 23 y 105.b)",
      "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (LTAIBG)",
      "Real Decreto 615/2024, de 2 de julio, por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno, A.A.I. (que derogó el RD 919/2014)",
      "Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana",
    ],
    sections: [
      {
        title: "1. Marco Constitucional, Estructura y Triple Objeto de la Ley 19/2013 (Artículo 1)",
        content: [
          "El fundamento constitucional directo de la transparencia y del acceso a la información pública se localiza en el artículo 105.b) de la Constitución Española, según el cual la ley regulará el acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecte a la seguridad y defensa del Estado, la averiguación de los delitos y la intimidad de las personas. Asimismo, se conecta con el principio de participación de la ciudadanía en los asuntos públicos (arts. 9.2 y 23.1 CE), la libertad de información (art. 20.1.d CE) y los principios de eficacia, objetividad e interdicción de la arbitrariedad de los poderes públicos (arts. 9.3 y 103.1 CE).",
          "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (en adelante, LTAIBG), consta de un Preámbulo, un Título Preliminar (art. 1) y 3 Títulos numerados, con un total de 40 artículos, además de 8 Disposiciones Adicionales y 9 Disposiciones Finales.",
          "De acuerdo con el artículo 1 de la LTAIBG (único artículo del Título Preliminar), esta Ley tiene un TRIPLE OBJETO claramente diferenciado:",
          "1º Ampliar y reforzar la transparencia de la actividad pública (vertiente de publicidad activa).",
          "2º Reconocer y garantizar el derecho de acceso a la información relativa a aquella actividad (vertiente de publicidad pasiva o derecho subjetivo de acceso).",
          "3º Establecer las obligaciones de buen gobierno que deben cumplir los responsables públicos así como las consecuencias derivadas de su incumplimiento (régimen de infracciones y sanciones de altos cargos).",
        ],
        highlights: [
          {
            title: "Estructura de la Ley 19/2013, de 9 de diciembre (40 artículos)",
            type: "legislacion",
            items: [
              "Título Preliminar (art. 1): Objeto de la Ley (triple alcance).",
              "Título I (arts. 2 a 24): Transparencia de la actividad pública. Se divide en 3 Capítulos: Capítulo I (Ámbito subjetivo de aplicación, arts. 2-4), Capítulo II (Publicidad activa, arts. 5-11) y Capítulo III (Derecho de acceso a la información pública, arts. 12-24).",
              "Título II (arts. 25 a 32): Buen gobierno (principios generales y de actuación, e infracciones y sanciones en materia de conflicto de intereses, gestión económico-presupuestaria y disciplinaria).",
              "Título III (arts. 33 a 40): El Consejo de Transparencia y Buen Gobierno (naturaleza, fines, Comisión, Presidente, funciones y régimen jurídico).",
            ],
          },
        ],
      },
      {
        title: "2. Ámbito Subjetivo de Aplicación (Artículos 2, 3 y 4 LTAIBG)",
        content: [
          "El Capítulo I del Título I de la LTAIBG (artículos 2, 3 y 4) delimita con precisión quiénes están sujetos a las obligaciones de transparencia, clasificando a los destinatarios en tres niveles concéntricos de exigencia:",
          "A) Sujetos del artículo 2.1 (sujeción plena al Título I: tanto a la publicidad activa como al derecho de acceso a la información pública): las disposiciones del Título I se aplicarán a:\n- a) La Administración General del Estado, las Administraciones de las Comunidades Autónomas (como la Generalitat Valenciana) y de las Ciudades de Ceuta y Melilla y las Entidades que integran la Administración Local (como el Ayuntamiento de Pinoso).\n- b) Las entidades gestoras y los servicios comunes de la Seguridad Social así como las mutuas de accidentes de trabajo y enfermedades profesionales colaboradoras de la Seguridad Social.\n- c) Los organismos autónomos, las Agencias Estatales, las entidades públicas empresariales y las entidades de Derecho Público que, con independencia funcional o con una especial autonomía reconocida por la Ley, tengan atribuidas funciones de regulación o supervisión de carácter externo sobre un determinado sector o actividad.\n- d) Las entidades de Derecho Público con personalidad jurídica propia, vinculadas a cualquiera de las Administraciones Públicas o dependientes de ellas, incluidas las Universidades públicas.\n- e) Las corporaciones de Derecho Público (ej. Colegios Profesionales, Cámaras de Comercio), en lo relativo a sus actividades sujetas a Derecho Administrativo.\n- f) La Casa de su Majestad el Rey, el Congreso de los Diputados, el Senado, el Tribunal Constitucional y el Consejo General del Poder Judicial, así como el Banco de España, el Consejo de Estado, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo Económico y Social y las instituciones autonómicas análogas, en relación con sus actividades sujetas a Derecho Administrativo.\n- g) Las sociedades mercantiles en cuyo capital social la participación, directa o indirecta, de las entidades previstas en este artículo sea SUPERIOR AL 50 POR 100.\n- h) Las fundaciones del sector público previstas en la legislación en materia de fundaciones.\n- i) Las asociaciones constituidas por las Administraciones, organismos y entidades previstos en este artículo (incluidos los órganos de cooperación del art. 5 LRJSP en la medida en que cuenten con presupuesto o medios propios). Según el art. 2.2, a efectos del Título I se entiende por Administraciones Públicas los organismos y entidades incluidos en las letras a) a d).",
          "B) Otros sujetos obligados del artículo 3 (sujetos únicamente a las obligaciones de publicidad activa del Capítulo II del Título I):\n- a) Los partidos políticos, las organizaciones sindicales y las organizaciones empresariales.\n- b) Las entidades privadas que perciban durante el período de UN (1) AÑO ayudas o subvenciones públicas en una cuantía SUPERIOR A 100.000 EUROS o cuando al menos el 40 POR 100 del total de sus ingresos anuales tengan carácter de ayuda o subvención pública, siempre que alcancen como mínimo la cantidad de 5.000 EUROS.",
          "C) Obligación de suministrar información del artículo 4 (sujeción indirecta o instrumental): las personas físicas y jurídicas distintas de las referidas en los artículos 2 y 3 que presten servicios públicos o ejerzan potestades administrativas estarán obligadas a suministrar a la Administración, organismo o entidad de las previstas en el artículo 2.1 a la que se encuentren vinculadas, previo requerimiento, toda la información necesaria para el cumplimiento por aquéllos de las obligaciones previstas en el Título I. Esta obligación se extenderá a los adjudicatarios de contratos del sector público en los términos previstos en el respectivo contrato.",
        ],
        table: {
          headers: ["Precepto LTAIBG", "Sujetos comprendidos", "Alcance de sus obligaciones legales"],
          rows: [
            [
              "Art. 2.1 (Letras a-d)",
              "AGE, CCAA, Entidades Locales (Ayuntamiento de Pinoso), Seguridad Social, Organismos Autónomos, Agencias, EPE, Autoridades independientes y Universidades públicas.",
              "Consideradas 'Administraciones Públicas' (art. 2.2). Sujeción total al Título I: Publicidad Activa + Derecho de Acceso.",
            ],
            [
              "Art. 2.1 (Letras e-f)",
              "Corporaciones de Derecho Público, Casa del Rey, Congreso, Senado, TC, CGPJ, Banco de España, Consejo de Estado, Defensor del Pueblo, Tribunal de Cuentas, CES e instituciones autonómicas análogas.",
              "Sujeción a Publicidad Activa y Derecho de Acceso SOLO en lo relativo a sus actividades sujetas a Derecho Administrativo.",
            ],
            [
              "Art. 2.1 (Letras g-i)",
              "Sociedades mercantiles con participación pública > 50 %, fundaciones del sector público y asociaciones constituidas por AAPP.",
              "Sujeción al Título I (con particularidades en la resolución de solicitudes de acceso art. 20.5).",
            ],
            [
              "Art. 3 ('Otros sujetos obligados')",
              "a) Partidos políticos, sindicatos y organizaciones empresariales. b) Entidades privadas con subvenciones anuales > 100.000 € o >= 40 % de sus ingresos anuales si alcanzan al menos 5.000 €.",
              "Sujetos ÚNICAMENTE a las obligaciones de Publicidad Activa (Capítulo II del Título I, arts. 5 a 11).",
            ],
            [
              "Art. 4 (Obligados a suministrar)",
              "Personas físicas o jurídicas que presten servicios públicos o ejerzan potestades administrativas y adjudicatarios de contratos del sector público.",
              "Obligados a suministrar información, previo requerimiento, a la Administración del art. 2.1 a la que estén vinculados.",
            ],
          ],
        },
        highlights: [
          {
            title: "Cifras clave de examen en los Artículos 2.1.g) y 3.b) LTAIBG",
            type: "trampa",
            items: [
              "Sociedades mercantiles (art. 2.1.g): deben tener participación pública directa o indirecta SUPERIOR AL 50 % (más del 50 %, no basta el 50 % exacto).",
              "Entidades privadas subvencionadas (art. 3.b): percibir en 1 año ayudas o subvenciones públicas SUPERIORES A 100.000 €, O bien cuando al menos el 40 % de sus ingresos anuales sean ayudas públicas y alcancen COMO MÍNIMO 5.000 €.",
            ],
          },
        ],
      },
      {
        title: "3. Síntesis de Publicidad Activa, Derecho de Acceso y Buen Gobierno (Títulos I y II)",
        content: [
          "Dentro del Título I, el Capítulo II (arts. 5 a 11) regula la Publicidad Activa, que obliga a publicar de forma periódica, actualizada, clara, estructurada, reutilizable, gratuita y accesible a las personas con discapacidad tres grandes bloques de información: 1) Información institucional, organizativa y de planificación (art. 6); 2) Información de relevancia jurídica (art. 7: directrices, instrucciones, anteproyectos de ley, proyectos de reglamentos y memorias); y 3) Información económica, presupuestaria y estadística (art. 8: todos los contratos, convenios, encomiendas de gestión, subvenciones, presupuestos, cuentas anuales, retribuciones de altos cargos e indemnizaciones por abandono del cargo). En la AGE se articula a través del Portal de la Transparencia (art. 10).",
          "El Capítulo III del Título I (arts. 12 a 24) regula el Derecho de acceso a la información pública. Todas las personas tienen derecho a acceder a la información pública (art. 12), entendida como los contenidos o documentos, cualquiera que sea su formato o soporte, que obren en poder de alguno de los sujetos incluidos en el ámbito de aplicación de este título y que hayan sido elaborados o adquiridos en el ejercicio de sus funciones (art. 13).",
          "El derecho de acceso solo puede ser limitado por las causas tasadas del artículo 14 (seguridad nacional, defensa, relaciones exteriores, seguridad pública, prevención/investigación de ilícitos, igualdad de las partes en procesos judiciales, funciones de vigilancia/inspección, intereses económicos y comerciales, política económica y monetaria, secreto profesional y propiedad intelectual/industrial, garantía de la confidencialidad en la toma de decisiones y protección del medio ambiente) y por la protección de datos personales del artículo 15 (aplicando la ponderación entre interés público y derechos de los afectados, o concediendo el acceso previa disociación/anonimización de los datos personales).",
          "En cuanto al procedimiento de ejercicio del derecho de acceso (arts. 17 a 24 LTAIBG): el solicitante NO está obligado a motivar su solicitud de acceso a la información (art. 17.3); si afecta a derechos o intereses de terceros identificados se les concede un plazo de 15 días para formular alegaciones (art. 19.3); la resolución deberá notificarse en el plazo máximo de UN (1) MES desde la recepción de la solicitud por el órgano competente para resolver, ampliable por otro mes en el caso de que el volumen o la complejidad de la información que se solicita así lo hagan necesario (art. 20.1); y, conforme al artículo 20.4 LTAIBG, transcurrido el plazo máximo para resolver sin que se haya dictado y notificado resolución expresa se entenderá que la solicitud ha sido DESESTIMADA (silencio administrativo negativo). Frente a toda resolución expresa o presunta en materia de acceso podrá interponerse una reclamación ante el Consejo de Transparencia y Buen Gobierno, con carácter potestativo y previo a su impugnación en vía contencioso-administrativa (sustitutiva de los recursos administrativos), en el plazo de UN (1) MES, siendo el plazo máximo para resolver y notificar la reclamación de TRES (3) MESES, transcurrido el cual se entenderá desestimada (art. 24).",
          "Por su parte, el Título II (arts. 25 a 32) regula el Buen Gobierno aplicable a los miembros del Gobierno, Secretarios de Estado y altos cargos de la AGE, de las CCAA y de las Entidades Locales (incluidos los miembros de las Juntas de Gobierno Local de municipios de gran población). Recoge los principios generales y de actuación (art. 26) y tipifica las infracciones en materia de conflicto de intereses (art. 27), de gestión económico-presupuestaria (art. 28) y disciplinarias (art. 29), cuyas sanciones (destitución del cargo, no percepción de pensión indemnizatoria, obligación de restituir cantidades e inhabilitación de 5 a 10 años para ocupar alto cargo) prescriben, al igual que las infracciones, a los 3 años (muy graves), 2 años (graves) y 1 año (leves) conforme al artículo 32.",
        ],
        highlights: [
          {
            title: "Ley 19/2013 Estatal vs. Ley 1/2022 de la Comunitat Valenciana",
            type: "importante",
            items: [
              "En la Ley estatal 19/2013 (art. 20.4), el silencio administrativo ante una solicitud de acceso a la información pública es NEGATIVO (desestimatorio).",
              "En cambio, en el ámbito autonómico y local valenciano, la Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana (art. 34), configura el silencio administrativo como POSITIVO (estimatorio) con carácter general salvo las excepciones legales, y su órgano independiente de garantía es el Consell Valencià de Transparència.",
              "En el examen, presta máxima atención a si la pregunta cita expresamente 'según la Ley 19/2013, de 9 de diciembre' (en cuyo caso la respuesta correcta es siempre silencio desestimatorio del art. 20.4 LTAIBG).",
            ],
          },
        ],
      },
      {
        title: "4. El Consejo de Transparencia y Buen Gobierno: Naturaleza, Composición y Funciones (Arts. 33 a 40 LTAIBG)",
        content: [
          "El Título III de la Ley 19/2013 (artículos 33 a 40), desarrollado actualmente por su nuevo Estatuto aprobado mediante el Real Decreto 615/2024, de 2 de julio (que derogó el anterior RD 919/2014), regula el Consejo de Transparencia y Buen Gobierno (en adelante, CTBG).",
          "Conforme al artículo 33 LTAIBG y a la Ley 40/2015 (LRJSP), el CTBG tiene la naturaleza jurídica de autoridad administrativa independiente (A.A.I.) de ámbito estatal, con personalidad jurídica propia y plena capacidad de obrar, que actúa con autonomía y plena independencia en el cumplimiento de sus fines. Está adscrito orgánicamente al Ministerio para la Transformación Digital y de la Función Pública.",
          "Según el artículo 34 LTAIBG, el Consejo de Transparencia y Buen Gobierno tiene por finalidad promover la transparencia de la actividad pública, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la información pública y garantizar la observancia de las disposiciones de buen gobierno.",
          "En cuanto a su composición (art. 35 LTAIBG), el CTBG está integrado por dos órganos de gobierno:\n1. La Comisión de Transparencia y Buen Gobierno (art. 36): órgano colegiado compuesto por el Presidente del CTBG (que la preside) y SIETE (7) VOCALES: a) Un Diputado; b) Un Senador; c) Un representante del Tribunal de Cuentas; d) Un representante del Defensor del Pueblo; e) Un representante de la Agencia Española de Protección de Datos; f) Un representante de la Secretaría de Estado de Función Pública; y g) Un representante de la Autoridad Independiente de Responsabilidad Fiscal (AIReF). La condición de miembro de la Comisión no exige dedicación exclusiva ni da derecho a remuneración, y se convoca al menos una vez al año.\n2. El Presidente del Consejo de Transparencia y Buen Gobierno (art. 37): es nombrado por un período NO RENOVABLE de CINCO (5) AÑOS mediante Real Decreto del Consejo de Ministros, a propuesta del titular del Ministerio con competencias en Función Pública, entre personas de reconocido prestigio y competencia profesional, previa comparecencia de la persona propuesta ante la Comisión correspondiente del Congreso de los Diputados, que deberá refrendar el nombramiento por MAYORÍA ABSOLUTA en el plazo de un mes natural desde la recepción de la comunicación. Solo cesa por expiración de su mandato, a petición propia, por separación acordada por el Gobierno por incumplimiento grave de sus obligaciones, incapacidad permanente, incompatibilidad sobrevenida o condena por delito doloso.",
          "El artículo 38 de la LTAIBG regula de forma diferenciada las funciones del Consejo de Transparencia y Buen Gobierno (apartado 1) y las funciones específicas de su Presidente (apartado 2), distinción que constituye una de las preguntas más recurrentes en los exámenes oficiales:",
          "- Funciones del Consejo de Transparencia y Buen Gobierno (art. 38.1 LTAIBG):\n  a) Adoptar recomendaciones para el mejor cumplimiento de las obligaciones contenidas en esta Ley.\n  b) Asesorar en materia de transparencia, acceso a la información pública y buen gobierno.\n  c) Informar preceptivamente los proyectos normativos de carácter estatal que desarrollen esta Ley o que estén relacionados con su objeto.\n  d) Evaluar el grado de aplicación de esta Ley. Para ello, elaborará anualmente una memoria en la que se incluirá información sobre el cumplimiento de las obligaciones previstas y que será presentada ante las Cortes Generales.\n  e) Promover la elaboración de borradores de recomendaciones y de directrices y normas de desarrollo de buenas prácticas en materia de transparencia, acceso a la información pública y buen gobierno.\n  f) Promover actividades de formación y sensibilización para un mejor conocimiento de las materias reguladas por esta Ley.\n  g) Colaborar, en las materias que le son propias, con órganos de naturaleza análoga.\n  h) Aquellas otras que le sean atribuidas por norma de rango legal o reglamentario.",
          "- Funciones del Presidente del Consejo de Transparencia y Buen Gobierno (art. 38.2 LTAIBG):\n  a) Adoptar criterios de interpretación uniforme de las obligaciones contenidas en esta Ley.\n  b) Velar por el cumplimiento de las obligaciones de publicidad contenidas en el capítulo II del título I de acuerdo con lo previsto en el artículo 9.\n  c) Conocer de las reclamaciones que se presenten en aplicación del artículo 24 de esta Ley.\n  d) Responder las consultas que, con carácter facultativo, le planteen los órganos encargados de tramitar y resolver las solicitudes de acceso a la información.\n  e) Instar el inicio del procedimiento sancionador previsto en el título II de esta Ley. El órgano competente deberá motivar, en su caso, su decisión de no incoar el procedimiento.\n  f) Aprobar el anteproyecto de presupuesto.\n  g) Aquellas otras que le sean atribuidas por norma de rango legal o reglamentario.",
          "Finalmente, el artículo 40 LTAIBG regula las relaciones con las Cortes Generales: el Consejo de Transparencia y Buen Gobierno elevará anualmente a las Cortes Generales una memoria sobre el desarrollo de sus actividades y sobre el grado de cumplimiento de las disposiciones establecidas en esta Ley, compareciendo su Presidente ante la Comisión correspondiente para dar cuenta de tal memoria, así como cuantas veces sea requerido para ello.",
        ],
        table: {
          headers: ["Funciones del Consejo (Art. 38.1 LTAIBG)", "Funciones del Presidente del CTBG (Art. 38.2 LTAIBG)"],
          rows: [
            [
              "a) Adoptar recomendaciones para el mejor cumplimiento de la Ley.",
              "a) Adoptar criterios de interpretación uniforme de las obligaciones de la Ley.",
            ],
            [
              "b) Asesorar en materia de transparencia, acceso a la información y buen gobierno.",
              "b) Velar por el cumplimiento de las obligaciones de publicidad activa (Cap. II Título I).",
            ],
            [
              "c) Informar preceptivamente los proyectos normativos estatales que desarrollen la Ley.",
              "c) Conocer de las reclamaciones que se presenten en aplicación del artículo 24.",
            ],
            [
              "d) Evaluar el grado de aplicación de la Ley y elaborar anualmente la memoria para las Cortes Generales.",
              "d) Responder las consultas facultativas de los órganos encargados de tramitar solicitudes de acceso.",
            ],
            [
              "e) Promover borradores de recomendaciones, directrices y buenas prácticas.",
              "e) Instar el inicio del procedimiento sancionador previsto en el Título II (Buen Gobierno).",
            ],
            [
              "f) Promover actividades de formación y sensibilización, y g) Colaborar con órganos análogos.",
              "f) Aprobar el anteproyecto de presupuesto del Consejo.",
            ],
          ],
        },
      },
    ],
    esquemaVisual: {
      title: "Arquitectura de la Ley 19/2013 (LTAIBG) y del Consejo de Transparencia y Buen Gobierno",
      nodes: [
        {
          label: "Estructura y Triple Objeto (Art. 1)",
          children: [
            "Fundamento: Art. 105.b) CE y Arts. 9.3, 20.1.d y 23 CE",
            "Estructura: Título Preliminar + 3 Títulos (40 artículos)",
            "Objeto 1º: Ampliar y reforzar la transparencia de la actividad pública (publicidad activa)",
            "Objeto 2º: Reconocer y garantizar el derecho de acceso a la información pública",
            "Objeto 3º: Establecer las obligaciones de buen gobierno y las consecuencias de su incumplimiento",
          ],
        },
        {
          label: "Ámbito Subjetivo (Arts. 2, 3 y 4)",
          children: [
            "Art. 2.1: AGE, CCAA, Entidades Locales (Pinoso), Seguridad Social, OOAA, Universidades, Corporaciones Dº Público y Órganos Constitucionales (en lo sujeto a Dº Administrativo), sociedades mercantiles (>50% público), fundaciones públicas y asociaciones de AAPP",
            "Art. 3 (Solo Publicidad Activa): Partidos, sindicatos y patronales; y entidades privadas con subvenciones anuales >100.000 € o >=40% de sus ingresos anuales (mínimo 5.000 €)",
            "Art. 4 (Suministro previo requerimiento): Prestadores de servicios públicos y adjudicatarios de contratos",
          ],
        },
        {
          label: "Derecho de Acceso y Buen Gobierno",
          children: [
            "Derecho de acceso (Arts. 12-24): Sin obligación de motivar (Art. 17.3); audiencia a terceros 15 días (Art. 19.3)",
            "Resolución (Art. 20): Plazo de 1 MES (ampliable 1 mes más); silencio administrativo DESESTIMATORIO / negativo (Art. 20.4)",
            "Reclamación ante CTBG (Art. 24): Potestativa y previa a vía contencioso-administrativa; interposición en 1 mes; resolución en 3 meses",
            "Buen Gobierno (Arts. 25-32): Altos cargos; prescripción muy graves 3 años, graves 2 años y leves 1 año",
          ],
        },
        {
          label: "Consejo de Transparencia y Buen Gobierno (Arts. 33-40)",
          children: [
            "Naturaleza (Art. 33 y RD 615/2024): Autoridad Administrativa Independiente con personalidad jurídica propia y plena capacidad de obrar",
            "Comisión de Transparencia y Buen Gobierno (Art. 36): Presidente + 7 vocales (Diputado, Senador, T. Cuentas, Defensor del Pueblo, AEPD, SE Función Pública y AIReF)",
            "Presidente del CTBG (Art. 37): Nombrado por Real Decreto por 5 AÑOS NO RENOVABLES, con refrendo del Congreso por mayoría absoluta",
            "Funciones (Art. 38): Del Consejo (Art. 38.1: recomendaciones, asesorar, informar proyectos, memoria anual Cortes) y del Presidente (Art. 38.2: criterios uniformes, reclamaciones Art. 24, instar sancionador Título II, anteproyecto presupuesto)",
          ],
        },
      ],
    },
    datosOro: [
      "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (LTAIBG): desarrolla el art. 105.b) CE y consta de 40 artículos distribuidos en un Título Preliminar y 3 Títulos.",
      "Art. 1 LTAIBG (Triple objeto): 1) Ampliar y reforzar la transparencia de la actividad pública; 2) Reconocer y garantizar el derecho de acceso a la información pública; y 3) Establecer las obligaciones de buen gobierno y las consecuencias de su incumplimiento.",
      "Art. 2.1.g) y Art. 3.b) LTAIBG: Están sujetas las sociedades mercantiles con participación pública SUPERIOR al 50 %; y en el art. 3.b) las entidades privadas que perciban en un año ayudas o subvenciones públicas superiores a 100.000 € o cuando al menos el 40 % de sus ingresos anuales tengan carácter de ayuda pública y alcancen como mínimo 5.000 €.",
      "Art. 17.3 y Art. 20 LTAIBG: El solicitante no está obligado a motivar su solicitud de acceso; el plazo para resolver y notificar es de 1 MES (ampliable por otro mes por volumen o complejidad) y el silencio administrativo es DESESTIMATORIO (negativo).",
      "Art. 24 LTAIBG: La reclamación ante el CTBG es potestativa y previa a la vía contencioso-administrativa; se interpone en el plazo de 1 MES y se resuelve y notifica en el plazo máximo de 3 MESES (con silencio negativo).",
      "Art. 36 y 37 LTAIBG: El Presidente del CTBG es nombrado por un período NO RENOVABLE de 5 AÑOS mediante Real Decreto, previo refrendo de la Comisión del Congreso por mayoría absoluta. La Comisión de Transparencia y Buen Gobierno está integrada por el Presidente y 7 miembros (Diputado, Senador, Tribunal de Cuentas, Defensor del Pueblo, AEPD, Secretaría de Estado de Función Pública y AIReF).",
      "Art. 38.2 LTAIBG: Corresponde específicamente al Presidente del CTBG (y no a la Comisión) conocer de las reclamaciones del artículo 24, adoptar criterios de interpretación uniforme, velar por las obligaciones de publicidad activa, instar el inicio del procedimiento sancionador del Título II y aprobar el anteproyecto de presupuesto.",
    ],
    temaDesarrollo: {
      introduccion:
        "La transparencia, el acceso a la información pública y las normas de buen gobierno constituyen los ejes fundamentales de toda acción política y administrativa en un Estado social y democrático de Derecho. En nuestro ordenamiento constitucional, el artículo 105.b) de la Constitución Española de 1978 encomienda al legislador regular el acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecte a la seguridad y defensa del Estado, la averiguación de los delitos y la intimidad de las personas, precepto estrechamente vinculado con el derecho de participación en los asuntos públicos (arts. 9.2 y 23.1 CE) y con la eficacia y objetividad de la Administración Pública (art. 103.1 CE). En desarrollo de este mandato se promulgó la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (LTAIBG), norma básica que somete al escrutinio ciudadano la acción de todos los poderes públicos —incluidas las Entidades Locales como el Ayuntamiento de Pinoso— y que crea como garante independiente al Consejo de Transparencia y Buen Gobierno.",
      estructuraEpigrafes: [
        {
          epigraph: "1. La Ley 19/2013, de 9 de diciembre: Estructura y Triple Objeto (Artículo 1)",
          body: "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (LTAIBG), se estructura en un Preámbulo, un Título Preliminar (art. 1), tres Títulos numerados (Título I 'Transparencia de la actividad pública', arts. 2 a 24; Título II 'Buen gobierno', arts. 25 a 32; y Título III 'El Consejo de Transparencia y Buen Gobierno', arts. 33 a 40), con un total de 40 artículos, 8 Disposiciones Adicionales y 9 Disposiciones Finales.\n\nDe acuerdo con su artículo 1, la Ley tiene un triple objeto:\n1) En primer lugar, ampliar y reforzar la transparencia de la actividad pública, lo que se instrumenta a través de las obligaciones de publicidad activa (Capítulo II del Título I, arts. 5 a 11), difundiendo de oficio información institucional, organizativa, de planificación, de relevancia jurídica y económica, presupuestaria y estadística.\n2) En segundo lugar, reconocer y garantizar el derecho de acceso a la información relativa a aquella actividad (Capítulo III del Título I, arts. 12 a 24), configurado como un verdadero derecho subjetivo de todas las personas sin necesidad de motivar la solicitud (art. 17.3), cuyo plazo de resolución es de un mes ampliable por otro mes y con silencio administrativo desestimatorio en la ley estatal (art. 20).\n3) En tercer lugar, establecer las obligaciones de buen gobierno que deben cumplir los responsables públicos (altos cargos estatales, autonómicos y locales), así como las consecuencias jurídicas e infracciones derivadas de su incumplimiento (Título II, arts. 25 a 32).",
        },
        {
          epigraph: "2. Ámbito Subjetivo de Aplicación (Artículos 2, 3 y 4 LTAIBG)",
          body: "El Capítulo I del Título I de la LTAIBG (artículos 2, 3 y 4) delimita de forma exhaustiva el ámbito subjetivo de aplicación de la norma distinguiendo tres categorías de sujetos obligados:\n\n1. Administraciones, organismos y entidades públicas del artículo 2.1 (sujetos plenamente al Título I, tanto en publicidad activa como en derecho de acceso):\n- a) La Administración General del Estado, las Administraciones de las Comunidades Autónomas (como la Generalitat Valenciana), Ceuta y Melilla, y las Entidades que integran la Administración Local (como el Ayuntamiento de Pinoso).\n- b) Las entidades gestoras y los servicios comunes de la Seguridad Social, así como las mutuas colaboradoras.\n- c) Los organismos autónomos, las Agencias Estatales, las entidades públicas empresariales y las entidades de Derecho Público con independencia funcional o funciones de regulación o supervisión externa.\n- d) Las entidades de Derecho Público con personalidad jurídica propia vinculadas o dependientes de las Administraciones Públicas, incluidas las Universidades públicas (los sujetos de las letras a) a d) tienen la consideración de 'Administraciones Públicas' según el art. 2.2).\n- e) Las corporaciones de Derecho Público, en lo relativo a sus actividades sujetas a Derecho Administrativo.\n- f) La Casa de S.M. el Rey, el Congreso de los Diputados, el Senado, el Tribunal Constitucional y el Consejo General del Poder Judicial, así como el Banco de España, el Consejo de Estado, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo Económico y Social y las instituciones autonómicas análogas, en relación con sus actividades sujetas a Derecho Administrativo.\n- g) Las sociedades mercantiles en cuyo capital social la participación pública, directa o indirecta, sea superior al 50 por 100.\n- h) Las fundaciones del sector público.\n- i) Las asociaciones constituidas por las Administraciones, organismos y entidades previstos en este artículo (incluidos los órganos de cooperación con presupuesto o medios propios).\n\n2. Otros sujetos obligados del artículo 3 (sujetos exclusivamente a las obligaciones de publicidad activa del Capítulo II del Título I):\n- a) Los partidos políticos, las organizaciones sindicales y las organizaciones empresariales.\n- b) Las entidades privadas que perciban durante el período de un año ayudas o subvenciones públicas en una cuantía superior a 100.000 euros o cuando al menos el 40 por 100 del total de sus ingresos anuales tengan carácter de ayuda o subvención pública, siempre que alcancen como mínimo la cantidad de 5.000 euros.\n\n3. Sujetos obligados a suministrar información del artículo 4: las personas físicas y jurídicas distintas de las anteriores que presten servicios públicos o ejerzan potestades administrativas, así como los adjudicatarios de contratos del sector público, están obligados a suministrar a la Administración o entidad del artículo 2.1 a la que se encuentren vinculados, previo requerimiento, toda la información necesaria para el cumplimiento de las obligaciones del Título I.",
        },
        {
          epigraph: "3. El Consejo de Transparencia y Buen Gobierno: Naturaleza, Finalidad y Composición (Arts. 33 a 37)",
          body: "El Título III de la Ley 19/2013 (artículos 33 a 40), desarrollado por su vigente Estatuto aprobado por el Real Decreto 615/2024, de 2 de julio, regula el Consejo de Transparencia y Buen Gobierno (CTBG). Conforme al artículo 33 LTAIBG, el Consejo se crea como una autoridad administrativa independiente con personalidad jurídica propia y plena capacidad de obrar, que actúa con autonomía y plena independencia en el cumplimiento de sus fines.\n\nDe acuerdo con el artículo 34, su finalidad cuádruple consiste en: 1) promover la transparencia de la actividad pública, 2) velar por el cumplimiento de las obligaciones de publicidad, 3) salvaguardar el ejercicio del derecho de acceso a la información pública y 4) garantizar la observancia de las disposiciones de buen gobierno.\n\nConforme al artículo 35, el CTBG está compuesto por dos órganos:\n- La Comisión de Transparencia y Buen Gobierno (art. 36), presidida por el Presidente del Consejo e integrada por siete vocales: un Diputado, un Senador, un representante del Tribunal de Cuentas, un representante del Defensor del Pueblo, un representante de la Agencia Española de Protección de Datos, un representante de la Secretaría de Estado de Función Pública y un representante de la Autoridad Independiente de Responsabilidad Fiscal (AIReF). Sus miembros no tienen dedicación exclusiva ni perciben remuneración por ello, reuniéndose al menos una vez al año.\n- El Presidente del Consejo de Transparencia y Buen Gobierno (art. 37), que es nombrado por un período no renovable de cinco años mediante Real Decreto, a propuesta del titular del Ministerio competente en Función Pública, entre personas de reconocido prestigio y competencia profesional, previa comparecencia ante la Comisión correspondiente del Congreso de los Diputados, que deberá refrendar el nombramiento por mayoría absoluta en el plazo de un mes natural.",
        },
        {
          epigraph: "4. Funciones del Consejo de Transparencia y Buen Gobierno y de su Presidente (Art. 38) y Marco Valenciano",
          body: "El artículo 38 de la LTAIBG deslinda las funciones del Consejo como institución (apartado 1) y las funciones ejecutivas y resolutorias atribuidas a su Presidente (apartado 2).\n\n1. Funciones del Consejo de Transparencia y Buen Gobierno (art. 38.1 LTAIBG):\na) Adoptar recomendaciones para el mejor cumplimiento de las obligaciones contenidas en la Ley.\nb) Asesorar en materia de transparencia, acceso a la información pública y buen gobierno.\nc) Informar preceptivamente los proyectos normativos de carácter estatal que desarrollen esta Ley o que estén relacionados con su objeto.\nd) Evaluar el grado de aplicación de esta Ley, elaborando anualmente una memoria sobre el cumplimiento de las obligaciones previstas que será presentada ante las Cortes Generales (art. 40).\ne) Promover la elaboración de borradores de recomendaciones y de directrices y normas de desarrollo de buenas prácticas.\nf) Promover actividades de formación y sensibilización para un mejor conocimiento de las materias reguladas por la Ley.\ng) Colaborar, en las materias que le son propias, con órganos de naturaleza análoga.\nh) Aquellas otras que le sean atribuidas por norma de rango legal o reglamentario.\n\n2. Funciones del Presidente del Consejo de Transparencia y Buen Gobierno (art. 38.2 LTAIBG):\na) Adoptar criterios de interpretación uniforme de las obligaciones contenidas en esta Ley.\nb) Velar por el cumplimiento de las obligaciones de publicidad contenidas en el Capítulo II del Título I de acuerdo con lo previsto en el artículo 9.\nc) Conocer de las reclamaciones que se presenten en aplicación del artículo 24 de esta Ley (reclamación potestativa y previa a la vía contencioso-administrativa en materia de derecho de acceso).\nd) Responder las consultas que, con carácter facultativo, le planteen los órganos encargados de tramitar y resolver las solicitudes de acceso a la información.\ne) Instar el inicio del procedimiento sancionador previsto en el Título II de esta Ley (debiendo el órgano competente motivar, en su caso, su decisión de no incoar el procedimiento).\nf) Aprobar el anteproyecto de presupuesto.\ng) Aquellas otras que le sean atribuidas legal o reglamentariamente.\n\nPor último, en el ámbito autonómico y local de la Comunitat Valenciana (al amparo de la Disposición Adicional 4ª de la Ley 19/2013), rige de forma complementaria la Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana, que encomienda la resolución de las reclamaciones autonómicas y locales (incluidas las relativas al Ayuntamiento de Pinoso) al Consell Valencià de Transparència.",
        },
      ],
      conclusion:
        "En conclusión, la Ley 19/2013, de 9 de diciembre, representa un hito histórico en la modernización democrática de las Administraciones Públicas españolas al articular en un único texto normativo la publicidad activa, el derecho subjetivo de acceso a la información pública y las reglas de buen gobierno, bajo la tutela independiente del Consejo de Transparencia y Buen Gobierno. En el ámbito municipal y en la gestión de servicios educativos como la Escuela Infantil del Ayuntamiento de Pinoso, la transparencia en los procesos de admisión, contratación, presupuestos y cartas de servicios fortalece la confianza de las familias en las instituciones públicas.",
      bibliografiaYNormativa: [
        "Constitución Española de 1978 (artículos 9.3, 20.1.d, 23 y 105.b).",
        "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (BOE núm. 295, de 10 de diciembre de 2013).",
        "Real Decreto 615/2024, de 2 de julio, por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno, A.A.I.",
        "Ley 1/2022, de 13 de abril, de la Generalitat, de Transparencia y Buen Gobierno de la Comunitat Valenciana.",
      ],
      consejosTribunal: [
        "Enuncia con exactitud literal los tres elementos del objeto de la Ley 19/2013 contenidos en su artículo 1 (transparencia/publicidad activa, derecho de acceso a la información pública y obligaciones de buen gobierno).",
        "Memoriza las cifras exactas de los artículos 2.1.g) (> 50 % de participación pública en sociedades mercantiles) y 3.b) (entidades privadas con subvenciones > 100.000 € anuales o al menos el 40 % de sus ingresos anuales con un mínimo de 5.000 €).",
        "Diferencia con claridad las funciones del Consejo (art. 38.1: recomendaciones, asesorar, informar proyectos normativos, memoria anual, formación) de las funciones exclusivas de su Presidente (art. 38.2: criterios de interpretación uniforme, resolver reclamaciones del art. 24, instar el procedimiento sancionador del Título II y aprobar el anteproyecto de presupuesto).",
      ],
    },
    questions: [
      {
        id: "t9-q1",
        topicId: 9,
        question:
          "De acuerdo con el artículo 1 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno (LTAIBG), ¿cuál es el triple objeto de dicha Ley?",
        options: [
          "Regular el procedimiento administrativo común, el régimen jurídico del sector público y la jurisdicción contencioso-administrativa.",
          "Ampliar y reforzar la transparencia de la actividad pública, reconocer y garantizar el derecho de acceso a la información relativa a aquella actividad y establecer las obligaciones de buen gobierno que deben cumplir los responsables públicos así como las consecuencias derivadas de su incumplimiento.",
          "Adaptar el ordenamiento jurídico español al Reglamento General de Protección de Datos, crear los ficheros de titularidad pública y regular los derechos digitales.",
          "Fiscalizar las cuentas de los partidos políticos, controlar el gasto electoral y nombrar al Defensor del Pueblo.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 1 de la Ley 19/2013 dispone textualmente que esta Ley tiene por objeto ampliar y reforzar la transparencia de la actividad pública, regular y garantizar el derecho de acceso a la información relativa a aquella actividad y establecer las obligaciones de buen gobierno que deben cumplir los responsables públicos así como las consecuencias derivadas de su incumplimiento.",
        reference: "Art. 1 Ley 19/2013 (LTAIBG)",
        difficulty: "basica",
      },
      {
        id: "t9-q2",
        topicId: 9,
        question:
          "Según el artículo 2.1.g) de la Ley 19/2013, las disposiciones del Título I se aplicarán a las sociedades mercantiles en cuyo capital social la participación, directa o indirecta, de las entidades previstas en dicho artículo sea:",
        options: [
          "Igual o superior al 25 por 100.",
          "Igual o superior al 50 por 100.",
          "Superior al 50 por 100.",
          "Del 100 por 100 exclusivamente.",
        ],
        correctIndex: 2,
        explanation:
          "El artículo 2.1.g) de la Ley 19/2013 incluye en su ámbito subjetivo a las sociedades mercantiles en cuyo capital social la participación, directa o indirecta, de las entidades previstas en este artículo sea superior al 50 por 100.",
        reference: "Art. 2.1.g) Ley 19/2013 (LTAIBG)",
        difficulty: "media",
      },
      {
        id: "t9-q3",
        topicId: 9,
        question:
          "Conforme al artículo 3.b) de la Ley 19/2013, ¿cuándo están sujetas las entidades privadas a las obligaciones de publicidad activa del Capítulo II del Título I?",
        options: [
          "Siempre que tengan más de 50 trabajadores en plantilla, aunque no reciban subvenciones públicas.",
          "Cuando perciban durante el período de un año ayudas o subvenciones públicas en una cuantía superior a 100.000 euros o cuando al menos el 40 % del total de sus ingresos anuales tengan carácter de ayuda o subvención pública, siempre que alcancen como mínimo la cantidad de 5.000 euros.",
          "Cuando perciban durante el período de un año subvenciones públicas superiores a 50.000 euros o el 20 % de sus ingresos anuales con un mínimo de 3.000 euros.",
          "Cuando contraten cualquier suministro menor con un Ayuntamiento por importe superior a 1.000 euros.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 3.b) de la Ley 19/2013 sujeta a publicidad activa a las entidades privadas que perciban durante el período de un año ayudas o subvenciones públicas en una cuantía superior a 100.000 euros o cuando al menos el 40 % del total de sus ingresos anuales tengan carácter de ayuda o subvención pública, siempre que alcancen como mínimo la cantidad de 5.000 euros.",
        reference: "Art. 3.b) Ley 19/2013 (LTAIBG)",
        difficulty: "alta",
      },
      {
        id: "t9-q4",
        topicId: 9,
        question:
          "De acuerdo con el artículo 2.1.f) de la Ley 19/2013, órganos como la Casa de su Majestad el Rey, el Congreso de los Diputados, el Senado, el Tribunal Constitucional, el Consejo General del Poder Judicial o el Defensor del Pueblo están sujetos a las disposiciones del Título I:",
        options: [
          "En la totalidad de sus funciones constitucionales, jurisdiccionales y parlamentarias sin excepción.",
          "Únicamente en relación con sus actividades sujetas a Derecho Administrativo.",
          "Solo en lo relativo a las obligaciones de buen gobierno del Título II, estando exentos del Título I.",
          "En ningún caso, por gozar de inviolabilidad e inmunidad constitucional.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 2.1.f) de la Ley 19/2013 incluye a la Casa de S.M. el Rey, Congreso, Senado, TC, CGPJ, Banco de España, Consejo de Estado, Defensor del Pueblo, Tribunal de Cuentas, CES e instituciones autonómicas análogas 'en relación con sus actividades sujetas a Derecho Administrativo'.",
        reference: "Art. 2.1.f) Ley 19/2013 (LTAIBG)",
        difficulty: "media",
      },
      {
        id: "t9-q5",
        topicId: 9,
        question:
          "Según el artículo 17.3 de la Ley 19/2013, en relación con la solicitud de acceso a la información pública:",
        options: [
          "El solicitante está obligado a motivar su solicitud y a acreditar la condición de interesado legítimo en un procedimiento administrativo en curso.",
          "El solicitante no está obligado a motivar su solicitud de acceso a la información. Sin embargo, podrá exponer los motivos por los que solicita la información y que podrán ser tenidos en cuenta cuando se dicte la resolución; no obstante, la ausencia de motivación no será por sí sola causa de rechazo de la solicitud.",
          "La solicitud solo puede presentarse mediante firma electrónica avanzada y representación letrada.",
          "La solicitud debe ir acompañada del justificante de abono de la tasa estatal por tramitación de solicitudes de transparencia.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 17.3 de la Ley 19/2013 establece que el solicitante no está obligado a motivar su solicitud de acceso a la información, pudiendo exponer los motivos opcionalmente, sin que la ausencia de motivación sea por sí sola causa de rechazo.",
        reference: "Art. 17.3 Ley 19/2013 (LTAIBG)",
        difficulty: "basica",
      },
      {
        id: "t9-q6",
        topicId: 9,
        question:
          "Conforme al artículo 20.1 y 20.4 de la Ley 19/2013, ¿cuál es el plazo máximo para resolver y notificar una solicitud de acceso a la información pública y cuál es el sentido del silencio administrativo si transcurre dicho plazo sin resolución expresa?",
        options: [
          "1 mes (ampliable por otro mes por volumen o complejidad), con silencio administrativo desestimatorio.",
          "3 meses improrrogables, con silencio administrativo estimatorio.",
          "15 días hábiles (ampliables por otros 15 días), con silencio administrativo estimatorio.",
          "6 meses, produciéndose la caducidad del procedimiento.",
        ],
        correctIndex: 0,
        explanation:
          "Según el artículo 20.1 de la Ley 19/2013, la resolución deberá notificarse en el plazo máximo de un mes desde la recepción de la solicitud por el órgano competente para resolver, plazo que podrá ampliarse por otro mes en el caso de que el volumen o la complejidad de la información así lo hagan necesario. Y según el artículo 20.4, transcurrido el plazo máximo sin haberse dictado y notificado resolución expresa se entenderá que la solicitud ha sido desestimada.",
        reference: "Art. 20.1 y 20.4 Ley 19/2013 (LTAIBG)",
        difficulty: "basica",
      },
      {
        id: "t9-q7",
        topicId: 9,
        question:
          "De acuerdo con el artículo 24 de la Ley 19/2013, frente a toda resolución expresa o presunta en materia de acceso a la información pública podrá interponerse una reclamación ante el Consejo de Transparencia y Buen Gobierno:",
        options: [
          "Con carácter obligatorio y en el plazo de 15 días hábiles, siendo el plazo máximo para resolverla de 1 mes.",
          "Con carácter potestativo y previo a su impugnación en vía contencioso-administrativa, en el plazo de un mes, siendo el plazo máximo para resolver y notificar la reclamación de tres meses, transcurrido el cual se entenderá desestimada.",
          "Exclusivamente cuando la solicitud haya sido denegada por el Consejo de Ministros, en el plazo de 2 meses.",
          "Directamente ante la Sala de lo Penal del Tribunal Supremo en el plazo de 10 días.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 24.1, 24.2 y 24.4 de la Ley 19/2013 regula la reclamación ante el CTBG con carácter potestativo y previo a la vía contencioso-administrativa: se interpone en el plazo de un mes y el plazo máximo para resolver y notificar es de tres meses, transcurrido el cual se entenderá desestimada.",
        reference: "Art. 24 Ley 19/2013 (LTAIBG)",
        difficulty: "media",
      },
      {
        id: "t9-q8",
        topicId: 9,
        question:
          "Según el artículo 37 de la Ley 19/2013, el Presidente del Consejo de Transparencia y Buen Gobierno será nombrado:",
        options: [
          "Por un período renovable de 4 años mediante Orden Ministerial, sin intervención de las Cortes Generales.",
          "Por un período no renovable de cinco años mediante Real Decreto, a propuesta del titular del Ministerio competente en Función Pública, previa comparecencia ante la Comisión correspondiente del Congreso de los Diputados, que deberá refrendar el nombramiento por mayoría absoluta.",
          "Por un período de 6 años renovable por otros 6, elegido conjuntamente por el Senado y el Consejo General del Poder Judicial por mayoría de tres quintos.",
          "Con carácter vitalicio e inamovible entre magistrados del Tribunal Constitucional.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 37.1 de la Ley 19/2013 dispone que el Presidente del CTBG será nombrado por un período no renovable de cinco años mediante Real Decreto, entre personas de reconocido prestigio y competencia profesional, previa comparecencia ante la Comisión correspondiente del Congreso de los Diputados, que deberá refrendar el nombramiento por mayoría absoluta en el plazo de un mes natural.",
        reference: "Art. 37.1 Ley 19/2013 (LTAIBG)",
        difficulty: "media",
      },
      {
        id: "t9-q9",
        topicId: 9,
        question:
          "Conforme al artículo 36.2 de la Ley 19/2013, además del Presidente del Consejo de Transparencia y Buen Gobierno, ¿quiénes integran como vocales la Comisión de Transparencia y Buen Gobierno?",
        options: [
          "Un representante de cada una de las 17 Comunidades Autónomas y dos representantes de la FEMP.",
          "Un Diputado, un Senador, un representante del Tribunal de Cuentas, un representante del Defensor del Pueblo, un representante de la Agencia Española de Protección de Datos, un representante de la Secretaría de Estado de Función Pública y un representante de la Autoridad Independiente de Responsabilidad Fiscal.",
          "Cinco Ministros del Gobierno y cinco Magistrados del Tribunal Supremo.",
          "Tres representantes de los sindicatos más representativos y tres de las organizaciones empresariales.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 36.2 de la Ley 19/2013 enumera exactamente a esos siete vocales que, junto con el Presidente, componen la Comisión de Transparencia y Buen Gobierno.",
        reference: "Art. 36.2 Ley 19/2013 (LTAIBG)",
        difficulty: "alta",
      },
      {
        id: "t9-q10",
        topicId: 9,
        question:
          "De acuerdo con el artículo 38.2 de la Ley 19/2013, ¿cuál de las siguientes funciones corresponde específicamente al Presidente del Consejo de Transparencia y Buen Gobierno (y no al Consejo en pleno del art. 38.1)?",
        options: [
          "Informar preceptivamente los proyectos normativos de carácter estatal que desarrollen la Ley.",
          "Conocer de las reclamaciones que se presenten en aplicación del artículo 24 de esta Ley, adoptar criterios de interpretación uniforme e instar el inicio del procedimiento sancionador previsto en el Título II.",
          "Promover actividades de formación y sensibilización para un mejor conocimiento de las materias reguladas por la Ley.",
          "Colaborar, en las materias que le son propias, con órganos de naturaleza análoga.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 38.2 de la Ley 19/2013 atribuye al Presidente del CTBG: a) Adoptar criterios de interpretación uniforme; b) Velar por el cumplimiento de las obligaciones de publicidad del Cap. II del Título I; c) Conocer de las reclamaciones del art. 24; d) Responder consultas facultativas; e) Instar el inicio del procedimiento sancionador del Título II; y f) Aprobar el anteproyecto de presupuesto. Las demás opciones pertenecen al art. 38.1.",
        reference: "Art. 38.1 y 38.2 Ley 19/2013 (LTAIBG)",
        difficulty: "alta",
      },
      {
        id: "t9-q11",
        topicId: 9,
        question:
          "Según el artículo 38.2.e) de la Ley 19/2013, cuando el Presidente del Consejo de Transparencia y Buen Gobierno inste el inicio del procedimiento sancionador previsto en el Título II (Buen Gobierno):",
        options: [
          "Él mismo impondrá directamente la sanción de destitución del alto cargo sin más trámite.",
          "El órgano competente deberá motivar, en su caso, su decisión de no incoar el procedimiento.",
          "El órgano competente está obligado a incoar e imponer la sanción máxima sin margen de apreciación.",
          "La propuesta caduca automáticamente a las 48 horas si no es ratificada por el Senado.",
        ],
        correctIndex: 1,
        explanation:
          "El artículo 38.2.e) de la Ley 19/2013 dispone que corresponde al Presidente del CTBG 'Instar el inicio del procedimiento sancionador previsto en el título II de esta Ley. El órgano competente deberá motivar, en su caso, su decisión de no incoar el procedimiento'.",
        reference: "Art. 38.2.e) Ley 19/2013 (LTAIBG)",
        difficulty: "alta",
      },
      {
        id: "t9-q12",
        topicId: 9,
        question:
          "Conforme a los artículos 38.1.d) y 40 de la Ley 19/2013, el Consejo de Transparencia y Buen Gobierno evaluará el grado de aplicación de esta Ley elaborando con periodicidad anual una memoria que será presentada ante:",
        options: [
          "El Tribunal Constitucional.",
          "Las Cortes Generales.",
          "La Comisión Europea.",
          "El Consejo General del Poder Judicial.",
        ],
        correctIndex: 1,
        explanation:
          "Tanto el artículo 38.1.d) como el artículo 40 de la Ley 19/2013 establecen que el Consejo de Transparencia y Buen Gobierno elevará anualmente a las Cortes Generales una memoria sobre el desarrollo de sus actividades y sobre el grado de cumplimiento de las disposiciones establecidas en esta Ley, compareciendo su Presidente ante la Comisión correspondiente para dar cuenta de tal memoria.",
        reference: "Arts. 38.1.d) y 40 Ley 19/2013 (LTAIBG)",
        difficulty: "basica",
      },
    ],
  },
];
