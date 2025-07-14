import React from 'react'
import CourseCard from './CourseCard'

export default function CoursesGrid({ courses, section }) {
  const heading = section?.heading || 'Trending Certification Courses';
  const description = section?.description;

  if (!courses || courses.length === 0) {
    return (
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">{heading}</h2>
        {description && <p className="text-lg text-gray-600 mb-8 text-center">{description}</p>}
        <div className="text-center py-12">
          <p className="text-gray-600">No courses available at the moment. Check back soon!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">{heading}</h2>
      {description && <p className="text-lg text-gray-600 mb-8 text-center">{description}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(c => <CourseCard key={c._id} course={c} />)}
      </div>
    </section>
  )
}
