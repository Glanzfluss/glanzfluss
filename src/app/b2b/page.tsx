'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import {
  Building2,
  Rocket,
  Users,
  MessageCircle,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Wrench
} from 'lucide-react';

const ACCENT = 'bg-[#a3e635]';
const TEXT = 'text-[#a3e635]';

const InfoCard: React.FC<{ title: string; desc: string; icon?: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
    <div className="flex items-start gap-4">
      <div className="text-[#a3e635]">{icon}</div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-gray-300 text-sm mt-2">{desc}</div>
      </div>
    </div>
  </div>
);

const B2BPage = () => {
  const [showSparkle, setShowSparkle] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSparkle(false), 2600);
    return () => clearTimeout(t);
  }, []);

  const PHONE = '+49 1525 8714502';
  const EMAIL = 'kontakt@glanzfluss.de';

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">

        {/* HERO (gleich wie auf anderen Seiten) */}
        <section
          className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/pictures/GFWebImageB2B.png')`
          }}
        >
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 border border-gray-700 text-sm">
              {showSparkle && <Sparkles className="w-5 h-5 text-[#a3e635]" />} Willkommen bei Glanzfluss — Geschäftskunden
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Glanzfluss für <span className={TEXT}>Geschäftskunden</span>
          </h1>

          <p className="text-gray-300 max-w-2xl text-lg mb-10">
            Mobil, professionell und prozessorientiert — wir liefern planbare Abläufe, dokumentierte Qualität und reibungslose Durchführung.
          </p>
          
          {/* Breadcrumb unter der Überschrift */}
          <p className="text-sm text-gray-300 mb-6 flex space-x-1">
            <Link href="/" className="hover:underline">Startseite</Link>
            <span>{'>'}</span>
            <span className="font-semibold">B2B</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link href="/contact" className={`py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}>Jetzt Beratung sichern</Link>
            <a href={`tel:${PHONE}`} className="text-gray-200 text-sm hover:underline">Anrufen: <span className="font-semibold text-white ml-2">{PHONE}</span></a>
          </div>

          <div className="flex items-center space-x-4 mt-8 text-gray-400 text-sm">
            <div className="flex items-center"><Building2 className="w-4 h-4 mr-1 text-[#a3e635]" /> Für Unternehmen</div>
            <div className="flex items-center"><Rocket className="w-4 h-4 mr-1 text-[#a3e635]" /> Effizient & Mobil</div>
            <div className="flex items-center"><Star className="w-4 h-4 mr-1 text-[#a3e635]" /> Ergebnisorientiert</div>
          </div>
        </section>

        {/* Selbstbewusstes Intro: Expertise & Arbeitsweise */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800 border border-gray-700 rounded-3xl p-8 overflow-hidden">
              <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#a3e635] rounded-full opacity-6 blur-3xl"></div>
              <h2 className={`text-3xl font-extrabold mb-4 ${TEXT}`}>Professionell. Prozessbasiert. Verlässlich.</h2>
              <p className="text-gray-300 mb-4">
                Glanzfluss arbeitet nach klaren Standards: strukturierte Abläufe, dokumentierte Ergebnisse und transparente Kommunikation.
                So stellen wir sicher, dass Ihre Flotte jederzeit repräsentativ und einsatzbereit ist.
              </p>

              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3"><div className="mt-1 text-[#a3e635]">●</div> Standardisierte Arbeitsabläufe mit Checklisten</li>
                <li className="flex items-start gap-3"><div className="mt-1 text-[#a3e635]">●</div> Professionelle Ausrüstung und hochwertige Produkte</li>
                <li className="flex items-start gap-3"><div className="mt-1 text-[#a3e635]">●</div> Dokumentation nach jedem Auftrag (Fotos)</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <Link href="/contact" className={`${ACCENT} text-black py-3 px-5 rounded-lg font-bold`}>Kontaktformular</Link>
                <a href={`mailto:${EMAIL}`} className="border border-gray-700 text-gray-200 py-3 px-5 rounded-lg inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#a3e635]" /> E‑Mail
                </a>
              </div>
            </div>

            <div className="grid gap-6">
              <InfoCard
                icon={<Wrench className="w-6 h-6 text-[#a3e635]" />}
                title="Ausrüstung auf Profi‑Niveau"
                desc="Mobile Werkzeuge, emissionsarme Reinigungsgeräte und geprüfte Pflegeprodukte für zuverlässige Ergebnisse."
              />
              <InfoCard
                icon={<Users className="w-6 h-6 text-[#a3e635]" />}
                title="Koordinierte Arbeit"
                desc="Arbeit nach Struktur, Verhalten beim Kunden und sachgerechte Pflege — konsequent umgesetzt."
              />
              <InfoCard
                icon={<CheckCircle className="w-6 h-6 text-[#a3e635]" />}
                title="Qualitätssicherung"
                desc="Fotodokumentation und Nachkontrolle auf Wunsch."
              />
            </div>
          </div>
        </section>

        {/* Prozess-Visual: klar, seriös */}
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h3 className={`text-2xl font-extrabold mb-6 ${TEXT}`}>Unser Ablauf — transparent und planbar</h3>
          <ol className="space-y-6 list-none inline-block text-left">
            <li className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-full bg-[#a3e635] flex items-center justify-center font-bold text-black">1</div>
              <div>
                <div className="font-semibold">Bedarf & Planung</div>
                <div className="text-gray-300 text-sm">Gemeinsames Abstimmen der Intervalle, Standorte und Prioritäten.</div>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-full bg-[#a3e635] flex items-center justify-center font-bold text-black">2</div>
              <div>
                <div className="font-semibold">Durchführung</div>
                <div className="text-gray-300 text-sm">Pünktliche, saubere Durchführung durch Koordinierte Abläufe — inklusive Kontrolle.</div>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-full bg-[#a3e635] flex items-center justify-center font-bold text-black">3</div>
              <div>
                <div className="font-semibold">Dokumentation & Übergabe</div>
                <div className="text-gray-300 text-sm">Foto-Protokoll und offene Kommunikation — für Nachvollziehbarkeit.</div>
              </div>
            </li>
          </ol>
        </section>

        {/* Beispiel-Demo (Beweis durch Prozess, nicht durch Kundenlogos) */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800 border border-gray-700 rounded-3xl p-8">
              <div className="text-sm text-gray-400">Demo</div>
              <h3 className={`${TEXT} text-2xl font-extrabold mt-2`}>Vorher / Nachher — dokumentierter Workflow</h3>
              <p className="text-gray-300 mt-4">Auf Wunsch führen wir eine demonstrative Aufbereitung an einem Musterfahrzeug durch und dokumentieren den Ablauf und das Ergebnis ausführlich — damit Sie die Qualität prüfen können, bevor regelmäßige Termine beginnen.</p>
              <div className="mt-6">
                <Link href="/contact" className={`${ACCENT} text-black py-3 px-5 rounded-lg font-bold`}>Demo anfragen</Link>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="font-semibold">Kein Marketing‑Geschwätz — messbare Abläufe</div>
              <div className="text-gray-300 mt-2 text-sm">Wir zeigen unsere Arbeitsweise offen: Foto‑Dokumentation und abgestimmte Übergabeprotokolle.</div>
            </div>
          </div>
        </section>

        {/* Klarer Kontaktblock — wie gewünscht */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800 border border-gray-700 rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-extrabold mb-4">Sprechen wir gemeinsam über Ihre Fahrzeuge!</h3>
            <p className="text-gray-300 mb-6">Kontaktieren Sie uns per Kontaktformular, E‑Mail oder Telefon. Wir melden uns persönlich und planen gemeinsam den ersten, für Sie passenden Schritt.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className={`${ACCENT} text-black py-4 px-8 rounded-xl font-bold`}>Kontaktformular</Link>
              <a href={`mailto:${EMAIL}`} className="border border-gray-700 text-gray-200 py-4 px-8 rounded-xl inline-flex items-center gap-2 justify-center"><Mail className="w-4 h-4 text-[#a3e635]" /> E‑Mail</a>
              <a href={`tel:${PHONE}`} className="border border-gray-700 text-gray-200 py-4 px-8 rounded-xl inline-flex items-center gap-2 justify-center"><Phone className="w-4 h-4 text-[#a3e635]" /> Telefon</a>
            </div>
          </div>
        </section>

        {/* mobile floating contact */}
        <div className="fixed bottom-6 right-4 md:hidden z-50">
          <Link href="/contact" className="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-[#a3e635] text-black font-semibold">Kontakt</Link>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default B2BPage;