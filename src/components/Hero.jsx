import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import LogoText from './LogoText'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section 
      className="text-white py-16 lg:py-24 w-full overflow-x-hidden relative hero-bg" 
      style={{ zIndex: '0 !important' }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/85 to-primary-800/90"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ maxWidth: '100vw' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight title-arabic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <LogoText>{t('hero.title')}</LogoText>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-blue-100 subtitle-arabic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <LogoText>{t('hero.subtitle')}</LogoText>
              </motion.p>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg text-blue-200 leading-relaxed text-arabic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <LogoText>{t('hero.description')}</LogoText>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a 
                href="#contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center btn-arabic text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta')}
              </motion.a>
              <motion.a 
                href="#features" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-center btn-arabic text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.services')}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs sm:text-sm text-blue-200 text-arabic">{t('features.support.title')}</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{t('features.speedValue')}</div>
                <div className="text-xs sm:text-sm text-blue-200 text-arabic">{t('features.speed.title')}</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-xs sm:text-sm text-blue-200 text-arabic">{t('features.security.title')}</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
            </motion.div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
