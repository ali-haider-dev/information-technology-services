import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcess from './components/ImplementationProcess';
const page = () => {

const coreModulesData = [
  { 
    icon: "Manuscript", 
    title: "Manuscript Management", 
    description: "Complete manuscript lifecycle management from submission to publication with automated workflows."
  },
  { 
    icon: "Financial", 
    title: "Financial Management", 
    description: "Integrated accounting, invoicing, and financial reporting with multi-currency support."
  },
  { 
    icon: "AuthorEditor", 
    title: "Author & Editor Portal", 
    description: "Self-service portals for authors and editors with real-time project tracking and communication.."
  },
  { 
    icon: "QualityControl", 
    title: "Quality Control", 
    description: "Automated quality checks, peer review management, and compliance tracking systems.."
  },
  { 
    icon: "Production", 
    title: "Production Planning", 
    description: "Resource allocation, deadline management, and production scheduling with capacity planning."
  },
  { 
    icon: "Analytics", 
    title: "Analytics & Reporting", 
    description: "Comprehensive dashboards and reports for performance monitoring and business intelligence."
  },
];

  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="Platform Features" modules={coreModulesData}/>
    <ImplementationProcess/>
    </>
  )
}

export default page