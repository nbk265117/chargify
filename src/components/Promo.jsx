import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'
import { motion } from 'framer-motion'
import LogoText from './LogoText'

const Promo = () => {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <motion.section 
      id="promo" 
      className="py-12 bg-gradient-to-br from-yellow-50 to-orange-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promo Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LogoText>{t('promo.title')}</LogoText>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('promo.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Promo Card */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('promo.welcomeCode')}
              </motion.h3>
              <motion.div 
                className="bg-white text-orange-600 text-3xl font-bold py-4 px-6 rounded-lg mb-4 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 2,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {t('promo.code')}
              </motion.div>
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t('promo.description')}
              </motion.p>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div 
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            {t('promo.features', { returnObjects: true }).map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Promo
