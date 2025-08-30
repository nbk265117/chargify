import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'
import { toast } from 'react-toastify'
import LogoText from './LogoText'

const Contact = () => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message with form data
    const whatsappMessage = `مرحبا! أريد معلومات عن خدمات شَرجِفاي

الاسم: ${formData.name}
الهاتف: ${formData.phone}
البريد الإلكتروني: ${formData.email}
الخدمة المطلوبة: ${formData.service}
الرسالة: ${formData.message}`

    // Show success toast
    toast.success(t('contact.thankYouMessage'), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/212777298195?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const handleWhatsAppClick = (phoneNumber) => {
    const message = t('whatsapp.defaultMessage')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleTelegramClick = (username) => {
    const message = t('whatsapp.defaultMessage')
    const telegramUrl = `https://t.me/${username}?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank', 'noopener,noreferrer')
  }

  const handleEmailClick = (email) => {
    const subject = "معلومات عن خدمات شَرجِفاي"
    const body = t('whatsapp.defaultMessage')
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Create a temporary link element to trigger mailto
    const link = document.createElement('a')
    link.href = mailtoUrl
    link.style.display = 'none'
    document.body.appendChild(link)
    
    // Try to click the link
    try {
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      document.body.removeChild(link)
      // Fallback: copy email to clipboard and show toast
      navigator.clipboard.writeText(email).then(() => {
        toast.success('تم نسخ البريد الإلكتروني إلى الحافظة', {
          position: "top-right",
          autoClose: 3000,
        })
      }).catch(() => {
        // Final fallback: just show the email
        alert(`البريد الإلكتروني: ${email}`)
      })
    }
  }

  const contactMethods = [
    {
      name: "WhatsApp",
      value: "07.77.29.81.95",
      phoneNumber: "+212777298195",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: "bg-green-500",
      isClickable: true
    },
    {
      name: "Telegram",
      value: "@chargify_support",
      username: "chargify_support",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      color: "bg-blue-500",
      isClickable: true
    },
    {
      name: "Email",
      value: "contact@chargify.store",
      email: "contact@chargify.store",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-red-500",
      isClickable: true
    }
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <LogoText>{t('contact.subtitle')}</LogoText>
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-cols-2-reverse' : ''}`}>
          {/* Contact Form */}
          <div className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.sendMessage')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t('contact.namePlaceholder')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t('contact.phonePlaceholder')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.emailPlaceholder')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.service')} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <option value="">{t('contact.selectService')}</option>
                  <option value="recharge">{t('contact.recharge')}</option>
                  <option value="depot">{t('contact.deposit')}</option>
                  <option value="retrait">{t('contact.withdrawal')}</option>
                  <option value="autre">{t('contact.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.messagePlaceholder')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('contact.contactInfo')}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <LogoText>{t('contact.contactDescription')}</LogoText>
              </p>
            </div>
            
            {/* Contact Methods Container - Always LTR */}
            <div className="ltr-container">

            {/* Contact Methods */}
            <div className="space-y-8 contact-methods">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${method.isClickable ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                  onClick={method.isClickable ? () => {
                    if (method.phoneNumber) {
                      handleWhatsAppClick(method.phoneNumber)
                    } else if (method.username) {
                      handleTelegramClick(method.username)
                    } else if (method.email) {
                      handleEmailClick(method.email)
                    }
                  } : undefined}
                >
                  <div className={`${method.color} text-white w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mr-4`}>
                    {method.icon}
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1 text-left">{method.name}</h4>
                    <p className="text-gray-600 font-medium text-left">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">{t('contact.importantInfo')}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'text-right' : 'text-left'}>{t('contact.available24h')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'text-right' : 'text-left'}>{t('contact.processing5min')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'text-right' : 'text-left'}>{t('contact.multilingualSupport')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={isRTL ? 'text-right' : 'text-left'}><LogoText>{t('contact.secureTransactions')}</LogoText></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
