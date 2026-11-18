"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  Bookmark,
  CheckSquare,
  Clock,
  Flame,
  Play,
  Settings2,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ALL_QUESTIONS,
  ALL_TOPICS,
  ESPECIFICO_TOPICS,
  GENERAL_TOPICS,
  shuffleArray
} from "@/data";
import { useProgress } from "@/context/ProgressContext";
import { QuizQuestion, TestAttempt } from "@/types/oposicion";
import { QuizEngine } from "@/components/QuizEngine";

function ExamenesContent() {
  const searchParams = useSearchParams();
  const { state } = useProgress();

  const [activeQuiz, setActiveQuiz] = useState<{
    questions: QuizQuestion[];
    title: string;
    mode: TestAttempt["mode"];
    instantFeedback: boolean;
    timeLimitMinutes: number | null;
  } | null>(null);

  // Custom Configurator State
  const [scope, setScope] = useState<"todos" | "general" | "especifico" | "manual">("todos");
  const [selectedTopicIds, setSelectedTopicIds] = useState<number[]>(
    ALL_TOPICS.map((t) => t.id)
  );
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [difficultyFilter, setDifficultyFilter] = useState<"todas" | "basica" | "media" | "alta">(
    "todas"
  );
  const [studyMode, setStudyMode] = useState<"estudio" | "examen">("estudio");
  const [customTimeMinutes, setCustomTimeMinutes] = useState<number>(40);

  const startOfficialPinosoExam = () => {
    const generalQuestions = ALL_QUESTIONS.filter((q) => q.topicId >= 1 && q.topicId <= 9);
    const chosen = shuffleArray(generalQuestions).slice(0, 23); // 20 main + 3 reserve
    setActiveQuiz({
      questions: chosen,
      title: "Simulacro Oficial 1º Ejercicio · Ayto. de Pinoso (20 + 3 Reserva)",
      mode: "oficial_pinoso",
      instantFeedback: false,
      timeLimitMinutes: 40
    });
  };

  const startGlobal25Exam = () => {
    // Pick 1 random question from each of the 25 topics
    const onePerTopic: QuizQuestion[] = [];
    for (const topic of ALL_TOPICS) {
      if (topic.questions.length > 0) {
        const rand = shuffleArray(topic.questions)[0];
        onePerTopic.push(rand);
      }
    }
    setActiveQuiz({
      questions: shuffleArray(onePerTopic),
      title: "Examen Global 25 Temas (1 pregunta por tema)",
      mode: "examen",
      instantFeedback: false,
      timeLimitMinutes: 45
    });
  };

  const startFailedQuestionsReview = () => {
    const pool = ALL_QUESTIONS.filter((q) => state.failedQuestionIds.includes(q.id));
    if (pool.length === 0) return;
    setActiveQuiz({
      questions: shuffleArray(pool).slice(0, 25),
      title: `Test Inteligente de Repaso de Fallos (${pool.length} pendientes)`,
      mode: "repaso_fallos",
      instantFeedback: true,
      timeLimitMinutes: null
    });
  };

  const startFavoriteQuestionsReview = () => {
    const pool = ALL_QUESTIONS.filter((q) => state.favoriteQuestionIds.includes(q.id));
    if (pool.length === 0) return;
    setActiveQuiz({
      questions: shuffleArray(pool),
      title: `Repaso de Preguntas Dudosas / Favoritas (${pool.length})`,
      mode: "favoritas",
      instantFeedback: true,
      timeLimitMinutes: null
    });
  };

  useEffect(() => {
    const modoParam = searchParams.get("modo");
    if (modoParam === "oficial_pinoso") {
      startOfficialPinosoExam();
    } else if (modoParam === "repaso_fallos" && state.failedQuestionIds.length > 0) {
      startFailedQuestionsReview();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const availablePoolCount = useMemo(() => {
    let targetIds: number[] = [];
    if (scope === "todos") targetIds = ALL_TOPICS.map((t) => t.id);
    else if (scope === "general") targetIds = GENERAL_TOPICS.map((t) => t.id);
    else if (scope === "especifico") targetIds = ESPECIFICO_TOPICS.map((t) => t.id);
    else targetIds = selectedTopicIds;

    return ALL_QUESTIONS.filter((q) => {
      if (!targetIds.includes(q.topicId)) return false;
      if (difficultyFilter !== "todas" && q.difficulty !== difficultyFilter) return false;
      return true;
    }).length;
  }, [scope, selectedTopicIds, difficultyFilter]);

  const handleStartCustomTest = () => {
    let targetIds: number[] = [];
    if (scope === "todos") targetIds = ALL_TOPICS.map((t) => t.id);
    else if (scope === "general") targetIds = GENERAL_TOPICS.map((t) => t.id);
    else if (scope === "especifico") targetIds = ESPECIFICO_TOPICS.map((t) => t.id);
    else targetIds = selectedTopicIds;

    const filtered = ALL_QUESTIONS.filter((q) => {
      if (!targetIds.includes(q.topicId)) return false;
      if (difficultyFilter !== "todas" && q.difficulty !== difficultyFilter) return false;
      return true;
    });

    const chosen = shuffleArray(filtered).slice(0, questionCount);
    const scopeLabel =
      scope === "todos"
        ? "Todos los Temas (1-25)"
        : scope === "general"
        ? "Temario General (1-9)"
        : scope === "especifico"
        ? "Temario Específico (10-25)"
        : `${selectedTopicIds.length} temas seleccionados`;

    setActiveQuiz({
      questions: chosen,
      title: `Test Personalizado · ${scopeLabel} (${chosen.length} preguntas)`,
      mode: studyMode,
      instantFeedback: studyMode === "estudio",
      timeLimitMinutes: studyMode === "examen" ? customTimeMinutes : null
    });
  };

  const toggleManualTopic = (tid: number) => {
    setSelectedTopicIds((prev) =>
      prev.includes(tid) ? prev.filter((id) => id !== tid) : [...prev, tid]
    );
  };

  if (activeQuiz) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setActiveQuiz(null)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            ← Volver al Generador de Exámenes
          </button>
          <span className="text-xs font-semibold text-slate-500">
            Banco total activo: {ALL_QUESTIONS.length} preguntas oficiales
          </span>
        </div>

        <QuizEngine
          questions={activeQuiz.questions}
          title={activeQuiz.title}
          mode={activeQuiz.mode}
          instantFeedbackDefault={activeQuiz.instantFeedback}
          timeLimitMinutes={activeQuiz.timeLimitMinutes}
          onRestart={() => {
            if (activeQuiz.mode === "oficial_pinoso") startOfficialPinosoExam();
            else if (activeQuiz.mode === "repaso_fallos") startFailedQuestionsReview();
            else if (activeQuiz.mode === "favoritas") startFavoriteQuestionsReview();
            else handleStartCustomTest();
          }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
          <CheckSquare className="h-3.5 w-3.5" />
          Banco de {ALL_QUESTIONS.length} Preguntas Explicadas
        </span>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
          Generador de Exámenes Tipo Test y Simulacros Oficiales
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Entrena en Modo Estudio (con explicación inmediata de cada pregunta) o en Modo Examen
          cronometrado. Todas tus notas quedan registradas en tu historial.
        </p>
      </div>

      {/* Quick Presets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Preset 1: Simulacro Oficial Pinoso */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-indigo-600 bg-gradient-to-b from-indigo-50/70 to-white p-6 shadow-xs">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-bold uppercase text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
              Base 6.1 Oficial Pinoso
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              Simulacro 1º Ejercicio (20 + 3 Reserva)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exactamente igual que el día del examen: <strong>20 preguntas + 3 de reserva</strong>{" "}
              del Temario General (Temas 1 al 9), <strong>40 minutos</strong>, +0,50 pts/acierto y
              los errores no restan.
            </p>
          </div>
          <button
            type="button"
            onClick={startOfficialPinosoExam}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <Play className="h-4 w-4" />
            Empezar Simulacro Oficial
          </button>
        </div>

        {/* Preset 2: Global 25 Temas */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-50 px-2.5 py-1 text-[11px] font-bold uppercase text-violet-700">
              <Sparkles className="h-3.5 w-3.5" />
              Barrido Completo 1-25
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              Examen Global de los 25 Temas
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Selecciona <strong>1 pregunta aleatoria de cada uno de los 25 temas</strong> (General
              + Específico) para comprobar que no tienes ningún punto ciego en el temario.
            </p>
          </div>
          <button
            type="button"
            onClick={startGlobal25Exam}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Play className="h-4 w-4" />
            Iniciar Global 25 Preguntas
          </button>
        </div>

        {/* Preset 3: Repaso de Fallos */}
        <div className="flex flex-col justify-between rounded-2xl border border-amber-200 bg-amber-50/40 p-6 shadow-xs">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-2.5 py-1 text-[11px] font-bold uppercase text-amber-800">
              <Flame className="h-3.5 w-3.5" />
              Aprendizaje Adaptativo
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              Repaso Inteligente de Fallos ({state.failedQuestionIds.length})
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practica exclusivamente las preguntas que has fallado en exámenes anteriores. Al
              acertarlas en este test, se darán por superadas automáticamente.
            </p>
          </div>
          <button
            type="button"
            disabled={state.failedQuestionIds.length === 0}
            onClick={startFailedQuestionsReview}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-700 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <Play className="h-4 w-4" />
            {state.failedQuestionIds.length > 0
              ? `Repasar ${state.failedQuestionIds.length} Fallos`
              : "0 Fallos Pendientes"}
          </button>
        </div>

        {/* Preset 4: Preguntas Dudosas / Favoritas */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase text-sky-700">
              <Bookmark className="h-3.5 w-3.5" />
              Tu Selección Personal
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              Preguntas Dudosas / Favoritas ({state.favoriteQuestionIds.length})
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Genera un test con las preguntas que hayas marcado con el botón{" "}
              <strong>&ldquo;Marcar Dudosa&rdquo;</strong> durante tus sesiones de estudio.
            </p>
          </div>
          <button
            type="button"
            disabled={state.favoriteQuestionIds.length === 0}
            onClick={startFavoriteQuestionsReview}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <Play className="h-4 w-4" />
            {state.favoriteQuestionIds.length > 0
              ? `Practicar ${state.favoriteQuestionIds.length} Guardadas`
              : "Ninguna Marcada Aún"}
          </button>
        </div>
      </div>

      {/* Custom Test Configurator */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <Settings2 className="h-6 w-6 text-indigo-600" />
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Configurador de Test a Medida
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Elige los temas, el número de preguntas, la dificultad y el modo de corrección.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Bloque de Temas */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              1. Bloque de Temas
            </label>
            <select
              value={scope}
              onChange={(e) =>
                setScope(e.target.value as "todos" | "general" | "especifico" | "manual")
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-800"
            >
              <option value="todos">Todos los Temas (1 al 25)</option>
              <option value="general">Solo Temario General (Temas 1 al 9)</option>
              <option value="especifico">Solo Temario Específico (Temas 10 al 25)</option>
              <option value="manual">Selección Manual de Temas...</option>
            </select>
          </div>

          {/* 2. Número de Preguntas */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Número de Preguntas
            </label>
            <div className="flex gap-2">
              {[10, 20, 30, 50].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionCount(num)}
                  className={`flex-1 rounded-xl py-2.5 text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                    questionCount === num
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Nivel de Dificultad */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              3. Dificultad
            </label>
            <select
              value={difficultyFilter}
              onChange={(e) =>
                setDifficultyFilter(e.target.value as "todas" | "basica" | "media" | "alta")
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-800"
            >
              <option value="todas">Todas las dificultades (Mezcla real)</option>
              <option value="basica">Solo Nivel Básico (Afianzar conceptos)</option>
              <option value="media">Solo Nivel Medio</option>
              <option value="alta">Solo Nivel Alto (Preguntas trampa / 10)</option>
            </select>
          </div>

          {/* 4. Modo de Realización */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              4. Modo de Corrección
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStudyMode("estudio")}
                className={`rounded-xl py-2.5 px-3 text-xs font-bold border transition-colors cursor-pointer ${
                  studyMode === "estudio"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-slate-50 text-slate-700 border-slate-200"
                }`}
              >
                Modo Estudio (Al instante)
              </button>
              <button
                type="button"
                onClick={() => setStudyMode("examen")}
                className={`rounded-xl py-2.5 px-3 text-xs font-bold border transition-colors cursor-pointer ${
                  studyMode === "examen"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-slate-50 text-slate-700 border-slate-200"
                }`}
              >
                Modo Examen (Al final)
              </button>
            </div>
          </div>
        </div>

        {/* Manual Topic Selector */}
        {scope === "manual" && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-slate-700">
                Selecciona los temas que quieres incluir ({selectedTopicIds.length} seleccionados):
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTopicIds(ALL_TOPICS.map((t) => t.id))}
                  className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                >
                  Marcar todos
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setSelectedTopicIds([])}
                  className="text-xs font-bold text-slate-500 hover:underline cursor-pointer"
                >
                  Desmarcar todos
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
              {ALL_TOPICS.map((topic) => {
                const checked = selectedTopicIds.includes(topic.id);
                return (
                  <label
                    key={topic.id}
                    className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-xs cursor-pointer transition-colors ${
                      checked
                        ? "border-indigo-300 bg-indigo-50/80 text-indigo-950 font-semibold"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleManualTopic(topic.id)}
                      className="rounded text-indigo-600"
                    />
                    <span className="truncate">
                      T{topic.id}. {topic.title}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
          <div className="text-xs sm:text-sm text-slate-600">
            Preguntas disponibles con este filtro:{" "}
            <strong className="text-slate-900">{availablePoolCount} preguntas</strong>
          </div>

          <button
            type="button"
            disabled={availablePoolCount === 0}
            onClick={handleStartCustomTest}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <Play className="h-4 w-4" />
            Generar Test Aleatorio Ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ExamenesPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-12 text-center text-slate-500">
          Cargando generador de exámenes...
        </div>
      }
    >
      <ExamenesContent />
    </Suspense>
  );
}
