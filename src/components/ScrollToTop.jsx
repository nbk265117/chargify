import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 17 
          }}
        >
          {/* Main icon */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 border-2 border-white/30 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
