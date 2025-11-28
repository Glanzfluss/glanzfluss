'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'

const AgbPage = () => {
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
          <h1 className="text-4xl font-extrabold mb-8 text-[#a3e635]">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-gray-300 mb-2">
            Gültig für alle Dienstleistungen von <strong>Glanzfluss by Philipp Dierkes</strong>.
          </p>

          <p className="text-gray-400 mb-6 text-sm">Stand: 03.11.2025</p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">1. Geltungsbereich</h2>
          <p className="text-gray-300 mb-4">
            Diese AGB gelten für alle zwischen Glanzfluss by Philipp Dierkes und dem Kunden geschlossenen Verträge
            über Fahrzeugaufbereitungsdienstleistungen, die telefonisch, per E-Mail oder online über <a href="https://glanzfluss.de" className="underline text-[#a3e635]">glanzfluss.de</a> abgeschlossen werden.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">2. Leistungen</h2>
          <p className="text-gray-300 mb-4">
            Glanzfluss erbringt mobile Fahrzeugaufbereitungsdienste direkt beim Kunden vor Ort. Der genaue Leistungsumfang ergibt sich aus der jeweiligen Buchung.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">3. Preise und Zahlung</h2>
          <p className="text-gray-300 mb-4">
            Alle Preise verstehen sich als Endpreise gemäß § 19 UStG (Kleinunternehmerregelung – keine Umsatzsteuer). Die Bezahlung erfolgt nach Erbringung der Dienstleistung auf Rechnung (Überweisung oder Bar).
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">4. Terminvereinbarung und Stornierung</h2>
          <p className="text-gray-300 mb-4">
            Terminvereinbarungen sind verbindlich. Eine kostenfreie Stornierung ist bis 24 Stunden vor dem Termin möglich. Ein Strom- und Wasseranschluss sollten bereitgestellt werden. 
            Bei späterer Absage oder Nichterscheinen kann eine Ausfallpauschale in Höhe von 25€ erhoben werden.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">5. Haftung</h2>
          <p className="text-gray-300 mb-4">
            Glanzfluss haftet nur für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht werden.  
            Bearbeitungsschäden am Fahrzeug werden – sofern schuldhaft verursacht – durch unsere Betriebshaftpflichtversicherung abgedeckt.  
            Eine Haftung für leichte Fahrlässigkeit, bereits bestehende Schäden, Materialermüdung oder unsachgemäße Nutzung durch den Kunden ist ausgeschlossen.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">6. Datenschutz & Widerrufsrecht</h2>
          <p className="text-gray-300 mb-4">
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer <a href="/datenschutz" className="underline text-[#a3e635]">Datenschutzerklärung</a>.
            Kundendaten werden ausschließlich zur Abwicklung der Dienstleistung verwendet.
          </p>
          <p className="text-gray-300 mb-4">
            Das gesetzliche Widerrufsrecht für Verbraucher entfällt, da es sich um individuell erbrachte Dienstleistungen handelt, die auf Wunsch des Kunden beginnen und vollständig ausgeführt werden.
          </p>

          <h2 className="text-2xl font-bold text-[#a3e635] mt-8 mb-4">7. Änderungen und Schlussbestimmungen</h2>
          <p className="text-gray-300 mb-2">
            Glanzfluss behält sich vor, diese AGB bei Bedarf anzupassen. Es gilt die jeweils zum Zeitpunkt der Buchung gültige Fassung.
          </p>
          <p className="text-gray-300">
            Es gilt deutsches Recht. Gerichtsstand ist der Wohnsitz des Anbieters, sofern keine abweichende gesetzliche Regelung gilt.
          </p>

          <p className="text-gray-300 text-sm mt-10">
            Wichtig: Mit der Terminbuchung bzw. Annahme eines Angebots über Telefon, E-Mail oder über das Online-Formular erklärt der Kunde, dass er diese AGB gelesen und akzeptiert.
          </p>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default AgbPage;
