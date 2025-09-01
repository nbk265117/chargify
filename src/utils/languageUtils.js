// Utilitaires pour la gestion de la langue
export const LANGUAGE_STORAGE_KEY = 'i18nextLng';

// Sauvegarder la langue dans localStorage et cookies
export const saveLanguage = (language) => {
  try {
    // Sauvegarder dans localStorage
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    
    // Sauvegarder dans cookies (expire dans 1 an)
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${LANGUAGE_STORAGE_KEY}=${language};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    
    console.log(`Language saved: ${language}`);
  } catch (error) {
    console.error('Error saving language:', error);
  }
};

// Récupérer la langue depuis localStorage ou cookies
export const getSavedLanguage = () => {
  try {
    // Essayer localStorage d'abord
    const localStorageLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (localStorageLang) {
      return localStorageLang;
    }
    
    // Fallback vers les cookies
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === LANGUAGE_STORAGE_KEY) {
        return value;
      }
    }
    
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
      const shortLang = browserLang.split('-')[0];
      if (isSupportedLanguage(shortLang)) {
        return shortLang;
      }
    }
  } catch (error) {
    console.error('Error getting browser language:', error);
  }
  
  // Retourner l'arabe par défaut
  return 'ar';
};
