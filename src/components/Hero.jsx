import React from 'react'
import { useTranslation } from 'react-i18next'
import LogoText from './LogoText'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section 
      className="text-white py-16 lg:py-24 w-full overflow-x-hidden relative" 
      style={{ 
        zIndex: '0 !important',
        backgroundImage: 'url(/logo/bg.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/85 to-primary-800/90"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ maxWidth: '100vw' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight title-arabic">
                <LogoText>{t('hero.title')}</LogoText>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 subtitle-arabic">
                <LogoText>{t('hero.subtitle')}</LogoText>
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-blue-200 leading-relaxed text-arabic">
              <LogoText>{t('hero.description')}</LogoText>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center btn-arabic text-sm sm:text-base">
                {t('hero.cta')}
              </a>
              <a href="#features" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-center btn-arabic text-sm sm:text-base">
                {t('nav.services')}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs sm:text-sm text-blue-200 text-arabic">{t('features.support.title')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{t('features.speedValue')}</div>
                <div className="text-xs sm:text-sm text-blue-200 text-arabic">{t('features.speed.title')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-xs sm:text-sm text-blue-200 text-arabic">{t('features.security.title')}</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
                    <h3 className="text-base sm:text-lg font-semibold title-arabic rtl:text-right ltr:text-left">{t('services.deposit.title')}</h3>
                    <p className="text-sm sm:text-base text-blue-200 text-arabic rtl:text-right ltr:text-left"><LogoText>{t('services.deposit.description')}</LogoText></p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
                    <h3 className="text-base sm:text-lg font-semibold title-arabic rtl:text-right ltr:text-left">{t('services.withdrawal.title')}</h3>
                    <p className="text-sm sm:text-base text-blue-200 text-arabic rtl:text-right ltr:text-left"><LogoText>{t('services.withdrawal.description')}</LogoText></p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
                    <h3 className="text-base sm:text-lg font-semibold title-arabic rtl:text-right ltr:text-left">{t('services.support.title')}</h3>
                    <p className="text-sm sm:text-base text-blue-200 text-arabic rtl:text-right ltr:text-left"><LogoText>{t('services.support.description')}</LogoText></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce-slow animation-delay-200"></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
