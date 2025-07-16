import React, { useState, useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function IndustryTestimonials({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef()
  const autoPlayRef = useRef()

  // Debug logging
  console.log('IndustryTestimonials data:', data)
  console.log('IndustryTestimonials testimonials:', data?.testimonials)

  useEffect(() => {
    if (data?.carouselSettings?.autoPlay && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const maxIndex = (data.testimonials?.length || 0) - (data.carouselSettings?.cardsToShow || 3)
          return prev >= maxIndex ? 0 : prev + 1
        })
      }, (data.carouselSettings?.autoPlaySpeed || 5) * 1000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [data, isAutoPlaying])

  const handlePrev = () => {
    setCurrentIndex(prev => {
      const maxIndex = (data.testimonials?.length || 0) - (data.carouselSettings?.cardsToShow || 3)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const handleNext = () => {
    setCurrentIndex(prev => {
      const maxIndex = (data.testimonials?.length || 0) - (data.carouselSettings?.cardsToShow || 3)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating, color) => {
    const starColorClass = {
      'orange': 'text-orange-500',
      'yellow': 'text-yellow-500',
      'gold': 'text-yellow-600'
    }[color] || 'text-orange-500'

    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? starColorClass : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  const getBackgroundColor = (color) => {
    switch (color) {
      case 'light-peach':
        return 'bg-orange-50'
      case 'light-gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  const getCardStyle = (style) => {
    switch (style) {
      case 'rounded-shadow':
        return 'rounded-lg shadow-lg'
      case 'rounded':
        return 'rounded-lg'
      case 'square-shadow':
        return 'shadow-lg'
      default:
        return 'rounded-lg shadow-lg'
    }
  }

  if (!data) {
    return (
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Success Stories Across Industries - Client Testimonials by Industries
            </h2>
          </div>
          
          {/* New Layout: Large middle testimonial with smaller side testimonials */}
          <div className="relative flex items-center justify-center">
            {/* Left Testimonial - Half off-screen */}
            <div className="absolute left-0 transform -translate-x-1/3 opacity-70 scale-90">
              <div className="testimonial-card bg-white rounded-lg shadow-lg p-6 w-[550px] h-48">
                {renderStars(5, 'orange')}
                <p className="text-base font-bold text-gray-900 mb-3">
                  "Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for discussion."
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Kate Williams</p>
                  <p className="text-gray-600 text-xs">Partner, Maxwell Locke & Ritter</p>
                </div>
              </div>
            </div>
            
            {/* Middle Testimonial - Large and centered */}
            <div className="z-10 bg-white rounded-lg shadow-xl p-8 w-[600px]">
              {renderStars(5, 'orange')}
              <p className="text-xl font-bold text-gray-900 mb-6">
                "Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for small group discussion and collaborative problem-solving."
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-lg">Kate Williams</p>
                <p className="text-gray-600">Partner, Maxwell Locke & Ritter</p>
              </div>
            </div>
            
            {/* Right Testimonial - Half off-screen */}
            <div className="absolute right-0 transform translate-x-1/3 opacity-70 scale-90">
              <div className="testimonial-card bg-white rounded-lg shadow-lg p-6 w-[450px] h-48">
                {renderStars(5, 'orange')}
                <p className="text-base font-bold text-gray-900 mb-3">
                  "Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for discussion."
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Kate Williams</p>
                  <p className="text-gray-600 text-xs">Partner, Maxwell Locke & Ritter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const sectionRef = useRef()
  const testimonials = data.testimonials || []
  const cardsToShow = data.carouselSettings?.cardsToShow || 3
  const maxIndex = Math.max(0, testimonials.length - cardsToShow)

  // If no testimonials, show fallback content
  if (testimonials.length === 0) {
    return (
      <section className={`py-16 ${getBackgroundColor(data.backgroundColor)}`} ref={sectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.title || 'Success Stories Across Industries - Client Testimonials by Industries'}
            </h2>
            {data.subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {data.subtitle}
              </p>
            )}
          </div>
          
          {/* New Layout: Large middle testimonial with smaller side testimonials */}
          <div className="relative flex items-center justify-center">
            {/* Left Testimonial - Half off-screen */}
            <div className="absolute left-0 transform -translate-x-1/3 opacity-70 scale-90">
              <div className="testimonial-card bg-white rounded-lg shadow-lg p-6 w-[550px] h-48">
                {renderStars(5, 'orange')}
                <p className="text-base font-bold text-gray-900 mb-3">
                  "Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for discussion."
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Kate Williams</p>
                  <p className="text-gray-600 text-xs">Partner, Maxwell Locke & Ritter</p>
                </div>
              </div>
            </div>
            
            {/* Middle Testimonial - Large and centered */}
            <div className="z-10 bg-white rounded-lg shadow-xl p-8 w-[700px]">
              {renderStars(5, 'orange')}
              <p className="text-xl font-bold text-gray-900 mb-6">
                "Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for small group discussion and collaborative problem-solving."
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-lg">Kate Williams</p>
                <p className="text-gray-600">Partner, Maxwell Locke & Ritter</p>
              </div>
            </div>
            
            {/* Right Testimonial - Half off-screen */}
            <div className="absolute right-0 transform translate-x-1/3 opacity-70 scale-90">
              <div className="testimonial-card bg-white rounded-lg shadow-lg p-6 w-[550px] h-48">
                {renderStars(5, 'orange')}
                <p className="text-base font-bold text-gray-900 mb-3">
                  "Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for discussion."
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Kate Williams</p>
                  <p className="text-gray-600 text-xs">Partner, Maxwell Locke & Ritter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 ${getBackgroundColor(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {data.title || 'Success Stories Across Industries - Client Testimonials by Industries'}
          </h2>
          {data.subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </div>
        
        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {data.carouselSettings?.showArrows && testimonials.length > cardsToShow && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* New Layout: Large middle testimonial with smaller side testimonials */}
          <div className="relative flex items-center justify-center">
            {/* Left Testimonial - Half off-screen */}
            {testimonials.length > 0 && (
              <div className="absolute left-0 transform -translate-x-1/3 opacity-70 scale-90">
                <div className={`testimonial-card bg-white ${getCardStyle(data.cardStyle)} p-6 w-[550px] h-48`}>
                  {renderStars(testimonials[0]?.rating || 5, data.starColor || 'orange')}
                  <p className="text-base font-bold text-gray-900 mb-3">
                    "{testimonials[0]?.quote || 'Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for discussion.'}"
                  </p>
                  <div className="flex items-center space-x-2">
                    {testimonials[0]?.authorImage && (
                      <img
                        src={urlFor(testimonials[0].authorImage).width(32).height(32).url()}
                        alt={testimonials[0].authorName || 'Author'}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonials[0]?.authorName || 'Anonymous'}</p>
                      <p className="text-gray-600 text-xs">
                        {testimonials[0]?.authorTitle && `${testimonials[0].authorTitle}, `}
                        {testimonials[0]?.company || 'Company'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Middle Testimonial - Large and centered */}
            {testimonials.length > 1 && (
              <div className="z-10 bg-white rounded-lg shadow-xl p-8 w-[700px]">
                {renderStars(testimonials[1]?.rating || 5, data.starColor || 'orange')}
                <p className="text-xl font-bold text-gray-900 mb-6">
                  "{testimonials[1]?.quote || 'Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for small group discussion and collaborative problem-solving.'}"
                </p>
                <div className="flex items-center space-x-3">
                  {testimonials[1]?.authorImage && (
                    <img
                      src={urlFor(testimonials[1].authorImage).width(48).height(48).url()}
                      alt={testimonials[1].authorName || 'Author'}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonials[1]?.authorName || 'Anonymous'}</p>
                    <p className="text-gray-600">
                      {testimonials[1]?.authorTitle && `${testimonials[1].authorTitle}, `}
                      {testimonials[1]?.company || 'Company'}
                    </p>
                    {testimonials[1]?.industry && (
                      <p className="text-sm text-gray-500">{testimonials[1].industry}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Right Testimonial - Half off-screen */}
            {testimonials.length > 2 && (
              <div className="absolute right-0 transform translate-x-1/3 opacity-70 scale-90">
                <div className={`testimonial-card bg-white ${getCardStyle(data.cardStyle)} p-6 w-[550px] h-48`}>
                  {renderStars(testimonials[2]?.rating || 5, data.starColor || 'orange')}
                  <p className="text-base font-bold text-gray-900 mb-3">
                    "{testimonials[2]?.quote || 'Information-packed and relevant to my work. The two-day session was packed with information and included opportunities for discussion.'}"
                  </p>
                  <div className="flex items-center space-x-2">
                    {testimonials[2]?.authorImage && (
                      <img
                        src={urlFor(testimonials[2].authorImage).width(32).height(32).url()}
                        alt={testimonials[2].authorName || 'Author'}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonials[2]?.authorName || 'Anonymous'}</p>
                      <p className="text-gray-600 text-xs">
                        {testimonials[2]?.authorTitle && `${testimonials[2].authorTitle}, `}
                        {testimonials[2]?.company || 'Company'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Dots */}
          {data.carouselSettings?.showDots && testimonials.length > cardsToShow && (
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(maxIndex + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    idx === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 