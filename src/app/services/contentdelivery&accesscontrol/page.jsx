import React from "react";
import HeroSection from "./components/HeroSection";
import PlatformFeatures from "../../../components/PlatformFeatures";
import ImplementationProcessWrapper from "./components/Implementationwrapper";

export const metadata = {
  title: "Secure Content Delivery & Access Control",

  description:
    "Ensure secure and fast delivery of your digital content worldwide with ITS. Our platform provides robust access control, DRM, and global content distribution capabilities.",

  keywords: [
    "Secure Content Delivery",
    "Digital Access Control",
    "Content Distribution Network (CDN)",
    "Digital Rights Management (DRM)",
    "Subscription Management",
    "ITS Content Security",
  ],

  openGraph: {
    title: "Global Content Delivery and Robust Access Management by ITS",
    description:
      "Manage user permissions, subscriptions, and secure content distribution from a centralized platform.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/contentdelivery&accesscontrol",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Content Delivery & Access Control | Information Technology Services",
    description:
      "A comprehensive solution for publishing content delivery with built-in security and paywall management.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/services/contentdelivery&accesscontrol",
  },
};

const page = () => {
  const coreModulesData = [
    {
      icon: "Global",
      title: "Global CDN Network",
      description:
        "Lightning-fast content delivery through 200+ edge locations worldwide with 99.9% uptime guarantee.",
    },
    {
      icon: "AccessControl",
      title: "Advanced Access Control",
      description:
        "Role-based permissions, IP restrictions, time-limited access, and institutional authentication.",
    },
    {
      icon: "Analytics",
      title: "Real-time Analytics",
      description:
        "Comprehensive usage analytics, download tracking, and user behavior insights with custom reports.",
    },
    {
      icon: "AccessControl",
      title: "DRM Protection",
      description:
        "Digital rights management with watermarking, encryption, and copy protection for sensitive content.",
    },
    {
      icon: "AuthorEditor",
      title: "User Management",
      description:
        "Centralized user provisioning, group management, and integration with existing authentication systems.",
    },
    {
      icon: "API",
      title: "API Integration",
      description:
        "RESTful APIs for seamless integration with existing systems and third-party applications.",
    },
  ];

  return (
    <>
      <HeroSection />
      <PlatformFeatures title="Platform Features" modules={coreModulesData} />
      <ImplementationProcessWrapper />
    </>
  );
};

export default page;
