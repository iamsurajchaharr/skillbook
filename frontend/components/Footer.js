import React from 'react'
import { urlFor } from '../utils/imageBuilder'
import { motion } from 'framer-motion'

const Footer = ({ data }) => {
  if (!data) return null

  const { logo, logoText, socialMedia, paymentMethods, sslText, contactInfo, navigationLinks } = data

  const getSocialIcon = (platform) => {
    const icons = {
      facebook: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
        </svg>
      ),
      youtube: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      tiktok: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    }
    return icons[platform] || null
  }

  const getCountryFlag = (country) => {
    const flags = {
      usa: '🇺🇸',
      canada: '🇨🇦',
      uk: '🇬🇧',
      australia: '🇦🇺',
    }
    return flags[country] || ''
  }

  const getSocialColor = (platform) => {
    const colors = {
      facebook: 'text-blue-600',
      twitter: 'text-blue-400',
      linkedin: 'text-blue-700',
      instagram: 'text-pink-500',
      youtube: 'text-red-600',
      tiktok: 'text-black',
    }
    return colors[platform] || 'text-gray-400'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Branding and Social Media */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                {logo && (
                  <img
                    src={urlFor(logo).width(48).height(48).url()}
                    alt="Skillbook Academy"
                    className="w-12 h-12"
                  />
                )}
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold">{logoText?.skillbook}</span>
                  <span className="text-2xl font-bold">
                    {logoText?.academy?.split('').map((char, index) => (
                      <span key={index} className={char === 'A' ? 'text-red-500' : ''}>
                        {char}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialMedia?.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${getSocialColor(social.platform)} hover:opacity-80 transition-opacity duration-200`}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Center - Payment and Security */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Payment Methods */}
              <div>
                <h4 className="text-lg font-semibold mb-4">We Accept:</h4>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods?.map((payment, index) => (
                    <div
                      key={index}
                      className="border border-white rounded px-3 py-2 bg-white"
                    >
                      {payment.logo && (
                        <img
                          src={urlFor(payment.logo).width(60).height(40).url()}
                          alt={payment.name}
                          className="h-6 w-auto"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* SSL Security */}
              <div className="flex items-center space-x-2 text-green-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{sslText}</span>
              </div>
            </motion.div>

            {/* Right - Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Contact us:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pre Registration Enquiry */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Pre Registration Enquiry</h4>
                  <div className="space-y-2">
                    {contactInfo?.phoneNumbers?.map((phone, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">{phone.number}</span>
                        <span className="text-lg">{getCountryFlag(phone.country)}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{contactInfo?.email}</span>
                    </div>
                  </div>
                </div>

                {/* Post Registration Support */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Post Registration Support</h4>
                  <div className="space-y-2">
                    {contactInfo?.phoneNumbers?.map((phone, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">{phone.number}</span>
                        <span className="text-lg">{getCountryFlag(phone.country)}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{contactInfo?.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="border-t border-gray-700"></motion.div>

          {/* Bottom Section - Navigation Links */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Courses */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <div className="space-y-2">
                {navigationLinks?.courses?.map((course, index) => (
                  <a
                    key={index}
                    href={course.url}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {course.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Company</h4>
              <div className="space-y-2">
                {navigationLinks?.company?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Resources</h4>
              <div className="space-y-2">
                {navigationLinks?.resources?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
