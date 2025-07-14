import React from 'react'
import { urlFor } from '../utils/imageBuilder'
import Link from 'next/link'
export default function BlogPreview({ posts }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">The Skillbook Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post._id} className="bg-white rounded shadow overflow-hidden">
              <img
                src={post.mainImage ? urlFor(post.mainImage).width(400).url() : '/placeholder-blog.jpg'}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug.current}`}>
                  <a className="mt-4 inline-block text-red-600">Read More →</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
