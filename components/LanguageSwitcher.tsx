'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-bold tracking-wider transition-all rounded ${
          language === 'en'
            ? 'bg-white text-black'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-2 py-1 text-xs font-bold tracking-wider transition-all rounded ${
          language === 'fr'
            ? 'bg-white text-black'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Changer en français"
      >
        FR
      </button>
    </div>
  );
}
