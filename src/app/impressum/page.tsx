'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'

const ImpressumPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white py-24 px-6 sm:px-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-[#a3e635]">Impressum</h1>

          <p className="text-gray-300 mb-4"><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p className="text-gray-300 mb-2">Glanzfluss by Philipp Dierkes</p>
          <p className="text-gray-300 mb-2">Inhaber: Philipp Dierkes</p>
          <p className="text-gray-300 mb-2">Am Krüsenberg 36</p>
          <p className="text-gray-300 mb-2">34414 Warburg</p>

          <p className="text-gray-300 mt-4 mb-2">
            E-Mail: <a href="mailto:kontakt@glanzfluss.de" className="underline text-[#a3e635]">kontakt@glanzfluss.de</a>
          </p>
          <p className="text-gray-300 mb-6">Telefon: 01525 8714502</p>

            <p className="text-gray-300 mb-6">
            Umsatzsteuer-ID: entfällt gemäß § 19 UStG (Kleinunternehmerregelung)
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">Haftungsausschluss</h2>
          <p className="text-gray-300 mb-4">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">Urheberrecht</h2>
          <p className="text-gray-300">
            Alle Inhalte dieser Website (Texte, Bilder, Grafiken) unterliegen dem Urheberrecht.
            Jegliche Verwendung ohne ausdrückliche Genehmigung ist untersagt.
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default ImpressumPage;
