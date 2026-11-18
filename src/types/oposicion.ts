export type TopicBlock = "general" | "especifico";

export type StudyStatus = "pendiente" | "en_estudio" | "dominado";

export interface TopicTable {
  headers: string[];
  rows: string[][];
}

export interface TopicHighlight {
  title: string;
  type?: "legislacion" | "importante" | "ejemplo" | "trampa";
  items: string[];
}

export interface TopicSection {
  title: string;
  content: string[];
  highlights?: TopicHighlight[];
  table?: TopicTable;
}

export interface VisualSchemaNode {
  label: string;
  children: string[];
}

export interface VisualSchema {
  title: string;
  nodes: VisualSchemaNode[];
}

export interface WrittenExamTopic {
  introduccion: string;
  estructuraEpigrafes: {
    epigraph: string;
    body: string;
  }[];
  conclusion: string;
  bibliografiaYNormativa: string[];
  consejosTribunal: string[];
}

export interface QuizQuestion {
  id: string;
  topicId: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  reference: string;
  difficulty: "basica" | "media" | "alta";
}

export interface Topic {
  id: number;
  slug: string;
  block: TopicBlock;
  title: string;
  officialTitle: string;
  summary: string;
  readTimeMinutes: number;
  normativaClave: string[];
  sections: TopicSection[];
  esquemaVisual: VisualSchema;
  datosOro: string[];
  temaDesarrollo: WrittenExamTopic;
  questions: QuizQuestion[];
}

export interface PracticalCase {
  id: string;
  number: number;
  title: string;
  ageGroup: "0-1 años" | "1-2 años" | "2-3 años" | "0-3 años (Ciclo completo)";
  relatedTopics: number[];
  scenario: string;
  questionsToResolve: string[];
  solution: {
    justificacionPedagogicaYLegal: string[];
    objetivos: string[];
    propuestaIntervencion: {
      fase: string;
      acciones: string[];
    }[];
    organizacionEspacioTiempoMateriales: string[];
    atencionDiversidadYFamilias: string[];
    evaluacion: string[];
    conclusion: string;
  };
  rubricItems: string[];
}

export interface TestAttemptQuestionResult {
  questionId: string;
  topicId: number;
  selectedIndex: number | null;
  correctIndex: number;
  isCorrect: boolean;
  isReserve?: boolean;
}

export interface TestAttempt {
  id: string;
  date: string;
  mode: "oficial_pinoso" | "estudio" | "examen" | "repaso_fallos" | "favoritas" | "tema";
  title: string;
  topicIds: number[];
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scoreOutOf10: number;
  passed: boolean;
  durationSeconds: number;
  results: TestAttemptQuestionResult[];
}

export interface WrittenExamAttempt {
  id: string;
  date: string;
  drawnTopics: [number, number];
  chosenTopic: number;
  selfScoreOutOf30: number;
  durationSeconds: number;
  notes: string;
}

export interface PracticalCaseAttempt {
  id: string;
  caseId: string;
  date: string;
  selfScoreOutOf30: number;
  userDraft: string;
}

export interface UserProgressState {
  topicStatus: Record<number, StudyStatus>;
  topicNotes: Record<number, string>;
  failedQuestionIds: string[];
  favoriteQuestionIds: string[];
  testHistory: TestAttempt[];
  writtenHistory: WrittenExamAttempt[];
  practicalHistory: PracticalCaseAttempt[];
}
