import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "OpoInfantil Pinoso · Preparación Integral Técnico de Educación Infantil",
  description:
    "Plataforma de estudio de alto rendimiento para la oposición de Técnico de Educación Infantil del Ayuntamiento de Pinoso (Expediente 1584675N). 25 temas completos, simuladores de los 3 ejercicios oficiales y seguimiento de notas."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('opo_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased pb-16 lg:pb-0">
        <ProgressProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white py-6 mt-12 sm:mt-16 no-print">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                <strong>OpoInfantil Pinoso</strong> · Plataforma integral para el Concurso-Oposición
                de Técnico/a de Educación Infantil (Exp. 1584675N · SEFYCU 6153795)
              </p>
              <p>
                Temario General (Temas 1-9) · Temario Específico (Temas 10-25) · Decreto 100/2022 CV
              </p>
            </div>
          </footer>
        </ProgressProvider>
      </body>
    </html>
  );
}
