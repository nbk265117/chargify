import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import { useRTL } from '../hooks/useRTL'
import LogoText from './LogoText'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const { isRTL } = useRTL()
  const { i18n } = useTranslation()

  // Debug logging
  console.log('Current language:', i18n.language)
  console.log('Is RTL:', isRTL)
  console.log('Language check result:', i18n.language === 'ar')



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 w-full overflow-x-hidden z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-4">
          {/* Mobile/Tablet Layout (md:hidden) - RTL RESPECTFUL */}
          <div className={`md:hidden flex justify-between items-center w-full ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
            
            {i18n.language === 'ar' ? (
              // Arabic RTL Layout: Language Selector | Logo | Hamburger Menu
              <>
                {/* Left - Language Selector */}
                <div className="flex items-center">
                  <LanguageSelector />
                </div>
                
                {/* Center - Logo */}
                <div className="flex-shrink-0 text-center">
                  <h1 className="text-xl sm:text-2xl font-bold text-gradient">
                    <LogoText>{t('hero.title')}</LogoText>
                  </h1>
                  <p className="text-xs text-gray-500 block"><LogoText>{t('hero.desc')}</LogoText></p>
                </div>
                
                {/* Right - Hamburger Menu */}
                <div className="flex items-center">
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
              </>
            ) : (
              // LTR Layout: Hamburger Menu | Logo | Language Selector
              <>
                {/* Left - Hamburger Menu */}
                <div className="flex items-center">
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
                
                {/* Center - Logo */}
                <div className="flex-shrink-0 text-center">
                  <h1 className="text-xl sm:text-2xl font-bold text-gradient">
                    <LogoText>{t('hero.title')}</LogoText>
                  </h1>
                  <p className="text-xs text-gray-500 block"><LogoText>{t('hero.desc')}</LogoText></p>
                </div>
                
                {/* Right - Language Selector */}
                <div className="flex items-center">
                  <LanguageSelector />
                </div>
              </>
            )}
          </div>

          {/* Desktop Layout (hidden md:flex) - CUSTOM ARABIC ORDER */}
          <div className="hidden md:flex justify-between items-center w-full">
            {i18n.language !== 'ar' ? (
              // LTR Layout (French/English)
              <>
                {/* Left side - Logo */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className="text-xl sm:text-2xl font-bold text-gradient">
                      <LogoText>{t('hero.title')}</LogoText>
                    </h1>
                    <p className="text-xs text-gray-500 block"><LogoText>{t('hero.desc')}</LogoText></p>
                  </div>
                </div>

                {/* Center - Navigation */}
                <nav className="flex space-x-8">
                  <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('nav.services')}
                  </a>
                  <a href="#banks" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('nav.banks')}
                  </a>
                  <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('howItWorks.title')}
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('nav.contact')}
                  </a>
                </nav>

                {/* Right side - Language Selector + Button */}
                <div className="flex items-center space-x-4">
                  <LanguageSelector />
                  <a href="#contact" className="btn-primary">
                    {t('hero.cta')}
                  </a>
                </div>
              </>
            ) : (
              // Arabic Layout - Custom Order: Logo, Subtitle, Menu, Language Selector, Button
              <>
                {/* Left side - Logo + Subtitle */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-start">
                    <h1 className="text-xl sm:text-2xl font-bold text-gradient">
                      <LogoText>{t('hero.title')}</LogoText>
                    </h1>
                    <p className="text-xs text-gray-500 block"><LogoText>{t('hero.desc')}</LogoText></p>
                  </div>
                </div>

                {/* Center - Navigation */}
                <nav className="flex space-x-reverse space-x-8">
                  <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('nav.services')}
                  </a>
                  <a href="#banks" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('nav.banks')}
                  </a>
                  <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('howItWorks.title')}
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-300">
                    {t('nav.contact')}
                  </a>
                </nav>

                {/* Right side - Language Selector + Button */}
                <div className="flex items-center space-x-4">
                  <LanguageSelector />
                  <a href="#contact" className="btn-primary">
                    {t('hero.cta')}
                  </a>
                </div>
              </>
            )}
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
                href="#banks"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.banks')}
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
