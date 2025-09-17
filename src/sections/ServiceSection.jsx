"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import WorldBusiness from "../components/lotties/WorldBusiness.json";
import {
  Globe,
  ShoppingCart,
  Lock,
  Edit3,
  FileCode,
  Search,
  Shield,
  Image as ImageIcon,
  FileText,
} from "lucide-react";
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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};


export default function ServiceSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gray-50 py-20 px-6">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>

      {/* Content container */}
      <div className="relative max-w-7xl w-full mx-auto z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-4">
            Tech Enabled Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Proprietary Software Solutions <br /> & Technology Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto lg:mx-0">
            All our services are powered by cutting-edge proprietary software
            platforms developed in-house. From AI-driven manuscript processing
            to automated quality control systems, we deliver technology-first
            solutions that scale with your business needs.
          </p>
        </motion.div>

        {/* Right side illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <Lottie
            animationData={WorldBusiness}
            loop={true}
            className="w-[300px] sm:w-[400px] md:w-[450px] opacity-90"
          />
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10"
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </motion.div>
    </section>
  );
}
