import React from 'react'
import dynamic from 'next/dynamic';
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-white via-blue-50/30 to-white" />
});

const PlatformFeatures = dynamic(() => import("../../../components/PlatformFeatures"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const ImplementationProcessWrapper = dynamic(() => import('./components/Implementationwrapper'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

// Management ERP Systems Page Metadata
export const metadata = {
  title: "Management ERP Systems",
  
  description:
    "Streamline your entire publishing operation with our cloud-based Management ERP Systems. Integrated solutions for finance, production, and content lifecycle management.",
  
  keywords: [
    "Publishing ERP System",
    "Management Software",
    "Editorial Workflow Management",
    "Financial Management for Publishers",
    "Production Planning Software",
    "ITS ERP Solutions"
  ],

  openGraph: {
    title: "All-in-One Publishing Management ERP by ITS",
    description: "Comprehensive enterprise resource planning solutions designed specifically to manage the complexities of international publishing.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/managementerpsystems",
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
    title: "Publishing ERP Systems | Information Technology Services",
    description: "Centralize your workflows, manage resources, and gain real-time insights across your publishing business.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/services/managementerpsystems",
  },
};

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
    <ImplementationProcessWrapper/>
    </>
  )
}

export default page