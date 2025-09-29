"use client";
import { motion } from "framer-motion";
import {
  Settings,
  // Cloud,
  // BarChart3,
  // Zap,
  // Shield,
  // Globe,
  ArrowRight,
  // CheckCircle,
} from "lucide-react";
import Lottie from "lottie-react";
import AccessControl from "../../../../components/lotties/AccessControl.json";

const HeroSection = () => {

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };


  return (
    <section className="relative w-full px-18 pt-40 lg:pt-30 md:pt-24   lg:px-20  bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1c398e]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1c398e]/3 to-transparent rounded-full blur-2xl"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(#1c398e 1px, transparent 1px),
            linear-gradient(90deg, #1c398e 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
            className="md:pt-5 lg:pt-0"
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c398e]/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Settings className="w-4 h-4 text-[#1c398e]" />
              <span className="text-[#1c398e] text-sm font-medium">
                SAAS Solutions
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-xl sm:text-2xl  lg:text-3xl font-bold  "
              variants={headerVariants}
            >
              <span className="bg-gradient-to-r from-[#1c398e] to-blue-600 mb-6 bg-clip-text text-transparent">Content Delivery </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                & Access Control
              </span>
            </motion.h1>

            {/* Accent line */}
            <div className=" w-[14rem] md:w-[16rem]  lg:w-[25rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mb-8"></div>

            {/* Description */}
            <p className="text-md text-gray-600 leading-relaxed mb-8">
             Secure, scalable content delivery network with advanced access control systems for academic and professional publishers. Protect your intellectual property while providing seamless access to authorized users worldwide.
            </p>

            {/* CTA Button */}
            <motion.button
              className="group inline-flex items-center gap-3 bg-[#1c398e] hover:bg-[#1c398e]/90 text-white font-semibold px-8 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(28, 57, 142, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">Request Demo</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Visual - Lottie Animation */}
          <motion.div
            className="relative flex justify-start md:justify-center items-center py-10  lg:py-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={visualVariants}
          >
            {/* Lottie Animation Container */}
            <motion.div
              className="relative z-10 w-full max-w-md lg:max-w-none lg:w-[600px] h-auto md:h-[300px] lg:h-[400px]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Lottie
                animationData={AccessControl}
                loop
                className="w-full h-full"
              />
            </motion.div>

            {/* Floating decorative elements around animation */}
            <motion.div
              className="absolute top-8 left-8 w-6 h-6 bg-[#1c398e]/20 rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-8 right-8 w-4 h-4 bg-[#1c398e]/30 rotate-45 z-0"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-1/3 right-4 w-3 h-3 border-2 border-[#1c398e]/40 rounded-full z-0"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute bottom-1/3 left-4 w-2 h-2 bg-[#1c398e]/25 rounded-full z-0"
              animate={{
                scale: [0.8, 1.3, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
