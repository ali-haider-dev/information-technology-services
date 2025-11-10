"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const scaleOnHover = {
    rotate: 4,
    transition: { duration: 0.3 },
  };

  const buttonHover = {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2 },
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 flex items-center justify-center relative overflow-hidden  font-sans">
      <div className="">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Section */}
          <motion.div variants={slideInLeft}>
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="w-3 h-3 bg-[#1c398e] rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  delay: 0.3,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="text-[#1c398e] font-semibold text-xs md:text-sm tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Leading Academic Publishing Services in Asia
              </motion.div>
            </div>

            <motion.h1
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Empowering Academic
              <br />
              <span className="text-gray-700">Excellence</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl font-bold text-[#1c398e] mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
            >
              Since 1994
            </motion.div>

            <motion.p
              className="text-base text-gray-900 mb-6 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              With over 30 years of experience and 900+ skilled professionals,
              we've established ourselves as Asia's premier academic publishing
              services provider, trusted by leading STM publishers worldwide to
              deliver exceptional quality and innovation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                className="bg-[#1c398e] hover:bg-blue-700  text-white px-6 py-3 rounded-lg font-semibold 
                           shadow-lg hover:shadow-xl transition-colors duration-300 text-sm"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project →
              </motion.button>
              <motion.button
                className="border-2  text-blue-600 hover:bg-[#1c398e] hover:text-white 
                           px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-sm"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Explore Careers
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative" variants={slideInRight}>
            <div className="relative">
              {/* Main Image Container with Clipping */}
              <div className="relative w-full h-[450px] lg:h-[550px]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl"
                  //   animate={{
                  //     rotate: [3, 5, 3],
                  //   }}
                  //   transition={{
                  //     duration: 8,
                  //     repeat: Infinity,
                  //     ease: "easeInOut"
                  //   }}
                />

                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={scaleOnHover}
                >
                  <Image
                    src="/About.jpg"
                    alt="Team collaboration at academic publishing company"
                    fill
                    className="object-cover "
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
