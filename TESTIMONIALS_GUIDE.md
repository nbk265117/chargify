# 📸 Guide des Témoignages - Darija Marocaine

Ce guide vous explique comment gérer les témoignages en darija marocaine avec des photos pour votre site Chargify.

## 🎯 Ce qui a été implémenté

### ✅ Témoignages en Darija Marocaine
- **6 témoignages authentiques** en darija marocaine
- **Noms marocains** avec leurs équivalents en arabe
- **Villes marocaines** : Casablanca, Rabat, Fès, Marrakech, Tanger, Agadir
- **Services variés** : شحن الحساب، إيداع الأموال، سحب الأموال، الدعم

### ✅ Photos des Témoins
- **Avatars générés automatiquement** via UI Avatars API
- **Photos de profil professionnelles** avec couleurs variées
- **Système de fallback** vers les initiales si l'image ne charge pas
- **Dossier organisé** : `public/testimonials/`

### ✅ Scripts Automatisés
- `npm run avatars` - Télécharge automatiquement les avatars
- `npm run generate-avatars` - Crée une page de téléchargement manuel

## 🛠️ Plugins et Outils Recommandés

### 📸 Pour les Photos/Avatars

#### 1. **UI Avatars** (Déjà intégré)
```javascript
// API gratuite pour générer des avatars
https://ui-avatars.com/api/?name=Nom+Prenom&background=3B82F6&color=fff&size=200&rounded=true&bold=true
```

#### 2. **DiceBear Avatars** (Alternative)
```bash
npm install @dicebear/core @dicebear/collection
```
```javascript
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

const avatar = createAvatar(avataaars, {
  seed: 'ahmed-mazouri',
  backgroundColor: ['3B82F6', '8B5CF6', '10B981'],
});
```

#### 3. **Gravatar** (Pour des emails réels)
```bash
npm install gravatar
```
```javascript
import gravatar from 'gravatar';

const avatarUrl = gravatar.url('ahmed@example.com', {
  size: '200',
  default: 'retro',
  rating: 'pg'
});
```

#### 4. **React Avatar** (Composant React)
```bash
npm install react-avatar
```
```javascript
import Avatar from 'react-avatar';

<Avatar 
  name="Ahmed Mazouri" 
  size="48" 
  round={true}
  color="#3B82F6"
/>
```

### 🎨 Pour l'Amélioration Visuelle

#### 5. **Framer Motion** (Animations)
```bash
npm install framer-motion
```
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Contenu du témoignage */}
</motion.div>
```

#### 6. **React Icons** (Icônes)
```bash
npm install react-icons
```
```javascript
import { FaStar, FaQuoteLeft, FaUser } from 'react-icons/fa';

<FaStar className="text-yellow-400" />
<FaQuoteLeft className="text-primary-300" />
<FaUser className="text-gray-500" />
```

#### 7. **React Carousel** (Carousel de témoignages)
```bash
npm install react-slick slick-carousel
```
```javascript
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

<Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
  {testimonials.map(testimonial => (
    <div key={testimonial.id}>
      {/* Contenu du témoignage */}
    </div>
  ))}
</Slider>
```

### 📊 Pour les Statistiques

#### 8. **React CountUp** (Animations de chiffres)
```bash
npm install react-countup
```
```javascript
import CountUp from 'react-countup';

<CountUp end={98} suffix="%" duration={2.5} />
```

#### 9. **Recharts** (Graphiques)
```bash
npm install recharts
```
```javascript
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

<BarChart width={600} height={300} data={testimonialData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="rating" fill="#3B82F6" />
</BarChart>
```

### 🔧 Pour la Gestion des Données

#### 10. **React Query** (Gestion d'état)
```bash
npm install @tanstack/react-query
```
```javascript
import { useQuery } from '@tanstack/react-query';

const { data: testimonials } = useQuery({
  queryKey: ['testimonials'],
  queryFn: () => fetch('/api/testimonials').then(res => res.json())
});
```

#### 11. **Zustand** (État global)
```bash
npm install zustand
```
```javascript
import { create } from 'zustand';

const useTestimonialStore = create((set) => ({
  testimonials: [],
  setTestimonials: (testimonials) => set({ testimonials }),
}));
```

## 🚀 Installation Rapide

### Option 1 : Installation Automatique (Recommandée)
```bash
# Télécharger les avatars automatiquement
npm run avatars

# Démarrer le serveur de développement
npm run dev
```

### Option 2 : Installation Manuelle
```bash
# Créer la page de téléchargement
npm run generate-avatars

# Ouvrir public/download-avatars.html dans le navigateur
# Télécharger manuellement chaque avatar
# Placer les fichiers dans public/testimonials/
```

## 📝 Structure des Données

### Format JSON des Témoignages
```json
{
  "testimonials": {
    "items": [
      {
        "id": 1,
        "name": "أحمد المزوري",
        "location": "الدار البيضاء",
        "rating": 5,
        "comment": "والله خدمة ممتازة! الشحن ديالي تم ف 3 دقايق بالضبط...",
        "service": "شحن الحساب",
        "photo": "/testimonials/ahmed-mazouri.jpg"
      }
    ]
  }
}
```

### Fichiers d'Images Requis
```
public/testimonials/
├── ahmed-mazouri.jpg
├── fatima-karawi.jpg
├── youssef-bakkali.jpg
├── amina-saadi.jpg
├── karim-louzi.jpg
└── nadia-ramdani.jpg
```

## 🎨 Personnalisation

### Changer les Couleurs des Avatars
Modifiez le fichier `scripts/download-avatars.js` :
```javascript
const avatars = [
  {
    name: 'ahmed-mazouri',
    url: 'https://ui-avatars.com/api/?name=Ahmed+Mazouri&background=YOUR_COLOR&color=fff&size=200&rounded=true&bold=true'
  }
];
```

### Ajouter de Nouveaux Témoignages
1. Ajoutez les données dans `src/locales/ar.json`
2. Ajoutez l'avatar dans `scripts/download-avatars.js`
3. Exécutez `npm run avatars`

### Modifier le Style des Cartes
Éditez le composant `src/components/Testimonials.jsx` :
```javascript
// Changer les couleurs, espacement, animations, etc.
className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
```

## 🔍 Dépannage

### Les Images ne s'Affichent Pas
1. Vérifiez que les fichiers existent dans `public/testimonials/`
2. Exécutez `npm run avatars` pour re-télécharger
3. Vérifiez les chemins dans les traductions

### Problèmes de Traduction
1. Vérifiez que `i18n.js` charge bien le fichier `ar.json`
2. Assurez-vous que la langue arabe est sélectionnée
3. Vérifiez la syntaxe JSON

### Erreurs de Script
1. Vérifiez que Node.js est installé
2. Exécutez `npm install` si nécessaire
3. Vérifiez les permissions du dossier `public/`

## 📞 Support

Pour toute question ou problème :
1. Vérifiez ce guide
2. Consultez les fichiers README dans les dossiers
3. Vérifiez la console du navigateur pour les erreurs
4. Testez avec `npm run dev` pour voir les changements

---

**🎉 Félicitations !** Vos témoignages en darija marocaine avec photos sont maintenant prêts !
