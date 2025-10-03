import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from '../../../components/PlatformFeatures';
import ImplementationProcessWrapper from './components/Implementationwrapper';

// E-commerce & Payment Gateways Page Metadata
export const metadata = {
  title: "E-commerce & Payment Gateways",
  
  description:
    "Launch or scale your digital sales channel with Information Technology Services' e-commerce and integrated payment gateway solutions. Optimized for seamless user experience and global transactions.",
  
  keywords: [
    "E-commerce Development",
    "Payment Gateway Integration",
    "Subscription Billing System",
    "Online Store Setup",
    "Secure Transaction Processing",
    "ITS E-commerce"
  ],

  openGraph: {
    title: "Integrated E-commerce and Secure Payments for Digital Products by ITS",
    description: "Build a reliable online store with multi-currency support and secure transaction handling for publishing houses.",
    type: "website",
    url: "https://information-technology-services.vercel.app/services/e-commerce&paymentgateways",
  },

  twitter: {
    card: "summary_large_image",
    title: "E-commerce & Payment Gateways | Information Technology Services",
    description: "Full-stack e-commerce solutions tailored for selling subscriptions and digital content worldwide.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/services/e-commerce&paymentgateways",
  },
};
const page = () => {
  const coreModulesData = [
  { 
    icon: "Global", 
    title: "Global Payment Processing", 
    description: "Support for 150+ currencies and major payment methods including cards, digital wallets, and bank transfers."
  },
  { 
    icon: "Financial", 
    title: "Subscription Management", 
    description: "Automated recurring billing, subscription tiers, and customer lifecycle management with dunning."
  },
  { 
    icon: "QualityControl", 
    title: "Fraud Protection", 
    description: "Advanced fraud detection, PCI DSS compliance, and secure tokenization for payment data protection."
  },
  { 
    icon: "DigitalContent", 
    title: "Digital Content Delivery", 
    description: "Secure download links, streaming capabilities, and access control for digital publications."
  },
  { 
    icon: "AuthorEditor", 
    title: "Customer Portal", 
    description: "Self-service customer accounts with purchase history, downloads, and subscription management."
  },
  { 
    icon: "Gateway", 
    title: "Multi-Gateway Support", 
    description: "Integration with Stripe, PayPal, Razorpay, and regional payment providers for optimal conversion."
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