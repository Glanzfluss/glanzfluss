'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Sparkles, ShieldCheck, Handshake, Award, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';
import type { Metadata } from "next";

{/*export const metadata: Metadata = {
  title: "Über uns | Glanzfluss Mobile Car Detailing Warburg",
  description:
    "Erfahre mehr über Glanzfluss – dein Experte für mobile Fahrzeugaufbereitung in Warburg. Leidenschaft, Qualität und Liebe zum Detail seit Tag eins.",
  keywords: [
    "Über uns Glanzfluss",
    "Car Detailing Team Warburg",
    "Mobile Fahrzeugpflege Warburg",
    "Autoaufbereitung Glanzfluss",
  ],
  openGraph: {
    title: "Über Glanzfluss – Mobile Fahrzeugpflege mit Leidenschaft",
    description:
      "Lerne unser Team kennen und erfahre, warum Glanzfluss für Qualität, Präzision und mobile Autopflege auf höchstem Niveau steht.",
    url: "https://www.glanzfluss.de/about",
    siteName: "Glanzfluss Mobile Detailing",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns – Glanzfluss Mobile Car Detailing Warburg",
    description:
      "Glanzfluss steht für Qualität, Leidenschaft und mobile Fahrzeugpflege in Warburg.",
  },
};*/}


const AboutPage = () => {
  const ACCENT = 'bg-[#a3e635]';
  const TEXT = 'text-[#a3e635]';

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const values = [
    {
      icon: <Sparkles className="h-10 w-10 text-[#a3e635]" />,
      title: 'Leidenschaft im Detail',
      text: 'Fahrzeugpflege ist für uns mehr als Arbeit – es ist Präzision, Handwerk und Begeisterung für Perfektion.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#a3e635]" />,
      title: 'Premium-Produkte',
      text: 'Wir vertrauen ausschließlich auf Koch Chemie – hochwertige Produkte, die Materialschonung und Glanz vereinen.',
    },
    {
      icon: <Handshake className="h-10 w-10 text-[#a3e635]" />,
      title: 'Vertrauen & Transparenz',
      text: 'Klare Kommunikation, faire Preise und persönliche Beratung – wir stehen für ehrliche Handwerksqualität.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">

        {/* HERO */}
        {/*<section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800">*/}
        <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-6 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('pictures/GFWebImage8.png')`}} >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Über <span className={TEXT}>Glanzfluss</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg mb-10">
            Mobile Fahrzeugpflege mit Leidenschaft, Präzision und Premium-Produkten –  
            direkt bei dir vor Ort in Warburg und Umgebung.
          </p>
          {/* Breadcrumb unter der Überschrift */}
          <p className="text-sm text-gray-300 mb-6 flex space-x-1">
            <Link href="/" className="hover:underline">Startseite</Link>
            <span>{'>'}</span>
            <span className="font-semibold">Über uns</span>
          </p>
          <Link
            href="/contact"
            className={`py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}
          >
            Jetzt Termin sichern
          </Link>
          <div className="flex items-center space-x-4 mt-8 text-gray-400 text-sm">
            <div className="flex items-center"><Star className="w-4 h-4 mr-1 text-[#a3e635]" /> Qualität seit Tag eins</div>
            <div className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-[#a3e635]" /> Premium-Produkte</div>
            <div className="flex items-center"><Handshake className="w-4 h-4 mr-1 text-[#a3e635]" /> Persönlicher Service</div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={`text-sm tracking-widest uppercase font-bold ${TEXT}`}>
              Unsere Geschichte
            </h2>
            <h3 className="text-4xl font-extrabold mb-4 leading-tight">
              Aus Leidenschaft wurde Glanzfluss
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Was als Begeisterung für saubere Fahrzeuge begann, entwickelte sich zu einem professionellen mobilen Detailing-Service für Warburg und Umgebung. 
              Mit jedem Fahrzeug, das wir pflegen, wächst unsere Leidenschaft für Perfektion im Detail.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Unser Ziel: Hochwertige Fahrzeugpflege so einfach wie möglich machen – ohne Werkstatt, ohne Wartezeit, aber mit 100 % Ergebnis.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-[#a3e635] rounded-2xl opacity-10 blur-3xl"></div>
            <img
              src="/pictures/GFWebImage5.png"
              alt="Glanzfluss Fahrzeugpflege"
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-gray-700 object-cover h-[220px] md:h-[320px]"
            />
          </motion.div>
        </section>

        {/* VALUES */}
        <section className="bg-gray-800 border-y border-gray-700 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className={`text-sm tracking-widest uppercase font-bold ${TEXT}`}>
              Unsere Werte
            </h2>
            <h3 className="text-4xl font-extrabold mt-3 mb-4 leading-tight">
              Wofür wir stehen
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Präzision, Ehrlichkeit und Leidenschaft – das Fundament unserer Arbeit.  
              Denn Fahrzeugpflege bedeutet Vertrauen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8 text-center hover:scale-[1.03] transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-5">{v.icon}</div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-gray-400">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="max-w-4xl mx-auto text-center py-28 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#a3e635] rounded-full blur-2xl opacity-20"></div>
              <img
                src="/pictures/Vorstellungsbild.jpg"
                alt="Philipp Dierkes"
                className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border border-gray-700 shadow-2xl z-10"
              />
            </div>
            <h3 className="text-3xl font-bold mb-2">Philipp Dierkes</h3>
            <p className={`${TEXT} font-semibold mb-4`}>Inhaber & Fahrzeugpflege</p>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Als Gründer von Glanzfluss stehe ich für Qualität, Zuverlässigkeit und ehrliche Arbeit.  
              Jedes Fahrzeug erhält meine volle Aufmerksamkeit – mit Leidenschaft und Präzision bis ins kleinste Detail.
            </p>
          </motion.div>
        </section>

        {/* PROMISE */}
        <section className="relative bg-gray-800 border border-gray-700 rounded-2xl max-w-6xl mx-auto my-20 py-20 px-8 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-900 to-black opacity-90"></div>
          <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#a3e635] rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a3e635] rounded-full blur-3xl opacity-10"></div>

          <div className="relative z-10">
            <Award className="h-12 w-12 text-[#a3e635] mx-auto mb-6" />
            <h3 className="text-4xl font-extrabold mb-6">Unser Versprechen</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
              Wir behandeln jedes Fahrzeug, als wäre es unser eigenes – mit Hingabe, Fachwissen und den besten Produkten.
              Dein Auto verdient mehr als eine Wäsche – es verdient Glanzfluss.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 py-4 px-10 rounded-xl font-bold ${ACCENT} text-black hover:opacity-90 transition text-lg`}
            >
              <MessageCircle className="w-5 h-5" /> Jetzt Kontakt anfragen
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
