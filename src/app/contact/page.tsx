'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Mail, Phone, Clock, MapPin, Loader2, CheckCircle,
  ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { ContactInfoItem } from '../components/ContactInfoItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddressAutocompleteInput from '../api/geoapify/AddressAutocompleteInput'; // Pfad anpassen
import type { Metadata } from "next";
import Link from 'next/link';

{/*export const metadata: Metadata = {
  title: "Kontakt | Glanzfluss Mobile Detailing Warburg",
  description:
    "Kontaktiere Glanzfluss für deine mobile Autopflege in Warburg. Jetzt Termin anfragen oder individuelle Beratung zur Fahrzeugaufbereitung erhalten.",
  keywords: [
    "Kontakt Glanzfluss",
    "Autoaufbereitung Warburg Kontakt",
    "Car Detailing Termin Warburg",
    "Mobile Autopflege buchen",
  ],
  openGraph: {
    title: "Kontakt – Glanzfluss Mobile Car Detailing Warburg",
    description:
      "Termin oder Beratung zur mobilen Fahrzeugpflege vereinbaren. Glanzfluss – dein Ansprechpartner für Autoaufbereitung in Warburg.",
    url: "https://www.glanzfluss.de/contact",
    siteName: "Glanzfluss Mobile Detailing",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kontakt – Glanzfluss Mobile Detailing Warburg",
    description: "Jetzt Termin für mobile Autopflege in Warburg anfragen.",
  },
};*/}


