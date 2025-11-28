'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { CheckCircle, Sparkles, Droplets, Car, ShieldCheck, Snowflake, Star, Clock, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';
import type { Metadata } from "next";

{/*export const metadata: Metadata = {
  title: "Autoaufbereitung & Detailing-Pakete | Glanzfluss Mobile Detailing Warburg",
  description:
    "Entdecke unsere professionellen Detailing-Pakete: Essential, Premium und Winterpaket. Mobile Fahrzeugpflege direkt bei dir in Warburg – flexibel, hochwertig und fair bepreist.",
  keywords: [
    "Autoaufbereitung Warburg",
    "Car Detailing Warburg",
    "Mobile Autopflege",
    "Innenraumreinigung Auto",
    "Fahrzeugpflege Warburg",
    "Glanzfluss Mobile Detailing",
  ],
  openGraph: {
    title: "Glanzfluss Detailing-Pakete – Professionelle Autoaufbereitung in Warburg",
    description:
      "Wähle dein Pflegepaket: Essential, Premium oder Winterpaket. Glanzfluss bietet mobile Fahrzeugaufbereitung auf höchstem Niveau – direkt bei dir vor Ort.",
    url: "https://www.glanzfluss.de/services",
    siteName: "Glanzfluss Mobile Detailing",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glanzfluss Detailing-Pakete Warburg",
    description:
      "Mobile Autopflege in Warburg: Essential, Premium & Winterpaket – Glanzfluss bringt den Glanz zu dir.",
  },
};*/}


