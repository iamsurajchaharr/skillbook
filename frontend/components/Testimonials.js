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
  
  return (
    <section className="py-16 container mx-auto px-6" ref={sectionRef}>
      <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={item._id || index} className="testimonial-card bg-white p-6 rounded shadow opacity-100">
            <p className="italic">“{item.quote}”</p>
            <div className="mt-4 flex items-center">
              <img
                src={item.photo ? urlFor(item.photo).width(64).height(64).url() : '/placeholder-avatar.png'}
                alt={item.author || item.name || 'Author'}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold">{item.author || item.name || 'Unknown Author'}</p>
                <p className="text-sm text-gray-600">{item.role || 'Unknown Role'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
