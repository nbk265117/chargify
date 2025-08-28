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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gradient">
                Chargify
              </h1>
              <p className="text-xs text-gray-500">{t('hero.subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('nav.services')}
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('features.title')}
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('howItWorks.title')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Selector and CTA */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <LanguageSelector />
            <a href="#contact" className="btn-primary">
              {t('hero.cta')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('features.title')}
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
