"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  CheckSquare,
  ChevronRight,
  FileText,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Moon,
  Sparkles,
  Sun,
  TrendingUp,
  X
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { ALL_TOPICS } from "@/data";

export function Navbar() {
  const pathname = usePathname();
  const { state } = useProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("opo_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("opo_theme", "light");
    }
    setIsDark(nextDark);
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const masteredCount = Object.values(state.topicStatus).filter((s) => s === "dominado").length;
  const inStudyCount = Object.values(state.topicStatus).filter((s) => s === "en_estudio").length;
  const totalTopics = ALL_TOPICS.length || 25;
  const masteredPct = Math.round((masteredCount / totalTopics) * 100);
  const failedCount = state.failedQuestionIds.length;

  const navItems = [
    {
      href: "/",
      label: "Inicio",
      shortLabel: "Inicio",
      badge: null,
      icon: LayoutDashboard
    },
    {
      href: "/temario",
      label: "Temario",
      shortLabel: "Temario",
      badge: "25",
      icon: BookOpen
    },
    {
      href: "/examenes",
      label: "Tests",
      shortLabel: "1º Test",
      badge: "1º Ej.",
      icon: CheckSquare
    },
    {
      href: "/segundo-ejercicio",
      label: "Desarrollo",
      shortLabel: "2º Tema",
      badge: "2º Ej.",
      icon: FileText
    },
    {
      href: "/supuestos",
      label: "Supuestos",
      shortLabel: "3º Caso",
      badge: "3º Ej.",
      icon: Sparkles
    },
    {
      href: "/estadisticas",
      label: "Notas y Progreso",
      shortLabel: "Notas",
      badge: failedCount > 0 ? `${failedCount}` : null,
      badgeAlert: failedCount > 0,
      icon: TrendingUp
    }
  ];

  const isRouteActive = (href: string) =>
    href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85 no-print">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 xl:gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 tracking-tight text-sm sm:text-base">
                  OpoInfantil <span className="text-indigo-600">Pinoso</span>
                </span>
                <span className="hidden xl:inline-flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 border border-emerald-200">
                  10/10
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block lg:hidden xl:block">
                Técnico/a E. Infantil · Exp. 1584675N
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Pill Bar */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-2xl bg-slate-100/90 p-1 border border-slate-200/70"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = isRouteActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 xl:px-3 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-white text-indigo-700 shadow-xs ring-1 ring-slate-200/80"
                      : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 xl:h-4 xl:w-4 shrink-0 ${
                      isActive ? "text-indigo-600" : "text-slate-500"
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[10px] font-extrabold leading-none ${
                        item.badgeAlert
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "bg-slate-200/80 text-slate-600"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Status, Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Theme Toggle Button (Light / Dark) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-600" />
              )}
            </button>

            {/* Progress pill */}
            <Link
              href="/estadisticas"
              className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-100 px-2.5 py-1.5 transition-colors"
              title="Ver progreso detallado"
            >
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 whitespace-nowrap">
                  <span className="hidden xl:inline">Dominio:</span>
                  <span className="text-indigo-700">
                    {masteredCount}/{totalTopics}
                  </span>
                </div>
                <div className="w-12 xl:w-14 h-1.5 rounded-full bg-slate-200 overflow-hidden mt-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all"
                    style={{ width: `${masteredPct}%` }}
                  />
                </div>
              </div>
            </Link>

            {failedCount > 0 && (
              <Link
                href="/examenes?modo=repaso_fallos"
                className="hidden md:inline-flex items-center gap-1 rounded-xl bg-amber-50 border border-amber-200 px-2.5 py-1.5 text-xs font-bold text-amber-800 hover:bg-amber-100 transition-colors"
                title="Repasar preguntas falladas"
              >
                <Flame className="h-3.5 w-3.5 text-amber-600" />
                <span>{failedCount}</span>
              </Link>
            )}

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 lg:hidden cursor-pointer"
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <>
                  <X className="h-5 w-5 text-slate-800" />
                  <span>Cerrar</span>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5 text-indigo-600" />
                  <span>Menú</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pt-4 pb-6 shadow-xl lg:hidden max-h-[85vh] overflow-y-auto">
            {/* Progress Summary Banner inside Mobile Menu */}
            <div className="mb-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-violet-950 p-4 text-white">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-indigo-200 uppercase tracking-wider">
                  Tu Progreso General
                </span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 font-extrabold text-emerald-300">
                  {masteredPct}% ({masteredCount}/{totalTopics} temas)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-400 to-emerald-400"
                  style={{ width: `${masteredPct}%` }}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl bg-white/10 py-1.5 px-2">
                  <div className="font-extrabold text-sm">{masteredCount}</div>
                  <div className="text-[10px] text-indigo-200">Dominados</div>
                </div>
                <div className="rounded-xl bg-white/10 py-1.5 px-2">
                  <div className="font-extrabold text-sm">{inStudyCount}</div>
                  <div className="text-[10px] text-indigo-200">En estudio</div>
                </div>
                <div className="rounded-xl bg-white/10 py-1.5 px-2">
                  <div className="font-extrabold text-sm text-amber-300">{failedCount}</div>
                  <div className="text-[10px] text-indigo-200">Fallos test</div>
                </div>
              </div>
            </div>

            {/* Main Sections List */}
            <div className="space-y-1.5">
              <div className="px-2 pb-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Secciones de la Plataforma
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = isRouteActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700 border border-indigo-200/80"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span
                          className={`rounded-lg px-2 py-0.5 text-xs font-extrabold ${
                            item.badgeAlert
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Quick Direct Shortcuts */}
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
              <Link
                href="/examenes?modo=oficial_pinoso"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-bold text-white shadow-xs"
              >
                <Award className="h-4 w-4" />
                Simulacro 20+3
              </Link>
              <Link
                href="/temario?bloque=especifico"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-violet-50 border border-violet-200 px-3 py-2.5 text-xs font-bold text-violet-800"
              >
                <BookOpen className="h-4 w-4" />
                Específico (10-25)
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar (App-style thumb bar on phones/small tablets) */}
      <nav
        aria-label="Navegación inferior móvil"
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden no-print shadow-[0_-2px_10px_rgba(15,23,42,0.06)]"
      >
        <div className="mx-auto grid max-w-md grid-cols-6 px-1 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = isRouteActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-0.5 rounded-xl py-1 px-1 text-[10px] font-bold transition-colors ${
                  isActive ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <div
                  className={`relative flex h-7 w-10 items-center justify-center rounded-full transition-colors ${
                    isActive ? "bg-indigo-50 text-indigo-600" : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.badgeAlert && (
                    <span className="absolute -top-0.5 right-1 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-white" />
                  )}
                </div>
                <span className="truncate max-w-full">{item.shortLabel}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
