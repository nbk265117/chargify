import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRTL } from '../hooks/useRTL';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { isRTL } = useRTL();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className="text-lg">
          {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
        </span>
        <span className="hidden md:block text-sm font-medium">
          {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
        </span>
        <svg className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`absolute mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${isRTL ? 'left-0' : 'right-0'}`}>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${
              i18n.language === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
            } ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm font-medium">{language.name}</span>
            {i18n.language === language.code && (
              <svg className={`w-4 h-4 text-primary-600 ${isRTL ? 'mr-auto' : 'ml-auto'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
