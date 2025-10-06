import React from "react";
import PrivacyPolicy from "./components/Privacy-policy";

export const metadata = {
  title: "Privacy Policy",

  description:
    "Review the Privacy Policy of Information Technology Services. Learn how we collect, use, protect, and handle your personally identifiable information (PII) and data privacy rights.",

  keywords: [
    "Privacy Policy",
    "Data Protection",
    "User Data Security",
    "PII Handling",
    "Terms of Privacy",
    "ITS Legal Policy",
  ],

  openGraph: {
    title: "Information Technology Services' Commitment to Data Privacy",
    description:
      "Your trust is our priority. Read our official Privacy Policy outlining data collection and usage practices.",
    type: "website",
    url: "https://information-technology-services.vercel.app/privacy-policy",
    images: [
      {
        url: "/its-logo.png",
        width: 1200,
        height: 630,
        alt: "Information Technology Services",
      },
    ],
  },

  // Twitter Card:
  twitter: {
    card: "summary",
    title: "Privacy Policy | Information Technology Services",
    description: "Read our full data protection and privacy statement.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/privacy-policy",
  },
};
const page = () => {
  return <PrivacyPolicy />;
};

export default page;
