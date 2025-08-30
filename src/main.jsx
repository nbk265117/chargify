import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import './rtl.css'
import './i18n.js'

// Force Arabic as default language
import i18n from './i18n.js'
if (!localStorage.getItem('i18nextLng')) {
  i18n.changeLanguage('ar')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
