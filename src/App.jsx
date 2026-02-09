import { useState } from 'react'

const services = [
  {
    title: "AI Workshop / Audit",
    description: "Feltérképezzük a céged folyamatait és megmutatjuk, hol spórolhatsz 10-40 órát hetente AI-val.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    tag: "Ingyenes",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Workflow Automatizálás",
    description: "Egyedi AI rendszereket építünk a cégednek: CRM, marketing, ügyfélszolgálat, belső folyamatok — 60-90 nap alatt.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    tag: "Fő szolgáltatás",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "AI Munkaerő Kikölcsönzés",
    description: "Havi előfizetésre AI ügynököket biztosítunk, akik 0-24 dolgoznak — szabadság, betegség és fluktuáció nélkül.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    tag: "Recurring",
    tagColor: "bg-purple-100 text-purple-700",
  },
]

const steps = [
  { num: "01", title: "Audit", description: "Feltérképezzük a céged folyamatait és azonosítjuk az automatizálási lehetőségeket." },
  { num: "02", title: "Terv", description: "Egyedi stratégiát készítünk: mit, hogyan és milyen sorrendben érdemes automatizálni." },
  { num: "03", title: "Építés", description: "Megtervezzük és felépítjük az AI rendszereidet, teszteljük és finomhangoljuk." },
  { num: "04", title: "Üzemeltetés", description: "Monitorozzuk, karbantartjuk és folyamatosan fejlesztjük a rendszereidet." },
]

const testimonials = [
  {
    quote: "3 hónap alatt a manuális adminisztrációnk 70%-át kiváltottuk AI-val. A csapat végre az értékteremtő munkára tud fókuszálni.",
    name: "Kovács Péter",
    role: "CEO, TechFlow Kft.",
  },
  {
    quote: "Az AI audit azonnal megmutatta, hol égettünk el heti 25 órát feleslegesen. A ROI az első hónapban megvolt.",
    name: "Nagy Andrea",
    role: "Operations Manager, GreenBox",
  },
  {
    quote: "Az AI munkaerő koncepció volt a game changer. Nem kellett fejlesztőt alkalmazni — egyszerűen bérelünk AI ügynököket havi díjért.",
    name: "Szabó Tamás",
    role: "Alapító, DataBridge",
  },
]

