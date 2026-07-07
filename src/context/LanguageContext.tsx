import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return (saved === "en" || saved === "id") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  // Common UI Translations
  const translations: Record<string, Record<Language, string>> = {
    "nav.home": { en: "Home", id: "Beranda" },
    "nav.about": { en: "About", id: "Tentang" },
    "nav.skills": { en: "Skills", id: "Keahlian" },
    "nav.projects": { en: "Projects", id: "Proyek" },
    "nav.experience": { en: "Timeline", id: "Pengalaman" },
    "nav.services": { en: "Services", id: "Layanan" },
    "nav.contact": { en: "Contact", id: "Kontak" },
    "nav.downloadCv": { en: "Download CV", id: "Unduh CV" },
    "nav.systemOnline": { en: "SYSTEM ONLINE", id: "SISTEM ONLINE" },
    "nav.edgeNodes": { en: "Edge Nodes", id: "Node Edge" },
    "nav.active": { en: "active", id: "aktif" },
    "nav.uptime": { en: "Uptime", id: "Waktu Aktif" },
    "nav.brokerLink": { en: "Broker Link", id: "Hubungan Broker" },
    "nav.secure": { en: "Secure", id: "Aman" },
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
