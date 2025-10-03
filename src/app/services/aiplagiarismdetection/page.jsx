import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcessWrapper from './components/Implementationwrapper';


const page = () => {

const coreModulesData = [
  { 
    icon: "DataBase", 
    title: "Automated Database Screening", 
    description: "Proprietary AI algorithms perform multi-database comparison against billions of academic papers, web content, and publications through intelligent pattern recognition."
  },
  { 
    icon: "Detection", 
    title: "Proprietary AI Content Detection", 
    description: "Advanced proprietary machine learning algorithms and neural networks to identify artificially generated text and sophisticated content manipulation techniques."
  },
];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="AI-Powered Detection Capabilities" modules={coreModulesData} size/>
    <ImplementationProcessWrapper/>
    </>
  )
}

export default page