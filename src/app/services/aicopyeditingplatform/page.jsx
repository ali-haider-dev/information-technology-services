import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcessWrapper from './components/Implementationwrapper';


const page = () => {

const coreModulesData = [
  { 
    icon: "DigitalContent", 
    title: "AI-Powered Language Refinement", 
    description: "Intelligent grammar, syntax, and vocabulary enhancement powered by advanced NLP algorithms ensuring clear, professional academic writing."
  },
  { 
    icon: "DigitalContent", 
    title: "Automated Style Guide Compliance", 
    description: "Automated adherence to major academic style guides including APA, MLA, Chicago, Harvard, and journal-specific requirements through our proprietary formatting engine."
  },
  { 
    icon: "DigitalContent", 
    title: "Smart Academic Tone Optimization", 
    description: "AI-driven refinement of academic voice and tone to meet scholarly publication standards while maintaining author intent through machine learning algorithms."
  },
  { 
    icon: "DigitalContent", 
    title: "Intelligent Citation Formatting", 
    description: "Automated formatting and consistency checking of in-text citations, reference lists, and bibliographies through our proprietary citation management system."
  },
  { 
    icon: "DigitalContent", 
    title: "AI-Driven Structural Enhancement", 
    description: "Machine learning-powered improvement of paragraph flow, section transitions, and overall document organization for enhanced readability and coherence."
  },
  { 
    icon: "DigitalContent", 
    title: "Automated Quality Assurance", 
    description: "Multi-tier automated quality assurance system with senior editor oversight ensuring consistent excellence and accuracy throughout the editing process."
  },
];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="Platform Features" modules={coreModulesData} size/>
    <ImplementationProcessWrapper/>
    </>
  )
}

export default page