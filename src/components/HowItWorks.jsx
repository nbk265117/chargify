import React from 'react'
import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      id: 1,
      title: "Contactez-nous",
      description: "Envoyez-nous votre demande avec votre ID 1xbet et le montant souhaité via WhatsApp, Telegram ou notre formulaire de contact.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Confirmation",
      description: "Nous vérifions votre demande et vous confirmons les détails de la transaction. Paiement sécurisé et transparent.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Traitement",
      description: "Votre transaction est traitée en moins de 5 minutes. Vous recevez une confirmation et votre compte est mis à jour.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-purple-500"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative z-10">
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mb-6">
                    <div className="w-8 h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  {/* Step Number - Improved Design */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-gray-100 rounded-full mb-6 relative shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className={`${step.color} text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.id}
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 ${step.color.replace('bg-', 'bg-').replace('-500', '-400')} rounded-full opacity-20 blur-lg`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('howItWorks.detailedProcess')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Demande</h4>
                <p className="text-sm text-gray-600">Envoyez votre demande avec ID et montant</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Vérification</h4>
                <p className="text-sm text-gray-600">Nous vérifions et confirmons les détails</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Paiement</h4>
                <p className="text-sm text-gray-600">Effectuez le paiement sécurisé</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Confirmation</h4>
                <p className="text-sm text-gray-600">Recevez confirmation et mise à jour</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('howItWorks.readyToTry')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                {t('hero.cta')}
              </a>
              <a href="#testimonials" className="btn-secondary">
                {t('testimonials.title')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
