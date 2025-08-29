#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des avatars par défaut
const avatars = [
  {
    name: 'ahmed-mazouri',
    url: 'https://ui-avatars.com/api/?name=Ahmed+Mazouri&background=3B82F6&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'fatima-karawi',
    url: 'https://ui-avatars.com/api/?name=Fatima+Karawi&background=8B5CF6&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'youssef-bakkali',
    url: 'https://ui-avatars.com/api/?name=Youssef+Bakkali&background=10B981&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'amina-saadi',
    url: 'https://ui-avatars.com/api/?name=Amina+Saadi&background=F59E0B&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'karim-louzi',
    url: 'https://ui-avatars.com/api/?name=Karim+Louzi&background=EF4444&color=fff&size=200&rounded=true&bold=true'
  },
  {
    name: 'nadia-ramdani',
    url: 'https://ui-avatars.com/api/?name=Nadia+Ramdani&background=06B6D4&color=fff&size=200&rounded=true&bold=true'
  }
];

// Créer le dossier testimonials s'il n'existe pas
const testimonialsDir = path.join(__dirname, '../public/testimonials');
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

console.log('📸 Génération des avatars pour les témoignages...');

// Créer un fichier HTML pour télécharger les avatars
const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Téléchargement des Avatars - Témoignages</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .avatar-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .avatar-item {
            text-align: center;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #fafafa;
        }
        .avatar-item img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 10px;
            border: 3px solid #3B82F6;
        }
        .avatar-item h3 {
            margin: 0 0 10px 0;
            color: #333;
            font-size: 16px;
        }
        .download-btn {
            background: #3B82F6;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s;
        }
        .download-btn:hover {
            background: #2563EB;
        }
        .instructions {
            background: #EFF6FF;
            border: 1px solid #3B82F6;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }
        .instructions h3 {
            color: #1E40AF;
            margin-top: 0;
        }
        .instructions ol {
            margin: 10px 0;
            padding-left: 20px;
        }
        .instructions li {
            margin: 5px 0;
            color: #374151;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📸 Avatars pour les Témoignages</h1>
        
        <div class="avatar-grid">
            ${avatars.map(avatar => `
                <div class="avatar-item">
                    <img src="${avatar.url}" alt="${avatar.name}" id="avatar-${avatar.name}">
                    <h3>${avatar.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                    <button class="download-btn" onclick="downloadAvatar('${avatar.url}', '${avatar.name}.jpg')">
                        📥 Télécharger
                    </button>
                </div>
            `).join('')}
        </div>

        <div class="instructions">
            <h3>📋 Instructions pour installer les avatars :</h3>
            <ol>
                <li>Cliquez sur "Télécharger" pour chaque avatar</li>
                <li>Renommez les fichiers téléchargés selon les noms suivants :</li>
                <ul>
                    <li><strong>ahmed-mazouri.jpg</strong> - Ahmed المزوري</li>
                    <li><strong>fatima-karawi.jpg</strong> - Fatima الكراوي</li>
                    <li><strong>youssef-bakkali.jpg</strong> - Youssef البقالي</li>
                    <li><strong>amina-saadi.jpg</strong> - Amina السعدي</li>
                    <li><strong>karim-louzi.jpg</strong> - Karim اللوزي</li>
                    <li><strong>nadia-ramdani.jpg</strong> - Nadia الرمضاني</li>
                </ul>
                <li>Placez tous les fichiers dans le dossier <code>public/testimonials/</code></li>
                <li>Redémarrez votre serveur de développement</li>
            </ol>
        </div>
    </div>

    <script>
        function downloadAvatar(url, filename) {
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    </script>
</body>
</html>
`;

// Écrire le fichier HTML
const htmlPath = path.join(__dirname, '../public/download-avatars.html');
fs.writeFileSync(htmlPath, htmlContent);

console.log('✅ Fichier de téléchargement créé : public/download-avatars.html');
console.log('🌐 Ouvrez ce fichier dans votre navigateur pour télécharger les avatars');
console.log('📁 Placez ensuite les images dans le dossier public/testimonials/');

// Créer aussi un fichier README pour les avatars
const readmeContent = `# Avatars des Témoignages

Ce dossier contient les photos des témoins pour la section témoignages.

## Fichiers requis :

- \`ahmed-mazouri.jpg\` - Ahmed المزوري (Casablanca)
- \`fatima-karawi.jpg\` - Fatima الكراوي (Rabat)  
- \`youssef-bakkali.jpg\` - Youssef البقالي (Fès)
- \`amina-saadi.jpg\` - Amina السعدي (Marrakech)
- \`karim-louzi.jpg\` - Karim اللوزي (Tanger)
- \`nadia-ramdani.jpg\` - Nadia الرمضاني (Agadir)

## Comment obtenir les avatars :

1. Ouvrez \`public/download-avatars.html\` dans votre navigateur
2. Téléchargez chaque avatar
3. Renommez les fichiers selon la liste ci-dessus
4. Placez-les dans ce dossier

## Format recommandé :
- Taille : 200x200 pixels minimum
- Format : JPG ou PNG
- Style : Photos de profil professionnelles ou avatars générés

## Fallback :
Si une image n'est pas trouvée, le système affichera automatiquement les initiales du nom dans un cercle coloré.
`;

const readmePath = path.join(testimonialsDir, 'README.md');
fs.writeFileSync(readmePath, readmeContent);

console.log('📝 Fichier README créé dans public/testimonials/');
console.log('\n🎯 Prochaines étapes :');
console.log('1. Ouvrez public/download-avatars.html dans votre navigateur');
console.log('2. Téléchargez les avatars');
console.log('3. Placez-les dans public/testimonials/');
console.log('4. Redémarrez votre serveur de développement');
