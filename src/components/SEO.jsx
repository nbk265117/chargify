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
  
  // Utiliser les métadonnées par défaut de la langue actuelle
  const defaultMeta = t('meta', { returnObjects: true });
  
  const seoTitle = title || defaultMeta?.title || 'Chargify';
  const seoDescription = description || defaultMeta?.description || '';
  const seoKeywords = keywords || defaultMeta?.keywords || '';
  const seoImage = image || defaultMeta?.ogImage || '/og-image.jpg';
  const seoAuthor = author || defaultMeta?.author || 'Chargify';
  const seoUrl = url || window.location.href;
  
  // Déterminer la direction du texte basée sur la langue
  const isRTL = i18n.language === 'ar';
  const htmlLang = i18n.language;
  const htmlDir = isRTL ? 'rtl' : 'ltr';

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
      <meta property="og:title" content={defaultMeta?.ogTitle || seoTitle} />
      <meta property="og:description" content={defaultMeta?.ogDescription || seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={htmlLang} />
      <meta property="og:locale:alternate" content={htmlLang === 'ar' ? 'en' : 'ar'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={defaultMeta?.twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={defaultMeta?.twitterTitle || seoTitle} />
      <meta name="twitter:description" content={defaultMeta?.twitterDescription || seoDescription} />
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
