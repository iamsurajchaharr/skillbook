import React from 'react'
import { motion } from 'framer-motion'

const CareerCTA = ({ data }) => {
  if (!data) {
    return (
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-red-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to take your career to a whole new level?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Let us help you get there
              </p>
              <a
                href="#"
                className="inline-block bg-white text-gray-800 font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white hover:bg-gray-50"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const { headline, subtext, ctaButton } = data
  
  // Add fallbacks for missing data
  const safeHeadline = headline || 'Ready to take your career to a whole new level?'
  const safeSubtext = subtext || 'Let us help you get there'
  const safeCtaButton = ctaButton || { text: 'Get Started Today', link: '#' }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {safeHeadline}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              {safeSubtext}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href={safeCtaButton?.link}
                variants={buttonVariants}
                whileHover="hover"
                className="inline-block bg-white text-gray-800 font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white hover:bg-gray-50"
              >
                {safeCtaButton?.text}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CareerCTA 