const faqData = [
  {
    q: "Mennyi idő alatt látok eredményt?",
    a: "Az audit után azonnal kapod a javaslatokat. A workflow építés jellemzően 60-90 nap, de az első automatizációk már 2-3 héten belül működnek.",
  },
  {
    q: "Milyen méretű cégeknek való ez?",
    a: "5-200 fős cégeknek, akik már érzik, hogy a manuális munkájuk nem skálázható. Ha van 3+ ember, aki repetitív feladatokat végez, tudunk segíteni.",
  },
  {
    q: "Mi történik, ha valami elromlik?",
    a: "Az AI Munkaerő csomagban benne van a folyamatos monitoring és karbantartás. Ha valami nem működik, mi javítjuk — nem kell saját fejlesztő.",
  },
  {
    q: "Milyen eszközökkel dolgoztok?",
    a: "Make, n8n, OpenAI, Anthropic Claude, Google AI, egyedi API integrációk. Mindig az adott feladathoz legjobban illő eszközt választjuk.",
  },
  {
    q: "Mennyibe kerül?",
    a: "Az audit ingyenes. A workflow építés projekt alapú (500K Ft-tól). Az AI Munkaerő havi előfizetés 150K Ft/hó-tól. Pontos árat az audit után tudunk mondani.",
  },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-base font-medium text-slate-900 pr-4">{item.q}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
            4yes<span className="text-blue-600">.hu</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#szolgaltatasok" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Szolgáltatások</a>
            <a href="#folyamat" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Folyamat</a>
            <a href="#velemenyek" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Vélemények</a>
            <a href="#gyik" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">GYIK</a>
          </div>
          <a
            href="#kapcsolat"
            className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Ingyenes Audit
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            AI Automatizáció magyar cégeknek
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900 mb-6">
            A céged következő munkatársa{' '}
            <span className="text-blue-600">nem ember lesz.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Felépítjük az AI munkaerődet, ami 0-24 dolgozik — szabadság, betegség és fluktuáció nélkül.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kapcsolat"
              className="bg-slate-900 text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
            >
              Foglalj ingyenes auditot
            </a>
            <a
              href="#szolgaltatasok"
              className="bg-slate-100 text-slate-700 text-base font-semibold px-8 py-4 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Megnézem a szolgáltatásokat
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 mt-14 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Ingyenes konzultáció
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              60-90 napos átfutás
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Magyar támogatás
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ismerős?</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">A csapatod manuálisan csinálja, amit AI 10x gyorsabban megoldana.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { problem: "Ugyanazokat az emaileket írod meg naponta 20-szor", icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" },
              { problem: "Az adatbevitel és riportok órákat emésztenek fel hetente", icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M11.25 12h.008v.008h-.008V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12 13.5v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 13.5c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 3.375 18.75v-1.5c0-.621.504-1.125 1.125-1.125m-1.125 2.625v1.5c0 .621.504 1.125 1.125 1.125" },
              { problem: "Tudod, hogy kellene AI, de nem tudod, hol kezdd", icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-700">{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="szolgaltatasok" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Három szolgáltatás, egy cél</h2>
            <p className="text-slate-500 max-w-lg mx-auto">A céged AI érettségétől függ, melyikkel érdemes kezdeni.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="relative border border-slate-200 rounded-2xl p-7 hover:border-slate-300 hover:shadow-lg transition-all group">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-5 ${s.tagColor}`}>{s.tag}</span>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="folyamat" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Hogyan működik?</h2>
            <p className="text-slate-500">Négy lépés a manuális munkától az automatizált rendszerig.</p>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section className="py-16 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Automatizált workflow" },
              { num: "10x", label: "Átlagos hatékonyságnövekedés" },
              { num: "2000+", label: "Megtakarított munkaóra / hó" },
              { num: "98%", label: "Ügyfél elégedettség" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-slate-900">{stat.num}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="velemenyek" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Amit ügyfeleink mondanak</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Átlátható árazás</h2>
            <p className="text-slate-500">Válaszd ki a cégedhez legjobban passzoló csomagot.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free tier */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Belépő</p>
              <h3 className="text-xl font-bold text-slate-900 mb-1">AI Workshop / Audit</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-slate-900">Ingyenes</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">Feltérképezzük, hol tud AI-t használni a céged.</p>
              <a href="#kapcsolat" className="block text-center bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-200 transition-colors text-sm">
                Foglalj időpontot
              </a>
              <ul className="mt-6 space-y-3">
                {["30 perces online konzultáció", "Folyamat-feltérképezés", "Személyre szabott javaslat", "Nincs elköteleződés"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main tier */}
            <div className="bg-slate-900 rounded-2xl p-7 border-2 border-slate-900 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                Legnépszerűbb
              </div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Fő szolgáltatás</p>
              <h3 className="text-xl font-bold text-white mb-1">Workflow Automatizálás</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">500K Ft</span>
                <span className="text-sm text-slate-400">-tól / projekt</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">Egyedi AI rendszerek tervezése, fejlesztése, bevezetése.</p>
              <a href="#kapcsolat" className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-500 transition-colors text-sm">
                Kérj ajánlatot
              </a>
              <ul className="mt-6 space-y-3">
                {["60-90 napos átfutás", "Egyedi AI workflow-k", "Csapat betanítás", "30 nap utókövetés"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recurring tier */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">Recurring</p>
              <h3 className="text-xl font-bold text-slate-900 mb-1">AI Munkaerő</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-slate-900">150K Ft</span>
                <span className="text-sm text-slate-400">/ hó-tól</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">AI ügynökök, akik 0-24 dolgoznak neked.</p>
              <a href="#kapcsolat" className="block text-center bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-200 transition-colors text-sm">
                Kérj ajánlatot
              </a>
              <ul className="mt-6 space-y-3">
                {["0-24 rendelkezésre állás", "Folyamatos monitoring", "Havi riportok", "Skálázható kapacitás"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="gyik" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Gyakran ismételt kérdések</h2>
          <div className="border-t border-slate-200">
            {faqData.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="kapcsolat" className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A jövő azé, aki ma automatizál.
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Foglalj egy ingyenes 30 perces konzultációt, és megmutatjuk, hogyan spórolhatsz heti 10-40 órát AI-val.
          </p>
          <a
            href="mailto:hello@4yes.hu"
            className="inline-block bg-white text-slate-900 text-base font-semibold px-10 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
          >
            Foglalj ingyenes auditot
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; 2025 4yes.hu — Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Adatkezelés</a>
            <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">ÁSZF</a>
            <a href="mailto:hello@4yes.hu" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">hello@4yes.hu</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
