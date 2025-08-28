import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useRTL = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    
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
  }, [i18n.language]);

  return {
    isRTL: i18n.language === 'ar',
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
    language: i18n.language
  };
};
