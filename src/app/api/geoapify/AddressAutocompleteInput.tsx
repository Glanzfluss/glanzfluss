"use client";

import React, { useState, useEffect, useRef } from "react";

interface AddressAutocompleteInputProps {
  value: string;
  onChange: (value: string) => void;
}

const AddressAutocompleteInput: React.FC<AddressAutocompleteInputProps> = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const cacheRef = useRef<{ [key: string]: any[] }>({}); // Cache für bereits abgefragte Eingaben

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!value || value.length < 3) {
        setSuggestions([]);
        return;
      }

      if (cacheRef.current[value]) {
        setSuggestions(cacheRef.current[value]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
            value
          )}&limit=5&lang=de&country=de&apiKey=${API_KEY}`
        );
        const data = await response.json();

        if (data.features) {
          // Keine Filterung auf city/street, einfach alle Features mit 'formatted' nutzen
          const validAddresses = data.features.filter(
            (f: any) => f.properties && f.properties.formatted
          );
          setSuggestions(validAddresses);
          cacheRef.current[value] = validAddresses; // Cache aktualisieren
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Geoapify error:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 500); // längeres Debounce, weniger Credits
    return () => clearTimeout(timeoutId);
  }, [value, API_KEY]);

  const handleSelect = (formattedAddress: string) => {
    onChange(formattedAddress);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder="z.B. Paderborner Tor 12, 34414 Warburg, Deutschland"
        required
        className="mt-1 block w-full px-4 py-3 rounded-xl bg-gray-700 border-gray-600 text-white
                   focus:border-lime-400 focus:ring-lime-400"
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSelect(s.properties.formatted)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-gray-200"
            >
              {s.properties.formatted}
            </li>
          ))}
        </ul>
      )}

      {loading && (
        <p className="text-sm text-gray-400 mt-1">Lade Vorschläge...</p>
      )}
    </div>
  );
};

export default AddressAutocompleteInput;
