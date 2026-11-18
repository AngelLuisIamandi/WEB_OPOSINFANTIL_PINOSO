"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Bookmark,
  CheckCircle2,
  Clock,
  HelpCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
  XCircle
} from "lucide-react";
import { QuizQuestion, TestAttempt, TestAttemptQuestionResult } from "@/types/oposicion";
import { useProgress } from "@/context/ProgressContext";
import { getTopicById } from "@/data";

interface QuizEngineProps {
  questions: QuizQuestion[];
  title: string;
  mode: TestAttempt["mode"];
  instantFeedbackDefault?: boolean;
  timeLimitMinutes?: number | null;
  onRestart?: () => void;
}

export function QuizEngine({
  questions,
  title,
  mode,
  instantFeedbackDefault = false,
  timeLimitMinutes = null,
  onRestart
}: QuizEngineProps) {
  const { state, toggleFavoriteQuestion, recordTestAttempt } = useProgress();

  const [instantFeedback, setInstantFeedback] = useState<boolean>(
    mode === "oficial_pinoso" ? false : instantFeedbackDefault
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [filterReview, setFilterReview] = useState<"todas" | "falladas" | "acertadas">("todas");

  const isOfficialPinoso = mode === "oficial_pinoso";
  const maxSeconds = timeLimitMinutes ? timeLimitMinutes * 60 : null;

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setElapsedSeconds(0);
  }, [questions, mode]);

  useEffect(() => {
    if (isSubmitted || questions.length === 0) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => {
        if (maxSeconds && prev + 1 >= maxSeconds) {
          return maxSeconds;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, maxSeconds, questions.length]);

  useEffect(() => {
    if (maxSeconds && elapsedSeconds >= maxSeconds && !isSubmitted && questions.length > 0) {
      handleFinishTest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsedSeconds, maxSeconds]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    if (instantFeedback && selectedAnswers[currentQuestion.id] !== undefined) {
      return; // In instant feedback mode, once answered, lock it to prevent cheating
    }
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]:
        prev[currentQuestion.id] === optionIndex && !instantFeedback ? null : optionIndex
    }));
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${String(mins).padStart(2, "0")}:${String(rem).padStart(2, "0")}`;
  };

  const evaluation = useMemo(() => {
    const mainQuestions = isOfficialPinoso ? questions.slice(0, 20) : questions;
    const results: TestAttemptQuestionResult[] = questions.map((q, idx) => {
      const sel = selectedAnswers[q.id] ?? null;
      const isCorrect = sel === q.correctIndex;
      return {
        questionId: q.id,
        topicId: q.topicId,
        selectedIndex: sel,
        correctIndex: q.correctIndex,
        isCorrect,
        isReserve: isOfficialPinoso && idx >= 20
      };
    });

    const scoredResults = isOfficialPinoso ? results.slice(0, 20) : results;
    const correctCount = scoredResults.filter((r) => r.isCorrect).length;
    const incorrectCount = scoredResults.filter(
      (r) => r.selectedIndex !== null && !r.isCorrect
    ).length;
    const unansweredCount = scoredResults.filter((r) => r.selectedIndex === null).length;

    const totalScored = mainQuestions.length || 1;
    // According to Base 6.1 Ayuntamiento de Pinoso:
    // Each correct question scores 0.50 (on a 20-question test = 10 points max).
    // Wrong or blank answers DO NOT penalize negatively.
    const rawScore = (correctCount / totalScored) * 10;
    const scoreOutOf10 = Math.round(rawScore * 100) / 100;
    const passed = scoreOutOf10 >= 5;

    return {
      results,
      scoredResults,
      correctCount,
      incorrectCount,
      unansweredCount,
      scoreOutOf10,
      passed
    };
  }, [questions, selectedAnswers, isOfficialPinoso]);

  const handleFinishTest = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    const topicIds = Array.from(new Set(questions.map((q) => q.topicId)));
    const attempt: TestAttempt = {
      id: `test-${Date.now()}`,
      date: new Date().toISOString(),
      mode: instantFeedback && mode === "examen" ? "estudio" : mode,
      title,
      topicIds,
      totalQuestions: isOfficialPinoso ? Math.min(20, questions.length) : questions.length,
      correctCount: evaluation.correctCount,
      incorrectCount: evaluation.incorrectCount,
      unansweredCount: evaluation.unansweredCount,
      scoreOutOf10: evaluation.scoreOutOf10,
      passed: evaluation.passed,
      durationSeconds: elapsedSeconds,
      results: evaluation.results
    };

    recordTestAttempt(attempt, mode === "repaso_fallos");
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">No hay preguntas disponibles para esta selección.</p>
      </div>
    );
  }

  const isCurrentAnswered =
    selectedAnswers[currentQuestion.id] !== undefined &&
    selectedAnswers[currentQuestion.id] !== null;
  const showCurrentExplanation =
    isSubmitted || (instantFeedback && isCurrentAnswered);
  const isCurrentFavorite = state.favoriteQuestionIds.includes(currentQuestion.id);
  const currentTopic = getTopicById(currentQuestion.topicId);
  const isCurrentReserve = isOfficialPinoso && currentIndex >= 20;

  return (
    <div className="space-y-6">
      {/* Top Bar: Mode, Timer & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold">
            {currentIndex + 1}/{questions.length}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">{title}</h3>
            <p className="text-xs text-slate-500">
              {isOfficialPinoso
                ? "Bases Pinoso: 20 preguntas (+3 reserva) · +0,50 pts/acierto · Fallos NO restan"
                : "Cuestionario de preparación · Los errores no descuentan puntuación"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!isOfficialPinoso && !isSubmitted && (
            <button
              type="button"
              onClick={() => setInstantFeedback((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold border transition-colors ${
                instantFeedback
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {instantFeedback ? "Modo Estudio (Corrección al instante)" : "Modo Examen (Al final)"}
            </button>
          )}

          <div
            className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-sm font-mono font-semibold ${
              maxSeconds && maxSeconds - elapsedSeconds < 180 && !isSubmitted
                ? "bg-red-50 text-red-700 border border-red-200 animate-pulse"
                : "bg-slate-100 text-slate-800"
            }`}
          >
            <Clock className="h-4 w-4 text-slate-500" />
            <span>
              {maxSeconds
                ? formatTime(Math.max(0, maxSeconds - elapsedSeconds))
                : formatTime(elapsedSeconds)}
            </span>
          </div>

          {!isSubmitted && (
            <button
              type="button"
              onClick={handleFinishTest}
              className="rounded-xl bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              Finalizar y Corregir
            </button>
          )}
        </div>
      </div>

      {/* Results Banner if Submitted */}
      {isSubmitted && (
        <div
          className={`rounded-2xl border p-6 shadow-sm ${
            evaluation.passed
              ? "border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-teal-50/60"
              : "border-rose-200 bg-gradient-to-br from-rose-50/90 to-orange-50/60"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white shadow-xs">
                {evaluation.passed ? (
                  <>
                    <Trophy className="h-4 w-4 text-emerald-600" />
                    <span className="text-emerald-700">¡APTO / SUPERADO!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                    <span className="text-rose-700">NO APTO (Mínimo 5,00 pts)</span>
                  </>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Nota Final: {evaluation.scoreOutOf10.toFixed(2)} / 10,00 puntos
              </h2>
              <p className="text-sm text-slate-700">
                Resultado guardado automáticamente en tu historial de seguimiento.
                {evaluation.incorrectCount > 0 &&
                  ` Las ${evaluation.incorrectCount} preguntas falladas se han añadido a tu bolsa de repaso inteligente.`}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="rounded-xl bg-white/90 p-3 border border-emerald-200">
                <div className="text-xl font-extrabold text-emerald-700">
                  {evaluation.correctCount}
                </div>
                <div className="text-xs font-medium text-slate-600">Aciertos</div>
              </div>
              <div className="rounded-xl bg-white/90 p-3 border border-rose-200">
                <div className="text-xl font-extrabold text-rose-700">
                  {evaluation.incorrectCount}
                </div>
                <div className="text-xs font-medium text-slate-600">Fallos</div>
              </div>
              <div className="rounded-xl bg-white/90 p-3 border border-slate-200">
                <div className="text-xl font-extrabold text-slate-700">
                  {evaluation.unansweredCount}
                </div>
                <div className="text-xs font-medium text-slate-600">En blanco</div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/70">
            <button
              type="button"
              onClick={() => {
                setSelectedAnswers({});
                setIsSubmitted(false);
                setCurrentIndex(0);
                setElapsedSeconds(0);
                if (onRestart) onRestart();
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Repetir / Nuevo Test
            </button>

            <div className="ml-auto flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-600">Filtrar revisión:</span>
              {(["todas", "falladas", "acertadas"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilterReview(f)}
                  className={`rounded-lg px-2.5 py-1 font-semibold capitalize cursor-pointer ${
                    filterReview === f
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 xl:col-span-9 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">
                  Pregunta {currentIndex + 1}
                  {isCurrentReserve ? " (RESERVA)" : ""}
                </span>
                <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  Tema {currentQuestion.topicId}
                  {currentTopic ? `: ${currentTopic.title}` : ""}
                </span>
                <span
                  className={`inline-flex items-center rounded-lg px-2 py-0.5 text-[11px] font-semibold uppercase ${
                    currentQuestion.difficulty === "alta"
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : currentQuestion.difficulty === "media"
                      ? "bg-sky-50 text-sky-800 border border-sky-200"
                      : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  }`}
                >
                  Nivel {currentQuestion.difficulty}
                </span>
              </div>

              <button
                type="button"
                onClick={() => toggleFavoriteQuestion(currentQuestion.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold border transition-colors cursor-pointer ${
                  isCurrentFavorite
                    ? "bg-amber-50 text-amber-800 border-amber-300"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Bookmark
                  className={`h-3.5 w-3.5 ${isCurrentFavorite ? "fill-amber-500 text-amber-500" : ""}`}
                />
                {isCurrentFavorite ? "Guardada en Dudosas" : "Marcar Dudosa"}
              </button>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-6">
              {currentQuestion.question}
            </h4>

            <div className="space-y-3">
              {currentQuestion.options.map((optionText, idx) => {
                const letter = ["A", "B", "C", "D"][idx];
                const selected = selectedAnswers[currentQuestion.id] === idx;
                const isCorrectOption = currentQuestion.correctIndex === idx;

                let optionStyle =
                  "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800";
                let badgeStyle = "bg-slate-100 text-slate-700";

                if (showCurrentExplanation) {
                  if (isCorrectOption) {
                    optionStyle =
                      "border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500";
                    badgeStyle = "bg-emerald-600 text-white";
                  } else if (selected && !isCorrectOption) {
                    optionStyle =
                      "border-rose-400 bg-rose-50/80 text-rose-950 ring-1 ring-rose-400";
                    badgeStyle = "bg-rose-600 text-white";
                  } else {
                    optionStyle = "border-slate-200 bg-slate-50/60 text-slate-500";
                  }
                } else if (selected) {
                  optionStyle =
                    "border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-1 ring-indigo-600";
                  badgeStyle = "bg-indigo-600 text-white";
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    disabled={isSubmitted}
                    className={`w-full flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all cursor-pointer ${optionStyle}`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold mt-0.5 ${badgeStyle}`}
                    >
                      {letter}
                    </span>
                    <span className="flex-1 text-sm sm:text-base leading-relaxed font-medium">
                      {optionText}
                    </span>
                    {showCurrentExplanation && isCorrectOption && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {showCurrentExplanation && selected && !isCorrectOption && (
                      <XCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box */}
            {showCurrentExplanation && (
              <div className="mt-6 rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1.5">
                  <ShieldCheck className="h-4 w-4 text-indigo-600" />
                  <span>Justificación Oficial / Explicación para el 10</span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
                <div className="mt-2 text-xs font-semibold text-indigo-700">
                  Referencia normativa / teórica: {currentQuestion.reference}
                </div>
              </div>
            )}

            {/* Prev / Next Navigation */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
              >
                ← Anterior
              </button>

              <span className="text-xs text-slate-500">
                Contestadas:{" "}
                {
                  Object.values(selectedAnswers).filter(
                    (v) => v !== null && v !== undefined
                  ).length
                }{" "}
                de {questions.length}
              </span>

              {currentIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))
                  }
                  className="rounded-xl bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 cursor-pointer"
                >
                  Siguiente →
                </button>
              ) : !isSubmitted ? (
                <button
                  type="button"
                  onClick={handleFinishTest}
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700 cursor-pointer"
                >
                  Entregar Examen
                </button>
              ) : (
                <span className="text-xs font-semibold text-emerald-700">Examen corregido</span>
              )}
            </div>
          </div>

          {/* Full Question List Review after submission */}
          {isSubmitted && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-base">
                Desglose completo de preguntas ({filterReview})
              </h4>
              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const sel = selectedAnswers[q.id] ?? null;
                  const isRight = sel === q.correctIndex;
                  if (filterReview === "falladas" && isRight) return null;
                  if (filterReview === "acertadas" && !isRight) return null;

                  return (
                    <div
                      key={q.id}
                      className={`rounded-xl border p-4 ${
                        isRight
                          ? "border-emerald-200 bg-emerald-50/30"
                          : "border-rose-200 bg-rose-50/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-600">
                          #{idx + 1} · Tema {q.topicId}
                          {isOfficialPinoso && idx >= 20 ? " (Reserva)" : ""}
                        </span>
                        <span
                          className={`text-xs font-bold ${
                            isRight ? "text-emerald-700" : "text-rose-700"
                          }`}
                        >
                          {isRight
                            ? "✓ Correcta"
                            : sel === null
                            ? "○ En blanco"
                            : "✗ Incorrecta"}
                        </span>
                      </div>
                      <p className="mt-1 font-semibold text-sm text-slate-900">{q.question}</p>
                      {sel !== null && !isRight && (
                        <p className="mt-1.5 text-xs text-rose-700">
                          Tu respuesta: {["A", "B", "C", "D"][sel]}) {q.options[sel]}
                        </p>
                      )}
                      <p className="mt-1 text-xs font-semibold text-emerald-800">
                        Respuesta correcta: {["A", "B", "C", "D"][q.correctIndex]}){" "}
                        {q.options[q.correctIndex]}
                      </p>
                      <p className="mt-2 text-xs text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/80">
                        <strong>Explicación:</strong> {q.explanation} ({q.reference})
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Question Grid Navigator */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-slate-900 text-sm mb-3">Mapa de Preguntas</h4>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const sel = selectedAnswers[q.id];
                const isAnswered = sel !== undefined && sel !== null;
                const isCorrect = sel === q.correctIndex;
                const isCurrent = idx === currentIndex;
                const isReserve = isOfficialPinoso && idx >= 20;

                let btnClass = "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100";
                if (isSubmitted || (instantFeedback && isAnswered)) {
                  if (isCorrect) {
                    btnClass = "border-emerald-500 bg-emerald-100 text-emerald-900 font-bold";
                  } else if (isAnswered) {
                    btnClass = "border-rose-400 bg-rose-100 text-rose-900 font-bold";
                  } else {
                    btnClass = "border-amber-300 bg-amber-50 text-amber-800";
                  }
                } else if (isAnswered) {
                  btnClass = "border-indigo-500 bg-indigo-100 text-indigo-900 font-bold";
                }

                if (isCurrent) {
                  btnClass += " ring-2 ring-indigo-600 ring-offset-1";
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex h-9 w-full items-center justify-center rounded-lg border text-xs transition-all cursor-pointer ${btnClass}`}
                    title={isReserve ? `Pregunta ${idx + 1} (Reserva)` : `Pregunta ${idx + 1}`}
                  >
                    {idx + 1}
                    {isReserve && (
                      <span className="absolute -top-1 -right-1 rounded-full bg-amber-500 px-1 text-[9px] font-bold text-white">
                        R
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {isOfficialPinoso && questions.length > 20 && (
              <p className="mt-3 text-[11px] text-slate-500">
                <span className="font-semibold text-amber-700">Nota:</span> Las preguntas 21 a{" "}
                {questions.length} marcadas con <strong>R</strong> son las preguntas de reserva
                oficiales según la Base 6.1.
              </p>
            )}

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>
                  En el Ayuntamiento de Pinoso las respuestas erróneas <strong>no restan</strong>:
                  ¡no dejes ninguna pregunta en blanco!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
