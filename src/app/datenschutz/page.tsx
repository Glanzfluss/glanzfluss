'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'

const DatenschutzPage = () => {
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
          <h1 className="text-4xl font-extrabold mb-8 text-[#a3e635]">Datenschutzerklärung</h1>

          <p className="text-gray-300 mb-2">
            Der Schutz deiner persönlichen Daten ist uns wichtig. Wir verarbeiten Daten ausschließlich für die Terminbuchung und die Kontaktaufnahme.
          </p>

          <p className="text-gray-400 mb-6 text-sm">Stand: 03.11.2025</p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">1. Verantwortlicher</h2>
          <p className="text-gray-300 mb-4">
            Glanzfluss by Philipp Dierkes<br />
            Inhaber: Philipp Dierkes<br />
            Am Krüsenberg 36, 34414 Warburg<br />
            E-Mail: <a href="mailto:kontakt@glanzfluss.de" className="underline text-[#a3e635]">kontakt@glanzfluss.de</a>
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="text-gray-300 mb-4">
            Wir erheben nur die Daten, die für die Buchung oder Kontaktaufnahme erforderlich sind (Name, E-Mail, Telefonnummer, Fahrzeugdetails, Standort).
            Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Vertragserfüllung notwendig oder gesetzlich vorgeschrieben ist.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">3. Speicherung</h2>
          <p className="text-gray-300 mb-4">
            Daten werden nur so lange gespeichert, wie für die Durchführung der Dienstleistung nötig oder gesetzlich vorgeschrieben.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">4. Cookies & Tracking</h2>
          <p className="text-gray-300 mb-4">
            Unsere Website verwendet keine Tracking- oder Analyse-Cookies. Server-Logs dienen ausschließlich der Sicherheit und Fehleranalyse.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">5. Ihre Rechte</h2>
          <p className="text-gray-300 mb-4">
            Du kannst jederzeit Auskunft, Berichtigung oder Löschung deiner personenbezogenen Daten verlangen. Kontaktiere uns hierzu unter <a href="mailto:kontakt@glanzfluss.de" className="underline text-[#a3e635]">kontakt@glanzfluss.de</a>.
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default DatenschutzPage;
