import React from "react";
import HeroSection from "./components/HeroSection";
import PlatformFeatures from "../../../components/PlatformFeatures";
import ImplementationProcessWrapper from "./components/Implementationwrapper";

export const metadata = {
  title: "Advanced AI Plagiarism Detection",

  description:
    "Protect integrity with Information Technology Services' AI plagiarism detection platform. Our solution offers real-time, comprehensive content verification for publishers and academic institutions.",

  keywords: [
    "AI Plagiarism Checker",
    "Content Verification Software",
    "Academic Integrity Tool",
    "Plagiarism Detection for Publishers",
    "Advanced Text Similarity Analysis",
    "Information Technology Services Plagiarism",
  ],

  openGraph: {
    title: "Secure Your Content Integrity with AI Plagiarism Detection by ITS",
    description:
      "Deploy a robust AI solution for accurate and fast content verification across vast databases.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/aiplagiarismdetection",
    // images: [{
    //   url: 'https://information-technology-services.vercel.app/images/plagiarism-social.jpg',
    // }],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Plagiarism Detection | Information Technology Services",
    description:
      "Real-time, scalable plagiarism screening for all manuscript and academic submissions.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/services/aiplagiarismdetection",
  },
};
const page = () => {
  const coreModulesData = [
    {
      icon: "DataBase",
      title: "Automated Database Screening",
      description:
        "Proprietary AI algorithms perform multi-database comparison against billions of academic papers, web content, and publications through intelligent pattern recognition.",
    },
    {
      icon: "Detection",
      title: "Proprietary AI Content Detection",
      description:
        "Advanced proprietary machine learning algorithms and neural networks to identify artificially generated text and sophisticated content manipulation techniques.",
    },
  ];

  return (
    <>
      <HeroSection />
      <PlatformFeatures
        title="AI-Powered Detection Capabilities"
        modules={coreModulesData}
        size
      />
      <ImplementationProcessWrapper />
    </>
  );
};

export default page;
