# Guide RTL (Right-to-Left) pour l'Arabe

Ce guide explique comment utiliser le support RTL complet pour l'arabe dans le projet Chargify.

## Configuration

### 1. Drapeau du Maroc 🇲🇦
Le drapeau du Maroc a été configuré dans `src/components/LanguageSelector.jsx` :
```javascript
{ code: 'ar', name: 'العربية', flag: '🇲🇦' }
```

### 2. Hook RTL
Le hook `useRTL` dans `src/hooks/useRTL.js` gère automatiquement :
- La direction du texte (RTL/LTR)
- Les classes CSS appropriées
- L'attribut `dir` du document
- L'attribut `lang` du document

### 3. Composant RTLWrapper
Le composant `RTLWrapper` dans `src/components/RTLWrapper.jsx` encapsule l'application et applique automatiquement les styles RTL.

## Utilisation

### Hook useRTL
```javascript
import { useRTL } from '../hooks/useRTL';

const MyComponent = () => {
  const { isRTL, direction, language } = useRTL();
  
  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      {/* Contenu */}
    </div>
  );
};
```

### Utilitaires RTL
```javascript
import { useRTLClasses, getRTLClass, getRTLValue } from '../utils/rtlUtils';

const MyComponent = () => {
  const rtlClasses = useRTLClasses();
  
  return (
    <div className={`${rtlClasses.textAlign} ${rtlClasses.flexDirection}`}>
      {/* Contenu */}
    </div>
  );
};
```

## Classes CSS RTL

### Classes automatiques
- `.rtl` - Applique la direction RTL
- `.rtl .flex` - Inverse la direction des flexbox
- `.rtl .space-x-*` - Inverse les espacements
- `.rtl .text-left` - Devient `text-right`
- `.rtl .text-right` - Devient `text-left`

### Classes conditionnelles
```javascript
// Utiliser getRTLClass pour des classes conditionnelles
const marginClass = getRTLClass('ml-4', 'mr-4');
const textAlignClass = getRTLClass('text-left', 'text-right');
```

## Styles CSS

### Fichier rtl.css
Le fichier `src/rtl.css` contient tous les styles RTL nécessaires :
- Gestion des flexbox
- Inversion des marges et paddings
- Alignement du texte
- Gestion des formulaires
- Animations adaptées

### Police arabe
La police `Segoe UI` est utilisée pour l'arabe pour une meilleure lisibilité.

## Composants compatibles RTL

### Header
- Navigation adaptée RTL
- Espacements inversés
- Menu mobile compatible

### LanguageSelector
- Dropdown positionné correctement
- Icônes orientées RTL
- Texte aligné RTL

### Formulaires
- Champs de saisie RTL
- Placeholders alignés RTL
- Boutons orientés RTL

## Bonnes pratiques

1. **Utiliser le hook useRTL** plutôt que de détecter manuellement la langue
2. **Utiliser les utilitaires RTL** pour les classes conditionnelles
3. **Tester en arabe** pour vérifier l'affichage RTL
4. **Utiliser des classes flexibles** qui s'adaptent automatiquement
5. **Éviter les positions absolues fixes** qui ne s'adaptent pas au RTL

## Test

Pour tester le RTL :
1. Cliquer sur le sélecteur de langue
2. Choisir "العربية" (Arabe)
3. Vérifier que tout le contenu s'affiche en RTL
4. Tester la navigation et les interactions

## Support des navigateurs

Le support RTL fonctionne sur tous les navigateurs modernes qui supportent CSS Grid et Flexbox.
