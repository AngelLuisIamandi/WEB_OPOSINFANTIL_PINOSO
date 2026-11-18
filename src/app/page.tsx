"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Calculator,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Clock,
  FileText,
  Flame,
  GraduationCap,
  Layers,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";
import { ALL_QUESTIONS, ALL_TOPICS, BASES_PINOSO, supuestosPracticos } from "@/data";
import { useProgress } from "@/context/ProgressContext";

export default function HomePage() {
  const { state } = useProgress();

  // Baremo Calculator State (Max 30 points according to Base 6.2 Pinoso)
  const [mesesPublica, setMesesPublica] = useState(0);
  const [mesesPrivada, setMesesPrivada] = useState(0);
  const [titulacionPuntos, setTitulacionPuntos] = useState(0);
  const [cursosPuntos, setCursosPuntos] = useState(0);
  const [valencianoPuntos, setValencianoPuntos] = useState(0);
  const [idiomaComunitarioPuntos, setIdiomaComunitarioPuntos] = useState(0);

  const stats = useMemo(() => {
    const mastered = Object.values(state.topicStatus).filter((s) => s === "dominado").length;
    const inStudy = Object.values(state.topicStatus).filter((s) => s === "en_estudio").length;
    const totalTests = state.testHistory.length;
    const avgScore =
      totalTests > 0
        ? state.testHistory.reduce((acc, t) => acc + t.scoreOutOf10, 0) / totalTests
        : 0;
    const passedTests = state.testHistory.filter((t) => t.passed).length;

    return {
      mastered,
      inStudy,
      totalTests,
      avgScore,
      passedTests,
      failedQuestions: state.failedQuestionIds.length,
      favoriteQuestions: state.favoriteQuestionIds.length
    };
  }, [state]);

  const puntosExperiencia = Math.min(12, mesesPublica * 0.3 + mesesPrivada * 0.15);
  const puntosFormacion = Math.min(10, cursosPuntos);
  const puntosIdiomas = Math.min(5, valencianoPuntos + idiomaComunitarioPuntos);
  const totalConcurso = Math.min(
    30,
    puntosExperiencia + titulacionPuntos + puntosFormacion + puntosIdiomas
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 text-white p-8 sm:p-10 shadow-xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-indigo-200 backdrop-blur-xs border border-white/15">
              <GraduationCap className="h-4 w-4 text-indigo-300" />
              <span>Ayuntamiento de Pinoso · Expediente {BASES_PINOSO.expediente}</span>
              <span>·</span>
              <span>Bolsa Funcionario Interino</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Preparación Integral:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-emerald-300">
                Técnico/a de Educación Infantil
              </span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
              Plataforma diseñada exclusivamente según las Bases Oficiales del Ayuntamiento de
              Pinoso. Incluye los <strong>25 temas desarrollados para sacar un 10</strong>, temas
              listos para escribir en el 2º ejercicio, banco de más de{" "}
              <strong>{ALL_QUESTIONS.length || 300} preguntas tipo test</strong> y simuladores de
              los 3 ejercicios eliminatorios.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/temario"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-indigo-50 transition-colors"
              >
                <BookOpen className="h-4 w-4 text-indigo-600" />
                Estudiar los 25 Temas
              </Link>
              <Link
                href="/examenes?modo=oficial_pinoso"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 border border-indigo-400/30 transition-colors"
              >
                <CheckSquare className="h-4 w-4" />
                Simulacro Oficial 1º Ejercicio (20+3)
              </Link>
              <Link
                href="/segundo-ejercicio"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 border border-white/15 transition-colors"
              >
                <FileText className="h-4 w-4 text-sky-300" />
                Sorteo 2º Ejercicio
              </Link>
            </div>
          </div>

          {/* Quick Score / Progress Card */}
          <div className="lg:col-span-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/15 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                Tu Progreso Hacia la Plaza
              </span>
              <span className="rounded-lg bg-emerald-400/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                {Math.round((stats.mastered / (ALL_TOPICS.length || 25)) * 100)}% Dominado
              </span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-400 to-emerald-400 transition-all duration-500"
                style={{
                  width: `${Math.min(100, (stats.mastered / (ALL_TOPICS.length || 25)) * 100)}%`
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl bg-white/10 p-3">
                <div className="text-2xl font-extrabold">
                  {stats.mastered}/{ALL_TOPICS.length || 25}
                </div>
                <div className="text-xs text-indigo-200">Temas dominados</div>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <div className="text-2xl font-extrabold">
                  {stats.totalTests > 0 ? stats.avgScore.toFixed(2) : "—"}
                </div>
                <div className="text-xs text-indigo-200">Nota media Test (/10)</div>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <div className="text-2xl font-extrabold">{stats.totalTests}</div>
                <div className="text-xs text-indigo-200">Exámenes hechos</div>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <div className="text-2xl font-extrabold text-amber-300">
                  {stats.failedQuestions}
                </div>
                <div className="text-xs text-indigo-200">Fallos por repasar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Official Exercises of the Ayuntamiento de Pinoso */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Estructura Oficial de la Fase de Oposición (Máx. 70 Puntos)
            </h2>
            <p className="text-sm text-slate-600">
              Entrena cada una de las 3 pruebas obligatorias y eliminatorias exactamente como las
              evalúa el Tribunal en la Base Sexta.
            </p>
          </div>
          <Link
            href="/estadisticas"
            className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-700"
          >
            <span>Ver historial de notas</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exercise 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                  1º Ejercicio · Eliminatorio
                </span>
                <span className="text-sm font-extrabold text-slate-900">Máx. 10 pts</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Cuestionario Tipo Test (Temario General)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>20 preguntas</strong> con 4 alternativas (+3 de reserva) de los{" "}
                <strong>Temas 1 al 9</strong>. Tiempo máximo: <strong>40 minutos</strong>. Cada
                acierto suma <strong>+0,50 puntos</strong> y los errores{" "}
                <strong>NO descuentan</strong>. Se aprueba con 5,00 puntos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Temas 1 a 9 (Legislación)</span>
              <Link
                href="/examenes?modo=oficial_pinoso"
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition-colors"
              >
                Iniciar Simulacro 20+3 →
              </Link>
            </div>
          </div>

          {/* Exercise 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
                  2º Ejercicio · Eliminatorio
                </span>
                <span className="text-sm font-extrabold text-slate-900">Máx. 30 pts</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Desarrollo Escrito de 1 Tema (Temario Específico)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Desarrollo por escrito de <strong>1 tema elegido entre 2 extraídos al azar</strong>{" "}
                del Temario Específico (<strong>Temas 10 al 25</strong>). Calificación de 0 a 30
                puntos (mínimo <strong>15 puntos</strong> para superar el ejercicio).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Temas 10 a 25 (Pedagogía)</span>
              <Link
                href="/segundo-ejercicio"
                className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-violet-700 transition-colors"
              >
                Extraer 2 Bolas al Azar →
              </Link>
            </div>
          </div>

          {/* Exercise 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  3º Ejercicio · Eliminatorio
                </span>
                <span className="text-sm font-extrabold text-slate-900">Máx. 30 pts</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Supuesto Práctico de Escuela Infantil (0-3 años)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Resolución de un <strong>caso práctico</strong> propuesto por el Tribunal adecuado a
                las funciones de Técnico/a de Educación Infantil y al Anexo I. Calificación de 0 a
                30 puntos (mínimo <strong>15 puntos</strong> para aprobar).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                {supuestosPracticos.length} Supuestos resueltos
              </span>
              <Link
                href="/supuestos"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
              >
                Practicar Supuestos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access to Syllabus Blocks */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 font-bold">
                1-9
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Bloque I: Temario General (9 Temas)
                </h3>
                <p className="text-xs text-slate-500">
                  Constitución, Régimen Local, LPACAP 39/2015, TREBEP, PRL, LOPDGDD, Igualdad y
                  Transparencia
                </p>
              </div>
            </div>
            <Link
              href="/temario?bloque=general"
              className="text-xs font-bold text-sky-700 hover:underline"
            >
              Ver los 9 temas →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {ALL_TOPICS.filter((t) => t.block === "general").map((topic) => {
              const status = state.topicStatus[topic.id] || "pendiente";
              return (
                <Link
                  key={topic.id}
                  href={`/temario/${topic.id}`}
                  className="flex items-center justify-between py-2.5 hover:bg-slate-50 px-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-bold text-slate-700">
                      {topic.id}
                    </span>
                    <span className="truncate text-sm font-medium text-slate-800">
                      {topic.title}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
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
                </Link>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 font-bold">
                10-25
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Bloque II: Temario Específico (16 Temas)
                </h3>
                <p className="text-xs text-slate-500">
                  Psicología Evolutiva 0-3, Decreto 100/2022 CV, Juego, Cuento, Atelier Reggio
                  Emilia y Pedagogía Pikler
                </p>
              </div>
            </div>
            <Link
              href="/temario?bloque=especifico"
              className="text-xs font-bold text-violet-700 hover:underline"
            >
              Ver los 16 temas →
            </Link>
          </div>

          <div className="divide-y divide-slate-100 max-h-[360px] overflow-y-auto pr-1">
            {ALL_TOPICS.filter((t) => t.block === "especifico").map((topic) => {
              const status = state.topicStatus[topic.id] || "pendiente";
              return (
                <Link
                  key={topic.id}
                  href={`/temario/${topic.id}`}
                  className="flex items-center justify-between py-2.5 hover:bg-slate-50 px-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-50 text-xs font-bold text-violet-700">
                      {topic.id}
                    </span>
                    <span className="truncate text-sm font-medium text-slate-800">
                      {topic.title}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Calculator for Fase de Concurso (30 points) & Official Functions */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Calculator className="h-5 w-5 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-lg">
                Calculadora Oficial de Méritos · Fase de Concurso (Máx. 30 pts)
              </h3>
            </div>
            <span className="rounded-xl bg-indigo-50 px-3 py-1 text-sm font-extrabold text-indigo-700">
              {totalConcurso.toFixed(2)} / 30,00 pts
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Calcula tus puntos de la Base 6.2 de la convocatoria del Ayuntamiento de Pinoso (30% de
            la nota final, sumados tras superar la fase de oposición):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-slate-200 p-3.5 space-y-2">
              <div className="flex justify-between font-semibold text-slate-800">
                <span>1. Experiencia (1º Ciclo E.I.)</span>
                <span className="text-indigo-600">{puntosExperiencia.toFixed(2)} / 12 pts</span>
              </div>
              <label className="block text-xs text-slate-600">
                Meses en Administración Pública (0,30 pts/mes):
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={mesesPublica}
                  onChange={(e) => setMesesPublica(Math.max(0, Number(e.target.value)))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm"
                />
              </label>
              <label className="block text-xs text-slate-600">
                Meses en Centros Privados/Concertados (0,15 pts/mes):
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={mesesPrivada}
                  onChange={(e) => setMesesPrivada(Math.max(0, Number(e.target.value)))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm"
                />
              </label>
            </div>

            <div className="rounded-xl border border-slate-200 p-3.5 space-y-2">
              <div className="flex justify-between font-semibold text-slate-800">
                <span>2. Titulación Académica</span>
                <span className="text-indigo-600">{titulacionPuntos.toFixed(2)} / 3 pts</span>
              </div>
              <label className="block text-xs text-slate-600">
                Titulación adicional acreditada:
                <select
                  value={titulacionPuntos}
                  onChange={(e) => setTitulacionPuntos(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm bg-white"
                >
                  <option value={0}>Solo título requisito de acceso (0 pts)</option>
                  <option value={2}>Grado Magisterio Educación Infantil (2,00 pts)</option>
                  <option value={3}>Máster de Maestro de Educación Infantil (3,00 pts)</option>
                </select>
              </label>

              <div className="pt-2 flex justify-between font-semibold text-slate-800">
                <span>3. Cursos Formación (&ge;20h)</span>
                <span className="text-indigo-600">{puntosFormacion.toFixed(2)} / 10 pts</span>
              </div>
              <label className="block text-xs text-slate-600">
                Puntos acumulados en cursos homologados (máx. 10):
                <input
                  type="number"
                  step="0.5"
                  min={0}
                  max={10}
                  value={cursosPuntos}
                  onChange={(e) =>
                    setCursosPuntos(Math.min(10, Math.max(0, Number(e.target.value))))
                  }
                  className="mt-1 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm"
                />
              </label>
            </div>

            <div className="sm:col-span-2 rounded-xl border border-slate-200 p-3.5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between font-semibold text-slate-800 text-xs sm:text-sm">
                  <span>4A. Valenciano (JQCV / EOI)</span>
                  <span className="text-indigo-600">{valencianoPuntos.toFixed(2)} / 2,50 pts</span>
                </div>
                <select
                  value={valencianoPuntos}
                  onChange={(e) => setValencianoPuntos(Number(e.target.value))}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm bg-white"
                >
                  <option value={0}>Sin certificado / A1 (0 pts)</option>
                  <option value={0.5}>Nivel A2 (0,50 pts)</option>
                  <option value={0.75}>Nivel B1 (0,75 pts)</option>
                  <option value={1}>Nivel B2 (1,00 pt)</option>
                  <option value={1.5}>Nivel C1 (1,50 pts)</option>
                  <option value={2.5}>Nivel C2 (2,50 pts)</option>
                </select>
              </div>
              <div>
                <div className="flex justify-between font-semibold text-slate-800 text-xs sm:text-sm">
                  <span>4B. Idioma Comunitario (EOI)</span>
                  <span className="text-indigo-600">
                    {idiomaComunitarioPuntos.toFixed(2)} / 2,50 pts
                  </span>
                </div>
                <select
                  value={idiomaComunitarioPuntos}
                  onChange={(e) => setIdiomaComunitarioPuntos(Number(e.target.value))}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm bg-white"
                >
                  <option value={0}>Sin certificado EOI (0 pts)</option>
                  <option value={0.5}>Nivel A1 EOI (0,50 pts)</option>
                  <option value={1}>Nivel A2 EOI (1,00 pt)</option>
                  <option value={1.25}>Nivel B1 EOI (1,25 pts)</option>
                  <option value={1.5}>Nivel B2 EOI (1,50 pts)</option>
                  <option value={1.75}>Nivel C1 EOI (1,75 pts)</option>
                  <option value={2.5}>Nivel C2 EOI (2,50 pts)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Functions of the Position from Base Primera */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <Award className="h-5 w-5 text-violet-600" />
            <h3 className="font-bold text-slate-900 text-lg">
              Funciones Oficiales del Puesto (Base 1ª)
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Memoriza estas 8 funciones literales: son clave para el Tema 22 y para introducir
            cualquier Supuesto Práctico del 3º Ejercicio.
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {BASES_PINOSO.funcionesPuesto.map((fn, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{fn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
