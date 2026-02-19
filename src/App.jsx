import { useState } from "react";
import {
  ArrowRight, ChevronDown, Clock, TrendingUp, Users, Zap,
  CheckCircle, MessageSquare, BarChart3, Bot, Cpu, Workflow, Shield,
  Phone, Mail, MapPin, FileText, Target, Lightbulb, Settings,
  RefreshCw, Headphones, Database, PieChart, Layers, GitBranch,
  UserCheck, Calendar, Play, AlertCircle, ArrowLeft
} from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-5 text-left">
        <span className="text-base font-medium text-slate-900 pr-4">{question}</span>
        <ChevronDown size={20} className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 pr-12 text-sm text-slate-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

/* ===================== SERVICE PAGE 1: AI Felmérés és Workshop ===================== */
const ServicePage1 = ({ onBack }) => {
  const phases = [
    { step: "01", title: "Előzetes egyeztetés", duration: "30 perc", icon: MessageSquare, desc: "Online megbeszélés, ahol megértjük a céged működését, kihívásait és céljait. Felmérjük, hol érdemes elkezdeni az AI bevezetést.", deliverable: "Személyre szabott felmérési terv" },
    { step: "02", title: "Folyamat-audit", duration: "2-3 nap", icon: Target, desc: "Részletesen feltérképezzük a munkafolyamataidat: ismétlődő feladatok, szűk keresztmetszetek, manuális adatmozgatás. Interjúk a kulcsemberekkel.", deliverable: "Folyamattérkép + automatizálási lehetőségek" },
    { step: "03", title: "ROI elemzés & Prioritizálás", duration: "2-3 nap", icon: PieChart, desc: "Minden lehetőségnél kiszámoljuk a megtakarítást (idő, pénz, hibaarány). Prioritási mátrixba rendezzük: melyik hozza a legtöbbet.", deliverable: "ROI kalkuláció + prioritási mátrix" },
    { step: "04", title: "AI Roadmap prezentáció", duration: "1-2 óra", icon: Lightbulb, desc: "Prezentáljuk az eredményeket a döntéshozóknak. Konkrét tervet adunk: mit, milyen sorrendben, mennyi idő, költség, megtérülés.", deliverable: "Komplett AI bevezetési roadmap" },
  ];
  const deliverables = [
    { icon: FileText, title: "Folyamattérkép", desc: "Vizuális térkép az összes kulcsfolyamatról, jelölve az automatizálási pontokat" },
    { icon: PieChart, title: "ROI kalkuláció", desc: "Minden lehetőségre: mennyi időt és pénzt spórolsz, mekkora a beruházás" },
    { icon: Target, title: "Prioritási mátrix", desc: "Impact vs. Effort — pontosan tudod, mit érdemes először" },
    { icon: Layers, title: "AI Roadmap", desc: "3-6-12 hónapos bevezetési terv mérföldkövekkel" },
    { icon: Settings, title: "Technológiai javaslat", desc: "Milyen AI eszközök illenek a cégedhez — objektív összehasonlítással" },
    { icon: Users, title: "Csapat workshop anyag", desc: "Prezentáció, amit a csapatoddal is megoszthatsz" },
  ];
  const useCases = [
    { title: "E-commerce cég", problem: "Ügyfélszolgálat túlterhelt, 6+ órás válaszidő", found: "12 automatizálható folyamat, 3 azonnali quick win", result: "Első automatizáció 3 hét alatt megtérült" },
    { title: "Pénzügyi szolgáltató", problem: "Manuális riportkészítés heti 20 órát vesz igénybe", found: "Riport automatizáció + adatintegráció", result: "Heti 20 óra → 30 perc felügyelet" },
    { title: "Logisztikai vállalat", problem: "Nem tudják, hol kezdjék az AI bevezetést", found: "Fuvarszervezés, számlázás, ügyfélkommunikáció", result: "6 hónap alatt 40% hatékonyságnövelés" },
  ];
  const faqs = [
    { question: "Mennyibe kerül a felmérés?", answer: "Az első 30 perces konzultáció ingyenes. A teljes folyamat-audit és roadmap 250.000 – 500.000 Ft között a cég méretétől függően. Workflow fejlesztés rendelése esetén a felmérés díját jóváírjuk." },
    { question: "Mennyi időt vesz igénybe?", answer: "Az előzetes egyeztetéstől a kész roadmap prezentációig jellemzően 1-2 hét. Nagyobb szervezeteknél (50+ fő) 2-3 hét." },
    { question: "Kinek kell részt vennie a cégtől?", answer: "1 döntéshozó + 2-3 kulcsember a vizsgált területekről. Összesen kb. 3-5 óra az ő idejükből az egész folyamat alatt." },
    { question: "Mi van, ha kiderül, hogy nem éri meg az AI?", answer: "Előfordul — ilyenkor őszintén megmondjuk. A felmérés értéke pont az, hogy adatok alapján dönthetsz, nem megérzés alapján." },
    { question: "Használhatok más céget a fejlesztésre?", answer: "Természetesen. A roadmap és audit anyag a tiéd, bárki végre tudja hajtani. Persze örülünk, ha velünk folytatod." },
  ];

  return (
    <div>
      <section className="pt-8 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8">
            <ArrowLeft size={16} /> Vissza a főoldalra
          </button>
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-6">
            <BarChart3 size={14} className="text-slate-600" />
            <span className="text-xs font-medium text-slate-600">01 — Első lépés az AI felé</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">AI Felmérés<br />és Workshop</h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">
            Mielőtt AI-t vezetnél be, tudd meg pontosan, <strong className="text-slate-700">hol hozza a legtöbbet</strong>. Feltérképezzük a folyamataidat, kiszámoljuk a megtérülést, és adunk egy konkrét tervet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">Kérd az ingyenes konzultációt <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Kiknek való?</p><div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{ title: "Cégvezetők", desc: "Akik tudják, hogy kell az AI, de nem tudják, hol kezdjék" },{ title: "Operációs vezetők", desc: "Akik nap mint nap látják a manuális, lassú folyamatokat" },{ title: "Növekvő cégek", desc: "Ahol a csapat nem bír lépést tartani a feladatokkal" }].map((item, i) => (<div key={i} className="bg-white rounded-xl p-5 border border-slate-100"><p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p><p className="text-sm text-slate-500">{item.desc}</p></div>))}</div></div></section>
      <section className="py-16 px-6"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">A felmérés menete</p><h2 className="text-2xl font-bold text-slate-900 mb-8">4 fázis, 1-2 hét, teljes kép</h2><div className="space-y-4">{phases.map((p, i) => (<div key={i} className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"><div className="flex flex-col md:flex-row md:items-start gap-4"><div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0"><p.icon size={20} className="text-white" /></div><div className="flex-1"><div className="flex flex-wrap items-center gap-3 mb-2"><span className="text-xs font-mono font-bold text-slate-300">{p.step}</span><p className="text-base font-semibold text-slate-900">{p.title}</p><span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full flex items-center gap-1"><Clock size={10} /> {p.duration}</span></div><p className="text-sm text-slate-600 leading-relaxed mb-2">{p.desc}</p><div className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /><p className="text-xs font-medium text-green-700">Amit kapsz: {p.deliverable}</p></div></div></div></div>))}</div></div></section>
      <section className="py-16 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Konkrétan mit kapsz?</p><h2 className="text-2xl font-bold text-slate-900 mb-8">6 deliverable, ami a tiéd marad</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{deliverables.map((d, i) => (<div key={i} className="bg-white rounded-xl p-5 border border-slate-100"><d.icon size={20} className="text-slate-400 mb-3" /><p className="text-sm font-semibold text-slate-900 mb-1">{d.title}</p><p className="text-xs text-slate-500 leading-relaxed">{d.desc}</p></div>))}</div></div></section>
      <section className="py-16 px-6"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Példák</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Ilyen eredményeket hozott a felmérés</h2><div className="space-y-4">{useCases.map((uc, i) => (<div key={i} className="border border-slate-200 rounded-xl p-6"><p className="text-sm font-semibold text-slate-900 mb-3">{uc.title}</p><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div><p className="text-xs font-medium text-red-500 uppercase mb-1">Probléma</p><p className="text-sm text-slate-600">{uc.problem}</p></div><div><p className="text-xs font-medium text-blue-500 uppercase mb-1">Amit feltártunk</p><p className="text-sm text-slate-600">{uc.found}</p></div><div><p className="text-xs font-medium text-green-600 uppercase mb-1">Eredmény</p><p className="text-sm text-slate-700 font-medium">{uc.result}</p></div></div></div>))}</div></div></section>
      <section className="py-16 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Befektetés</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Átlátható árazás</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{ name: "Ingyenes konzultáció", price: "0 Ft", desc: "30 perces online megbeszélés. Megértjük a helyzeted és eldöntjük, érdemes-e felmérést csinálni.", features: ["30 perces videóhívás", "Céged gyors áttekintése", "Javasolt következő lépések"], hl: false },{ name: "AI Quick Scan", price: "250.000 Ft-tól", desc: "Fókuszált felmérés 1-2 kiemelt területre. Ideális, ha tudod, hol a probléma.", features: ["1-2 folyamat auditja", "ROI kalkuláció", "Akcióterv", "1 hét átfutás"], hl: false },{ name: "Teljes AI Audit", price: "500.000 Ft-tól", desc: "Komplett szervezeti felmérés — teljes AI roadmap 12 hónapra.", features: ["Teljes szervezeti audit", "Mind a 6 deliverable", "Csapat workshop", "12 hónapos roadmap", "Workflow rendelésnél jóváírjuk"], hl: true }].map((p, i) => (<div key={i} className={`rounded-xl p-6 ${p.hl ? "bg-slate-900 text-white ring-2 ring-slate-900" : "bg-white border border-slate-200"}`}><p className={`text-sm font-medium mb-1 ${p.hl ? "text-slate-400" : "text-slate-500"}`}>{p.name}</p><p className={`text-2xl font-bold mb-3 ${p.hl ? "text-white" : "text-slate-900"}`}>{p.price}</p><p className={`text-sm mb-5 leading-relaxed ${p.hl ? "text-slate-400" : "text-slate-500"}`}>{p.desc}</p><div className="space-y-2">{p.features.map((f, j) => (<div key={j} className="flex items-start gap-2"><CheckCircle size={14} className={`flex-shrink-0 mt-0.5 ${p.hl ? "text-blue-400" : "text-green-500"}`} /><p className={`text-xs ${p.hl ? "text-slate-300" : "text-slate-600"}`}>{f}</p></div>))}</div></div>))}</div></div></section>
      <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><h2 className="text-2xl font-bold text-slate-900 mb-6">Gyakran ismételt kérdések</h2>{faqs.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}</div></section>
    </div>
  );
};

