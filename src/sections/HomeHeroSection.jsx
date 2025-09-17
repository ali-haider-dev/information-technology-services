"use client";
import Lottie from "lottie-react";
import Hologram from "../components/lotties/Hologram.json";
import { motion } from "framer-motion";

// Variants for reusable animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomeHeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 w-full">
        <div className="w-full text-center">
          <div className="flex flex-col justify-center mx-auto lg:mx-0">
            {/* Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c398E] leading-tight sm:leading-snug mx-auto lg:mx-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Empowering Global Technology Excellence
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mx-auto lg:mx-0 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              With 900+ skilled professionals, we deliver world-class,
              tech-enabled solutions and comprehensive SaaS platforms to
              international publishers. From manuscript processing systems to
              payment gateways, we power the entire digital ecosystem with
              cutting-edge technology.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <button
                className="relative mt-6 sm:mt-8 px-8 py-3 font-semibold rounded-full 
             bg-[#1c398e] text-white backdrop-blur-md 
             border border-white/20 shadow-lg 
             transition-all duration-300 ease-out
             hover:bg-white hover:text-[#1c398e] hover:border-2 hover:border-blue-900 hover:shadow-xl 
             focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Get Started"
              >
                <span className="relative z-10">Get Started</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lottie Background */}
      <motion.div
        className="absolute translate-y-[40%] left-1/2 -translate-x-1/2 overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Lottie
          animationData={Hologram}
          loop={true}
          className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] opacity-60 lg:opacity-80 z-0"
        />
      </motion.div>
    </section>
  );
};

export default HomeHeroSection;
