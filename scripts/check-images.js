const fs = require('fs');
const path = require('path');

// Liste des témoignages avec leurs photos
const testimonials = [
  { name: 'أحمد م. / Ahmed M.', photo: 'ahmed-mazouri.jpg' },
  { name: 'فاطمة ك. / Fatima K.', photo: 'fatima-karawi.jpg' },
  { name: 'يوسف ب. / Youssef B.', photo: 'youssef-bakkali.jpg' },
  { name: 'أمينة س. / Amina S.', photo: 'amina-saadi.jpg' },
  { name: 'كريم ل. / Karim L.', photo: 'karim-louzi.jpg' },
  { name: 'نادية ر. / Nadia R.', photo: 'nadia-ramdani.jpg' }
];

const testimonialsDir = path.join(__dirname, '../public/testimonials');

console.log('🔍 Vérification des images des témoignages...\n');

testimonials.forEach(testimonial => {
  const photoPath = path.join(testimonialsDir, testimonial.photo);
  
  if (fs.existsSync(photoPath)) {
    const stats = fs.statSync(photoPath);
    const sizeInKB = Math.round(stats.size / 1024);
    console.log(`✅ ${testimonial.name} - ${testimonial.photo} (${sizeInKB} KB)`);
  } else {
    console.log(`❌ ${testimonial.name} - ${testimonial.photo} (MANQUANT)`);
  }
});

console.log('\n📁 Dossier des témoignages:', testimonialsDir);
console.log('🎯 Nombre total de témoignages:', testimonials.length);
