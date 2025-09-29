import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from '../../../components/PlatformFeatures';
import {globe} from 'lucide-react'
import ImplementationProcess from './components/ImplementationProcess';
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
    <ImplementationProcess/>

    </>
  )
}

export default page