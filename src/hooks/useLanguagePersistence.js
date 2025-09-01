import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguage, getSavedLanguage } from '../utils/languageUtils';

export const useLanguagePersistence = () => {
  const { i18n } = useTranslation();
  const [isLanguageSaved, setIsLanguageSaved] = useState(false);

  // Sauvegarder la langue actuelle
  const persistLanguage = (language) => {
    try {
      saveLanguage(language);
      setIsLanguageSaved(true);
      
      // Réinitialiser l'état après 2 secondes
      setTimeout(() => setIsLanguageSaved(false), 2000);
      
      return true;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la langue:', error);
      return false;
    }
  };

  // Vérifier si la langue est sauvegardée
  const checkLanguagePersistence = () => {
    const saved = getSavedLanguage();
    return saved === i18n.language;
  };

  // Initialiser la persistance au chargement
  useEffect(() => {
    const savedLanguage = getSavedLanguage();
    if (savedLanguage && savedLanguage === i18n.language) {
      setIsLanguageSaved(true);
    }
  }, [i18n.language]);

  return {
    persistLanguage,
    checkLanguagePersistence,
    isLanguageSaved
  };
};
