import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const EnhancedTestimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Utiliser les témoignages traduits si disponibles
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
  ];

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('enhanced-testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 transition-all duration-300 ${
          index < rating ? 'text-yellow-400 scale-110' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="enhanced-testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.whatOurClientsSay')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel de témoignages */}
        <div className="relative max-w-4xl mx-auto">
          {/* Témoignage principal */}
          <div className={`bg-white rounded-2xl p-8 lg:p-12 shadow-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="text-center">
              {/* Avatar avec animation */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-primary-200 shadow-lg transform hover:scale-110 transition-all duration-300">
                  {testimonials[currentIndex].photo ? (
                    <img 
                      src={testimonials[currentIndex].photo} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-full h-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-primary-500 to-primary-700 ${
                      testimonials[currentIndex].photo ? 'hidden' : 'flex'
                    }`}
                    style={{ display: testimonials[currentIndex].photo ? 'none' : 'flex' }}
                  >
                    {testimonials[currentIndex].avatar || getInitials(testimonials[currentIndex].name)}
                  </div>
                </div>
                
                {/* Badge de service */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                    {testimonials[currentIndex].service}
                  </span>
                </div>
              </div>

              {/* Nom et localisation */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600 mb-6">
                {testimonials[currentIndex].location}
              </p>

              {/* Étoiles avec animation */}
              <div className="flex justify-center space-x-1 mb-8">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Commentaire */}
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-8 relative">
                <svg 
                  className="absolute -top-4 -left-4 w-8 h-8 text-primary-300 opacity-50" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                "{testimonials[currentIndex].comment}"
              </blockquote>
            </div>
          </div>

          {/* Contrôles du carousel */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grille de témoignages (version mobile) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  {testimonial.photo ? (
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm ${
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
              
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-600 text-sm italic">
                "{testimonial.comment.substring(0, 100)}..."
              </blockquote>
            </div>
          ))}
        </div>

        {/* Statistiques animées */}
        <div className={`mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <div className="text-gray-600">{t('stats.averageRating')}</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-600">{t('stats.satisfiedClients')}</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600">{t('stats.availableSupport')}</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {t('features.speedValue')}
              </div>
              <div className="text-gray-600">{t('stats.averageTime')}</div>
            </div>
          </div>
        </div>

        {/* CTA amélioré */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t('testimonials.joinSatisfiedClients')}
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                {t('features.startToday')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta')}
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {t('contact.title')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
