"use client";

import React, { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  BookOpen,
  CheckCircle2,
  CheckSquare,
  Clock,
  FileText,
  Filter,
  Search,
  Sparkles
} from "lucide-react";
import { ALL_TOPICS } from "@/data";
import { useProgress } from "@/context/ProgressContext";
import { StudyStatus, TopicBlock } from "@/types/oposicion";

function TemarioContent() {
  const searchParams = useSearchParams();
  const initialBlock = (searchParams.get("bloque") as TopicBlock | "todos") || "todos";

  const { state, setTopicStatus } = useProgress();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlock, setSelectedBlock] = useState<"todos" | TopicBlock>(initialBlock);
  const [selectedStatus, setSelectedStatus] = useState<"todos" | StudyStatus>("todos");

  const topicBestScore = useMemo(() => {
    const map: Record<number, { best: number; attempts: number }> = {};
    for (const attempt of state.testHistory) {
      if (attempt.topicIds.length === 1) {
        const tid = attempt.topicIds[0];
        if (!map[tid]) {
          map[tid] = { best: attempt.scoreOutOf10, attempts: 1 };
        } else {
          map[tid].best = Math.max(map[tid].best, attempt.scoreOutOf10);
          map[tid].attempts += 1;
        }
      }
    }
    return map;
  }, [state.testHistory]);

  const filteredTopics = useMemo(() => {
    return ALL_TOPICS.filter((topic) => {
      if (selectedBlock !== "todos" && topic.block !== selectedBlock) return false;
      const status = state.topicStatus[topic.id] || "pendiente";
      if (selectedStatus !== "todos" && status !== selectedStatus) return false;

      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const inTitle =
          topic.title.toLowerCase().includes(q) ||
          topic.officialTitle.toLowerCase().includes(q) ||
          topic.summary.toLowerCase().includes(q) ||
          `tema ${topic.id}`.includes(q);
        const inNormativa = topic.normativaClave.some((n) => n.toLowerCase().includes(q));
        return inTitle || inNormativa;
      }
      return true;
    });
  }, [selectedBlock, selectedStatus, searchQuery, state.topicStatus]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
            <BookOpen className="h-3.5 w-3.5" />
            Anexo I Oficial · Ayuntamiento de Pinoso
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Temario Completo (25 Temas Desarrollados)
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Cada tema incluye Teoría Exhaustiva de 10, Tema Redactado para el 2º Ejercicio, Esquema
            Visual, Datos de Oro y Cuestionario Tipo Test.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold">
          <div className="rounded-xl bg-white border border-slate-200 px-3.5 py-2 shadow-2xs">
            General (1-9): <span className="text-sky-700 font-bold">1º Ej. Test</span>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 px-3.5 py-2 shadow-2xs">
            Específico (10-25): <span className="text-violet-700 font-bold">2º y 3º Ej. + Test</span>
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-5 relative">
            <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por número de tema, título, ley (ej. 39/2015, Decreto 100/2022) o autor (Pikler, Piaget)..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            {(
              [
                { id: "todos", label: "Todos (25)" },
                { id: "general", label: "General (1-9)" },
                { id: "especifico", label: "Específico (10-25)" }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedBlock(tab.id)}
                className={`flex-1 rounded-lg py-1.5 px-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedBlock === tab.id
                    ? "bg-white text-indigo-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="md:col-span-3 flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400 shrink-0" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as "todos" | StudyStatus)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
            >
              <option value="todos">Estado: Todos</option>
              <option value="pendiente">Estado: Pendientes</option>
              <option value="en_estudio">Estado: En estudio</option>
              <option value="dominado">Estado: Dominados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTopics.map((topic) => {
          const status = state.topicStatus[topic.id] || "pendiente";
          const scoreInfo = topicBestScore[topic.id];
          const isGeneral = topic.block === "general";

          return (
            <div
              key={topic.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-extrabold ${
                        isGeneral
                          ? "bg-sky-50 text-sky-700 border border-sky-200"
                          : "bg-violet-50 text-violet-700 border border-violet-200"
                      }`}
                    >
                      TEMA {topic.id} · {isGeneral ? "GENERAL" : "ESPECÍFICO"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {topic.readTimeMinutes} min
                    </span>
                  </div>

                  {/* Status selector */}
                  <select
                    value={status}
                    onChange={(e) => setTopicStatus(topic.id, e.target.value as StudyStatus)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold border cursor-pointer ${
                      status === "dominado"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : status === "en_estudio"
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-slate-50 text-slate-600 border-slate-200"
                    }`}
                  >
                    <option value="pendiente">○ Pendiente</option>
                    <option value="en_estudio">◐ En estudio</option>
                    <option value="dominado">✓ Dominado</option>
                  </select>
                </div>

                <Link href={`/temario/${topic.id}`} className="block group">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Tema {topic.id}: {topic.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2 italic">
                    {topic.officialTitle}
                  </p>
                </Link>

                <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                  {topic.summary}
                </p>

                {/* Normativa / Referencias Clave */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topic.normativaClave.slice(0, 3).map((norma, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    >
                      {norma}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="font-semibold">
                    {topic.questions.length} preguntas test
                  </span>
                  {scoreInfo && (
                    <span
                      className={`rounded-md px-2 py-0.5 font-bold ${
                        scoreInfo.best >= 8
                          ? "bg-emerald-50 text-emerald-700"
                          : scoreInfo.best >= 5
                          ? "bg-amber-50 text-amber-700"
                          : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      Mejor nota: {scoreInfo.best.toFixed(1)}/10
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/temario/${topic.id}?tab=test`}
                    className="inline-flex items-center gap-1 rounded-xl border border-indigo-200 bg-indigo-50/70 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition-colors"
                  >
                    <CheckSquare className="h-3.5 w-3.5" />
                    Hacer Test
                  </Link>
                  <Link
                    href={`/temario/${topic.id}`}
                    className="inline-flex items-center gap-1 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
                  >
                    Estudiar Tema →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TemarioPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-12 text-center text-slate-500">
          Cargando temario...
        </div>
      }
    >
      <TemarioContent />
    </Suspense>
  );
}