const ServicesPage = () => {
  const ACCENT = 'bg-[#a3e635]';
  const TEXT = 'text-[#a3e635]';

  const services = [
    {
      id: 'essential',
      icon: <Sparkles className="h-10 w-10 text-[#a3e635]" />,
      title: 'Essential Interior',
      description:
        'Gründliche Innenraumreinigung – ideal für regelmäßige Pflege und ein dauerhaft frisches Fahrerlebnis.',
      features: [
        'Staubfreie & Saubere Armaturen und Oberflächen',
        'Reinigungs des Innenraumes mit Nasssauger',
        'Teppich- & Sitzreinigung durch Handverfahren',
        'Scheibenreinigung von innen',
      ],
      price: 'ab 69€',
      duration: 'ca. 1,5 Stunden',
      bestSeller: false,
    },
    {
      id: 'premium',
      icon: <Car className="h-10 w-10 text-[#a3e635]" />,
      title: 'Premium Interior Detail',
      description:
        'Die Rundum-Innenpflege für alle, die Perfektion lieben – inklusive Lederpflege, Geruchsbeseitigung und Tiefenreinigung.',
      features: [
        'Komplette Innenreinigung inkl. Lüftungsschlitze & Kofferraum',
        'Lederpflege & Kunststoffauffrischung',
        'Professionelle Teppich- & Polsterreinigung',
        'Tiefenreinigung mit Sprühextraktionsverfahren',
        'Geruchsbeseitigung & Frischer Duft',
      ],
      price: 'ab 99€',
      duration: 'ca. 2–2,5 Stunden',
      bestSeller: false,
    },
    {
      id: 'winter',
      icon: <Snowflake className="h-10 w-10 text-[#a3e635]" />,
      title: 'Winterpaket Special',
      description:
        'Enthält alle Leistungen des Premium Interior Detailings plus eine hochwertige Scheibenversiegelung mit Fusso-Technologie – idealer Schutz für kalte Tage.',
      features: [
        'Premium-Innenraumreinigung mit hochentwickelter Vorgehensweise',
        'Farbauffrischende Pflege für längere Sauberkeit & Schutz',
        'Scheibenversiegelung außen mit hydrophober Wirkung',
        'Bis zu 12 Monate Schutz vor Frost, Eis & Regen',
      ],
      price: 'ab 99€', // Optional: "statt 119€ ab 99€" siehe unten
      duration: 'ca. 2,5 bis 3 Stunden',
      bestSeller: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">

        {/* HERO */}
        {/*<section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800">*/}
        <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('pictures/GFWebImage4.png')`}} >

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Unsere <span className={TEXT}>Leistungen</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg mb-10">
            Professionelle Fahrzeugpflege direkt bei dir vor Ort –  
            ohne Werkstatt, ohne Stress, mit Premium-Ergebnis.
          </p>
            {/* Breadcrumb unter der Überschrift */}
            <p className="text-sm text-gray-300 mb-6 flex space-x-1">
              <Link href="/" className="hover:underline">Startseite</Link>
              <span>{'>'}</span>
              <span className="font-semibold">Leistungen</span>
            </p>
          <Link
            href="/contact"
            className={`py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}
          >
            Jetzt Termin sichern
          </Link>
          <div className="flex items-center space-x-4 mt-8 text-gray-400 text-sm">
            <div className="flex items-center"><Star className="w-4 h-4 mr-1 text-[#a3e635]" /> Wow-Effekt</div>
            <div className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-[#a3e635]" /> 100% mobil</div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-1 text-[#a3e635]" /> Flexible Terminwahl</div>
          </div>
        </section>

        {/* USP-ICONS */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-20 px-6 text-center">
          {[
            ['Premium-Produkte', 'Ausschließlich Koch Chemie – nur das Beste für dein Auto.'],
            ['100 % mobil', 'Wir kommen zu ihnen – nach Hause, zur Arbeit oder Garage.'],
            ['Professionelle Ergebnisse', 'Detailing auf höchstem Niveau, mit Leidenschaft.'],
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 border border-gray-700 rounded-2xl bg-gray-800/60 hover:scale-[1.03] transition">
              <h3 className={`text-xl font-semibold mb-3 ${TEXT}`}>{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </section>

        {/* WINTER SPECIAL PROMO */}
        <section
          className="relative max-w-6xl mx-auto my-20 rounded-2xl overflow-hidden bg-cover bg-center bg-fixed px-4 md:px-8 py-16"
          style={{
            backgroundImage: `url('pictures/Windschutzscheibe_gefroren.jpg')`
          }}
        >

          {/* Dunkleres Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/65 z-0"></div>

          {/* Weihnachts-Girlande */}
          <div className="absolute top-0 left-0 w-full -translate-y-1 z-10">
            <svg viewBox="0 0 1200 70" fill="none" className="w-full h-10 md:h-auto">
              <path d="M0 10 C300 80 900 80 1200 10" stroke="#a3e635" strokeWidth="4" fill="none" />

              <circle cx="100" cy="30" r="8" fill="#ef4444" className="animate-pulse" />
              <circle cx="250" cy="45" r="7" fill="#22c55e" className="animate-pulse delay-150" />
              <circle cx="400" cy="35" r="9" fill="#facc15" className="animate-pulse delay-300" />
              <circle cx="550" cy="35" r="8" fill="#ef4444" className="animate-pulse delay-450" />
              <circle cx="700" cy="45" r="7" fill="#22c55e" className="animate-pulse delay-600" />
              <circle cx="850" cy="30" r="9" fill="#facc15" className="animate-pulse delay-750" />
              <circle cx="1000" cy="40" r="8" fill="#ffffff" className="animate-pulse delay-900" />
              <circle cx="1150" cy="35" r="7" fill="#ef4444" className="animate-pulse delay-1050" />
            </svg>
          </div>

          {/* Hintergrundlichter soft */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#a3e635] rounded-full blur-2xl opacity-10"></div>
          <div className="absolute bottom-4 right-4 w-56 h-56 bg-[#a3e635] rounded-full blur-2xl opacity-10"></div>

          <div className="relative z-10 text-center px-2">

            <div className="inline-flex items-center px-4 py-1 mb-4 mt-6 rounded-full bg-gray-700 text-sm font-semibold uppercase tracking-widest">
              ❄️ Winteraktion
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Innenraumpflege + Scheibenversiegelung
            </h2>

            <p className="text-gray-200 max-w-3xl mx-auto mb-10 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Perfekter Schutz für kalte Tage: Sauberkeit, Pflege und klare Sicht bei jedem Wetter –  
              dank hochwertiger Koch Chemie Innenreinigung & hydrophober Glasversiegelung.
            </p>

            {/* Emotionale Einleitung */}
            <p className="text-gray-100 max-w-3xl mx-auto mb-10 text-lg italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Kennst du es auch? Es ist kalt und gefroren draußen, und du musst in der Kälte stehen, um deine Autoscheiben freizukratzen?  
              Dann ist unsere <span className="font-semibold text-[#a3e635]">Scheibenversiegelung</span> im Winteraktions-Paket genau das Richtige für dich.  
              Damit wird das lästige Kratzen deutlich einfacher – und in den meisten Fällen bildet sich kaum noch Eis.
            </p>

            {/* Feature-Box */}
            <div className="relative bg-gray-900/95 border border-gray-700 rounded-2xl shadow-xl p-6 md:p-8 text-left max-w-3xl mx-auto">

              {/* Badge */}
              <div className="absolute -top-3 right-3 px-3 py-1 rounded-full bg-[#a3e635] text-black text-xs font-bold uppercase tracking-widest shadow-lg">
                Scheibenversiegelung kostenlos
              </div>

              <ul className="space-y-3 text-gray-200 text-lg">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-[#a3e635]" /> Premium-Innenraumreinigung mit Koch Chemie Produkten</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-[#a3e635]" /> Farbauffrischende Pflege für längere Sauberkeit & Schutz</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-[#a3e635]" /> Außen: Hochwertige Scheibenversiegelung mit Fusso-Technologie</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-[#a3e635]" /> Schützt bis zu 12 Monate vor Frost, Eis, Schmutz & Regen</li>
              </ul>

              <div className="text-center mt-10">
                <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">
                  Winteraktion – Nur für kurze Zeit zum gleichen Preis wie Premium!
                </p>
                <Link
                  href="/contact"
                  className={`inline-block py-3 px-8 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition`}
                >
                  Jetzt Winterpaket anfragen
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className={`text-sm tracking-widest uppercase font-bold ${TEXT}`}>
              Unsere Pakete
            </h2>
            <h3 className="text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Wähle dein Pflegepaket
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Für jeden Bedarf das passende Detailing-Angebot – professionell, mobil und fair bepreist.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.id}
                className={`relative bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 flex flex-col text-center hover:scale-[1.03] transition ${
                  s.bestSeller ? 'ring-2 ring-[#a3e635]' : ''
                }`}
              >
                {s.bestSeller && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a3e635] text-black text-xs font-bold px-4 py-1 rounded-full uppercase">
                    Meistgebucht
                  </div>
                )}
                <div className="mb-6 flex justify-center">{s.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 mb-6">{s.description}</p>
                <ul className="text-left space-y-2 mb-6">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-2 text-[#a3e635]" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {/* Optional: Preisanker */}
                  {s.id === 'winter' ? (
                    <>
                      <p className="text-gray-500 line-through text-sm">statt 119€</p>
                      <p className="font-semibold text-lg mb-1">
                        <span className={TEXT}>{s.price}</span>
                      </p>
                    </>
                  ) : (
                    <p className="font-semibold text-lg mb-1">
                      <span className={TEXT}>{s.price}</span>
                    </p>
                  )}
                  <p className="text-sm text-gray-400 mb-6">{s.duration}</p>
                  <Link
                    href="/contact"
                    className={`inline-block py-3 px-8 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition`}
                  >
                    Jetzt buchen
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-left mt-6 ml-4 max-w-2xl">
            Bei Extremverschmutzungen müssen individuelle Preise vereinbart werden. 
            Hierzu gerne per E-Mail einmal den Ist-Zustand zuschicken.
            Sie werden anschließend von uns kontaktiert.
          </p>
        </section>

        {/* TRUST / FAQ */}
        <section className="bg-gray-800 py-20 px-6 border-t border-gray-700">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-10">
              Warum <span className={TEXT}>Glanzfluss</span>?
            </h3>
            <div className="grid md:grid-cols-2 gap-10 text-left text-gray-300">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">💎 Qualität, die bleibt</h4>
                <p>Wir nutzen ausschließlich Premium-Produkte und schonende Verfahren – für langanhaltenden Glanz und Materialschutz.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">🚘 100 % mobil</h4>
                <p>Wir kommen zu dir: ob Zuhause oder Arbeitsplatz. Du sparst Zeit und bekommst das perfekte Ergebnis direkt vor Ort.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">⭐ Transparent & fair</h4>
                <p>Klare Preise, ehrliche Kommunikation und persönliche Beratung. Keine versteckten Kosten.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">💬 Persönlicher Kontakt</h4>
                <p>Direkt über E-Mail oder Telefonisch, schnell und unkompliziert – wir beraten dich individuell zu deinem Fahrzeug.</p>
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}
              >
                <MessageCircle className="w-5 h-5" /> Jetzt Kontakt anfragen
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
