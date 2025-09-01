# Guide de Persistance de Langue - Chargify

## Vue d'ensemble

Ce guide explique comment la persistance de langue fonctionne dans l'application Chargify. La langue sélectionnée par l'utilisateur est automatiquement sauvegardée et restaurée lors de la prochaine visite.

## Fonctionnalités

### ✅ **Persistance Automatique**
- La langue est sauvegardée dans le **localStorage** du navigateur
- **Fallback** vers les **cookies** si localStorage n'est pas disponible
- **Expiration** des cookies après 1 an
- **Restauration automatique** au chargement de la page

### ✅ **Détection Intelligente**
- **Priorité 1** : Langue sauvegardée précédemment
- **Priorité 2** : Langue du navigateur (si supportée)
- **Priorité 3** : Arabe par défaut (fallback)

### ✅ **Indicateurs Visuels**
- **Anneau vert** autour du sélecteur quand la langue est sauvegardée
- **Icône 💾** pour confirmer la sauvegarde
- **Console logs** pour le débogage

## Architecture Technique

### Fichiers Principaux

1. **`src/utils/languageUtils.js`** - Utilitaires de persistance
2. **`src/hooks/useLanguagePersistence.js`** - Hook React personnalisé
3. **`src/components/LanguageSelector.jsx`** - Composant de sélection
4. **`src/i18n.js`** - Configuration i18n

### Fonctions Clés

```javascript
// Sauvegarder la langue
saveLanguage(language)

// Récupérer la langue sauvegardée
getSavedLanguage()

// Vérifier si la langue est supportée
isSupportedLanguage(language)

// Obtenir la langue par défaut
getDefaultLanguage()
```

## Comment ça fonctionne

### 1. **Sauvegarde**
```javascript
// Quand l'utilisateur change de langue
const changeLanguage = (lng) => {
  persistLanguage(lng);        // Sauvegarde dans localStorage + cookies
  i18n.changeLanguage(lng);    // Change la langue actuelle
};
```

### 2. **Restauration**
```javascript
// Au chargement de l'application
const savedLanguage = getSavedLanguage();
const defaultLanguage = getDefaultLanguage();
const initialLanguage = savedLanguage || defaultLanguage;

i18n.changeLanguage(initialLanguage);
```

### 3. **Persistance**
- **localStorage** : `i18nextLng` (priorité haute)
- **Cookies** : `i18nextLng` (fallback, expire dans 1 an)
- **Session** : Automatique via i18next-browser-languagedetector

## Langues Supportées

- 🇲🇦 **Arabe (ar)** - Langue par défaut
- 🇫🇷 **Français (fr)** - Langue supportée
- 🇺🇸 **English (en)** - Langue supportée

## Débogage

### Console Logs
```javascript
// Vérifier la langue actuelle
console.log('Current language:', i18n.language);

// Vérifier la langue sauvegardée
console.log('Saved language:', getSavedLanguage());

// Vérifier la persistance
console.log('Is language saved:', checkLanguagePersistence());
```

### localStorage
```javascript
// Dans la console du navigateur
localStorage.getItem('i18nextLng')
```

### Cookies
```javascript
// Dans la console du navigateur
document.cookie
```

## Tests

### Test de Persistance
1. Changer la langue sur une page
2. Recharger la page (F5)
3. Vérifier que la langue est restaurée
4. Fermer et rouvrir le navigateur
5. Vérifier que la langue persiste

### Test de Fallback
1. Supprimer le localStorage : `localStorage.clear()`
2. Supprimer les cookies
3. Recharger la page
4. Vérifier que la langue par défaut (ar) est utilisée

## Dépannage

### Problème : La langue ne persiste pas
**Solution** : Vérifier que le localStorage est activé dans le navigateur

### Problème : Erreur de sauvegarde
**Solution** : Vérifier les permissions et l'espace disponible

### Problème : Langue incorrecte au chargement
**Solution** : Vérifier la configuration i18n et les utilitaires

## Maintenance

### Mise à jour des Langues
1. Ajouter la nouvelle langue dans `supportedLanguages`
2. Mettre à jour les fichiers de traduction
3. Tester la persistance

### Nettoyage
- Les cookies expirent automatiquement après 1 an
- Le localStorage persiste jusqu'à ce que l'utilisateur le vide

## Sécurité

- **SameSite=Lax** pour les cookies
- **Validation** des langues supportées
- **Fallback sécurisé** vers l'arabe par défaut
- **Gestion d'erreurs** robuste

---

*Dernière mise à jour : $(date)*
