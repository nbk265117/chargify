import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { MdLocationOn, MdStar } from 'react-icons/md';
import Avatar from 'react-avatar';
import CountUp from 'react-countup';

const AdvancedTestimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
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

    const element = document.getElementById('advanced-testimonials');
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
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        <FaStar 
          className={`w-5 h-5 transition-all duration-300 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      </motion.div>
    ));
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

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="advanced-testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.whatOurClientsSay')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Carousel principal */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden"
            >
              {/* Fond décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
              
              <div className="relative z-10 text-center">
                {/* Avatar avec animation */}
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary-200 shadow-xl">
                    <Avatar 
                      name={testimonials[currentIndex].name}
                      size="96"
                      round={true}
                      src={testimonials[currentIndex].photo}
                      color="#3B82F6"
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Badge de service */}
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-primary-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      {testimonials[currentIndex].service}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Nom et localisation */}
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {testimonials[currentIndex].name}
                </motion.h3>
                
                <motion.div 
                  className="flex items-center justify-center text-gray-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <MdLocationOn className="w-5 h-5 mr-2 text-primary-500" />
                  <span>{testimonials[currentIndex].location}</span>
                </motion.div>

                {/* Étoiles avec animation */}
                <motion.div 
                  className="flex justify-center space-x-1 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {renderStars(testimonials[currentIndex].rating)}
                </motion.div>

                {/* Commentaire */}
                <motion.blockquote 
                  className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-8 relative max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaQuoteLeft className="absolute -top-4 -left-4 w-8 h-8 text-primary-300 opacity-50" />
                  <FaQuoteLeft className="absolute -bottom-4 -right-4 w-8 h-8 text-primary-300 opacity-50 transform rotate-180" />
                  "{testimonials[currentIndex].comment}"
                </motion.blockquote>

                {/* Bouton de like */}
                <motion.button
                  className="inline-flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHeart className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('testimonials.likeThisTestimonial')}</span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Contrôles du carousel */}
          <motion.button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          <motion.button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="w-6 h-6 text-gray-600" />
          </motion.button>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Contrôle autoplay */}
          <div className="flex justify-center mt-4">
            <motion.button
              onClick={toggleAutoPlay}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? `⏸️ ${t('testimonials.pause')}` : `▶️ ${t('testimonials.play')}`}
            </motion.button>
          </div>
        </div>

        {/* Statistiques animées */}
        <motion.div 
          className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                <CountUp end={4.9} decimals={1} duration={2.5} />
                <span className="text-2xl">/5</span>
              </div>
              <div className="text-gray-600">{t('stats.averageRating')}</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                <CountUp end={98} suffix="%" duration={2.5} />
              </div>
              <div className="text-gray-600">{t('stats.satisfiedClients')}</div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">{t('stats.availableSupport')}</div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                {t('features.speedValue')}
              </div>
              <div className="text-gray-600">{t('stats.averageTime')}</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA amélioré */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('testimonials.joinSatisfiedClients')}
              </motion.h3>
              <motion.p 
                className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {t('features.startToday')}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href="#contact" 
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta')}
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.title')}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedTestimonials;
