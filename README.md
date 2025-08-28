# Chargify - Partenaire Officiel 1xbet

Application React moderne pour les services de recharge, dépôt et retrait 1xbet avec support multilingue.

## 🌍 Internationalisation (i18n)

L'application supporte trois langues :
- 🇫🇷 **Français** (langue par défaut)
- 🇺🇸 **English** 
- 🇸🇦 **العربية** (Arabe avec support RTL)

### Fonctionnalités i18n

- **Détection automatique** de la langue du navigateur
- **Sélecteur de langue** dans l'en-tête avec drapeaux
- **Support RTL** complet pour l'arabe
- **Persistance** de la langue choisie dans le localStorage
- **Traductions complètes** de tous les textes de l'interface

### Structure des traductions

```
src/locales/
├── fr.json    # Français
├── en.json    # Anglais
└── ar.json    # Arabe
```

### Utilisation

```jsx
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return <h1>{t('hero.title')}</h1>
}
```

## 🚀 Installation et démarrage

```bash
# Installer les dépendances
yarn install

# Démarrer le serveur de développement
yarn dev
```

L'application sera accessible sur `http://localhost:3000`

## 🛠️ Technologies utilisées

- **React 19** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **react-i18next** - Internationalisation
- **i18next** - Framework de traduction

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.jsx      # En-tête avec sélecteur de langue
│   ├── Hero.jsx        # Section principale
│   ├── LanguageSelector.jsx # Sélecteur de langue
│   └── ...
├── locales/            # Fichiers de traduction
│   ├── fr.json
│   ├── en.json
│   └── ar.json
├── i18n.js            # Configuration i18n
├── App.jsx            # Composant principal
└── main.jsx           # Point d'entrée
```

## 🎨 Fonctionnalités

- ✅ Interface multilingue (FR/EN/AR)
- ✅ Support RTL pour l'arabe
- ✅ Design responsive
- ✅ Animations fluides
- ✅ Composants modulaires
- ✅ Optimisation des performances

## 🔧 Configuration

### Ajouter une nouvelle langue

1. Créer un nouveau fichier `src/locales/[code].json`
2. Ajouter la langue dans `src/i18n.js`
3. Ajouter l'option dans `LanguageSelector.jsx`

### Modifier les traductions

Éditer directement les fichiers JSON dans `src/locales/`

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les écrans :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🌐 Déploiement

```bash
# Build de production
yarn build

# Prévisualiser le build
yarn preview
```

## 📄 Licence

© 2024 Chargify. Tous droits réservés.
