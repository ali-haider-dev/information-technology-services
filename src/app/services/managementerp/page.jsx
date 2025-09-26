import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from "../../../components/PlatformFeatures"
const page = () => {

const coreModulesData = [
  { 
    icon: "Manuscript", 
    title: "Global Payment Processing", 
    description: "Support for 150+ currencies and major payment methods including cards, digital wallets, and bank transfers."
  },
  { 
    icon: "Financial", 
    title: "Subscription Management", 
    description: "Automated recurring billing, subscription tiers, and customer lifecycle management with dunning."
  },
  { 
    icon: "AuthorEditor", 
    title: "Fraud Protection", 
    description: "Advanced fraud detection, PCI DSS compliance, and secure tokenization for payment data protection."
  },
  { 
    icon: "QualityControl", 
    title: "Digital Content Delivery", 
    description: "Secure download links, streaming capabilities, and access control for digital publications."
  },
  { 
    icon: "Production", 
    title: "Customer Portal", 
    description: "Self-service customer accounts with purchase history, downloads, and subscription management."
  },
  { 
    icon: "Analytics", 
    title: "Multi-Gateway Support", 
    description: "Integration with Stripe, PayPal, Razorpay, and regional payment providers for optimal conversion."
  },
];
  return (
    <>
    <HeroSection/>
    <PlatformFeatures title="Platform Features" modules={coreModulesData}/>
    </>
  )
}

export default page