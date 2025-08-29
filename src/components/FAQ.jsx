import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'

const FAQ = () => {
  const { t } = useTranslation()
  const { isRTL } = useRTL()
  const [openIndex, setOpenIndex] = useState(0)

  const questions = t('faq.questions', { returnObjects: true })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle', 'أسئلة شائعة')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
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
                  <p className="text-gray-600">{item.answer}</p>
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
