import React from "react";
import TermsOfService from "./components/TermsOfService";

export const metadata = {
  title: "Terms of Service",

  description:
    "Read the official Terms of Service for Information Technology Services' software platforms and services. This agreement governs the use, rights, responsibilities, and liabilities of our users.",

  keywords: [
    "Terms of Service",
    "Website Usage Policy",
    "Legal Agreement",
    "User Responsibilities",
    "ITS Terms and Conditions",
    "Service Agreement",
  ],

  openGraph: {
    title:
      "Official Terms of Service for Information Technology Services (ITS)",
    description:
      "Review the legal terms and conditions for using our specialized technology solutions and platforms.",
    type: "website",
    url: "https://information-technology-services.vercel.app/terms-of-service",
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
    card: "summary",
    title: "Terms of Service | Information Technology Services",
    description:
      "Read the full terms and conditions for using our website and services.",
  },

  alternates: {
    canonical:
      "https://information-technology-services.vercel.app/terms-of-service",
  },
};

const page = () => {
  return <TermsOfService />;
};

export default page;
