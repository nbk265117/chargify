import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'
import { motion } from 'framer-motion'

const Banks = () => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();

  const banks = [
    {
      id: 1,
      name: "Attijariwafa Bank",
      logo: "/banks/awb_logo.png",
      alt: "بنك التجاري وفا بنك"
    },
    {
      id: 2,
      name: "Banque Populaire",
      logo: "/banks/bp_logo.svg",
      alt: "البنك الشعبي"
    },
    {
      id: 3,
      name: "Bank of Africa",
      logo: "/banks/boa_logo.png",
      alt: "بنك أفريقيا"
    },
    {
      id: 4,
      name: "CIH Bank",
      logo: "/banks/cih_logo.png",
      alt: "بنك CIH"
    },
    {
      id: 5,
      name: "CFG Bank",
      logo: "/banks/cfg_logo.svg",
      alt: "CFG"
    },
    {
      id: 6,
      name: "Crédit du Maroc",
      logo: "/banks/cdm_logo.svg",
      alt: "كريديت دو ماروك"
    },
    {
      id: 7,
      name: "Saham Assurance",
      logo: "/banks/saham_logo.svg",
      alt: "سهام للتأمين"
    },
    {
      id: 8,
      name: "Cash Plus",
      logo: "/banks/cashplus_logo.svg",
      alt: "كاش بلاس"
    },
    {
      id: 9,
      name: "Jibi",
      logo: "/banks/jibi_logo.png",
      alt: "جيبى"
    }
  ];

  return (
    <section id="banks" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Animation */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 title-arabic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('banks.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto text-arabic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('banks.subtitle')}
          </motion.p>
          <motion.p 
            className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto text-arabic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('banks.description')}
          </motion.p>
        </motion.div>

        {/* Banks Grid with Enhanced Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {banks.map((bank, index) => (
            <div 
              key={bank.id} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="flex flex-col items-center justify-center h-32">
                <img 
                  src={bank.logo} 
                  alt={bank.alt}
                  className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-all duration-500 ease-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="text-gray-400 text-sm font-medium text-center mt-2"
                  style={{ display: 'none' }}
                >
                  {bank.name}
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banks
