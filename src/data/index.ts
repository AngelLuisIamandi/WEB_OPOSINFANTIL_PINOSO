import { Topic, QuizQuestion, PracticalCase } from "@/types/oposicion";
import { temas1a5 } from "./temas-1-5";
import { temas6a9 } from "./temas-6-9";
import { temas10a13 } from "./temas-10-13";
import { temas14a17 } from "./temas-14-17";
import { temas18a21 } from "./temas-18-21";
import { temas22a25 } from "./temas-22-25";
import { supuestosPracticos } from "./supuestos-practicos";
import { BASES_PINOSO } from "./bases-pinoso";

export const ALL_TOPICS: Topic[] = [
  ...temas1a5,
  ...temas6a9,
  ...temas10a13,
  ...temas14a17,
  ...temas18a21,
  ...temas22a25
]
  .map((topic) => ({
    ...topic,
    title: topic.title.replace(/^Tema\s*\d+\s*([.:-]|-\.)\s*/i, "").trim()
  }))
  .sort((a, b) => a.id - b.id);

export const GENERAL_TOPICS: Topic[] = ALL_TOPICS.filter((t) => t.block === "general");
export const ESPECIFICO_TOPICS: Topic[] = ALL_TOPICS.filter((t) => t.block === "especifico");

export const ALL_QUESTIONS: QuizQuestion[] = ALL_TOPICS.flatMap((topic) => topic.questions);

export function getTopicById(id: number): Topic | undefined {
  return ALL_TOPICS.find((t) => t.id === id);
}

export function getQuestionById(questionId: string): QuizQuestion | undefined {
  return ALL_QUESTIONS.find((q) => q.id === questionId);
}

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export { supuestosPracticos, BASES_PINOSO };
export type { PracticalCase };
