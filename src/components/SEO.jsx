import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author 
}) => {
  const { t, i18n } = useTranslation();
  
  // Debug logging
  console.log('SEO Component - Current language:', i18n.language);
  console.log('SEO Component - Is i18n ready:', i18n.isInitialized);
  console.log('SEO Component - Available languages:', i18n.languages);
  
  // Wait for i18n to be ready before rendering
  if (!i18n.isInitialized) {
    console.log('SEO Component - Waiting for i18n to initialize...');
    return null; // Don't render until i18n is ready
  }
  
  // Utiliser les métadonnées par défaut de la langue actuelle
  const defaultMeta = t('meta', { returnObjects: true });
  
  const seoTitle = title || t('meta.title') || 'Chargify';
  const seoDescription = description || t('meta.description') || '';
  const seoKeywords = keywords || t('meta.keywords') || '';
  const seoImage = image || t('meta.ogImage') || '/og-image.jpg';
  const seoAuthor = author || t('meta.author') || 'Chargify';
  const seoUrl = url || window.location.href;
  
  // Déterminer la direction du texte basée sur la langue
  const isRTL = i18n.language === 'ar';
  const htmlLang = i18n.language;
  const htmlDir = isRTL ? 'rtl' : 'ltr';

  console.log('SEO Component - Final title:', seoTitle);
  console.log('SEO Component - Final language:', htmlLang);
  console.log('SEO Component - Final direction:', htmlDir);

  return (
    <Helmet>
      {/* Métadonnées de base */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      
      {/* Attributs HTML */}
      <html lang={htmlLang} dir={htmlDir} />
      
      {/* Open Graph */}
      <meta property="og:title" content={t('meta.ogTitle') || seoTitle} />
      <meta property="og:description" content={t('meta.ogDescription') || seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={htmlLang} />
      <meta property="og:locale:alternate" content={htmlLang === 'ar' ? 'en' : 'ar'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={t('meta.twitterCard') || "summary_large_image"} />
      <meta name="twitter:title" content={t('meta.twitterTitle') || seoTitle} />
      <meta name="twitter:description" content={t('meta.twitterDescription') || seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Métadonnées supplémentaires */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      
      {/* Préconnect pour les performances */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Métadonnées spécifiques à la langue */}
      {isRTL && (
        <>
          <meta name="language" content="Arabic" />
          <meta name="content-language" content="ar" />
        </>
      )}
      
      {htmlLang === 'fr' && (
        <>
          <meta name="language" content="French" />
          <meta name="content-language" content="fr" />
        </>
      )}
      
      {htmlLang === 'en' && (
        <>
          <meta name="language" content="English" />
          <meta name="content-language" content="en" />
        </>
      )}
    </Helmet>
  );
};

export default SEO;
