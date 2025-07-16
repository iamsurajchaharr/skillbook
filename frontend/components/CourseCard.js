import React from 'react'
import { urlFor } from '../utils/imageBuilder'

export default function CourseCard({ course }) {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'clock':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'dollar':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        )
      case 'calendar':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      case 'document':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="course-card bg-white rounded-lg shadow-lg overflow-hidden border border-gray-400 hover:shadow-xl transition-shadow duration-300 p-2 max-w-sm mx-auto">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image ? urlFor(course.image).width(400).height(200).url() : '/placeholder-course.jpg'}
          alt={course.title}
          className="w-full h-28 object-cover"
        />
      </div>
      
      {/* Course Content */}
      <div className="p-3">
        {/* Title */}
        <div className="mb-2">
          <h3 className="font-bold text-xs text-gray-900 leading-tight">
            {course.title}
          </h3>
        </div>
        
        {/* Google Reviews */}
        {course.reviewCount && (
          <div className="flex items-center space-x-2 mb-2">
            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-gray-700">{course.rating || '4.9'}/5</span>
            </div>
            
            {/* Google Logo */}
            <div className="flex items-center">
              <span className="text-blue-600 font-semibold text-xs mr-1">G</span>
              <span className="text-red-600 font-semibold text-xs mr-1">o</span>
              <span className="text-yellow-600 font-semibold text-xs mr-1">o</span>
              <span className="text-blue-600 font-semibold text-xs mr-1">g</span>
              <span className="text-green-600 font-semibold text-xs mr-1">l</span>
              <span className="text-red-600 font-semibold text-xs mr-2">e</span>
            </div>
            <span className="text-xs text-gray-600">({course.reviewCount} Reviews)</span>
          </div>
        )}
        
        {/* Course Features */}
        <div className="grid grid-cols-2 gap-1 mb-2">
          <div className="flex items-center space-x-1 text-xs text-gray-600">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Online Classes</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-600">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <span>Exam fee included</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-600">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>16 hrs | 2 Days</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-600">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Free Course Material</span>
          </div>
        </div>
        
        {/* Enrollment Count */}
        {course.enrollmentCount && (
          <div className="flex items-center space-x-1 mb-2">
            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs text-gray-600">{course.enrollmentCount} Enrolled</span>
          </div>
        )}
        
        {/* Pricing and Button */}
        <div className="mt-2 pt-2 border-t border-gray-200">
          <div className="flex items-center justify-between">
            {/* Pricing */}
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-black">
                ${course.currentPrice || course.price || '499'}
              </span>
              {course.originalPrice && course.originalPrice > (course.currentPrice || course.price) && (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    ${course.originalPrice}
                  </span>
                  <span className="text-xs font-medium text-green-600 whitespace-nowrap ml-1">
                    ({course.discountPercentage || 50}% OFF)
                  </span>
                </>
              )}
            </div>
            
            {/* CTA Button */}
            <button className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200 text-base whitespace-nowrap ml-2">
              {course.ctaText || 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
