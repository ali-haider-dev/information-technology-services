"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  CheckCircle,
  Headset,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
const DynamicLottiePlayer = dynamic(() => import("lottie-react"), {
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-xl animate-pulse">
      Loading Animation...
    </div>
  ),
  ssr: false,
});

const LottieVisual = () => {
  const CustomerSupport = require("../components/lotties/CustomerSupport.json");

  return (
    <DynamicLottiePlayer
      animationData={CustomerSupport}
      loop
      className="w-[70%] h-full lg:rotate-30 mt-10 "
    />
  );
};
const SupportSection = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + index * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative w-full md:min-h-[90vh] overflow-hidden">
      {/* 90vh height ensures the section is tall enough */}
      <div className="grid lg:grid-cols-2 md:min-h-[100vh] bg-gradient-to-br from-[#1c398e] via-[#2d4a9e] to-[#1c398e]">
        {/* Left Section - Blue Background */}
        <div className="relative px-6 py-10 md:px-16 flex items-center justify-center md:justify-start mt-24 md:mt-20 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={contentVariants}
            className="relative z-20  max-w-xl"
          >
            {/* Title */}
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-8  leading-tight"
              variants={headerVariants}
            >
              Support Center
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={headerVariants} className="mb-6">
              <p className="text-white/70 text-md leading-relaxed max-w-md">
                Get help with our tech-enabled publishing solutions and SAAS platforms
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 mb-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={"/contact"}>Get Support</Link>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            {/* Feature Icons */}
            <div className="flex gap-6">
              {[
                { icon: BarChart3, label: "Analytics" },
                { icon: PieChart, label: "Reports" },
                { icon: CheckCircle, label: "Quality" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={iconVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="w-20 h-20 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Section - white Background */}
        <div className="relative bg-white md:rounded-l-[6rem] min-h-[90vh] min-w-[100vw]  items-start justify-start p-16 lg:-mt-35  lg:-rotate-30  hidden lg:flex">
          <motion.div
            className="relative z-10 flex justify-start items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={illustrationVariants}
          >
            <LottieVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
