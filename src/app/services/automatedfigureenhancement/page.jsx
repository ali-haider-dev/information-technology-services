import React from "react";
import HeroSection from "./components/HeroSection";
import PlatformFeatures from "../../../components/PlatformFeatures";
import ImplementationProcessWrapper from "./components/Implementationwrapper";

export const metadata = {
  title: "Automated Figure Enhancement",

  description:
    "Elevate the quality of your visual content with our automated figure enhancement service. We provide fast, scalable processing and quality checks for figures in academic and publishing submissions.",

  keywords: [
    "Automated Figure Enhancement",
    "Image Quality Control",
    "Publishing Graphics Processing",
    "Figure Remediation",
    "Visual Content Scaling",
    "ITS Figure Services",
  ],

  openGraph: {
    title: "Fast & Scalable Figure Enhancement for Publishers by ITS",
    description:
      "Ensure all submitted figures meet high publication standards using our powerful automation tools.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/automatedfigureenhancement",
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
    title: "Automated Figure Enhancement | Information Technology Services",
    description:
      "The intelligent solution for batch figure processing and quality assurance in publishing workflows.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/services/automatedfigureenhancement",
  },
};

const page = () => {
  const coreModulesData = [
    {
      icon: "Zap",
      title: "High-Resolution Optimization",
      description:
        "Transform low-quality images into crisp, publication-ready visuals.",
    },
    {
      icon: "target",
      title: "Scientific Accuracy Review",
      description:
        "Ensure figures accurately represent your research data and findings.",
    },
    {
      icon: "eye",
      title: "Color Accessibility",
      description:
        "Ensure figures are accessible to all readers including colorblind viewers.",
    },
  ];

  return (
    <>
      <HeroSection />
      <PlatformFeatures
        title="Professional Enhancement Services"
        modules={coreModulesData}
      />
      <ImplementationProcessWrapper />
    </>
  );
};

export default page;
