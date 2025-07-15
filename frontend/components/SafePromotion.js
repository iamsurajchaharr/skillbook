import React from 'react'
import { urlFor } from '../utils/imageBuilder'
import { motion } from 'framer-motion'

const SafePromotion = ({ data }) => {
  // Debug logging
  console.log('SafePromotion data:', data)
  
  if (!data) {
    console.log('SafePromotion: No data provided')
    return null
  }

  const { logo, logoSubtext, headline, ctaButton, benefits } = data
  
  // Check if required fields are present
  if (!headline || !ctaButton || !benefits || benefits.length === 0) {
    console.log('SafePromotion: Missing required fields', { headline, ctaButton, benefits })
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Logo, Headline, CTA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Logo */}
              <motion.div variants={itemVariants} className="space-y-4">
                {logo && (
                  <div className="max-w-xs">
                    <img
                      src={urlFor(logo).width(300).url()}
                      alt="SAFe® Logo"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <p className="text-gray-500 text-sm font-medium">
                  {logoSubtext}
                </p>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
              >
                {headline}
              </motion.h2>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.a
                  href={ctaButton?.link}
                  variants={buttonVariants}
                  whileHover="hover"
                  className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {ctaButton?.text}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 mb-8"
              >
                Key Benefits of SAFe® Adoption
              </motion.h3>
              
              <div className="space-y-6">
                {benefits?.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    {/* Checkmark Icon */}
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Benefit Text */}
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {benefit.benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafePromotion 