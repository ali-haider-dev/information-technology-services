import SupportSection from "../../sections/SupportSection";
import React from "react";
import SupportCard from './components/SupportCards'
import FAQSection from "./components/FAQSection";
export const metadata = {
  title: "Technical Support & Help Center",

  description:
    "Find technical support, FAQs, and documentation for all software solutions provided by Information Technology Services. Get quick help for publishing systems, AI tools, and ERP platforms.",

  keywords: [
    "Technical Support",
    "Customer Service",
    "Software Documentation",
    "Help Center",
    "ITS Support",
    "Publishing Platform Help",
    "Troubleshooting",
  ],

  openGraph: {
    title: "Need Help? Visit the ITS Technical Support Center",
    description:
      "Access our knowledge base, submit a ticket, or contact our 24/7 technical support team for immediate assistance.",
    type: "website",
    url: "https://information-technology-services.vercel.app/support",
    // images: [{
    //   url: 'https://information-technology-services.vercel.app/images/support-social.jpg', //
    // }],
  },

  twitter: {
    card: "summary_large_image",
    title: "ITS Technical Support Available",
    description:
      "Your hub for documentation, FAQs, and fast technical assistance for all our solutions.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/support",
  },
};
const page = () => {
  return (
    <>
      <SupportSection />
      <SupportCard/>
      <FAQSection/>
    </>
  );
};

export default page;
