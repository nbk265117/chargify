import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import AdvancedTestimonials from './components/AdvancedTestimonials'
import Certification from './components/Certification'
import Banks from './components/Banks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Promo from './components/Promo'
import FAQ from './components/FAQ'
import SEO from './components/SEO'
import WhatsAppSticky from './components/WhatsAppSticky'
import PromoSticky from './components/PromoSticky'
import ScrollToTop from './components/ScrollToTop'

import './index.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SEO />
          <Header />
          <AnimatePresence mode="wait">
            <main>
              <Hero />
              <Features />
              <Certification />
              <Banks />
              <HowItWorks />
              <AdvancedTestimonials />
              <Promo />
              <FAQ />
              <Contact />
            </main>
          </AnimatePresence>
          <Footer />
          <WhatsAppSticky />
          <PromoSticky />
          <ScrollToTop />
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
