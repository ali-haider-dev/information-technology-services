"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Zap } from "lucide-react"; // Imported Zap for a more dynamic icon

const ACCENT_COLOR = "#FFD700"; // Bright contrasting yellow/gold

const HeroSection = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "18rem",
      transition: { duration: 1.0, delay: 0.5, ease: "easeOut" },
    },
  };

  return (
    // Updated background to a very light gradient for depth
    <section className="relative w-full px-6 py-32 lg:py-48 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Enhanced background blobs with primary color and less blur for sharper look */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1c398e]/10 rounded-full blur-[70px] opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c398e]/10 rounded-full blur-[100px] opacity-60"></div>

      <motion.div
        className="relative max-w-5xl mx-auto text-center z-10" // z-10 keeps content above blobs
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headerVariants}
      >
        {/* Animated Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-2 bg-[#1c398e] rounded-full mb-8 shadow-lg cursor-pointer" // Solid background for contrast
          whileHover={{
            boxShadow: `0 8px 25px rgba(28, 57, 142, 0.4)`, // Shadow on hover
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Zap className="w-5 h-5 text-white animate-pulse" />
          {/* Use Zap, set to white */}
          <span className="text-white font-semibold text-base tracking-wider uppercase">
            Setting The Benchmark
          </span>
        </motion.div>

        {/* Main Heading - Larger and more dramatic */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
          <span className="">Quality</span> & <span>Standards</span>
        </h1>

        {/* Animated Divider Line */}
        <motion.div
          className="h-1 w-2xl bg-[#1c398e] rounded-full mx-auto mb-10"
          variants={lineVariants}
        ></motion.div>

        {/* Subtitle - Slightly larger and cleaner */}
        <p className="text-md text-gray-600 leading-normal max-w-3xl mx-auto">
          Committed to excellence in tech-enabled publishing solutions and
          software development through rigorous, industry-leading practices.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
