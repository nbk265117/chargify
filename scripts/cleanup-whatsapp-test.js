const fs = require('fs');
const path = require('path');

console.log('🧹 Nettoyage des fichiers de test WhatsApp...\n');

// Fichiers à supprimer après test
const filesToRemove = [
  'src/components/WhatsAppTest.jsx',
  'src/components/WhatsAppSticky.jsx', // Version originale avec problèmes
  'WHATSAPP_TROUBLESHOOTING.md'
];

// Fichiers à renommer
const filesToRename = [
  {
    from: 'src/components/WhatsAppStickyV2.jsx',
    to: 'src/components/WhatsAppSticky.jsx'
  }
];

// Supprimer les fichiers de test
filesToRemove.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ Supprimé: ${file}`);
  } else {
    console.log(`⚠️  Non trouvé: ${file}`);
  }
});

// Renommer les fichiers
filesToRename.forEach(({ from, to }) => {
  const fromPath = path.join(__dirname, '..', from);
  const toPath = path.join(__dirname, '..', to);
  
  if (fs.existsSync(fromPath)) {
    fs.renameSync(fromPath, toPath);
    console.log(`✅ Renommé: ${from} → ${to}`);
  } else {
    console.log(`⚠️  Non trouvé: ${from}`);
  }
});

// Mettre à jour App.jsx pour utiliser le bon composant
const appJsxPath = path.join(__dirname, '..', 'src', 'App.jsx');
if (fs.existsSync(appJsxPath)) {
  let content = fs.readFileSync(appJsxPath, 'utf8');
  
  // Remplacer les imports
  content = content.replace(
    /import WhatsAppStickyV2 from '\.\/components\/WhatsAppStickyV2'/g,
    "import WhatsAppSticky from './components/WhatsAppSticky'"
  );
  content = content.replace(
    /import WhatsAppTest from '\.\/components\/WhatsAppTest'/g,
    ""
  );
  
  // Remplacer l'utilisation
  content = content.replace(
    /<WhatsAppStickyV2 \/>/g,
    "<WhatsAppSticky />"
  );
  content = content.replace(
    /<WhatsAppTest \/>/g,
    ""
  );
  
  fs.writeFileSync(appJsxPath, content);
  console.log('✅ App.jsx mis à jour');
}

console.log('\n🎉 Nettoyage terminé !');
console.log('📱 Le bouton WhatsApp sticky est maintenant prêt pour la production.');