const Contact = () => {
  const ACCENT_COLOR = 'bg-[#a3e635]';
  const TEXT_COLOR = 'text-[#a3e635]';
  const ERROR_COLOR = 'text-red-500';

  type Status = 'idle' | 'loading' | 'success' | 'error';
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    location: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [agbsChecked, setAgbsChecked] = useState<boolean>(false); // Neue Checkbox

  const serviceDurations: Record<string, number> = {
    'Essential Interior': 2,
    'Premium Interior Detail': 3,
    'Winterpaket Special': 3,
    'B2B Beratung': 1,
  };

  const getAvailableWeeks = useMemo(() => {
    const today = new Date();
    const weeks: Date[][] = [];

    const generateWeek = (startDate: Date) => {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        week.push(d);
      }
      return week;
    };

    const firstWeek: Date[] = [];
    const dayOfWeek = today.getDay() === 0 ? 7 : today.getDay();
    for (let i = 0; i < 7 - (dayOfWeek - 1); i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      firstWeek.push(d);
    }
    weeks.push(firstWeek);

    let nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + (8 - dayOfWeek));
    for (let w = 0; w < 3; w++) {
      weeks.push(generateWeek(new Date(nextMonday)));
      nextMonday.setDate(nextMonday.getDate() + 7);
    }

    return weeks;
  }, []);

  const totalPages = getAvailableWeeks.length;
  const currentDates = getAvailableWeeks[currentPage];

  const getTimeSlots = (date: Date | null, service?: string) => {
    if (!date || !service) return [];
    const day = date.getDay();
    const duration = serviceDurations[service];

    let slots: string[] = [];
    if (day >= 1 && day <= 5) {
      slots = ['14:00', '15:00', '16:00', '17:00', '18:00'];
    } else if (day === 6) {
      slots = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
    } else if (day === 0) {
      slots = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
    }

    return slots.filter(time => {
      const [h, m] = time.split(':').map(Number);
      const endHour = h + duration;
      if ((day >= 1 && day <= 5 && endHour > 18) || (day === 6 && endHour > 18) || (day === 0 && endHour > 18)) return false;

      for (let i = 0; i < duration; i++) {
        const checkHour = h + i;
        const checkTime = `${checkHour.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}`;
        if (bookedTimes.includes(checkTime)) return false;
      }

      return true;
    });
  };

  const timeSlots = getTimeSlots(selectedDate, formData.service);

  useEffect(() => {
    if (!selectedDate) return;
    const dateStr = selectedDate.toISOString().split('T')[0];
    fetch(`/api/bookings/availability?date=${dateStr}`)
      .then(res => res.json())
      .then((data) => Array.isArray(data) ? setBookedTimes(data) : setBookedTimes([]))
      .catch(err => { console.error(err); setBookedTimes([]); });
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => setSelectedTime(time);

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setStep(2);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.vehicle || !formData.service || !formData.location || !agbsChecked) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const isoDate = selectedDate.toISOString().split('T')[0];
    const bookingDetails = { date: isoDate, time: selectedTime, ...formData };
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });
      if (!res.ok) throw new Error('Booking failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const resetBooking = () => {
    setStatus('idle');
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      service: '',
      location: '',
      message: '',
    });
    setSelectedDate(null);
    setSelectedTime(null);
    setCurrentPage(0);
    setBookedTimes([]);
    setAgbsChecked(false);
  };

  const renderProgress = () => {
    const steps = ['Leistung', 'Datum/Uhrzeit', 'Details'];
    return (
      <div className="relative w-full mb-8 flex justify-between items-center">
        <div className="absolute top-4 left-4 right-4 h-1 bg-gray-700">
          <div
            className="absolute top-0 left-0 h-1 bg-[#a3e635] transition-all duration-500"
            style={{ width: `${((step - 1)/(steps.length - 1))*100}%` }}
          />
        </div>
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = step > stepNumber;
          const isActive = step === stepNumber;
          return (
            <div key={label} className="relative flex flex-col items-center z-10">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-500
                  ${isCompleted || isActive ? 'bg-[#a3e635] text-black' : 'bg-gray-700 text-white'}`}
              >
                {stepNumber}
              </div>
              <span className="text-sm mt-2 text-white text-center max-w-[80px]">{label}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderServiceStep = () => (
    <>
      {renderProgress()}
      <h2 className="text-3xl font-bold mb-8 text-white">1. Leistung wählen</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        {[
          { name: 'Essential Interior', comingSoon: false },
          { name: 'Premium Interior Detail', comingSoon: false },
          { name: 'Winterpaket Special', comingSoon: false },
          { name: 'B2B Beratung', comingSoon: false },
        ].map((s) => (
          <button
            key={s.name}
            onClick={() => !s.comingSoon && handleServiceSelect(s.name)}
            disabled={s.comingSoon}
            className={`relative flex-1 py-6 rounded-xl font-bold text-lg transition
              ${formData.service === s.name ? `${ACCENT_COLOR} text-black shadow-lg` : 'bg-gray-700 text-white hover:bg-gray-600'}
              ${s.comingSoon ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {s.comingSoon && (
              <div className="absolute top-2 right-2 bg-gray-600 text-[10px] text-gray-300 px-2 py-0.5 rounded-full uppercase tracking-wider font-normal">
                Coming Soon
              </div>
            )}
            {s.name}
          </button>
        ))}
      </div>
    </>
  );

  // KW-Berechnung für renderCalenderStep
  const getWeekNumber = (date: Date) => {
    const tempDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = tempDate.getUTCDay() || 7;
    tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((tempDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return weekNo;
  };

  // Jahr-Berechnung für renderCalenderStep
  const getCurrentYear = (date: Date) => {
    return date.getFullYear(); // gibt z.B. 2025 zurück
  }

  const renderCalendarStep = () => (
    <>
      {renderProgress()}
      <h2 className="text-3xl font-bold mb-4 text-white">2. Datum & Uhrzeit wählen</h2>
      <div className="flex items-center justify-between mb-4 text-gray-400">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 0))} disabled={currentPage === 0} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-30">
          <ChevronLeft />
        </button>
        <p className="font-semibold text-white">KW {getWeekNumber(currentDates[0])} / {getCurrentYear(currentDates[0])}</p>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))} disabled={currentPage === totalPages - 1} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-30">
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3 mb-8">
        {currentDates.map((date, index) => {
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          const weekday = date.toLocaleDateString('de-DE', { weekday:'short' });
          const dayNum = date.getDate();
          const month = date.toLocaleDateString('de-DE', { month:'short' });
          return (
            <button key={index} onClick={() => handleDateSelect(date)}
              className={`p-4 h-28 flex flex-col justify-center items-center rounded-xl border transition duration-200
                ${isSelected ? `${ACCENT_COLOR} text-black border-transparent shadow-lg` : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'}`}>
              <span className="text-sm font-semibold">{weekday}</span>
              <span className="text-2xl font-extrabold">{dayNum}</span>
              <span className="text-xs text-gray-400">{month}</span>
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <>
          <div className="flex flex-wrap gap-3 mb-10">
            {timeSlots.map(time => (
              <button key={time} onClick={() => handleTimeSelect(time)}
                className={`px-4 py-2 rounded-xl border transition duration-200 ${selectedTime === time ? `${ACCENT_COLOR} text-black border-transparent shadow-lg` : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'}`}>
                {time}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white transition flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1"/> Leistung ändern
            </button>
            <button onClick={() => setStep(3)} disabled={!selectedDate || !selectedTime} className={`py-3 px-8 rounded-xl font-bold ${selectedDate && selectedTime ? `${ACCENT_COLOR} text-black hover:opacity-90` : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>
              Weiter zu Details
            </button>
          </div>
        </>
      )}
    </>
  );

  const renderDetailsStep = () => (
    <>
      {renderProgress()}
      <h2 className="text-3xl font-bold mb-4 text-white">3. Details & Bestätigung</h2>
      <form onSubmit={handleBookingSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300">Dein Name <span className={ERROR_COLOR}>*</span></label>
          <input name="name" value={formData.name} onChange={handleDetailsChange} required placeholder="Max Musterman" className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 focus:border-[#a3e635] focus:ring-[#a3e635] text-white"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">E-Mail-Adresse <span className={ERROR_COLOR}>*</span></label>
          <input name="email" type="email" value={formData.email} onChange={handleDetailsChange} required placeholder="beispiel@gmail.com" className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 focus:border-[#a3e635] focus:ring-[#a3e635] text-white"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Telefonnummer (optional)</label>
          <input name="phone" value={formData.phone} onChange={handleDetailsChange} placeholder="z. B. +49 176 123 456 78" className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 focus:border-[#a3e635] focus:ring-[#a3e635] text-white"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Fahrzeugdetails <span className={ERROR_COLOR}>*</span></label>
          <textarea name="vehicle" rows={3} value={formData.vehicle} onChange={handleDetailsChange} required placeholder="Marke, Modell, Baujahr ..." className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 focus:border-[#a3e635] focus:ring-[#a3e635] text-white resize-none"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Nachricht (optional)</label>
          <textarea name="message" rows={4} value={formData.message} onChange={handleDetailsChange} placeholder="Hier kannst du uns noch etwas mitteilen ..." className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 focus:border-[#a3e635] focus:ring-[#a3e635] text-white"/>
        </div>
        {/*<div>
          <label className="block text-sm font-medium text-gray-300">Standort <span className={ERROR_COLOR}>*</span></label>
          <input name="location" value={formData.location} onChange={handleDetailsChange} required placeholder="Adresse und Stadt" className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 text-white focus:border-[#a3e635] focus:ring-[#a3e635]"/>
        </div>*/}
        <div>
          <label className="block text-sm font-medium text-gray-300">Standort <span className={ERROR_COLOR}>*</span></label>
          <AddressAutocompleteInput
            value={formData.location}
            onChange={(val) => setFormData(prev => ({ ...prev, location: val }))}
          />
        </div>


        {/* NEU: AGB Checkbox */}
        <div className="flex items-center space-x-3">
          <input type="checkbox" id="agbs" checked={agbsChecked} onChange={(e) => setAgbsChecked(e.target.checked)} className="w-4 h-4 accent-[#a3e635]" />
          <label htmlFor="agbs" className="text-gray-300 text-sm">
            Ich habe die <a href="/agb" className="underline hover:text-white">AGBs</a> und Datenschutzbestimmungen gelesen und akzeptiere sie. <span className={ERROR_COLOR}>*</span>
          </label>
        </div>

        <div className="flex justify-between pt-4">
          <button type="button" onClick={() => setStep(2)} className="text-gray-400 hover:text-white transition flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1"/> Datum/Uhrzeit ändern
          </button>
          {status === 'loading' ? (
            <button disabled className={`py-3 px-8 rounded-xl font-bold ${ACCENT_COLOR} text-black flex items-center`}>
              <Loader2 className="animate-spin mr-2 h-5 w-5"/> Senden...
            </button>
          ) : (
            <button type="submit" disabled={!agbsChecked} className={`py-3 px-8 rounded-xl font-bold ${ACCENT_COLOR} text-black hover:opacity-90 ${!agbsChecked ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Termin jetzt buchen
            </button>
          )}
        </div>
        {status === 'error' && <p className={`text-center ${ERROR_COLOR} font-medium`}>Bitte fülle alle Pflichtfelder aus oder die Buchung ist fehlgeschlagen.</p>}
      </form>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className={`text-sm tracking-widest uppercase font-bold ${TEXT_COLOR}`}>Terminbuchung</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2 mb-4 leading-tight">Jetzt mobilen Service buchen</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Wähle zuerst deine Leistung, dann den Wunschtermin!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 p-6 rounded-2xl bg-gray-800 shadow-xl border border-gray-700 h-fit lg:sticky lg:top-8">
            <h2 className="text-3xl font-bold mb-8 text-white">Glanzfluss Kontakt</h2>
            <ContactInfoItem icon={Phone} title="Telefon" content={<a href="tel:+4915258714502" className="hover:underline">+49 1525 8714502</a>} />
            <ContactInfoItem icon={Mail} title="E-Mail" content={<a href="mailto:kontakt@glanzfluss.de" className="hover:underline">kontakt@glanzfluss.de</a>} />
            <ContactInfoItem icon={Clock} title="Geschäftszeiten" content="Mo - Fr: 14:00 - 18:00 Uhr | Sa & So: 8:00 - 18:00 Uhr" />
            <ContactInfoItem icon={MapPin} title="Servicegebiet" content="25km+ rund um Warburg oder Vorort" />
          </div>

          <div className="lg:col-span-2 p-8 rounded-2xl bg-gray-800 shadow-xl border border-gray-700 min-h-[500px]">
            {status === 'success' ? (
              <div className="text-center py-20 space-y-6">
                <CheckCircle className={`h-24 w-24 ${TEXT_COLOR} mx-auto`} />
                <h2 className="text-4xl font-bold text-white">Vielen Dank!</h2>
                <p className="text-gray-400 text-lg max-w-md mx-auto">Deine Buchungsanfrage wurde erfolgreich versendet.</p>
                <button onClick={resetBooking} className={`mt-6 py-3 px-8 rounded-xl font-bold ${ACCENT_COLOR} text-black hover:opacity-90`}>
                  Erneut buchen
                </button>
              </div>
            ) : step === 1 ? renderServiceStep() : step === 2 ? renderCalendarStep() : renderDetailsStep()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
