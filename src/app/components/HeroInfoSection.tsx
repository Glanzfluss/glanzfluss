"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, PiggyBank, Sparkles } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroInfoSection = () => {
  const TEXT_COLOR = "text-[#a3e635]";
  const ACCENT_BG = "bg-[#a3e635]";

   // FAQ Toggle State
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Was ist mobile Fahrzeugaufbereitung?",
      answer:
        "Wir kommen mit komplettem Equipment zu dir nach Hause oder an deinen Arbeitsplatz und bereiten dein Fahrzeug direkt vor Ort auf – ohne Werkstatt, ohne Wartezeit.",
    },
    {
      question: "Muss ich Wasser oder Strom bereitstellen?",
      answer:
        "Ja, derzeit benötigen wir einen Wasser- und Stromanschluss vor Ort, um unsere Arbeit effizient durchführen zu können.",
    },
    {
      question: "Welche Produkte verwendet Glanzfluss?",
      answer:
        "Wir arbeiten ausschließlich mit hochwertigen Produkten von Koch Chemie sowie professionellem Equipment.",
    },
    {
      question: "Wie lange dauert eine Aufbereitung?",
      answer:
        "Je nach Paket zwischen 1 und 4 Stunden. Du erhältst vorher eine klare Einschätzung.",
    },
    {
      question: "Fahrt ihr auch außerhalb von Warburg oder macht es Vorort bei Glanzfluss?",
      answer:
        "Ja! Wir fahren auch Orte in der Umgebung an und eine Aufbereitung Vorort bei uns ist auch möglich – je nach Entfernung (nach 25km) können geringe Anfahrtskosten anfallen.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Einleitender Gedanke */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={`text-sm tracking-widest uppercase font-bold ${TEXT_COLOR}`}>
          Warum Fahrzeugpflege mehr als nur Sauberkeit ist
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 leading-tight">
          Ein gepflegtes Auto sagt mehr über dich, als du denkst.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stell dir vor, du steigst jeden Morgen in ein makelloses Fahrzeug ein – glänzend außen, frisch und ordentlich innen. 
          Nicht nur dein Fahrgefühl verändert sich, sondern auch der Eindruck, den du hinterlässt.
        </p>
      </motion.div>

      {/* Nutzenargumentation */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        <motion.div
          className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-10 text-center flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Sparkles className={`h-12 w-12 ${TEXT_COLOR} mx-auto mb-6`} />
          <h3 className="text-2xl font-bold mb-4">Für den Alltag</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Genieße jeden Tag das Gefühl eines neuwertigen Autos. 
            Saubere Oberflächen, frischer Innenraum und ein glänzendes Finish steigern dein Fahrgefühl – jedes Mal, wenn du einsteigst.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-10 text-center flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TrendingUp className={`h-12 w-12 ${TEXT_COLOR} mx-auto mb-6`} />
          <h3 className="text-2xl font-bold mb-4">Leasingrückgabe ohne böse Überraschung</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Vermeide teure Nachzahlungen bei der Fahrzeugrückgabe.
            Wir bringen dein Auto in Bestform, damit der Zustand überzeugt – auch beim genauen Hinsehen.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-10 text-center flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PiggyBank className={`h-12 w-12 ${TEXT_COLOR} mx-auto mb-6`} />
          <h3 className="text-2xl font-bold mb-4">Verkaufsaufbereitung mit Mehrwert</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Eine saubere, glänzende Optik steigert nicht nur das Interesse, sondern auch den Preis. 
            <span> </span><a className="underline" href="https://www.moneycrashers.com/factors-affect-used-cars-resale-value/" target="_blank" rel="noopener noreferrer">Analysen</a> zeigen: Gepflegte Fahrzeuge erzielen beim Verkauf <span className="font-semibold text-white">bis zu 30 % mehr Wert</span>.
          </p>
        </motion.div>
      </div>

      {/* FAQ Bereich */}
      <motion.section
        className="max-w-5xl mx-auto mt-24 bg-black border border-gray-900 rounded-2xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm uppercase tracking-widest font-bold text-[#a3e635] text-center">
          FAQ
        </h2>
        <h3 className="text-4xl font-extrabold text-center mb-12">
          Häufig gestellte Fragen
        </h3>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {/* Kopfbereich */}
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold tracking-normal">{faq.question}</h4>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-[#a3e635]"
                      : "text-gray-400"
                  }`}
                />
              </div>

              {/* Antwortanimation */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="mt-4 text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Abschluss + CTA */}
      <motion.div
        className="mt-20 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-6">
          Pflege dein Fahrzeug nicht nur für den Moment – sondern für den Wert.
        </h3>
        <p className="text-gray-400 mb-10 text-lg">
          Egal ob Werterhalt, Leasingrückgabe oder Verkauf: Die richtige Aufbereitung ist keine Ausgabe, sondern eine 
          Investition in Qualität und Eindruck.
        </p>
        <a
          href="/contact"
          className={`inline-block py-4 px-10 rounded-xl font-bold ${ACCENT_BG} text-black text-lg hover:opacity-90 transition`}
        >
          Jetzt Fahrzeugaufbereitung buchen
        </a>
      </motion.div>
    </section>
  );
};

export default HeroInfoSection;
