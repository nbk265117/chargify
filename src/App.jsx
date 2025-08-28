import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RTLWrapper from './components/RTLWrapper'
import SEO from './components/SEO'

function App() {
  return (
    <RTLWrapper>
      <SEO />
      <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden" style={{ maxWidth: '100vw' }}>
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </RTLWrapper>
  )
}

export default App
