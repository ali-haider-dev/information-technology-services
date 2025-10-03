import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcessWrapper from './components/Implementationwrapper'; 


const page = () => {

const coreModulesData = [
  { 
    icon: "DigitalContent", 
    title: "Automated Citation Verification", 
    description: "Our AI engine automatically ensures all citations follow required academic style guides with 99.9% precision."
  },
  { 
    icon: "DigitalContent", 
    title: "Intelligent Source Authentication", 
    description: "AI-powered verification of source existence and accuracy across global databases."
  },
  { 
    icon: "DigitalContent", 
    title: "Smart Cross-Referencing", 
    description: "Automated system ensures all citations match their corresponding reference entries."
  },

];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="AI-Powered Verification Platform" modules={coreModulesData} size/>
    <ImplementationProcessWrapper/>
    </>
  )
}

export default page