"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  FileCheck2,
  Layers,
  Scale,
  Sparkles,
  Trophy
} from "lucide-react";
import { supuestosPracticos } from "@/data";
import { useProgress } from "@/context/ProgressContext";

export default function SupuestosPage() {
  const { state, recordPracticalAttempt } = useProgress();

  const [selectedId, setSelectedId] = useState<string>(supuestosPracticos[0]?.id || "");
  const [userDraft, setUserDraft] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const [selfScore, setSelfScore] = useState<number>(25);
  const [savedNotice, setSavedNotice] = useState(false);

  const activeCase =
    supuestosPracticos.find((c) => c.id === selectedId) || supuestosPracticos[0];

  const handleSelectCase = (id: string) => {
    setSelectedId(id);
    setUserDraft("");
    setShowSolution(false);
    setSavedNotice(false);
  };

  const handleSavePractice = () => {
    if (!activeCase) return;
    recordPracticalAttempt({
      id: `practical-${Date.now()}`,
      caseId: activeCase.id,
      date: new Date().toISOString(),
      selfScoreOutOf30: selfScore,
      userDraft: userDraft.slice(0, 300)
    });
    setSavedNotice(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
          <Sparkles className="h-3.5 w-3.5" />
          Base 6.1 · Tercer Ejercicio Eliminatorio (Máx. 30 puntos · Mínimo 15)
        </span>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
          Banco de Supuestos Prácticos Resueltos (Escuela Infantil 0-3 Años)
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Entrena los 8 casos prácticos más representativos para la plaza de Técnico/a de Educación
          Infantil del Ayuntamiento de Pinoso, resueltos paso a paso con fundamentación en el{" "}
          <strong>Decreto 100/2022 del Consell</strong> y en las funciones de la{" "}
          <strong>Base Primera</strong>.
        </p>
      </div>

      {/* Selector Grid of 8 Practical Cases (Horizontal snap scroll on mobile, grid on sm+) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
        {supuestosPracticos.map((c) => {
          const isSelected = c.id === activeCase?.id;
          const pastAttempt = state.practicalHistory.find((p) => p.caseId === c.id);
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => handleSelectCase(c.id)}
              className={`snap-start shrink-0 w-[260px] sm:w-auto flex flex-col justify-between rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                isSelected
                  ? "border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20"
                  : "border-slate-200 bg-white hover:border-emerald-300"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-emerald-600 px-2.5 py-0.5 text-[11px] font-extrabold text-white">
                    SUPUESTO #{c.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">{c.ageGroup}</span>
                </div>
                <h2 className="text-sm font-bold text-slate-900 line-clamp-3 leading-snug">
                  {c.title}
                </h2>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
                <span className="text-slate-500">
                  Temas: {c.relatedTopics.map((t) => `T${t}`).join(", ")}
                </span>
                {pastAttempt && (
                  <span className="font-bold text-emerald-700">
                    {pastAttempt.selfScoreOutOf30}/30 pts
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Practical Case Detail */}
      {activeCase && (
        <div className="space-y-6">
          {/* Scenario Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-xl bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white">
                  SUPUESTO PRÁCTICO #{activeCase.number}
                </span>
                <span className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Edad: {activeCase.ageGroup}
                </span>
                {activeCase.relatedTopics.map((tid) => (
                  <Link
                    key={tid}
                    href={`/temario/${tid}`}
                    className="rounded-xl bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                  >
                    Ver Tema {tid} →
                  </Link>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowSolution((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                {showSolution ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Ocultar Resolución Oficial
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Ver Resolución Modelo del Tribunal (30/30)
                  </>
                )}
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {activeCase.title}
            </h2>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                Planteamiento del Caso (Enunciado del Tribunal):
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {activeCase.scenario}
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Cuestiones a resolver por el/la aspirante:
              </div>
              <ul className="space-y-2 text-sm font-medium text-slate-800">
                {activeCase.questionsToResolve.map((q, i) => (
                  <li
                    key={i}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* User Draft Box */}
            <div className="pt-2 space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Tu Esquema / Respuesta de Práctica (Escribe aquí tus ideas antes de ver la solución):
              </label>
              <textarea
                rows={6}
                value={userDraft}
                onChange={(e) => setUserDraft(e.target.value)}
                placeholder="1. Marco Legal (Decreto 100/2022, Base 1ª Pinoso) y Psicopedagógico (autores)...&#10;2. Objetivos específicos...&#10;3. Fases de actuación / Intervención educativa...&#10;4. Organización de espacios, materiales y tiempos...&#10;5. Relación con las familias y atención a la diversidad...&#10;6. Evaluación e instrumentos de registro..."
                className="w-full rounded-2xl border border-slate-300 bg-slate-50/70 p-4 text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Model Resolution Card */}
          {showSolution && (
            <div className="rounded-3xl border-2 border-emerald-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    Resolución Modelo Completa · Nivel 30/30 Puntos
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    Estructura de Respuesta para el Tribunal de Pinoso
                  </h3>
                </div>
              </div>

              {/* 1. Justificación Legal y Pedagógica */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 space-y-2.5">
                <h4 className="flex items-center gap-2 font-extrabold text-sm text-indigo-900 uppercase">
                  <Scale className="h-4 w-4 text-indigo-600" />
                  1. Fundamentación Legal y Psicopedagógica
                </h4>
                {activeCase.solution.justificacionPedagogicaYLegal.map((p, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* 2. Objetivos */}
              <div className="space-y-2.5">
                <h4 className="font-extrabold text-sm text-slate-900 uppercase">
                  2. Objetivos de la Intervención
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-800">
                  {activeCase.solution.objetivos.map((obj, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 rounded-xl border border-slate-200 p-3 bg-slate-50/60"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Propuesta de Intervención Paso a Paso */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-sm text-slate-900 uppercase">
                  3. Desarrollo de la Actuación e Intervención Educativa por Fases
                </h4>
                {activeCase.solution.propuestaIntervencion.map((f, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2.5 shadow-2xs"
                  >
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base text-emerald-800">
                      {f.fase}
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {f.acciones.map((acc, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="font-bold text-emerald-600">•</span>
                          <span className="leading-relaxed">{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 4, 5, 6: Recursos, Familias/Diversidad y Evaluación */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4 space-y-2">
                  <h5 className="font-extrabold text-xs uppercase text-slate-900">
                    4. Espacio, Tiempo y Materiales
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeCase.solution.organizacionEspacioTiempoMateriales.map((it, i) => (
                      <li key={i} className="leading-relaxed">
                        • {it}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 space-y-2">
                  <h5 className="font-extrabold text-xs uppercase text-slate-900">
                    5. Inclusión (DUA) y Familias
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeCase.solution.atencionDiversidadYFamilias.map((it, i) => (
                      <li key={i} className="leading-relaxed">
                        • {it}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 space-y-2">
                  <h5 className="font-extrabold text-xs uppercase text-slate-900">
                    6. Evaluación y Registro (Art. 26 D. 100/2022)
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeCase.solution.evaluacion.map((it, i) => (
                      <li key={i} className="leading-relaxed">
                        • {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 7. Conclusión */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-1.5">
                <h5 className="font-extrabold text-xs uppercase text-emerald-900">
                  7. Conclusión Pedagógica para Cerrar el Ejercicio
                </h5>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {activeCase.solution.conclusion}
                </p>
              </div>

              {/* Self-Evaluation Rubric */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-extrabold text-sm text-slate-900">
                    Lista de Control del Tribunal (Criterios de Corrección sobre 30 puntos)
                  </h5>
                  <span className="rounded-xl bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white">
                    Tu nota: {selfScore} / 30 pts
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeCase.rubricItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FileCheck2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <input
                    type="range"
                    min={0}
                    max={30}
                    step={0.5}
                    value={selfScore}
                    onChange={(e) => setSelfScore(Number(e.target.value))}
                    className="w-64 accent-emerald-600"
                  />

                  <div className="flex items-center gap-3">
                    {savedNotice && (
                      <span className="text-xs font-bold text-emerald-700">
                        ✓ Guardado en tu historial
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={handleSavePractice}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 cursor-pointer"
                    >
                      <Trophy className="h-4 w-4" />
                      Registrar Nota del Supuesto ({selfScore}/30)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
