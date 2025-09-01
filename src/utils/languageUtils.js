// Utilitaires pour la gestion de la langue
export const LANGUAGE_STORAGE_KEY = 'i18nextLng';

// Sauvegarder la langue dans localStorage et cookies
export const saveLanguage = (language) => {
  try {
    console.log(`Saving language: ${language}`);
    
    // Sauvegarder dans localStorage
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    console.log(`Language saved to localStorage: ${language}`);
    
    // Sauvegarder dans cookies (expire dans 1 an)
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${LANGUAGE_STORAGE_KEY}=${language};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    console.log(`Language saved to cookies: ${language}`);
    
    return true;
  } catch (error) {
    console.error('Error saving language:', error);
    return false;
  }
};

// Récupérer la langue depuis localStorage ou cookies
export const getSavedLanguage = () => {
  try {
    console.log('Getting saved language...');
    
    // Essayer localStorage d'abord
    const localStorageLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (localStorageLang) {
      console.log(`Found language in localStorage: ${localStorageLang}`);
      return localStorageLang;
    }
    
    // Fallback vers les cookies
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === LANGUAGE_STORAGE_KEY) {
        console.log(`Found language in cookies: ${value}`);
        return value;
      }
    }
    
    console.log('No saved language found');
    return null;
  } catch (error) {
    console.error('Error getting saved language:', error);
    return null;
  }
};

// Vérifier si la langue est supportée
export const isSupportedLanguage = (language) => {
  const supportedLanguages = ['ar', 'fr', 'en'];
  return supportedLanguages.includes(language);
};

// Obtenir la langue par défaut (navigateur ou arabe)
export const getDefaultLanguage = () => {
  try {
    // Essayer de récupérer la langue du navigateur
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
      console.log('Browser language detected:', browserLang);
      
      // Check for Arabic variants first (most common for your target audience)
      if (browserLang.startsWith('ar') || browserLang.startsWith('ar-')) {
        console.log('Arabic browser language detected');
        return 'ar';
      }
      
      // Check for French variants
      if (browserLang.startsWith('fr') || browserLang.startsWith('fr-')) {
        console.log('French browser language detected');
        return 'fr';
      }
      
      // Check for English variants
      if (browserLang.startsWith('en') || browserLang.startsWith('en-')) {
        console.log('English browser language detected');
        return 'en';
      }
      
      // Check for other languages that might be common in your region
      const shortLang = browserLang.split('-')[0];
      if (isSupportedLanguage(shortLang)) {
        console.log(`Supported language detected: ${shortLang}`);
        return shortLang;
      }
    }
  } catch (error) {
    console.error('Error getting browser language:', error);
  }
  
  // Return Arabic as fallback since your target audience is likely Arabic-speaking
  console.log('Using Arabic as fallback language');
  return 'ar';
};
