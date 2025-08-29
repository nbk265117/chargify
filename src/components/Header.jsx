import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import { useRTL } from '../hooks/useRTL'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 w-full overflow-x-hidden" style={{ zIndex: '2147483646 !important' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ maxWidth: '100vw' }}>
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo in LTR, Language Selector in RTL */}
          <div className="flex items-center">
            {!isRTL ? (
              // Logo on the left for LTR languages
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold text-gradient">
                  {t('hero.title')}
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">{t('hero.subtitle')}</p>
              </div>
            ) : (
              // Language Selector on the left for RTL languages
              <div className="hidden md:flex items-center space-x-4">
                <LanguageSelector />
                <a href="#contact" className="btn-primary">
                  {t('hero.cta')}
                </a>
              </div>
            )}
          </div>

          {/* Desktop Navigation - Center */}
          <nav className={`hidden md:flex ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('nav.services')}
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('howItWorks.title')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Right side - Language Selector in LTR, Logo in RTL */}
          <div className="flex items-center">
            {!isRTL ? (
              // Language Selector on the right for LTR languages
              <div className="hidden md:flex items-center space-x-4">
                <LanguageSelector />
                <a href="#contact" className="btn-primary">
                  {t('hero.cta')}
                </a>
              </div>
            ) : (
              // Logo on the right for RTL languages
              <div className="flex-shrink-0 text-right">
                <h1 className="text-xl sm:text-2xl font-bold text-gradient">
                  {t('hero.title')}
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">{t('hero.subtitle')}</p>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 p-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('howItWorks.title')}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="pt-4">
                <a href="#contact" className="btn-primary w-full text-center block">
                  {t('hero.cta')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
