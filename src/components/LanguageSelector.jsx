import React from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useRTL } from '../hooks/useRTL';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { isRTL } = useRTL();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Surveiller les changements de langue
  React.useEffect(() => {
    console.log('Current language in component:', i18n.language);
  }, [i18n.language]);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' }
  ];

  const changeLanguage = (lng) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getDropdownPosition = () => {
    if (!buttonRef.current) return {};
    const rect = buttonRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const dropdownWidth = 192;
    
    let left = rect.left;
    
    // En RTL, aligner à droite du bouton
    if (isRTL) {
      left = rect.right - dropdownWidth;
    }
    
    // Éviter que le dropdown sorte de l'écran
    if (left + dropdownWidth > viewportWidth) {
      left = viewportWidth - dropdownWidth - 16;
    }
    if (left < 16) {
      left = 16;
    }
    
    return {
      top: rect.bottom + window.scrollY + 8,
      left: left,
      width: dropdownWidth
    };
  };

    return (
    <div className="relative language-selector-container" ref={dropdownRef} style={{ zIndex: '2147483646 !important', position: 'relative !important' }}>
      <button 
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <span className="text-lg">
          {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
        </span>
        <span className="hidden md:block text-sm font-medium">
          {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
        </span>
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && createPortal(
        <div 
          ref={dropdownRef}
          className="fixed bg-white rounded-lg shadow-xl border border-gray-200 language-selector-dropdown"
          style={{ 
            zIndex: '2147483647 !important', 
            position: 'fixed !important',
            top: getDropdownPosition().top,
            left: getDropdownPosition().left,
            width: getDropdownPosition().width,
            minWidth: '192px',
            maxWidth: '192px'
          }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${
                i18n.language === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              } ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              {i18n.language === language.code && (
                <svg className={`w-4 h-4 text-primary-600 ${isRTL ? 'mr-auto' : 'ml-auto'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
};

export default LanguageSelector;
