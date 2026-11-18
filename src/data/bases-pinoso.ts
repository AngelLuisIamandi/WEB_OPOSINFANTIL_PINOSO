export const BASES_PINOSO = {
  expediente: "1584675N",
  sefycu: "6153795",
  csv: "MTCA AEY4 HC29 JQW9 VQ44",
  organismo: "Excmo. Ayuntamiento de Pinoso (Alicante)",
  plaza: "Técnico/a de Educación Infantil (Bolsa de Trabajo - Funcionario Interino)",
  sistema: "Concurso-Oposición Libre (70% Oposición + 30% Concurso)",
  fechaFirma: "22/09/2025",
  tasaExamen: "15,00 € (Bonificación 50% por discapacidad >=33% o desempleo >1 año)",
  funcionesPuesto: [
    "Atención a las necesidades básicas de los niños en cuanto a alimentación, salud, higiene y descanso.",
    "Programación, ejecución y evaluación de todas aquellas actividades que favorezcan la educación, la adquisición de hábitos, la maduración evolutiva (cognoscitiva, verbal, psicomotriz, etc.), la autonomía, la sociabilidad y la estabilidad emocional de los niños.",
    "Observación del estado de salud y de la evolución general del niño en los aspectos reseñados anteriormente, dando cuenta de ello a padres o tutores.",
    "Confección de partes de incidencias y asistencia.",
    "Realización de los trabajos operativos de carácter administrativo relacionados con el servicio.",
    "Organización del aula y del centro, realizar pedidos de material, organización de espacios, decoración, etc.",
    "Elaborar informes, documentos, memorias, etc., en relación a las actividades desarrolladas.",
    "Cualquier otra tarea de similar naturaleza que le sea encomendada por su superior jerárquico, así como las que puedan serle atribuidas eventual y temporalmente para suplir vacante, ausencia o enfermedad."
  ],
  faseOposicion: {
    puntuacionMaxima: 70,
    ejercicios: [
      {
        numero: 1,
        titulo: "Primer Ejercicio: Cuestionario Tipo Test (Temario General)",
        caracter: "Obligatorio y eliminatorio",
        puntuacionMaxima: 10,
        notaCorte: 5,
        detalles:
          "20 preguntas tipo test con 4 respuestas alternativas (+ hasta 3 preguntas de reserva) sobre el Temario General (Temas 1 al 9). Tiempo máximo: 40 minutos. Cada acierto suma +0,50 puntos; los errores o preguntas en blanco NO descuentan."
      },
      {
        numero: 2,
        titulo: "Segundo Ejercicio: Desarrollo de Tema (Temario Específico)",
        caracter: "Obligatorio y eliminatorio",
        puntuacionMaxima: 30,
        notaCorte: 15,
        detalles:
          "Desarrollo por escrito de 1 tema, elegido por la persona aspirante de entre 2 temas extraídos al azar del Temario Específico (Temas 10 al 25)."
      },
      {
        numero: 3,
        titulo: "Tercer Ejercicio: Supuesto Práctico",
        caracter: "Obligatorio y eliminatorio",
        puntuacionMaxima: 30,
        notaCorte: 15,
        detalles:
          "Resolución de un supuesto práctico propuesto por el Tribunal relacionado con las funciones del puesto de Técnico de Educación Infantil y el temario del Anexo I."
      }
    ]
  },
  faseConcurso: {
    puntuacionMaxima: 30,
    apartados: [
      {
        concepto: "1. Experiencia Profesional (atención directa en 1º ciclo de E.I.)",
        maximo: 12,
        baremo: [
          "Administración Pública (Funcionario o Laboral): 0,30 puntos por mes o fracción.",
          "Centros Privados o Concertados de Educación Infantil: 0,15 puntos por mes o fracción."
        ]
      },
      {
        concepto: "2. Titulación Académica Superior",
        maximo: 3,
        baremo: [
          "Grado de Magisterio en Educación Infantil o equivalente: 2,00 puntos.",
          "Máster de Maestro de Educación Infantil: 3,00 puntos."
        ]
      },
      {
        concepto: "3. Acciones Formativas (cursos >= 20 horas relacionados con el puesto)",
        maximo: 10,
        baremo: [
          "De 20 a 50 horas: 0,50 puntos.",
          "De 51 a 75 horas: 1,00 punto.",
          "De 76 a 100 horas: 1,50 puntos.",
          "De 101 a 200 horas: 2,00 puntos.",
          "De 201 a 300 horas lectivas: 3,00 puntos."
        ]
      },
      {
        concepto: "4. Idiomas (Valenciano JQCV/EOI + Idiomas Comunitarios EOI)",
        maximo: 5,
        baremo: [
          "Valenciano (máx. 2,50 pts): A2 (0,50), B1 (0,75), B2 (1,00), C1 (1,50), C2 (2,50).",
          "Idiomas comunitarios EOI (máx. 2,50 pts): A1 (0,50), A2 (1,00), B1 (1,25), B2 (1,50), C1 (1,75), C2 (2,50)."
        ]
      }
    ]
  }
};
