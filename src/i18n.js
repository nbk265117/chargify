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

// Attendre que i18n soit complètement initialisé
const initializeLanguage = async () => {
  try {
    // Récupérer la langue sauvegardée
    const savedLanguage = getSavedLanguage();
    const defaultLanguage = getDefaultLanguage();
    
    console.log('Saved language from storage:', savedLanguage);
    console.log('Default language:', defaultLanguage);
    
    // Déterminer la langue initiale
    let initialLanguage = 'ar'; // Fallback par défaut
    
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      initialLanguage = savedLanguage;
      console.log('Using saved language:', initialLanguage);
    } else if (defaultLanguage && isSupportedLanguage(defaultLanguage)) {
      initialLanguage = defaultLanguage;
      console.log('Using browser language:', initialLanguage);
    } else {
      console.log('Using fallback language: ar');
    }
    
    // Forcer le changement de langue
    await i18n.changeLanguage(initialLanguage);
    
    // Initialiser RTL
    initializeRTL();
    
    console.log('i18n initialized with language:', i18n.language);
    console.log('Final language set:', initialLanguage);
    
  } catch (error) {
    console.error('Error initializing language:', error);
    // Fallback vers l'arabe en cas d'erreur
    await i18n.changeLanguage('ar');
    initializeRTL();
  }
};

// Initialiser la langue après que i18n soit prêt
i18n.on('initialized', () => {
  console.log('i18n initialized event fired');
  initializeLanguage();
});

// Écouter les changements de langue
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  initializeRTL();
});

// Initialisation immédiate si i18n est déjà prêt
if (i18n.isInitialized) {
  initializeLanguage();
}

export default i18n;
