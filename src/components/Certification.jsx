import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import LogoText from './LogoText'

const Certification = () => {
  const { t } = useTranslation()

  return (
    <motion.section 
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LogoText>شَرجِفاي</LogoText> وكالة موثوقة لدى{' '}
            <img
              src="/logo/1xbet.webp"
              alt="1xbet"
              className="inline-block align-middle"
              style={{
                height: '1.2em',
                width: 'auto',
                verticalAlign: 'middle'
              }}
            />
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Certification Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in-left">
            <div className="relative group">
              <img
                src="/logo/certif.png"
                alt="Chargify Certified Agency"
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
                             <div className="flex items-center space-x-3 rtl:space-x-reverse">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                 <p className="text-lg text-gray-700 font-medium">
                   من الموقع الرسمي أو من التطبيق :{' '}
                   <a 
                     href="https://1xbet.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-primary-600 hover:text-primary-700 underline font-semibold transition-colors duration-300"
                   >
                     1xbet.com
                   </a>
                 </p>
               </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-primary-600 mr-2">🔗</span>
                  كيفاش تأكّد
                </h3>
                <div className="space-y-3">
                                 <div className="flex items-center space-x-3 rtl:space-x-reverse">
                 <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                 <p className="text-gray-700">دخل لـ السحب (Withdrawal - Retrait)</p>
               </div>
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                   <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                   <p className="text-gray-700">ابحث عن Chargify (24/7) 🟦</p>
                 </div>
               <div className="flex items-center space-x-3 rtl:space-x-reverse">
                 <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                 <p className="text-gray-700">اختار المدينة: Casablanca 📍الدارالبيضاء</p>
               </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">☎️</span>
                  محتاج شي مساعدة؟ حنا خدامين 7/24:
                </h4>
                                 <div 
                   className="whatsapp-number cursor-pointer"
                   onClick={() => {
                     const message = "مرحبا! أريد معلومات عن خدمات شَرجِفاي"
                     const whatsappUrl = `https://wa.me/212777298195?text=${encodeURIComponent(message)}`
                     window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
                   }}
                 >
                   <svg className="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                   </svg>
                   <span>واتساب: 07.77.29.81.95</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-green-100 rounded-full px-4 py-2">
                  <span className="text-green-600">⚡</span>
                  <span className="text-green-800 font-medium">السرعة</span>
                  <span className="text-green-600">✔️</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-blue-100 rounded-full px-4 py-2">
                  <span className="text-blue-600">🛡️</span>
                  <span className="text-blue-800 font-medium">الأمان</span>
                  <span className="text-blue-600">✔️</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-purple-100 rounded-full px-4 py-2">
                  <span className="text-purple-600">💎</span>
                  <span className="text-purple-800 font-medium">الخدمة ديالكم فوق كلشي</span>
                  <span className="text-purple-600">✔️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Certification
