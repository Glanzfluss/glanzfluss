import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from "next/font/google"; 

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Glanzfluss Mobile Detailing",
  description: "Premium Fahrzeugaufbereitung – direkt bei dir vor Ort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}