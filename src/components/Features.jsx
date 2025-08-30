import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'

const Features = () => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();
  
  const serviceCards = [
    {
      id: 1,
      titleKey: 'services.deposit.title',
      descriptionKey: 'services.deposit.description',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      bgColor: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      id: 2,
      titleKey: 'services.withdrawal.title',
      descriptionKey: 'services.withdrawal.description',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      id: 3,
      titleKey: 'services.support.title',
      descriptionKey: 'services.support.description',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600'
    }
  ];

  return (
    <section id="features" className="py-12 bg-gray-50 w-full overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ maxWidth: '100vw' }}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 title-arabic">
            {t('features.whyChoose')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-arabic">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {serviceCards.map((card, index) => (
            <div 
              key={card.id} 
              className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group ${isRTL ? 'text-right' : 'text-left'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {card.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold text-gray-900 title-arabic ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(card.titleKey)}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className={`text-gray-600 leading-relaxed mb-6 text-arabic ${isRTL ? 'text-right' : 'text-left'}`}>
                {t(card.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600 text-arabic">{t('stats.satisfiedClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600 text-arabic">{t('stats.transactions')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">{t('features.speedValue')}</div>
              <div className="text-gray-600 text-arabic">{t('stats.averageTime')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600 text-arabic">{t('stats.successRate')}</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 title-arabic">
              {t('testimonials.joinSatisfiedClients')}
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto text-arabic">
              {t('features.startToday')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg btn-arabic">
                {t('hero.cta')}
              </a>
              <a href="#how-it-works" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 btn-arabic">
                {t('features.howItWorks')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
