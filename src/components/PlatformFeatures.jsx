"use client";
import { motion } from "framer-motion";
import { BookOpen, DollarSign, Users, ShieldCheck, Clock, BarChart2 } from "lucide-react";
import React from 'react';

// Map icon names (strings) to actual Lucide React components
const iconMap = {
  Manuscript: BookOpen,
  Financial: DollarSign,
  AuthorEditor: Users,
  QualityControl: ShieldCheck,
  Production: Clock,
  Analytics: BarChart2,
};

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * A reusable component to display a grid of features or modules.
 * @param {string} title - The main title for the section (e.g., "Core Modules").
 * @param {Array} modules - An array of module objects.
 * @param {string} modules[].icon - A key string that maps to a Lucide icon (e.g., 'Manuscript').
 * @param {string} modules[].title - The title of the module (e.g., "Manuscript Management").
 * @param {string} modules[].description - The detailed description of the module.
 */
const PlatformFeatures = ({ title, modules=[] }) => {
  return (
    <section className="w-full px-18 py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-50 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto"></div>
        </div>

        {/* Modules Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {modules?.map((module, index) => {
            const IconComponent = iconMap[module.icon] || BookOpen; // Default to BookOpen if icon key is missing
            const iconColor =  'text-green-500' 

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}
                className="p-6 border border-none rounded-xl bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-2 mb-2">
                  {/* Icon */}
                  <div className={`p-2 rounded-lg ${iconColor} bg-green-100`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">
                    {module.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {module.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeatures;