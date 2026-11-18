"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Layers,
  Lightbulb,
  Printer,
  Scale,
  Sparkles,
  StickyNote
} from "lucide-react";
import { ALL_TOPICS, getTopicById, shuffleArray } from "@/data";
import { useProgress } from "@/context/ProgressContext";
import { StudyStatus } from "@/types/oposicion";
import { QuizEngine } from "@/components/QuizEngine";

type TabType = "teoria" | "desarrollo" | "esquema" | "test";

function TopicDetailContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const topicId = Number(params?.id);
  const topic = getTopicById(topicId);

  const { state, setTopicStatus, setTopicNote } = useProgress();

  const initialTab = (searchParams.get("tab") as TabType) || "teoria";
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [shuffleQuizKey, setShuffleQuizKey] = useState(0);

  useEffect(() => {
    const t = searchParams.get("tab") as TabType | null;
    if (t && ["teoria", "desarrollo", "esquema", "test"].includes(t)) {
      setActiveTab(t);
    }
  }, [searchParams]);

  const quizQuestions = useMemo(() => {
    if (!topic) return [];
    return shuffleQuizKey === 0 ? topic.questions : shuffleArray(topic.questions);
  }, [topic, shuffleQuizKey]);

  if (!topic) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Tema no encontrado</h1>
        <p className="text-slate-600">
          El tema solicitado no existe en el Anexo I de la convocatoria.
        </p>
        <Link
          href="/temario"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white"
        >
          ← Volver al Temario Completo
        </Link>
      </div>
    );
  }

  const currentStatus = state.topicStatus[topic.id] || "pendiente";
  const personalNote = state.topicNotes[topic.id] || "";
  const prevTopic = getTopicById(topic.id - 1);
  const nextTopic = getTopicById(topic.id + 1);
  const isGeneral = topic.block === "general";

  // Calculate total words in temaDesarrollo
  const totalWordsDesarrollo = [
    topic.temaDesarrollo.introduccion,
    ...topic.temaDesarrollo.estructuraEpigrafes.map((e) => `${e.epigraph} ${e.body}`),
    topic.temaDesarrollo.conclusion
  ]
    .join(" ")
    .split(/\s+/).length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Top Breadcrumb & Prev/Next */}
      <div className="flex flex-wrap items-center justify-between gap-4 no-print">
        <Link
          href="/temario"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Volver a los 25 Temas</span>
        </Link>

        <div className="flex items-center gap-2">
          {prevTopic && (
            <Link
              href={`/temario/${prevTopic.id}`}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Tema {prevTopic.id}
            </Link>
          )}
          {nextTopic && (
            <Link
              href={`/temario/${nextTopic.id}`}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Tema {nextTopic.id}
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Topic Header Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-lg px-3 py-1 text-xs font-extrabold ${
                isGeneral
                  ? "bg-sky-50 text-sky-700 border border-sky-200"
                  : "bg-violet-50 text-violet-700 border border-violet-200"
              }`}
            >
              TEMA {topic.id} de {ALL_TOPICS.length} ·{" "}
              {isGeneral ? "TEMARIO GENERAL (1º EJERCICIO)" : "TEMARIO ESPECÍFICO (2º Y 3º EJERCICIO)"}
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              <Clock className="h-3.5 w-3.5" />
              Lectura: ~{topic.readTimeMinutes} min
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
              <CheckSquare className="h-3.5 w-3.5" />
              {topic.questions.length} preguntas de examen
            </span>
          </div>

          <div className="flex items-center gap-2 no-print">
            <span className="text-xs font-semibold text-slate-500">Estado:</span>
            <select
              value={currentStatus}
              onChange={(e) => setTopicStatus(topic.id, e.target.value as StudyStatus)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold border cursor-pointer ${
                currentStatus === "dominado"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                  : currentStatus === "en_estudio"
                  ? "bg-amber-50 text-amber-700 border-amber-300"
                  : "bg-slate-50 text-slate-700 border-slate-200"
              }`}
            >
              <option value="pendiente">○ Pendiente</option>
              <option value="en_estudio">◐ En estudio</option>
              <option value="dominado">✓ Dominado</option>
            </select>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tema {topic.id}: {topic.title}
          </h1>
          <div className="mt-2 rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900">Epígrafe Oficial (Anexo I Pinoso):</strong>{" "}
            {topic.officialTitle}
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{topic.summary}</p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Marco Normativo / Autores Clave:
          </span>
          {topic.normativaClave.map((norma, i) => (
            <span
              key={i}
              className="rounded-lg bg-indigo-50/70 border border-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800"
            >
              {norma}
            </span>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 lg:flex lg:flex-wrap gap-2 no-print">
          {(
            [
              {
                id: "teoria",
                label: "1. Teoría Completa (10/10)",
                shortLabel: "1. Teoría (10/10)",
                icon: BookOpen
              },
              {
                id: "desarrollo",
                label: "2. Tema Redactado (Examen Escrito)",
                shortLabel: "2. Desarrollo",
                icon: FileText
              },
              {
                id: "esquema",
                label: "3. Esquema, Datos de Oro y Apuntes",
                shortLabel: "3. Esquema y Oro",
                icon: Layers
              },
              {
                id: "test",
                label: `4. Cuestionario del Tema (${topic.questions.length})`,
                shortLabel: `4. Test (${topic.questions.length})`,
                icon: CheckSquare
              }
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center lg:justify-start gap-2 rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  active
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden truncate">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: TEORÍA COMPLETA */}
      {activeTab === "teoria" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Mobile Collapsible Index */}
          <div className="lg:hidden no-print">
            <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-slate-900 text-sm">
                <span>Índice de apartados del Tema {topic.id}</span>
                <span className="text-xs font-semibold text-indigo-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <nav className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                {topic.sections.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#seccion-${idx}`}
                    className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </details>
          </div>

          {/* Desktop Sidebar Index */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 no-print">
            <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Índice del Tema {topic.id}
              </h3>
              <nav className="space-y-1.5">
                {topic.sections.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#seccion-${idx}`}
                    className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("test")}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  <CheckSquare className="h-4 w-4" />
                  Ir al Cuestionario ({topic.questions.length} preg.)
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Printer className="h-4 w-4" />
                  Imprimir / Guardar PDF
                </button>
              </div>
            </div>
          </aside>

          {/* Main Theory Sections */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {topic.sections.map((section, idx) => (
              <section
                key={idx}
                id={`seccion-${idx}`}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5"
              >
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                  {section.title}
                </h2>

                <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights / Callouts */}
                {section.highlights && section.highlights.length > 0 && (
                  <div className="space-y-4 pt-2">
                    {section.highlights.map((hl, hIdx) => {
                      const styleMap = {
                        legislacion: {
                          box: "border-indigo-200 bg-indigo-50/60",
                          badge: "text-indigo-800",
                          icon: Scale
                        },
                        importante: {
                          box: "border-amber-200 bg-amber-50/70",
                          badge: "text-amber-900",
                          icon: Lightbulb
                        },
                        ejemplo: {
                          box: "border-emerald-200 bg-emerald-50/60",
                          badge: "text-emerald-900",
                          icon: Sparkles
                        },
                        trampa: {
                          box: "border-rose-200 bg-rose-50/70",
                          badge: "text-rose-900",
                          icon: AlertTriangle
                        }
                      };
                      const st = styleMap[hl.type || "importante"];
                      const Icon = st.icon;

                      return (
                        <div key={hIdx} className={`rounded-xl border p-4 sm:p-5 ${st.box}`}>
                          <div className={`flex items-center gap-2 font-bold text-sm mb-2.5 ${st.badge}`}>
                            <Icon className="h-4 w-4 shrink-0" />
                            <span>{hl.title}</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                            {hl.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2">
                                <span className="font-bold text-indigo-600 mt-0.5">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Table */}
                {section.table && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mt-4">
                    <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100/90 text-slate-900 font-bold">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-3 align-top leading-relaxed ${
                                  cIdx === 0 ? "font-semibold text-slate-900" : "text-slate-700"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom Action Card */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 no-print">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold">
                  ¿Has terminado de leer la teoría del Tema {topic.id}?
                </h3>
                <p className="text-sm text-indigo-100">
                  Pon a prueba tu memoria ahora mismo con el cuestionario específico o revisa el
                  tema redactado para el examen de desarrollo.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setTopicStatus(topic.id, "dominado")}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/25 border border-white/20 cursor-pointer"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Marcar Tema Dominado
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("test");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-indigo-900 shadow-sm hover:bg-indigo-50 cursor-pointer"
                >
                  Hacer Cuestionario del Tema →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TEMA REDACTADO PARA EL EXAMEN ESCRITO */}
      {activeTab === "desarrollo" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-5 flex flex-wrap items-center justify-between gap-4 no-print">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-violet-800">
                <Award className="h-4 w-4 text-violet-600" />
                <span>Modelo Oficial de Examen Escrito · 2º Ejercicio (30 Puntos)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                Este texto está estructurado con <strong>Introducción</strong>,{" "}
                <strong>Desarrollo equilibrado de todos los epígrafes del título oficial</strong>,{" "}
                <strong>Conclusión</strong> y <strong>Bibliografía/Normativa</strong> para que
                puedas defenderlo por escrito con fluidez y rigor ante la Comisión Técnica de
                Valoración.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-violet-800 border border-violet-200">
                ~{totalWordsDesarrollo} palabras clave
              </span>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-xl bg-violet-700 px-4 py-2 text-xs font-bold text-white hover:bg-violet-800 cursor-pointer"
              >
                <Printer className="h-4 w-4" />
                Imprimir Tema de Desarrollo
              </button>
            </div>
          </div>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-8">
            <div className="border-b border-slate-200 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
                Guion de Desarrollo Escrito · Tema {topic.id}
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                {topic.officialTitle}
              </h2>
            </div>

            {/* 1. Introducción */}
            <div className="space-y-3">
              <h3 className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-1 text-sm font-extrabold text-indigo-800">
                1. INTRODUCCIÓN Y JUSTIFICACIÓN DEL TEMA
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line">
                {topic.temaDesarrollo.introduccion}
              </p>
            </div>

            {/* 2. Desarrollo de Epígrafes */}
            <div className="space-y-6">
              <h3 className="inline-flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-1 text-sm font-extrabold text-violet-800">
                2. DESARROLLO DE LOS EPÍGRAFES OFICIALES DE LA CONVOCATORIA
              </h3>
              {topic.temaDesarrollo.estructuraEpigrafes.map((ep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 space-y-3"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {ep.epigraph}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line">
                    {ep.body}
                  </p>
                </div>
              ))}
            </div>

            {/* 3. Conclusión */}
            <div className="space-y-3">
              <h3 className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-sm font-extrabold text-emerald-800">
                3. CONCLUSIÓN Y VALORACIÓN PERSONAL / APLICACIÓN EN PINOSO
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line">
                {topic.temaDesarrollo.conclusion}
              </p>
            </div>

            {/* 4. Bibliografía y Normativa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div className="rounded-2xl border border-slate-200 p-5 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                  4. Referencias Normativas y Bibliográficas para Citar
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {topic.temaDesarrollo.bibliografiaYNormativa.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 space-y-3">
                <h4 className="font-bold text-amber-900 text-sm uppercase tracking-wider">
                  Consejos Clave para el Tribunal (30/30 puntos)
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  {topic.temaDesarrollo.consejosTribunal.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* TAB 3: ESQUEMA VISUAL, DATOS DE ORO Y APUNTES */}
      {activeTab === "esquema" && (
        <div className="space-y-8">
          {/* Esquema Visual */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Mapa Conceptual de Estudio Rápido
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                {topic.esquemaVisual.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {topic.esquemaVisual.nodes.map((node, nIdx) => (
                <div
                  key={nIdx}
                  className="rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                      {nIdx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{node.label}</h3>
                  </div>
                  <ul className="space-y-2 pl-2 border-l-2 border-indigo-200 ml-3 text-xs sm:text-sm text-slate-700">
                    {node.children.map((child, cIdx) => (
                      <li key={cIdx} className="pl-2 leading-relaxed">
                        {child}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Datos de Oro para el 10 */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/70 to-orange-50/40 p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-2.5">
              <Lightbulb className="h-6 w-6 text-amber-600" />
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Datos de Oro para Sacar un 10 (Lo que siempre preguntan en examen)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fechas exactas, plazos legales, artículos clave, autores y trampas habituales de
                  tribunal en el Tema {topic.id}.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topic.datosOro.map((dato, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-white p-4 shadow-2xs"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-extrabold text-amber-800 mt-0.5">
                    {dIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {dato}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Notes */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4 no-print">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <StickyNote className="h-5 w-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900 text-lg">
                  Mis Apuntes y Reglas Mnemotécnicas (Tema {topic.id})
                </h3>
              </div>
              <span className="text-xs text-emerald-700 font-semibold">
                ✓ Guardado automático en este navegador
              </span>
            </div>
            <textarea
              rows={5}
              value={personalNote}
              onChange={(e) => setTopicNote(topic.id, e.target.value)}
              placeholder="Escribe aquí tus resúmenes personales, dudas, reglas mnemotécnicas o artículos que quieras repasar el día antes del examen..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* TAB 4: CUESTIONARIO DEL TEMA */}
      {activeTab === "test" && (
        <div className="space-y-4">
          <QuizEngine
            questions={quizQuestions}
            title={`Cuestionario Tema ${topic.id}: ${topic.title}`}
            mode="tema"
            instantFeedbackDefault={true}
            onRestart={() => setShuffleQuizKey((k) => k + 1)}
          />
        </div>
      )}
    </div>
  );
}

export default function TopicDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-12 text-center text-slate-500">
          Cargando tema...
        </div>
      }
    >
      <TopicDetailContent />
    </Suspense>
  );
}
