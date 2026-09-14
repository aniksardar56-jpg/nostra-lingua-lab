import React, { useState } from 'react';
import { Globe, BookOpen, Car, FileText, CheckCircle, Users } from 'lucide-react';

// Content Translations (Italian / Bengali)
const translations = {
  it: {
    nav: {
      brand: "Nostra Lingua LAB",
      courses: "Corsi",
      patente: "Patente B",
      resources: "Materiali PDF",
      contact: "Contatti",
    },
    hero: {
      badge: "Impara l'Italiano con facilità",
      title: "La tua guida per imparare l'Italiano e superare la Patente",
      subtitle: "Spiegazioni chiare in Italiano e Bengalese per aiutarti a raggiungere i tuoi obiettivi in Italia.",
      ctaPrimary: "Inizia a Studiare",
      ctaSecondary: "Guarda i Corsi",
    },
    features: {
      title: "Perché scegliere Nostra Lingua LAB",
      item1Title: "Spiegazioni Bilingui",
      item1Desc: "Concetti grammaticali e vocaboli complessi spiegati con traduzione in Bengalese.",
      item2Title: "Corso Patente B",
      item2Desc: "Dizionario dei termini stradali e schede quiz per superare l'esame di teoria.",
      item3Title: "Materiali in PDF",
      item3Desc: "Guide e risorse scaricabili per studiare comodamente da smartphone o PC.",
    },
    courses: {
      title: "I Nostri Corsi principali",
      course1Title: "Italiano Base (A1 - A2)",
      course1Desc: "Ideale per chi inizia da zero. Grammatica, ascolto e conversazione quotidiana.",
      course2Title: "Italiano Intermedio (B1 - B2)",
      course2Desc: "Per migliorare la fluidità, utile per lavoro e documenti di soggiorno.",
      course3Title: "Preparazione Patente B",
      course3Desc: "Vocaboli tecnici, trucchi per i quiz e spiegazioni dei segnali stradali.",
    },
    cta: {
      title: "Pronto per iniziare il tuo percorso?",
      subtitle: "Unisciti alla nostra community di studenti e impara l'italiano passo dopo passo.",
      button: "Iscriviti Ora",
    },
    footer: "© 2026 Nostra Lingua LAB. Tutti i diritti riservati."
  },
  bn: {
    nav: {
      brand: "Nostra Lingua LAB",
      courses: "কোর্সসমূহ",
      patente: "লাইসেন্স বি",
      resources: "পিডিএফ ফাইল",
      contact: "যোগাযোগ",
    },
    hero: {
      badge: "সহজেই ইতালি ভাষা শিখুন",
      title: "ইতালিয়ান ভাষা শেখা এবং ড্রাইভিং লাইসেন্স পাসের সঠিক মাধ্যম",
      subtitle: "ইতালিতে আপনার লক্ষ্য পূরণের জন্য সহজ ইতালিয়ান এবং বাংলা ভাষায় ব্যাখ্যা।",
      ctaPrimary: "পড়া শুরু করুন",
      ctaSecondary: "কোর্সগুলো দেখুন",
    },
    features: {
      title: "কেন নোস্ত্রো লিঙ্গুয়া ল্যাব বেছে নেবেন?",
      item1Title: "দ্বিভাষিক ব্যাখ্যা",
      item1Desc: "কঠিন গ্রামার এবং শব্দার্থগুলো বাংলা অনুবাদসহ সহজভাবে উপস্থাপন।",
      item2Title: "ড্রাইভিং লাইসেন্স বি কোর্স",
      item2Desc: "রোড সাইন এবং কঠিন শব্দার্থের অর্থসহ থিওরি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি।",
      item3Title: "পিডিএফ নোটস",
      item3Desc: "মোবাইল বা কম্পিউটারে সহজে পড়ার জন্য ডাউনলোডযোগ্য গাইড এবং শিট।",
    },
    courses: {
      title: "আমাদের প্রধান কোর্সসমূহ",
      course1Title: "বেসিক ইতালিয়ান (A1 - A2)",
      course1Desc: "যাঁরা একদম শুরু থেকে শিখতে চান। দৈনিক কথোপকথন ও মৌলিক গ্রামার।",
      course2Title: "মিডিয়াম ইতালিয়ান (B1 - B2)",
      course2Desc: "কাজ এবং ডকুমেন্টের জন্য ভাষার দক্ষতা বাড়ানোর কোর্স।",
      course3Title: "ড্রাইভিং লাইসেন্স বি প্রস্তুতি",
      course3Desc: "কঠিন শব্দার্থ, কুইজের ট্রিকস এবং ট্রাফিক সাইনের সহজ ব্যাখ্যা।",
    },
    cta: {
      title: "আপনি কি প্রস্তুতি শুরু করতে প্রস্তুত?",
      subtitle: "আমাদের স্টুডেন্ট কমিউনিটিতে যোগ দিন এবং ধাপে ধাপে ইতালিয়ান শিখুন।",
      button: "এখনই শুরু করুন",
    },
    footer: "© ২০২৬ Nostra Lingua LAB। সর্বস্বত্ব সংরক্ষিত।"
  }
};

export default function Homepage() {
  const [lang, setLang] = useState('it');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'it' ? 'bn' : 'it'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">{t.nav.brand}</span>
          </div>

          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#courses" className="hover:text-blue-600 transition">{t.nav.courses}</a>
            <a href="#patente" className="hover:text-blue-600 transition">{t.nav.patente}</a>
            <a href="#resources" className="hover:text-blue-600 transition">{t.nav.resources}</a>
            <a href="#contact" className="hover:text-blue-600 transition">{t.nav.contact}</a>
          </nav>

          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full border border-slate-300 transition text-sm font-semibold"
          >
            <Globe className="h-4 w-4 text-blue-600" />
            <span>{lang === 'it' ? '🇧🇩 বাংলা' : '🇮🇹 Italiano'}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#courses" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition text-center">
              {t.hero.ctaPrimary}
            </a>
            <a href="#patente" className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition text-center">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          {t.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.item1Title}</h3>
            <p className="text-slate-600">{t.features.item1Desc}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="bg-emerald-100 p-3 rounded-xl w-fit mb-4">
              <Car className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.item2Title}</h3>
            <p className="text-slate-600">{t.features.item2Desc}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.item3Title}</h3>
            <p className="text-slate-600">{t.features.item3Desc}</p>
          </div>

        </div>
      </section>

      {/* Courses List */}
      <section id="courses" className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            {t.courses.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.courses.course1Title}</h3>
                <p className="text-slate-600 text-sm mb-6">{t.courses.course1Desc}</p>
              </div>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition">
                {t.hero.ctaPrimary}
              </button>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.courses.course2Title}</h3>
                <p className="text-slate-600 text-sm mb-6">{t.courses.course2Desc}</p>
              </div>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition">
                {t.hero.ctaPrimary}
              </button>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between p-6 border-blue-500 ring-2 ring-blue-500/20">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded mb-3 inline-block">Popular</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.courses.course3Title}</h3>
                <p className="text-slate-600 text-sm mb-6">{t.courses.course3Desc}</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition">
                {t.hero.ctaPrimary}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-slate-400 mb-8">{t.cta.subtitle}</p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-lg">
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-sm border-t border-slate-800">
        <p>{t.footer}</p>
      </footer>

    </div>
  );
}
