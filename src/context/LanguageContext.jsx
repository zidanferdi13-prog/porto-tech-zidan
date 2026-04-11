import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

function readInitialLanguage() {
  if (typeof window === "undefined") {
    return "id";
  }

  const stored = window.localStorage.getItem("portfolio-lang");
  if (stored === "id" || stored === "en") {
    return stored;
  }

  return "id";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      isId: lang === "id",
      setLang,
      toggleLang: () => setLang((prev) => (prev === "id" ? "en" : "id"))
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
