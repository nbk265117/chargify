import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import AdvancedTestimonials from './components/AdvancedTestimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Promo from './components/Promo'
import FAQ from './components/FAQ'
import SEO from './components/SEO'
import WhatsAppSticky from './components/WhatsAppSticky'

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
            <HowItWorks />
            <AdvancedTestimonials />
            <Promo />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsAppSticky />
          
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
