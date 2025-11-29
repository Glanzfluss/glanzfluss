'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Video, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

{/*export const metadata: Metadata = {
  title: "Einblicke | Glanzfluss Mobile Car Detailing Warburg",
  description:
    "Einblicke in unsere Arbeit: Vorher-Nachher-Bilder, Fahrzeugaufbereitungen und Glanzmomente unserer Kunden. Glanzfluss bringt dein Auto zum Strahlen!",
  keywords: [
    "Car Detailing Bilder",
    "Autoaufbereitung Vorher Nachher",
    "Mobile Fahrzeugpflege Warburg",
    "Glanzfluss Detailing Galerie",
  ],
  openGraph: {
    title: "Einblicke – Glanzfluss Mobile Detailing Warburg",
    description:
      "Sieh dir unsere Arbeit an: glänzende Ergebnisse und zufriedene Kunden. Glanzfluss Mobile Detailing Warburg.",
    url: "https://www.glanzfluss.de/einblicke",
    siteName: "Glanzfluss Mobile Detailing",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Einblicke – Glanzfluss Mobile Detailing Warburg",
    description:
      "Vorher-Nachher-Bilder unserer mobilen Fahrzeugaufbereitung in Warburg.",
  },
};*/}


const InsightsPage = () => {
  const ACCENT = 'bg-[#a3e635]';
  const TEXT = 'text-[#a3e635]';

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const videos = [
    { id: 1, title: 'VW Golf Vorher-Nachher', src: '/videos/vw-golf.mp4' },
    { id: 2, title: 'BMW X5 Aufbereitung', src: '/videos/bmw-x5.mp4' },
    { id: 3, title: 'Familienwagen Innenraum', src: '/videos/family-car.mp4' },
    { id: 4, title: 'Audi A4 Premium Clean', src: '/videos/audi-a4.mp4' },
    { id: 5, title: 'Leasingrückgabe Mercedes', src: '/videos/mercedes.mp4' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">

        {/* HERO */}
        {/*<section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800">*/}
        <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('pictures/GFWebImage3.WebP')`}} >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Einblicke in unsere <span className={TEXT}>Fahrzeugpflege</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg mb-10">
            Erlebe, wie echte Aufbereitung aussieht –  
            vom Familienwagen bis zum Premiumfahrzeug.  
            Mobil. Professionell. Mit Leidenschaft für jedes Detail.
          </p>
          {/* Breadcrumb unter der Überschrift */}
          <p className="text-sm text-gray-300 mb-6 flex space-x-1">
            <Link href="/" className="hover:underline">Startseite</Link>
            <span>{'>'}</span>
            <span className="font-semibold">Einblicke</span>
          </p>
          <Link
            href="/contact"
            className={`py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}
          >
            Jetzt Termin sichern
          </Link>
          <div className="flex items-center space-x-4 mt-8 text-gray-400 text-sm">
            <div className="flex items-center"><Video className="w-4 h-4 mr-1 text-[#a3e635]" /> Echte Aufnahmen</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-[#a3e635]" /> Handwerk mit Präzision</div>
            <div className="flex items-center"><PlayCircle className="w-4 h-4 mr-1 text-[#a3e635]" /> Schon bald verfügbar</div>
          </div>
        </section>

        {/* STORY SECTIONS */}
        <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Echte Ergebnisse – Vorher & Nachher',
              text: 'Erlebe, wie wir stark verschmutzte Innenräume wieder in nahezu neuwertigen Zustand bringen – mit Liebe zum Detail und sichtbarem Wow-Effekt.',
              points: [
                'Echte Kundenfahrzeuge, keine Stockfotos',
                'Vom Familienwagen bis zum Premium-Leasingauto',
              ],
            },
            {
              title: 'Mobile Aufbereitung direkt bei dir',
              text: 'Unsere Videos zeigen, wie flexibel und professionell wir arbeiten – egal ob in Warburg oder Umgebung.',
              points: [
                'Komfortable Pflege direkt bei dir zu Hause',
                'Saubere Ergebnisse ohne Werkstattbesuch',
              ],
            },
            {
              title: 'Profi-Equipment in Aktion',
              text: 'Sieh selbst, mit welchem Equipment und welchen Techniken wir den Unterschied machen.',
              points: [
                'Koch Chemie & Profi-Geräte im Einsatz',
                'Sprühextraktion, Hochdruck & Präzision',
              ],
            },
          ].map((block, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 hover:scale-[1.03] transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className={`text-2xl font-bold mb-4 ${TEXT}`}>{block.title}</h3>
              <p className="text-gray-400 text-base mb-5 leading-relaxed">{block.text}</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                {block.points.map((p, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#a3e635] mr-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* VIDEO GRID */}
        <section className="bg-gray-800 border-y border-gray-700 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className={`text-sm tracking-widest uppercase font-bold ${TEXT}`}>
              Unsere Arbeiten im Video
            </h2>
            <h3 className="text-4xl font-extrabold mt-3 mb-4 leading-tight">
              So sieht Glanzfluss in Aktion aus
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Bald findest du hier unsere neuesten Aufbereitungen – echte Einblicke in Handwerk, Leidenschaft und Glanz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {videos.map((video, idx) => (
              <motion.div
                key={video.id}
                className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-700 bg-gray-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/70 z-10 backdrop-blur-sm">
                  <span className={`${TEXT} font-bold text-lg`}>Coming Soon</span>
                  <p className="text-gray-400 text-sm mt-2">Unsere neuesten Projekte folgen bald</p>
                </div>

                <video
                  src={video.src}
                  className="w-full h-64 object-cover grayscale"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gray-800 border border-gray-700 rounded-2xl max-w-6xl mx-auto my-20 py-20 px-8 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-900 to-black opacity-90"></div>
          <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#a3e635] rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a3e635] rounded-full blur-3xl opacity-10"></div>

          <div className="relative z-10">
            <h3 className="text-4xl font-extrabold mb-6">Du willst mehr sehen?</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
              Wenn du wissen möchtest, wie wir auch dein Fahrzeug aufbereiten können –  
              schreib uns einfach oder vereinbare direkt deinen Termin.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default InsightsPage;
