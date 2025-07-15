import React from 'react'
import { motion } from 'framer-motion'

const CareerCTA = ({ data }) => {
  if (!data) return null

  const { headline, subtext, ctaButton } = data

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
              {headline}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              {subtext}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href={ctaButton?.link}
                variants={buttonVariants}
                whileHover="hover"
                className="inline-block bg-white text-gray-800 font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white hover:bg-gray-50"
              >
                {ctaButton?.text}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CareerCTA 