"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Award,
  BarChart3,
  Bookmark,
  CheckCircle2,
  Download,
  FileJson,
  Flame,
  RotateCcw,
  Trash2,
  TrendingUp,
  Upload
} from "lucide-react";
import { ALL_QUESTIONS, ALL_TOPICS, getQuestionById } from "@/data";
import { useProgress } from "@/context/ProgressContext";

export default function EstadisticasPage() {
  const {
    state,
    exportDataJson,
    importDataJson,
    resetProgress,
    removeFailedQuestion,
    toggleFavoriteQuestion
  } = useProgress();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importFeedback, setImportFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  // Per-topic analytics computed from all test attempts
  const topicAnalytics = useMemo(() => {
    const map: Record<
      number,
      {
        answered: number;
        correct: number;
        accuracy: number;
        bestSingleScore: number | null;
      }
    > = {};

    for (const t of ALL_TOPICS) {
      map[t.id] = { answered: 0, correct: 0, accuracy: 0, bestSingleScore: null };
    }

    for (const attempt of state.testHistory) {
      if (attempt.topicIds.length === 1) {
        const tid = attempt.topicIds[0];
        if (map[tid]) {
          map[tid].bestSingleScore =
            map[tid].bestSingleScore === null
              ? attempt.scoreOutOf10
              : Math.max(map[tid].bestSingleScore, attempt.scoreOutOf10);
        }
      }
      for (const res of attempt.results) {
        if (!map[res.topicId]) continue;
        if (res.selectedIndex !== null) {
          map[res.topicId].answered += 1;
          if (res.isCorrect) {
            map[res.topicId].correct += 1;
          }
        }
      }
    }

    for (const tid of Object.keys(map)) {
      const n = Number(tid);
      if (map[n].answered > 0) {
        map[n].accuracy = Math.round((map[n].correct / map[n].answered) * 100);
      }
    }

    return map;
  }, [state.testHistory]);

  const globalKpis = useMemo(() => {
    const totalTests = state.testHistory.length;
    const avgScore =
      totalTests > 0
        ? state.testHistory.reduce((acc, a) => acc + a.scoreOutOf10, 0) / totalTests
        : 0;
    const bestScore =
      totalTests > 0 ? Math.max(...state.testHistory.map((a) => a.scoreOutOf10)) : 0;
    const officialTests = state.testHistory.filter((a) => a.mode === "oficial_pinoso");
    const avgOfficial =
      officialTests.length > 0
        ? officialTests.reduce((acc, a) => acc + a.scoreOutOf10, 0) / officialTests.length
        : 0;
    const masteredTopics = Object.values(state.topicStatus).filter((s) => s === "dominado").length;

    return {
      totalTests,
      avgScore,
      bestScore,
      officialCount: officialTests.length,
      avgOfficial,
      masteredTopics
    };
  }, [state.testHistory, state.topicStatus]);

  const handleDownloadBackup = () => {
    const json = exportDataJson();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `progreso-oposicion-pinoso-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const raw = String(reader.result || "");
      const res = importDataJson(raw);
      setImportFeedback({ ok: res.ok, msg: res.message });
    };
    reader.readAsText(file);
  };

  const recentAttemptsChronological = [...state.testHistory].slice(0, 15).reverse();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
            <TrendingUp className="h-3.5 w-3.5" />
            Analítica de Rendimiento · Oposición Pinoso
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Seguimiento de Notas, Evolución y Dominio por Tema
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Visualiza tu progreso en los 25 temas, revisa tu gráfica de evolución de notas en los
            tests y gestiona tus copias de seguridad.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleDownloadBackup}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            <Download className="h-4 w-4 text-indigo-600" />
            Exportar Progreso (JSON)
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            <Upload className="h-4 w-4 text-emerald-600" />
            Importar JSON
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleFileImport}
            className="hidden"
          />
        </div>
      </div>

      {importFeedback && (
        <div
          className={`rounded-2xl border p-4 text-xs sm:text-sm font-semibold ${
            importFeedback.ok
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
        >
          {importFeedback.msg}
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Tests Realizados</div>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
            {globalKpis.totalTests}
          </div>
          <div className="mt-1 text-[11px] text-indigo-600 font-medium">
            {globalKpis.officialCount} simulacros oficiales
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Nota Media Global</div>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-indigo-600">
            {globalKpis.totalTests > 0 ? globalKpis.avgScore.toFixed(2) : "—"}
          </div>
          <div className="mt-1 text-[11px] text-slate-500">Sobre 10,00 puntos</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Mejor Nota Test</div>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-emerald-600">
            {globalKpis.totalTests > 0 ? globalKpis.bestScore.toFixed(2) : "—"}
          </div>
          <div className="mt-1 text-[11px] text-emerald-700 font-medium">Objetivo: 10,00</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Temas Dominados</div>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-violet-600">
            {globalKpis.masteredTopics}/{ALL_TOPICS.length}
          </div>
          <div className="mt-1 text-[11px] text-slate-500">
            {Math.round((globalKpis.masteredTopics / (ALL_TOPICS.length || 25)) * 100)}% del temario
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500">Bolsa de Fallos</div>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-amber-600">
            {state.failedQuestionIds.length}
          </div>
          <Link
            href="/examenes?modo=repaso_fallos"
            className="mt-1 inline-block text-[11px] font-bold text-amber-700 hover:underline"
          >
            Repasar fallos ahora →
          </Link>
        </div>
      </div>

      {/* Visual Score Evolution Chart */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Evolución de tus Notas en los Últimos Exámenes (Sobre 10 Puntos)
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Línea de corte de aprobado: 5,00 puntos
          </span>
        </div>

        {recentAttemptsChronological.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-8 text-center space-y-3">
            <p className="text-sm text-slate-600">
              Aún no has completado ningún examen tipo test. ¡Haz tu primer test para ver tu gráfica
              de evolución!
            </p>
            <Link
              href="/examenes"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white"
            >
              Ir al Generador de Exámenes →
            </Link>
          </div>
        ) : (
          <div className="relative pt-6 pb-2 overflow-x-auto">
            {/* Pass threshold line at 50% height */}
            <div className="flex items-end gap-3 sm:gap-4 h-48 border-b border-slate-200 px-2 min-w-[320px]">
              {recentAttemptsChronological.map((att, idx) => {
                const heightPct = Math.max(8, Math.round((att.scoreOutOf10 / 10) * 100));
                const colorClass =
                  att.scoreOutOf10 >= 8
                    ? "bg-emerald-500"
                    : att.scoreOutOf10 >= 5
                    ? "bg-indigo-500"
                    : "bg-rose-500";
                return (
                  <div
                    key={att.id}
                    className="flex-1 min-w-[36px] max-w-[56px] flex flex-col items-center justify-end h-full group"
                    title={`${att.title} - Nota: ${att.scoreOutOf10.toFixed(2)}/10`}
                  >
                    <span className="text-[11px] font-extrabold text-slate-700 mb-1">
                      {att.scoreOutOf10.toFixed(1)}
                    </span>
                    <div
                      className={`w-full max-w-[36px] rounded-t-xl transition-all ${colorClass}`}
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="mt-2 text-[10px] font-medium text-slate-500 truncate max-w-[48px]">
                      #{idx + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Topic Mastery Matrix (25 Topics) */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Mapa de Dominio por Tema (Los 25 Temas del Anexo I)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Detecta de un vistazo qué temas llevas de 10 y cuáles necesitan un repaso extra.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 font-bold text-slate-800">
              <tr>
                <th className="px-4 py-3">Tema</th>
                <th className="px-4 py-3">Bloque</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Preguntas Respondidas</th>
                <th className="px-4 py-3">% Acierto</th>
                <th className="px-4 py-3">Mejor Nota Tema</th>
                <th className="px-4 py-3 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {ALL_TOPICS.map((topic) => {
                const stat = topicAnalytics[topic.id] || {
                  answered: 0,
                  correct: 0,
                  accuracy: 0,
                  bestSingleScore: null
                };
                const status = state.topicStatus[topic.id] || "pendiente";

                return (
                  <tr key={topic.id} className="hover:bg-slate-50/80">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link href={`/temario/${topic.id}`} className="hover:text-indigo-600">
                        Tema {topic.id}: {topic.title}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${
                          topic.block === "general"
                            ? "bg-sky-50 text-sky-700"
                            : "bg-violet-50 text-violet-700"
                        }`}
                      >
                        {topic.block === "general" ? "General" : "Específico"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          status === "dominado"
                            ? "bg-emerald-50 text-emerald-700"
                            : status === "en_estudio"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {status === "dominado"
                          ? "Dominado"
                          : status === "en_estudio"
                          ? "En estudio"
                          : "Pendiente"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {stat.answered > 0 ? `${stat.correct}/${stat.answered} aciertos` : "Sin datos"}
                    </td>
                    <td className="px-4 py-3">
                      {stat.answered > 0 ? (
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className={`h-full ${
                                stat.accuracy >= 80
                                  ? "bg-emerald-500"
                                  : stat.accuracy >= 50
                                  ? "bg-amber-500"
                                  : "bg-rose-500"
                              }`}
                              style={{ width: `${stat.accuracy}%` }}
                            />
                          </div>
                          <span className="font-bold text-slate-800">{stat.accuracy}%</span>
                        </div>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-bold">
                      {stat.bestSingleScore !== null ? (
                        <span className="text-indigo-700">
                          {stat.bestSingleScore.toFixed(1)} / 10
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/temario/${topic.id}?tab=test`}
                        className="text-xs font-bold text-indigo-600 hover:underline"
                      >
                        Hacer Test →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Failed Questions & Bookmarked Questions List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Failed Questions */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-base">
                Preguntas Falladas Pendientes ({state.failedQuestionIds.length})
              </h3>
            </div>
            {state.failedQuestionIds.length > 0 && (
              <Link
                href="/examenes?modo=repaso_fallos"
                className="rounded-xl bg-amber-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-700"
              >
                Lanzar Test de Fallos →
              </Link>
            )}
          </div>

          {state.failedQuestionIds.length === 0 ? (
            <p className="text-xs text-slate-500 py-4">
              ¡Excelente! No tienes ninguna pregunta fallada pendiente de repasar.
            </p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {state.failedQuestionIds.map((qid) => {
                const q = getQuestionById(qid);
                if (!q) return null;
                return (
                  <div
                    key={qid}
                    className="rounded-xl border border-amber-200 bg-amber-50/40 p-3.5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-900">Tema {q.topicId}</span>
                      <button
                        type="button"
                        onClick={() => removeFailedQuestion(qid)}
                        className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                      >
                        ✓ Marcar como aprendida
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{q.question}</p>
                    <p className="text-xs text-emerald-800 font-medium">
                      Correcta: {q.options[q.correctIndex]}
                    </p>
                    <p className="text-[11px] text-slate-600">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Favorite / Doubtful Questions */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="h-5 w-5 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-base">
                Preguntas Marcadas como Dudosas ({state.favoriteQuestionIds.length})
              </h3>
            </div>
          </div>

          {state.favoriteQuestionIds.length === 0 ? (
            <p className="text-xs text-slate-500 py-4">
              Puedes marcar cualquier pregunta con el botón &ldquo;Marcar Dudosa&rdquo; durante los
              cuestionarios para guardarla aquí.
            </p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {state.favoriteQuestionIds.map((qid) => {
                const q = getQuestionById(qid);
                if (!q) return null;
                return (
                  <div
                    key={qid}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-indigo-700">Tema {q.topicId}</span>
                      <button
                        type="button"
                        onClick={() => toggleFavoriteQuestion(qid)}
                        className="text-xs font-semibold text-slate-500 hover:text-rose-600 cursor-pointer"
                      >
                        Quitar de dudosas
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{q.question}</p>
                    <p className="text-xs text-emerald-800 font-medium">
                      Correcta: {q.options[q.correctIndex]}
                    </p>
                    <p className="text-[11px] text-slate-600">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Complete Test Attempt History Table */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-slate-900">
            Historial Completo de Exámenes Realizados ({state.testHistory.length})
          </h2>

          {!confirmReset ? (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Reiniciar historial
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-700 font-bold">¿Seguro?</span>
              <button
                type="button"
                onClick={() => {
                  resetProgress();
                  setConfirmReset(false);
                }}
                className="rounded-lg bg-rose-600 px-2.5 py-1 text-xs font-bold text-white cursor-pointer"
              >
                Sí, borrar todo
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          )}
        </div>

        {state.testHistory.length === 0 ? (
          <p className="text-xs text-slate-500">Todavía no hay exámenes registrados.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 font-bold text-slate-800">
                <tr>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3">Examen / Modalidad</th>
                  <th className="px-4 py-3">Aciertos</th>
                  <th className="px-4 py-3">Fallos</th>
                  <th className="px-4 py-3">Blanco</th>
                  <th className="px-4 py-3">Calificación</th>
                  <th className="px-4 py-3">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {state.testHistory.map((att) => (
                  <tr key={att.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                      {new Date(att.date).toLocaleString("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{att.title}</td>
                    <td className="px-4 py-3 text-emerald-700 font-bold">{att.correctCount}</td>
                    <td className="px-4 py-3 text-rose-600 font-bold">{att.incorrectCount}</td>
                    <td className="px-4 py-3 text-slate-500">{att.unansweredCount}</td>
                    <td className="px-4 py-3 font-extrabold text-slate-900">
                      {att.scoreOutOf10.toFixed(2)} / 10
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          att.passed
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {att.passed ? "APTO" : "NO APTO"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
