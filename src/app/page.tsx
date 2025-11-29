import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroInfoSection from "./components/HeroInfoSection";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mobile Test Car Detailing Warburg | Glanzfluss Autopflege vor Ort",
  description:
    "Glanzfluss bietet professionelle mobile Autopflege in Warburg und Umgebung. Innen- & Außenreinigung, Politur und Lackschutz direkt bei dir zuhause oder am Arbeitsplatz.",
  keywords: [
    "Mobile Autopflege Warburg",
    "Autoaufbereitung Warburg",
    "Car Detailing Warburg",
    "Fahrzeugaufbereitung vor Ort",
    "Glanzfluss Mobile Detailing",
  ],
  openGraph: {
    title: "Glanzfluss Mobile Car Detailing Warburg – Premium Fahrzeugpflege bei dir vor Ort",
    description:
      "Professionelle Autoaufbereitung in Warburg. Glanzfluss bringt den Glanz zu dir – mobil, flexibel und mit Premium-Produkten.",
    url: "https://www.glanzfluss.de",
    siteName: "Glanzfluss Mobile Detailing",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glanzfluss Mobile Car Detailing Warburg",
    description:
      "Premium mobile Fahrzeugpflege in Warburg – Innenreinigung, Politur & Lackschutz bei dir vor Ort.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Script
        id="glanzfluss-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glanzfluss Mobile Detailing",
            "image": "https://www.glanzfluss.de/logo.png",
            "url": "https://www.glanzfluss.de",
            "telephone": "+49 1525 8714502",
            "priceRange": "€€",
            "description":
              "Premium Autoaufbereitung für Innen- & Außenpflege direkt bei dir zuhause in Warburg & Umgebung.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Warburg",
              "addressCountry": "DE",
            },
            "areaServed": {
              "@type": "Place",
              "name": "Warburg und Umgebung",
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "sameAs": [
              "https://www.instagram.com/glanzflussdetailing",
              "https://www.facebook.com/glanzflussdetailing",
              "https://wa.me/4915258714502"
            ],
          }),
        }}
      />
      <Navbar />
      <Hero />
      <HeroInfoSection />
      <Footer />
    </main>
  );
}
