import React from 'react'
import { motion } from 'framer-motion'

// Fade in animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Animated Section Component
export const AnimatedSection = ({ children, className = "", delay = 0, ...props }) => (
  <motion.section
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    variants={fadeInUp}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
)

// Animated Card Component
export const AnimatedCard = ({ children, className = "", delay = 0, hover = true, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    whileHover={hover ? { scale: 1.02, y: -5 } : {}}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    variants={scaleIn}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

// Animated Button Component
export const AnimatedButton = ({ children, className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
)

// Animated Link Component
export const AnimatedLink = ({ children, className = "", ...props }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={className}
    {...props}
  >
    {children}
  </motion.a>
)

// Animated Image Component
export const AnimatedImage = ({ src, alt, className = "", delay = 0, ...props }) => (
  <motion.img
    src={src}
    alt={alt}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    className={className}
    {...props}
  />
)

// Animated Text Component
export const AnimatedText = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    variants={fadeInUp}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

// Animated List Component
export const AnimatedList = ({ children, className = "", ...props }) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

// Animated List Item Component
export const AnimatedListItem = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ duration: 0.5, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

// Floating Animation Component
export const FloatingElement = ({ children, className = "", ...props }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

// Pulse Animation Component
export const PulseElement = ({ children, className = "", ...props }) => (
  <motion.div
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

// Shimmer Effect Component
export const ShimmerCard = ({ children, className = "", ...props }) => (
  <motion.div
    className={`relative overflow-hidden ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    {...props}
  >
    {children}
    <motion.div
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{ x: ["100%", "200%"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
)
