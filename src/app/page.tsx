export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main
      id="main-content"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-grid-pattern px-6 py-8 sm:px-12 lg:px-24"
    >
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-600/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-10 -z-10 h-[400px] w-[500px] rounded-full bg-blue-700/15 blur-[130px]"
      />

      {/* Institutional Top Navbar / Brand */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between border-b border-slate-800/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white shadow-lg shadow-cyan-500/20">
            <span className="text-sm tracking-wider">195</span>
          </div>
          <div>
            <span className="block text-sm font-semibold tracking-wide text-slate-100 uppercase">
              ISFT N° 195
            </span>
            <span className="block text-xs font-medium text-slate-400">
              Educación Superior Técnica Pública
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3.5 py-1.5 text-xs text-slate-300 backdrop-blur-md">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Fase de construcción</span>
        </div>
      </header>

      {/* Hero Content Area */}
      <section
        aria-labelledby="hero-heading"
        className="mx-auto my-auto flex w-full max-w-4xl flex-col items-center py-16 text-center"
      >
        {/* Status Badge */}
        <div
          id="status-badge"
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 text-xs font-medium text-cyan-300 shadow-sm backdrop-blur-md transition-colors hover:border-cyan-500/50"
        >
          <span className="text-base leading-none">🚧</span>
          <span>Sitio en construcción</span>
          <span className="text-cyan-600">•</span>
          <span className="text-slate-400">Próximamente nuevo portal oficial</span>
        </div>

        {/* Main Institutional Heading */}
        <h1
          id="hero-heading"
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          ISFT N° 195
          <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Sitio en construcción
          </span>
        </h1>

        {/* Institutional Description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Estamos desarrollando el nuevo portal digital oficial del{" "}
          <strong className="font-semibold text-slate-100">
            Instituto Superior de Formación Técnica N° 195
          </strong>
          . Una plataforma renovada orientada a brindar información académica,
          servicios estudiantiles y comunicación institucional para toda nuestra comunidad.
        </p>

        {/* Institutional Context Card */}
        <div
          id="institution-info-card"
          className="glass-panel mt-12 w-full max-w-2xl rounded-2xl p-6 text-left shadow-2xl transition-all"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/90 text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-200">
                Información Institucional
              </h2>
              <p className="text-xs text-slate-400">
                Lima, partido de Zárate • DGCyE — Provincia de Buenos Aires
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs text-slate-300">
            <div className="rounded-lg bg-slate-900/60 p-3.5 border border-slate-800/60">
              <span className="block font-medium text-slate-400">Nivel Educativo</span>
              <span className="mt-1 block font-semibold text-slate-200">
                Educación Superior Técnica
              </span>
            </div>
            <div className="rounded-lg bg-slate-900/60 p-3.5 border border-slate-800/60">
              <span className="block font-medium text-slate-400">Estado del Proyecto</span>
              <span className="mt-1 block font-semibold text-cyan-400">
                Despliegue inicial en Vercel
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer
        id="page-footer"
        className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row"
      >
        <p>© {currentYear} ISFT N° 195. Todos los derechos reservados.</p>
        <p className="text-slate-400">
          Lima, Zárate • República Argentina • Educación Pública de Calidad
        </p>
      </footer>
    </main>
  );
}
