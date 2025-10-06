import React from "react";
import HeroSection from "./components/HeroSection";
import PlatformFeatures from "../../../components/PlatformFeatures";
import ImplementationProcessWrapper from "./components/Implementationwrapper";

export const metadata = {
  title: " AI Copy Editing",

  description:
    "Information Technology Services provides an advanced AI copy editing platform to streamline editorial workflows. Achieve fast, accurate, and scalable quality control for all your publishing content.",

  keywords: [
    "AI Copy Editing",
    "Automated Quality Control",
    "Manuscript Editing Software",
    "Publisher Editing Tool",
    "AI Proofreading",
    "Editorial Workflow Automation",
    "ITS Copy Editing",
  ],

  openGraph: {
    title: "Streamline Editorial Workflows with AI Copy Editing by ITS",
    description:
      "Achieve high accuracy and speed with our scalable AI platform designed for the copy editing needs of international publishing houses.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/aicopyeditingplatform",
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
    title: "AI Copy Editing Platform | Information Technology Services",
    description:
      "The fastest way to ensure quality control for large volumes of publishing content using advanced AI.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/services/aicopyeditingplatform",
  },
};

const page = () => {
  const coreModulesData = [
    {
      icon: "DigitalContent",
      title: "AI-Powered Language Refinement",
      description:
        "Intelligent grammar, syntax, and vocabulary enhancement powered by advanced NLP algorithms ensuring clear, professional academic writing.",
    },
    {
      icon: "DigitalContent",
      title: "Automated Style Guide Compliance",
      description:
        "Automated adherence to major academic style guides including APA, MLA, Chicago, Harvard, and journal-specific requirements through our proprietary formatting engine.",
    },
    {
      icon: "DigitalContent",
      title: "Smart Academic Tone Optimization",
      description:
        "AI-driven refinement of academic voice and tone to meet scholarly publication standards while maintaining author intent through machine learning algorithms.",
    },
    {
      icon: "DigitalContent",
      title: "Intelligent Citation Formatting",
      description:
        "Automated formatting and consistency checking of in-text citations, reference lists, and bibliographies through our proprietary citation management system.",
    },
    {
      icon: "DigitalContent",
      title: "AI-Driven Structural Enhancement",
      description:
        "Machine learning-powered improvement of paragraph flow, section transitions, and overall document organization for enhanced readability and coherence.",
    },
    {
      icon: "DigitalContent",
      title: "Automated Quality Assurance",
      description:
        "Multi-tier automated quality assurance system with senior editor oversight ensuring consistent excellence and accuracy throughout the editing process.",
    },
  ];

  return (
    <>
      <HeroSection />
      <PlatformFeatures
        title="Platform Features"
        modules={coreModulesData}
        size
      />
      <ImplementationProcessWrapper />
    </>
  );
};

export default page;
