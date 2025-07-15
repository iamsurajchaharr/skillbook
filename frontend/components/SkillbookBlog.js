import React, { useState, useEffect, useRef } from 'react'
import { urlFor } from '../utils/imageBuilder'
import anime from 'animejs'

export default function SkillbookBlog({ data }) {
  // Debug logging
  console.log('SkillbookBlog data:', data)
  console.log('SkillbookBlog data type:', typeof data)
  console.log('SkillbookBlog data keys:', data ? Object.keys(data) : 'no data')
  console.log('Blog posts data:', data?.blogPosts)
  console.log('Blog posts length:', data?.blogPosts?.length)
  console.log('Blog posts type:', typeof data?.blogPosts)
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('blogs')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef()
  const autoPlayRef = useRef()

  useEffect(() => {
    if (sectionRef.current) {
      // anime({
      //   targets: sectionRef.current.querySelectorAll('.blog-card'),
      //   opacity: [0,1],
      //   translateY: [30,0],
      //   // delay: anime.stagger(200),
      //   duration: 800,
      //   easing: 'easeOutExpo'
      // })
    }
  }, [data])

  useEffect(() => {
    if (data?.carouselSettings?.autoPlay && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const maxIndex = (data.blogPosts?.length || 0) - (data.carouselSettings?.cardsToShow || 3)
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
      const maxIndex = (data.blogPosts?.length || 0) - (data.carouselSettings?.cardsToShow || 3)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const handleNext = () => {
    setCurrentIndex(prev => {
      const maxIndex = (data.blogPosts?.length || 0) - (data.carouselSettings?.cardsToShow || 3)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue)
    setCurrentIndex(0) // Reset to first slide when changing tabs
  }

  const getCategoryColor = (color) => {
    switch (color) {
      case 'coral-red':
        return 'bg-red-500'
      case 'blue':
        return 'bg-blue-500'
      case 'green':
        return 'bg-green-500'
      case 'purple':
        return 'bg-purple-500'
      default:
        return 'bg-red-500'
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

  const getSectionBackground = (color) => {
    switch (color) {
      case 'light-gray':
        return 'bg-gray-50'
      case 'light-blue':
        return 'bg-blue-50'
      default:
        return 'bg-white'
    }
  }

  const getButtonColor = (color) => {
    switch (color) {
      case 'coral-red':
        return 'bg-red-500 hover:bg-red-600'
      default:
        return 'bg-red-500 hover:bg-red-600'
    }
  }

  if (!data) {
    console.log('SkillbookBlog: No data provided')
    return null
  }

  // Check if we have the minimum required data
  if (!data.title && (!data.blogPosts || data.blogPosts.length === 0)) {
    console.log('SkillbookBlog: Missing required fields', { title: data.title, blogPosts: data.blogPosts })
    return null
  }
  
  // If we have data but no blog posts, show a fallback
  if (!data.blogPosts || data.blogPosts.length === 0) {
    console.log('SkillbookBlog: No blog posts found, showing fallback')
    return (
      <section className={`py-16 ${getSectionBackground(data.backgroundColor)}`}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.title || 'The Skillbook Blog'}
            </h2>
          </div>

          {/* Navigation Tabs */}
          {data.tabs && data.tabs.length > 0 && (
            <div className="flex justify-center mb-8">
              <div className="flex space-x-8">
                {data.tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTabClick(tab.value)}
                    className={`text-gray-700 font-medium pb-2 border-b-2 transition-colors duration-300 ${
                      activeTab === tab.value 
                        ? 'border-red-500 text-red-500' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Fallback Content */}
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-8">
              Coming soon! We're preparing amazing content for you.
            </p>
          </div>

          {/* CTA Button */}
          {data.ctaButton && (
            <div className="text-center">
              <a 
                href={data.ctaButton.link || '#'}
                className={`${getButtonColor(data.ctaButton.backgroundColor)} text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block`}
              >
                {data.ctaButton.text || 'View all resources'}
              </a>
            </div>
          )}
        </div>
      </section>
    )
  }

  const sectionRef = useRef()
  
  // Handle different possible data structures
  let blogPosts = data.blogPosts || []
  
  // If blogPosts is not an array, try to convert it
  if (!Array.isArray(blogPosts)) {
    console.log('Blog posts is not an array, attempting to convert:', blogPosts)
    if (typeof blogPosts === 'string') {
      blogPosts = [{ title: blogPosts, description: 'Blog post description' }]
    } else if (blogPosts && typeof blogPosts === 'object') {
      blogPosts = [blogPosts]
    } else {
      blogPosts = []
    }
  }
  
  const cardsToShow = Math.min(data.carouselSettings?.cardsToShow || 3, blogPosts.length)
  const maxIndex = Math.max(0, blogPosts.length - cardsToShow)
  
  console.log('SkillbookBlog rendering with:', { 
    blogPosts: blogPosts.length, 
    cardsToShow, 
    maxIndex,
    title: data.title,
    tabs: data.tabs?.length
  })
  console.log('Blog posts array:', blogPosts)
  console.log('Blog posts array type:', Array.isArray(blogPosts))

  return (
    <section className={`py-16 ${getSectionBackground(data.backgroundColor)}`} ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {data.title || 'The Skillbook Blog'}
          </h2>
        </div>

        {/* Navigation Tabs */}
        {data.tabs && data.tabs.length > 0 && (
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8">
              {data.tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabClick(tab.value)}
                  className={`text-gray-700 font-medium pb-2 border-b-2 transition-colors duration-300 ${
                    activeTab === tab.value 
                      ? 'border-red-500 text-red-500' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Blog Cards Carousel */}
        <div className="relative mb-8">
          <div className="flex space-x-6 overflow-hidden" ref={carouselRef}>
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className={`blog-card opacity-100 flex-shrink-0 w-full md:w-1/${Math.max(1, cardsToShow)} bg-white ${getCardStyle(data.cardStyle)} overflow-hidden transition-transform duration-500`}
                style={{
                  transform: blogPosts.length > cardsToShow ? `translateX(-${currentIndex * (100 / cardsToShow)}%)` : 'none'
                }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  {post.image ? (
                    <img
                      src={urlFor(post.image).width(400).height(200).url()}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  )}
                </div>
                <div className="p-6">
                  {post.category && (
                    <span className={`inline-block ${getCategoryColor(post.categoryColor)} text-white text-xs px-3 py-1 rounded-full mb-3`}>
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title || 'Benefits of a Scrummaster Certification'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.description || 'Scrum is a widely implemented agile framework for developing, delivering, and sustaining products in complex environments.'}
                  </p>
                  <a 
                    href={post.link || '#'} 
                    className="text-red-500 font-medium hover:text-red-600 transition-colors"
                  >
                    {post.readMoreText || 'Read →'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {data.carouselSettings?.showArrows && blogPosts.length > cardsToShow && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black rounded-full p-3 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {data.carouselSettings?.showDots && blogPosts.length > cardsToShow && (
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA Button */}
        {data.ctaButton && (
          <div className="text-center">
            <a 
              href={data.ctaButton.link || '#'}
              className={`${getButtonColor(data.ctaButton.backgroundColor)} text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block`}
            >
              {data.ctaButton.text || 'View all resources'}
            </a>
          </div>
        )}
      </div>
    </section>
  )
} 