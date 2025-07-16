import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import { urlFor } from '../utils/imageBuilder'

export default function Testimonials({ items }) {
  // Debug logging
  console.log('Testimonials items:', items)
  console.log('Testimonials items type:', typeof items)
  console.log('Testimonials items length:', items ? items.length : 'no items')
  
  const sectionRef = useRef()
  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: sectionRef.current.querySelectorAll('.testimonial-card'),
      //   opacity: [0,1],
      //   translateY: [40,0],
      //   delay: anime.stagger(200),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // })
    }
  }, [items])
  
  // Check if we have items to display
  if (!items || items.length === 0) {
    console.log('Testimonials: No items to display')
    return null
  }

  const renderStars = (rating) => {
    if (!rating) return null
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-orange-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }
  
  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={item._id || index} className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {renderStars(item.rating)}
              <p className="italic text-gray-700 mb-4">"{item.quote}"</p>
              <div className="flex items-center">
                {item.photo ? (
                  <img
                    src={urlFor(item.photo).width(64).height(64).url()}
                    alt={item.author || item.name || 'Author'}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-lg">
                      {(item.author || item.name || 'A').charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{item.author || item.name || 'Unknown Author'}</p>
                  <p className="text-sm text-gray-600">{item.role || 'Unknown Role'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
