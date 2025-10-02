import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcess from './components/ImplementationProcess';


const page = () => {

const coreModulesData = [
  { 
    icon: "Workflow", 
    title: "Automated Workflow Management", 
    description: "Intelligent automation that streamlines every step of manuscript processing."
  },
  { 
    icon: "Production", 
    title: "Real-Time Progress Tracking", 
    description: "Complete visibility into manuscript status with live updates and reporting."
  },
  { 
    icon: "Global", 
    title: "Color Accessibility", 
    description: "Seamless integration with major publisher systems and platforms."
  },
 
];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="Advanced System Capabilities" modules={coreModulesData} green/>
    <ImplementationProcess/>
    </>
  )
}

export default page