"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import en from "./en.json";
import es from "./es.json";

export type Lang = "en" | "es";

const dicts = { en, es } as const;

export type Dict = typeof en;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "es") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  return (
    <MotionConfig reducedMotion="user">
      <LanguageContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
        {children}
      </LanguageContext.Provider>
    </MotionConfig>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
