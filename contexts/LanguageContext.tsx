'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.home': 'HOME',
    'header.menu': 'MENU',
    'header.about': 'ABOUT',
    'header.reservations': 'RESERVATIONS',
    'header.gallery': 'GALLERY',
    'header.contact': 'CONTACT',
    'header.bookNow': 'BOOK NOW',

    // Home Page
    'home.hero.tagline': 'BANFF\'S BEST PIZZA & CRAFT BEER',
    'home.hero.welcome': 'WELCOME TO',
    'home.hero.reserve': 'RESERVE YOUR TABLE',
    'home.hero.orderOnline': 'ORDER ONLINE',

    // Featured Pizzas
    'home.pizzas.title': 'FEATURED PIZZAS',
    'home.pizzas.subtitle': 'Oven-Baked to Perfection',
    'home.pizzas.viewMenu': 'VIEW FULL MENU',

    // Specials
    'home.specials.title': 'ESPECIALES DE LOCURA',
    'home.specials.subtitle': 'Limited Time Offers',

    // Highlights
    'home.highlights.title': 'WHY VISIT US',
    'home.highlights.petFriendly': '100% PET-FRIENDLY',
    'home.highlights.petDesc': 'Year-round heated patio with special menu for dogs!',
    'home.highlights.craftBeers': 'CRAFT BEERS & DRINKS',
    'home.highlights.craftDesc': 'Exclusive brews from Three Bears Brewery',
    'home.highlights.specials': 'ESPECIALES DE LOCURA',
    'home.highlights.specialsDesc': '50% OFF select pizzas Sun & Mon from 5pm',

    // Footer
    'footer.newsletter': 'STAY UPDATED',
    'footer.newsletterDesc': 'GET EXCLUSIVE DEALS & SPECIAL OFFERS',
    'footer.subscribe': 'SUBSCRIBE',
    'footer.email': 'YOUR EMAIL',
    'footer.hours': 'Daily 11:30AM-9PM',
    'footer.followUs': 'FOLLOW US',
    'footer.copyright': 'BEAR STREET TAVERN',
    'footer.accessibility': 'ACCESSIBILITY',
    'footer.privacy': 'PRIVACY',
    'footer.terms': 'TERMS',
  },
  fr: {
    // Header
    'header.home': 'ACCUEIL',
    'header.menu': 'MENU',
    'header.about': 'À PROPOS',
    'header.reservations': 'RÉSERVATIONS',
    'header.gallery': 'GALERIE',
    'header.contact': 'CONTACT',
    'header.bookNow': 'RÉSERVER',

    // Home Page
    'home.hero.tagline': 'MEILLEURE PIZZA ET BIÈRE ARTISANALE DE BANFF',
    'home.hero.welcome': 'BIENVENUE À',
    'home.hero.reserve': 'RÉSERVER VOTRE TABLE',
    'home.hero.orderOnline': 'COMMANDER EN LIGNE',

    // Featured Pizzas
    'home.pizzas.title': 'PIZZAS VEDETTES',
    'home.pizzas.subtitle': 'Cuites au four à la perfection',
    'home.pizzas.viewMenu': 'VOIR LE MENU COMPLET',

    // Specials
    'home.specials.title': 'SPÉCIAUX DE FOLIE',
    'home.specials.subtitle': 'Offres à durée limitée',

    // Highlights
    'home.highlights.title': 'POURQUOI NOUS VISITER',
    'home.highlights.petFriendly': '100% ACCUEILLANT POUR LES ANIMAUX',
    'home.highlights.petDesc': 'Terrasse chauffée toute l\'année avec menu spécial pour chiens!',
    'home.highlights.craftBeers': 'BIÈRES ET BOISSONS ARTISANALES',
    'home.highlights.craftDesc': 'Bières exclusives de Three Bears Brewery',
    'home.highlights.specials': 'SPÉCIAUX DE FOLIE',
    'home.highlights.specialsDesc': '50% DE RABAIS sur certaines pizzas dim. et lun. dès 17h',

    // Footer
    'footer.newsletter': 'RESTEZ INFORMÉ',
    'footer.newsletterDesc': 'RECEVEZ DES OFFRES EXCLUSIVES',
    'footer.subscribe': 'S\'ABONNER',
    'footer.email': 'VOTRE COURRIEL',
    'footer.hours': 'Tous les jours 11h30-21h',
    'footer.followUs': 'SUIVEZ-NOUS',
    'footer.copyright': 'BEAR STREET TAVERN',
    'footer.accessibility': 'ACCESSIBILITÉ',
    'footer.privacy': 'CONFIDENTIALITÉ',
    'footer.terms': 'CONDITIONS',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
