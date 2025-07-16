import React from 'react'
import { sanityClient } from '../utils/sanityClient'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CoursesGrid from '../components/CoursesGrid'
import Features from '../components/Features'
import LearningExperience from '../components/LearningExperience'
import FeaturesStrip from '../components/FeaturesStrip'
import WhyChooseUs from '../components/WhyChooseUs'
import Benefits from '../components/Benefits'
import WhyAdoptSafe from '../components/WhyAdoptSafe'
import FrameworkDiagramSection from '../components/FrameworkDiagramSection'
import SkillbookLearningExperience from '../components/SkillbookLearningExperience'
import AgileExcellenceCTA from '../components/AgileExcellenceCTA'
import IndustryTestimonials from '../components/IndustryTestimonials'
import ClientLogos from '../components/ClientLogos'
import SkillbookBlog from '../components/SkillbookBlog'
import SafePromotion from '../components/SafePromotion'
import CareerCTA from '../components/CareerCTA'
import FAQContact from '../components/FAQContact'
import Accreditations from '../components/Accreditations'
import Footer from '../components/Footer'
import { AnimatedSection, PageAnimations } from '../components/PageAnimations'

export async function getStaticProps() {
  const navbarData = await sanityClient.fetch(`*[_type=="navbar"][0]`)
  const heroData = await sanityClient.fetch(`*[_type=="heroSection"][0]`)
  const featuresStripData = await sanityClient.fetch(`*[_type=="iconFeatures"][0]{
    features[]{
      icon,
      label,
      description
    },
    backgroundColor
  }`)
  const courses = await sanityClient.fetch(`*[_type=="course"] | order(currentPrice desc)`)
  const features = await sanityClient.fetch(`*[_type=="feature"]`)
  const coursesSection = await sanityClient.fetch(`*[_type=="coursesSection"][0]`)
  const whyChooseUsData = await sanityClient.fetch(`*[_type=="whyChooseUs"][0]`)
  const benefitsData = await sanityClient.fetch(`*[_type=="benefits"][0]`)
  const whyAdoptSafeData = await sanityClient.fetch(`*[_type=="whyAdoptSafe"][0]`)
  const frameworkDiagramSectionData = await sanityClient.fetch(`*[_type=="frameworkDiagramSection"][0]`)
  const skillbookLearningExperienceData = await sanityClient.fetch(`*[_type=="skillbookLearningExperience"][0]`)
  const agileExcellenceCTAData = await sanityClient.fetch(`*[_type=="agileExcellenceCTA"][0]`)
  const industryTestimonialsData = await sanityClient.fetch(`*[_type=="industryTestimonials"][0]`)
  console.log('Fetched industryTestimonialsData:', industryTestimonialsData)
  const clientLogosData = await sanityClient.fetch(`*[_type=="clientLogos"][0]`)
  console.log('Fetched clientLogosData:', clientLogosData)
  const skillbookBlogData = await sanityClient.fetch(`*[_type=="skillbookBlog"][0]`)
  console.log('Fetched skillbookBlogData:', skillbookBlogData)
  const safePromotionData = await sanityClient.fetch(`*[_type=="safePromotion"][0]`)
  console.log('Fetched safePromotionData:', safePromotionData)
  const careerCTAData = await sanityClient.fetch(`*[_type=="careerCTA"][0]`)
  const faqContactData = await sanityClient.fetch(`*[_type=="faqContact"][0]`)

  const accreditationsData = await sanityClient.fetch(`*[_type=="accreditation"][0]`)
  const learningExperience = await sanityClient.fetch(`*[_type=="learningExperience"][0]`)
  const footerData = await sanityClient.fetch(`*[_type=="footer"][0]`)

  return {
    props: {
      navbarData, heroData, featuresStripData, courses, features, coursesSection, 
      whyChooseUsData, benefitsData, whyAdoptSafeData, frameworkDiagramSectionData, 
      skillbookLearningExperienceData, agileExcellenceCTAData, industryTestimonialsData, 
      clientLogosData, skillbookBlogData, safePromotionData, careerCTAData, faqContactData, 
      accreditationsData, learningExperience, footerData
    },
    revalidate: 60,
  }
}

export default function Home(props) {
  return (
    <PageAnimations>
      <Navbar 
        logo={props.navbarData?.logo?.image} 
        links={props.navbarData?.links || []} 
        showSearch={props.navbarData?.showSearch}
        searchPlaceholder={props.navbarData?.searchPlaceholder}
      />
      <AnimatedSection animationType="fadeIn">
        <Hero data={props.heroData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <FeaturesStrip data={props.featuresStripData} />
      </AnimatedSection>
      <AnimatedSection animationType="stagger">
        <CoursesGrid courses={props.courses} section={props.coursesSection} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <Features items={props.features} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <WhyChooseUs data={props.whyChooseUsData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <Benefits data={props.benefitsData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <WhyAdoptSafe data={props.whyAdoptSafeData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <FrameworkDiagramSection data={props.frameworkDiagramSectionData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <SkillbookLearningExperience data={props.skillbookLearningExperienceData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <AgileExcellenceCTA data={props.agileExcellenceCTAData} />
      </AnimatedSection>
      <AnimatedSection animationType="stagger">
        <IndustryTestimonials data={props.industryTestimonialsData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <ClientLogos data={props.clientLogosData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <SkillbookBlog data={props.skillbookBlogData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <Accreditations data={props.accreditationsData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <SafePromotion data={props.safePromotionData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <CareerCTA data={props.careerCTAData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <FAQContact data={props.faqContactData} />
      </AnimatedSection>
      <AnimatedSection animationType="fadeIn">
        <Footer data={props.footerData} />
      </AnimatedSection>
    </PageAnimations>
  )
} 