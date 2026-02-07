import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 content-container flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-16 gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium tracking-wide">
              Budućnost umrežavanja
            </span>
          </div>

          <Heading
            level="h1"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              TAPQO
            </span>
            <br />
            <span className="text-white/90">
              Digitalna NFC
            </span>
            <br />
            <span className="text-white/70">
              Vizit Kartica
            </span>
          </Heading>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Jedan dodir. Beskrajne mogućnosti. Podijelite svoje kontakt informacije, društvene mreže i portfolio jednim dodirom pametnog telefona.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-lg"
            >
              Naruči svoju karticu
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </LocalizedClientLink>
            <a
              href="#kako-radi"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-slate-300 font-semibold rounded-xl hover:bg-white/5 hover:border-slate-400 transition-all duration-300 text-lg"
            >
              Kako funkcioniše?
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center lg:justify-start mt-4">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-slate-400">Zadovoljnih korisnika</div>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">NFC</div>
              <div className="text-sm text-slate-400">Tehnologija</div>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">0 papira</div>
              <div className="text-sm text-slate-400">Eko prijateljski</div>
            </div>
          </div>
        </div>

        {/* Right side - NFC Card visual */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-3xl opacity-30 scale-110" />

            {/* NFC Card mockup */}
            <div className="relative w-[320px] sm:w-[380px] h-[200px] sm:h-[240px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
              {/* Card pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full" />

              {/* NFC icon */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    TAPQO
                  </div>
                  <div className="text-xs text-slate-500 mt-1 tracking-widest uppercase">
                    Smart Business Card
                  </div>
                </div>
                <svg className="w-10 h-10 text-emerald-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
                </svg>
              </div>

              {/* Card holder info */}
              <div>
                <div className="text-white text-lg sm:text-xl font-medium">Vaše Ime</div>
                <div className="text-slate-400 text-sm">Vaša Pozicija</div>
              </div>

              {/* Chip */}
              <div className="absolute bottom-6 right-8 w-12 h-9 rounded-md bg-gradient-to-br from-amber-300/40 to-amber-500/20 border border-amber-400/20" />
            </div>

            {/* Floating phone mockup */}
            <div className="absolute -bottom-8 -right-8 sm:-bottom-6 sm:-right-12 w-24 sm:w-28 h-48 sm:h-52 bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-xl flex items-center justify-center">
              <div className="w-16 sm:w-20 h-40 sm:h-44 bg-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 p-2">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 text-[8px] sm:text-[9px] text-center font-medium">Kontakt sačuvan!</span>
              </div>
            </div>

            {/* Tap animation ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default Hero
