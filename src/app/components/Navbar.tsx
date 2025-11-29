// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Map, Menu, X } from "lucide-react";
// NEU: Importiere 'Variants' für eine bessere Typisierung (optional, aber hilfreich)
import { motion, Variants } from "framer-motion"; 
import styles from "./Navbar.module.css";

// Korrigierte Framer Motion Variants für die Animation
// Wir definieren nur die Ziel-Werte (Target), keine Transition-Objekte mehr
const dropdownVariants: Variants = {
  // Zustand, wenn das Menü geschlossen ist
  closed: {
    height: 0,
    opacity: 0,
  },
  // Zustand, wenn das Menü geöffnet ist
  open: {
    height: "auto",
    opacity: 1,
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Funktion zum Schließen des Menüs bei Klick auf einen Link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        {/*<Link href="/" className={styles.logo}>Glanzfluss</Link>*/}
        <Link href="/" className={styles.logo}><img src="pictures/LogoTransparentMitText.WebP" style={{ width: "140px", height: "auto"}} /></Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li><Link href="services">Leistungen</Link></li>
          <li><Link href="about-us">Über uns</Link></li>
          <li><Link href="b2b">B2B</Link></li>
          <li><Link href="insights">Einblicke</Link></li>
          <li><Link href="contact">Kontakt</Link></li>
          <li><Link href="https://maps.app.goo.gl/uik1ZJs4hzv4MpoX8" className={styles.navLinksIcon} target="_blank" ><Map size={22} /></Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* NEU: Dropdown Menü mit Framer Motion */}
      <motion.div
        className={styles.dropdown}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        variants={dropdownVariants}
        // NEU: Transition-Einstellungen hierhin verschoben
        transition={{ 
            duration: 0.35, 
            ease: "easeInOut",
            // Starte das Animieren der inneren Elemente, wenn das Menü öffnet/schließt
            when: isOpen ? "beforeChildren" : "afterChildren"
        }}
      >
        <ul>
          <li><Link href="services" onClick={handleLinkClick}>Leistungen</Link></li>
          <li><Link href="about-us" onClick={handleLinkClick}>Über uns</Link></li>
          <li><Link href="b2b" onClick={handleLinkClick}>B2B</Link></li>
          <li><Link href="insights" onClick={handleLinkClick}>Einblicke</Link></li>
          <li><Link href="contact" onClick={handleLinkClick}>Kontakt</Link></li>
          <li><Link href="https://maps.app.goo.gl/uik1ZJs4hzv4MpoX8" onClick={handleLinkClick} className={styles.navLinksIcon} target="_blank" ><Map size={22} /></Link></li>
        </ul>
      </motion.div>
    </nav>
  );
}