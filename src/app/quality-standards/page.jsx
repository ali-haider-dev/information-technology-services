import React from "react";
import HeroSection from "./components/HeroSection";
import QualityCommitmentProcesses from "./components/CommitmentAndProcesses";
import SecurityCompliance from "./components/SecurityAndCompliance";
import QualityMetrics from "./components/QualityMetrics";
import CTASection from "./components/CTASection";

export const metadata = {
  title:
    "Quality & Standards | Assurance, Security, and Compliance | Information Technology Services",

  description:
    "Explore Information Technology Services' rigorous Quality Assurance Processes, data Security & Compliance frameworks, and our unwavering commitment to quality in software development and service delivery.",

  keywords: [
    "Quality Standards",
    "Quality Assurance Processes",
    "Software Security Compliance",
    "Data Encryption",
    "Access Control",
    "ITS Quality Commitment",
    "ISO Compliance",
  ],

  openGraph: {
    title: "Our Commitment to Quality and Security Standards at ITS",
    description:
      "We set the benchmark for quality in publishing technology through strict assurance processes and robust security measures.",
    type: "website",
    url: "https://information-technology-services.vercel.app/quality-standards",
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
    title: "Quality & Standards | Information Technology Services",
    description:
      "Learn about the security and compliance frameworks that protect your data and projects.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/quality-standards",
  },
};

const QualityStandardsPage = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <QualityCommitmentProcesses />
      <SecurityCompliance />
      <QualityMetrics />
      <CTASection />
    </div>
  );
};

export default QualityStandardsPage;
