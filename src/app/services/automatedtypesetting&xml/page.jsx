import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcess from './components/ImplementationProcess';


const page = () => {

const coreModulesData = [
  { 
    icon: "layout", 
    title: "AI-Powered Layout Engine", 
    description: "Intelligent layout automation that enhances readability and visual appeal."
  },
  { 
    icon: "XML", 
    title: "Automated XML/HTML Conversion", 
    description: "Proprietary conversion engine for structured markup and digital publishing."
  },
  { 
    icon: "Mobile", 
    title: "Multi-Platform Output Engine", 
    description: "Intelligent optimization for print, web, and mobile platforms."
  },

];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="Proprietary Layout Technology" modules={coreModulesData} size/>
    <ImplementationProcess/>
    </>
  )
}

export default page