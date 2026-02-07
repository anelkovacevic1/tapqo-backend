import { Heading } from "@medusajs/ui"

const steps = [
  {
    number: "01",
    title: "Naruči karticu",
    description:
      "Odaberi dizajn koji ti se sviđa i naruči svoju personaliziranu TAPQO NFC vizit karticu.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Podesi profil",
    description:
      "Dodaj svoje kontakt informacije, linkove na društvene mreže, web stranicu i portfolio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Tapni i dijeli",
    description:
      "Prisloni karticu uz bilo koji pametni telefon i tvoji podaci se automatski dijele.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18h.008v.008H12V18z" />
      </svg>
    ),
  },
]

const features = [
  {
    title: "Bez aplikacije",
    description: "Funkcioniše sa svim modernim pametnim telefonima bez potrebe za instalacijom aplikacije.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Eko prijateljski",
    description: "Zamijeni stotine papirnatih vizit karti sa jednom pametnom TAPQO karticom.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m-3.414 1.078A9 9 0 003.888 15.903" />
      </svg>
    ),
  },
  {
    title: "Uvijek ažurno",
    description: "Ažuriraj svoje informacije bilo kada, bez potrebe za ponovnim štampanjem.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
      </svg>
    ),
  },
  {
    title: "Premium dizajn",
    description: "Elegantne kartice od vrhunskih materijala koje ostavljaju profesionalan dojam.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
]

const HowItWorks = () => {
  return (
    <section id="kako-radi" className="py-20 sm:py-28 bg-white">
      <div className="content-container">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">
            Kako funkcioniše
          </span>
          <Heading
            level="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4"
          >
            Tri jednostavna koraka
          </Heading>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
            Od narudžbe do prvog dijeljenja kontakta za samo par minuta
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-20 sm:mb-28">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-emerald-200 to-emerald-100" />
              )}

              <div className="relative z-10">
                {/* Icon circle */}
                <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-100 transition-all duration-300 group-hover:scale-105">
                  {step.icon}
                </div>

                {/* Step number */}
                <span className="inline-block mt-6 text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">
                  KORAK {step.number}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mt-4">
                  {step.title}
                </h3>
                <p className="text-slate-500 mt-3 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl font-bold text-slate-900"
            >
              Zašto odabrati TAPQO?
            </Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
