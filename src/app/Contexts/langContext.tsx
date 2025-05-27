'use client'
import { createContext, ReactNode, useState } from "react";

interface LangProviderProps {
  children: ReactNode;
}

export const LangContext = createContext({
  lang: false,
  setLang: (lang: boolean) => {},
});

export const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = useState(false);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
