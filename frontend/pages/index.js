import React from 'react'
import { sanityClient } from '../utils/sanityClient'
import Hero from '../components/Hero'
import CoursesGrid from '../components/CoursesGrid'
import Features from '../components/Features'
import LearningExperience from '../components/LearningExperience'
import StepSection from '../components/StepSection'
import Testimonials from '../components/Testimonials'
import Accreditation from '../components/Accreditation'
import BlogPreview from '../components/BlogPreview'
import FAQ from '../components/FAQ'
import LogosMarquee from '../components/LogosMarquee'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export async function getStaticProps() {
  const heroData = await sanityClient.fetch(`*[_type=="heroSection"][0]`)
  const courses = await sanityClient.fetch(`*[_type=="course"] | order(price desc)`)
  const features = await sanityClient.fetch(`*[_type=="feature"]`)
  const testimonials = await sanityClient.fetch(`*[_type=="testimonial"]`)
  const blogPosts = await sanityClient.fetch(`*[_type=="blogPost"][0...3]`)
  const partnerLogos = await sanityClient.fetch(`*[_type=="partnerLogo"]`)
  const ctaData = await sanityClient.fetch(`*[_type=="ctaSection"][0]`)
  const accreditations = await sanityClient.fetch(`*[_type=="accreditation"]`)
  const stepSection = await sanityClient.fetch(`*[_type=="stepSection"][0]`)
  const faqData = await sanityClient.fetch(`*[_type=="faq"][0]`)
  const learningExperience = await sanityClient.fetch(`*[_type=="learningExperience"][0]`)
  const coursesSection = await sanityClient.fetch(`*[_type=="coursesSection"][0]`)

  return {
    props: {
      heroData, courses, features, testimonials, blogPosts, partnerLogos, ctaData,
      accreditations, stepSection, faqData, learningExperience, coursesSection
    },
    revalidate: 60,
  }
}

export default function Home(props) {
  return (
    <>
      <Hero data={props.heroData} />
      <CoursesGrid courses={props.courses} section={props.coursesSection} />
      <Features items={props.features} />
      <LearningExperience data={props.learningExperience} />
      <StepSection data={props.stepSection} />
      <Testimonials items={props.testimonials} />
      <Accreditation items={props.accreditations} />
      <BlogPreview posts={props.blogPosts} />
      <FAQ data={props.faqData} />
      <LogosMarquee logos={props.partnerLogos} />
      <CTA data={props.ctaData} />
      <Footer />
    </>
  )
} 