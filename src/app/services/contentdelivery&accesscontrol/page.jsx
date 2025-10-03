
import React from 'react'
import HeroSection from './components/HeroSection'
import PlatformFeatures from '../../../components/PlatformFeatures';
import ImplementationProcessWrapper from './components/Implementationwrapper';
const page = () => {
  const coreModulesData = [
  { 
    icon: "Global", 
    title: "Global CDN Network", 
    description: "Lightning-fast content delivery through 200+ edge locations worldwide with 99.9% uptime guarantee."
  },
  { 
    icon: "AccessControl", 
    title: "Advanced Access Control", 
    description: "Role-based permissions, IP restrictions, time-limited access, and institutional authentication."
  },
  { 
    icon: "Analytics", 
    title: "Real-time Analytics", 
    description: "Comprehensive usage analytics, download tracking, and user behavior insights with custom reports."
  },
  { 
    icon: "AccessControl", 
    title: "DRM Protection", 
    description: "Digital rights management with watermarking, encryption, and copy protection for sensitive content."
  },
  { 
    icon: "AuthorEditor", 
    title: "User Management", 
    description: "Centralized user provisioning, group management, and integration with existing authentication systems."
  },
  { 
    icon: "API", 
    title: "API Integration", 
    description: "RESTful APIs for seamless integration with existing systems and third-party applications."
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