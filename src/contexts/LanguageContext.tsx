
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'de';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Define translation objects
export const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Innovate with Purpose',
    'hero.title': 'Build Scalable Software\nThat Drives Growth',
    'hero.subtitle': 'From concept to deployment, We deliver custom software solutions tailored to your business. Let\'s talk.',
    'hero.cta.contact': 'Get in Touch',
    'hero.cta.portfolio': 'View Portfolio',
    
    // Projects
    'projects.badge': 'Our Work',
    'projects.title': 'Recent Projects',
    'projects.subtitle': 'Check out some of our recent projects and see the impact we deliver.',
    'projects.tab.startup': 'Startup Projects',
    'projects.tab.individual': 'Individual Projects',
    'projects.viewLive': 'View Live',
    'projects.viewSource': 'Source Code',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Solutions We Provide',
    'services.subtitle': 'Unlock your business\'s potential with tailored digital solutions that drive growth and impact.',
    
    // Service items are dynamic, we'll handle those separately
    'service.website.title': 'Custom Website Development',
    'service.website.description': 'Sleek, high-performance websites built for freelancers and small businesses.',
    'service.website.feature1': 'Custom Design',
    'service.website.feature2': 'SEO-Friendly',
    'service.website.feature3': 'Mobile Responsive',
    
    'service.startup.title': 'Startup Software Solutions',
    'service.startup.description': 'End-to-end software to help startups scale and succeed.',
    'service.startup.feature1': 'MVP Development',
    'service.startup.feature2': 'Scalable Architecture',
    'service.startup.feature3': 'Third-Party Integrations',
    
    'service.mobile.title': 'Mobile App Development',
    'service.mobile.description': 'Cross-platform mobile applications for iOS and Android devices.',
    'service.mobile.feature1': 'Native Performance',
    'service.mobile.feature2': 'Offline Capability',
    'service.mobile.feature3': 'Push Notifications',
    
    'service.consultation.title': 'Technical Consultation & Strategy',
    'service.consultation.description': 'Expert guidance to navigate tech choices and fuel your growth.',
    'service.consultation.feature1': 'Market Research',
    'service.consultation.feature2': 'Tech Stack Selection',
    'service.consultation.feature3': 'Growth Planning',
    
    'service.branding.title': 'Branding & Digital Identity',
    'service.branding.description': 'Standout branding that defines your place in the market.',
    'service.branding.feature1': 'Logo & Visual Design',
    'service.branding.feature2': 'Brand Guidelines',
    'service.branding.feature3': 'Consistent Digital Presence',
    
    // Team
    'team.badge': 'Our Team',
    'team.title': 'Meet the Experts',
    'team.subtitle': 'Our talented team of professionals is dedicated to delivering exceptional results.',
    
    // Contact
    'contact.badge': 'Get in Touch',
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Have a project in mind? We\'d love to hear from you. Get in touch with us.',
    'contact.name': 'Name',
    'contact.name.placeholder': 'Your name',
    'contact.email': 'Email',
    'contact.email.placeholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subject.placeholder': 'How can we help?',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Tell us about your project...',
    'contact.button.send': 'Send Message',
    'contact.form.instructions': 'Fill out the form below to send us a message. All fields are required.',
    
    // Footer
    'footer.copyright': '© {year} Innovate IQ. All rights reserved.',
    
    // Language switcher
    'language.en': 'English',
    'language.de': 'German',
  },
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.projects': 'Projekte',
    'nav.services': 'Dienstleistungen',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.badge': 'Innovieren mit Zweck',
    'hero.title': 'Skalierbare Software entwickeln\ndie Wachstum fördert',
    'hero.subtitle': 'Von der Idee bis zur Bereitstellung liefern wir maßgeschneiderte Softwarelösungen für Ihr Unternehmen. Sprechen wir darüber.',
    'hero.cta.contact': 'Kontakt aufnehmen',
    'hero.cta.portfolio': 'Portfolio ansehen',
    
    // Projects
    'projects.badge': 'Unsere Arbeit',
    'projects.title': 'Aktuelle Projekte',
    'projects.subtitle': 'Sehen Sie sich einige unserer aktuellen Projekte an und erleben Sie die Wirkung, die wir erzielen.',
    'projects.tab.startup': 'Startup-Projekte',
    'projects.tab.individual': 'Individuelle Projekte',
    'projects.viewLive': 'Live ansehen',
    'projects.viewSource': 'Quellcode',
    
    // Services
    'services.badge': 'Unsere Dienstleistungen',
    'services.title': 'Lösungen, die wir anbieten',
    'services.subtitle': 'Erschließen Sie das Potenzial Ihres Unternehmens mit maßgeschneiderten digitalen Lösungen, die Wachstum und Wirkung fördern.',
    
    // Service items 
    'service.website.title': 'Individuelle Website-Entwicklung',
    'service.website.description': 'Elegante, leistungsstarke Websites für Freiberufler und kleine Unternehmen.',
    'service.website.feature1': 'Individuelles Design',
    'service.website.feature2': 'SEO-freundlich',
    'service.website.feature3': 'Mobilgeräte-optimiert',
    
    'service.startup.title': 'Startup-Softwarelösungen',
    'service.startup.description': 'End-to-End-Software, die Startups beim Wachstum und Erfolg unterstützt.',
    'service.startup.feature1': 'MVP-Entwicklung',
    'service.startup.feature2': 'Skalierbare Architektur',
    'service.startup.feature3': 'Drittanbieter-Integrationen',
    
    'service.mobile.title': 'Mobile App-Entwicklung',
    'service.mobile.description': 'Plattformübergreifende mobile Anwendungen für iOS- und Android-Geräte.',
    'service.mobile.feature1': 'Native Leistung',
    'service.mobile.feature2': 'Offline-Fähigkeit',
    'service.mobile.feature3': 'Push-Benachrichtigungen',
    
    'service.consultation.title': 'Technische Beratung & Strategie',
    'service.consultation.description': 'Expertenhilfe bei der Navigation durch technische Entscheidungen und zur Förderung Ihres Wachstums.',
    'service.consultation.feature1': 'Marktforschung',
    'service.consultation.feature2': 'Tech-Stack-Auswahl',
    'service.consultation.feature3': 'Wachstumsplanung',
    
    'service.branding.title': 'Branding & Digitale Identität',
    'service.branding.description': 'Herausragendes Branding, das Ihre Position im Markt definiert.',
    'service.branding.feature1': 'Logo & Visuelles Design',
    'service.branding.feature2': 'Markenrichtlinien',
    'service.branding.feature3': 'Konsistente digitale Präsenz',
    
    // Team
    'team.badge': 'Unser Team',
    'team.title': 'Lernen Sie die Experten kennen',
    'team.subtitle': 'Unser talentiertes Team von Fachleuten ist engagiert, außergewöhnliche Ergebnisse zu liefern.',
    
    // Contact
    'contact.badge': 'Kontakt aufnehmen',
    'contact.title': 'Lassen Sie uns zusammenarbeiten',
    'contact.subtitle': 'Haben Sie ein Projekt im Sinn? Wir würden gerne von Ihnen hören. Nehmen Sie Kontakt mit uns auf.',
    'contact.name': 'Name',
    'contact.name.placeholder': 'Ihr Name',
    'contact.email': 'E-Mail',
    'contact.email.placeholder': 'ihre@email.com',
    'contact.subject': 'Betreff',
    'contact.subject.placeholder': 'Wie können wir helfen?',
    'contact.message': 'Nachricht',
    'contact.message.placeholder': 'Erzählen Sie uns von Ihrem Projekt...',
    'contact.button.send': 'Nachricht senden',
    'contact.form.instructions': 'Füllen Sie das Formular aus, um uns eine Nachricht zu senden. Alle Felder sind erforderlich.',
    
    // Footer
    'footer.copyright': '© {year} Innovate IQ. Alle Rechte vorbehalten.',
    
    // Language switcher
    'language.en': 'Englisch',
    'language.de': 'Deutsch',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get browser language or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang === 'de') ? 'de' : 'en';
  };

  // Initialize with browser language or stored preference
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('language') as Language) || getBrowserLanguage()
  );

  // Save language preference when it changes
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Translation function
  const translate = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (translation === undefined) {
      console.warn(`Translation key "${key}" not found in ${language} translations`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
