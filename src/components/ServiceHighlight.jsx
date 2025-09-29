"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceHighlights = ({ highlights, pricing, onGetQuote }) => {
  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

 
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    
    <div className="space-y-4 bg-white shadow-xl p-6 mb-8 rounded-3xl border border-gray-100 font-sans">
      {/* -------------------- Section Header -------------------- */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariant}
        className="text-start text-[#1c398e] text-2xl font-extrabold pb-2 border-b-2 border-indigo-100/50 mb-6"
      >
        Service Highlights
      </motion.h2>

      {/* -------------------- Highlight Cards Grid -------------------- */}
      <div className="space-y-3">
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 4px 12px rgba(28, 57, 142, 0.1)",
                transition: { duration: 0.3 },
              }}
              // Light background with a colored border for a cleaner look
              className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon: Primary color accent */}
                <div className="w-12 h-12 bg-[#1c398e]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-[#1c398e] " />
                </div>
                {/* Text */}
                <span className="text-[#1c398e]/90 font-medium text-base">
                  {highlight.text}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* -------------------- Pricing Card (Stands Out) -------------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        custom={highlights.length + 1} 
       
        className="bg-[#1c398e] rounded-xl p-6 shadow-2xl mt-6 transform hover:scale-[1.01] transition-transform duration-300"
      >
        <h3 className="text-md font-extrabold text-white mb-2">
          {pricing.title}
        </h3>
        <p className="text-white text-sm mb-5 leading-relaxed">
          {pricing.description}
        </p>

        <motion.button
          onClick={onGetQuote}
     
          className="relative w-full bg-white text-[#1c398e] font-bold py-3 px-4 rounded-xl shadow-md 
             flex items-center justify-center gap-2 text-base overflow-hidden transition-colors duration-300 
             border-1 border-white group group-hover:border-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* 1. Directional Background Fill */}
          <span
            className="absolute inset-0 bg-[#1c398e] transition-transform duration-500 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"
            aria-hidden="true"
          ></span>

          {/* 2. Text and Icon Wrapper - Z-Index and Color Change */}
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
            <span className="text-md">Get Custom Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ServiceHighlights;
