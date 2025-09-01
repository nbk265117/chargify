import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguage, getSavedLanguage } from '../utils/languageUtils';

export const useLanguagePersistence = () => {
  const { i18n } = useTranslation();
  const [isLanguageSaved, setIsLanguageSaved] = useState(false);

  // Sauvegarder la langue actuelle
  const persistLanguage = (language) => {
    try {
      console.log(`Persisting language: ${language}`);
      const success = saveLanguage(language);
      
      if (success) {
        setIsLanguageSaved(true);
        console.log(`Language ${language} successfully persisted`);
        
        // Réinitialiser l'état après 2 secondes
        setTimeout(() => setIsLanguageSaved(false), 2000);
        
        return true;
      } else {
        console.error('Failed to persist language');
        return false;
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la langue:', error);
      return false;
    }
  };

  // Vérifier si la langue est sauvegardée
  const checkLanguagePersistence = () => {
    const saved = getSavedLanguage();
    const isPersisted = saved === i18n.language;
    console.log(`Language persistence check: saved=${saved}, current=${i18n.language}, isPersisted=${isPersisted}`);
    return isPersisted;
  };

  // Initialiser la persistance au chargement
  useEffect(() => {
    console.log('useLanguagePersistence: useEffect triggered');
    const savedLanguage = getSavedLanguage();
    console.log(`useLanguagePersistence: savedLanguage=${savedLanguage}, currentLanguage=${i18n.language}`);
    
    if (savedLanguage && savedLanguage === i18n.language) {
      setIsLanguageSaved(true);
      console.log('useLanguagePersistence: Language is already saved');
    } else {
      console.log('useLanguagePersistence: Language is not saved or different');
    }
  }, [i18n.language]);

  return {
    persistLanguage,
    checkLanguagePersistence,
    isLanguageSaved
  };
};
