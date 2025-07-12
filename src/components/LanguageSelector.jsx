import { useState, useEffect } from 'react';
import { getCurrentLanguage, updateContent } from '../content';

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'ar', name: 'AR', flag: '🇩🇿' }
  ];

  useEffect(() => {
    // Initialize language on component mount
    updateContent(currentLang);
  }, []);

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    updateContent(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-xs font-medium text-white">{currentLanguage?.name}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors duration-200 flex items-center gap-2 ${
                currentLang === lang.code ? 'bg-white/20' : ''
              }`}
            >
              <span className="text-sm">{lang.flag}</span>
              <span className="text-xs font-medium text-white">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 