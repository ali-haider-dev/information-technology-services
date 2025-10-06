import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
import ImplementationProcessWrapper from './components/Implementationwrapper';



// Automated Typesetting & XML Page Metadata
export const metadata = {
  title: "Automated Typesetting & XML Conversion",
  
  description:
    "Information Technology Services offers rapid and accurate automated typesetting and XML conversion. Transform manuscripts into professional print and digital formats instantly.",
  
  keywords: [
    "Automated Typesetting",
    "XML Conversion",
    "Content Formatting Services",
    "Digital Publishing Solutions",
    "JATS XML",
    "ITS Typesetting"
  ],

  openGraph: {
    title: "Rapid Automated Typesetting and Publishing XML Conversion by ITS",
    description: "Achieve multi-format output (PDF, EPUB, XML) from a single source using our efficient automation technology.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/automatedtypesetting&xml",
    images: [
      {
        url: "/its-logo.png",
        width: 1200,
        height: 630,
        alt: "Information Technology Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Automated Typesetting & XML | Information Technology Services",
    description: "Convert manuscripts to ready-to-publish formats like XML and PDF with high speed and precision.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/services/automatedtypesetting&xml",
  },
};

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
    <ImplementationProcessWrapper/>
    </>
  )
}

export default page