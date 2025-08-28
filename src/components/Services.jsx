import React from 'react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      id: 1,
      title: "Recharge de Compte",
      description: "Rechargez votre compte 1xbet instantanément avec nos méthodes de paiement sécurisées. Traitement en moins de 5 minutes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: ["Paiement par ID", "Traitement rapide", "Support 24/7", "Sécurisé"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Dépôt d'Argent",
      description: "Effectuez des dépôts sur votre compte 1xbet de manière sécurisée et rapide. Plusieurs méthodes de paiement disponibles.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: ["Méthodes multiples", "Confirmation rapide", "Historique détaillé", "Frais réduits"],
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Retrait d'Argent",
      description: "Retirez vos gains rapidement et en toute sécurité. Service de retrait optimisé pour une expérience fluide.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ["Retrait rapide", "Vérification ID", "Support dédié", "Sécurité maximale"],
      color: "bg-purple-500"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('services.premium')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`${service.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.readyToStart')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('testimonials.joinSatisfiedClients')}
            </p>
            <a href="#contact" className="btn-primary">
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
