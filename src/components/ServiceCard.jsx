"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
// Import your WorldBusiness JSON file
import WorldBusiness from "../components/lotties/WorldBusiness.json";
import {
  Globe,
  ShoppingCart,
  Lock,
  Edit3,
  FileCode,
  Search,
  Shield,
  ImageIcon,
  FileText,
} from "lucide-react";

// Import the redesigned ServiceCard
import ServiceCard from "@/components/ServiceCard";


const services = [
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Management ERP Systems",
    description:
      "Proprietary enterprise resource planning platform designed specifically for international publishers.",
    features: [
      "Automated workflow management",
      "AI-powered resource optimization",
      "Real-time analytics dashboard",
    ],
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    title: "E-Commerce & Payment Gateways",
    description:
      "Proprietary payment processing platform with integrated e-commerce solutions for global publishers.",
    features: [
      "Automated multi-currency processing",
      "AI-powered fraud detection",
      "Smart compliance automation",
    ],
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: "Content Delivery & Access Control",
    description:
      "Advanced proprietary CDN platform with intelligent access control systems for digital publishing.",
    features: [
      "Intelligent content distribution",
      "Automated user access control",
      "Advanced DRM technology",
    ],
  },
  {
    icon: <Edit3 className="w-6 h-6 text-white" />,
    title: "AI-Powered Copy Editing",
    description:
      "Proprietary AI-driven editing platform ensuring academic excellence through automated quality control.",
    features: [
      "AI-powered language optimization",
      "Automated style guide compliance",
      "Smart academic tone analysis",
    ],
  },
  {
    icon: <FileCode className="w-6 h-6 text-white" />,
    title: "Automated Typesetting & XML",
    description:
      "Proprietary automated typesetting engine with intelligent XML conversion for seamless publishing workflows.",
    features: [
      "AI-driven layout optimization",
      "Automated XML/HTML generation",
      "Smart format compatibility",
    ],
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Automated Reference Verification",
    description:
      "Advanced AI-powered reference verification system with automated citation accuracy checking.",
    features: [
      "Automated citation validation",
      "AI-powered source verification",
      "Smart bibliography formatting",
    ],
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Advanced AI Detection Platform",
    description:
      "Proprietary multi-layered AI detection system with advanced plagiarism and content originality analysis.",
    features: [
      "AI-powered similarity detection",
      "Machine learning content analysis",
      "Automated integrity reporting",
    ],
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-white" />,
    title: "AI-Enhanced Figure Processing",
    description:
      "Proprietary AI-powered figure enhancement platform with automated quality optimization and formatting.",
    features: [
      "AI-powered resolution enhancement",
      "Automated accuracy validation",
      "Smart publication formatting",
    ],
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Manuscript Processing Platform",
    description:
      "Complete proprietary manuscript processing platform with AI-driven workflow automation licensed globally.",
    features: [
      "AI-powered workflow automation",
      "Cloud-native architecture",
      "Intelligent progress tracking",
    ],
  },
];



export default function ServiceSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    threshold: 0.3,
    once: false
  });

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-20 px-6">
      {/* Enhanced background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Content container */}
      <div className="relative max-w-7xl w-full mx-auto z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12" ref={headerRef}>
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={headerInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm mb-6 shadow-lg"
          >
            ✨ Tech Enabled Solutions
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
          >
            Proprietary Software Solutions <br /> 
            <span className="text-3xl md:text-4xl">& Technology Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-gray-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            All our services are powered by cutting-edge proprietary software
            platforms developed in-house. From AI-driven manuscript processing
            to automated quality control systems, we deliver technology-first
            solutions that scale with your business needs.
          </motion.p>
        </motion.div>

        {/* Right side illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={headerInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
            <Lottie
              animationData={WorldBusiness}
              loop={true}
              className="w-[300px] sm:w-[400px] md:w-[450px] opacity-90 relative z-10"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} index={idx} />
        ))}
      </div>
    </section>
  );
}