/* ===================== SERVICE PAGE 2: AI Workflow fejlesztés ===================== */
const ServicePage2 = ({ onBack }) => {
  const workflows = [
    { icon: Headphones, title: "Ügyfélszolgálat", desc: "AI chatbot + ticket routing + automatikus válaszok. Megkeresések 60-80%-a emberi beavatkozás nélkül.", metrics: "Válaszidő: 4 óra → 30 mp" },
    { icon: Mail, title: "Email & kommunikáció", desc: "Emailek kategorizálása, válasz-draftek, follow-up emlékeztetők, lead minősítés.", metrics: "Heti 15 óra megtakarítás" },
    { icon: FileText, title: "Dokumentumfeldolgozás", desc: "Számlák, szerződések automatikus beolvasása, adatkinyerés, rendszerbe töltés.", metrics: "99.2% pontosság, 50x gyorsabb" },
    { icon: Database, title: "Adatintegráció & riporting", desc: "Különböző rendszerekből automatikus adatgyűjtés, összefűzés, riport generálás.", metrics: "Heti riport: 3 óra → 5 perc" },
    { icon: TrendingUp, title: "Értékesítés támogatás", desc: "Lead scoring, CRM frissítés, ajánlatkészítés, follow-up szekvenciák.", metrics: "30% több konverzió" },
    { icon: GitBranch, title: "Belső folyamatok", desc: "Jóváhagyási workflow-k, onboarding, HR folyamatok, IT ticketing.", metrics: "Átfutás 70%-kal csökken" },
  ];
  const phases = [
    { step: "01", title: "Tervezés", duration: "1-2 hét", desc: "Megtervezzük a workflow-t: lépések, rendszerek, AI modell, döntési logika.", icon: Target },
    { step: "02", title: "Fejlesztés", duration: "2-4 hét", desc: "Felépítjük, integráljuk a meglévő rendszereiddel, betanítjuk az AI-t.", icon: Settings },
    { step: "03", title: "Tesztelés", duration: "1-2 hét", desc: "Éles adatokkal teszteljük. Mérjük a pontosságot, finomhangolunk.", icon: RefreshCw },
    { step: "04", title: "Bevezetés", duration: "1 hét", desc: "Élesítjük, betanítjuk a csapatodat, dokumentációt adunk.", icon: UserCheck },
    { step: "05", title: "Monitorozás", duration: "Folyamatos", desc: "Első 30 nap szoros követés, utána havi felülvizsgálat.", icon: BarChart3 },
  ];
  const faqs = [
    { question: "Milyen rendszerekkel integrálódik?", answer: "CRM-ek (HubSpot, Salesforce, Pipedrive), ERP, Google Workspace, Microsoft 365, Slack, Shopify, WooCommerce, Shoprenter, Billingo, Számlázz.hu — és bármilyen API-val rendelkező szoftver." },
    { question: "Mi történik, ha az AI hibázik?", answer: "Kritikus workflow-kba beépítünk emberi felügyeleti pontokat (human-in-the-loop). Az AI javasol, de ember hagy jóvá — amíg el nem éri a 95%+ megbízhatóságot." },
    { question: "Mennyi ideig tart egy fejlesztés?", answer: "Egyszerű workflow: 2-3 hét. Közepes (pl. chatbot + CRM): 4-6 hét. Komplex rendszer: 8-12 hét." },
    { question: "Mi van, ha változik a folyamatom?", answer: "Úgy tervezzük, hogy könnyen módosítható. Kisebb változtatásokat a csapatod is el tud végezni a betanítás után." },
    { question: "Mennyibe kerül?", answer: "Egyszerű workflow-k 300.000 Ft-tól, közepes 500.000 – 1.500.000 Ft, komplex egyedi árazással. Minden projekt előtt ROI kalkulációt adunk." },
  ];

  return (
    <div>
      <section className="pt-8 pb-16 px-6"><div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8"><ArrowLeft size={16} /> Vissza a főoldalra</button>
        <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-6"><Workflow size={14} className="text-slate-600" /><span className="text-xs font-medium text-slate-600">02 — A fő termékünk</span></div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">AI Workflow<br />fejlesztés</h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">Nem dobozos szoftvert kapsz, hanem <strong className="text-slate-700">a te folyamataidra épített automatizációt</strong>. Megépítjük, integráljuk, betanítjuk — te csak az eredményt látod.</p>
        <button className="bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">Beszéljük át a projektet <ArrowRight size={16} /></button>
      </div></section>
      <section className="py-10 px-6 bg-slate-900 text-white"><div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">{[{ value: "60-90 nap", label: "alatt kész rendszer" },{ value: "95%+", label: "AI feldolgozási pontosság" },{ value: "3-6 hónap", label: "alatt megtérülő befektetés" }].map((s, i) => (<div key={i}><p className="text-2xl font-bold">{s.value}</p><p className="text-sm text-slate-400 mt-1">{s.label}</p></div>))}</div></section>
      <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Milyen workflow-kat építünk?</p><h2 className="text-2xl font-bold text-slate-900 mb-8">6 leggyakoribb automatizációs terület</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{workflows.map((w, i) => (<div key={i} className="border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"><div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-3"><w.icon size={20} className="text-slate-600" /></div><p className="text-sm font-semibold text-slate-900 mb-1">{w.title}</p><p className="text-xs text-slate-500 leading-relaxed mb-3">{w.desc}</p><div className="bg-slate-50 rounded-lg px-3 py-1.5"><p className="text-xs font-medium text-slate-700">{w.metrics}</p></div></div>))}</div></div></section>
      <section className="py-16 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">A fejlesztés menete</p><h2 className="text-2xl font-bold text-slate-900 mb-8">5 fázis az ötlettől a működő rendszerig</h2><div className="space-y-3">{phases.map((p, i) => (<div key={i} className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4"><div className="flex items-center gap-4 md:w-56 flex-shrink-0"><div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0"><p.icon size={18} className="text-white" /></div><div><p className="text-sm font-semibold text-slate-900">{p.title}</p><span className="text-xs text-slate-400">{p.duration}</span></div></div><p className="text-sm text-slate-600 leading-relaxed flex-1">{p.desc}</p></div>))}</div></div></section>
      <section className="py-16 px-6"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technológiai háttér</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Amivel dolgozunk</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{[{ name: "Make / n8n / Zapier", role: "Workflow orchestráció" },{ name: "OpenAI / Claude / Gemini", role: "AI motorok" },{ name: "LangChain / LangGraph", role: "Komplex AI ágensek" },{ name: "Pinecone / Weaviate", role: "Vektoros tudásbázis" },{ name: "Slack / Teams / Email", role: "Kommunikáció" },{ name: "HubSpot / Pipedrive / SF", role: "CRM integráció" }].map((t, i) => (<div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100"><p className="text-sm font-semibold text-slate-900">{t.name}</p><p className="text-xs text-slate-500">{t.role}</p></div>))}</div></div></section>
      <section className="py-16 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Befektetés</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Workflow fejlesztés árazás</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{ name: "Egyszerű Workflow", price: "300.000 Ft-tól", time: "2-3 hét", desc: "Egy folyamat, 1-2 integráció.", examples: ["Email kategorizálás", "Automatikus draft", "Egyszerű chatbot", "Adat szinkron"], hl: false },{ name: "Komplex Workflow", price: "800.000 Ft-tól", time: "4-8 hét", desc: "Több folyamat, AI döntéshozatal, több integráció.", examples: ["Ügyfélszolgálati rendszer", "Értékesítési pipeline", "Dokumentumfeldolgozás", "Multi-channel komm."], hl: true },{ name: "Enterprise Rendszer", price: "Egyedi árazás", time: "8-12 hét", desc: "Teljes szervezeti automatizáció.", examples: ["Teljes CRM automatizáció", "ERP integráció", "Egyedi AI ágensek", "Custom dashboard"], hl: false }].map((p, i) => (<div key={i} className={`rounded-xl p-6 ${p.hl ? "bg-slate-900 text-white ring-2 ring-slate-900" : "bg-white border border-slate-200"}`}><p className={`text-sm font-medium mb-1 ${p.hl ? "text-slate-400" : "text-slate-500"}`}>{p.name}</p><p className={`text-2xl font-bold mb-1 ${p.hl ? "text-white" : "text-slate-900"}`}>{p.price}</p><p className={`text-xs mb-3 ${p.hl ? "text-slate-500" : "text-slate-400"}`}>{p.time}</p><p className={`text-sm mb-4 leading-relaxed ${p.hl ? "text-slate-400" : "text-slate-500"}`}>{p.desc}</p><div className="space-y-1.5">{p.examples.map((e, j) => (<div key={j} className="flex items-center gap-2"><CheckCircle size={12} className={p.hl ? "text-blue-400" : "text-green-500"} /><p className={`text-xs ${p.hl ? "text-slate-300" : "text-slate-600"}`}>{e}</p></div>))}</div></div>))}</div><div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3"><AlertCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /><p className="text-sm text-blue-800">AI felmérés díját jóváírjuk a workflow fejlesztés árából.</p></div></div></section>
      <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><h2 className="text-2xl font-bold text-slate-900 mb-6">Gyakran ismételt kérdések</h2>{faqs.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}</div></section>
    </div>
  );
};

/* ===================== SERVICE PAGE 3: AI Munkaerő kölcsönzés ===================== */
const ServicePage3 = ({ onBack }) => {
  const agents = [
    { icon: Headphones, title: "AI Ügyfélszolgálatos", desc: "Chat, email, telefon kezelés. Kérdések, panaszok, ticket routing.", tag: "0-24", cap: "Korlátlan párhuzamos" },
    { icon: TrendingUp, title: "AI Értékesítési Asszisztens", desc: "Lead minősítés, ajánlatkészítés, follow-up, CRM frissítés.", tag: "0-24", cap: "500+ lead/hó" },
    { icon: FileText, title: "AI Adminisztrátor", desc: "Dokumentumfeldolgozás, adatbevitel, számlakezelés, riporting.", tag: "0-24", cap: "1000+ dok/hó" },
    { icon: Mail, title: "AI Marketing Asszisztens", desc: "Tartalom, social media, newsletter, A/B teszt, kampány riport.", tag: "0-24", cap: "Napi tartalom" },
    { icon: Database, title: "AI Adatelemző", desc: "Auto riportok, trendfelismerés, anomália detektálás, dashboardok.", tag: "0-24", cap: "Real-time" },
    { icon: UserCheck, title: "AI HR Asszisztens", desc: "CV szűrés, onboarding, szabadság-nyilvántartás, belső kérdések.", tag: "0-24", cap: "100+ jelölt/hó" },
  ];
  const comparison = [
    { metric: "Havi költség", human: "Bruttó 600K – 1.2M Ft", ai: "150K – 300K Ft" },
    { metric: "Elérhetőség", human: "Heti 40 óra", ai: "Heti 168 óra (0-24)" },
    { metric: "Betanulás", human: "1-3 hónap", ai: "1-2 hét" },
    { metric: "Skálázás", human: "Hetek (toborzás)", ai: "1 hét alatt" },
    { metric: "Betegszabadság", human: "~15 nap/év", ai: "0 nap" },
    { metric: "Fluktuáció", human: "15-25%/év", ai: "0%" },
    { metric: "Konzisztencia", human: "Változó", ai: "Mindig azonos" },
    { metric: "Párhuzamos feladatok", human: "1-2", ai: "Korlátlan" },
  ];
  const faqs = [
    { question: "Mit jelent az 'AI munkaerő'?", answer: "Egy AI ügynök, ami a rendszereidbe integrálva önállóan végez feladatokat — válaszol, feldolgoz, riportol. Nem fárad el, nem megy szabadságra, és egyszerre korlátlan feladaton tud dolgozni." },
    { question: "Mi van, ha nem tud megoldani egy feladatot?", answer: "Automatikusan eszkalál emberi munkatárshoz. Soha nem ad rossz választ — inkább szól, hogy emberi döntés kell." },
    { question: "Hogyan működik a havi kölcsönzés?", answer: "Fix havidíj: működtetés, monitorozás, fejlesztés. Rugalmasan bővíthető vagy csökkenthető a következő hónaptól." },
    { question: "Hány embert helyettesít egy AI ügynök?", answer: "Feladattól függ: AI ügyfélszolgálatos 2-5 ember kapacitása, AI admin napi 8 óra manuális munkát vált ki. Pontos számot a felmérés során mondunk." },
    { question: "Biztonságos? GDPR?", answer: "Privát környezetben fut, adataid nem kerülnek harmadik félhez. GDPR kompatibilis, NDA-t is aláírunk." },
    { question: "Felmondhatom?", answer: "Havi felmondás, nincs lock-in. Első hónapban elégedettségi garancia — ha nem hozza az eredményt, visszafizetjük." },
  ];

  return (
    <div>
      <section className="pt-8 pb-16 px-6"><div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-8"><ArrowLeft size={16} /> Vissza a főoldalra</button>
        <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-6"><Bot size={14} className="text-slate-600" /><span className="text-xs font-medium text-slate-600">03 — A jövő munkaereje</span></div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">AI Munkaerő<br />kölcsönzés</h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">Ne vegyél fel új embert — <strong className="text-slate-700">kölcsönözz AI-t</strong>. Digitális munkatársak, akik 0-24 dolgoznak, nem mennek szabadságra, és havi töredékébe kerülnek.</p>
        <button className="bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">Nézd meg az AI munkaerő csomagokat <ArrowRight size={16} /></button>
      </div></section>
      <section className="py-10 px-6 bg-slate-900 text-white"><div className="max-w-4xl mx-auto text-center"><p className="text-2xl md:text-3xl font-bold mb-2">Egy AI ügynök = 2-5 munkatárs kapacitása</p><p className="text-base text-slate-400">A bruttó bérköltség töredékéért. Nonstop.</p></div></section>
      <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Milyen AI munkaerőt kölcsönözhetsz?</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Elérhető AI ügynök típusok</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{agents.map((a, i) => (<div key={i} className="border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"><div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-3"><a.icon size={20} className="text-slate-600" /></div><p className="text-sm font-semibold text-slate-900 mb-1">{a.title}</p><p className="text-xs text-slate-500 leading-relaxed mb-3">{a.desc}</p><div className="flex flex-wrap gap-2"><span className="text-xs bg-slate-900 text-white px-2 py-0.5 rounded-full">{a.tag}</span><span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{a.cap}</span></div></div>))}</div></div></section>
      <section className="py-16 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Összehasonlítás</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Alkalmazott vs. AI Munkaerő</h2><div className="border border-slate-200 rounded-xl overflow-hidden bg-white"><table className="w-full"><thead><tr className="border-b border-slate-200 bg-slate-50"><th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Szempont</th><th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Alkalmazott</th><th className="text-left px-5 py-3 text-xs font-semibold text-slate-900 uppercase">AI Munkaerő</th></tr></thead><tbody>{comparison.map((c, i) => (<tr key={i} className="border-b border-slate-100 last:border-0"><td className="px-5 py-3 text-sm font-medium text-slate-900">{c.metric}</td><td className="px-5 py-3 text-sm text-slate-500">{c.human}</td><td className="px-5 py-3 text-sm text-slate-900 font-medium">{c.ai}</td></tr>))}</tbody></table></div></div></section>
      <section className="py-16 px-6"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Hogyan indul?</p><h2 className="text-2xl font-bold text-slate-900 mb-8">4 lépés az AI munkaerődig</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[{ step: "01", title: "Igényfelmérés", desc: "Meghatározzuk, milyen feladatokra kell AI. Mérjük a jelenlegi kapacitást.", icon: Target },{ step: "02", title: "Konfigurálás", desc: "Beállítjuk a céged kontextusával, szabályaival, hangnemével.", icon: Settings },{ step: "03", title: "Integráció & teszt", desc: "Bekötjük a rendszereidbe, éles adatokkal teszteljük.", icon: GitBranch },{ step: "04", title: "Élesítés", desc: "Elindítjuk, mi monitorozzuk és optimalizáljuk.", icon: Play }].map((p, i) => (<div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100"><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center"><p.icon size={18} className="text-white" /></div><div><span className="text-xs font-mono text-slate-400">{p.step}</span><p className="text-sm font-semibold text-slate-900">{p.title}</p></div></div><p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p></div>))}</div></div></section>
      <section className="py-16 px-6 bg-slate-50"><div className="max-w-4xl mx-auto"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Havi kölcsönzési díjak</p><h2 className="text-2xl font-bold text-slate-900 mb-8">Válaszd ki az AI csapatodat</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{ name: "Starter", price: "150.000 Ft", period: "/hó", desc: "1 AI ügynök, 1 feladatkörre.", features: ["1 AI ügynök", "1 integráció", "Email support", "Havi riport"], hl: false },{ name: "Business", price: "350.000 Ft", period: "/hó", desc: "2-3 AI ügynök, több feladatkörre.", features: ["2-3 AI ügynök", "Korlátlan integráció", "0-24 monitorozás", "Dedikált kapcsolattartó", "Heti riport + optimalizáció"], hl: true },{ name: "Enterprise", price: "Egyedi", period: "árazás", desc: "Teljes AI csapat, komplex feladatokra.", features: ["Korlátlan AI ügynök", "Egyedi fejlesztések", "Dedikált AI menedzser", "SLA garancia", "Real-time dashboard"], hl: false }].map((p, i) => (<div key={i} className={`rounded-xl p-6 ${p.hl ? "bg-slate-900 text-white ring-2 ring-slate-900" : "bg-white border border-slate-200"}`}><p className={`text-sm font-medium mb-1 ${p.hl ? "text-slate-400" : "text-slate-500"}`}>{p.name}</p><div className="flex items-baseline gap-1 mb-1"><p className={`text-2xl font-bold ${p.hl ? "text-white" : "text-slate-900"}`}>{p.price}</p><p className={`text-sm ${p.hl ? "text-slate-500" : "text-slate-400"}`}>{p.period}</p></div><p className={`text-sm mb-5 leading-relaxed ${p.hl ? "text-slate-400" : "text-slate-500"}`}>{p.desc}</p><div className="space-y-2">{p.features.map((f, j) => (<div key={j} className="flex items-start gap-2"><CheckCircle size={14} className={`flex-shrink-0 mt-0.5 ${p.hl ? "text-blue-400" : "text-green-500"}`} /><p className={`text-xs ${p.hl ? "text-slate-300" : "text-slate-600"}`}>{f}</p></div>))}</div></div>))}</div><div className="mt-6 flex flex-col md:flex-row gap-4"><div className="flex-1 bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3"><Shield size={18} className="text-green-600 flex-shrink-0 mt-0.5" /><div><p className="text-sm font-semibold text-green-800">Elégedettségi garancia</p><p className="text-xs text-green-700">Első hónapban nem hozza az eredményt? Visszafizetjük.</p></div></div><div className="flex-1 bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-start gap-3"><Calendar size={18} className="text-slate-600 flex-shrink-0 mt-0.5" /><div><p className="text-sm font-semibold text-slate-800">Nincs elköteleződés</p><p className="text-xs text-slate-600">Havi felmondás, rugalmas skálázás.</p></div></div></div></div></section>
      <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><h2 className="text-2xl font-bold text-slate-900 mb-6">Gyakran ismételt kérdések</h2>{faqs.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}</div></section>
    </div>
  );
};

/* ===================== MAIN LANDING PAGE ===================== */
const HomePage = ({ onNavigate }) => {
  const stats = [
    { value: "10x", label: "gyorsabb feldolgozás" },
    { value: "0-24", label: "nonstop működés" },
    { value: "60-90", label: "nap alatt kész rendszer" },
    { value: "0 Ft", label: "járulék az AI munkaerőre" },
  ];
  const painPoints = [
    { text: "A csapatod naponta órákat tölt ismétlődő, manuális feladatokkal", icon: Clock },
    { text: "Nehezen találsz és tartasz meg munkaerőt a növekvő feladatokhoz", icon: Users },
    { text: "A konkurenciád már AI-t használ, te még gondolkodsz rajta", icon: TrendingUp },
    { text: "Próbáltál AI eszközöket, de nem tudod, hogyan illeszd a cégedbe", icon: Zap },
  ];
  const services = [
    { tag: "01", icon: BarChart3, title: "AI Felmérés és Workshop", subtitle: "Tudd meg, hol hoz a legtöbbet az AI", desc: "Feltérképezzük a folyamataidat, kiszámoljuk a megtérülést, és adunk egy konkrét tervet.", cta: "Részletek", page: "service1" },
    { tag: "02", icon: Workflow, title: "AI Workflow fejlesztés", subtitle: "Megépítjük a rendszert, ami helyetted dolgozik", desc: "Egyedi AI workflow-kat tervezünk a céged igényeire szabva. Nem dobozos szoftver, hanem a te automatizációd.", cta: "Részletek", page: "service2" },
    { tag: "03", icon: Bot, title: "AI Munkaerő kölcsönzés", subtitle: "Kölcsönözz AI-t, ne alkalmazottat", desc: "AI ügynökök, amik a cégednek dolgoznak nonstop. Havi fix díj, nulla járulék, korlátlan kapacitás.", cta: "Részletek", page: "service3" },
  ];
  const process = [
    { step: "01", title: "Konzultáció", desc: "Megértjük a céged működését és céljait. 30 perc, ingyenes.", icon: MessageSquare },
    { step: "02", title: "Felmérés & Terv", desc: "Feltérképezzük az automatizálható folyamatokat, ROI számítással.", icon: BarChart3 },
    { step: "03", title: "Fejlesztés & Bevezetés", desc: "Megépítjük az AI rendszereket, integráljuk, betanítjuk a csapatot.", icon: Cpu },
    { step: "04", title: "Üzemeltetés & Skálázás", desc: "Monitorozzuk, optimalizáljuk. Havi riport az eredményekről.", icon: TrendingUp },
  ];
  const testimonials = [
    { name: "K. Tamás", role: "Ügyvezető, E-commerce cég", text: "3 hónap alatt az ügyfélszolgálati válaszidőnk 4 óráról 3 percre csökkent. Az AI ügynök a megkeresések 78%-át egyedül kezeli." },
    { name: "M. Andrea", role: "Marketing vezető, SaaS startup", text: "A lead feldolgozás teljesen automatikus lett. Ami eddig 2 ember teljes munkaideje volt, azt most AI csinálja — pontosabban." },
    { name: "B. Gergő", role: "Operációs igazgató, Logisztikai cég", text: "Szkeptikus voltam, de a felmérés után egyértelműek voltak a számok. Az első workflow 3 hét alatt megtérült." },
  ];
  const faqs = [
    { question: "Mennyibe kerül az AI bevezetés?", answer: "Ingyenes konzultáció után egyedi ajánlatot készítünk. Workflow fejlesztés 300.000 Ft-tól, AI munkaerő kölcsönzés 150.000 Ft/hó-tól. Minden projekt előtt ROI kalkulációt adunk." },
    { question: "Mennyi idő, amíg éles lesz?", answer: "Egyszerűbb workflow-k 2-4 hét. Komplex automatizáció 60-90 nap. A felmérés után pontos ütemtervet kapsz." },
    { question: "Mi történik, ha az AI hibázik?", answer: "Minden rendszert emberi felügyelettel tervezünk. Kritikus döntéseknél ember hagy jóvá. Folyamatos monitorozással 95%+ pontosság." },
    { question: "Kell technikai tudás?", answer: "Nem. Úgy tervezzük, hogy bárki tudja használni. Teljes betanítást tartunk a bevezetés részeként." },
    { question: "Milyen rendszerekkel integrálódik?", answer: "CRM (HubSpot, Salesforce, Pipedrive), ERP, Google Workspace, Microsoft 365, Slack, Shopify, WooCommerce, Shoprenter — és több száz további." },
    { question: "Mi különböztet meg másoktól?", answer: "Nem előadásokat tartunk — megépítjük és üzemeltetjük. Nem hype-ot adunk, hanem működő automatizációt mérhető eredménnyel." },
  ];

  return (
    <div>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-medium text-slate-600">AI automatizációs ügynökség magyar cégeknek</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
            A céged következő munkatársa{" "}
            <span className="relative inline-block">
              <span className="relative z-10">nem ember lesz</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-100 z-0"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Felépítjük az AI munkaerődet, ami 0-24 dolgozik — szabadság, betegség és fluktuáció nélkül.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              Kérd az ingyenes AI felmérést <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate("service1")} className="border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-base font-medium hover:bg-slate-50 transition-colors">
              Hogyan működik?
            </button>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-100 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (<div key={i} className="text-center"><p className="text-3xl font-bold text-slate-900">{s.value}</p><p className="text-sm text-slate-500 mt-1">{s.label}</p></div>))}
        </div>
      </section>
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Ismerős?</p><h2 className="text-3xl font-bold text-slate-900">A manuális adminisztráció és az unalmas, <span className="underline decoration-[#C3F73A] decoration-2 underline-offset-4">repetitív feladatok elviszik az időt.</span></h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{painPoints.map((p, i) => (<div key={i} className="bg-white rounded-xl p-6 flex items-start gap-4 border border-slate-100"><div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0"><p.icon size={20} className="text-slate-500" /></div><p className="text-base text-slate-700 leading-relaxed">{p.text}</p></div>))}</div>
          <div className="text-center mt-10"><p className="text-lg font-semibold text-slate-900">Ha legalább egy pontnál bólogattál, beszélnünk kell.</p></div>
        </div>
      </section>
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Szolgáltatások</p><h2 className="text-3xl font-bold text-slate-900">Három lépés a teljes AI automatizációig</h2><p className="text-base text-slate-500 mt-3 max-w-xl mx-auto">Nem kell mindent egyszerre. Kezdd ott, ahol a cégednek most a legnagyobb szüksége van rá.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6 hover:border-slate-400 transition-all cursor-pointer group" onClick={() => onNavigate(s.page)}>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors"><s.icon size={22} className="text-slate-600 group-hover:text-white transition-colors" /></div>
                <span className="text-xs font-mono font-bold text-slate-300">{s.tag}</span>
                <h3 className="text-base font-semibold text-slate-900 mt-1 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{s.desc}</p>
                <span className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">{s.cta} <ArrowRight size={14} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="process" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Folyamat</p><h2 className="text-3xl font-bold text-slate-900">Hogyan működik?</h2><p className="text-base text-slate-500 mt-3">Te az üzletedre koncentrálsz, mi az AI-ra.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 border border-slate-100 h-full"><div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4"><p.icon size={22} className="text-white" /></div><p className="text-xs font-mono font-bold text-slate-300 mb-1">{p.step}</p><p className="text-base font-semibold text-slate-900 mb-2">{p.title}</p><p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p></div>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"><ArrowRight size={16} className="text-slate-300" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="results" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Eredmények</p><h2 className="text-3xl font-bold text-slate-900">Amit ügyfeleink mondanak</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => (<div key={j} className="w-4 h-4 rounded-sm bg-slate-900"></div>))}</div>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">"{t.text}"</p>
                <div><p className="text-sm font-semibold text-slate-900">{t.name}</p><p className="text-xs text-slate-500">{t.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900">AI nélkül vs. AI-val</h2><p className="text-base text-slate-500 mt-3">Ugyanaz a cég, teljesen más eredmény.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-6">AI nélkül</p>
              <div className="space-y-4">{["4-24 óra válaszidő","Manuális adatfeldolgozás, hibákkal","Új munkaerő felvétele hetekig tart","Hétvégén senki nem dolgozik","Skálázás = több ember = több költség"].map((item, i) => (<div key={i} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full border-2 border-slate-200 flex-shrink-0 mt-0.5"></div><p className="text-sm text-slate-500">{item}</p></div>))}</div>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-6">4yes AI-val</p>
              <div className="space-y-4">{["30 másodperces válaszidő","Automatikus, 99%+ pontosság","Új AI munkaerő 1 héten belül kész","0-24, 365 nap szünet nélkül","Skálázás = több AI = töredék költség"].map((item, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle size={18} className="text-blue-400 flex-shrink-0 mt-0.5" /><p className="text-sm text-slate-200">{item}</p></div>))}</div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12"><p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">GYIK</p><h2 className="text-3xl font-bold text-slate-900">Gyakran ismételt kérdések</h2></div>
          {faqs.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}
        </div>
      </section>
    </div>
  );
};

/* ===================== MAIN APP ===================== */
export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate("home")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center"><Cpu size={18} className="text-white" /></div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">4yes.hu</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("service1")} className={`text-sm transition-colors ${page === "service1" ? "text-slate-900 font-medium" : "text-slate-500 hover:text-slate-900"}`}>AI Felmérés és Workshop</button>
            <button onClick={() => navigate("service2")} className={`text-sm transition-colors ${page === "service2" ? "text-slate-900 font-medium" : "text-slate-500 hover:text-slate-900"}`}>AI Workflow fejlesztés</button>
            <button onClick={() => navigate("service3")} className={`text-sm transition-colors ${page === "service3" ? "text-slate-900 font-medium" : "text-slate-500 hover:text-slate-900"}`}>AI Munkaerő kölcsönzés</button>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            Ingyenes konzultáció
          </button>
        </div>
      </nav>

      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "service1" && <ServicePage1 onBack={() => navigate("home")} />}
      {page === "service2" && <ServicePage2 onBack={() => navigate("home")} />}
      {page === "service3" && <ServicePage3 onBack={() => navigate("home")} />}

      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A konkurenciád már automatizál.<br />Te mikor kezded?</h2>
          <p className="text-base text-slate-400 mb-8 max-w-xl mx-auto">30 perces, ingyenes konzultáció — megmutatjuk, hol spórolhatsz időt és pénzt AI-val.</p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
            Foglalj ingyenes konzultációt <ArrowRight size={18} />
          </button>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Shield size={14} /> Nincs elköteleződés</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 30 perc, online</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} /> Konkrét tervet kapsz</span>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center"><Cpu size={18} className="text-white" /></div>
                <span className="text-lg font-bold text-slate-900">4yes.hu</span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">AI automatizációs ügynökség magyar cégeknek. Nemzetközi technológia, helyi szakértelemmel.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Szolgáltatások</p>
              <div className="space-y-2">
                <button onClick={() => navigate("service1")} className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">AI Felmérés és Workshop</button>
                <button onClick={() => navigate("service2")} className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">AI Workflow fejlesztés</button>
                <button onClick={() => navigate("service3")} className="block text-sm text-slate-600 hover:text-slate-900 transition-colors">AI Munkaerő kölcsönzés</button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Kapcsolat</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2"><Mail size={14} className="text-slate-400" /><p className="text-sm text-slate-600">hello@4yes.hu</p></div>
                <div className="flex items-center gap-2"><Phone size={14} className="text-slate-400" /><p className="text-sm text-slate-600">+36 1 234 5678</p></div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-slate-400" /><p className="text-sm text-slate-600">Budapest, Magyarország</p></div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-400">2026 4yes.hu — Minden jog fenntartva</p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <span className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer">Adatvédelem</span>
              <span className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer">ÁSZF</span>
              <span className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer">Impresszum</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}