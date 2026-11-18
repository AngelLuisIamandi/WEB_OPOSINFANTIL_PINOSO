import { QuizQuestion } from "@/types/oposicion";

export interface OfficialPastExam {
  id: string;
  title: string;
  region: string;
  year: string;
  role: string;
  description: string;
  questionsPdf: string;
  answersPdf: string;
  sourceQuestionsUrl: string;
  sourceAnswersUrl: string;
  questions: (QuizQuestion & { number: number })[];
}

export const EXAMENES_OFICIALES_ESPANA: OfficialPastExam[] = [
  {
    "id": "bunol-2023",
    "title": "Ayuntamiento de Buñol / Buinsa (Valencia)",
    "region": "Comunitat Valenciana",
    "year": "2023",
    "role": "Técnico/a en Educación Infantil",
    "description": "Primer ejercicio oficial de la fase de concurso-oposición (27/06/2023, DOGV nº 9574). Incluye normativa local, administrativa y temario específico de Educación Infantil 0-3 años en la Comunitat Valenciana.",
    "questionsPdf": "/examenes-oficiales/bunol-2023-preguntas.pdf",
    "answersPdf": "/examenes-oficiales/bunol-2023-respuestas.pdf",
    "sourceQuestionsUrl": "https://buinsa.xn--buol-hqa.es/wp-content/uploads/2023/07/Dossier-Prueba-selectiva-TEI-27-6-2023-para-publicar-en-la-p%C3%A1gina-web.pdf",
    "sourceAnswersUrl": "https://buinsa.xn--buol-hqa.es/wp-content/uploads/2023/07/Plantilla-de-respuesta-pruebas-del-27-06-2023.pdf",
    "questions": [
      {
        "id": "bunol-2023-q1",
        "number": 1,
        "topicId": 0,
        "question": "¿A qué fase r epresenta la reflexión ? ... , las ed ucadoras y educadores deben realizar durante y después de la aplicación de la Unidad Didáctica, con la intención de poder comprobar el funcionamiento de la misma, y en su caso realizar las oportunas modificaciones",
        "options": [
          "Fase de diagnóstico",
          "Fase de evaluación",
          "Fase de realización",
          "Fase de diseño"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Fase de evaluación",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 1",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q2",
        "number": 2,
        "topicId": 0,
        "question": "¿Quién fundó la Casa Bambini en Italia?",
        "options": [
          "Quintiliano.",
          "María Montessori",
          "Robert Owen.",
          "Federico Froebel."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) María Montessori",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 2",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q3",
        "number": 3,
        "topicId": 0,
        "question": "¿Cómo se denominan los alumnos y alumnas que necesitan un apoyo o ayuda extra, para alcanzar los objetivos y las m etas destinadas a los niños y las niñas de su edad?",
        "options": [
          "Niños y las niñas con déficit de aprendizaje.",
          "Niños y niñas de educación especial.",
          "Niños y niñas con retraso mental.",
          "Niños y niñas con necesidades educativas especiales."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Niños y niñas con necesidades educativas especiales.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 3",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q4",
        "number": 4,
        "topicId": 0,
        "question": "¿Quién elabora la propuesta pedagógica?",
        "options": [
          "El maestro y la maestra que imparten la docencia.",
          "El Consejo Escolar.",
          "Las comunidades autónomas.",
          "El MEC."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) El maestro y la maestra que imparten la docencia.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 4",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q5",
        "number": 5,
        "topicId": 0,
        "question": "¿A cuál de los elementos del PEC se refiere ? “ … líneas básicas para las actividades de tutoría, de relaciones con padres y madres, de o rientación educativa y vocacional y con la regulación básica de la organización de las actuaciones y reuniones de los equipos educativos”",
        "options": [
          "Medidas de atención a la diversidad",
          "Objetivos generales",
          "Plan de orientación y acción tutorial",
          "Plan de convivencia."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Plan de orientación y acción tutorial",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 5",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q6",
        "number": 6,
        "topicId": 0,
        "question": "De acuerdo con lo que establece el artículo 3 del Real decreto 95/2022, de 1 de febrero la etapa de Educación Infantil se divide:",
        "options": [
          "En 2 ciclos, el primero de 0 a 3 años y el segundo de 3 a 6 años.",
          "En un solo ciclo, de 0 a 6 años.",
          "En 2 ciclos, el primero de 2 a 4 años y el segundo de 4 a 6 años.",
          "El artículo 3 no establece la distinción de etapas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) En 2 ciclos, el primero de 0 a 3 años y el segundo de 3 a 6 años.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 6",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q7",
        "number": 7,
        "topicId": 0,
        "question": "¿A cuál de los elementos del PEC se refiere ? “ incluyen los valores y principios que el Centro, dentro del respeto a la Constitución y a las leyes, quier e priorizar como eje vertebrador de la acción educativa”.",
        "options": [
          "Procedimientos de evaluación",
          "Introducción",
          "Criterios de organización del tiempo",
          "Objetivos generales"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Objetivos generales",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 7",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q8",
        "number": 8,
        "topicId": 0,
        "question": "¿Qué establece y regula? - El modelo de gestión de la igualdad y la convivencia en el sistema educativo valenciano. - La organización, el funcionamiento y la composición del Observatorio de la Igualdad y la Convivencia del sistema educativo valenciano. - Los derechos y deberes del alumnado, del profesorado, de las familias o representantes legales del alumnado y del personal de administración y servicios y del personal no docente de atención educativa.",
        "options": [
          "LODE",
          "Decreto 195/2022 de 11 de noviembre.",
          "Real Decreto 95/2022, de 1 de febrero",
          "LOE"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Decreto 195/2022 de 11 de noviembre.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 8",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q9",
        "number": 9,
        "topicId": 0,
        "question": "¿Para qué edad es apropiado, y tiene gran éxito, el juego h eurístico o de inventiva?",
        "options": [
          "Para niños y niñas de 0 a 6 meses.",
          "Para niños y niñas de 12 a 36 meses.",
          "Para niños y niñas de 6 a 12 meses.",
          "niños y niñas de más de 36 meses."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Para niños y niñas de 12 a 36 meses.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 9",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q10",
        "number": 10,
        "topicId": 0,
        "question": "¿A qué área pertenece el bloque: lenguaje artístico?",
        "options": [
          "Descubrimiento y explotación del entorno",
          "Crecimiento en armonía.",
          "Comunicación y representación de la realidad.",
          "Todas las respuestas anteriores son correctas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Comunicación y representación de la realidad.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 10",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q11",
        "number": 11,
        "topicId": 0,
        "question": "Teniendo en cuenta que la atención de un niño y una niña de Educación Infantil es corta y breve, ¿qué se debe hacer?",
        "options": [
          "No realizar actividades intensas.",
          "Realizar actividades que no le supongan ningún esfuerzo al niño y a la niña.",
          "No realizar actividades que requieran atención",
          "Cambiar de actividad en periodos cortos de tiempo."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Cambiar de actividad en periodos cortos de tiempo.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 11",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q12",
        "number": 12,
        "topicId": 0,
        "question": "¿Qué tipo de educación se da atención p referente a los grupos de individuos cuyas condiciones de desigualdad son especialmente acusadas respecto a las prioridades que el sistema escolar les ofrece?",
        "options": [
          "Educación compensatoria.",
          "Educación especial.",
          "Educación para la igualdad",
          "Educación infantil"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Educación compensatoria.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 12",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q13",
        "number": 13,
        "topicId": 0,
        "question": "¿Qué etapas diferencia Freud en el desarrollo del niño y de la niña?",
        "options": [
          "Etapa oral, verbal y sensorial.",
          "Etapa oral, anal y fálica.",
          "Etapa oral, sensorial y fálica.",
          "Etapa oral, esquemática, anal y operacional."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Etapa oral, anal y fálica.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 13",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q14",
        "number": 14,
        "topicId": 0,
        "question": "¿Qué información no aparecerá en el informe inicial de un niño y una niña?",
        "options": [
          "Los objetivos que el niño y la niña ha conseguido.",
          "El historial clínico.",
          "Los intereses del niño y la niña.",
          "Datos sobre la dinámica familiar."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Los objetivos que el niño y la niña ha conseguido.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 14",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q15",
        "number": 15,
        "topicId": 0,
        "question": "Si uno de tus alumnos y alumnas presenta ecolalias, quiere decir que:",
        "options": [
          "Tiende a repetir palabras por no comprender lo que escucha.",
          "Tiene alteraciones en el oído medio",
          "Tiende a realizar movimientos repetitivos con las manos.",
          "Tiene alteraciones en el oído externo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Tiende a repetir palabras por no comprender lo que escucha.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 15",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q16",
        "number": 16,
        "topicId": 0,
        "question": "Respecto a la conservación de alimentos:",
        "options": [
          "Los alimentos frescos se deben mantener en el frigorífico para evitar su rápida descomposición y la proliferación de microorganismos.",
          "Es necesario para mejorar las propiedades nutritivas de los alimentos.",
          "Su único objetivo es conseguir el control de las diversas reacciones que, por efectos físicos, químicos o biológicos, tienen lugar en los alimentos.",
          "Todas las respuestas anteriores son falsas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Los alimentos frescos se deben mantener en el frigorífico para evitar su rápida descomposición y la proliferación de microorganismos.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 16",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q17",
        "number": 17,
        "topicId": 0,
        "question": "Son el conjunto de conceptos, destrezas y valores que el alumnado pone en marcha al aplicar de forma integrada los contenidos p ropios de cada enseñanza y etapa educativa.",
        "options": [
          "Saberes básicos",
          "Contenidos",
          "Estándares de aprendizaje",
          "Objetivos."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Saberes básicos",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 17",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q18",
        "number": 18,
        "topicId": 0,
        "question": "¿Qué condición debe cumplir una determinada actividad, actuación o proceso para ser considerada de calidad?",
        "options": [
          "Indicador de logro",
          "Estándar de aprendizaje",
          "Criterio de evaluación",
          "Indicador de evaluación"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Criterio de evaluación",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 18",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q19",
        "number": 19,
        "topicId": 0,
        "question": "¿Qué son los roles de género?",
        "options": [
          "Son las imágenes aceptadas comúnmente por un grupo sobre el género masculino.",
          "Son el conjunto de prejuicios sexuales sobre el género femenino.",
          "Son las manifestaciones de los estereotipos de género en el quehacer de cada día.",
          "Son las características y comportamientos que diferencian a los hombres de las mujeres y viceversa."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Son las manifestaciones de los estereotipos de género en el quehacer de cada día.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 19",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q20",
        "number": 20,
        "topicId": 0,
        "question": "¿Qué se debe tomar para curar una infección por oxiuros?",
        "options": [
          "No precisa medicación concreta.",
          "Un antibiótico.",
          "Un antiparasitario.",
          "Un antipirético."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Un antiparasitario.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 20",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q21",
        "number": 21,
        "topicId": 0,
        "question": "¿Qué documento constituye la evaluación del plan anual de centro?",
        "options": [
          "La memoria anual (MA).",
          "El reglamento de régimen interior (RRI).",
          "El proyecto curricular de centro (PCC).",
          "La programación general anual (PGA)."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) La memoria anual (MA).",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 21",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q22",
        "number": 22,
        "topicId": 0,
        "question": "¿Cuál de los siguientes bloques, que se encuentran en el área: descubrimiento y explotación del entorno, contienen contenidos relacionados con la educación vial?",
        "options": [
          "Bloque II: acercamiento a la naturaleza y bloque III: la actividad y la vida cotidiana.",
          "Bloque II: acercamiento a la naturaleza y bloque III: conocimiento de sí mismo.",
          "Bloque II: acercamiento a la naturaleza y bloque III: la cultura y la vida en sociedad.",
          "Bloque II: acercamiento a la naturaleza y bloque III: juego y movimiento."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Bloque II: acercamiento a la naturaleza y bloque III: la cultura y la vida en sociedad.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 22",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q23",
        "number": 23,
        "topicId": 0,
        "question": "No es objeto de la Educación Infantil fomentar:",
        "options": [
          "La consolidación de la lectoescritura.",
          "El desarrollo de habilidades comunicativas.",
          "La iniciación en habilidades matemáticas.",
          ". Las relaciones con los demás y la adquisición de pautas de convivencia."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) La consolidación de la lectoescritura.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 23",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q24",
        "number": 24,
        "topicId": 0,
        "question": "Primer pedagogo en incluir el concepto de \"ambiente preparado\"",
        "options": [
          "Montessori",
          "Pikler",
          "Jonshon",
          "Wild"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Montessori",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 24",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q25",
        "number": 25,
        "topicId": 0,
        "question": "¿Qué órgano, en representación de la comunidad educativa, se encarga de gestionar el centro?",
        "options": [
          "El claustro.",
          "El AMPA.",
          "El equipo directivo.",
          "El Consejo escolar"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) El Consejo escolar",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 25",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q26",
        "number": 26,
        "topicId": 0,
        "question": "¿Cuál de los siguientes tipos no es un grado de discapacidad?",
        "options": [
          "Discapacidad mínima",
          "Discapacidad grave",
          "Discapacidad moderada.",
          "Discapacidad nula."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Discapacidad mínima",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 26",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q27",
        "number": 27,
        "topicId": 0,
        "question": "¿En qué artículo de la Convención sobre los Derechos del Niño y la Niña (ONU), se recoge explícitamente el derecho del niño y la niña al juego?",
        "options": [
          "Artículo 7.",
          "Artículo 29.",
          "Artículo 31.",
          "Artículo 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Artículo 31.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 27",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q28",
        "number": 28,
        "topicId": 0,
        "question": "La díada niño-niña hace referencia:",
        "options": [
          "A la influencia social.",
          "Al rol de género.",
          "A la identidad sexual.",
          "A la fase oral."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) A la identidad sexual.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 28",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q29",
        "number": 29,
        "topicId": 0,
        "question": "¿Qué problemas pueden surgir con el uso de los materiales multimedia?",
        "options": [
          "Distraer de las actividades importantes",
          "Causar adicción.",
          "Problemas neuromotores.",
          "Respuesta 2 y 3 son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Respuesta 2 y 3 son correctas.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 29",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q30",
        "number": 30,
        "topicId": 0,
        "question": "La coeducación es:",
        "options": [
          "La educación que se da a los niños y las niñas sin discriminación por razón de sexo.",
          "La unificación de currículos en la enseñanza.",
          "La educación específica que se ha dado a las niñas a lo largo de la historia.",
          "Un sinónimo de escuela mixta."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) La educación que se da a los niños y las niñas sin discriminación por razón de sexo.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 30",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q31",
        "number": 31,
        "topicId": 0,
        "question": "En una maniobra de reanimación respiratoria, ¿para qué moverías la mandíbula de la víctima hacia arriba?",
        "options": [
          "Para que la lengua descienda y no obstruya la vía aérea.",
          "Para que la víctima mantenga la boca cerrada.",
          "Para que la lengua suba y no obstruya la vía aérea.",
          "Para evitar que se atragante."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Para que la lengua suba y no obstruya la vía aérea.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 31",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q32",
        "number": 32,
        "topicId": 0,
        "question": "¿Cuál de los siguientes no es un objetivo que persiga el trabajo por rincones?",
        "options": [
          "Desarrollo afectivo del niño y de la niña.",
          "Aprendizaje por descubrimiento.",
          "Autonomía del niño y de la niña.",
          "Organización del espacio y del tiempo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Aprendizaje por descubrimiento.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 32",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q33",
        "number": 33,
        "topicId": 0,
        "question": "La información de la posición de la cabeza respecto al tronco y al espaci o proviene de…",
        "options": [
          "Sensaciones cenestésicas.",
          "Sensaciones de los procesos internos del organismo.",
          "Sensaciones vestibulares.",
          "Estados emocionales."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Sensaciones vestibulares.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 33",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q34",
        "number": 34,
        "topicId": 0,
        "question": "La palabra feedback significa:",
        "options": [
          "Retroalimentación.",
          "Refuerzo negativo.",
          "Castigo.",
          "Procedimiento."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Retroalimentación.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 34",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q35",
        "number": 35,
        "topicId": 0,
        "question": "El pie vago se caracteriza por:",
        "options": [
          "Estar desviado hacia detrás.",
          "Estar desviado hacia delante.",
          "Estar desviado hacia fuera.",
          "Estar desviado hacia dentro."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Estar desviado hacia dentro.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 35",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q36",
        "number": 36,
        "topicId": 0,
        "question": "¿Cuál de los siguientes sentimientos no está vinculado al apego que el niño y la niña experimenta con el adulto?",
        "options": [
          "Ansiedad.",
          "Proximidad.",
          "Bienestar.",
          "Seguridad."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Ansiedad.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 36",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q37",
        "number": 37,
        "topicId": 0,
        "question": "¿Cuál de estos tipos de juegos no aparece en la clasificación de Piaget?",
        "options": [
          "Juegos motores.",
          "Juegos de construcción.",
          "Juegos sociales.",
          "Juegos simbólicos."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Juegos sociales.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 37",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q38",
        "number": 38,
        "topicId": 0,
        "question": "Como profesional de la educación, ¿a qué años esp erarás que el niño y la niña comience a hablar en primera persona?",
        "options": [
          "6 años.",
          "1 año.",
          "5 años.",
          "3 años."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) 6 años.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 38",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q39",
        "number": 39,
        "topicId": 0,
        "question": "¿Qué modelo de afrontar conflictos puede conllevar mayores consecuencias negativas que positivas?",
        "options": [
          "Castigo.",
          "Tiempo fuera.",
          "Recriminación de la conducta.",
          "Afrontamiento no punitivo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Castigo.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 39",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q40",
        "number": 40,
        "topicId": 0,
        "question": "¿A qué edad va dirigida el juego heurístico?",
        "options": [
          "Para mayores de 6 años",
          "Para recién nacidos.",
          "Entre el año y los dos años.",
          "Entre 5 y 20 meses."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Entre el año y los dos años.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 40",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q41",
        "number": 41,
        "topicId": 0,
        "question": "Cuando hablamos de la organización del espacio de un juego, ¿a qué pregunta contestamos?",
        "options": [
          "¿Dónde lo hacemos?",
          "¿Cómo lo hacemos?",
          "¿Qué queremos conseguir?",
          "¿Con qué lo hacemos?"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) ¿Dónde lo hacemos?",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 41",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q42",
        "number": 42,
        "topicId": 0,
        "question": "Según Piaget, ¿qué tipo de juego se da en el periodo sensoriomotor?",
        "options": [
          "De ejercicio.",
          "Operaciones formales.",
          "Operaciones concretas.",
          "Preoperacional."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) De ejercicio.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 42",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q43",
        "number": 43,
        "topicId": 0,
        "question": "¿Qué caracteriza a los juguetes de perceptividad?",
        "options": [
          "Son de arrastre.",
          "Desarrollan destrezas motrices.",
          "Sirven para canalizar angustias y fobias.",
          "Producen sonidos y movimientos."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Producen sonidos y movimientos.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 43",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q44",
        "number": 44,
        "topicId": 0,
        "question": "¿A qué llamamos coordinación visomotriz?",
        "options": [
          "A la coordinación de extremidades.",
          "A la coordinación oculopédica.",
          "A la coordinación del ojo y la mano.",
          "A la coordinación entre profesionales."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) A la coordinación del ojo y la mano.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 44",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q45",
        "number": 45,
        "topicId": 0,
        "question": "¿Cuál de las siguientes es una característica esencial del juego?",
        "options": [
          "Surge de manera obligada",
          "No es un fin en sí mismo.",
          "Es motivador en sí mismo, cualquier actividad convertida en juego es atractiva para el niño y la niña.",
          "La actividad lúdica impide la comunicación y la socialización"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Es motivador en sí mismo, cualquier actividad convertida en juego es atractiva para el niño y la niña.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 45",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q46",
        "number": 46,
        "topicId": 0,
        "question": "¿Qué caracteriza a los juegos cooperativos?",
        "options": [
          "Se juega por el placer de jugar.",
          "Se juega para vencer.",
          "Favorecen la competitividad.",
          "Participan algunos alumnos."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Se juega por el placer de jugar.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 46",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q47",
        "number": 47,
        "topicId": 0,
        "question": "¿Cuándo comienzan los juegos motores?",
        "options": [
          "En las primeras semanas de vida.",
          "Cuando el niño y la niña comienza a andar.",
          "A los 2 años aproximadamente.",
          "Cuando el niño y la niña comienza a ser consciente de su propio cuerpo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) En las primeras semanas de vida.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 47",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q48",
        "number": 48,
        "topicId": 0,
        "question": "En función del momento en que se realice la evaluación, esta puede ser:",
        "options": [
          "Inicial, continua y postciclo.",
          "Inicial, continua y final.",
          "Válida, indicativa e incierta.",
          "Diaria, trimestral, continua, final y postciclo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Inicial, continua y final.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 48",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q49",
        "number": 49,
        "topicId": 0,
        "question": "¿Cómo debe ser la planificación de la organización del espacio?",
        "options": [
          "El ambiente y los espacios del centro se organizarán y prepararán de forma que permitan que el niño y la niña se encuentren en un ambiente acogedor, seguro y estable, que les facilite los primeros reconocimientos y contactos con el nuevo entorno, que les ayude a relacionarse con los otros y que den una respuesta clara a sus necesidades.",
          "Inexistente.",
          "Ambigua.",
          "Como decida cada dirección del centro."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) El ambiente y los espacios del centro se organizarán y prepararán de forma que permitan que el niño y la niña se encuentren en un ambiente acogedor, seguro y estable, que les facilite los primeros reconocimientos y contactos con el nuevo entorno, que les ayude a relacionarse con los otros y que den una respuesta clara a sus necesidades.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 49",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q50",
        "number": 50,
        "topicId": 0,
        "question": "¿Cómo se denominan las acciones repetidas agradables que hace el niñ o y la niña en relación al medio?",
        "options": [
          "Coordinación de los esquemas secundarios.",
          "Reacciones circulares secundarias.",
          "Reacciones secundarias terciarias.",
          "Reacciones circulares primarias."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Reacciones circulares secundarias.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 50",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q51",
        "number": 51,
        "topicId": 0,
        "question": "Permiten al niño y a la niña dejar por un tiempo la realidad y sumergir se en un mundo imaginario donde todo es posible de acuerdo con el deseo propio o del grupo.",
        "options": [
          "Relaciones temporales",
          "Simbólico",
          "Fantasía",
          "Razonamiento lógico"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Fantasía",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 51",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q52",
        "number": 52,
        "topicId": 0,
        "question": "En qué edad transcurre el estadio preoperacional según Piaget",
        "options": [
          "2-6 años",
          "2-6 meses.",
          "6-12 años",
          "0-2 años"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) 2-6 años",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 52",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q53",
        "number": 53,
        "topicId": 0,
        "question": "¿Qué debe tenerse en cuenta en una salida cultural?",
        "options": [
          "La metodología.",
          "Desarrollo de la actividad, preparación y planificación.",
          "Los materiales del aula.",
          "La coordinación entre profesionales."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Desarrollo de la actividad, preparación y planificación.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 53",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q54",
        "number": 54,
        "topicId": 0,
        "question": "Pueden ser: conceptuales, procedimentales o actitudinales.",
        "options": [
          "Actividades.",
          "Contenidos.",
          "Objetivos.",
          "Recursos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Contenidos.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 54",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q55",
        "number": 55,
        "topicId": 0,
        "question": "¿A qué edad va dirigida la actividad el cesto de los tesoros?",
        "options": [
          "De 12 a 24 meses.",
          "De 4 a 12 meses.",
          "A partir de 2 años.",
          "Para recién nacidos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) De 4 a 12 meses.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 55",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q56",
        "number": 56,
        "topicId": 0,
        "question": "A qué ámbito de la organización pertenecen los factore s pedagógicos, normativos, …",
        "options": [
          "Tiempo",
          "Materiales",
          "Espacio",
          "Recursos"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Espacio",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 56",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q57",
        "number": 57,
        "topicId": 0,
        "question": "Toma la iniciativa y el niño y la niña dirige el juego.",
        "options": [
          "Juego simbólico",
          "Juego libre",
          "Juego dirigido",
          "juego presenciado"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Juego libre",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 57",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q58",
        "number": 58,
        "topicId": 0,
        "question": "Es el empleo del tiempo libre como simple reponedor de fuerzas, tanto físicas como psíquicas; se trata de un nivel muy básico, de calma y sosiego del ocio, que es imprescindible para poder abordar cualquiera de los estadios superiores.",
        "options": [
          "Entretenimiento",
          "Formación",
          "Descanso",
          "Consumo"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción C) Descanso",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 58",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q59",
        "number": 59,
        "topicId": 0,
        "question": "El juego es…",
        "options": [
          "Elemento transmisor de costumbres.",
          "Innato.",
          "Elemento de socialización.",
          "Todas las respuestas anteriores son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Todas las respuestas anteriores son correctas.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 59",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q60",
        "number": 60,
        "topicId": 0,
        "question": "El documento que se debe realizar para la apertura de un centro educativo, ¿qué esquema debe seguir?",
        "options": [
          "Justificación del proyecto, objetivos, descripción de actividades, presupuesto, organización y metodología, seguimiento y evaluación del proyecto.",
          "Justificación del proyecto, contextualización, objetivos, descripción de actividades, calendario y horarios, presupuesto, organización y metodología, seguimiento y evaluación del proyecto.",
          "Contextualización, objetivos, descripción de actividades, calendario y horarios, presupuesto, organización y metodología.",
          "Justificación del proyecto, contextualización, objetivos, calendario y horarios, organización y metodología, seguimiento y evaluación del proyecto."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Justificación del proyecto, contextualización, objetivos, descripción de actividades, calendario y horarios, presupuesto, organización y metodología, seguimiento y evaluación del proyecto.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 60",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q61",
        "number": 61,
        "topicId": 0,
        "question": "Atendiendo al Rol del Educador y educadora : Señala la respuesta que no corresponda.",
        "options": [
          "El educador y la educadora de infantil, habrá de crear para el niño y la niña un ambiente afectuoso, saludable y de bie nestar, en el que se encuentre los estímulos necesarios para su aprendizaje y para que se sienta cómodo, seguro y alegre.",
          "El educador y la educadora de Infantil es necesario que siga el Programa de manera taxativa, para no entrar en improvisaciones que redunden en la mala praxis.",
          "Estimular el espíritu investigador y la autonomía del niño y de la niña.",
          "Un educador o una educadora no debe olvidar que parte de su rol es servir como modelo en muchas adquisiciones por lo que debe cuidar su actuación y actitudes frente a él."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) El educador y la educadora de Infantil es necesario que siga el Programa de manera taxativa, para no entrar en improvisaciones que redunden en la mala praxis.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 61",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q62",
        "number": 62,
        "topicId": 0,
        "question": "La observación (como instrumento de evaluación) llevada a cabo por los profesionales se denomina:",
        "options": [
          "Instrumental.",
          "Directa.",
          "Técnica.",
          "Indirecta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Directa.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 62",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q63",
        "number": 63,
        "topicId": 0,
        "question": "¿De qué nivel de prevención de la atención temprana el objetivo es detectar y diagnosticar precozmente los trastornos en el desarrollo y las situaciones de riesgo?",
        "options": [
          "De la prevención terciaria.",
          "De la prevención secundaria.",
          "De la prevención primaria.",
          "De la prevención temprana."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) De la prevención secundaria.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 63",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q64",
        "number": 64,
        "topicId": 0,
        "question": "Tú, como profesional de la educación ¿cómo debes actuar ant e una situación de riesgo de un menor?",
        "options": [
          "Comunicarlo a la autoridad, pero evitar prestarle auxilio al menor en ese instante para no complicar más la situación.",
          "Comunicarlo de inmediato a la autoridad.",
          "Comunicarlo a la autoridad y alojarlo en una residencia hasta que se determine qué hacer con el menor.",
          "Comunicarlo a la autoridad y prestarle auxilio si lo precisa en ese momento."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Comunicarlo a la autoridad y prestarle auxilio si lo precisa en ese momento.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 64",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q65",
        "number": 65,
        "topicId": 0,
        "question": "¿Cuál de los siguientes no es un objetivo de la atención temprana?",
        "options": [
          "Considerar al niño y la niña como sujeto pasivo de la intervención.",
          "Introducir los mecanismos necesarios de compensación, de eliminación de barreras y de adaptación a las necesidades específicas.",
          "Atender y cubrir las necesidades y demandas de la familia y el entorno en el que vive el niño y la niña.",
          "Reducir los efectos de una deficiencia o déficit sobre el conjunto global del desarrollo del niño y de la niña."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Considerar al niño y la niña como sujeto pasivo de la intervención.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 65",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q66",
        "number": 66,
        "topicId": 0,
        "question": "¿Cuál es la reacción apropiada del adulto, cuando el niño y la niña se hace pis, si ya le hemos quitado el pañal?",
        "options": [
          "Dejarlo como está para que vea lo incómodo que resulta estar mojado.",
          "Cambiarle de ropa, no enfadarnos y hacerle entender que no pasa nada.",
          "Castigarlo, para que aprenda el concepto causa-efecto.",
          "Mostrarle nuestro enfado para que distinga lo que está bien de lo que está mal."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Cambiarle de ropa, no enfadarnos y hacerle entender que no pasa nada.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 66",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q67",
        "number": 67,
        "topicId": 0,
        "question": "¿Cómo definirías la palabra salud?",
        "options": [
          "Es instruir o amaestrar con doctrinas.",
          "Se refiere a la ausencia de enfermedad y al bienestar psíquico, físico y social.",
          "Es el incremento del tamaño en la estructura física del cuerpo",
          "Son los cambios emocionales y conductuales que ocurren en la persona."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Se refiere a la ausencia de enfermedad y al bienestar psíquico, físico y social.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 67",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q68",
        "number": 68,
        "topicId": 0,
        "question": "¿Qué debe hacer el educador y la educadora para que los niños y las niñas en el periodo de adaptación se sientan más confiados en la escuela?",
        "options": [
          "Dejarles libres en el patio.",
          "Que se vuelvan a casa con las familias.",
          "No prestarles atención, ya se les pasará.",
          "Hacer una visita por el centro y presentarles personas desconocidas para ellos y ellas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Hacer una visita por el centro y presentarles personas desconocidas para ellos y ellas.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 68",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q69",
        "number": 69,
        "topicId": 0,
        "question": "El niño y la niña logra controlar los esfínteres gracias a:",
        "options": [
          "La maduración neurológica.",
          "La familia.",
          "La educación.",
          "Las orientaciones médicas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) La maduración neurológica.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 69",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q70",
        "number": 70,
        "topicId": 0,
        "question": "¿Cómo se sienten los niños y las niñas cuando van por primera vez a la escuela?",
        "options": [
          "Con muchas ganas de ver lo que hay en el interior del colegio.",
          "Inseguros e inseguras, ya que para ellos y ellas es un mundo desconocido y complejo.",
          "Todos y todas tienen ganas de volver a sus casas.",
          "Muy seguros y seguras de sí mismos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Inseguros e inseguras, ya que para ellos y ellas es un mundo desconocido y complejo.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 70",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q71",
        "number": 71,
        "topicId": 0,
        "question": "¿De qué depende la forma en la que distribuimos las actividades?",
        "options": [
          "De la edad de los niños y las niñas",
          "De la duración de la jornada.",
          "De las características del grupo",
          "Todas las respuestas anteriores son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Todas las respuestas anteriores son correctas.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 71",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q72",
        "number": 72,
        "topicId": 0,
        "question": "¿El número máximo de alumnos y alumnas por unidad mixta de primer ciclo será el siguiente?",
        "options": [
          "No existen aulas mixtas en el primer ciclo de educación infantil.",
          "Unidades para alumnado bebes: 1/4. Unidades para alumnado de cero a un año 1/6. Unidades de más de 1 año: 1/10.",
          "Unidades para alumnado menor de un año: 1/8. Unidades para alumnado de uno a dos años: 1/13. Unidades para alumnado de dos tres años: 1/20.",
          "Unidades para alumnado de cero a dos años: 1/8. Unidades para alumnado de uno a tres años: 1/15."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Unidades para alumnado de cero a dos años: 1/8. Unidades para alumnado de uno a tres años: 1/15.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 72",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q73",
        "number": 73,
        "topicId": 0,
        "question": "¿El proyecto educativo de centro será elaborado por?",
        "options": [
          "El director o directora con las propuestas del equipo docente y la aprobación del consejo escolar.",
          "El consejo escolar con el apoyo del equipo educativo y con las propuestas realizadas por las asociaciones de madres y padres del alumnado, si están constituidas.",
          "El equipo educativo y la dirección del centro educativo.",
          "El equipo educativo bajo la supervisión del director o directora del centro de acuerdo con las directrices establecidas por el consejo escolar y con las propuestas realizadas por la asociación de madres y padres del alumnado, si están constituidas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) El equipo educativo bajo la supervisión del director o directora del centro de acuerdo con las directrices establecidas por el consejo escolar y con las propuestas realizadas por la asociación de madres y padres del alumnado, si están constituidas.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 73",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q74",
        "number": 74,
        "topicId": 0,
        "question": "El equipo educativo en los centros educativos de primer ciclo de titularidad pública, deberá:",
        "options": [
          "Ejercer la representación del centro.",
          "Elaborar la documentación del alumnado, que incluirá de manera detallada la evolución de cada niño y cada niña.",
          "Ejercer la dirección pedagógica e impulsar medidas para la consecución de los objetivos del proyecto educativo.",
          "Elaborar un informe anual sobre la convivencia del centro que enviará a la correspondiente dirección territorial."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción B) Elaborar la documentación del alumnado, que incluirá de manera detallada la evolución de cada niño y cada niña.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 74",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q75",
        "number": 75,
        "topicId": 0,
        "question": "Real Decreto 95/2022, de 1 de febrero, por el que se establece la ordenación y las enseñanzas mínimas de la Educación Infa ntil los contenidos educativos de la educación infantil se organizarán:",
        "options": [
          "En currículos correspondientes a ámbitos propios de la experiencia y del desarrollo infantil.",
          "En currículos correspondientes a ámbitos propios de la experiencia y del desarrollo juvenil.",
          "En etapas correspondientes a ámbitos propios de la experiencia y del desarrollo infantil.",
          "En áreas correspondientes a ámbitos de la experiencia y del desarrollo infantil. 5 PREGUNTAS EXTRAS:"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) En áreas correspondientes a ámbitos de la experiencia y del desarrollo infantil. 5 PREGUNTAS EXTRAS:",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 75",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q76",
        "number": 76,
        "topicId": 0,
        "question": "¿Qué principios se recogían en la primera Declaraci ón de los Derechos del Niño?",
        "options": [
          "Principio a favor de la familia",
          "El derecho de todos los niños y todas las niñas a un desarrollo moral, físico y nutricional.",
          "Principio de interés del niño y de la niña",
          "La necesidad de especial atención de los niños y las niñas que están en situación de desamparo."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) La necesidad de especial atención de los niños y las niñas que están en situación de desamparo.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 76",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q77",
        "number": 77,
        "topicId": 0,
        "question": "¿Cómo se clasifica el personal que trabaja en las escuelas infantiles?",
        "options": [
          "Personal docente y no docente.",
          "Personal docente y padres.",
          "Personal docente, equipo psicopedagógico y padres.",
          "Personal docente, no docente, equipo psicopedagógico y padres."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción D) Personal docente, no docente, equipo psicopedagógico y padres.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 77",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q78",
        "number": 78,
        "topicId": 0,
        "question": "¿A qué dimensión corresponde el distribuir las horas que el niño y la niña permanece en la escuela en diferentes actividades?",
        "options": [
          "Dimensión organizativa.",
          "Dimensión globalizadora",
          "Dimensión psicológica",
          "Dimensión socio-afectiva."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Dimensión organizativa.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 78",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q79",
        "number": 79,
        "topicId": 0,
        "question": "¿Qué fase del proyecto nos sirve para que el proyecto evolucione con el tiempo, se modifique y siga cubriendo las demandas de la comunidad escolar?",
        "options": [
          "La evaluación.",
          "Los objetivos.",
          "La justificación.",
          "Todas las respuestas anteriores son correctas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) La evaluación.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 79",
        "difficulty": "media"
      },
      {
        "id": "bunol-2023-q80",
        "number": 80,
        "topicId": 0,
        "question": "¿Qué reflejos innatos tiene el recién nacido y la recién nacida?",
        "options": [
          "Reflejo respiratorio, succión, presión, marcha automática, enderezamiento tónico, moro, reptación y reflejo de los puntos cardinales.",
          "Reflejo de enderezamiento, de presión, tónico y de los puntos cardinales",
          "Reflejo respiratorio, de succión y de reptación",
          "Reflejo de los puntos cardinales, del moro y de marcha automática."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Ayuntamiento de Buñol / Buinsa (Valencia) (2023): opción A) Reflejo respiratorio, succión, presión, marcha automática, enderezamiento tónico, moro, reptación y reflejo de los puntos cardinales.",
        "reference": "Ayuntamiento de Buñol / Buinsa (Valencia) (2023) · Pregunta oficial nº 80",
        "difficulty": "media"
      }
    ]
  },
  {
    "id": "andalucia-2025",
    "title": "Junta de Andalucía · IAAP (OEP 2022-2023)",
    "region": "Andalucía",
    "year": "2025",
    "role": "Educador/a Infantil (Grupo II)",
    "description": "Ejercicio único teórico-práctico oficial del Instituto Andaluz de Administración Pública (IAAP) con preguntas teóricas, supuestos prácticos tipo test y preguntas de reserva.",
    "questionsPdf": "/examenes-oficiales/andalucia-2025-preguntas.pdf",
    "answersPdf": "/examenes-oficiales/andalucia-2025-respuestas.pdf",
    "sourceQuestionsUrl": "https://www.juntadeandalucia.es/sites/default/files/2025-10/A232071%20Caratula%2BCuestionario.pdf",
    "sourceAnswersUrl": "https://www.juntadeandalucia.es/sites/default/files/2025-10/A232071%20PLANTILLA%20PROVISIONAL%20FIRMADA%202.pdf",
    "questions": [
      {
        "id": "andalucia-2025-q1",
        "number": 1,
        "topicId": 0,
        "question": "¿Cuáles son las áreas curriculares establecidas en el primer ciclo de Educación Infantil según la Orden 30 de mayo de 2023 por la que se desarrolla el currículo correspondiente a la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía, se regulan determinados aspectos de la atención a la diversidad y a las diferencias individuales, se establece la ordenación de la evaluación del proceso de aprendizaje del alumnado y se determinan los procesos de tránsito entre ciclos y con Educación Primaria.",
        "options": [
          "Identidad y autonomía personal, Conocimiento del entorno, Lenguajes: comunicación y representación.",
          "Crecimiento en Armonía, Descubrimiento y Exploración del Entorno, y Comunicación y Representación de la Realidad.",
          "Expresión Artística, Lengua y Medio Social.",
          "Lengua, STEM y Naturaleza."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Crecimiento en Armonía, Descubrimiento y Exploración del Entorno, y Comunicación y Representación de la Realidad.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 1",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q2",
        "number": 2,
        "topicId": 0,
        "question": "Según el Decreto100/2023, de 9 de mayo, por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía, uno de los fines de la Educación Infantil en Andalucía es:",
        "options": [
          "Favorecer el desarrollo físico y matemático.",
          "Contribuir al desarrollo físico, emocional, cognitivo y artístico.",
          "Asegurar aprendizajes académicos estandarizados.",
          "Fomentar el acceso temprano al lenguaje escrito y las tecnologías."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Contribuir al desarrollo físico, emocional, cognitivo y artístico.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 2",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q3",
        "number": 3,
        "topicId": 0,
        "question": "¿Qué supone una adaptación curricular significativa según la normativa vigente en Andalucía?",
        "options": [
          "Pequeños cambios metodológicos que no alteran objetivos ni criterios.",
          "La modificación de elementos del currículo, incluidos competencias específicas, criterios de evaluación o incluso objetivos de la etapa.",
          "Exclusivamente la incorporación de recursos técnicos y de accesibilidad sin cambiar contenidos.",
          "Medidas aplicables únicamente a alumnado con altas capacidades."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) La modificación de elementos del currículo, incluidos competencias específicas, criterios de evaluación o incluso objetivos de la etapa.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 3",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q4",
        "number": 4,
        "topicId": 0,
        "question": "La memoria de autoevaluación: Indique la respuesta que NO es correcta.",
        "options": [
          "La coordina la dirección del centro.",
          "La supervisa la inspección educativa.",
          "También evalúa las medidas de atención temprana.",
          "Se realiza en los meses de marzo y junio obligatoriamente."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Se realiza en los meses de marzo y junio obligatoriamente.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 4",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q5",
        "number": 5,
        "topicId": 0,
        "question": "Según el Anexo del Decreto 100/2023 por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucí, ¿Cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "Las competencias clave están enumeradas por orden de importancia.",
          "Las competencias clave son un total de siete.",
          "No existe jerarquía entre las distintas competencias.",
          "Las competencias clave, como su nombre indica, son únicas por lo que no tienen carácter transversal. 1 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) No existe jerarquía entre las distintas competencias.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 5",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q6",
        "number": 6,
        "topicId": 0,
        "question": "Dentro de los enfoques metodológicos activos en el primer ciclo, ¿qué papel tiene el espacio físico del aula?",
        "options": [
          "Espacio homogéneo, sin áreas diferenciadas, para que todos los niños y niñas hagan lo mismo al mismo tiempo y tengan espacio para jugar.",
          "Dividirlo estrictamente por edades dejando poco cambio a lo largo del año.",
          "Crear ambientes diversos que permitan talleres, rincones sensoriales, zonas para el juego libre, promoviendo autonomía y movimiento.",
          "Mantener todos los materiales guardados y solo utilizarlos para actividades dirigidas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Crear ambientes diversos que permitan talleres, rincones sensoriales, zonas para el juego libre, promoviendo autonomía y movimiento.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 6",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q7",
        "number": 7,
        "topicId": 0,
        "question": "¿Qué papel tiene la evaluación de los espacios y tiempos en la Escuela Infantil?",
        "options": [
          "Es secundaria, lo importante es evaluar únicamente al alumnado.",
          "Permite detectar si la organización favorece la autonomía, la seguridad y el aprendizaje.",
          "Sólo se hace al inicio del curso, no es necesario revisarla después.",
          "Sirve para comprobar que se cumple el horario previsto sin cambios."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Permite detectar si la organización favorece la autonomía, la seguridad y el aprendizaje.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 7",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q8",
        "number": 8,
        "topicId": 0,
        "question": "¿Qué relación existe entre la teoría del apego (Bowlby, Ainsworth) y el periodo de adaptación en la Escuela Infantil?",
        "options": [
          "Ninguna, porque la teoría del apego solo se aplica en el ámbito familiar.",
          "El apego condiciona solo el aprendizaje cognitivo, no el emocional.",
          "Es fundamental: la calidad del apego influye en la forma en que el niño/a afronta la separación y la adaptación.",
          "El apego determina la capacidad académica futura, pero no el bienestar inmediato."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Es fundamental: la calidad del apego influye en la forma en que el niño/a afronta la separación y la adaptación.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 8",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q9",
        "number": 9,
        "topicId": 0,
        "question": "En el marco legislativo español, la relación entre la Escuela Infantil y las familias se fundamenta en:",
        "options": [
          "El derecho de las familias a recibir informes académicos mensuales.",
          "La obligación exclusiva de los progenitores de educar sin intervención del centro.",
          "El principio de corresponsabilidad educativa entre escuela y familia.",
          "La sustitución de la familia por la institución escolar durante el horario lectivo."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) El principio de corresponsabilidad educativa entre escuela y familia.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 9",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q10",
        "number": 10,
        "topicId": 0,
        "question": "Entre los ámbitos de colaboración directa de las familias en los centros de Educación Infantil NO se encuentra:",
        "options": [
          "El intercambio de información cotidiana sobre el desarrollo del niño/a.",
          "La implicación en talleres y actividades conjuntas.",
          "La participación en órganos de gestión como el Consejo Escolar.",
          "La evaluación oficial y certificación académica del alumnado."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) La evaluación oficial y certificación académica del alumnado.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 10",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q11",
        "number": 11,
        "topicId": 0,
        "question": "Según el perfil profesional del educador/a infantil, una de sus funciones prioritarias es:",
        "options": [
          "Transmitir exclusivamente contenidos curriculares de forma sistemática.",
          "Garantizar el cuidado asistencial, descuidando la dimensión educativa.",
          "Coordinar la atención integral del niño/a: desarrollo, cuidado, aprendizaje y vínculo afectivo.",
          "Sustituir a la familia en todas las dimensiones educativas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Coordinar la atención integral del niño/a: desarrollo, cuidado, aprendizaje y vínculo afectivo.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 11",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q12",
        "number": 12,
        "topicId": 0,
        "question": "¿Qué caracteriza el rol del educador/a como coordinador/a del ciclo en la Escuela Infantil?",
        "options": [
          "Actuar como único responsable, tomando decisiones sin consenso.",
          "Dinamizar el trabajo en equipo, promover la coherencia pedagógica y coordinar actuaciones.",
          "Limitarse a gestionar horarios y turnos del personal.",
          "Reducir la coordinación a tareas administrativas. 2 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Dinamizar el trabajo en equipo, promover la coherencia pedagógica y coordinar actuaciones.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 12",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q13",
        "number": 13,
        "topicId": 0,
        "question": "¿Cuál de las siguientes NO es una característica del juego infantil en 0-3 años?",
        "options": [
          "Libre elección y espontaneidad.",
          "Desarrollo de la imaginación y creatividad.",
          "Competencia exclusiva entre niños/as para medir habilidades.",
          "Repetición y exploración sensorial."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Competencia exclusiva entre niños/as para medir habilidades.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 13",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q14",
        "number": 14,
        "topicId": 0,
        "question": "¿Qué estrategia recomienda la Junta de Andalucía para prevenir el uso excesivo de pantallas en niños y niñas?",
        "options": [
          "Fomentar el uso de pantallas como herramienta educativa.",
          "Fomentar actividades alternativas como el juego físico y la interacción social.",
          "Establecer horarios flexibles para el uso de dispositivos.",
          "Permitir el uso ilimitado de pantallas en casa."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Fomentar actividades alternativas como el juego físico y la interacción social.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 14",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q15",
        "number": 15,
        "topicId": 0,
        "question": "¿Qué impacto puede tener el uso excesivo de pantallas en niños/as de 0 a 3 años?",
        "options": [
          "Puede retrasar el desarrollo del lenguaje y las habilidades sociales.",
          "Estimula el desarrollo motor grueso.",
          "Mejora la capacidad de atención y concentración.",
          "No tiene efectos significativos en el desarrollo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Puede retrasar el desarrollo del lenguaje y las habilidades sociales.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 15",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q16",
        "number": 16,
        "topicId": 0,
        "question": "¿Cuál es la recomendación de la Organización Mundial de la Salud (OMS) respecto al uso de pantallas en niños/as menores de 2 años?",
        "options": [
          "Exposición a pantallas de hasta una hora diaria.",
          "Exposición a pantallas sólo en situaciones educativas.",
          "Exposición ilimitada a pantallas para estimular el desarrollo cognitivo.",
          "Ninguna exposición a pantallas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Ninguna exposición a pantallas.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 16",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q17",
        "number": 17,
        "topicId": 0,
        "question": "¿Cuál es la diferencia principal entre pictogramas y logogramas?",
        "options": [
          "Los pictogramas son símbolos que representan palabras, mientras que los logogramas representan ideas o conceptos.",
          "Los logogramas son figuras representativas de objetos, mientras que los pictogramas son letras.",
          "Los pictogramas son letras escritas, mientras que los logogramas son imágenes.",
          "Los logogramas son representaciones fonéticas, mientras que los pictogramas son fonemas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Los pictogramas son símbolos que representan palabras, mientras que los logogramas representan ideas o conceptos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 17",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q18",
        "number": 18,
        "topicId": 0,
        "question": "En el proceso de adquisición de la escritura en los niños/as pequeños, ¿qué tipo de actividad gráfica comienza a realizarse en la etapa de preescritura?",
        "options": [
          "Los niños/as dibujan figuras y formas sin ningún tipo de relación con la escritura.",
          "Los niños/as trazan líneas rectas para aprender a escribir.",
          "Los niños/as producen garabatos y trazos espontáneos como expresión gráfica.",
          "Los niños/as empiezan a escribir palabras completas. 3 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Los niños/as producen garabatos y trazos espontáneos como expresión gráfica.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 18",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q19",
        "number": 19,
        "topicId": 0,
        "question": "¿Qué forma de comprensión del lenguaje escrito caracteriza a los niños/as en la etapa global- natural?",
        "options": [
          "El niño o niña identifica palabras completas como un todo, a través de imágenes y símbolos.",
          "El niño o niña comienza a segmentar palabras en sílabas.",
          "El niño o niña aprende a reconocer las letras del abecedario.",
          "El niño o niña asocia palabras con sonidos específicos."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) El niño o niña identifica palabras completas como un todo, a través de imágenes y símbolos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 19",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q20",
        "number": 20,
        "topicId": 0,
        "question": "¿Cuál es el papel del adulto en la narración oral para niños/as de 0 a 3 años?",
        "options": [
          "Reproducir de forma exacta los textos literarios.",
          "Servir de mediador afectivo y comunicativo en el proceso.",
          "Interrumpir la narración para explicar vocabulario.",
          "Utilizar exclusivamente material audiovisual."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Servir de mediador afectivo y comunicativo en el proceso.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 20",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q21",
        "number": 21,
        "topicId": 0,
        "question": "¿Cuál es uno de los principales beneficios de la narración oral en la etapa de 0 a 3 años?",
        "options": [
          "Facilita el aprendizaje de la lectoescritura en edades tempranas.",
          "Estimula el desarrollo del pensamiento abstracto desde el primer año de vida.",
          "Promueve la autonomía en la lectura de cuentos.",
          "Favorece el desarrollo del lenguaje, la memoria y la atención."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Favorece el desarrollo del lenguaje, la memoria y la atención.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 21",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q22",
        "number": 22,
        "topicId": 0,
        "question": "¿Qué área del currículo de Educación Infantil contempla directamente el desarrollo del cuerpo, la identidad y la expresión corporal?",
        "options": [
          "Crecimiento en armonía.",
          "Desarrollo en armonía.",
          "Crecimiento y descubrimiento.",
          "Descubrir en armonía."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Crecimiento en armonía.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 22",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q23",
        "number": 23,
        "topicId": 0,
        "question": "En relación con la evaluación de capacidades lógico matemáticas en 0 a 3 años, es cierto que:",
        "options": [
          "Los centros deben usar pruebas estandarizadas obligatorias para medir la competencia matemática desde los dos años.",
          "Los criterios de evaluación incluyen saberes básicos y descriptores operativos que orientan los niveles esperados al terminar cada ciclo.",
          "La evaluación se basa exclusivamente en la memoria y la rapidez en el cálculo.",
          "Sólo se evalúa matemáticas en el segundo ciclo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Los criterios de evaluación incluyen saberes básicos y descriptores operativos que orientan los niveles esperados al terminar cada ciclo.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 23",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q24",
        "number": 24,
        "topicId": 0,
        "question": "Dentro de los saberes básicos de \"El lenguaje y la expresión musicales\" para el primer ciclo de Educación Infantil, se encuentra:",
        "options": [
          "La escucha como descubrimiento y disfrute del entorno.",
          "Propuestas musicales en distintos formatos.",
          "Intención expresiva en las producciones musicales.",
          "Todas son correctas. 4 de 20"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) La escucha como descubrimiento y disfrute del entorno.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 24",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q25",
        "number": 25,
        "topicId": 0,
        "question": "¿Qué tipo de evaluación se realiza en el primer ciclo de Educación Infantil, según el Decreto 100/2023 de Andalucía por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía?",
        "options": [
          "Normativa, cuantitativa y estandarizada.",
          "Global, continua y formativa.",
          "Final, individual y centrada en los resultados.",
          "Académica, trimestral y basada en exámenes."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Global, continua y formativa.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 25",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q26",
        "number": 26,
        "topicId": 0,
        "question": "¿Qué característica debe tener la evaluación en 0 a 3 años para respetar el ritmo madurativo del niño/a?",
        "options": [
          "Ser cuantificable y estandarizada.",
          "Ser individualizada y respetuosa.",
          "Estar basada en la comparación entre iguales.",
          "Usar instrumentos externos ajenos al aula."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Ser individualizada y respetuosa.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 26",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q27",
        "number": 27,
        "topicId": 0,
        "question": "¿Qué tipo de evaluación es más adecuada para la práctica docente en Educación Infantil?",
        "options": [
          "Externa, cuantitativa y sumativa.",
          "Exclusivamente individual.",
          "Competitiva y estandarizada.",
          "Formativa, reflexiva y continua."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Formativa, reflexiva y continua.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 27",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q28",
        "number": 28,
        "topicId": 0,
        "question": "¿Cuál es el objetivo principal de la evaluación del proceso de enseñanza en Educación Infantil?",
        "options": [
          "Clasificar al alumnado por niveles de competencia.",
          "Valorar el rendimiento académico del alumnado.",
          "Reflexionar y mejorar la práctica docente.",
          "Determinar qué niños deben repetir curso."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Reflexionar y mejorar la práctica docente.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 28",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q29",
        "number": 29,
        "topicId": 0,
        "question": "De acuerdo con lo dispuesto en el artículo 11.2 del Decreto 100/2023 de 9 de mayo por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía., la evaluación tendrá como referente los criterios de evaluación de las diferentes áreas curriculares:",
        "options": [
          "a través de los cuales se medirá el grado de adquisición de los saberes básicos.",
          "a través de los cuales se medirá el grado de adquisición de las competencias clave-",
          "a través de los cuales se medirá el grado de adquisición de las situaciones de aprendizaje-",
          "Todas son correctas-"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) a través de los cuales se medirá el grado de adquisición de las competencias clave-",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 29",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q30",
        "number": 30,
        "topicId": 0,
        "question": "Como medidas de apoyo al profesorado y personal educador para el desarrollo del currículo, la Consejería competente en materia de educación:",
        "options": [
          "Favorecerá la elaboración de materiales de apoyo al personal educador del primer ciclo.",
          "Impulsará la investigación, la experimentación y la innovación educativa.",
          "Realizará una oferta de actividades formativas dirigida al personal docente.",
          "Todas son correctas. 5 de 20"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Todas son correctas. 5 de 20",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 30",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q31",
        "number": 31,
        "topicId": 0,
        "question": "Deben ser considerados como elementos orientadores de procesos, sirviendo de guía para identificar el ritmo real de cada niño/a y proporcionando una valiosa información para desarrollar la labor de prevención, detección e intervención. Hablamos de:",
        "options": [
          "Los saberes básicos.",
          "Los criterios de evaluación.",
          "Las competencias específicas.",
          "Los descriptores operativos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Los criterios de evaluación.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 31",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q32",
        "number": 32,
        "topicId": 0,
        "question": "La denominación genérica de los centros educativos públicos que imparten el primer ciclo de la educación infantil en Andalucía, será:",
        "options": [
          "Centro de Educación Infantil.",
          "Escuela Infantil.",
          "Centro Público de Educación Infantil.",
          "Ninguna es correcta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Escuela Infantil.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 32",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q33",
        "number": 33,
        "topicId": 0,
        "question": "Según el Decreto 76/2025 de 5 de marzo por el que se regulan los centros que imparten el primer ciclo de Educación infantil en Andalucía, los órganos de coordinación educativa de las escuelas infantiles de titularidad de la Junta de Andalucía, son:",
        "options": [
          "Equipo directivo y equipo de ciclo.",
          "Equipo de ciclo, tutorías y educador/a infantil.",
          "Educador/a infantil y director/a.",
          "Todas son correctas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Equipo de ciclo, tutorías y educador/a infantil.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 33",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q34",
        "number": 34,
        "topicId": 0,
        "question": "El Proyecto Educativo y Asistencial abordará:",
        "options": [
          "Atención a la diversidad y a las diferencias individuales.",
          "El plan de acción tutorial.",
          "Los procedimientos de evaluación interna.",
          "Todas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Todas son correctas.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 34",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q35",
        "number": 35,
        "topicId": 0,
        "question": "\"La programación, la gestión y el desarrollo de la etapa atenderán a la compensación de los efectos que las desigualdades de origen cultural, social y económico tienen en el aprendizaje y en la evolución infantil, así como la detección precoz y atención temprana de necesidades específicas de apoyo educativo\", es el principio general de:",
        "options": [
          "Cooperación.",
          "Equidad e inclusión educativa.",
          "Gratuidad.",
          "Conciliación familiar y colaboración."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Equidad e inclusión educativa.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 35",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q36",
        "number": 36,
        "topicId": 0,
        "question": "¿En qué etapa del desarrollo según Piaget se encuentra el niño hasta los 2 años?",
        "options": [
          "Preoperacional.",
          "Operaciones concretas.",
          "Sensorial y motriz.",
          "Preformal."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Sensorial y motriz.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 36",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q37",
        "number": 37,
        "topicId": 0,
        "question": "¿Cuál de las siguientes afirmaciones sobre el desarrollo del lenguaje en los primeros tres años es correcta?",
        "options": [
          "A los 12 meses los niños ya combinan dos palabras.",
          "A los 18 meses el vocabulario suele superar las 200 palabras.",
          "A los 24 meses suelen comenzar a formar frases simples.",
          "A los 36 meses el lenguaje es completamente gramatical. 6 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) A los 24 meses suelen comenzar a formar frases simples.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 37",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q38",
        "number": 38,
        "topicId": 0,
        "question": "¿Qué aspecto del desarrollo emocional comienza a consolidarse hacia los 12-18 meses?",
        "options": [
          "La empatía madura.",
          "La aparición del miedo a los extraños.",
          "La autorregulación emocional completa.",
          "El dominio de la frustración."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) La aparición del miedo a los extraños.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 38",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q39",
        "number": 39,
        "topicId": 0,
        "question": "¿Cuál de las siguientes afirmaciones es correcta sobre el desarrollo psicomotor en los primeros años?",
        "options": [
          "El control cefalocaudal precede al control de las extremidades inferiores.",
          "El control postural aparece después del lenguaje.",
          "El desarrollo es uniforme y sin variaciones individuales.",
          "El desarrollo motor fino precede al grueso."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) El control cefalocaudal precede al control de las extremidades inferiores.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 39",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q40",
        "number": 40,
        "topicId": 0,
        "question": "En relación al desarrollo de la lateralidad en menores de 0-3 años, ¿cuál de estas afirmaciones es correcta?",
        "options": [
          "Se consolida de manera definitiva antes de los 3 años.",
          "Es indiferente estimular ambas manos en esta etapa.",
          "Comienza a manifestarse con ciertas preferencias hacia los 2 años.",
          "Se impone el uso de la mano derecha por imitación."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Comienza a manifestarse con ciertas preferencias hacia los 2 años.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 40",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q41",
        "number": 41,
        "topicId": 0,
        "question": "¿Qué papel desempeña el educador en el desarrollo físico-motor de los niños de 0 a 3 años?",
        "options": [
          "Supervisar y promover actividades motrices adecuadas al ritmo del niño.",
          "Imponer actividades físicas sin considerar las necesidades individuales.",
          "Fomentar la competencia en habilidades motrices específicas.",
          "Limitar las actividades físicas para evitar riesgos."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Supervisar y promover actividades motrices adecuadas al ritmo del niño.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 41",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q42",
        "number": 42,
        "topicId": 0,
        "question": "¿Qué se entiende por \"holofrase\" en el contexto del desarrollo del lenguaje en los niños/as pequeños?",
        "options": [
          "La repetición mecánica de sílabas sin intención comunicativa.",
          "El uso de sonidos guturales sin estructura silábica.",
          "La formación de una oración con estructura gramatical completa.",
          "La utilización de una sola palabra para expresar una idea completa."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) La utilización de una sola palabra para expresar una idea completa.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 42",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q43",
        "number": 43,
        "topicId": 0,
        "question": "¿Cuál es una característica del llamado \"balbuceo canónico\", que aparece aproximadamente entre los 6 y 10 meses?",
        "options": [
          "Uso de frases simples con dos palabras.",
          "Repetición de sílabas como \"ba-ba\" o \"da-da\".",
          "Uso de palabras con significado.",
          "Emisión de gritos con intención comunicativa."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Repetición de sílabas como \"ba-ba\" o \"da-da\".",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 43",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q44",
        "number": 44,
        "topicId": 0,
        "question": "La adquisición de la autonomía emocional en la primera infancia depende de:",
        "options": [
          "La sobreprotección familiar.",
          "Las experiencias de confianza, apoyo y modelado de las figuras de referencia.",
          "La competitividad entre iguales.",
          "El aislamiento. 7 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Las experiencias de confianza, apoyo y modelado de las figuras de referencia.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 44",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q45",
        "number": 45,
        "topicId": 0,
        "question": "Durante la etapa sensoriomotora (0-2 años), según Piaget:",
        "options": [
          "El pensamiento es lógico-formal.",
          "El lenguaje es la principal herramienta de aprendizaje.",
          "El conocimiento se adquiere mediante la percepción y la acción.",
          "Se produce la conservación de la materia."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) El conocimiento se adquiere mediante la percepción y la acción.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 45",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q46",
        "number": 46,
        "topicId": 0,
        "question": "El conocimiento del medio a los 0-3 años se produce principalmente por:",
        "options": [
          "La repetición de mensajes u oraciones.",
          "Esquemas prefijados.",
          "Observación, exploración y manipulación de objetos.",
          "Ninguna de las anteriores es correcta."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Observación, exploración y manipulación de objetos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 46",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q47",
        "number": 47,
        "topicId": 0,
        "question": "La construcción de la identidad en la educación infantil se fundamenta en:",
        "options": [
          "El aislamiento social.",
          "La interacción con iguales y adultos significativos.",
          "La memorización de contenidos.",
          "La aceptación de normas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) La interacción con iguales y adultos significativos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 47",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q48",
        "number": 48,
        "topicId": 0,
        "question": "Fomentar conductas prosociales implica:",
        "options": [
          "Estimular la competencia.",
          "Ignorar los conflictos.",
          "Evitar el juego en grupo.",
          "Reforzar la cooperación y empatía entre iguales."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Reforzar la cooperación y empatía entre iguales.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 48",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q49",
        "number": 49,
        "topicId": 0,
        "question": "La actitud del educador/a como agente de salud se centra en:",
        "options": [
          "Mantener rutinas estrictas sin flexibilidad.",
          "Transmitir hábitos saludables y fomentar la autonomía.",
          "Delegar el cuidado en las familias exclusivamente.",
          "Priorizar la instrucción académica sobre la salud."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Transmitir hábitos saludables y fomentar la autonomía.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 49",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q50",
        "number": 50,
        "topicId": 0,
        "question": "¿Cuál es la característica principal de una alimentación equilibrada en la primera infancia?",
        "options": [
          "Predominio de proteínas animales frente a vegetales.",
          "Restricción estricta de grasas en la dieta.",
          "Aporte variado de nutrientes en cantidades adecuadas.",
          "Ingesta abundante de lácteos como base exclusiva."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Aporte variado de nutrientes en cantidades adecuadas.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 50",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q51",
        "number": 51,
        "topicId": 0,
        "question": "En relación con las alergias alimentarias en niños y niñas de 0 a 3 años, es correcto afirmar que:",
        "options": [
          "Se recomienda retrasar la introducción de alimentos potencialmente alergénicos hasta después de los 3 años.",
          "Todos los niños y niñas desarrollan alergias si se introducen alimentos variados antes del año.",
          "La única medida preventiva eficaz es la alimentación exclusiva con leche materna hasta los 3 años.",
          "La introducción temprana y controlada de ciertos alimentos puede disminuir el riesgo de alergias."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) La introducción temprana y controlada de ciertos alimentos puede disminuir el riesgo de alergias.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 51",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q52",
        "number": 52,
        "topicId": 0,
        "question": "Según la Convención sobre los Derechos del Niño (1989), el principio fundamental es:",
        "options": [
          "El derecho del Estado a decidir la educación.",
          "El interés superior del niño en todas las decisiones.",
          "La obligatoriedad de la escolarización desde los 2 años.",
          "La prioridad de la familia sobre cualquier derecho infantil. 8 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) El interés superior del niño en todas las decisiones.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 52",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q53",
        "number": 53,
        "topicId": 0,
        "question": "El papel del educador/a infantil en la protección de los derechos del niño/a implica principalmente:",
        "options": [
          "Observar, acompañar y comunicar signos de desprotección.",
          "Transmitir contenidos curriculares sin atender a la dimensión social.",
          "Reservarse la información sobre posibles abusos.",
          "Evitar la relación con los servicios sociales para no interferir en la labor docente."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Observar, acompañar y comunicar signos de desprotección.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 53",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q54",
        "number": 54,
        "topicId": 0,
        "question": "La integración escolar implica:",
        "options": [
          "Adaptar la educación a las necesidades individuales.",
          "Mantener separaciones del alumnado según las diferentes necesidades.",
          "Mantener una metodología única y uniforme.",
          "Ninguna de las anteriores es correcta."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Adaptar la educación a las necesidades individuales.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 54",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q55",
        "number": 55,
        "topicId": 0,
        "question": "El Diseño Universal para el Aprendizaje (DUA) propone:",
        "options": [
          "Uniformar los ritmos de aprendizaje.",
          "Ofrecer materiales didácticos únicos.",
          "Facilitar el acceso y la participación de todo el alumnado.",
          "Seleccionar solo a quienes alcancen los objetivos."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Facilitar el acceso y la participación de todo el alumnado.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 55",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q56",
        "number": 56,
        "topicId": 0,
        "question": "¿Cuál de los siguientes NO es un indicador característico de posible maltrato infantil en la etapa de 0 a 3 años?",
        "options": [
          "Cambios bruscos en el comportamiento.",
          "Lesiones físicas inexplicables.",
          "Progreso adecuado en el desarrollo.",
          "Entregar sólo informes académicos."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Progreso adecuado en el desarrollo.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 56",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q57",
        "number": 57,
        "topicId": 0,
        "question": "Uno de los objetivos principales de la educación multicultural es:",
        "options": [
          "Favorecer la igualdad de oportunidades y la convivencia.",
          "Mantener una cultura dominante y única en la escuela.",
          "Reforzar únicamente las tradiciones familiares.",
          "Sustituir la lengua materna por la lengua oficial."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Favorecer la igualdad de oportunidades y la convivencia.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 57",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q58",
        "number": 58,
        "topicId": 0,
        "question": "Una actitud positiva hacia la diversidad cultural en la escuela se manifiesta cuando:",
        "options": [
          "Se evita hablar de diferencias para no generar conflictos.",
          "Se integran actividades que reconocen y valoran distintas culturas.",
          "Se prioriza siempre la cultura mayoritaria para facilitar la adaptación.",
          "Se reducen las celebraciones culturales a un único día al año."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Se integran actividades que reconocen y valoran distintas culturas.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 58",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q59",
        "number": 59,
        "topicId": 0,
        "question": "En la etapa infantil, la educación multicultural favorece:",
        "options": [
          "La exclusión de los alumnos recién llegados hasta que dominen la lengua.",
          "El aprendizaje prioritario de contenidos académicos sobre sociales.",
          "La adopción obligatoria de costumbres ajenas para integrarse.",
          "La construcción de la identidad personal en un contexto diverso."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) La construcción de la identidad personal en un contexto diverso.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 59",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q60",
        "number": 60,
        "topicId": 0,
        "question": "El eje estratégico del proceso de enseñanza del currículo de la etapa de Educación Infantil en Andalucía es:",
        "options": [
          "El desarrollo de las capacidades del alumnado y la integración de las competencias clave, en el curriculo y la práctica docente.",
          "El desarrollo de las competencias clave que indica el currículo.",
          "El desarrollo de una práctica docente acorde con los objetivos de la etapa.",
          "El correcto desarrollo de las competencias específicas que el docente pueda plantear. 9 de 20"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) El desarrollo de las capacidades del alumnado y la integración de las competencias clave, en el curriculo y la práctica docente.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 60",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q61",
        "number": 61,
        "topicId": 0,
        "question": "¿Cuál de las siguientes afirmaciones refleja correctamente el principio del Diseño Universal para el Aprendizaje (DUA) en Educación Infantil?",
        "options": [
          "Ofrecer una única forma de representación para asegurar la homogeneidad.",
          "Reducir al mínimo los apoyos para fomentar la autonomía.",
          "Dirigir todas las propuestas exclusivamente al alumnado con Necesidades Educativas Especiales.",
          "Garantizar múltiples formas de implicación, representación y expresión del aprendizaje."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Garantizar múltiples formas de implicación, representación y expresión del aprendizaje.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 61",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q62",
        "number": 62,
        "topicId": 0,
        "question": "¿Qué objetivo del Decreto 100/2023 por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía se relaciona directamente con la expresión corporal como medio de construcción de la identidad?",
        "options": [
          "Valorar el lenguaje escrito como forma de comunicación.",
          "Aprender normas de convivencia y respeto a la autoridad.",
          "Distinguir entre tipos de música tradicional y moderna.",
          "Conocer su propio cuerpo y el de los otros, así como sus posibilidades de acción."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Conocer su propio cuerpo y el de los otros, así como sus posibilidades de acción.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 62",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q63",
        "number": 63,
        "topicId": 0,
        "question": "En el artículo 18 de la Ley 12/2007, de 26 de Noviembre para la promoción de la igualdad de género en Andalucía sobre Consejos Escolares, se establece que:",
        "options": [
          "No se designará una persona, con formación en igualdad de género, que impulse y lleve a cabo el seguimiento de medidas educativas que fomenten la igualdad real y efectiva entre hombres y mujeres.",
          "Asistirá una persona en representación del Instituto Andaluz de la Juventud.",
          "La composición del consejo escolar respetará el equilibrio entre ambos sexos.",
          "Todo lo anterior es correcto."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) La composición del consejo escolar respetará el equilibrio entre ambos sexos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 63",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q64",
        "number": 64,
        "topicId": 0,
        "question": "El constructivismo en educación infantil se basa en:",
        "options": [
          "Repetición de contenidos.",
          "Construcción activa del conocimiento.",
          "Enseñanza directa sin participación.",
          "Competencia entre alumnos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Construcción activa del conocimiento.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 64",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q65",
        "number": 65,
        "topicId": 0,
        "question": "El Decreto 100/2023 por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía, en su artículo 12, marca que los documentos de evaluación en Educación Infantil serán:",
        "options": [
          "El Informe anual de evaluación individualizado, el Informe individualizado de final de ciclo, el Informe final de etapa y el Expediente personal.",
          "Evaluación trimestral y el Informe final de ciclo.",
          "La Evaluación trimestral, el Informe anual de evaluación, el Informe final de ciclo, el Informe final de etapa y el Expediente personal.",
          "El Informe anual de evaluación, el Informe final de ciclo y el Expediente personal."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) El Informe anual de evaluación individualizado, el Informe individualizado de final de ciclo, el Informe final de etapa y el Expediente personal.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 65",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q66",
        "number": 66,
        "topicId": 0,
        "question": "¿Cuál de los siguientes hitos del desarrollo motor grueso suele alcanzarse primero durante el primer año de vida?",
        "options": [
          "Caminar sin apoyo.",
          "Gatear.",
          "Sentarse sin ayuda.",
          "Correr. 10 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Sentarse sin ayuda.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 66",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q67",
        "number": 67,
        "topicId": 0,
        "question": "En el artículo 3 de la Ley 12/2007, de 26 de Noviembre para la promoción de la igualdad de género en Andalucía, se define la discriminación por la cual la aplicación de una disposición, criterio o práctica aparentemente neutros pone a las personas de un sexo en desventaja particular con respecto a las personas del otro como:",
        "options": [
          "Discriminación diferente por razón de sexo.",
          "Discriminación indirecta por razón de sexo.",
          "Discriminación horizontal por razón de sexo.",
          "Transversalidad."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Discriminación indirecta por razón de sexo.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 67",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q68",
        "number": 68,
        "topicId": 0,
        "question": "¿Cuál de las siguientes habilidades corresponde al desarrollo motor fino hacia los 12 meses de edad?",
        "options": [
          "Realizar pinza superior, índice y pulgar.",
          "Gatear con soltura.",
          "Mantenerse de pie sin ayuda.",
          "Caminar sin apoyo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Realizar pinza superior, índice y pulgar.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 68",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q69",
        "number": 69,
        "topicId": 0,
        "question": "La noción de objeto implica:",
        "options": [
          "Reconocer que los objetos existen aunque no estén a la vista.",
          "Que el niño/a sigue considerando que los objetos desaparecen si no los ve.",
          "Solo asociar el objeto a un color.",
          "Tomar el objeto siempre que lo ve."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Reconocer que los objetos existen aunque no estén a la vista.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 69",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q70",
        "number": 70,
        "topicId": 0,
        "question": "Según artículo 3 de la Ley 13/2007, de 26 de Noviembre, de medidas de Protección Integral contra la Violencia de Género existen las siguientes tipologías de actos de violencia de género, señale la respuesta correcta:",
        "options": [
          "Física y sexual solamente.",
          "Física, psicológica, sexual y económica.",
          "Física, psíquica y lógica.",
          "Todas las respuestas anteriores son ciertas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Física, psicológica, sexual y económica.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 70",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q71",
        "number": 71,
        "topicId": 0,
        "question": "La Norma que regula a nivel estatal las medidas de protección integral contra la violencia de género es:",
        "options": [
          "Ley Orgánica 3/2007, de 22 de marzo.",
          "Ley Orgánica 2/2007, de 19 de marzo.",
          "Ley Orgánica 1/2004, de 28 de diciembre.",
          "Ley Orgánica 3/2020, de 29 de diciembre."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Ley Orgánica 1/2004, de 28 de diciembre.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 71",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q72",
        "number": 72,
        "topicId": 0,
        "question": "El artículo de La Constitución Española de 1978 que consagra que todos tienen el derecho a la educación y reconoce la libertad de enseñanza es:",
        "options": [
          "14.",
          "15.",
          "47.",
          "29. 11 de 20"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) 29. 11 de 20",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 72",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q73",
        "number": 73,
        "topicId": 0,
        "question": "La Administración de la Junta de Andalucía garantizará como dispone el artículo 29 de la Ley 13/2007, de 26 de noviembre, de medidas de prevención y protección integral contra la violencia de género:",
        "options": [
          "La escolarización urgente de hijos e hijas, que se vean afectados por un cambio de residencia como consecuencia de la violencia de género.",
          "La escolarización cuando sea posible de hijos e hijas y de menores a su cargo, que se vean afectados por violencia de género, asegurando en todo momento la confidencialidad de su situación.",
          "La escolarización inmediata de hijos e hijas y de menores a su cargo, que se vean afectados por un cambio de residencia como consecuencia de la violencia de género, asegurando en todo momento la confidencialidad de su situación.",
          "La escolarización inmediata de hijos e hijas y de menores a su cargo, que se vean afectados por un cambio de residencia como consecuencia de un traslado de puesto de trabajo. 12 de 20 PARTE TEÓRICA. PREGUNTAS DE RESERVA"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) La escolarización inmediata de hijos e hijas y de menores a su cargo, que se vean afectados por un cambio de residencia como consecuencia de la violencia de género, asegurando en todo momento la confidencialidad de su situación.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 73",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q151",
        "number": 151,
        "topicId": 0,
        "question": "El enfoque globalizador en Educación Infantil implica:",
        "options": [
          "Separar las áreas de aprendizaje.",
          "Tratar los contenidos de forma fragmentada.",
          "Relacionar todos los aprendizajes con experiencias vividas.",
          "Evaluar sólo los contenidos académicos."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Relacionar todos los aprendizajes con experiencias vividas.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 151",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q152",
        "number": 152,
        "topicId": 0,
        "question": "El artículo 68 de la Ley 12/2007, de 26 de Noviembre para la promoción de la igualdad de género en Andalucia determina el órgano de la Administración de la Junta de Andalucía competente para la defensa y asistencia a las mujeres ante situaciones de discriminación por razón de sexo y la promoción del cumplimiento del principio de igualdad de trato de mujeres y hombres en la Comunidad Autónoma de Andalucía. Señale la respuesta correcta:",
        "options": [
          "Gabinete Jurídico de la Junta de Andalucía.",
          "El centro directivo competente en materia de Igualdad.",
          "Instituto Andaluz de la Mujer.",
          "Unidad de Igualdad de género de cada Consejería. 13 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Instituto Andaluz de la Mujer.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 152",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q74",
        "number": 74,
        "topicId": 0,
        "question": "En tu aula de 2-3 años observas que un grupo de niños/as se interesa por los caracoles que han aparecido en el patio después de la lluvia. Como educador/a infantil, para favorecer un aprendizaje activo y globalizador deberías:",
        "options": [
          "Explicar de forma magistral las características de los caracoles.",
          "Mostrar un vídeo sobre caracoles y pedirles que lo memoricen.",
          "Diseñar una situación de aprendizaje a partir del interés mostrado.",
          "Prohibirles tocar los caracoles para evitar distracciones en la rutina."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Diseñar una situación de aprendizaje a partir del interés mostrado.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 74",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q75",
        "number": 75,
        "topicId": 0,
        "question": "¿Cuál de estas respuestas enfatiza más la exploración a través de los sentidos y materiales cotidianos en el alumnado de primer ciclo?",
        "options": [
          "Método directo-instruccional.",
          "Juego heurístico.",
          "Enseñanza por descubrimiento guiado del docente sin materiales externos.",
          "Método tradicional de repetición verbal."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Juego heurístico.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 75",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q76",
        "number": 76,
        "topicId": 0,
        "question": "¿Qué característica tendría la selección de cuentos orales para niños/as del aula de 2 a 3 años?",
        "options": [
          "Deben presentar conflictos psicológicos complejos.",
          "Deben ser repetitivos, con estructuras sencillas y previsibles.",
          "Deben incluir vocabulario técnico para enriquecer el lenguaje.",
          "Deben estar destinados a ser leídos en silencio por el niño/a."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Deben ser repetitivos, con estructuras sencillas y previsibles.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 76",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q77",
        "number": 77,
        "topicId": 0,
        "question": "¿Cuál de estos instrumentos permite recoger la opinión de las familias sobre la práctica docente?",
        "options": [
          "Diario de aula.",
          "Registro de observación.",
          "Entrevistas o cuestionarios.",
          "Portafolio del alumno."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Entrevistas o cuestionarios.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 77",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q78",
        "number": 78,
        "topicId": 0,
        "question": "¿Qué finalidad educativa tiene el uso de material reciclado en tu centro?",
        "options": [
          "Solo es útil para ahorrar costes.",
          "Potencia la creatividad, el respeto al medio ambiente y el uso flexible de los objetos.",
          "Sustituye totalmente al material didáctico profesional.",
          "Se utiliza únicamente en actividades de plástica. 14 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Potencia la creatividad, el respeto al medio ambiente y el uso flexible de los objetos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 78",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q79",
        "number": 79,
        "topicId": 0,
        "question": "¿Cuándo está prevista la revisión y actualización del Proyecto educativo y asistencial?",
        "options": [
          "No es necesario hacer actualizaciones una vez aprobado.",
          "Sólo si hay un cambio en la normativa.",
          "Si se publica nueva normativa o por la autoevaluación del propio centro.",
          "Al inicio de cada curso escolar."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Si se publica nueva normativa o por la autoevaluación del propio centro.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 79",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q80",
        "number": 80,
        "topicId": 0,
        "question": "¿Qué importancia darías a los juegos al aire libre en la organización de la jornada en tu escuela?",
        "options": [
          "Son opcionales, ya que el aprendizaje se produce principalmente dentro del aula.",
          "Son esenciales, ya que favorecen desarrollo motor, social y emocional.",
          "Se reservan sólo como premio por buen comportamiento.",
          "Deben evitarse en el primer ciclo por falta de autonomía."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Son esenciales, ya que favorecen desarrollo motor, social y emocional.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 80",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q81",
        "number": 81,
        "topicId": 0,
        "question": "Ante la sospecha de maltrato, el centro de educación infantil debe:",
        "options": [
          "Guardar la información en secreto para no dañar a la familia.",
          "Resolver el caso con los propios medios del centro.",
          "Derivar al niño/a directamente a otro centro escolar.",
          "Notificar según el protocolo establecido a servicios sociales y autoridades."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Notificar según el protocolo establecido a servicios sociales y autoridades.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 81",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q82",
        "number": 82,
        "topicId": 0,
        "question": "En nuestra comunidad autónoma, ¿qué instrumento digital se utiliza para solicitar intervención del EOE especializado?",
        "options": [
          "Plataforma Moodle.",
          "Plataforma Séneca.",
          "Correo electrónico al EOE especializado.",
          "Secretaria virtual."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Plataforma Séneca.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 82",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q83",
        "number": 83,
        "topicId": 0,
        "question": "¿Cuál de las siguientes prácticas favorece el desarrollo de hábitos de autonomía en higiene?",
        "options": [
          "Limpiar siempre al niño/a sin su participación.",
          "Implicar al niño/a en las rutinas de lavado de manos antes de comer.",
          "Evitar que el niño/a experimente con el agua por miedo a mojarse.",
          "Realizar las rutinas de higiene únicamente en casa."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Implicar al niño/a en las rutinas de lavado de manos antes de comer.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 83",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q84",
        "number": 84,
        "topicId": 0,
        "question": "Respecto al descanso en la escuela infantil, ¿cuál de las siguientes afirmaciones es la más adecuada?",
        "options": [
          "Todos los niños y niñas deben dormir exactamente a la misma hora para consolidar la rutina.",
          "El descanso es secundario frente a la estimulación cognitiva temprana.",
          "La siesta es un momento educativo que debe respetar ritmos individuales.",
          "El uso de luz artificial favorece un sueño más prolongado."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) La siesta es un momento educativo que debe respetar ritmos individuales.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 84",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q85",
        "number": 85,
        "topicId": 0,
        "question": "¿Qué papel debe desempeñar el educador/a infantil ante un conflicto entre niños/as?",
        "options": [
          "Mediar y ayudar a los niños y niñas a expresar sus emociones.",
          "Sólo imponer sanciones.",
          "Actuar como juez sin escuchar a los implicados.",
          "Dejar que los niños y niñas lo resuelvan sin apoyo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Mediar y ayudar a los niños y niñas a expresar sus emociones.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 85",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q86",
        "number": 86,
        "topicId": 0,
        "question": "El control de esfínteres en un aula de Educación Infantil:",
        "options": [
          "Se debe imponer sin tener en cuenta el ritmo del niño/a.",
          "Debe respetarse y acompañarse individualmente.",
          "No es responsabilidad del educador/a infantil, corresponde a las familias.",
          "Se puede ignorar hasta la primaria. 15 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Debe respetarse y acompañarse individualmente.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 86",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q87",
        "number": 87,
        "topicId": 0,
        "question": "El Proyecto Educativo y Asistencial de centro será aprobado por:",
        "options": [
          "El Claustro de Profesores.",
          "El Equipo Directivo.",
          "El Consejo Escolar.",
          "Todas son correctas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) El Consejo Escolar.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 87",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q88",
        "number": 88,
        "topicId": 0,
        "question": "¿Cuál de las siguientes conductas presentaría un alumno/a que refleja un apego inseguro- evitativo?",
        "options": [
          "Búsqueda activa de consuelo en la figura de referencia.",
          "Indiferencia aparente ante la separación y el reencuentro.",
          "Expresión equilibrada de emociones en la exploración.",
          "Conducta de acercamiento y huida simultánea hacia el adulto."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Indiferencia aparente ante la separación y el reencuentro.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 88",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q89",
        "number": 89,
        "topicId": 0,
        "question": "¿Qué elemento es esencial para una buena narración oral en la etapa infantil?",
        "options": [
          "La expresividad del narrador/a, voz, gestos, ritmo.",
          "La utilización de proyecciones digitales.",
          "La fidelidad al texto original sin variaciones.",
          "La duración prolongada de la narración."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) La expresividad del narrador/a, voz, gestos, ritmo.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 89",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q90",
        "number": 90,
        "topicId": 0,
        "question": "El “cesto de los tesoros” diseñado por Elinor Goldschmied se orienta principalmente a:",
        "options": [
          "Niños/as de 2-3 años, para favorecer el juego simbólico.",
          "Bebés de 6 a 12 meses, para estimular la exploración sensorial y la autonomía.",
          "Niños/as de 0-6 meses, para el desarrollo exclusivo de la motricidad fina.",
          "Niños/as de 2-3 años, para iniciar la lectoescritura."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Bebés de 6 a 12 meses, para estimular la exploración sensorial y la autonomía.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 90",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q91",
        "number": 91,
        "topicId": 0,
        "question": "En la etapa de 0 a 3 años, ¿cuál es la principal finalidad de elaborar un mural en el aula?",
        "options": [
          "Practicar la reproducción exacta de un modelo artístico.",
          "Fomentar el trabajo colectivo, la expresión libre y el sentido de pertenencia al grupo.",
          "Evaluar la precisión técnica del trazo de cada niño/a.",
          "Estimular el aprendizaje de conceptos geométricos formales."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Fomentar el trabajo colectivo, la expresión libre y el sentido de pertenencia al grupo.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 91",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q92",
        "number": 92,
        "topicId": 0,
        "question": "El equipo de tránsito en los centros de Educación Infantil se constituirá en el mes de:",
        "options": [
          "Enero.",
          "Marzo.",
          "Septiembre.",
          "Julio."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Septiembre.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 92",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q93",
        "number": 93,
        "topicId": 0,
        "question": "¿Cuál de los siguientes informes es más adecuado al finalizar el curso en un centro de 0 a 3 años?",
        "options": [
          "Un boletín de notas con calificaciones numéricas.",
          "Un informe de aprendizaje que recoja los procesos observados.",
          "Un certificado con los contenidos aprobados.",
          "Una hoja de rúbricas con porcentajes. 16 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Un informe de aprendizaje que recoja los procesos observados.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 93",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q94",
        "number": 94,
        "topicId": 0,
        "question": "En relación con la selección de materiales en el aula de Infantil, ¿cuál es un criterio fundamental?",
        "options": [
          "Que fomente la autonomía, pero debe ser un material caro y de última moda.",
          "Que limite la manipulación para evitar desgaste.",
          "Que fomente la autonomía, la exploración y el juego simbólico.",
          "Que se mantenga fijo durante todo el curso para garantizar rutina."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Que fomente la autonomía, la exploración y el juego simbólico.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 94",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q95",
        "number": 95,
        "topicId": 0,
        "question": "Las experiencias plásticas en el primer ciclo de Educación Infantil, deben caracterizarse por ser:",
        "options": [
          "Actividades dirigidas y centradas en la reproducción de modelos.",
          "Técnicas avanzadas aplicadas desde edades temprana.",
          "Propuestas sensoriales, libres y basadas en la experimentación.",
          "Evaluaciones cuantitativas centradas en el resultado estético."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Propuestas sensoriales, libres y basadas en la experimentación.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 95",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q96",
        "number": 96,
        "topicId": 0,
        "question": "Para subir el Plan de Mejora a Séneca seguimos la siguiente ruta",
        "options": [
          "Centro / Proceso de Autoevaluación y Mejora / Plan de Mejora / Añadir documento Plan de mejora.",
          "Centro / Planes de Estudios / Plan de Mejora / Añadir documento Plan de mejora.",
          "Centro / Planes y Programas Educativos/ Plan de Mejora / Añadir documento Plan de mejora.",
          "Documentos a subir / Plan de Mejora / Añadir documento Plan de mejora."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Centro / Proceso de Autoevaluación y Mejora / Plan de Mejora / Añadir documento Plan de mejora.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 96",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q97",
        "number": 97,
        "topicId": 0,
        "question": "Para elaborar mis Situaciones de Aprendizaje en Séneca debo situarme en la pestaña:",
        "options": [
          "Centro.",
          "Personal.",
          "Alumnado.",
          "Utilidades."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Alumnado.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 97",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q98",
        "number": 98,
        "topicId": 0,
        "question": "¿Cuál de estas estrategias es adecuada para trabajar la interculturalidad en un aula de 0 a 3 años?",
        "options": [
          "Celebrar festividades religiosas de una única cultura.",
          "Fomentar la riqueza de las lenguas familiares y compartir tradiciones.",
          "Eliminar las diferencias culturales para evitar conflictos.",
          "Enseñar sólo tradiciones españolas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Fomentar la riqueza de las lenguas familiares y compartir tradiciones.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 98",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q99",
        "number": 99,
        "topicId": 0,
        "question": "¿Cuál de estas prácticas es más coherente con la integración de las capacidades lógico matemáticas en el ciclo 0 a 3 años?",
        "options": [
          "Juegos de clasificación por tamaño.",
          "Juegos a agrupación por colores.",
          "Juegos de orden y comparación.",
          "Todas son correctas. 17 de 20"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Todas son correctas. 17 de 20",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 99",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q100",
        "number": 100,
        "topicId": 0,
        "question": "Un educador/a observa que una niña de 18 meses prefiere explorar libremente los objetos del aula en lugar de participar en juegos dirigidos. La estrategia más adecuada es:",
        "options": [
          "Obligar a la niña a seguir el juego dirigido.",
          "Respetar su elección y ofrecer oportunidades de exploración libre.",
          "Ignorar su actividad.",
          "Retirarle los objetos para que se concentre en el juego grupal."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Respetar su elección y ofrecer oportunidades de exploración libre.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 100",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q101",
        "number": 101,
        "topicId": 0,
        "question": "En una reunión de equipo, surgen desacuerdos sobre la metodología de juego en el aula. Como coordinador/a del ciclo, ¿qué actuación sería más adecuada?",
        "options": [
          "Imponer la metodología que el educador/a infantil considere más eficaz.",
          "Delegar en cada tutor/a para que trabaje de forma independiente.",
          "Elevar el conflicto directamente a la dirección sin abordarlo en el equipo.",
          "Facilitar un espacio de debate, consensuar criterios y elaborar un acuerdo común que garantice coherencia pedagógica."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Facilitar un espacio de debate, consensuar criterios y elaborar un acuerdo común que garantice coherencia pedagógica.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 101",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q102",
        "number": 102,
        "topicId": 0,
        "question": "Un centro detecta que varias familias inmigrantes apenas participan en reuniones ni actividades. ¿Qué acción favorece mejor la inclusión?",
        "options": [
          "Enviar la misma información sin cambios, para no discriminar.",
          "Diseñar estrategias inclusivas: materiales traducidos, mediadores culturales, horarios flexibles.",
          "Reducir la comunicación al mínimo para evitar barreras lingüísticas.",
          "Proponer que se integren únicamente a través de talleres plásticos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Diseñar estrategias inclusivas: materiales traducidos, mediadores culturales, horarios flexibles.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 102",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q103",
        "number": 103,
        "topicId": 0,
        "question": "Respecto a la organización temporal del periodo de adaptación en un centro de 0-3 años, ¿qué opción es metodológicamente más adecuada?",
        "options": [
          "Establecer un calendario rígido e idéntico para todos los niños/as.",
          "Reducir el periodo de adaptación al mínimo para evitar sufrimiento prolongado.",
          "Mantener el mismo horario habitual desde el primer día para no desestructurar la rutina.",
          "Diseñar un plan general, flexible para adaptarse a ritmos individuales y necesidades de cada familia."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Diseñar un plan general, flexible para adaptarse a ritmos individuales y necesidades de cada familia.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 103",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q104",
        "number": 104,
        "topicId": 0,
        "question": "En un aula de 1-2 años, los niños se muestran poco interesados por los juguetes electrónicos disponibles. ¿Qué cambio sería más adecuado introducir?",
        "options": [
          "Incorporar materiales no estructurados, cajas, tapones, telas, accesibles para libre exploración.",
          "Comprar más juguetes electrónicos de última generación.",
          "Mantener solo los juguetes actuales para que se acostumbren.",
          "Reducir la oferta de materiales para que aprendan a usarlos más tiempo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Incorporar materiales no estructurados, cajas, tapones, telas, accesibles para libre exploración.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 104",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q105",
        "number": 105,
        "topicId": 0,
        "question": "En un aula de 0-1 año, revisas el aula: el espacio tiene muchas mesas alineadas con sillas pequeñas, pocos materiales sensoriales visibles, y no hay rincones diferenciados; todo se hace bajo indicaciones del educador/a. Algunos bebés se muestran poco exploratorios, se quedan quietos con poco estímulo. ¿Qué cambio metodológico concreto introducirías para mejorar la situación, según los principios del primer ciclo?",
        "options": [
          "Mantener la estructura de mesas y sillas, añadir instrucciones más frecuentes del docente para que los bebés sepan lo que deben hacer.",
          "Reorganizar el aula para incluir espacios con materiales sensoriales accesibles, cestas de objetos, telas, luz, texturas, rincones libres, permitir exploración libre, y reducir directividad.",
          "Eliminar las mesas y sillas, dejar todo en el suelo sin organización ni materiales visibles.",
          "Intentar que todos los bebés jueguen a lo mismo al mismo tiempo, para fomentar unión grupal, aunque no todos estén cómodos. 18 de 20"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) Reorganizar el aula para incluir espacios con materiales sensoriales accesibles, cestas de objetos, telas, luz, texturas, rincones libres, permitir exploración libre, y reducir directividad.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 105",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q106",
        "number": 106,
        "topicId": 0,
        "question": "Para realizar la solictud de intervención del EOE especializado:",
        "options": [
          "Debo realizarla a través de Séneca en la pestaña de \"Alumnado\".",
          "Debo hacerla a través de Séneca por la \"Ventanilla electrónica\".",
          "Utilizaré la Mensajería de Séneca.",
          "Puedo utilizar el correo electrónico siempre que la dirección de correo del remitente sea corporativa."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción A) Debo realizarla a través de Séneca en la pestaña de \"Alumnado\".",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 106",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q107",
        "number": 107,
        "topicId": 0,
        "question": "Una de las funciones de mi escuela infantil ante situaciones de riesgo social es:",
        "options": [
          "Sustituir totalmente a la familia en la crianza.",
          "Derivar directamente al niño a centros de acogida sin más trámites.",
          "Resolver de forma autónoma los casos de desprotección.",
          "Detectar, notificar e intervenir en coordinación con los servicios sociales."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción D) Detectar, notificar e intervenir en coordinación con los servicios sociales.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 107",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q108",
        "number": 108,
        "topicId": 0,
        "question": "¿Cuál de los siguientes signos puede considerarse un posible indicador de alerta ante una dificultad en el desarrollo del lenguaje hacia los 2 años?",
        "options": [
          "Comprensión básica de órdenes sencillas.",
          "No señalar ni hacer gestos comunicativos.",
          "Uso de entre 20 y 50 palabras.",
          "Balbuceo variado."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción B) No señalar ni hacer gestos comunicativos.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 108",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q109",
        "number": 109,
        "topicId": 0,
        "question": "¿Qué horario comprende el aula de tarde?",
        "options": [
          "Entre las 13:30h y las 20:00h.",
          "Entre las 14:00h y las 17:00h.",
          "Entre las 15:30h y las 17:00h.",
          "Entre las 17:00h y las 20:00h. 19 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Entre las 15:30h y las 17:00h.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 109",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q153",
        "number": 153,
        "topicId": 0,
        "question": "Imagina que eres educador/a infantil en un centro de 0-3 años y llega un niño al que sus padres describen como “muy dependiente, se calma solo en brazos”. ¿Cuál de estas acciones sería más adecuada para favorecer un buen periodo de adaptación, respetando los principios de esta etapa?",
        "options": [
          "Separar al niño de los padres desde el primer día durante toda la mañana para “acostumbrarlo rápido\".",
          "Proponer actividades dirigidas intensas inmediatamente, para que vea rápidamente que aquí hace cosas parecidas a casa.",
          "Permitir que la madre/padre esté presente parte del tiempo, usar la figua del tutor/a, observar los ritmos del niño, ofrecer materiales sensoriales suaves para transmitir tranquilidad.",
          "Obligar al niño a comer solo y sin ayuda desde el primer día para fomentar autonomía."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Permitir que la madre/padre esté presente parte del tiempo, usar la figua del tutor/a, observar los ritmos del niño, ofrecer materiales sensoriales suaves para transmitir tranquilidad.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 153",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2025-q154",
        "number": 154,
        "topicId": 0,
        "question": "¿Hasta que fecha tenemos de plazo para presentar el Plan de Mejora diseñado por el centro?",
        "options": [
          "Hasta el 15 de septiembre.",
          "Hasta el 15 de octubre.",
          "Hasta el 15 de noviembre.",
          "Ninguna respuesta es correcta. 20 de 20"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (OEP 2022-2023) (2025): opción C) Hasta el 15 de noviembre.",
        "reference": "Junta de Andalucía · IAAP (OEP 2022-2023) (2025) · Pregunta oficial nº 154",
        "difficulty": "media"
      }
    ]
  },
  {
    "id": "andalucia-2024",
    "title": "Junta de Andalucía · IAAP (Estabilización 2024)",
    "region": "Andalucía",
    "year": "2024",
    "role": "Educador/a Infantil (Grupo II)",
    "description": "Cuestionario oficial del ejercicio único de concurso-oposición del IAAP (18/02/2024) con más de 100 preguntas de psicopedagogía, salud infantil, hábitos y práctica educativa.",
    "questionsPdf": "/examenes-oficiales/andalucia-2024-preguntas.pdf",
    "answersPdf": "/examenes-oficiales/andalucia-2024-respuestas.pdf",
    "sourceQuestionsUrl": "https://www.juntadeandalucia.es/sites/default/files/2024-06/185587.pdf",
    "sourceAnswersUrl": "https://www.juntadeandalucia.es/sites/default/files/2024-06/185591.pdf",
    "questions": [
      {
        "id": "andalucia-2024-q1",
        "number": 1,
        "topicId": 0,
        "question": "Según el Decreto 149/2009 de 12 de mayo, por el que se regulan los centros que imparten el primer ciclo de la Educación Infantil, ¿cuál de las siguientes funciones corresponde a la categoría profesional de Educador/a Infantil?.",
        "options": [
          "Participar o elaborar programas en base a objetivos fijados para la población atendida.",
          "Aplicar las técnicas requeridas para el aprendizaje de hábitos, conductas y actividades deseadas y la extinción de las no deseables o inadaptativas.",
          "Desarrollar la función de tutoría, asesorar, informar u orientar sobre los casos que requieran a familiares, instituciones, equipos, profesionales o interesados.",
          "El Decreto 149/2009 no recoge funciones de esta categoría profesional."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) El Decreto 149/2009 no recoge funciones de esta categoría profesional.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 1",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q2",
        "number": 2,
        "topicId": 0,
        "question": "Señala la respuesta correcta según el Decreto 100/2023, de 9 de mayo, por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía.",
        "options": [
          "Las situaciones de aprendizaje implican la realización de un conjunto de actividades articuladas para lograr que el alumnado desarrolle las competencias específicas en un contexto dado.",
          "La metodología de las situaciones de aprendizaje tendrá un carácter fundamentalmente activo, motivador y participativo.",
          "La metodología de las situaciones de aprendizaje integrará en todas las áreas referencias a la vida cotidiana y al entorno inmediato.",
          "Todas las anteriores son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas las anteriores son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 2",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q3",
        "number": 3,
        "topicId": 0,
        "question": "Experimentar las posibilidades motrices y sensitivas del propio cuerpo servirá para avanzar en el control dinámico en desplazamientos y movimientos, superar retos y elaborar un esquema corporal cada vez más ajustado a la realidad. Señala la respuesta correcta.",
        "options": [
          "Esta afirmación está recogida en las Competencias Específicas del Área 1 \"Crecimiento en Armonía\", según la Orden 30 de mayo de 2023.",
          "El texto corresponde a los saberes básicos de las Competencias Específicas del Área 1 \"Crecimiento en Armonía\", según la Orden 30 de mayo de 2023.",
          "El párrafo es uno de los Criterios de Evaluación del Área 1 \"Crecimiento en Armonía\", según la Orden 30 de mayo de 2023.",
          "El enunciado no forma parte del currículo de Educación Infantil."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Esta afirmación está recogida en las Competencias Específicas del Área 1 \"Crecimiento en Armonía\", según la Orden 30 de mayo de 2023.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 3",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q4",
        "number": 4,
        "topicId": 0,
        "question": "Señala cuál de estos enunciados es correcto.",
        "options": [
          "Según Montessori, la etapa o plano del desarrollo infantil denominado \"Mente inconsciente del niño\" corresponde a una edad entre 0 y 6 años.",
          "Según Montessori, la etapa o plano del desarrollo infantil denominado \"Mente absorbente del niño\" corresponde a una edad entre 0 y 3 años, y se divide a su vez en \"Mente inconsciente\", de 0 a 18 meses, y \"Mente consciente\", de 18 a 36 meses.",
          "Según Montessori, la etapa o plano del desarrollo infantil denominado \"Mente absorbente del niño\" corresponde a una edad de entre 0 y 6 años, y se divide a su vez en \"Mente inconsciente\", de 0 a 3 años, y \"Mente consciente\", de 3 a 6 años.",
          "Ninguna de las anteriores es correcta. 1 de 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Según Montessori, la etapa o plano del desarrollo infantil denominado \"Mente absorbente del niño\" corresponde a una edad de entre 0 y 6 años, y se divide a su vez en \"Mente inconsciente\", de 0 a 3 años, y \"Mente consciente\", de 3 a 6 años.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 4",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q5",
        "number": 5,
        "topicId": 0,
        "question": "Señala la afirmación que consideres correcta en referencia a la Orden 30 de mayo de 2023 que desarrolla el currículo de Educación Infantil.",
        "options": [
          "\"Control del movimiento y de la postura en las diferentes acciones y situaciones\", es uno de los saberes básicos del primer ciclo.",
          "\"Adaptación y progresivo control del movimiento y de la postura en las diferentes acciones y situaciones de la cotidianidad del aula\", es uno de los saberes básicos del primer ciclo.",
          "\"Control del movimiento y de la postura en las diferentes acciones y situaciones\", es uno de los criterios de evaluación para el primer ciclo.",
          "\"Adaptación del movimiento y de la postura en las diferentes acciones y situaciones de la cotidianidad del aula\", es uno de los saberes básicos del primer ciclo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) \"Adaptación y progresivo control del movimiento y de la postura en las diferentes acciones y situaciones de la cotidianidad del aula\", es uno de los saberes básicos del primer ciclo.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 5",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q6",
        "number": 6,
        "topicId": 0,
        "question": "Engloba el movimiento corporal y su desarrollo, dándose un desarrollo normal o con dificultades que pueden aparecer como consecuencia de alteraciones en la adquisición de patrones normales del movimiento. Marca la respuesta correcta.",
        "options": [
          "El enunciado se refiere a las posibles alteraciones que se pueden presentar en la adquisición de la bipedestación.",
          "El enunciado define el concepto de juego.",
          "El enunciado define el concepto de psicomotricidad.",
          "Ninguna de las respuestas anteriores es correcta."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) El enunciado define el concepto de psicomotricidad.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 6",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q7",
        "number": 7,
        "topicId": 0,
        "question": "Señala la respuesta que creas que está relacionada con el concepto \"protoconversaciones\".",
        "options": [
          "Se inician sobre los 18 meses de edad.",
          "Los bebés, a través de las rutinas cotidianas de alimentación, juego, limpieza, etc., tienen intercambios comunicativos.",
          "Consiste en la construcción e intercambio de pequeñas oraciones de al menos dos palabras.",
          "Se da en los bebés con alteraciones del lenguaje, siendo un síntoma que se debe tener en cuenta en el desarrollo del niño o niña."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Los bebés, a través de las rutinas cotidianas de alimentación, juego, limpieza, etc., tienen intercambios comunicativos.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 7",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q8",
        "number": 8,
        "topicId": 0,
        "question": "En la Educación Infantil, potenciando intercambios comunicativos, se favorecerá la aparición de expresiones de creciente complejidad y corrección sobre necesidades, vivencias, emociones y sentimientos propios y de los demás. Señala la respuesta correcta.",
        "options": [
          "Esta cita corresponde a la competencia personal, social y de aprender a aprender, una de las ocho competencias clave que recoge el RD 95/2022 para la etapa de Educación Infantil.",
          "Esta cita corresponde a la competencia en comunicación lingüística, una de las ocho competencias clave que recoge el RD 95/2022 para la etapa de Educación Infantil.",
          "Esta cita corresponde a la competencia plurilingüe, una de las ocho competencias clave que recoge el RD 95/2022 para la etapa de Educación Infantil.",
          "Ninguna de las respuestas anteriores es correcta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Esta cita corresponde a la competencia en comunicación lingüística, una de las ocho competencias clave que recoge el RD 95/2022 para la etapa de Educación Infantil.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 8",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q9",
        "number": 9,
        "topicId": 0,
        "question": "Indica los principales factores de riesgo que más inciden en la aparición de trastornos del lenguaje, según Serón y Aguilar.",
        "options": [
          "Genéticos y ambientales.",
          "Diabetes y genéticos o prenatales.",
          "Genéticos, diabetes, drogas y narcóticos, prenatales, postnatales y ambientales.",
          "Ambientales, postnatales y genéticos."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Genéticos, diabetes, drogas y narcóticos, prenatales, postnatales y ambientales.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 9",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q10",
        "number": 10,
        "topicId": 0,
        "question": "¿Cuáles son las fases del apego según la teoría de John Bowlby?.",
        "options": [
          "Fase inconsciente, fase de desarrollo y fase consciente.",
          "Inicial, la primera semana. Desarrollo, hasta los 6 meses. Formal, hasta los 2 años.",
          "Fase del tacto, fase visual, fase gestual y fase total.",
          "Fase de preapego, fase de formación, fase de apego y fase de relaciones recíprocas. 2 de 21"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Fase de preapego, fase de formación, fase de apego y fase de relaciones recíprocas. 2 de 21",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 10",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q11",
        "number": 11,
        "topicId": 0,
        "question": "Según Noam Chomsky, ¿cuál es el concepto central relacionado con la adquisición del lenguaje que destaca la idea de que los niños/as tienen una predisposición biológica para aprender las estructuras del lenguaje?.",
        "options": [
          "Teoría del condicionamiento.",
          "Hipótesis del aprendizaje social.",
          "Gramática universal.",
          "Modelo conductista del lenguaje."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Gramática universal.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 11",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q12",
        "number": 12,
        "topicId": 0,
        "question": "¿A qué edad se determina que comienza la etapa preoperacional?.",
        "options": [
          "Comienza aproximadamente a los 3 años de edad, según Jacobson.",
          "Piaget la establece en los 2 años de edad.",
          "Jean Landskoy determinó su inicio aproximadamente a los 36 meses.",
          "Las respuestas a y c son correctas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Piaget la establece en los 2 años de edad.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 12",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q13",
        "number": 13,
        "topicId": 0,
        "question": "¿En qué estadio en los que Piaget divide el período sensomotor se da que el niño o niña imita sonidos y actos, lo cual indica el inicio de la memoria y representación?.",
        "options": [
          "Estadio 1: actividad refleja.",
          "Estadio 2: reacciones circulares primarias.",
          "Estadio 3: reacciones circulares secundarias.",
          "Estadio 4: coordinación de esquemas secundarios."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Estadio 4: coordinación de esquemas secundarios.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 13",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q14",
        "number": 14,
        "topicId": 0,
        "question": "La etapa preconceptual es una de las dos etapas en la que Piaget divide el período preoperacional. Señala la respuesta correcta.",
        "options": [
          "La etapa preconceptual corresponde con el período sensomotor.",
          "En esta etapa el niño/a actúa en el nivel de la representación simbólica, así se puede ver en la imitación y memoria manifiestas en dibujos, lenguaje, sueños y simulaciones.",
          "En esta etapa el niño o niña, en el mundo físico, maniobra muy de acuerdo con la realidad, pero en el pensamiento sigue siendo egocéntrico.",
          "Las respuestas b y c son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Las respuestas b y c son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 14",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q15",
        "number": 15,
        "topicId": 0,
        "question": "Indica el enunciado que consideres correcto:",
        "options": [
          "En la enseñanza en general hay que ponderar las características tanto individuales del alumnado que forma el aula como grupales, debiendo ser predominantes estas últimas por los aspectos sociales que conlleva.",
          "Los procesos de enseñanza y aprendizaje deben adaptarse a las características personales, necesidades, intereses y estilo cognitivo de cada niño o niña, como ser individual y parte de un grupo social.",
          "Los procesos de enseñanza y aprendizaje deben adaptarse a las características del grupo, a sus necesidades e intereses, siendo el individuo el que debe adquirir los conocimientos y aptitudes.",
          "Ninguno de los enunciados es correcto."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Los procesos de enseñanza y aprendizaje deben adaptarse a las características personales, necesidades, intereses y estilo cognitivo de cada niño o niña, como ser individual y parte de un grupo social.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 15",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q16",
        "number": 16,
        "topicId": 0,
        "question": "Indica cuál de las siguientes frases es correcta:",
        "options": [
          "La vida junto a los demás supone poner en juego capacidades relacionales de inserción y actuación social.",
          "La vida junto a los demás supone el establecimiento de vínculos afectivos de calidad.",
          "La vida junto a los demás potenciará la interacción y la curiosidad infantil por conocer y comprender cómo funciona su realidad, cubriendo además el objetivo fundamental de educar para vivir y convivir en el mundo.",
          "Todas las frases son correctas y complementarias. 3 de 21"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas las frases son correctas y complementarias. 3 de 21",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 16",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q17",
        "number": 17,
        "topicId": 0,
        "question": "En referencia de la función socializadora de un centro de Educación Infantil de primer ciclo y a los saberes básicos que en ellos se debe trabajar, indica cuál de los siguientes enunciados corresponde con los saberes básicos del primer ciclo de Educación Infantil.",
        "options": [
          "Primeras relaciones sociales desde el afecto, el respeto y la tolerancia. Inicio en la cooperación. Acercamiento a la diversidad derivada de distintas formas de discapacidad y sus implicaciones en la vida cotidiana.",
          "La familia y la incorporación a la escuela.",
          "La amistad y el disfrute de las interacciones entre iguales, como elemento protector, de prevención de la violencia y de desarrollo de la cultura de la paz.",
          "Otros grupos sociales de pertenencia: características, funciones y servicios."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Primeras relaciones sociales desde el afecto, el respeto y la tolerancia. Inicio en la cooperación. Acercamiento a la diversidad derivada de distintas formas de discapacidad y sus implicaciones en la vida cotidiana.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 17",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q18",
        "number": 18,
        "topicId": 0,
        "question": "Señala la respuesta que consideres correcta, según A. Fernandez Castillo y A.M. Salazar Ubago.",
        "options": [
          "La empatía es un factor de motivación de la conducta prosocial y se piensa que se desarrolla a lo largo del tercer año de vida.",
          "La empatía es un factor de motivación de la conducta prosocial y se piensa que se desarrolla a lo largo del segundo año de vida.",
          "La empatía es un factor de motivación de la conducta prosocial y se piensa que se desarrolla a lo largo del primer año de vida.",
          "Ninguna de las anteriores es correcta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) La empatía es un factor de motivación de la conducta prosocial y se piensa que se desarrolla a lo largo del segundo año de vida.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 18",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q19",
        "number": 19,
        "topicId": 0,
        "question": "¿Está recogida la higiene personal en el currículo de Educación Infantil de primer ciclo según la normativa andaluza? Marca la respuesta correcta.",
        "options": [
          "No, la higiene personal corresponde al ámbito familiar por lo que no está contemplada en el currículo.",
          "Sí, en la Orden de 30 de mayo de 2023 se recoge la higiene en las competencias específicas y en los saberes básicos.",
          "El Decreto 100/2023 indica que la higiene personal del alumnado se puede incluir en el currículo que trabaja el centro atendiendo a la autonomía pedagógica de los centros; este debe recogerse en el Proyecto Educativo y Asistencial.",
          "Ninguna de las respuestas anteriores es correcta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Sí, en la Orden de 30 de mayo de 2023 se recoge la higiene en las competencias específicas y en los saberes básicos.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 19",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q20",
        "number": 20,
        "topicId": 0,
        "question": "¿Por qué instituciones está avalado el desarrollo de la Promoción y la Educación para la Salud en el marco educativo?",
        "options": [
          "La OMS y la UNESCO.",
          "El Consejo de Europa y la Organizacion para la Cooperación y el Desarrollo Económico (OCDE).",
          "UNICEF, la Comisión Europea y el Observatorio Europeo de las Drogas y las Toxicomanías.",
          "Todas las anteriores son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas las anteriores son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 20",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q21",
        "number": 21,
        "topicId": 0,
        "question": "En referencia a la alimentación del alumnado en la Escuela Infantil, indica cuál de los siguientes enunciados no es correcto:",
        "options": [
          "La alimentación es trascendental para la salud de los niños y niñas.",
          "El adulto encargado de la alimentación de los niños y niñas debe promover el ritmo adecuado del momento de la comida fomentando así la corrección social.",
          "La alimentación facilita espacios privilegiados para la comunicación.",
          "Las personas responsables del cuidado y educación de los niños y niñas deben tener conocimientos sobre hábitos alimentarios saludables. 4 de 21"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) El adulto encargado de la alimentación de los niños y niñas debe promover el ritmo adecuado del momento de la comida fomentando así la corrección social.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 21",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q22",
        "number": 22,
        "topicId": 0,
        "question": "Las vías causales de la obesidad se originan en los periodos más tempranos de la vida. Señala la respuesta que consideres correcta.",
        "options": [
          "Este enunciado es falso ya que en la obesidad intervienen factores metabólicos que son diferentes en cada etapa de la vida.",
          "Esta afirmación es cierta y, además, persisten a lo largo de todas las etapas de crecimiento y desarrollo hasta la etapa adulta.",
          "La afirmación es falsa. Los estudios demuestran que, aunque exista la obesidad en la primera infancia, la obesidad persistente comienza en la pubertad.",
          "El enunciado es falso, pero por motivos diferentes a los expresados en las anteriores respuestas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Esta afirmación es cierta y, además, persisten a lo largo de todas las etapas de crecimiento y desarrollo hasta la etapa adulta.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 22",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q23",
        "number": 23,
        "topicId": 0,
        "question": "Los derechos de los niños y de las niñas se recogen.... Indica la respuesta incorrecta:",
        "options": [
          "En la Declaración de Ginebra de 1924.",
          "En la Declaración de los Derechos del Niño del la ONU de 1959.",
          "En la Convención de los Derechos de la Infancia de la ONU de 1989.",
          "En la Declaración de los Derechos del niño y la niña de UNICEF de 1973."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) En la Declaración de los Derechos del niño y la niña de UNICEF de 1973.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 23",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q24",
        "number": 24,
        "topicId": 0,
        "question": "En Andalucía, ¿en qué normativa se establecen los derechos de los menores?",
        "options": [
          "Andalucía no tiene legislación propia, sobre este tema se aplica la Normativa Estatal: la Ley 26/2015, de 28 de julio, de Protección a la Infancia y a la Adolescencia, y la Ley Orgánica 8/2015, de 28 de julio.",
          "Están recogidos en el Titulo I de la Ley 1/1998, de 20 de abril, de los derechos y la atención al menor.",
          "Están recogidos en la Ley 2/1999, de 2 de febrero, de los derechos de los niños y las niñas.",
          "Ninguna de las respuestas anteriores es correcta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Están recogidos en el Titulo I de la Ley 1/1998, de 20 de abril, de los derechos y la atención al menor.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 24",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q25",
        "number": 25,
        "topicId": 0,
        "question": "De los derechos de los menores que a continuación se relacionan, indica cuál no es correcto.",
        "options": [
          "Derecho a la identificación.",
          "Derecho a una vivienda digna.",
          "Derecho a la información y a una publicidad adecuada.",
          "Derecho a la cultura, ocio, asociacionismo y participación social de la infancia."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Derecho a una vivienda digna.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 25",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q26",
        "number": 26,
        "topicId": 0,
        "question": "Según el Decreto 100/2023, de 9 de mayo, por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía, ¿qué se entiende por atención a la diversidad y a las diferencias individuales?. Señala la respuesta correcta.",
        "options": [
          "Las actuaciones que garanticen una respuesta adecuada a las demandas de todo el alumnado en contextos educativos ordinarios.",
          "El conjunto de actuaciones y medidas educativas que garantizan la mejor respuesta a las necesidades y diferencias de todo el alumnado en un entorno inclusivo, ofreciendo oportunidades reales de aprendizaje en contextos educativos ordinarios.",
          "Las medidas educativas que dan respuestas a las necesidades de todo el alumnado en un entorno inclusivo.",
          "La respuesta del sistema educativo a las necesidades y diferencias de todo el alumnado, independientemente de sus características."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) El conjunto de actuaciones y medidas educativas que garantizan la mejor respuesta a las necesidades y diferencias de todo el alumnado en un entorno inclusivo, ofreciendo oportunidades reales de aprendizaje en contextos educativos ordinarios.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 26",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q27",
        "number": 27,
        "topicId": 0,
        "question": "El procedimiento de detección del maltrato, según el Decreto 210/2018, tiene los siguientes pasos:",
        "options": [
          "1 Atención inmediata, 2 Detección y notificación, 3 Denunciar delitos, 4 Medidas urgentes de protección.",
          "1 Detección, 2 Notificación, 3 Atención inmediata.",
          "1 Denuncia, 2 Atención, 3 Medidas de protección.",
          "1 Información a la víctima, 2 Atención en necesidades, 3 Intervención psicológica, 4 Medidas de protección. 5 de 21"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) 1 Atención inmediata, 2 Detección y notificación, 3 Denunciar delitos, 4 Medidas urgentes de protección.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 27",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q28",
        "number": 28,
        "topicId": 0,
        "question": "¿Cuál es la definición de Atención temprana según la Ley 1/2023, de 16 de febrero?.",
        "options": [
          "El conjunto de intervenciones sobre las personas menores de seis años, ante posibles necesidades transitorias que presenten por trastornos en su desarrollo.",
          "El conjunto de intervenciones que tienen por objeto dar respuesta lo más pronto posible a las necesidades transitorias que presentan las personas menores con trastornos en su desarrollo o que tienen el riesgo de presentarlos.",
          "El conjunto de intervenciones dirigidas a las personas menores de seis años, a la familia y al entorno, que tienen por objeto dar respuesta lo más pronto posible a las necesidades transitorias o permanentes que presentan las personas menores con trastornos en su desarrollo o que tienen el riesgo de presentarlos.",
          "Las medidas dirigidas a promover la igualdad de oportunidades en la primera infancia."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) El conjunto de intervenciones dirigidas a las personas menores de seis años, a la familia y al entorno, que tienen por objeto dar respuesta lo más pronto posible a las necesidades transitorias o permanentes que presentan las personas menores con trastornos en su desarrollo o que tienen el riesgo de presentarlos.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 28",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q29",
        "number": 29,
        "topicId": 0,
        "question": "Situaciones de riesgo biológico, psicológico o social son aquellas que podrían alterar el proceso madurativo de una persona menor en cualquier momento de su desarrollo, aumentando las posibilidades de presentar trastornos específicos. Indica la respuesta correcta.",
        "options": [
          "Según la Ley por la que se regula la atención temprana en la Comunidad Autónoma de Andalucía, esta no es la definición de situación de riesgo bio-psico-social.",
          "Según la Ley 1/2023, de 16 de febrero, esta definición corresponde al riesgo biológico, psicológico o social y también a la presencia de indicadores evidentes para desarrollar un trastorno, suficientemente significativos para comenzar una intervención, a fin de reducir significativamente la posibilidad de presentar el trastorno o el impacto de ese trastorno en el desarrollo de la persona menor.",
          "La Ley 1/2023, de 16 de febrero, define riesgo biológico, psicológico o social como la presencia de indicadores evidentes para desarrollar un trastorno, suficientemente significativos para comenzar una intervención, a fin de reducir significativamente la posibilidad de presentar el trastorno o el impacto de ese trastorno en el desarrollo de la persona menor.",
          "Ninguna de las respuestas anteriores es correcta; la Ley que se referencia es de 2022."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Según la Ley 1/2023, de 16 de febrero, esta definición corresponde al riesgo biológico, psicológico o social y también a la presencia de indicadores evidentes para desarrollar un trastorno, suficientemente significativos para comenzar una intervención, a fin de reducir significativamente la posibilidad de presentar el trastorno o el impacto de ese trastorno en el desarrollo de la persona menor.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 29",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q30",
        "number": 30,
        "topicId": 0,
        "question": "¿La atención temprana en Andalucía se organiza según qué niveles de intervención?. Indica la respuesta correcta.",
        "options": [
          "Prevención primaria, Prevención secundaria y Prevención terciaria.",
          "Evitación, Diagnóstico y tratamiento.",
          "Detección, Diagnóstico precoz, Tratamiento y Mejora de autonomía.",
          "Ninguna de las clasificaciones es correcta."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Prevención primaria, Prevención secundaria y Prevención terciaria.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 30",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q31",
        "number": 31,
        "topicId": 0,
        "question": "¿En qué modelo se etiqueta al grupo de niñas y niños minoritario como \"culturalmente desvalido\" y como consecuencia por un lado, conduce a los grupos minoritarios a tener que optar bien por un rechazo de sus raíces culturales, bien por resistir conflictivamente a la cultura vehiculada por la institución escolar?.",
        "options": [
          "Modelo asimilacionista.",
          "Modelo compensatorio.",
          "Modelo segregacionista.",
          "Modelo integracionista."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Modelo compensatorio.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 31",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q32",
        "number": 32,
        "topicId": 0,
        "question": "¿Dónde se recogen los documentos básicos de la planificación, organización y funcionamiento de los centros que imparten el primer ciclo de Educación Infantil en Andalucía?.",
        "options": [
          "Ley Orgánica 3/2020, de 29 de diciembre.",
          "Real Decreto 95/2022, de 1 de febrero.",
          "Decreto 100/2023, de 9 de mayo.",
          "Decreto 149/2009, de 12 de mayo. 6 de 21"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Decreto 149/2009, de 12 de mayo. 6 de 21",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 32",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q33",
        "number": 33,
        "topicId": 0,
        "question": "Los elementos que articulan el currículo de la Educación Infantil según lo establecido en el artículo 2 del Real Decreto 95/2022, de 1 de febrero, son:",
        "options": [
          "Objetivos y Competencias Clave.",
          "Competencias Específicas, Saberes básicos y Criterios de Evaluación.",
          "Situaciones de aprendizaje.",
          "Todas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 33",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q34",
        "number": 34,
        "topicId": 0,
        "question": "Según las investigaciones de Leo Kanner, ¿cuál de las siguientes afirmaciones describe con precisión una característica clave del autismo infantil que él identificó en su trabajo pionero?.",
        "options": [
          "Marcada habilidad para establecer relaciones sociales profundas.",
          "Ausencia completa de intereses especializados.",
          "Ecolalia avanzada en la comunicación.",
          "\"Anhelo de soledad\" y resistencia a cambios de rutina."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) \"Anhelo de soledad\" y resistencia a cambios de rutina.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 34",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q35",
        "number": 35,
        "topicId": 0,
        "question": "Señala el enunciado que mejor describe el currículo abierto.",
        "options": [
          "Ofrece información sobre los objetivos, los contenidos, la metodología y la evaluación.",
          "Los objetivos se formulan en términos de capacidades para permitir distintas conductas en su ejecución.",
          "Permite distintos contenidos y metodologías.",
          "Los objetivos están formulados en términos de conductas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Los objetivos se formulan en términos de capacidades para permitir distintas conductas en su ejecución.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 35",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q36",
        "number": 36,
        "topicId": 0,
        "question": "El currículo de la etapa de la Educación Infantil en Andalucía...",
        "options": [
          "Ordena, organiza y relaciona los elementos que determinan los procesos de enseñanza y aprendizaje.",
          "Se desarrolla en la Orden de 30 de mayo de 2023.",
          "Concreta la competencias específicas, los criterios de evaluación y los saberes básicos para aplicarlos en diferentes situaciones que propicien la adquisición de las competencias clave.",
          "Todas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 36",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q37",
        "number": 37,
        "topicId": 0,
        "question": "En materia de Educación, la Comunidad Autónoma de Andalucía ostenta la competencia compartida para:",
        "options": [
          "El establecimiento de las enseñanzas mínimas de la Educación Infantil en la Comunidad Autónoma.",
          "El establecimiento de los planes de estudio en Andalucía.",
          "La ordenación y el currículo de la etapa de la Educación Infantil.",
          "Las respuestas b y c son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Las respuestas b y c son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 37",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q38",
        "number": 38,
        "topicId": 0,
        "question": "En el artículo 7 del Decreto 100/2023 de 9 de mayo, sobre orientaciones metodológicas para el diseño de las situaciones de aprendizaje, no se contempla entre otras que la metodología:",
        "options": [
          "Tendrá fundamentalmente un carácter activo, motivador y participativo.",
          "Partirá de los intereses del alumnado.",
          "Favorecerá el trabajo de grupo.",
          "Integrará en todas las áreas referencias a la vida cotidiana y al entorno inmediato."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Favorecerá el trabajo de grupo.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 38",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q39",
        "number": 39,
        "topicId": 0,
        "question": "El descriptor operativo para el primer ciclo de Educación Infantil: \"Disfruta con las interpretaciones musicales y las representaciones teatrales y expresa sus emociones libremente, iniciándose en el respeto a las mismas y a los demás\", se incluye dentro de la competencia clave:",
        "options": [
          "Competencia personal, social y de aprender a aprender.",
          "Competencia en comunicación lingüística.",
          "Competencia en conciencia y expresiones culturales.",
          "Competencia emprendedora. 7 de 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Competencia en conciencia y expresiones culturales.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 39",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q40",
        "number": 40,
        "topicId": 0,
        "question": "¿Qué principios deben regir la intervención educativa de 0 a 3 años?.",
        "options": [
          "Actividad del niño/a: experiencias significativas y globales.",
          "Seguridad y equilibrio emocional.",
          "Colaboración mutua de las familias y los centros, así como de su personal.",
          "Todas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 40",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q41",
        "number": 41,
        "topicId": 0,
        "question": "Las partes en las que se divide el juego heurístico son:",
        "options": [
          "Observación y manipulación.",
          "Asimilación y clasificación.",
          "Experimentación y relación.",
          "Exploración y recogida."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Exploración y recogida.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 41",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q42",
        "number": 42,
        "topicId": 0,
        "question": "Piaget vincula el juego simbólico al estadio de desarrollo:",
        "options": [
          "De operaciones concretas.",
          "Sensoriomotor.",
          "Preoperacional.",
          "De operaciones formales."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Preoperacional.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 42",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q43",
        "number": 43,
        "topicId": 0,
        "question": "El Real Decreto 95/2022, de 1 de febrero, en su artículo 2 define como \"logros que se espera que el alumnado haya alcanzado al finalizar la etapa y cuya consecución está vinculada a la adquisición de las competencias clave\"; hablamos de:",
        "options": [
          "Criterios de evaluación.",
          "Objetivos.",
          "Competencias específicas.",
          "Saberes básicos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Objetivos.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 43",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q44",
        "number": 44,
        "topicId": 0,
        "question": "\" C o n s t i t u y e n u n e l e m e n t o d e c o n e x i ó n e n t r e , p o r u n a p a r t e , l a s c o m p e t e n c i a s c l a v e y , p o r otra, los saberes básicos de las áreas y los criterios de evaluación\", son:",
        "options": [
          "Competencias específicas.",
          "Situaciones de aprendizaje.",
          "Objetivos.",
          "Descriptores operativos."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Competencias específicas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 44",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q45",
        "number": 45,
        "topicId": 0,
        "question": "Existe una jerarquía entre las distintas competencias clave, considerando en primer lugar:",
        "options": [
          "Competencia en comunicación lingüística.",
          "Competencias personal, social y de aprender a aprender.",
          "Competencia digital.",
          "No existe ninguna jerarquía."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) No existe ninguna jerarquía.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 45",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q46",
        "number": 46,
        "topicId": 0,
        "question": "Según Henry Wallon, se dan varias fases en el proceso de adquisición del movimiento; estas son:",
        "options": [
          "Estadio de los mecanismos reflejos congénitos, de las relaciones circulares primarias y de las relaciones circulares secundarias.",
          "Estadio de la coordinación de los esquemas de conducta previos, de los nuevos descubrimientos por experimentación y de las nuevas representaciones mentales.",
          "Anabolismo, estadio de la impulsividad motriz, emocional, sensoriomotor, del personalismo.",
          "Estadio preconceptual, intuitivo, de operaciones concretas y de operaciones formales. 8 de 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Anabolismo, estadio de la impulsividad motriz, emocional, sensoriomotor, del personalismo.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 46",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q47",
        "number": 47,
        "topicId": 0,
        "question": "¿Qué capacidades, de los bloques establecidos por Brune, permiten referirse a las cantidades sin especificarlas?.",
        "options": [
          "Cualitativas.",
          "Numéricas.",
          "Prenuméricas.",
          "Métricas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Prenuméricas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 47",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q48",
        "number": 48,
        "topicId": 0,
        "question": "Según Donald Winnicott, ¿qué respuesta describe el concepto de \"objeto transicional\" en el desarrollo infantil?.",
        "options": [
          "Un objeto que el niño/a utiliza exclusivamente para el juego solitario.",
          "Un objeto que simboliza la presencia materna y ayuda al niño/a a transicionar entre el yo y el no- yo.",
          "Un objeto que el niño/a utiliza solo en situaciones de estrés.",
          "Un objeto que indica una dependencia poco saludable en la madre."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Un objeto que simboliza la presencia materna y ayuda al niño/a a transicionar entre el yo y el no- yo.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 48",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q49",
        "number": 49,
        "topicId": 0,
        "question": "Según el Decreto 100/2023, los documentos de evaluación en esta etapa son:",
        "options": [
          "El informe final de ciclo y el de final de etapa, ambos individualizados.",
          "El informe anual de evaluación individualizado, el informe individualizado de final de ciclo, el informe final de etapa y el expediente personal.",
          "El informe anual de evaluación individualizado y el informe individualizado de final de ciclo.",
          "El informe anual de evaluación individualizado y el informe final de etapa."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) El informe anual de evaluación individualizado, el informe individualizado de final de ciclo, el informe final de etapa y el expediente personal.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 49",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q50",
        "number": 50,
        "topicId": 0,
        "question": "Según Sara Cone Bryant, las cualidades más apreciadas por los niños y niñas en los cuentos son:",
        "options": [
          "El lenguaje oral, la estructura secuencial y las formas lingüísticas.",
          "El entretenimiento, la estructura lineal y la memorización.",
          "Rapidez de acción, la sencillez teñida de misterio y el elemento reiterativo.",
          "Motivadoras y secuenciadas causa-efecto."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Rapidez de acción, la sencillez teñida de misterio y el elemento reiterativo.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 50",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q51",
        "number": 51,
        "topicId": 0,
        "question": "Según el Decreto 100/2023 de Educación Infantil, \"la acción educativa en esta etapa procurará la integración de las distintas experiencias y aprendizajes del alumnado desde una perspectiva global y se adaptará a sus ritmos de trabajo\", es la definición del principio general:",
        "options": [
          "Aprendizaje significativo.",
          "Cooperación.",
          "Equidad e inclusión educativa.",
          "Globalidad."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Globalidad.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 51",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q52",
        "number": 52,
        "topicId": 0,
        "question": "Según Albert Bandura y su teoría del aprendizaje social, ¿cuál es el término que utiliza para describir el proceso mediante el cual los individuos aprenden observando las acciones y consecuencias de los demás?.",
        "options": [
          "Reforzamiento positivo.",
          "Modelado.",
          "Condicionamiento operante.",
          "Asimilación social."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Modelado.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 52",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q53",
        "number": 53,
        "topicId": 0,
        "question": "Los descriptores operativos:",
        "options": [
          "Son los objetivos de cada área.",
          "Indican los niveles de desempeño esperados en el alumnado en las actividades.",
          "Orientan sobre el nivel de desempeño esperado al término del primer ciclo y de la etapa.",
          "Todas son correctas. 9 de 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Orientan sobre el nivel de desempeño esperado al término del primer ciclo y de la etapa.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 53",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q54",
        "number": 54,
        "topicId": 0,
        "question": "Dentro de la clasificación específica de diagnóstico, las técnicas subjetivas:",
        "options": [
          "Son instrumentos especialmente sensibles para revelar aspectos inconscientes de la conducta.",
          "Son instrumentos en los que el sujeto no puede manejar sus respuestas a voluntad.",
          "Son las técnicas que no están estandarizadas y su corrección no es objetiva.",
          "Son técnicas muy estructurales en su contenido y presentación."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Son las técnicas que no están estandarizadas y su corrección no es objetiva.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 54",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q55",
        "number": 55,
        "topicId": 0,
        "question": "¿Cuál de las opciones siguientes puede ser un objetivo del diagnóstico?.",
        "options": [
          "Conocer, desde el inicio, las condiciones en que se encuentra el niño y la niña para afrontar las tareas escolares.",
          "Obtener información sobre la personalidad y modo de comportamiento.",
          "Descubrir diferencias o dificultades en el aprendizaje con la finalidad de adoptar las intervenciones oportunas cuanto antes.",
          "Todas las respuestas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas las respuestas son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 55",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q56",
        "number": 56,
        "topicId": 0,
        "question": "Según el Decreto 100/2023, de 9 de mayo, se entenderá por perfil competencial la guía que identifica y define las competencias clave que el alumnado debe haber adquirido y desarrollado:",
        "options": [
          "Al principio de cada ciclo de la etapa de Educación Infantil.",
          "Al finalizar cada ciclo de la etapa de Educación Infantil.",
          "En el tercer trimestre del segundo ciclo de la etapa de Educación Infantil.",
          "En el tercer trimestre del primer ciclo de la etapa de Educación Infantil."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Al finalizar cada ciclo de la etapa de Educación Infantil.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 56",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q57",
        "number": 57,
        "topicId": 0,
        "question": "De acuerdo con lo dispuesto en el artículo 12 del Real Decreto 95/2022, de 1 de febrero, la evaluación en esta etapa será:",
        "options": [
          "Inicial, formativa y de promoción.",
          "Global, continua y formativa.",
          "Educativa, sumativa y sistemática.",
          "Individual, cualitativa y explicativa."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Global, continua y formativa.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 57",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q58",
        "number": 58,
        "topicId": 0,
        "question": "\" L o s r e f e r e n t e s q u e i n d i c a n l o s n i v e l e s d e d e s e m p e ñ o e s p e r a d o s e n e l a l u m n a d o e n l a s situaciones o actividades a las que se refieren las competencias específicas de cada área en un momento determinado de su proceso de aprendizaje\", son:",
        "options": [
          "Situaciones de aprendizaje.",
          "Saberes básicos.",
          "Criterios de evaluación.",
          "Todas son correctas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Criterios de evaluación.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 58",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q59",
        "number": 59,
        "topicId": 0,
        "question": "La evaluación en esta etapa de la Educación Infantil estará orientada a:",
        "options": [
          "Garantizar la continuidad del proceso de formación.",
          "Identificar las condiciones iniciales individuales y el ritmo y características de la evolución de cada niño o niña.",
          "Integrar las distintas experiencias y aprendizajes del alumnado.",
          "Todas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 59",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q60",
        "number": 60,
        "topicId": 0,
        "question": "¿Qué organismo autoriza la permanencia en el primer ciclo de la Educación Infantil?.",
        "options": [
          "Las Delegaciones territoriales con competencias en materia de Educación.",
          "La Consejería competente en materia de Educación.",
          "Tanto las Delegaciones territoriales, como la Consejería con competencias en materia de Educación.",
          "En el primer ciclo de la Educación Infantil no se puede autorizar la permanencia. 10 de 21"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) La Consejería competente en materia de Educación.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 60",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q61",
        "number": 61,
        "topicId": 0,
        "question": "Entre las funciones del Consejo Escolar está:",
        "options": [
          "Asignar junto al Director/a los alumnos/as a cada tutor/a.",
          "Decidir junto al Director/a, los coordinadores/as de ciclo.",
          "Aprobar la Memoria de Autoevaluación cada año.",
          "Convocar las elecciones al Consejo Escolar."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Aprobar la Memoria de Autoevaluación cada año.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 61",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q62",
        "number": 62,
        "topicId": 0,
        "question": "Los miembros del Consejo Escolar realizarán su labor:",
        "options": [
          "Durante un año.",
          "Durante dos años.",
          "Durante tres años.",
          "Durante cuatro años."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Durante dos años.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 62",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q63",
        "number": 63,
        "topicId": 0,
        "question": "¿Cuándo se convocará el proceso electoral ordinario para la elección de los componentes de los Consejos Escolares?.",
        "options": [
          "En los años pares.",
          "En los años impares.",
          "Cada cuatro años.",
          "Ninguna es correcta."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) En los años pares.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 63",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q64",
        "number": 64,
        "topicId": 0,
        "question": "La Ley 13/32007 de Medidas de Prevención y Protección Integral contra la Violencia de Género, recoge la tipología de centros de atención integral y de acogida para mujeres víctimas de violencia de género, los cuales se organizan de acuerdo con los tres niveles de atención en:",
        "options": [
          "Centros de valoración, casas de acogida y viviendas tuteladas.",
          "Centros de tratamiento, centros de acogida y viviendas tuteladas.",
          "Centros de acogida, centros de atención integral y centros de atención especializada.",
          "Centros de emergencia, casas de acogida y pisos tutelados."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Centros de emergencia, casas de acogida y pisos tutelados.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 64",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q65",
        "number": 65,
        "topicId": 0,
        "question": "Según el artículo 12 de la Ley orgánica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres, se establece que podrá recabar la tutela judicial del derecho a la igualdad entre hombres y mujeres:",
        "options": [
          "Cualquier persona.",
          "La mujer en situación de desigualdad.",
          "Las personas físicas y jurídicas con interés legítimo, determinadas en las leyes reguladoras de estos procesos.",
          "La Fiscalía de Violencia de Género."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Cualquier persona.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 65",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q66",
        "number": 66,
        "topicId": 0,
        "question": "En el contexto de la documentación pedagógica, ¿cómo puede la triangulación de datos provenientes de observaciones, registros escritos y la retroalimentación de las familias en el primer ciclo de Educación Infantil enriquecer de manera más significativa la toma de decisiones pedagógicas?",
        "options": [
          "Limitando la toma de decisiones a datos cuantificables.",
          "Ignorando la retroalimentación de las familias para evitar sesgos.",
          "Favoreciendo únicamente la observación directa del educador.",
          "Ofreciendo una comprensión holística del desarrollo infantil y las necesidades individuales."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Ofreciendo una comprensión holística del desarrollo infantil y las necesidades individuales.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 66",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q67",
        "number": 67,
        "topicId": 0,
        "question": "Las Unidades de Igualdad de Género de la Junta de Andalucía se encuentran:",
        "options": [
          "En cada uno de los ocho Centros Provinciales de la Mujer.",
          "En cada una de las Delegaciones de Gobierno de la Junta de Andalucía.",
          "En cada una de las Consejerías de la Junta de Andalucía.",
          "En cada una de las Delegaciones Provinciales o Territoriales con competencias en materia de Igualdad de Género. 11 de 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) En cada una de las Consejerías de la Junta de Andalucía.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 67",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q68",
        "number": 68,
        "topicId": 0,
        "question": "Según las teorías de Viktor Lowenfeld, ¿cuál de las siguientes respuestas describe mejor la etapa temprana de garabateo en la infancia, donde el alumnado está en las primeras fases de experimentación con el movimiento y las formas, sin una representación clara de objetos reconocibles?",
        "options": [
          "Estadio preesquemático.",
          "Etapa del garabateo desordenado.",
          "Etapa del garabateo controlado.",
          "Período del dibujo esquemático."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Estadio preesquemático.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 68",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q69",
        "number": 69,
        "topicId": 0,
        "question": "¿Qué Anexo de la Orden 30 de mayo de 2023 corresponde al Informe Final del primer ciclo en Educación Infantil?",
        "options": [
          "Anexo IX.",
          "Anexo V.a.",
          "Anexo V.b.",
          "Anexo VI."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Anexo V.b.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 69",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q70",
        "number": 70,
        "topicId": 0,
        "question": "¿Qué distingue principalmente las obras de Eric Carle, dirigidas a niños y niñas de 0 a 3 años, y cómo contribuyen al desarrollo infantil?.",
        "options": [
          "Complejidad narrativa para desafiar las capacidades cognitivas.",
          "Ilustraciones coloridas y simples que atraen la atención visual y estimulan la imaginación.",
          "Uso exclusivo de texto para fomentar la lectura temprana.",
          "Contenido educativo detallado pra preparar a los niños y niñas para la escuela infantil."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Ilustraciones coloridas y simples que atraen la atención visual y estimulan la imaginación.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 70",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q71",
        "number": 71,
        "topicId": 0,
        "question": "Según la clasificación de Diana Baumrind sobre estilos parentales, ¿cómo describirías a un padre/madre que es alto en demandas pero bajo en responsividad?.",
        "options": [
          "Estilo autoritario.",
          "Estilo autoritativo.",
          "Estilo permisivo.",
          "Estilo negligente."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Estilo autoritario.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 71",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q72",
        "number": 72,
        "topicId": 0,
        "question": "¿Cuál de los siguientes conceptos clave fue desarrollado por T. Berry Brazelton en relación con el desarrollo infantil y las interacciones con los cuidadores?.",
        "options": [
          "Teoria del Apego.",
          "Método de Observación del Recién Nacido.",
          "Modelado Conductual.",
          "Enfoque Conductual del Aprendizaje."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Método de Observación del Recién Nacido.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 72",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q73",
        "number": 73,
        "topicId": 0,
        "question": "¿Cuál de los siguientes conceptos destaca Jerome Bruner como esencial para el aprendizaje, donde el alumnado construye activamente su propio conocimiento?.",
        "options": [
          "Andamiaje.",
          "Asimilación.",
          "Zona de desarrollo próximo.",
          "Modelado cognitivo. 12 de 21 PRIMERA PARTE TEÓRICA. EDUCADOR/A INFANTIL 2071. PREGUNTAS DE RESERVA 151.¿Cuál es la finalidad principal de la documentación pedagógica en el primer ciclo de la Educación Infantil y cómo beneficia el proceso de enseñanza-aprendizaje? A)Cumplir con requisitos administrativos. B)Proporcionar evidencia para evaluar únicamente el rendimiento del Educador/a Infantil. C)Facilitar la comprensión del desarrollo individual de cada niño/a y ajustar la práctica pedagógica. D)Reducir la carga de trabajo del Educador/a Infantil al externalizar la documentación. 152.Según Francesco Tonucci, ¿cómo infñuye el entorno educativo en la autonomía y el descubrimiento del niño/a durante la etapa crítica del desarrollo de la Educación Infantil?. A)El entorno debe ser estructurado y dirigido para guiar el aprendizaje. B)Un entorno rico en estímulos favorece la autonomía y el descubrimiento. C)La autonomía del niño/a no se ve afectada por el entorno educativo. D)Tonucci aboga por entornos minimalistas sin elementos estimulantes. 13 de 21 SEGUNDA PARTE PRÁCTICA. EDUCADOR/A INFANTIL 2071. PREGUNTAS ORDINARIAS Y EVALUABLES"
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Andamiaje.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 73",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q74",
        "number": 74,
        "topicId": 0,
        "question": "De los siguientes enunciados, indica cuál te parece erróneo en referencia al bienestar emocional de los niños y niñas de cero a tres años.",
        "options": [
          "Los títeres facilitan buenas dinámicas y se crean vínculos emocionales con ellos.",
          "La música, los títeres, los cuentos y el juego son cuatro herramientas fundamentales para abordar las capacidades emocionales de manera práctica.",
          "El juego facilita la interacción y la expresión libre de los sentimientos y las emociones.",
          "Los cuentos permiten que los niños y niñas se identifiquen con sus personajes y con sus sentimientos, lo que frena la canalización de sus emociones."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Los cuentos permiten que los niños y niñas se identifiquen con sus personajes y con sus sentimientos, lo que frena la canalización de sus emociones.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 74",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q75",
        "number": 75,
        "topicId": 0,
        "question": "Según la Asociación Española de Pediatría, existen unas normas básicas de almacenamiento y conservación de la leche materna. Señala la respuesta correcta.",
        "options": [
          "Una vez extraída, lo ideal es etiquetarla con la fecha y la hora de extracción. A la hora de descongelar, escoger la que sea más antigua según la etiqueta.",
          "Tras la extracción, refrigerarla cuanto antes. Si se quiere congelar, se recomienda hacerlo en las primeras 24 horas desde la extracción. Cuanto menos cambios de temperatura sufra mejor. Hay que evitar guardarla en la puerta de la nevera.",
          "Se recomienda guardar pequeñas cantidades (60-120 ml) en la nevera o congelador, dado que lo que sobre de la toma, una vez descongelado, se tendrá que desechar.",
          "Todas son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Todas son correctas.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 75",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q76",
        "number": 76,
        "topicId": 0,
        "question": "Los centros educativos de Andalucía, en colaboración con las familias del alumnado, formarán a los menores en el conocimiento y correcto ejercicio de sus derechos. Indica el enunciado que consideres correcto:",
        "options": [
          "Los derechos de la infancia hay que respetarlos, pero no formar a los/las menores de estos, ya que pueden malinterpretarlos.",
          "La información y formación de los y las menores en sus derechos es potestad exclusiva de las familias.",
          "El enunciado corresponde al Art.11.1 de Ley 1/1998, de 20 de abril, de los Derechos y la Atención al Menor.",
          "El ejercicio de los derechos de un/a menor corresponde a sus tutores legales, por lo que la normativa indica cómo han de formarse a las familias en esta materia. 14 de 21"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) El enunciado corresponde al Art.11.1 de Ley 1/1998, de 20 de abril, de los Derechos y la Atención al Menor.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 76",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q77",
        "number": 77,
        "topicId": 0,
        "question": "¿A quién le corresponde el desarrollo de las medidas de atención a la diversidad y a las diferencias individuales del alumnado?.",
        "options": [
          "A la Consejería de Desarrollo Educativo y Formación Profesional mediante la elaboración de los protocolos correspondientes.",
          "A los centros educativos en base a la autonomía que le concede el Decreto 100/2023.",
          "A los Equipos de Orientación Educativa de Zona.",
          "Al personal educativo a cargo del grupo donde se desarrollan las medidas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) A los centros educativos en base a la autonomía que le concede el Decreto 100/2023.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 77",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q78",
        "number": 78,
        "topicId": 0,
        "question": "En la puerta de tu centro detectas indicios de una situación de violencia ejercida sobre un niño o niña de tu escuela. Señala la respuesta correcta:",
        "options": [
          "Si se trata de un familiar directo no puedo hacer nada porque no se encuentra en el centro.",
          "Trataré de socorrerle, si es un familiar directo intentaré hablar con él.",
          "Estoy obligado/a a comunicar los hechos de forma inmediata a la autoridad competente.",
          "La denuncia o intervención en estos casos solo compete a las fuerzas del orden."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Estoy obligado/a a comunicar los hechos de forma inmediata a la autoridad competente.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 78",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q79",
        "number": 79,
        "topicId": 0,
        "question": "Te propones introducir material no estructurado en un rincón de juego de niños/as de 3 años. ¿Cómo podrías organizar el espacio y los materiales para fomentar la creatividad y la colaboración entre el alumnado?",
        "options": [
          "Colocar cada material en su propio espacio designado para evitar mezclarlos.",
          "Crear un espacio abierto con una variedad de materiales, animando a los niños y niñas a explorar y combinar libremente.",
          "Proporcionar instrucciones detalladas sobre cómo usar cada material.",
          "Limitar el tiempo de juego con material no estructurado para enfocarse en actividades dirigidas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Crear un espacio abierto con una variedad de materiales, animando a los niños y niñas a explorar y combinar libremente.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 79",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q80",
        "number": 80,
        "topicId": 0,
        "question": "Cuando hablamos de una metodología de acción, los niños y las niñas se pueden mover con soltura y facilidad en un espacio amplio por donde el alumnado va pasando, parte de los hechos conocidos por los niños/as de los que ya están experimentando y de los que a partir de la experiencia se puede poner en relación, utilizan los materiales que tienen a mano, permite que haya una mayor libertad de movimientos, suscita su iniciativa y le amplía horizontes, estimula su curiosidad, el adulto se convierte en dinamizador de las experiencias concretas y encauza las investigaciones. Estamos organizando la práctica escolar en:",
        "options": [
          "Rincones de actividad.",
          "Talleres.",
          "Pequeños proyectos.",
          "Experiencias."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Talleres.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 80",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q81",
        "number": 81,
        "topicId": 0,
        "question": "El principio fundamental que debe regir para la organización del horario general de la jornada en las Escuelas y Centros de Educación Infantil de primer ciclo es:",
        "options": [
          "Las necesidades de conciliación familiar del conjunto del alumnado.",
          "Respeto a los ritmos individuales, intereses y gustos del alumnado y a sus cuidados esenciales.",
          "Respeto a los tiempos del personal de la escuela y a las tareas a realizar.",
          "No es necesario marcar un horario en escuelas y centros con pocas unidades."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Respeto a los ritmos individuales, intereses y gustos del alumnado y a sus cuidados esenciales.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 81",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q82",
        "number": 82,
        "topicId": 0,
        "question": "En cuanto a los ambientes y a los espacios de una Escuela Infantil, ¿cuál de las siguientes afirmaciones no es idónea para el Primer Ciclo de Educación Infantil?:",
        "options": [
          "Espacio estructurado, donde sea fácil orientarse, reconocer la utilización de las zonas, localizar a las personas y a los objetos.",
          "Un espacio donde descubrir y explorar, no uniforme, que invite a realizar distintas experiencias, con algún escondite, algún desnivel, alguna sorpresa.",
          "Un espacio hermoso, con luz, color y armonía, decorado para lo que lo usan y con criterios estéticos incorporando elementos del entorno natural.",
          "Un espacio que se organiza teniendo en cuenta la actividad principal que se dispone y se dirige para el grupo, que cuenta con un espacio estable y las mesas y sillas constituyen el mobiliario más utilizado. 15 de 21"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Un espacio que se organiza teniendo en cuenta la actividad principal que se dispone y se dirige para el grupo, que cuenta con un espacio estable y las mesas y sillas constituyen el mobiliario más utilizado. 15 de 21",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 82",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q83",
        "number": 83,
        "topicId": 0,
        "question": "De los siguientes juegos, ¿cuál sería idóneo para niños/as que aún no andan?.",
        "options": [
          "Cesto de los Tesoros.",
          "Juegos por Rincones.",
          "Juego Heurístico.",
          "Juego Simbólico."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Cesto de los Tesoros.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 83",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q84",
        "number": 84,
        "topicId": 0,
        "question": "¿Qué edad es la más apropiada para comenzar a utilizar el Juego Heurístico?",
        "options": [
          "Entre 0 y 1 año.",
          "Entre 1 y 2 años.",
          "Entre 2 y 3 años.",
          "Todas son correctas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Entre 1 y 2 años.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 84",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q85",
        "number": 85,
        "topicId": 0,
        "question": "En el servicio de Taller de Juegos se desarrollarán actividades pedagógicas de entretenimiento y juego para los niños y niñas atendidos en los mismos, de acuerdo con su desarrollo madurativo. El establecimiento de este servicio estará supeditado a:",
        "options": [
          "Ser aprobado por el Consejo Escolar para ponerlo en funcionamiento.",
          "Una demanda mínima de 10 usuarios o usuarias por centro.",
          "Que la escuela infantil sea de titularidad de la Administración de la Junta de Andalucía y no un centro adherido.",
          "Sólo necesitará el permiso del director para ponerlo en funcionamiento."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Una demanda mínima de 10 usuarios o usuarias por centro.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 85",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q86",
        "number": 86,
        "topicId": 0,
        "question": "En el contexto de la teoría de Viktor Lowenfeld sobre el desarrollo artístico, ¿cómo documentarías y apoyarías el progreso del alumnado durante la etapa del garabateo en un entorno educativo de primer ciclo de Educación Infantil?.",
        "options": [
          "Ignorando los garabatos y centrando la atención en formas más avanzadas.",
          "Coleccionando los garabatos en un portafolio para revisión y análisis.",
          "Restringiendo el tiempo dedicado al garabateo para enfocarse en otras actividades.",
          "Evaluando críticamente los garabatos y proporcionando la retroalimentación negativa."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Coleccionando los garabatos en un portafolio para revisión y análisis.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 86",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q87",
        "number": 87,
        "topicId": 0,
        "question": "El proceso de evaluación deberá contribuir a mejorar el proceso de enseñanza y de aprendizaje mediante la valoración de la pertinencia de las estrategias metodológicas y de los recursos utilizados. Con esta finalidad:",
        "options": [
          "El claustro de profesorado evaluará la práctica educativa de todos los profesionales.",
          "El director/a del centro evaluará la práctica educativa de todos los profesionales.",
          "Todos los profesionales implicados evaluarán su propia práctica educativa.",
          "Todos los profesionales evaluarán la práctica educativa de sus compañeros/as de ciclo."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Todos los profesionales implicados evaluarán su propia práctica educativa.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 87",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q88",
        "number": 88,
        "topicId": 0,
        "question": "En la documentación pedagógica, ¿cómo puede la triaungulación de datos, provenientes de observaciones, registros escritos y la retroalimentación de las familias, enriquecer de manera significativa la toma de decisiones pedagógicas?.",
        "options": [
          "Limitando la toma de decisiones a datos cuantificables.",
          "Ignorando la retroalimentación de las familias para evitar sesgos.",
          "Favoreciendo únicamente la observación directa del Educador/a Infantil.",
          "Ofreciendo una comprensión holística del desarrollo infantil y la necesidades individuales."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Ofreciendo una comprensión holística del desarrollo infantil y la necesidades individuales.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 88",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q89",
        "number": 89,
        "topicId": 0,
        "question": "El visto bueno, la custodia y el archivo de documentos de evaluación será responsabilidad de:",
        "options": [
          "La dirección del centro y la jefatura de estudio.",
          "La secretaría del centro.",
          "Del educador/a infantil, que ostenta la jefatura de estudios del centro.",
          "La dirección, la secretaría del centro o el órgano que corresponde en cada caso. 16 de 21"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) La dirección, la secretaría del centro o el órgano que corresponde en cada caso. 16 de 21",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 89",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q90",
        "number": 90,
        "topicId": 0,
        "question": "Con carácter excepcional, el alumno/a con NEE podrá permanecer un año más en la etapa de Educación Infantil. ¿Esta medida se podrá adoptar?:",
        "options": [
          "Sí, al término del primer ciclo.",
          "Sí, al término del segundo ciclo.",
          "Sí, al término del primer o segundo ciclo.",
          "No, no podrá permanecer un año más en la etapa de Educación Infantil."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Sí, al término del primer o segundo ciclo.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 90",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q91",
        "number": 91,
        "topicId": 0,
        "question": "La valoración del proceso de aprendizaje en Educación Infantil se realizará en términos:",
        "options": [
          "Cualitativos.",
          "Cuantitativos.",
          "Cualitativos y cuantitativos.",
          "Cada tutor/a elige valorar de una manera u otra."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción A) Cualitativos.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 91",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q92",
        "number": 92,
        "topicId": 0,
        "question": "¿Cuál sería una estrategia efectiva para mantener una colaboración positiva y fomentar la participación activa de las familias en el desarrollo de sus hijos/as?.",
        "options": [
          "Proporcionar información de manera exclusiva, sin solicitar la retroalimentación de las familias.",
          "Limitar la comunicación solo a situaciones problemáticas.",
          "Establecer canales regulares de comunicación bidireccional, compartir logros y celebrar los progresos del niño/a.",
          "Excluir a las familias del proceso educativo para evitar complicaciones."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) Establecer canales regulares de comunicación bidireccional, compartir logros y celebrar los progresos del niño/a.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 92",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q93",
        "number": 93,
        "topicId": 0,
        "question": "¿Qué organismo autoriza la permanencia del alumnado de un año más en el pimer ciclo de Educación Infantil?",
        "options": [
          "Las Delegaciones territoriales con competencia en materia de Educación.",
          "La Consejería competente en materia de Educación.",
          "Tanto las Delegaciones territoriales, como la Consejería con competencias en materia de Educación.",
          "En el primer ciclo de Educación Infantil no se puede autorizar la permanencia."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) La Consejería competente en materia de Educación.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 93",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q94",
        "number": 94,
        "topicId": 0,
        "question": "Según la Orden 30 de mayo de 2023, ¿cuál sería la escala de calificación para la valoración del proceso de aprendizaje?.",
        "options": [
          "Apto y no apto.",
          "Excelente, adecuado y necesita mejorar.",
          "Conseguido en proceso.",
          "Excelente, bueno, adecuado y no adecuado."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Excelente, bueno, adecuado y no adecuado.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 94",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q95",
        "number": 95,
        "topicId": 0,
        "question": "En un centro de titularidad de la Junta de Andalucía, ¿cuántos miembros compondrían el Consejo Escolar si cuenta con 8 aulas?",
        "options": [
          "6.",
          "7.",
          "8.",
          "9."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) 7.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 95",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q96",
        "number": 96,
        "topicId": 0,
        "question": "¿Puede ser miembro del Consejo Escolar el cocinero de un centro de titularidad de la Junta de Andalucía?.",
        "options": [
          "No, sólo puede ser el personal educativo.",
          "Sí, siempre que sea elegido por el sector de la comunidad educativa a la que pertenece.",
          "Sí, cuando lo autorice el director/a del centro.",
          "Sí, si es elegido por los demás miembros del Consejo Escolar. 17 de 21"
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) Sí, siempre que sea elegido por el sector de la comunidad educativa a la que pertenece.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 96",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q97",
        "number": 97,
        "topicId": 0,
        "question": "¿El director/a del centro de Educación Infantil puede ser elegido para formar parte del Consejo Escolar?",
        "options": [
          "Sí, al igual que los demás miembros.",
          "No, el director/a del centro no puede formar parte del Consejo Escolar.",
          "No, el director/a del centro siempre presidirá el Consejo Escolar.",
          "Sí, tiene que presentarse para ser elegido/a."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción C) No, el director/a del centro siempre presidirá el Consejo Escolar.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 97",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q98",
        "number": 98,
        "topicId": 0,
        "question": "¿Cuál es el módulo de Séneca para la comunicación con las familias?",
        "options": [
          "Blogaverroes.",
          "La Web PASEN o app iPasen.",
          "Blogaverroes y la Web PASEN o app iPasen.",
          "Página web del centro."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción B) La Web PASEN o app iPasen.",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 98",
        "difficulty": "media"
      },
      {
        "id": "andalucia-2024-q99",
        "number": 99,
        "topicId": 0,
        "question": "El Consejo de Gobierno aprobará un Plan integral de sensibilización y prevención contra la violencia de género en Andalucía, coordinado por la Consejería competente en materia de violencia de género y con la participación de las Consejerías que resulten implicadas. ¿Cada cuántos años se aprobará este Plan?:",
        "options": [
          "Cuatros años.",
          "Seis años.",
          "Dos años.",
          "Cinco años. 100.De acuerdo con el artículo 9.1 de la Ley 12/2007, de 26 de noviembre, para la promoción de la Igualdad de Género en Andalucía, ¿quiénes garantizarán un uso no sexista del lenguaje y un tratamiento igualitario en los contenidos e imágenes que utilicen en el desarrollo de sus políticas?: A)Los colegios profesionales y las corporaciones de derecho público. B)Las Delegaciones del Gobierno de Estado en Andalucía. C)Las entidades instrumentales de la Junta de Andalucía. D)Las Administraciones públicas de Andalucía. 101.Observamos a un niño de un aula de dos años de nuestro centro que muestra las siguientes características: casi nunca atiende cuando se le llama, se asusta ante sonidos fuertes, no señala para mostrar o compartir su interés, tiene lenguaje, pero lo usa de manera peculiar, se ríe o llora sin motivo aparente, no reacciona casi nunca ante lo que ocurre a su alrededor. A)Son características habituales en los niños/as de esa edad. B)Muestra signos de alerta, por lo que debo realizar un programa específico de atención a la diversidad. C)Estas características son signos de alerta por una posible alteración en la comunicación por lo que debo solicitar wl asesoramiento e intervención del Equipo de Atención Temprana del E.O.E- E. D)Ninguna de las anteriores es correcta. 102.Un niño muestra resistencia a participar en ciertas actividades. Aplicando los principios de Alfie Kohn en la escuela, ¿cuál sería tu enfoque para fomentar la participación y el compromiso del alumno? A)Ofrecer un sistema de recompensas para motivar al niño a participar. B)Ignorar la resistencia del niño y centrarte en aquellos que están participando. C)Conversar con el alumno para comprender sus intereses y encontrar maneras de hacer las actividades más significativas. D)Aplicar un castigo leve para mostrar las consecuencias de la no participación. 18 de 21 103.¿Cuál de las siguientes estrategias sería más efectiva al incorporar la narración oral en un aula de niños/as de una escuela infantil?. A)Utilizar un lenguaje complejo para enriquecer el vocabulario de los niños/as. B)Contar historias de manera interactiva, utilizando tonos de voz expresivos y gestos. C)Limitar las narraciones a eventos cotidianos y familiares para mayor relevancia. D)Evitar la narración oral ya que los niños/as de estas edades no pueden comprender historias. 104.Durante el proceso de control de esfínteres, una niña muestra resistencia y ansiedad al utilizar el baño, ¿cuáles serían las estrategias que implementarías para apoyar de manera efectiva a la alumna y fomentar el desarrollo del control de esfínteres?. A)Implementación de un enfoque estándar para todo el alumnado, estableciendo horarios rígidos para ir al baño. B)Observación y registro de las reacciones individuales para ajustar las estrategias, estableciendo una comunicación abierta sobre el proceso. C)Minimización del tema y esperar a que la niña supere la resistencia por sí misma, ignorando las señales de ansiedad y continuando con la rutina establecida. D)Suspensión temporal del proceso de control de esfínteres hasta que la niña esté más cómoda, excluyéndola de actividades sociales hasta que mejore su control de esfínteres. 105.Durante una actividad en el aula de 1 a 2 años, observas que un niño se ha caido y tiene una herida en la rodilla que sangra, ¿cuáles serían los pasos inmediatos que tomarías para brindar primeros auxilios y garantizar la seguridad del alumno?. A)Continuar con la actividad y esperar a que el sangrado se detenga por sí mismo. B)Llevar al niño a la enfermería de la escuela para recibir atención. C)Limpiar la herida con agua y jabón, aplicar presión sobre la herida y notificar a la familia. D)Ignorar la situación, ya que las lesiones menores son parte del desarrollo infantil. 106.¿Cómo se describiría típicamente el apego seguro en niños/as cuando sus cuidadores regresan después de una breve separación?. A)Los niños/as muestran resistencia al contacto físico y evitan la proximidad del cuidador. B)Los niños/as buscan contacto físico con el cuidador, se consuelan fácilmente y muestran confianza en explorar. C)Los niños/as rechazan cualquier tipo de contacto físico y actúan con hostilidad. D)Los niños/as se muestran indiferentes y no buscan interactuar con el cuidador. 107.Observas a un bebé que ha comenzado a gatear y explorar activamente el entorno, ¿cómo aplicarías los principios de Emmi Pikler para apoyar el desarrollo motor y la autonomía de este bebé?. A)Proporcionar un andador para que el bebé pueda moverse más rápido. B)Colocar juguetes fuera del alcance del bebé para incentivar el estiramiento y la exploración. C)Dejar que el bebé explore libremente en un ambiente seguro y adaptado a sus necesidades, sin intervenir en sus movimientos. D)Limitar el tiempo de juego activo para evitar que el bebé se canse. 108.Para que los tutores/as legales puedan acceder a la plataforma PASEN y poder recibir comunicaciones del centro, acceder a las calificaciones, etc., es necesario que desde el centro educativo se realicen unos pasos previos, para que posteriormente los propios tutores/as legales puedan autenticarse en la Web de PASEN o a través de la app iPasen. Desde el centro hay que: A)Confirmar los tutores/as legales del alumnado en Séneca. B)Confirmar usuarios PASEN. C)Activar usuarios en Gestión PASEN a los tutores/as legales. D)Todas son correctas. 19 de 21 109.¿Cómo integrarías la metodología del \"Juego de Pintar\" de Arno Stern en el aula de 2 a 3 años para fomentar la creatividad y el desarrollo artístico del alumnado?. A)Proporcionando instrucciones detalladas para cada actividad artística. B)Limitando el acceso a los materiales para evitar desorden. C)Creando un espacio dedicado y libre de presiones para la expresión artística. D)Fomentando la competencia entre el alumnado para mejorar el rendimiento. 20 de 21"
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Junta de Andalucía · IAAP (Estabilización 2024) (2024): opción D) Cinco años. 100.De acuerdo con el artículo 9.1 de la Ley 12/2007, de 26 de noviembre, para la promoción de la Igualdad de Género en Andalucía, ¿quiénes garantizarán un uso no sexista del lenguaje y un tratamiento igualitario en los contenidos e imágenes que utilicen en el desarrollo de sus políticas?: A)Los colegios profesionales y las corporaciones de derecho público. B)Las Delegaciones del Gobierno de Estado en Andalucía. C)Las entidades instrumentales de la Junta de Andalucía. D)Las Administraciones públicas de Andalucía. 101.Observamos a un niño de un aula de dos años de nuestro centro que muestra las siguientes características: casi nunca atiende cuando se le llama, se asusta ante sonidos fuertes, no señala para mostrar o compartir su interés, tiene lenguaje, pero lo usa de manera peculiar, se ríe o llora sin motivo aparente, no reacciona casi nunca ante lo que ocurre a su alrededor. A)Son características habituales en los niños/as de esa edad. B)Muestra signos de alerta, por lo que debo realizar un programa específico de atención a la diversidad. C)Estas características son signos de alerta por una posible alteración en la comunicación por lo que debo solicitar wl asesoramiento e intervención del Equipo de Atención Temprana del E.O.E- E. D)Ninguna de las anteriores es correcta. 102.Un niño muestra resistencia a participar en ciertas actividades. Aplicando los principios de Alfie Kohn en la escuela, ¿cuál sería tu enfoque para fomentar la participación y el compromiso del alumno? A)Ofrecer un sistema de recompensas para motivar al niño a participar. B)Ignorar la resistencia del niño y centrarte en aquellos que están participando. C)Conversar con el alumno para comprender sus intereses y encontrar maneras de hacer las actividades más significativas. D)Aplicar un castigo leve para mostrar las consecuencias de la no participación. 18 de 21 103.¿Cuál de las siguientes estrategias sería más efectiva al incorporar la narración oral en un aula de niños/as de una escuela infantil?. A)Utilizar un lenguaje complejo para enriquecer el vocabulario de los niños/as. B)Contar historias de manera interactiva, utilizando tonos de voz expresivos y gestos. C)Limitar las narraciones a eventos cotidianos y familiares para mayor relevancia. D)Evitar la narración oral ya que los niños/as de estas edades no pueden comprender historias. 104.Durante el proceso de control de esfínteres, una niña muestra resistencia y ansiedad al utilizar el baño, ¿cuáles serían las estrategias que implementarías para apoyar de manera efectiva a la alumna y fomentar el desarrollo del control de esfínteres?. A)Implementación de un enfoque estándar para todo el alumnado, estableciendo horarios rígidos para ir al baño. B)Observación y registro de las reacciones individuales para ajustar las estrategias, estableciendo una comunicación abierta sobre el proceso. C)Minimización del tema y esperar a que la niña supere la resistencia por sí misma, ignorando las señales de ansiedad y continuando con la rutina establecida. D)Suspensión temporal del proceso de control de esfínteres hasta que la niña esté más cómoda, excluyéndola de actividades sociales hasta que mejore su control de esfínteres. 105.Durante una actividad en el aula de 1 a 2 años, observas que un niño se ha caido y tiene una herida en la rodilla que sangra, ¿cuáles serían los pasos inmediatos que tomarías para brindar primeros auxilios y garantizar la seguridad del alumno?. A)Continuar con la actividad y esperar a que el sangrado se detenga por sí mismo. B)Llevar al niño a la enfermería de la escuela para recibir atención. C)Limpiar la herida con agua y jabón, aplicar presión sobre la herida y notificar a la familia. D)Ignorar la situación, ya que las lesiones menores son parte del desarrollo infantil. 106.¿Cómo se describiría típicamente el apego seguro en niños/as cuando sus cuidadores regresan después de una breve separación?. A)Los niños/as muestran resistencia al contacto físico y evitan la proximidad del cuidador. B)Los niños/as buscan contacto físico con el cuidador, se consuelan fácilmente y muestran confianza en explorar. C)Los niños/as rechazan cualquier tipo de contacto físico y actúan con hostilidad. D)Los niños/as se muestran indiferentes y no buscan interactuar con el cuidador. 107.Observas a un bebé que ha comenzado a gatear y explorar activamente el entorno, ¿cómo aplicarías los principios de Emmi Pikler para apoyar el desarrollo motor y la autonomía de este bebé?. A)Proporcionar un andador para que el bebé pueda moverse más rápido. B)Colocar juguetes fuera del alcance del bebé para incentivar el estiramiento y la exploración. C)Dejar que el bebé explore libremente en un ambiente seguro y adaptado a sus necesidades, sin intervenir en sus movimientos. D)Limitar el tiempo de juego activo para evitar que el bebé se canse. 108.Para que los tutores/as legales puedan acceder a la plataforma PASEN y poder recibir comunicaciones del centro, acceder a las calificaciones, etc., es necesario que desde el centro educativo se realicen unos pasos previos, para que posteriormente los propios tutores/as legales puedan autenticarse en la Web de PASEN o a través de la app iPasen. Desde el centro hay que: A)Confirmar los tutores/as legales del alumnado en Séneca. B)Confirmar usuarios PASEN. C)Activar usuarios en Gestión PASEN a los tutores/as legales. D)Todas son correctas. 19 de 21 109.¿Cómo integrarías la metodología del \"Juego de Pintar\" de Arno Stern en el aula de 2 a 3 años para fomentar la creatividad y el desarrollo artístico del alumnado?. A)Proporcionando instrucciones detalladas para cada actividad artística. B)Limitando el acceso a los materiales para evitar desorden. C)Creando un espacio dedicado y libre de presiones para la expresión artística. D)Fomentando la competencia entre el alumnado para mejorar el rendimiento. 20 de 21",
        "reference": "Junta de Andalucía · IAAP (Estabilización 2024) (2024) · Pregunta oficial nº 99",
        "difficulty": "media"
      }
    ]
  },
  {
    "id": "murcia-2023",
    "title": "Región de Murcia · CARM (Acceso Libre)",
    "region": "Región de Murcia",
    "year": "2023",
    "role": "Cuerpo Técnico, Opción Educación Infantil",
    "description": "Primer ejercicio oficial de la Administración Pública de la Región de Murcia (BFX16L19) con 90 preguntas sobre desarrollo infantil, pedagogía activa, salud y normativa.",
    "questionsPdf": "/examenes-oficiales/murcia-2023-preguntas.pdf",
    "answersPdf": "/examenes-oficiales/murcia-2023-respuestas.pdf",
    "sourceQuestionsUrl": "https://empleopublico.carm.es/publicaciones/35931.pdf",
    "sourceAnswersUrl": "https://empleopublico.carm.es/publicaciones/35932.pdf",
    "questions": [
      {
        "id": "murcia-2023-q1",
        "number": 1,
        "topicId": 0,
        "question": "Según el calendario de vacunas de la Región de Murcia, ¿c uándo se administra la vacuna de la varicela?",
        "options": [
          "A los 12 meses y a los 4 años.",
          "A los 6 meses y a los 12 meses.",
          "A los 15 meses y a los 4 años.",
          "A los 11 meses y a los 4 años."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) A los 15 meses y a los 4 años.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 1",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q2",
        "number": 2,
        "topicId": 0,
        "question": "¿Qué enfoque pedagógico valora el juego heurístico?",
        "options": [
          "Tradicional.",
          "Montessori.",
          "Goldschmied.",
          "Waldorf."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Goldschmied.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 2",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q3",
        "number": 3,
        "topicId": 0,
        "question": "Señala el autor que sostiene la siguiente afirmación: “ el periodo de adaptación es el camino o proceso mediante el cual el niño va elaborando, desde el punto de vista de l os sentimientos, la pérdida y la ganancia que supone la separación hasta llegar voluntariamente a una adaptación interna de la misma”",
        "options": [
          "Mercedes Conde Martí.",
          "Carmen Ibáñez Sandín.",
          "Emilia Bustos.",
          "Betts y Rottenberg."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Mercedes Conde Martí.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 3",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q4",
        "number": 4,
        "topicId": 0,
        "question": "El juego simbólico es:",
        "options": [
          "La presencia de reglas estrictas y objetivos predefinidos.",
          "Simplemente intuición directa de acciones que los niños ven en su entorno, sin ninguna capacidad de crear o imaginar situaciones nuevas.",
          "Pura acción espontánea y libre, lleno de significad o como acto, sin un fin predeterminado y necesariamente ajeno a la intervención del adulto.",
          "La repetición de movimientos y acciones sin un significado concreto."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Pura acción espontánea y libre, lleno de significad o como acto, sin un fin predeterminado y necesariamente ajeno a la intervención del adulto.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 4",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q5",
        "number": 5,
        "topicId": 0,
        "question": "El derecho a la educación y a recibir una formación integral, conforme a lo establecido en la Constitución, queda recogido en la Ley 3/1995, de 21 de marzo de la Infancia de la Región de Murcia, en el artículo:",
        "options": [
          "8.",
          "7.",
          "10.",
          "4"
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) 10.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 5",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q6",
        "number": 6,
        "topicId": 0,
        "question": "La organización mundial de la salud (OMS) define la salud como:",
        "options": [
          "Ausencia de enfermedad física y psíquica.",
          "El estado completo de bienestar físico, mental y social.",
          "Ausencia de enfermedad.",
          "El estado fisiológico de equilibrio."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) El estado completo de bienestar físico, mental y social.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 6",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q7",
        "number": 7,
        "topicId": 0,
        "question": "¿Cuál de los siguientes es un derecho fundamental según la Constitución Española de 1978?",
        "options": [
          "Derecho a la propiedad privada.",
          "Derecho a la educación.",
          "Derecho a la propiedad intelectual.",
          "Derecho a la autodeterminación."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Derecho a la educación.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 7",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q8",
        "number": 8,
        "topicId": 0,
        "question": "El periodo de adaptación de Educación Infantil se recogerá en:",
        "options": [
          "La Programación general anual.",
          "El documento de organización y funcionamiento del centro.",
          "El Proyecto educativo.",
          "Las opciones a) y b) son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Las opciones a) y b) son correctas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 8",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q9",
        "number": 9,
        "topicId": 0,
        "question": "Según la Ley 3/1995, de 21 de marzo, el cese de las medidas de protección a la Infancia se produce por:",
        "options": [
          "El deseo del menor de no seguir bajo protección.",
          "La decisión de los progenitores y/o la familia extensa del menor.",
          "El acogimiento del menor.",
          "La adopción del menor."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) La adopción del menor.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 9",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q10",
        "number": 10,
        "topicId": 0,
        "question": "Según el Decreto 359/2009, de 30 de octubre, son actuaciones generales para la atención a la diversidad del alumnado:",
        "options": [
          "Los programas de enriquecimiento curricular para alumnos destacados.",
          "Las adaptaciones curriculares significativas para alumnos con necesidades educativas especiales.",
          "Las medidas de apoyo ordinario como refuerzos educativos generales.",
          "Programas y medidas de acc ión positiva que faciliten la prevención del absentismo y abandono escolar temprano."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Programas y medidas de acc ión positiva que faciliten la prevención del absentismo y abandono escolar temprano.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 10",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q11",
        "number": 11,
        "topicId": 0,
        "question": "¿Cuál de estos órganos directivos de la Administración General de la CARM tiene la consideración de alto cargo?",
        "options": [
          "Los vicesecretarios.",
          "Los subdirectores generales.",
          "Los secretarios autonómicos.",
          "Ninguna de las anteriores opciones es correcta."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Los secretarios autonómicos.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 11",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q12",
        "number": 12,
        "topicId": 0,
        "question": "¿Cuál de estas enfermedades está producida por una bacteria?",
        "options": [
          "Sarampión.",
          "Rubéola.",
          "Varicela.",
          "Escarlatina."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Escarlatina.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 12",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q13",
        "number": 13,
        "topicId": 0,
        "question": "¿Cuál de los siguientes derechos tienen l os empleados públicos, de acuerdo con los artículos 14 y 15 del Estatuto Básico del Empleado Público?",
        "options": [
          "Derecho a la movilidad en la condición de funcionario de carrera.",
          "Derecho a la afiliación política que libremente elijan.",
          "Derecho a la negociación colectiva.",
          "Ninguna de las anteriores opciones es correcta."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Derecho a la negociación colectiva.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 13",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q14",
        "number": 14,
        "topicId": 0,
        "question": "¿Cuál de estos enfoques educativos combina música y movimiento?",
        "options": [
          "Zoltan Kodály.",
          "Jacques Dalcroze.",
          "Carl Orff.",
          "Edgar Willems."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Jacques Dalcroze.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 14",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q15",
        "number": 15,
        "topicId": 0,
        "question": "El niño dice: “ Una señora está embarazada p orque ha comido mucho \". ¿Qué tipo de pensamiento está demostrando?",
        "options": [
          "Pensamiento deductivo.",
          "Pensamiento transductivo.",
          "Pensamiento abstracto.",
          "Pensamiento lógico."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Pensamiento transductivo.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 15",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q16",
        "number": 16,
        "topicId": 0,
        "question": "¿Cuál de las siguientes es una forma de implicación de los padres en la escuela infantil?",
        "options": [
          "Escalonada.",
          "Lineal.",
          "Esporádica.",
          "Simétrica."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Esporádica.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 16",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q17",
        "number": 17,
        "topicId": 0,
        "question": "La finalidad principal de las medidas de apoyo a las familias biológicas del menor según la Ley 3/1995, de 21 de marzo, es:",
        "options": [
          "Facilitar la adopción del menor por otra familia.",
          "Impedir que situaciones de carencia desemboquen en el desamparo del menor y favorecer su permanencia en el núcleo familiar.",
          "Facilitar ayudas técnico-educativas que favorezca la permanencia del menor.",
          "Conseguir prestaciones económicas que favorezca la permanencia del menor en su entorno."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Impedir que situaciones de carencia desemboquen en el desamparo del menor y favorecer su permanencia en el núcleo familiar.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 17",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q18",
        "number": 18,
        "topicId": 0,
        "question": "Ante una quemadura leve en un niño, ¿cuál es la primera acción a realizar?",
        "options": [
          "Aplicar hielo directamente sobre la quemadura.",
          "Poner debajo del grifo la zona afectada, al menos durante 10 minutos.",
          "Cubrir la quemadura con una gasa estéril y aplicar una pomada antibiótica.",
          "Reventar las ampollas si se forman."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Poner debajo del grifo la zona afectada, al menos durante 10 minutos.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 18",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q19",
        "number": 19,
        "topicId": 0,
        "question": "La orientación educativa y psicopedagógica en educación infantil estará dirigida especialmente hacia:",
        "options": [
          "El apoyo al proceso de enseñanza y aprendizaje y la acción tutorial.",
          "El conocimiento del medio natural, social y cultural.",
          "La adquisición de habilidades culturales básicas.",
          "La adquisición de valores éticos y morales."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) El apoyo al proceso de enseñanza y aprendizaje y la acción tutorial.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 19",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q20",
        "number": 20,
        "topicId": 0,
        "question": "De acuerdo con el artículo 13 de la Ley Orgánica 2/2006, de 3 de mayo, de Educación , la educación infantil contribuirá a desarrollar en los niños y niñas las capacidades que les permitan:",
        "options": [
          "Observar y explorar su entorno familiar, natural y social.",
          "Conocer, comprender y respetar las diferentes culturas.",
          "Observar su entorno cultural.",
          "Conocer y valorar los animales más próximos al ser humano."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Observar y explorar su entorno familiar, natural y social.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 20",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q21",
        "number": 21,
        "topicId": 0,
        "question": "Ordenando objetos por tamaño, ¿qué habilidad lógico -matemática estamos desarrollando?",
        "options": [
          "Contar objetos.",
          "La seriación.",
          "Identificar formas.",
          "Reconocer colores."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) La seriación.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 21",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q22",
        "number": 22,
        "topicId": 0,
        "question": "Los documentos de evaluación en la Educación Infantil son:",
        "options": [
          "Expediente académico, el historial académico, las actas de evaluación, el informe de final de ciclo y de etapa, y, en su caso, el informe personal por traslado.",
          "Expediente académico, el historial académico y las actas de evaluación.",
          "Expediente académico, el historial académico, las actas de evaluación y el informe de final de etapa.",
          "Expediente académico, el historial académico, las actas de evaluación, el informe de final de ciclo y de etapa."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Expediente académico, el historial académico, las actas de evaluación, el informe de final de ciclo y de etapa, y, en su caso, el informe personal por traslado.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 22",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q23",
        "number": 23,
        "topicId": 0,
        "question": "¿Qué principio NO se menciona en el artículo 2 del Decreto 359/2009 de 30 de octubre, como orientador de la atención a la diversidad?",
        "options": [
          "Calidad educativa.",
          "Equidad e igualdad de oportunidades.",
          "Colaboración social.",
          "Inclusión escolar."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Colaboración social.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 23",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q24",
        "number": 24,
        "topicId": 0,
        "question": "El estadio 1 del desarrollo del juicio moral propuesto por Kohlberg se caracteriza por:",
        "options": [
          "El placer que proporciona el hecho de cumplir leyes.",
          "El deseo de mantener las normas.",
          "La moralidad heterónoma.",
          "La moralidad autónoma."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) La moralidad heterónoma.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 24",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q25",
        "number": 25,
        "topicId": 0,
        "question": "Al conjunto de conocimientos, destrezas, habilidades y aptitudes adquiridas a través de los procesos formativos o la experiencia personal que permiten desempeñar y realizar los roles y situaciones requeridos por el educador se le conoce como:",
        "options": [
          "Competencia profesional.",
          "Capacidad profesional.",
          "Eficacia profesional.",
          "Perfil profesional."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Competencia profesional.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 25",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q26",
        "number": 26,
        "topicId": 0,
        "question": "Según el manual de la CARM “ Primera actuación ante urgencias en centros educativos”, ¿cuál es la acción correcta ante una hemorragia nasal en un niño?",
        "options": [
          "Inclinar la cabeza hacia atrás.",
          "Inclinar la cabeza hacia adelante con la boca abierta.",
          "Introducir algodón en las fosas nasales.",
          "Tumbar al niño con la cabeza elevada."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Inclinar la cabeza hacia adelante con la boca abierta.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 26",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q27",
        "number": 27,
        "topicId": 0,
        "question": "Respecto a la Programación General Anual (PGA):",
        "options": [
          "El artículo 145 de la LOE establece que los centros educativos elaboraran, al principio de cada curso, una Programación General Anual que recoja todos los aspectos relativos a la organización y funcionamiento del centro.",
          "En el primer ciclo de Educación Infantil no se hace.",
          "El artículo 125 de la LOE establece que los centros educativos elaboraran, al principio de cada curso, una Programación General Anual que recoja todos los aspectos relativos a la organización y funcionamiento del centro.",
          "Las tres opciones anteriores son falsas."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) El artículo 125 de la LOE establece que los centros educativos elaboraran, al principio de cada curso, una Programación General Anual que recoja todos los aspectos relativos a la organización y funcionamiento del centro.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 27",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q28",
        "number": 28,
        "topicId": 0,
        "question": "Cuando Piaget habla de asimilación se refiere a:",
        "options": [
          "La incorporación de nuevas experiencias a los esquemas existentes.",
          "La modificación de los esquemas actuales, como consecuencia de sus nuevas experiencias.",
          "La sustitución de unos esquemas por otros.",
          "Las opciones b) y c) son correctas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) La incorporación de nuevas experiencias a los esquemas existentes.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 28",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q29",
        "number": 29,
        "topicId": 0,
        "question": "La propuesta pedagógica de la etapa de Educación Infantil será aprobada por:",
        "options": [
          "La Comisión de Coordinación Pedagógica.",
          "El equipo directivo del centro.",
          "Todo el personal que preste servicio en el centro.",
          "El claustro de profesores."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) El claustro de profesores.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 29",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q30",
        "number": 30,
        "topicId": 0,
        "question": "Según la Ley Orgánica 2/2006, de 3 de mayo de Educación, la etapa de Educación Infantil supone el inicio del proceso de adquisición de las competencias clave para el aprendizaje permanente. ¿En qué documento de la Unión Europea se basan estas competencias?",
        "options": [
          "Recomendación del Consejo de la Unión Europea de 22 de mayo de 2018.",
          "Tratado de Lisboa de 2007.",
          "Declaración de Bolonia de 1999.",
          "Carta Europea de Derechos Fundamentales de 2000."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Recomendación del Consejo de la Unión Europea de 22 de mayo de 2018.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 30",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q31",
        "number": 31,
        "topicId": 0,
        "question": "Según Lowenfel, los niños comienzan a dibujar formas reconocibles y a darles significado en la etapa:",
        "options": [
          "Etapa del garabato.",
          "Etapa esquemática.",
          "Etapa preesquemática.",
          "Etapa del pseudonaturalismo."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Etapa preesquemática.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 31",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q32",
        "number": 32,
        "topicId": 0,
        "question": "De acuerdo con el artículo 30 del texto refundido de la ley de Hacienda de la Región de Murcia los estados de gastos de la Administración Pública Regional y de sus Organismos autónomos se ajustarán a una clasificación:",
        "options": [
          "Orgánica, funcional y económica",
          "Orgánica, funcional, sectorial y económica.",
          "Orgánica, funcional, desagregada por programas y económica.",
          "Orgánica, funcional, económica y desagregada por capítulos."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Orgánica, funcional, desagregada por programas y económica.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 32",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q33",
        "number": 33,
        "topicId": 0,
        "question": "¿Cuál de estos autores considera el entorno como “tercer educador”?",
        "options": [
          "Montessori.",
          "Waldorf.",
          "Reggio Emilia.",
          "Froebel."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Reggio Emilia.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 33",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q34",
        "number": 34,
        "topicId": 0,
        "question": "¿A qué edad aproximadamente un niño puede subir y bajar escaleras alternando los pies?",
        "options": [
          "12 meses.",
          "18 meses.",
          "24 meses.",
          "36 meses."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) 36 meses.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 34",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q35",
        "number": 35,
        "topicId": 0,
        "question": "El creador del conductismo y de las primeras teorías conductistas fue:",
        "options": [
          "Watson.",
          "Skinner.",
          "Vigotsky.",
          "Piaget."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Watson.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 35",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q36",
        "number": 36,
        "topicId": 0,
        "question": "Cuando un niño dice \"no me empujes”, ¿de qué función del lenguaje según Halliday está haciendo uso?",
        "options": [
          "Función instrumental.",
          "Función reguladora.",
          "Función personal.",
          "Función interactiva."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Función reguladora.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 36",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q37",
        "number": 37,
        "topicId": 0,
        "question": "Las áreas de Educación Infantil establec idas en el artículo 9 del Decreto 196/2022, de 3 de noviembre, son las siguientes:",
        "options": [
          "Crecimiento en armonía, descubrimiento y exploración del entorno y comunicación y representación de la realidad.",
          "Crecimiento en armonía, conocimiento de sí mismo y autonomía personal.",
          "Conocimiento del entorno y medios de comunicación y representación.",
          "Crecimiento en armonía, conocimiento del entorno y lenguajes."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Crecimiento en armonía, descubrimiento y exploración del entorno y comunicación y representación de la realidad.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 37",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q38",
        "number": 38,
        "topicId": 0,
        "question": "La acción principal ante un atragantamiento leve en un niño que tose con fuerza es:",
        "options": [
          "Dar palmadas en la espalda.",
          "Intentar extraer el objeto con los dedos.",
          "Animar al niño a seguir tosiendo.",
          "Realizar la maniobra de Heimlich."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Animar al niño a seguir tosiendo.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 38",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q39",
        "number": 39,
        "topicId": 0,
        "question": "De acuerdo con el artículo 39 de La ley 39/2015, del Procedimiento Administrativo Común de las Administracione s Públicas, excepcionalmente podrá otorgarse eficacia retroactiva a los actos administrativos:",
        "options": [
          "Cuando se dicten en sustitución de actos nulos.",
          "Cuando se dicten en sustitución de actos anulados.",
          "Cuando se dicten en sustitución de actos retroactivos.",
          "Ninguna de las anteriores opciones es correcta."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Cuando se dicten en sustitución de actos anulados.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 39",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q40",
        "number": 40,
        "topicId": 0,
        "question": "Si un niño llama perro a todos los animales de cuatro patas:",
        "options": [
          "Está sobreextendiendo el término perro.",
          "Está sobrerrestringiendo el término perro.",
          "No puede distinguir a los perros del resto de animales de cuatro patas.",
          "Es un problema de expansión de vocabulario durante los dos primeros años."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Está sobreextendiendo el término perro.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 40",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q41",
        "number": 41,
        "topicId": 0,
        "question": "¿Qué información, según el artículo 22 del Decreto nº 196/2022, de 3 de noviembre, NO suele incluirse en la Memoria Anual de un centro de Educación Infantil?",
        "options": [
          "El análisis de los resultados académicos de los alumnos.",
          "La evaluación del funcionamiento de los órganos de gobierno del centro.",
          "La relación detallada de los gastos económicos del centro.",
          "La propuesta de mejora para el próximo curso escolar."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) La relación detallada de los gastos económicos del centro.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 41",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q42",
        "number": 42,
        "topicId": 0,
        "question": "Señala la opción incorrecta. La tartamudez:",
        "options": [
          "Es un trastorno complejo de la comunicación que perturba la fluidez del habla.",
          "Se caracteriza por interrupciones bruscas en relación con bloqueos y espasmos musculares que afectan la c oordinación fonorespiratoria y los movimientos articulatorios.",
          "Afecta con más frecuencia a niñas que a niños.",
          "Puede coincidir con otros trastornos del lenguaje."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Afecta con más frecuencia a niñas que a niños.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 42",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q43",
        "number": 43,
        "topicId": 0,
        "question": "¿Cuál es el principio fundamental de la teoría de Arnold Gesell?",
        "options": [
          "El desarrollo es resultado exclusivo del aprendizaje.",
          "El desarrollo depende únicamente del ambiente y la experiencia.",
          "El desarrollo ocurre de forma aleatoria y desordenada.",
          "El desarrollo es un proceso determinado principalmente por la maduración biológica."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) El desarrollo es un proceso determinado principalmente por la maduración biológica.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 43",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q44",
        "number": 44,
        "topicId": 0,
        "question": "¿Cuántas raciones de fruta y verdura debe consumir al día un niño?",
        "options": [
          "2 raciones entre frutas y verduras.",
          "3 raciones entre frutas y verduras.",
          "4 raciones entre frutas y verduras.",
          "5 raciones entre frutas y verduras."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) 5 raciones entre frutas y verduras.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 44",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q45",
        "number": 45,
        "topicId": 0,
        "question": "Imagínate que estás jugando con un niño de 18 meses a señalar un objeto y decir su nombre, ¿qué tipo de formato estarías elaborando?",
        "options": [
          "Formato de acción compartida.",
          "Formato de atención compartida.",
          "Formato mixto.",
          "Formato conversacional."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Formato de atención compartida.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 45",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q46",
        "number": 46,
        "topicId": 0,
        "question": "El Decreto n. º 196/2022, de 3 de noviembre, destaca que las competencias clave en la Educación Infantil:",
        "options": [
          "Son específicas de cada área.",
          "Tienen un carácter transversal que favorece un enfoque globalizado.",
          "Se centran en habilidades cognitivas.",
          "Se aplican según el criterio del centro educativo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Tienen un carácter transversal que favorece un enfoque globalizado.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 46",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q47",
        "number": 47,
        "topicId": 0,
        "question": "¿Qué hito motor NO es típico alrededor de los nueves meses?",
        "options": [
          "Subir y bajar escaleras gateando.",
          "Hacer la pinza superior.",
          "Ponerse de pie con apoyo.",
          "Empezar a señalar con el dedo."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Subir y bajar escaleras gateando.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 47",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q48",
        "number": 48,
        "topicId": 0,
        "question": "De acuerdo con el artículo 43 de la ley 39/2015, las notificaciones por medios electrónicos se practicarán mediante comparecencia:",
        "options": [
          "En la sede electrónica de la Administración u Organismo actuante.",
          "A través de la dirección electrónica habilitada única.",
          "Por correo electrónico debidamente verificado.",
          "En la sede electrónica de la Administración u Organismo actuante, a través de la dirección electrónica habilitada única o mediante ambos sistemas, según disponga cada Administración u Organismo."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) En la sede electrónica de la Administración u Organismo actuante, a través de la dirección electrónica habilitada única o mediante ambos sistemas, según disponga cada Administración u Organismo.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 48",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q49",
        "number": 49,
        "topicId": 0,
        "question": "Según Ajuriaguerra, el desarrollo motor pasa por las siguientes fases:",
        "options": [
          "De movimientos reflejos, de movimientos rudimentarios, de habilidades motrices básicas y de habilidades motrices específicas.",
          "De organización del esqueleto motor, de organización del plano motor y de la motricidad voluntaria y se automatizan los movimientos adquiridos en la fase anterior.",
          "De impulsividad motriz, emocional, sensoriomotriz y proyectiva, del personalismo y de la socialización.",
          "Motriz temprana, motriz elemental, motriz básica y motriz avanzada."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) De organización del esqueleto motor, de organización del plano motor y de la motricidad voluntaria y se automatizan los movimientos adquiridos en la fase anterior.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 49",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q50",
        "number": 50,
        "topicId": 0,
        "question": "¿A qué autor pertenece el método ideo-visual?",
        "options": [
          "Decroly.",
          "Montessori.",
          "Claparede.",
          "Dewey."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Decroly.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 50",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q51",
        "number": 51,
        "topicId": 0,
        "question": "¿De qué plazo dispone el interesado, de acuerdo con el artículo 68 de la ley 39/2015 para subsanar su solicitud?",
        "options": [
          "10 días",
          "15 días hábiles",
          "15 días",
          "20 días."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) 10 días",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 51",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q52",
        "number": 52,
        "topicId": 0,
        "question": "De las siguientes alteraciones más frecuentes relacionadas con el sueño, señala cuál NO es una parasomnia:",
        "options": [
          "Insomnio.",
          "Sonambulismo.",
          "Terrores nocturnos.",
          "Somniloquia."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Insomnio.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 52",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q53",
        "number": 53,
        "topicId": 0,
        "question": "La pedagogía blanca se inspira en la metodología de:",
        "options": [
          "Montessori.",
          "Waldorf.",
          "Malaguzzi.",
          "Agazzi."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Montessori.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 53",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q54",
        "number": 54,
        "topicId": 0,
        "question": "Para la recogida de información del alumnado en el aula utilizamos diferentes instrumentos de evaluación que nos facilitan el proceso. ¿Cuáles son?",
        "options": [
          "Diarios de clase y anecdotarios.",
          "Listas de control y escalas de estimación.",
          "Grabaciones de vídeo o sonido.",
          "Todas las opciones anteriores son verdaderas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Todas las opciones anteriores son verdaderas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 54",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q55",
        "number": 55,
        "topicId": 0,
        "question": "Según lo establecido en el artículo 6 d el Decreto n. º 196/2022, de 3 de noviembre, por el que se establece el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de la Región de Murcia, se entiende por “saberes básicos”:",
        "options": [
          "Los contenidos, metodología y criterios de evaluación.",
          "Los conocimientos, objetivos y estándares de aprendizaje.",
          "Los objetivos, destrezas y estándares de aprendizaje.",
          "Los conocimientos, destrezas y actitudes que constituyen los contenidos propios de un área y cuyo aprendizaje es necesario para la adquisición de las competencias específicas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Los conocimientos, destrezas y actitudes que constituyen los contenidos propios de un área y cuyo aprendizaje es necesario para la adquisición de las competencias específicas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 55",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q56",
        "number": 56,
        "topicId": 0,
        "question": "Señala que característica NO corresponde con el Muguet bucal:",
        "options": [
          "Afección benigna que aparece como manchas blancas en la lengua.",
          "Es muy frecuente en los niños.",
          "Es producida por una bacteria.",
          "Se puede producir por biberones mal esterilizados."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Es producida por una bacteria.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 56",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q57",
        "number": 57,
        "topicId": 0,
        "question": "¿En qué subetapa del desarrollo sensoriomotor, según Piaget, un niño modifica intencionadamente algunos detalles de sus conductas para ver los efectos que producen esas modificaciones, como experimentar a hundir la esponja para ver si flota?",
        "options": [
          "Reacción circular primaria.",
          "Reacción circular secundaria.",
          "Reacción circular terciaria.",
          "Permanencia del objeto."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Reacción circular terciaria.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 57",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q58",
        "number": 58,
        "topicId": 0,
        "question": "¿Qué tipo de medidas específicas contempla la Ley 3/1995, de 21 de marzo, para apoyar a las familias o a las personas bajo cuya responsabilidad se encuentre el menor para p revenir situaciones de riesgo?",
        "options": [
          "Favorecer la permanencia del menor en el núcleo familiar.",
          "Separación inmediata del menor de su entorno familiar.",
          "Ayudas técnico-educativas.",
          "Facilitar la adopción del menor por otra familia."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Ayudas técnico-educativas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 58",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q59",
        "number": 59,
        "topicId": 0,
        "question": "Según Van der Voort, la televisión cubre las siguientes funciones:",
        "options": [
          "Relajación, información, socialización y evasión.",
          "Información y distracción.",
          "Socialización y relajación.",
          "Diversión, socialización y distracción."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Relajación, información, socialización y evasión.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 59",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q60",
        "number": 60,
        "topicId": 0,
        "question": "Las actuaciones generales para la atenció n a la diversidad en Educación Infantil, según el Decreto 359/2009, de 30 de octubre, garantizarán:",
        "options": [
          "Los materiales didácticos para todo el alumnado.",
          "La igualdad de oportunidades y compensarán las desigualdades derivadas de factores sociales, económicos, culturales o de otra índole.",
          "La realización de actividades extracurriculares para el alumnado con necesidades educativas especiales.",
          "La implementación de programas de educación en lenguas extranjeras."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) La igualdad de oportunidades y compensarán las desigualdades derivadas de factores sociales, económicos, culturales o de otra índole.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 60",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q61",
        "number": 61,
        "topicId": 0,
        "question": "El artículo 27 de la Ley de Régimen Ju rídico del Sector Público establece que “sólo constituyen infracciones administrativas las vulneraciones del ordenamiento jurídico previstas como tales infracciones por una Ley”. A qué principio del procedimiento sancionador corresponde tal afirmación:",
        "options": [
          "Al principio de legalidad.",
          "Al principio de tipicidad.",
          "Al principio de responsabilidad.",
          "Al principio de proporcionalidad."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Al principio de tipicidad.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 61",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q62",
        "number": 62,
        "topicId": 0,
        "question": "Los juegos de construcción desarrollan la siguiente habilidad:",
        "options": [
          "La orientación espacial.",
          "El razonamiento geométrico.",
          "La resolución de problemas.",
          "Todas las opciones anteriores son correctas."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Todas las opciones anteriores son correctas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 62",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q63",
        "number": 63,
        "topicId": 0,
        "question": "¿Qué autor es considerado un referente en la “educación sensorial”?",
        "options": [
          "Rousseau.",
          "Dewey.",
          "Froebel.",
          "Montessori."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Montessori.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 63",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q64",
        "number": 64,
        "topicId": 0,
        "question": "Según Bowlby, en las separaciones prolonga das los niños atraviesan las siguientes fases. Señala la incorrecta.",
        "options": [
          "Angustia.",
          "Protesta.",
          "Ambivalencia.",
          "Adaptación."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Angustia.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 64",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q65",
        "number": 65,
        "topicId": 0,
        "question": "Gimeno afirma que el currículo cumple una función:",
        "options": [
          "Socializadora y de aproximación entre teoría y práctica.",
          "De nexo entre prescripción y ejecución.",
          "Que precisa las intenciones educativas y propone guías de actuación.",
          "Que favorece el encuentro interdisciplinar, integrando diferentes saberes referidos al hombre."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Socializadora y de aproximación entre teoría y práctica.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 65",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q66",
        "number": 66,
        "topicId": 0,
        "question": "¿A partir de qué edad los niños dormirán entre 12 y 14 horas por la noche y una sola siesta después de comer?",
        "options": [
          "A los 6 meses.",
          "A los 12 meses.",
          "A los 18 meses.",
          "A los 24 meses."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) A los 12 meses.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 66",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q67",
        "number": 67,
        "topicId": 0,
        "question": "Las estrategias metodológicas referidas a las destrezas lógico - matemáticas deben basarse:",
        "options": [
          "En la enseñanza directa de conceptos matemáticos.",
          "En la realidad del niño.",
          "En la memorización de reglas y fórmulas matemáticas.",
          "En la práctica repetida de ejercicios de cálculo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) En la realidad del niño.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 67",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q68",
        "number": 68,
        "topicId": 0,
        "question": "¿Cuál de las siguientes competencias clave NO se menciona en el Decreto n. º 196/2022, de 3 de noviembre , para la etapa de Educación Infantil?",
        "options": [
          "Competencia en comunicación lingüística.",
          "Competencia digital.",
          "Competencia lógico-matemática y competencias básicas en lecto-escritura.",
          "Competencia plurilingüe."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Competencia lógico-matemática y competencias básicas en lecto-escritura.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 68",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q69",
        "number": 69,
        "topicId": 0,
        "question": "De acuerdo co n el artículo 67 de la Ley 39/2015, los interesados sólo podrán solicitar el inicio de un procedimiento de responsabilidad patrimonial, cuando no haya prescrito su derecho a reclamar. El derecho a reclamar prescribirá:",
        "options": [
          "A los seis meses de producido el hecho o acto que motive la indemnización o se manifieste su efecto lesivo.",
          "Al año de producido el hecho o acto que motive la indemnización o se manifieste su efecto lesivo.",
          "A los dos años de producido el hecho o acto que motive la indemnización o se manifieste su efecto lesivo.",
          "El derecho a reclamar no prescribe."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Al año de producido el hecho o acto que motive la indemnización o se manifieste su efecto lesivo.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 69",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q70",
        "number": 70,
        "topicId": 0,
        "question": "Según el Decreto 196/2022, del 3 de noviembre, un criterio de evaluación de la expresión plástica en la educación infantil es:",
        "options": [
          "La perfección técnica y el cumplimiento de estándares predefinidos.",
          "Intención expresiva de producciones plásticas y pictóricas.",
          "La comparación con los trabajos de otros niños.",
          "La capacidad del niño para seguir instrucciones precisas y reproducir modelos."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Intención expresiva de producciones plásticas y pictóricas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 70",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q71",
        "number": 71,
        "topicId": 0,
        "question": "¿Qué autor resalta el enfoque de la psicomotricidad vivenciada?",
        "options": [
          "Hume.",
          "Montessori.",
          "Aucouturier.",
          "Agazzi."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Aucouturier.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 71",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q72",
        "number": 72,
        "topicId": 0,
        "question": "¿A quién corresponde garantizar la escolarización del alumnado con necesidades específicas de apoyo educativo según la Ley Orgánica 2/2006 de 3 de mayo, de Educación?",
        "options": [
          "A las Administraciones Educativas.",
          "A la Dirección del Centro.",
          "Al Consejo Escolar del Centro.",
          "Al Departamento de Orientación."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) A las Administraciones Educativas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 72",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q73",
        "number": 73,
        "topicId": 0,
        "question": "El Real Decreto 95/2022, de 1 de febrero, establece que, para garantizar la equidad e inclusión, las medidas organizativas, metodológicas y curriculares deben regirse por:",
        "options": [
          "Los principios del Diseño Universal para el Aprendizaje.",
          "Las directrices europeas de educación infantil.",
          "Los estándares internacionales de calidad educativa.",
          "Las normativas autonómicas específicas."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Los principios del Diseño Universal para el Aprendizaje.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 73",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q74",
        "number": 74,
        "topicId": 0,
        "question": "Según el artículo 74.1 de la Ley Orgánica 2/2006, de 3 de mayo, de Educación, la escolarización del alumnado con necesidades educativas especiales se regirá por:",
        "options": [
          "Los principios de normalización e inclusión, no discriminación e igualdad efectiva en el acceso al sistema educativo.",
          "Los principios de normalización e inclusión, no discriminación e igualdad efectiva en el acceso y permanencia en el sistema educativo.",
          "Los principios de normalización, no discriminación e igualdad efectiva en el acceso y permanencia en el sistema educativo.",
          "Los principios de normalización e inclusión, no discriminación e igualdad efectiva y permanencia en el sistema educativo."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Los principios de normalización e inclusión, no discriminación e igualdad efectiva en el acceso y permanencia en el sistema educativo.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 74",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q75",
        "number": 75,
        "topicId": 0,
        "question": "¿Durante cu ánto tiempo debe persistir la conduct a de ingestión de sustancias no nutritivas para ser diagnosticada como “trastorno de pica”?",
        "options": [
          "Al menos siete días.",
          "Al menos 2 semanas.",
          "Al menos 1 mes.",
          "No hay tiempo definido."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Al menos 1 mes.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 75",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q76",
        "number": 76,
        "topicId": 0,
        "question": "¿Cuál de los siguientes es considerado un elemento básico del lenguaje plástico?",
        "options": [
          "Perspectiva.",
          "Textura.",
          "Simetría.",
          "Composición."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Textura.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 76",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q77",
        "number": 77,
        "topicId": 0,
        "question": "¿De acuerdo con el artículo 4 de la Ley de Prevención de Riesgos Laborales, qué se entenderá como \"riesgo laboral\"?",
        "options": [
          "La posibilidad de que las condiciones de trabajo supongan un peligro para un trabajador.",
          "La posibilidad de que un trabajador sufra un determinado daño derivado del trabajo.",
          "La imprudencia profesional de un trabajador en el centro de trabajo.",
          "La incapacidad temporal para realizar tareas administrativas."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) La posibilidad de que un trabajador sufra un determinado daño derivado del trabajo.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 77",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q78",
        "number": 78,
        "topicId": 0,
        "question": "¿Cuál de estos es un juego presimbólico que parte de las interacciones con los objetos?",
        "options": [
          "Jugar a construir y destruir.",
          "Balanceos.",
          "Esconderse y aparecer.",
          "Envolverse y desenvolverse."
        ],
        "correctIndex": 0,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción A) Jugar a construir y destruir.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 78",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q79",
        "number": 79,
        "topicId": 0,
        "question": "Tal y como se recoge en la Ley Orgánica 2/2006, de 3 de mayo, de Educación, p or \"alumnos con necesidades educativas especiales\" (NEE) se entiende:",
        "options": [
          "Aquellos que afrontan barreras que limitan su aprendizaje, derivadas de discapacidad o trastornos graves de conducta, a lo largo de toda su escolarización.",
          "Aquellos que afron tan barreras que limitan su acceso, presencia, participación o aprendizaje, derivadas de discapacidad o de trastornos graves de conducta, de la comunicación y del lenguaje, por un periodo de su escolarización o a lo largo de toda ella.",
          "Aquellos que afro ntan barreras que limitan su aprendizaje, derivadas de discapacidad o trastornos graves de conducta por un periodo de su escolarización.",
          "Estudiantes con talento o altas capacidades intelectuales."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Aquellos que afron tan barreras que limitan su acceso, presencia, participación o aprendizaje, derivadas de discapacidad o de trastornos graves de conducta, de la comunicación y del lenguaje, por un periodo de su escolarización o a lo largo de toda ella.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 79",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q80",
        "number": 80,
        "topicId": 0,
        "question": "El concepto de andamiaje se lo debemos a:",
        "options": [
          "Vigotsky.",
          "Piaget.",
          "Freud.",
          "Bruner."
        ],
        "correctIndex": 3,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción D) Bruner.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 80",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q81",
        "number": 81,
        "topicId": 0,
        "question": "¿Qué papel juega el gesto y el movimiento en la expresión corporal durante los primeros años?",
        "options": [
          "Son meros reflejos involuntarios.",
          "Constituyen un lenguaje preverbal esencial para la comunicación.",
          "Se desarrollan únicamente a través de la imitación directa del adulto.",
          "Tienen una función principalmente lúdica y de descarga de energía."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Constituyen un lenguaje preverbal esencial para la comunicación.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 81",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q82",
        "number": 82,
        "topicId": 0,
        "question": "Según el artículo 6 de la Ley Orgánica 2/2006, de 3 de mayo, de Educación, ¿qué elementos constituyen el currículo de l as enseñanzas reguladas por dicha ley?",
        "options": [
          "Objetivos, competencias, contenidos y criterios de evaluación.",
          "Objetivos, competencias, contenidos, métodos pedagógicos y criterios de evaluación.",
          "Objetivos, contenidos, métodos pedagógicos y criterios de evaluación.",
          "Competencias, contenidos, métodos pedagógicos y criterios de evaluación."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Objetivos, competencias, contenidos, métodos pedagógicos y criterios de evaluación.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 82",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q83",
        "number": 83,
        "topicId": 0,
        "question": "Según Juan Cervera la literatura infantil se define como:",
        "options": [
          "Conjunto de textos literarios que la sociedad ha considerado aptos para los más pequeños.",
          "La obra estética destinada a un público infantil.",
          "El conjunto de producciones y actividades que tienen como vehículo la palabra con finalidad artística o creativa y tienen como receptor al niño.",
          "Un acto de comunicación, de carácter estético, entre un receptor niño y un emisor adulto."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) El conjunto de producciones y actividades que tienen como vehículo la palabra con finalidad artística o creativa y tienen como receptor al niño.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 83",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q84",
        "number": 84,
        "topicId": 0,
        "question": "¿Cuál de los siguientes NO es un principio incluido en el artículo 3 de la Ley 7/2007, de 4 de abril, para la Igualdad entre Mujeres y Hombres, y de Protección contra la Violencia de Género en la Región de Murcia?",
        "options": [
          "La protección de derecho a la maternidad.",
          "La transversalidad.",
          "La discriminación positiva.",
          "La corresponsabilidad."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) La discriminación positiva.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 84",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q85",
        "number": 85,
        "topicId": 0,
        "question": "De acuerdo con el artículo 12 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, ¿quién tiene derecho a acceder a la información pública en los términos previstos en el artículo 105. b) de la Constitución española, desarrollados por dicha ley?:",
        "options": [
          "Todos los ciudadanos que posean la nacionalidad española.",
          "Todos los interesados en el procedimiento administrativo de que se trate.",
          "Todas las personas.",
          "Todos afectados por la resolución que recaiga en el procedimiento administrativo de que se trate."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Todas las personas.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 85",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q86",
        "number": 86,
        "topicId": 0,
        "question": "¿Cuáles son los géneros literarios tradicionales?",
        "options": [
          "Narrativa, terror y ciencia ficción.",
          "Cuento, novela y lírica.",
          "Narrativa, lírica y dramática.",
          "Novela, lírica y épica."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Narrativa, lírica y dramática.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 86",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q87",
        "number": 87,
        "topicId": 0,
        "question": "De acuerdo con el artículo 38 de la Ley de Régimen Jurídico del Sector Público la \"sede electrónica\" de una Administración Pública es:",
        "options": [
          "Una página web, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública.",
          "Una dirección electrónica, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública.",
          "Un punto de acceso a electrónico, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública.",
          "Una base de datos, disponible para los ciud adanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública."
        ],
        "correctIndex": 1,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción B) Una dirección electrónica, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 87",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q88",
        "number": 88,
        "topicId": 0,
        "question": "El área cerebral responsable de la producción de la coordinación de los más de 100 pequeños músculos que intervienen en la fonación es:",
        "options": [
          "Área de Broca.",
          "Área de Wernicke.",
          "Área motriz suplementaria.",
          "Área motriz primaria."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Área motriz suplementaria.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 88",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q89",
        "number": 89,
        "topicId": 0,
        "question": "La teoría del desarrollo de Freud se enmarca dentro de una perspectiva:",
        "options": [
          "Ambientalista.",
          "Adaptativa.",
          "Genética.",
          "Interaccionista."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Genética.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 89",
        "difficulty": "media"
      },
      {
        "id": "murcia-2023-q90",
        "number": 90,
        "topicId": 0,
        "question": "De acuerdo con el artículo 30 de la ley 39/2015, siempre que por ley o en el Derecho de la Unión Europea no se exprese otro cómputo, cuando los plazos se señalen por días, se entiende:",
        "options": [
          "Que estos son hábiles, excluyéndose del cómputo los domingos y los declarados festivos.",
          "Que estos son hábiles, excluyéndose del cómputo los domingos y los declarados festivos a nivel autonómico y local.",
          "Que estos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
          "Que estos son hábiles, ex cluyéndose del cómputo los domingos y los declarados festivos a nivel estatal."
        ],
        "correctIndex": 2,
        "explanation": "Respuesta oficial marcada en la plantilla correctora de Región de Murcia · CARM (Acceso Libre) (2023): opción C) Que estos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.",
        "reference": "Región de Murcia · CARM (Acceso Libre) (2023) · Pregunta oficial nº 90",
        "difficulty": "media"
      }
    ]
  }
];
