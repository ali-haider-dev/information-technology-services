import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcessWrapper from './components/Implementationwrapper'; 

// Intelligent Reference Verification Page Metadata
export const metadata = {
  title: "Intelligent Reference Verification",
  
  description:
    "Ensure the accuracy of every citation with Information Technology Services' Intelligent Reference Verification platform. Automated checking against databases for publication readiness.",
  
  keywords: [
    "Reference Verification",
    "Intelligent Citation Checker",
    "Automated Bibliographic Tool",
    "Source Validation Software",
    "Academic Reference Accuracy",
    "ITS Reference Check"
  ],

  openGraph: {
    title: "Automated Reference Verification for Academic Publishing by ITS",
    description: "Speed up peer review and production by instantly verifying reference data and integrity.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/intelligentreferenceverification",
  },

  twitter: {
    card: "summary_large_image",
    title: "Intelligent Reference Verification | Information Technology Services",
    description: "The smart way to validate citations against known sources, ensuring high scientific integrity.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/services/intelligentreferenceverification",
  },
};

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