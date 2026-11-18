"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  PracticalCaseAttempt,
  StudyStatus,
  TestAttempt,
  UserProgressState,
  WrittenExamAttempt
} from "@/types/oposicion";

const STORAGE_KEY = "oposicion_tei_pinoso_progress_v1";

const DEFAULT_STATE: UserProgressState = {
  topicStatus: {},
  topicNotes: {},
  failedQuestionIds: [],
  favoriteQuestionIds: [],
  testHistory: [],
  writtenHistory: [],
  practicalHistory: []
};

interface ProgressContextType {
  state: UserProgressState;
  isLoaded: boolean;
  setTopicStatus: (topicId: number, status: StudyStatus) => void;
  setTopicNote: (topicId: number, note: string) => void;
  toggleFavoriteQuestion: (questionId: string) => void;
  removeFailedQuestion: (questionId: string) => void;
  recordTestAttempt: (attempt: TestAttempt, clearCorrectFromFailed?: boolean) => void;
  recordWrittenAttempt: (attempt: WrittenExamAttempt) => void;
  recordPracticalAttempt: (attempt: PracticalCaseAttempt) => void;
  exportDataJson: () => string;
  importDataJson: (rawJson: string) => { ok: boolean; message: string };
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserProgressState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<UserProgressState>;
        setState({
          topicStatus: parsed.topicStatus ?? {},
          topicNotes: parsed.topicNotes ?? {},
          failedQuestionIds: Array.isArray(parsed.failedQuestionIds) ? parsed.failedQuestionIds : [],
          favoriteQuestionIds: Array.isArray(parsed.favoriteQuestionIds) ? parsed.favoriteQuestionIds : [],
          testHistory: Array.isArray(parsed.testHistory) ? parsed.testHistory : [],
          writtenHistory: Array.isArray(parsed.writtenHistory) ? parsed.writtenHistory : [],
          practicalHistory: Array.isArray(parsed.practicalHistory) ? parsed.practicalHistory : []
        });
      }
    } catch (e) {
      console.error("Error loading progress from LocalStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Error saving progress to LocalStorage", e);
    }
  }, [state, isLoaded]);

  const setTopicStatus = (topicId: number, status: StudyStatus) => {
    setState((prev) => ({
      ...prev,
      topicStatus: {
        ...prev.topicStatus,
        [topicId]: status
      }
    }));
  };

  const setTopicNote = (topicId: number, note: string) => {
    setState((prev) => ({
      ...prev,
      topicNotes: {
        ...prev.topicNotes,
        [topicId]: note
      }
    }));
  };

  const toggleFavoriteQuestion = (questionId: string) => {
    setState((prev) => {
      const exists = prev.favoriteQuestionIds.includes(questionId);
      return {
        ...prev,
        favoriteQuestionIds: exists
          ? prev.favoriteQuestionIds.filter((id) => id !== questionId)
          : [...prev.favoriteQuestionIds, questionId]
      };
    });
  };

  const removeFailedQuestion = (questionId: string) => {
    setState((prev) => ({
      ...prev,
      failedQuestionIds: prev.failedQuestionIds.filter((id) => id !== questionId)
    }));
  };

  const recordTestAttempt = (attempt: TestAttempt, clearCorrectFromFailed = false) => {
    setState((prev) => {
      const failedSet = new Set(prev.failedQuestionIds);
      for (const r of attempt.results) {
        if (!r.isCorrect && r.selectedIndex !== null) {
          failedSet.add(r.questionId);
        } else if (!r.isCorrect && r.selectedIndex === null && attempt.mode !== "oficial_pinoso") {
          failedSet.add(r.questionId);
        } else if (r.isCorrect && (clearCorrectFromFailed || attempt.mode === "repaso_fallos")) {
          failedSet.delete(r.questionId);
        }
      }
      return {
        ...prev,
        failedQuestionIds: Array.from(failedSet),
        testHistory: [attempt, ...prev.testHistory]
      };
    });
  };

  const recordWrittenAttempt = (attempt: WrittenExamAttempt) => {
    setState((prev) => ({
      ...prev,
      writtenHistory: [attempt, ...prev.writtenHistory]
    }));
  };

  const recordPracticalAttempt = (attempt: PracticalCaseAttempt) => {
    setState((prev) => ({
      ...prev,
      practicalHistory: [attempt, ...prev.practicalHistory]
    }));
  };

  const exportDataJson = () => {
    return JSON.stringify(state, null, 2);
  };

  const importDataJson = (rawJson: string): { ok: boolean; message: string } => {
    try {
      const parsed = JSON.parse(rawJson) as Partial<UserProgressState>;
      if (!parsed || typeof parsed !== "object") {
        return { ok: false, message: "El archivo JSON no tiene un formato válido." };
      }
      setState({
        topicStatus: parsed.topicStatus ?? {},
        topicNotes: parsed.topicNotes ?? {},
        failedQuestionIds: Array.isArray(parsed.failedQuestionIds) ? parsed.failedQuestionIds : [],
        favoriteQuestionIds: Array.isArray(parsed.favoriteQuestionIds) ? parsed.favoriteQuestionIds : [],
        testHistory: Array.isArray(parsed.testHistory) ? parsed.testHistory : [],
        writtenHistory: Array.isArray(parsed.writtenHistory) ? parsed.writtenHistory : [],
        practicalHistory: Array.isArray(parsed.practicalHistory) ? parsed.practicalHistory : []
      });
      return { ok: true, message: "Progreso e historial importados correctamente." };
    } catch {
      return { ok: false, message: "Error al leer el archivo JSON. Comprueba que sea válido." };
    }
  };

  const resetProgress = () => {
    setState(DEFAULT_STATE);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProgressContext.Provider
      value={{
        state,
        isLoaded,
        setTopicStatus,
        setTopicNote,
        toggleFavoriteQuestion,
        removeFailedQuestion,
        recordTestAttempt,
        recordWrittenAttempt,
        recordPracticalAttempt,
        exportDataJson,
        importDataJson,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress debe usarse dentro de un ProgressProvider");
  }
  return ctx;
}
