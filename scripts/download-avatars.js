#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration des avatars
const avatars = [
  {
    name: 'ahmed-mazouri',
    displayName: 'Ahmed Mazouri',
    url: 'https://ui-avatars.com/api/?name=Ahmed+Mazouri&background=3B82F6&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'fatima-karawi',
    displayName: 'Fatima Karawi',
    url: 'https://ui-avatars.com/api/?name=Fatima+Karawi&background=8B5CF6&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'youssef-bakkali',
    displayName: 'Youssef Bakkali',
    url: 'https://ui-avatars.com/api/?name=Youssef+Bakkali&background=10B981&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'amina-saadi',
    displayName: 'Amina Saadi',
    url: 'https://ui-avatars.com/api/?name=Amina+Saadi&background=F59E0B&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'karim-louzi',
    displayName: 'Karim Louzi',
    url: 'https://ui-avatars.com/api/?name=Karim+Louzi&background=EF4444&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'nadia-ramdani',
    displayName: 'Nadia Ramdani',
    url: 'https://ui-avatars.com/api/?name=Nadia+Ramdani&background=06B6D4&color=fff&size=200&rounded=true&bold=true'
  }
];

// Créer le dossier testimonials s'il n'existe pas
const testimonialsDir = path.join(__dirname, '../public/testimonials');
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(testimonialsDir, filename);
    
    // Vérifier si le fichier existe déjà
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${filename} existe déjà`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Erreur HTTP: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ ${filename} téléchargé`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Supprimer le fichier partiel
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Fonction principale
async function downloadAllAvatars() {
  console.log('📸 Téléchargement des avatars pour les témoignages...\n');
  
  const promises = avatars.map(avatar => 
    downloadImage(avatar.url, `${avatar.name}.jpg`)
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 Tous les avatars ont été téléchargés avec succès !');
    console.log('📁 Dossier: public/testimonials/');
    console.log('\n📋 Avatars disponibles :');
    avatars.forEach(avatar => {
      console.log(`   - ${avatar.name}.jpg (${avatar.displayName})`);
    });
    console.log('\n🚀 Vous pouvez maintenant redémarrer votre serveur de développement');
  } catch (error) {
    console.error('❌ Erreur lors du téléchargement:', error.message);
  }
}

// Exécuter le script
downloadAllAvatars();
