import React from 'react'
import { urlFor } from '../utils/imageBuilder'
import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img
        src={course.image ? urlFor(course.image).width(400).url() : '/placeholder-course.jpg'}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="mt-2 text-gray-600">{course.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold">${course.price}</span>
          <Link href={`/courses/${course.slug.current}`}>
            <a className="text-red-600">Learn More →</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
