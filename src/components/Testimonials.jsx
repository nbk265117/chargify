import React from 'react'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  
  // Utiliser les témoignages traduits si disponibles, sinon utiliser les témoignages par défaut
  const testimonials = t('testimonials.items', { returnObjects: true }) || [
    {
      id: 1,
      name: "Ahmed M.",
      location: "Casablanca, Maroc",
      rating: 5,
      comment: "Service exceptionnel ! Ma recharge a été traitée en moins de 3 minutes. L'équipe est très professionnelle et réactive. Je recommande vivement !",
      avatar: "AM",
      service: "Recharge",
      photo: "/testimonials/ahmed-mazouri.jpg"
    },
    {
      id: 2,
      name: "Fatima K.",
      location: "Rabat, Maroc",
      rating: 5,
      comment: "J'utilise Chargify depuis 6 mois maintenant. Jamais eu de problème. Les retraits sont rapides et le support client est excellent.",
      avatar: "FK",
      service: "Retrait",
      photo: "/testimonials/fatima-karawi.jpg"
    },
    {
      id: 3,
      name: "Youssef B.",
      location: "Fès, Maroc",
      rating: 5,
      comment: "Partenaire 1xbet de confiance. Transactions sécurisées et frais réduits. Je suis très satisfait du service.",
      avatar: "YB",
      service: "Dépôt",
      photo: "/testimonials/youssef-bakkali.jpg"
    },
    {
      id: 4,
      name: "Amina S.",
      location: "Marrakech, Maroc",
      rating: 5,
      comment: "Support 24/7 vraiment efficace. J'ai eu une question tard dans la nuit et j'ai reçu une réponse immédiate. Très professionnel !",
      avatar: "AS",
      service: "Support",
      photo: "/testimonials/amina-saadi.jpg"
    },
    {
      id: 5,
      name: "Karim L.",
      location: "Tanger, Maroc",
      rating: 5,
      comment: "Service rapide et fiable. J'ai fait plusieurs transactions et tout s'est toujours bien passé. Je recommande !",
      avatar: "KL",
      service: "Recharge",
      photo: "/testimonials/karim-louzi.jpg"
    },
    {
      id: 6,
      name: "Nadia R.",
      location: "Agadir, Maroc",
      rating: 5,
      comment: "Excellente expérience avec Chargify. Le processus est simple et les confirmations sont rapides. Service de qualité !",
      avatar: "NR",
      service: "Retrait",
      photo: "/testimonials/nadia-ramdani.jpg"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.whatOurClientsSay')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
                    {testimonial.photo ? (
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback vers les initiales si l'image ne charge pas
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full flex items-center justify-center text-white font-bold text-sm ${
                        testimonial.photo ? 'hidden' : 'flex'
                      }`}
                      style={{ display: testimonial.photo ? 'none' : 'flex' }}
                    >
                      {testimonial.avatar || getInitials(testimonial.name)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Comment */}
              <blockquote className="text-gray-600 leading-relaxed italic">
                "{testimonial.comment}"
              </blockquote>

              {/* Quote Icon */}
              <div className="mt-4 text-primary-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">{t('stats.averageRating')}</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">{t('stats.satisfiedClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('stats.availableSupport')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">{t('features.speedValue')}</div>
              <div className="text-gray-600">{t('stats.averageTime')}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('testimonials.joinSatisfiedClients')}
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('features.startToday')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t('hero.cta')}
              </a>
              <a href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                {t('contact.title')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
