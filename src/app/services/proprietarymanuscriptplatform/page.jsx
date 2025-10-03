import React from "react";
import HeroSection from "./components/HeroSection";
import PlatformFeatures from "../../../components/PlatformFeatures";
import ImplementationProcessWrapper from "./components/Implementationwrapper";

// Proprietary Manuscript Platform Page Metadata
export const metadata = {
  title: "Proprietary Manuscript Platform",

  description:
    "A custom-built, secure platform for managing the entire manuscript lifecycle, from submission and peer review to final decision. Tailored to your organization's unique requirements.",

  keywords: [
    "Manuscript Submission System",
    "Peer Review Platform",
    "Editorial Tracking Software",
    "Proprietary Publishing System",
    "Author & Reviewer Portal",
    "ITS Manuscript Platform",
  ],

  openGraph: {
    title: "Custom Proprietary Platform for Manuscript Management by ITS",
    description:
      "Take control of your editorial process with a high-security, scalable submission and peer review system.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/proprietarymanuscriptplatform",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manuscript Platform | Information Technology Services",
    description:
      "The secure, flexible platform for managing large volumes of academic and scholarly manuscript submissions.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/services/proprietarymanuscriptplatform",
  },
};
const page = () => {
  const coreModulesData = [
    {
      icon: "Workflow",
      title: "Automated Workflow Management",
      description:
        "Intelligent automation that streamlines every step of manuscript processing.",
    },
    {
      icon: "Production",
      title: "Real-Time Progress Tracking",
      description:
        "Complete visibility into manuscript status with live updates and reporting.",
    },
    {
      icon: "Global",
      title: "Color Accessibility",
      description:
        "Seamless integration with major publisher systems and platforms.",
    },
  ];

  return (
    <>
      <HeroSection />
      <PlatformFeatures
        title="Advanced System Capabilities"
        modules={coreModulesData}
        green
      />
      <ImplementationProcessWrapper />
    </>
  );
};

export default page;
