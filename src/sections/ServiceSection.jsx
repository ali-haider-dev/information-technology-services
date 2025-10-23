"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WorldBusiness from "../components/lotties/WorldBusiness.json";
import {
  Globe,
  ShoppingCart,
  Lock,
  Edit3,
  FileCode,
  Search,
  Shield,
  Image,
  FileText,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import dynamic from "next/dynamic";

const AnimatedLottie = dynamic(() => import("lottie-react"), {
  ssr: false, // Yeh client-side library hai
  loading: () => <div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse"></div>,
});

const services = [
  {
    icon: <Globe className="w-5 h-5 text-black" />,
    title: "Management ERP Systems",
      link:"managementerpsystems",
    description:
      "Proprietary enterprise resource planning platform designed specifically for international publishers.",
    features: [
      "Automated workflow management",
      "AI-powered resource optimization",
      "Real-time analytics dashboard",
    ],
    extraInfo: {turnaround:"Custom deployment", expertise:"Cloud-based SAAS platform" },
  },
  {
    icon: <ShoppingCart className="w-5 h-5 text-black" />,
    title: "E-Commerce & Payment Gateways",
      link:"e-commerce&paymentgateways",
    description:
      "Proprietary payment processing platform with integrated e-commerce solutions for global publishers.",
    features: [
      "Automated multi-currency processing",
      "AI-powered fraud detection",
      "Smart compliance automation",
    ],
    extraInfo:{turnaround:"Instant activation", expertise:"50+ payment methods" },
  },
  {
    icon: <Lock className="w-5 h-5 text-black" />,
    title: "Content Delivery & Access Control",
      link:"contentdelivery&accesscontrol",
    description:
      "Advanced proprietary CDN platform with intelligent access control systems for digital publishing.",
    features: [
      "Intelligent content distribution",
      "Automated user access control",
      "Advanced DRM technology",
    ],
    extraInfo:{turnaround:"Real-time deployment", expertise:"99.9% uptime guarantee" },
  },
  {
    icon: <Edit3 className="w-5 h-5 text-black" />,
    title: "AI-Powered Copy Editing",
    link:"aicopyeditingplatform",
    description:
      "Proprietary AI-driven editing platform ensuring academic excellence through automated quality control.",
    features: [
      "AI-powered language optimization",
      "Automated style guide compliance",
      "Smart academic tone analysis",
    ],
    extraInfo:{turnaround:"24-48 hours", expertise:"AI-powered platform" },

  },
  {
    icon: <FileCode className="w-5 h-5 text-black" />,
    title: "Automated Typesetting & XML",
      link:"automatedtypesetting&xml",
    description:
      "Proprietary automated typesetting engine with intelligent XML conversion for seamless publishing workflows.",
    features: [
      "AI-driven layout optimization",
      "Automated XML/HTML generation",
      "Smart format compatibility",
    ],
    extraInfo:{turnaround:"1-2 days", expertise:"Proprietary AI engine" },

  },
  {
    icon: <Search className="w-5 h-5 text-black" />,
    title: "Automated Reference Verification",
      link:"intelligentreferenceverification",
    description:
      "Advanced AI-powered reference verification system with automated citation accuracy checking.",
    features: [
      "Automated citation validation",
      "AI-powered source verification",
      "Smart bibliography formatting",
    ],
    extraInfo:{turnaround:"12-24 hours", expertise:"Machine learning algorithms" },

  },
  {
    icon: <Shield className="w-5 h-5 text-black" />,
    title: "Advanced AI Detection Platform",
      link:"aiplagiarismdetection",
    description:
      "Proprietary multi-layered AI detection system with advanced plagiarism and content originality analysis.",
    features: [
      "AI-powered similarity detection",
      "Machine learning content analysis",
      "Automated integrity reporting",
    ],
    extraInfo:{turnaround:"Instant results", expertise:"Proprietary AI algorithms" },

  },
  {
    icon: <Image className="w-5 h-5 text-black" />,
    title: "AI-Enhanced Figure Processing",
      link:"automatedfigureenhancement",
    description:
      "Proprietary AI-powered figure enhancement platform with automated quality optimization and formatting.",
    features: [
      "AI-powered resolution enhancement",
      "Automated accuracy validation",
      "Smart publication formatting",
    ],
    extraInfo:{turnaround:"1-2 days", expertise:"Computer vision A" },

  },
  {
    icon: <FileText className="w-5 h-5 text-black" />,
    title: "Manuscript Processing Platform",
      link:"proprietarymanuscriptplatform",
    description:
      "Complete proprietary manuscript processing platform with AI-driven workflow automation licensed globally.",
    features: [
      "AI-powered workflow automation",
      "Cloud-native architecture",
      "Intelligent progress tracking",
    ],
    extraInfo:{turnaround:"Custom configuration", expertise:"Licensed by 50+ publishers" },

  },
];

export default function ServiceSection({isService}) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    threshold: 0.3,
    once: true, 
  });

  return (
    <section className="relative   flex flex-col justify-center items-center overflow-hidden bg-white py-20 px-18 font-sans">
      {/* Simplified background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
    
        
      {/* Content container */}
      <div
        className="relative max-w-7xl w-full mx-12 z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12"
        ref={headerRef}
      >
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm mb-6 shadow-lg"
          >
            ✨ Tech Enabled Solutions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
          >
            Proprietary Software Solutions <br />
            <span className="text-3xl md:text-3xl">& Technology Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 text-gray-600 text-md  mx-auto lg:mx-0 leading-relaxed"
          >
            All our services are powered by cutting-edge proprietary software
            platforms developed in-house. From AI-driven manuscript processing
            to automated quality control systems, we deliver technology-first
            solutions that scale with your business needs.
          </motion.p>
        </motion.div>

        {/* Right side illustration - Simplified */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-[300px] sm:w-[400px] md:w-[450px] h-[300px] sm:h-[400px] md:h-[450px] bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full flex items-center justify-center">
              <AnimatedLottie
                animationData={WorldBusiness}
                loop
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} isService={isService}  index={idx} />
        ))}
      </div>
    </section>
  );
}