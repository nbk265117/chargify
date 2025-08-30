import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../hooks/useRTL'
import './PromoSticky.css'

const PromoSticky = () => {
  const { t } = useTranslation()
  const { isRTL } = useRTL()
  
  const handlePromoClick = () => {
    // Copy promo code to clipboard
    navigator.clipboard.writeText('FLY255').then(() => {
      // Show a brief notification (you can enhance this)
      console.log('Promo code copied to clipboard!')
    }).catch(err => {
      console.error('Failed to copy promo code: ', err)
    })
  }

  return (
    <div 
      className="fixed bottom-4 sm:bottom-6 z-[9998] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >


      {/* Promo Button Container */}
      <div className="relative flex justify-center items-center w-auto h-12 sm:h-14">
        {/* Promo Button */}
        <button
          onClick={handlePromoClick}
          className="promo-sticky-button block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 touch-manipulation h-full flex flex-col items-center justify-center px-3 py-2"
          aria-label="كود الترويجي FLY255"
          title="كود الترويجي FLY255"
        >
          <div className="text-xs font-bold leading-tight">PROMO: FLY255</div>
          <div className="text-xs font-bold leading-tight">2000 درهم</div>
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-purple-400 rounded-lg promo-pulse pointer-events-none"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-purple-300 rounded-lg animate-pulse opacity-20 pointer-events-none"></div>
      </div>

      {/* Promo Content Popup */}
      <div className="promo-content bg-white rounded-lg shadow-xl p-4 mb-3 border border-gray-200 text-center min-w-[200px]">
        <div className="text-lg font-bold text-purple-600 mb-1">PROMO FLY255</div>
        <div className="text-2xl font-bold text-gray-800">2000 درهم</div>
        <div className="text-xs text-gray-500 mt-1">أول شحن كيوصل حتى 2000 درهم</div>
      </div>
    </div>
  )
}

export default PromoSticky
