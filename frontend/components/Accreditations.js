import React from 'react'
import { urlFor } from '../utils/imageBuilder'
import { motion } from 'framer-motion'

const Accreditations = ({ data }) => {
  if (!data) return null

  const { title, description, accreditations, ctaButton } = data

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Accreditation Cards */}
      <div className="relative -mt-8 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {accreditations?.map((accreditation, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    {accreditation.logo && (
                      <img
                        src={urlFor(accreditation.logo).width(96).height(96).url()}
                        alt={accreditation.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {accreditation.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {accreditation.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12"
          >
            <motion.a
              href={ctaButton?.link}
              whileHover="hover"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaButton?.text}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Accreditations 