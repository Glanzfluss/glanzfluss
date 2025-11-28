// app/components/Hero.tsx
"use client";

import styles from "./Hero.module.css";
import { motion, Variants } from "framer-motion";

// Framer Motion Parent/Stagger Container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // Startet die Kinder-Animationen nach 0.5s
      staggerChildren: 0.15, // Verzögerung zwischen den einzelnen Elementen
    },
  },
};

// Framer Motion Child/Item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        poster="/poster.jpg"
      >
        <source src="videos/BMW_CINEMATIC_VIDEO.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* NEU: Hinzufügen des Akzent-Elements */}
        <motion.div 
            className={styles.subline}
            variants={itemVariants}
        >
            Glanz. Schutz. Wert.
        </motion.div>
        
        {/* H1 zerlegt in animierte motion.h1 */}
        <motion.h1 variants={itemVariants}>
                        <span className={'text-[#a3e635]'}>Glanzfluss Test</span> Mobile Detailing
        </motion.h1>
        
        {/* P zerlegt in animierte motion.p */}
        <motion.p variants={itemVariants}>
            Premium Fahrzeugaufbereitung – direkt bei dir vor Ort
        </motion.p>
        
        {/* CTA als eigenes animiertes Element, leicht verzögert */}
        <motion.a 
            href="/contact" 
            className={styles.ctaButton}
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
        >
          Termin vereinbaren
        </motion.a>
      </motion.div>
    </section>
  );
}