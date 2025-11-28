import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations["EN"];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  const value = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === "AR" ? "rtl" : "ltr" as "ltr" | "rtl",
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.dir} className={value.dir === "rtl" ? "font-sans" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
