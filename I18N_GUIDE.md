# Guide d'Internationalisation (i18n) - Chargify

## 🌍 Vue d'ensemble

L'application Chargify supporte trois langues : Français, Anglais et Arabe avec support RTL complet.

## 📁 Structure des fichiers

```
src/
├── i18n.js                    # Configuration principale
├── locales/
│   ├── fr.json               # Traductions françaises
│   ├── en.json               # Traductions anglaises
│   └── ar.json               # Traductions arabes
└── components/
    └── LanguageSelector.jsx   # Sélecteur de langue
```

## 🔧 Configuration

### 1. Configuration i18n (`src/i18n.js`)

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  ar: { translation: ar }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });
```

### 2. Support RTL pour l'arabe

Le CSS inclut automatiquement le support RTL :

```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[lang="ar"] {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## 🚀 Utilisation dans les composants

### Hook useTranslation

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>Langue actuelle: {i18n.language}</p>
    </div>
  );
};
```

### Changer de langue

```jsx
const { i18n } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  
  // Support RTL pour l'arabe
  if (lng === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = lng;
  }
};
```

## 📝 Structure des traductions

### Format JSON

```json
{
  "nav": {
    "home": "Accueil",
    "services": "Services",
    "contact": "Contact"
  },
  "hero": {
    "title": "Partenaire Officiel 1xbet",
    "subtitle": "Recharge, Dépôt, Retrait",
    "description": "La solution complète...",
    "cta": "Commencer maintenant"
  },
  "features": {
    "title": "Pourquoi choisir Chargify ?",
    "security": {
      "title": "Sécurité maximale",
      "description": "Transactions sécurisées..."
    }
  }
}
```

### Accès aux traductions

```jsx
// Traduction simple
t('nav.home') // "Accueil"

// Traduction imbriquée
t('features.security.title') // "Sécurité maximale"

// Avec interpolation
t('welcome', { name: 'John' }) // "Bienvenue John"
```

## 🎨 Sélecteur de langue

### Composant LanguageSelector

```jsx
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];
  
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2">
        <span>{languages.find(lang => lang.code === i18n.language)?.flag}</span>
        <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      {/* Menu déroulant */}
    </div>
  );
};
```

## 🔄 Ajouter une nouvelle langue

### 1. Créer le fichier de traduction

```bash
# Créer src/locales/es.json pour l'espagnol
touch src/locales/es.json
```

### 2. Ajouter les traductions

```json
{
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "hero": {
    "title": "Socio Oficial 1xbet",
    "subtitle": "Recarga, Depósito, Retiro"
  }
}
```

### 3. Mettre à jour la configuration

```javascript
// src/i18n.js
import es from './locales/es.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  ar: { translation: ar },
  es: { translation: es }  // Nouvelle langue
};
```

### 4. Ajouter au sélecteur

```jsx
// src/components/LanguageSelector.jsx
const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }  // Nouvelle langue
];
```

## 🧪 Tests

### Vérifier les traductions

```jsx
// Test simple
console.log(t('nav.home')); // Devrait afficher la traduction

// Test de changement de langue
i18n.changeLanguage('en');
console.log(t('nav.home')); // Devrait afficher "Home"
```

### Vérifier le RTL

```jsx
// Pour l'arabe
i18n.changeLanguage('ar');
console.log(document.documentElement.dir); // "rtl"
console.log(document.documentElement.lang); // "ar"
```

## 🐛 Dépannage

### Problèmes courants

1. **Traduction manquante**
   ```jsx
   // Au lieu de t('missing.key')
   t('missing.key', 'Texte par défaut')
   ```

2. **Clés imbriquées**
   ```jsx
   // Correct
   t('features.security.title')
   
   // Incorrect
   t('features.security.title.description')
   ```

3. **Support RTL**
   ```css
   /* Vérifier que le CSS RTL est chargé */
   [dir="rtl"] {
     direction: rtl;
   }
   ```

### Debug

```javascript
// Activer le debug
i18n.init({
  debug: true,
  // ... autres options
});
```

## 📚 Ressources

- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Documentation](https://www.i18next.com/)
- [RTL Support Guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)

## 🎯 Bonnes pratiques

1. **Organiser les clés** de manière logique et hiérarchique
2. **Utiliser des clés descriptives** (ex: `hero.title` au lieu de `title`)
3. **Tester toutes les langues** avant le déploiement
4. **Vérifier le RTL** pour l'arabe
5. **Utiliser des fallbacks** pour les traductions manquantes
6. **Maintenir la cohérence** entre les fichiers de traduction
