import React from 'react'
import { useTranslation } from 'react-i18next'
import LogoText from './LogoText'

const Certification = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
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
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full animate-slide-in"></div>
        </div>

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
                   <span className="whatsapp-icon">📲</span>
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
    </section>
  )
}

export default Certification
