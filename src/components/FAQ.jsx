import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'
import { motion } from 'framer-motion'
import LogoText from './LogoText'

const FAQ = () => {
  const { t } = useTranslation()
  const { isRTL } = useRTL()
  const [openIndex, setOpenIndex] = useState(0)

  const questions = t('faq.questions', { returnObjects: true })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
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
            {t('faq.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('faq.subtitle', 'أسئلة شائعة')}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <span className="font-semibold text-gray-900"><LogoText>{item.question}</LogoText></span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-gray-600"><LogoText>{item.answer}</LogoText></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
