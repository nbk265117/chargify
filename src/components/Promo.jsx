import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'

const Promo = () => {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section id="promo" className="py-12 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promo Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('promo.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('promo.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Promo Card */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
            <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-bold mb-4">{t('promo.welcomeCode')}</h3>
              <div className="bg-white text-orange-600 text-3xl font-bold py-4 px-6 rounded-lg mb-4 inline-block">
                {t('promo.code')}
              </div>
              <p className="text-lg">{t('promo.description')}</p>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {t('promo.features', { returnObjects: true }).map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
