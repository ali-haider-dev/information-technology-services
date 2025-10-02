import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcess from './components/ImplementationProcess';


const page = () => {

const coreModulesData = [
  { 
    icon: "Zap", 
    title: "High-Resolution Optimization", 
    description: "Transform low-quality images into crisp, publication-ready visuals."
  },
  { 
    icon: "target", 
    title: "Scientific Accuracy Review", 
    description: "Ensure figures accurately represent your research data and findings."
  },
  { 
    icon: "eye", 
    title: "Color Accessibility", 
    description: "Ensure figures are accessible to all readers including colorblind viewers."
  },
 
];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="Professional Enhancement Services" modules={coreModulesData}/>
    <ImplementationProcess/>
    </>
  )
}

export default page