'use client';

import React from 'react';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${styles.footer} relative overflow-hidden`}>
      {/* Deko-Glow */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* 1️⃣ Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">Glanzfluss</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Professionelle mobile Autoaufbereitung in Warburg und Umgebung.  
            Wir bringen dein Fahrzeug wieder auf Hochglanz – direkt bei dir vor Ort.
          </p>
        </div>

        {/* 2️⃣ Kontakt */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2 hover:text-lime-400 transition">
              <Mail size={16} /> 
              <a href="mailto:kontakt@glanzfluss.de">kontakt@glanzfluss.de</a>
            </li>
            <li className="flex items-center gap-2 hover:text-lime-400 transition">
              <Phone size={16} /> 
              <a href="tel:+4915258714502">+49 1525 8714502</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-lime-400" /> 
              <span>Warburg & Umgebung</span>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Social + Rechtliches */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Folge uns</h3>
          <div className="flex items-center gap-4 mb-6">
            <a href="https://www.instagram.com/glanzfluss/" target="_blank" className={`${styles.socialIcon} hover:text-lime-400`}>
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@glanzflussdetailing" target="_blank" className={`${styles.socialIcon} hover:text-lime-400`}>
              <FaTiktok size={20} />
            </a>
            <a href="https://www.youtube.com/@glanzfluss" target="_blank" className={`${styles.socialIcon} hover:text-lime-400`}>
              <Youtube size={20} />
            </a>
          </div>

          <div className="text-sm space-y-2 text-gray-400">
            <a href="/impressum" className="hover:text-lime-400 transition block">Impressum</a>
            <a href="/datenschutz" className="hover:text-lime-400 transition block">Datenschutz</a>
            <a href="/agb" className="hover:text-lime-400 transition block">AGB</a>
          </div>
        </div>
      </div>

      <div className={`${styles.copyright} relative z-10 mb-6 text-center`}>
        © {new Date().getFullYear()} Glanzfluss by Philipp Dierkes. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
