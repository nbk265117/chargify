import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getSavedLanguage, getDefaultLanguage, isSupportedLanguage } from './utils/languageUtils';

// Import des traductions
import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';

const resources = {
  fr: {
    translation: fr
  },
  en: {
    translation: en
  },
  ar: {
    translation: ar
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupCookie: 'i18nextLng',
      lookupQuerystring: 'lng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },

    react: {
      useSuspense: false,
    },

    // Configuration pour le RTL
    supportedLngs: ['ar', 'fr', 'en'],
    lng: 'ar',
    
    // Gestion automatique du RTL
    postProcess: ['rtl'],
  });

// Fonction pour initialiser la direction RTL
const initializeRTL = () => {
  const currentLang = i18n.language || 'ar';
  if (currentLang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = currentLang;
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }
};

// Récupérer la langue sauvegardée ou utiliser la langue par défaut
const savedLanguage = getSavedLanguage();
const defaultLanguage = getDefaultLanguage();
const initialLanguage = savedLanguage && isSupportedLanguage(savedLanguage) ? savedLanguage : defaultLanguage;

// Initialiser avec la langue déterminée
i18n.changeLanguage(initialLanguage);

// Initialiser RTL au démarrage
initializeRTL();

// Écouter les changements de langue
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  initializeRTL();
});

// Debug: Log the current language
console.log('i18n initialized with language:', i18n.language);
console.log('Saved language from storage:', savedLanguage);
console.log('Default language:', defaultLanguage);
console.log('Initial language used:', initialLanguage);

export default i18n;
