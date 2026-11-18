"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Clock,
  Dices,
  Eye,
  EyeOff,
  FileText,
  Sparkles,
  Trophy
} from "lucide-react";
import { ESPECIFICO_TOPICS, getTopicById, shuffleArray } from "@/data";
import { useProgress } from "@/context/ProgressContext";

export default function SegundoEjercicioPage() {
  const { state, recordWrittenAttempt } = useProgress();

  const [drawnTopics, setDrawnTopics] = useState<[number, number] | null>(null);
  const [chosenTopicId, setChosenTopicId] = useState<number | null>(null);
  const [userEssay, setUserEssay] = useState("");
  const [showModelSolution, setShowModelSolution] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [selfScore, setSelfScore] = useState<number>(24);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleDrawTwoBalls = () => {
    const ids = ESPECIFICO_TOPICS.map((t) => t.id);
    const shuffled = shuffleArray(ids);
    const pair: [number, number] =
      shuffled.length >= 2 ? [shuffled[0], shuffled[1]] : [10, 11];
    setDrawnTopics(pair);
    setChosenTopicId(null);
    setUserEssay("");
    setShowModelSolution(false);
    setElapsedSeconds(0);
    setTimerRunning(false);
    setSavedSuccess(false);
  };

  const handleSelectTopic = (tid: number) => {
    setChosenTopicId(tid);
    setTimerRunning(true);
    setSavedSuccess(false);
  };

  const chosenTopic = chosenTopicId ? getTopicById(chosenTopicId) : undefined;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${String(mins).padStart(2, "0")}:${String(rem).padStart(2, "0")}`;
  };

  const wordCount = userEssay.trim() ? userEssay.trim().split(/\s+/).length : 0;

  const handleSaveAttempt = () => {
    if (!chosenTopicId) return;
    recordWrittenAttempt({
      id: `written-${Date.now()}`,
      date: new Date().toISOString(),
      drawnTopics: drawnTopics || [chosenTopicId, chosenTopicId],
      chosenTopic: chosenTopicId,
      selfScoreOutOf30: selfScore,
      durationSeconds: elapsedSeconds,
      notes: `Palabras redactadas: ${wordCount}`
    });
    setTimerRunning(false);
    setSavedSuccess(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700 border border-violet-200">
            <FileText className="h-3.5 w-3.5" />
            Base 6.1 · Segundo Ejercicio Eliminatorio (Máx. 30 puntos)
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
            Simulador Oficial del 2º Ejercicio (Sorteo de 2 Bolas y Desarrollo)
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            El Tribunal extrae <strong>2 temas al azar del Temario Específico (Temas 10 al 25)</strong>{" "}
            y tú eliges <strong>1 tema</strong> para desarrollarlo por escrito. Puntuación de 0 a 30
            puntos (mínimo 15 puntos para aprobar).
          </p>
        </div>

        <button
          type="button"
          onClick={handleDrawTwoBalls}
          className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-sm hover:bg-violet-700 transition-all cursor-pointer shrink-0"
        >
          <Dices className="h-5 w-5" />
          Extraer 2 Bolas al Azar (Temas 10-25)
        </button>
      </div>

      {/* Drawn Balls Selection */}
      {drawnTopics ? (
        <div className="rounded-3xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/70 to-indigo-50/40 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Bolas Extraídas en el Sorteo: Elige 1 de los 2 Temas para Desarrollar
            </h2>
            <span className="text-xs font-bold text-violet-700 uppercase">
              Probabilidad real de acierto
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drawnTopics.map((tid, idx) => {
              const t = getTopicById(tid);
              const isSelected = chosenTopicId === tid;
              return (
                <div
                  key={tid}
                  className={`flex flex-col justify-between rounded-2xl border-2 p-6 transition-all ${
                    isSelected
                      ? "border-violet-600 bg-white shadow-md ring-2 ring-violet-500/20"
                      : "border-slate-200 bg-white/90 hover:border-violet-300"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-3 py-1 text-xs font-extrabold text-white">
                        BOLA #{idx + 1} · TEMA {tid}
                      </span>
                      {isSelected && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          ✓ Tema Elegido
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {t ? `Tema ${t.id}: ${t.title}` : `Tema ${tid}`}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      {t?.officialTitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectTopic(tid)}
                    className={`mt-5 w-full rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-violet-700 text-white"
                        : "bg-slate-900 text-white hover:bg-violet-600"
                    }`}
                  >
                    {isSelected
                      ? "Desarrollando este Tema"
                      : `Elegir Bola #${idx + 1} (Tema ${tid})`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <Dices className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pulsa &ldquo;Extraer 2 Bolas al Azar&rdquo; o selecciona un tema específico abajo
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            En el examen real tendrás que elegir entre dos temas extraídos por sorteo de entre los
            16 temas del bloque específico (Temas 10 al 25).
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            {ESPECIFICO_TOPICS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setDrawnTopics([t.id, t.id === 25 ? 10 : t.id + 1]);
                  handleSelectTopic(t.id);
                }}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-violet-300 hover:bg-violet-50 cursor-pointer"
              >
                Practicar Tema {t.id}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Writing Workspace & Official Solution Comparison */}
      {chosenTopic && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div>
              <span className="text-xs font-bold text-violet-700 uppercase">
                Desarrollando Tema {chosenTopic.id}
              </span>
              <h3 className="font-bold text-slate-900 text-base">{chosenTopic.title}</h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-1.5 text-sm font-mono font-bold text-slate-800">
                <Clock className="h-4 w-4 text-slate-500" />
                <span>{formatTime(elapsedSeconds)}</span>
              </div>

              <span className="rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
                {wordCount} palabras escritas
              </span>

              <button
                type="button"
                onClick={() => setShowModelSolution((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white hover:bg-violet-700 transition-colors cursor-pointer"
              >
                {showModelSolution ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Ocultar Tema Modelo
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Ver Tema Redactado Oficial y Autoevaluar
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: User Writing Area */}
            <div
              className={`${
                showModelSolution ? "lg:col-span-5" : "lg:col-span-12"
              } rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                  Tu Guion / Redacción de Examen (Bolígrafo Azul y Anonimato)
                </h4>
                <Link
                  href={`/temario/${chosenTopic.id}?tab=desarrollo`}
                  className="text-xs font-bold text-indigo-600 hover:underline"
                >
                  Abrir ficha completa del Tema {chosenTopic.id} →
                </Link>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700">
                <strong>Epígrafes obligatorios a cubrir sin dejarte ninguno:</strong>{" "}
                {chosenTopic.officialTitle}
              </div>

              <textarea
                rows={16}
                value={userEssay}
                onChange={(e) => setUserEssay(e.target.value)}
                placeholder={`1. INTRODUCCIÓN Y MARCO NORMATIVO (Cita el Decreto 100/2022 del Consell y la importancia evolutiva en 0-3 años)...\n\n2. DESARROLLO DE CADA EPÍGRAFE DEL TÍTULO OFICIAL (Autores, etapas, características y aplicación en el aula)...\n\n3. CONCLUSIÓN PEDAGÓGICA Y ROL DEL TÉCNICO/A DE EDUCACIÓN INFANTIL EN EL AYUNTAMIENTO DE PINOSO...\n\n4. BIBLIOGRAFÍA Y NORMATIVA...`}
                className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-sm text-slate-900 leading-relaxed focus:border-violet-600 focus:outline-none"
              />
            </div>

            {/* Right: Official Model Essay & Self-Evaluation Rubric */}
            {showModelSolution && (
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-xs space-y-5 max-h-[620px] overflow-y-auto">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-violet-700">
                    <Sparkles className="h-4 w-4" />
                    <span>Tema Modelo Redactado para 30/30 Puntos</span>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-extrabold uppercase text-indigo-700">
                      1. Introducción
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                      {chosenTopic.temaDesarrollo.introduccion}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-xs font-extrabold uppercase text-violet-700">
                      2. Desarrollo por Epígrafes
                    </h5>
                    {chosenTopic.temaDesarrollo.estructuraEpigrafes.map((ep, i) => (
                      <div key={i} className="rounded-xl bg-slate-50 p-3.5 border border-slate-200">
                        <h6 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                          {ep.epigraph}
                        </h6>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                          {ep.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-extrabold uppercase text-emerald-700">
                      3. Conclusión
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                      {chosenTopic.temaDesarrollo.conclusion}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-extrabold uppercase text-slate-700">
                      4. Bibliografía y Normativa Clave
                    </h5>
                    <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                      {chosenTopic.temaDesarrollo.bibliografiaYNormativa.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Self-Assessment Card out of 30 points */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-base">
                      Autoevaluación del Tribunal (De 0 a 30 Puntos · Mínimo 15)
                    </h4>
                    <span className="rounded-xl bg-white px-3 py-1 text-sm font-extrabold text-emerald-700 border border-emerald-200">
                      {selfScore} / 30 pts
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {chosenTopic.temaDesarrollo.consejosTribunal.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Puntúa tu ejercicio comparándolo con el modelo oficial (0 - 30 puntos):
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={30}
                      step={0.5}
                      value={selfScore}
                      onChange={(e) => setSelfScore(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {savedSuccess ? (
                      <span className="text-xs font-bold text-emerald-700">
                        ✓ Simulacro guardado en tu historial de notas ({selfScore}/30 pts)
                      </span>
                    ) : (
                      <span className="text-xs text-slate-600">
                        Guarda la nota para llevar el control en Estadísticas
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={handleSaveAttempt}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 cursor-pointer"
                    >
                      <Trophy className="h-4 w-4" />
                      Guardar Calificación ({selfScore}/30)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* History of Written Simulations */}
      {state.writtenHistory.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <h3 className="font-bold text-slate-900 text-base">
            Historial de Simulacros del 2º Ejercicio ({state.writtenHistory.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.writtenHistory.slice(0, 6).map((item) => {
              const t = getTopicById(item.chosenTopic);
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 p-4 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs text-slate-500">
                      Sorteo: T{item.drawnTopics[0]} vs T{item.drawnTopics[1]}
                    </div>
                    <div className="font-bold text-sm text-slate-900">
                      Elegido: Tema {item.chosenTopic} ({t?.title})
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.notes}</div>
                  </div>
                  <span
                    className={`rounded-xl px-3 py-1 text-xs font-extrabold ${
                      item.selfScoreOutOf30 >= 15
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {item.selfScoreOutOf30}/30
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
