import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Language } from '@/types';
import { defaultLanguage, getTranslation } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vikas-language') as Language | null;
      if (saved && (saved === 'en' || saved === 'hi')) return saved;
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('hi')) return 'hi';
    }
    return defaultLanguage;
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.documentElement.lang = language;
    localStorage.setItem('vikas-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string) => getTranslation(language, key);

  if (!isClient) {
    return (
      <I18nContext.Provider value={{ language: defaultLanguage, setLanguage: () => {}, t: (k: string) => getTranslation(defaultLanguage, k), isRTL: false }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isRTL: false }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
