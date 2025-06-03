
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
    'hero.title.part1': 'The Smart Appointment System for',
    'hero.title.part2': 'Modern Pharmacies',
    'hero.subtitle': 'NovaFarm helps you automate bookings, improve customer service, and grow your pharmacy with ease.',
    'hero.cta': 'Book a Free Demo Call',
    
    // Features
    'features.title': 'Everything You Need to Manage Your Farm Business',
    'features.subtitle': 'From client management to automated workflows, NovaFarm provides all the tools you need to run a successful agricultural operation.',
    
    // Website Services Section
    'website.title': 'Professional Web Pages to Showcase Your Pharmacy\'s Services',
    'website.subtitle': 'We design up to 3 tailor-made web pages for your pharmacy, built to highlight your services, consultations, and contact options – all optimized to generate more leads and simplify online bookings.',
    'website.heading': 'Custom Web Pages',
    'website.description': 'Professional, conversion-optimized pages that work seamlessly with your existing website or as standalone landing pages for your pharmacy services.',
    'website.includes': 'Each package includes:',
    'website.feature1': 'Up to 3 custom-built landing pages',
    'website.feature2': 'Contact form for lead acquisition',
    'website.feature3': 'Integrated live chat',
    'website.feature4': 'Hosting, maintenance, and updates included',
    'website.feature5': 'Can be linked to your existing website',
    'website.existing': 'Already have a website?',
    'website.existingDesc': 'No problem – these pages can be linked directly to it',
    
    // Omnichannel Section
    'omnichannel.title': 'Talk to Your Clients Where They Are',
    'omnichannel.messaging': 'Integrated Messaging',
    'omnichannel.messagingDesc': 'Connect across Facebook, Instagram, Email, and SMS',
    'omnichannel.inbox': 'Centralized Chat Inbox',
    'omnichannel.inboxDesc': 'All conversations in one simple app',
    'omnichannel.notifications': 'Real-time Notifications',
    'omnichannel.notificationsDesc': 'Never miss a customer message again',
    'omnichannel.improve': 'Improve your customer support and retention with seamless communication.',
    'omnichannel.cta': 'Book a Call',
    
    // Reliability Section
    'reliability.title': 'Your Trusted Digital Assistant',
    'reliability.uptime': '99.9% Uptime',
    'reliability.uptimeDesc': 'Reliable cloud infrastructure',
    'reliability.support24': '24/7',
    'reliability.supportDesc': 'Support Available',
    'reliability.pharmacies': '500+',
    'reliability.pharmaciesDesc': 'Happy Pharmacies',
    'reliability.encryption': 'Secure data encryption',
    'reliability.gdpr': 'GDPR compliant',
    'reliability.backups': 'Regular backups',
    'reliability.supportWeek': '7-day Support',
    'reliability.supportWeekDesc': 'Get help via chat and email whenever you need it',
    'reliability.secure': 'Stable & Secure',
    'reliability.secureDesc': 'Cloud infrastructure you can trust',
    'reliability.onboarding': 'Easy Onboarding',
    'reliability.onboardingDesc': 'Initial setup and video tutorials included',
    'reliability.scalable': 'Scalable Solution',
    'reliability.scalableDesc': 'From solo pharmacists to large teams',
    'reliability.cta': 'Book a Call',
    
    // Pricing
    'pricing.title': 'Simple Plans. Powerful Results.',
    'pricing.subtitle': 'Choose the plan that fits your pharmacy\'s needs and start growing today.',
    'pricing.monthly': 'Monthly',
    'pricing.annual': 'Annual',
    'pricing.save': '💡 Save 17% with annual billing',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.bestValue': 'Best Value',
    'pricing.savePercent': 'Save 17%',
    'pricing.month': '/month + VAT',
    'pricing.monthAnnual': '+ VAT / month',
    'pricing.promo': 'PROMO',
    'pricing.setup': 'Setup fee:',
    'pricing.oneTime': '(one-time)',
    'pricing.feature1': 'Smart appointment calendar',
    'pricing.feature2': 'Automated follow-ups',
    'pricing.feature3': 'Review request system',
    'pricing.feature4': 'All-in-one app',
    'pricing.feature5': 'Email support',
    'pricing.feature6': '1 basic landing page included',
    'pricing.feature7': 'Hosting, maintenance & updates included',
    'pricing.feature8': 'Everything in Starter',
    'pricing.feature9': 'Full omnichannel messaging',
    'pricing.feature10': 'Accept payments before appointments',
    'pricing.feature11': 'Advanced analytics and reporting',
    'pricing.feature12': '7/7 premium support',
    'pricing.feature13': 'Up to 3 landing pages included',
    'pricing.cta': 'Book a Call',
    'pricing.custom': 'Need a custom solution for your pharmacy network?',
    'pricing.enterprise': 'Contact us for enterprise pricing',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Join hundreds of satisfied pharmacy owners who trust NovaFarm',
    'testimonials.rating': 'from 200+ reviews',
    'testimonials.1.name': 'Marco R.',
    'testimonials.1.role': 'Pharmacy Owner',
    'testimonials.1.content': 'NovaFarm transformed our appointment system. No more calls, just results.',
    'testimonials.2.name': 'Silvia T.',
    'testimonials.2.role': 'Pharmacist',
    'testimonials.2.content': 'The review follow-ups helped us get over 50 new Google reviews in 2 months.',
    'testimonials.3.name': 'Giuseppe M.',
    'testimonials.3.role': 'Para-pharmacy Manager',
    'testimonials.3.content': 'Finally, a system that actually works for our team. Simple and effective.',
    'testimonials.4.name': 'Francesca L.',
    'testimonials.4.role': 'Pharmacy Director',
    'testimonials.4.content': 'Customer satisfaction increased by 40% since we started using NovaFarm.',
    
    // Exit Intent Popup
    'exitIntent.title': 'Wait! Don\'t miss your',
    'exitIntent.titleHighlight': 'free demo!',
    'exitIntent.description': 'Discover how NovaFarm can save you hours, increase your bookings, and automate your operations — and it\'s free to try!',
    'exitIntent.benefit1': 'Smart appointment management',
    'exitIntent.benefit2': 'Instant client follow-ups',
    'exitIntent.benefit3': 'Automated workflows to save you time',
    'exitIntent.formTitle': 'Book Your Free Demo Now',
    'exitIntent.firstName': 'First Name',
    'exitIntent.lastName': 'Last Name',
    'exitIntent.email': 'Email Address',
    'exitIntent.vatNumber': 'Company VAT Number',
    'exitIntent.usagePlan': 'How do you plan to use NovaFarm?',
    'exitIntent.problemToSolve': 'What do you hope NovaFarm will help you solve?',
    'exitIntent.cta': 'Book My Free Demo',
    'exitIntent.firstNamePlaceholder': 'Mario',
    'exitIntent.lastNamePlaceholder': 'Rossi',
    'exitIntent.emailPlaceholder': 'mario.rossi@farmacia.it',
    'exitIntent.vatPlaceholder': 'IT12345678901',
    'exitIntent.usageOption1': 'For appointment booking only',
    'exitIntent.usageOption2': 'For marketing and reviews',
    'exitIntent.usageOption3': 'To centralize all pharmacy operations',
    'exitIntent.usageOption4': 'Not sure yet',
    'exitIntent.problemOption1': 'Reduce phone calls for appointments',
    'exitIntent.problemOption2': 'Get more customer reviews',
    'exitIntent.problemOption3': 'Automate follow-ups and reminders',
    'exitIntent.problemOption4': 'Simplify team communication',
    'exitIntent.problemOption5': 'Other',
    'exitIntent.selectOption': 'Select an option',
    'exitIntent.firstNameRequired': 'First name is required',
    'exitIntent.lastNameRequired': 'Last name is required',
    'exitIntent.emailRequired': 'Email is required',
    'exitIntent.emailInvalid': 'Invalid email address',
    'exitIntent.vatRequired': 'VAT Number is required',
    'exitIntent.usageRequired': 'Please select how you plan to use NovaFarm',
    'exitIntent.problemRequired': 'Please select what problem you\'re hoping to solve',
    
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
    'hero.title.part1': 'Il Sistema di Prenotazioni Intelligente per',
    'hero.title.part2': 'Farmacie Moderne',
    'hero.subtitle': 'NovaFarm ti aiuta ad automatizzare le prenotazioni, migliorare il servizio clienti e far crescere la tua farmacia con facilità.',
    'hero.cta': 'Prenota Demo Gratuita',
    
    // Features
    'features.title': 'Tutto Quello che Ti Serve per Gestire la Tua Azienda Agricola',
    'features.subtitle': 'Dalla gestione dei clienti ai flussi di lavoro automatizzati, NovaFarm fornisce tutti gli strumenti necessari per gestire un\'operazione agricola di successo.',
    
    // Website Services Section
    'website.title': 'Pagine Web Professionali per Valorizzare i Servizi della Tua Farmacia',
    'website.subtitle': 'Progettiamo fino a 3 pagine web su misura per la tua farmacia, create per evidenziare i tuoi servizi, consulenze e opzioni di contatto – tutto ottimizzato per generare più contatti e semplificare le prenotazioni online.',
    'website.heading': 'Pagine Web Personalizzate',
    'website.description': 'Pagine professionali e ottimizzate per le conversioni che funzionano perfettamente con il tuo sito web esistente o come landing page autonome per i servizi della tua farmacia.',
    'website.includes': 'Ogni pacchetto include:',
    'website.feature1': 'Fino a 3 landing page personalizzate',
    'website.feature2': 'Modulo di contatto per acquisizione lead',
    'website.feature3': 'Chat live integrata',
    'website.feature4': 'Hosting, manutenzione e aggiornamenti inclusi',
    'website.feature5': 'Può essere collegato al tuo sito web esistente',
    'website.existing': 'Hai già un sito web?',
    'website.existingDesc': 'Nessun problema – queste pagine possono essere collegate direttamente ad esso',
    
    // Omnichannel Section
    'omnichannel.title': 'Parla con i Tuoi Clienti Dove Si Trovano',
    'omnichannel.messaging': 'Messaggistica Integrata',
    'omnichannel.messagingDesc': 'Connettiti tramite Facebook, Instagram, Email e SMS',
    'omnichannel.inbox': 'Inbox Chat Centralizzata',
    'omnichannel.inboxDesc': 'Tutte le conversazioni in una semplice app',
    'omnichannel.notifications': 'Notifiche in Tempo Reale',
    'omnichannel.notificationsDesc': 'Non perdere mai più un messaggio del cliente',
    'omnichannel.improve': 'Migliora il supporto clienti e la fidelizzazione con una comunicazione fluida.',
    'omnichannel.cta': 'Prenota Chiamata',
    
    // Reliability Section
    'reliability.title': 'Il Tuo Assistente Digitale di Fiducia',
    'reliability.uptime': '99,9% Uptime',
    'reliability.uptimeDesc': 'Infrastruttura cloud affidabile',
    'reliability.support24': '24/7',
    'reliability.supportDesc': 'Supporto Disponibile',
    'reliability.pharmacies': '500+',
    'reliability.pharmaciesDesc': 'Farmacie Soddisfatte',
    'reliability.encryption': 'Crittografia sicura dei dati',
    'reliability.gdpr': 'Conforme GDPR',
    'reliability.backups': 'Backup regolari',
    'reliability.supportWeek': 'Supporto 7 giorni',
    'reliability.supportWeekDesc': 'Ricevi aiuto via chat ed email quando ne hai bisogno',
    'reliability.secure': 'Stabile e Sicuro',
    'reliability.secureDesc': 'Infrastruttura cloud di cui puoi fidarti',
    'reliability.onboarding': 'Onboarding Facile',
    'reliability.onboardingDesc': 'Configurazione iniziale e video tutorial inclusi',
    'reliability.scalable': 'Soluzione Scalabile',
    'reliability.scalableDesc': 'Da farmacisti singoli a grandi team',
    'reliability.cta': 'Prenota Chiamata',
    
    // Pricing
    'pricing.title': 'Piani Semplici. Risultati Potenti.',
    'pricing.subtitle': 'Scegli il piano che si adatta alle esigenze della tua farmacia e inizia a crescere oggi.',
    'pricing.monthly': 'Mensile',
    'pricing.annual': 'Annuale',
    'pricing.save': '💡 Risparmia il 17% con la fatturazione annuale',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.bestValue': 'Miglior Rapporto',
    'pricing.savePercent': 'Risparmia 17%',
    'pricing.month': '/mese + IVA',
    'pricing.monthAnnual': '+ IVA / mese',
    'pricing.promo': 'PROMO',
    'pricing.setup': 'Costo di configurazione:',
    'pricing.oneTime': '(una tantum)',
    'pricing.feature1': 'Calendario appuntamenti intelligente',
    'pricing.feature2': 'Follow-up automatizzati',
    'pricing.feature3': 'Sistema richiesta recensioni',
    'pricing.feature4': 'App tutto-in-uno',
    'pricing.feature5': 'Supporto email',
    'pricing.feature6': '1 landing page base inclusa',
    'pricing.feature7': 'Hosting, manutenzione e aggiornamenti inclusi',
    'pricing.feature8': 'Tutto incluso in Starter',
    'pricing.feature9': 'Messaggistica omnicanale completa',
    'pricing.feature10': 'Accetta pagamenti prima degli appuntamenti',
    'pricing.feature11': 'Analytics e reportistica avanzati',
    'pricing.feature12': 'Supporto premium 7/7',
    'pricing.feature13': 'Fino a 3 landing page incluse',
    'pricing.cta': 'Prenota Chiamata',
    'pricing.custom': 'Hai bisogno di una soluzione personalizzata per la tua rete di farmacie?',
    'pricing.enterprise': 'Contattaci per prezzi enterprise',
    
    // Testimonials
    'testimonials.title': 'Cosa Dicono i Nostri Clienti',
    'testimonials.subtitle': 'Unisciti a centinaia di proprietari di farmacie soddisfatti che si fidano di NovaFarm',
    'testimonials.rating': 'da oltre 200 recensioni',
    'testimonials.1.name': 'Marco R.',
    'testimonials.1.role': 'Proprietario Farmacia',
    'testimonials.1.content': 'NovaFarm ha trasformato il nostro sistema di appuntamenti. Niente più telefonate, solo risultati.',
    'testimonials.2.name': 'Silvia T.',
    'testimonials.2.role': 'Farmacista',
    'testimonials.2.content': 'I follow-up per le recensioni ci hanno aiutato ad ottenere oltre 50 nuove recensioni Google in 2 mesi.',
    'testimonials.3.name': 'Giuseppe M.',
    'testimonials.3.role': 'Manager Para-farmacia',
    'testimonials.3.content': 'Finalmente un sistema che funziona davvero per il nostro team. Semplice ed efficace.',
    'testimonials.4.name': 'Francesca L.',
    'testimonials.4.role': 'Direttore Farmacia',
    'testimonials.4.content': 'La soddisfazione del cliente è aumentata del 40% da quando usiamo NovaFarm.',
    
    // Exit Intent Popup
    'exitIntent.title': 'Aspetta! Non perdere la tua',
    'exitIntent.titleHighlight': 'demo gratuita!',
    'exitIntent.description': 'Scopri come NovaFarm può farti risparmiare ore, aumentare le tue prenotazioni e automatizzare le tue operazioni — ed è gratuito da provare!',
    'exitIntent.benefit1': 'Gestione appuntamenti intelligente',
    'exitIntent.benefit2': 'Follow-up istantanei dei clienti',
    'exitIntent.benefit3': 'Flussi di lavoro automatizzati per farti risparmiare tempo',
    'exitIntent.formTitle': 'Prenota la Tua Demo Gratuita Ora',
    'exitIntent.firstName': 'Nome',
    'exitIntent.lastName': 'Cognome',
    'exitIntent.email': 'Indirizzo Email',
    'exitIntent.vatNumber': 'Partita IVA Aziendale',
    'exitIntent.usagePlan': 'Come intendi utilizzare NovaFarm?',
    'exitIntent.problemToSolve': 'Cosa speri che NovaFarm ti aiuti a risolvere?',
    'exitIntent.cta': 'Prenota la Mia Demo Gratuita',
    'exitIntent.firstNamePlaceholder': 'Mario',
    'exitIntent.lastNamePlaceholder': 'Rossi',
    'exitIntent.emailPlaceholder': 'mario.rossi@farmacia.it',
    'exitIntent.vatPlaceholder': 'IT12345678901',
    'exitIntent.usageOption1': 'Solo per prenotazioni appuntamenti',
    'exitIntent.usageOption2': 'Per marketing e recensioni',
    'exitIntent.usageOption3': 'Per centralizzare tutte le operazioni della farmacia',
    'exitIntent.usageOption4': 'Non sono ancora sicuro',
    'exitIntent.problemOption1': 'Ridurre le telefonate per gli appuntamenti',
    'exitIntent.problemOption2': 'Ottenere più recensioni clienti',
    'exitIntent.problemOption3': 'Automatizzare follow-up e promemoria',
    'exitIntent.problemOption4': 'Semplificare la comunicazione del team',
    'exitIntent.problemOption5': 'Altro',
    'exitIntent.selectOption': 'Seleziona un\'opzione',
    'exitIntent.firstNameRequired': 'Il nome è obbligatorio',
    'exitIntent.lastNameRequired': 'Il cognome è obbligatorio',
    'exitIntent.emailRequired': 'L\'email è obbligatoria',
    'exitIntent.emailInvalid': 'Indirizzo email non valido',
    'exitIntent.vatRequired': 'La Partita IVA è obbligatoria',
    'exitIntent.usageRequired': 'Seleziona come intendi utilizzare NovaFarm',
    'exitIntent.problemRequired': 'Seleziona quale problema speri di risolvere',
    
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
