"use client";

import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  FileText,
  Landmark,
  MapPin,
  Play,
  Shuffle
} from "lucide-react";
import { EXAMENES_OFICIALES_ESPANA, OfficialPastExam, shuffleArray } from "@/data";
import { QuizQuestion } from "@/types/oposicion";
import { QuizEngine } from "@/components/QuizEngine";

export default function ExamenesOficialesPage() {
  const [activeTest, setActiveTest] = useState<{
    exam: OfficialPastExam;
    questions: QuizQuestion[];
    instantFeedback: boolean;
  } | null>(null);

  const [selectedCounts, setSelectedCounts] = useState<Record<string, number>>({});
  const [selectedModes, setSelectedModes] = useState<Record<string, "estudio" | "examen">>({});
  const [regionFilter, setRegionFilter] = useState<string>("todas");

  const totalRealQuestions = useMemo(
    () => EXAMENES_OFICIALES_ESPANA.reduce((acc, ex) => acc + ex.questions.length, 0),
    []
  );

  const regions = useMemo(
    () => ["todas", ...Array.from(new Set(EXAMENES_OFICIALES_ESPANA.map((e) => e.region)))],
    []
  );

  const filteredExams = useMemo(() => {
    if (regionFilter === "todas") return EXAMENES_OFICIALES_ESPANA;
    return EXAMENES_OFICIALES_ESPANA.filter((e) => e.region === regionFilter);
  }, [regionFilter]);

  const handleStartExamTest = (exam: OfficialPastExam, allQuestions = false) => {
    const count = allQuestions ? exam.questions.length : selectedCounts[exam.id] || 20;
    const mode = selectedModes[exam.id] || "estudio";
    const chosen = shuffleArray(exam.questions).slice(0, Math.min(count, exam.questions.length));
    setActiveTest({
      exam,
      questions: chosen,
      instantFeedback: mode === "estudio"
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (activeTest) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setActiveTest(null)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            ← Volver a Exámenes Oficiales de España
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={activeTest.exam.questionsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100"
            >
              <FileText className="h-3.5 w-3.5" />
              PDF Preguntas
            </a>
            <a
              href={activeTest.exam.answersPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100"
            >
              <FileCheck2 className="h-3.5 w-3.5" />
              PDF Respuestas
            </a>
          </div>
        </div>

        <QuizEngine
          questions={activeTest.questions}
          title={`Examen Oficial: ${activeTest.exam.title} (${activeTest.exam.year}) · ${activeTest.questions.length} preguntas`}
          mode={activeTest.instantFeedback ? "estudio" : "examen"}
          instantFeedbackDefault={activeTest.instantFeedback}
          onRestart={() => handleStartExamTest(activeTest.exam, false)}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
            <Landmark className="h-3.5 w-3.5" />
            Convocatorias Reales de Toda España · Preguntas + Plantillas Oficiales
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Exámenes Oficiales de Años Anteriores (PDF y Tests Aleatorios)
          </h1>
          <p className="mt-1 text-sm text-slate-600 max-w-3xl">
            Consulta directamente los <strong>PDFs oficiales de preguntas y respuestas</strong> de
            oposiciones reales de Técnico/a y Educador/a de Educación Infantil en España, o genera
            al instante un <strong>test aleatorio interactivo</strong> con sus{" "}
            <strong>{totalRealQuestions} preguntas reales</strong>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setRegionFilter(reg)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold border transition-colors cursor-pointer ${
                regionFilter === reg
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {reg === "todas" ? `Todas (${EXAMENES_OFICIALES_ESPANA.length})` : reg}
            </button>
          ))}
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredExams.map((exam) => {
          const currentCount = selectedCounts[exam.id] || 20;
          const currentMode = selectedModes[exam.id] || "estudio";

          return (
            <div
              key={exam.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all space-y-5"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-extrabold text-indigo-700 border border-indigo-200">
                      <MapPin className="h-3.5 w-3.5" />
                      {exam.region}
                    </span>
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                      Año {exam.year}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {exam.questions.length} preguntas extraídas
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">{exam.title}</h2>
                  <p className="text-xs font-semibold text-indigo-600 mt-0.5">{exam.role}</p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{exam.description}</p>

                {/* Direct Official PDFs Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={exam.questionsPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 px-4 py-2.5 text-xs sm:text-sm font-bold text-indigo-800 hover:bg-indigo-100 transition-colors"
                  >
                    <FileText className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Ver PDF Preguntas</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 shrink-0" />
                  </a>

                  <a
                    href={exam.answersPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
                  >
                    <FileCheck2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Ver PDF Respuestas</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Interactive Random Test Generator for this Exam */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Shuffle className="h-3.5 w-3.5 text-indigo-600" />
                    Generar Test Aleatorio de este Examen
                  </span>

                  <div className="flex items-center gap-1 bg-white rounded-lg p-0.5 border border-slate-200 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedModes((prev) => ({ ...prev, [exam.id]: "estudio" }))
                      }
                      className={`rounded-md px-2 py-1 cursor-pointer ${
                        currentMode === "estudio"
                          ? "bg-emerald-600 text-white"
                          : "text-slate-600"
                      }`}
                    >
                      Estudio
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedModes((prev) => ({ ...prev, [exam.id]: "examen" }))
                      }
                      className={`rounded-md px-2 py-1 cursor-pointer ${
                        currentMode === "examen"
                          ? "bg-indigo-600 text-white"
                          : "text-slate-600"
                      }`}
                    >
                      Examen
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    {[10, 20, 30, 50].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() =>
                          setSelectedCounts((prev) => ({ ...prev, [exam.id]: n }))
                        }
                        className={`rounded-lg px-2.5 py-1.5 text-xs font-bold border cursor-pointer ${
                          currentCount === n
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCounts((prev) => ({
                          ...prev,
                          [exam.id]: exam.questions.length
                        }))
                      }
                      className={`rounded-lg px-2.5 py-1.5 text-xs font-bold border cursor-pointer ${
                        currentCount === exam.questions.length
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      Todas ({exam.questions.length})
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartExamTest(exam, false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-indigo-600 transition-colors cursor-pointer"
                  >
                    <Play className="h-4 w-4" />
                    Generar Test ({Math.min(currentCount, exam.questions.length)} preg.)
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
