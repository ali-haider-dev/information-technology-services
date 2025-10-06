import CareersSection from '../..//sections/CareersSection'
import React from 'react'
import OpenPositions from './OpenPosition'

// Careers Page Metadata
export const metadata = {
 
  title: "Careers | Join Our Tech Team",

 
  description:
    "Explore career opportunities at Information Technology Services. We are hiring talented professionals in software development, AI, and publishing technology to join our innovative team.",

  
  keywords: [
    "Tech Careers in Pakistan", 
    "Software Development Jobs",
    "AI Jobs",
    "Publishing Technology Careers",
    "ITS Job Openings",
    "React Next.js Jobs",
    "IT Services Vacancies"
  ],

  
  openGraph: {
    title: "Job Openings at Information Technology Services",
    description:
      "Join our fast-growing team and contribute to cutting-edge publishing and academic technology solutions.",
    type: "website",
    url: "https://information-technology-services.vercel.app/careers", 
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
    title: "Careers at ITS | Innovative Tech Roles Available",
    description: "Looking for software developers and AI specialists? View our current vacancies.",
  },

 
  alternates: {
    canonical: "https://information-technology-services.vercel.app/careers",
  },
};

const CareersPage = () => {
  return (
    <>
    <CareersSection/>
    <OpenPositions/>
    </>
  )
}

export default CareersPage