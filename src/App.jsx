import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import AdvancedTestimonials from './components/AdvancedTestimonials'
import Banks from './components/Banks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Promo from './components/Promo'
import FAQ from './components/FAQ'
import SEO from './components/SEO'
import WhatsAppSticky from './components/WhatsAppSticky'
import PromoSticky from './components/PromoSticky'

import './index.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SEO />
          <Header />
          <main>
            <Hero />
            <Features />
            <Banks />
            <HowItWorks />
            <AdvancedTestimonials />
            <Promo />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsAppSticky />
          <PromoSticky />
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
