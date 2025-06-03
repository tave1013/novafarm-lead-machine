
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Book a Call',
    
    // Hero Section
    'hero.title': 'Automate Your Farm Business with NovaFarm',
    'hero.subtitle': 'Streamline appointments, manage clients, and grow your agricultural business with our all-in-one platform designed specifically for modern farmers.',
    'hero.cta': 'Start Free Trial',
    'hero.demo': 'Book Demo',
    
    // Features
    'features.title': 'Everything You Need to Manage Your Farm Business',
    'features.subtitle': 'From client management to automated workflows, NovaFarm provides all the tools you need to run a successful agricultural operation.',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your farm size and needs',
    
    // Footer
    'footer.company': 'NovaFarm',
    'footer.description': 'Streamlining farm management for the modern agricultural business.',
    'footer.rights': 'All rights reserved.',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Funzionalità',
    'nav.pricing': 'Prezzi',
    'nav.testimonials': 'Testimonianze',
    'nav.contact': 'Contatti',
    'nav.bookDemo': 'Prenota Chiamata',
    
    // Hero Section
    'hero.title': 'Automatizza la Tua Azienda Agricola con NovaFarm',
    'hero.subtitle': 'Ottimizza gli appuntamenti, gestisci i clienti e fai crescere la tua attività agricola con la nostra piattaforma all-in-one progettata specificamente per gli agricoltori moderni.',
    'hero.cta': 'Inizia Prova Gratuita',
    'hero.demo': 'Prenota Demo',
    
    // Features
    'features.title': 'Tutto Quello che Ti Serve per Gestire la Tua Azienda Agricola',
    'features.subtitle': 'Dalla gestione dei clienti ai flussi di lavoro automatizzati, NovaFarm fornisce tutti gli strumenti necessari per gestire un\'operazione agricola di successo.',
    
    // Pricing
    'pricing.title': 'Prezzi Semplici e Trasparenti',
    'pricing.subtitle': 'Scegli il piano che si adatta alle dimensioni e alle esigenze della tua azienda agricola',
    
    // Footer
    'footer.company': 'NovaFarm',
    'footer.description': 'Semplifichiamo la gestione aziendale per l\'agricoltura moderna.',
    'footer.rights': 'Tutti i diritti riservati.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
