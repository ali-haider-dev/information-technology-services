"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Clock, Shield, Zap } from "lucide-react";



const QualityMetrics = () => {
  const metrics = [
    { value: "99.9%", label: "Platform Uptime", icon: BarChart3 },
    { value: "24/7", label: "System Monitoring", icon: Clock },
    { value: "<2hrs", label: "Average Response Time", icon: Zap },
    { value: "100%", label: "Data Security Compliance", icon: Shield }
  ];

  return (
    // Ensure padding and background are solid blue
    <section className="relative w-full px-6 py-24 lg:px-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      
      
      {/* Subtle Grid Overlay (White on Blue) */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Commitment In Numbers
          </h2>
          <div className="w-[16rem] md:w-[24rem] h-1 bg-white rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                // Enhanced Card Styling: glass effect and border
                className="text-center bg-white/5 backdrop-blur-md rounded-2xl py-5 border-2 border-white/20 hover:border-white transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)" }}
              >
                {/* Icon with white background, blue ring for pop */}
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 border-2 border-white/50 inline-flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Metric Value: Reverting to White */}
                <motion.div 
                  className="text-2xl font-extrabold text-white mb-3"
                  // Subtler, more continuous pulse animation
                  animate={{ scale: [1, 1.02, 1] }} 
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.3
                  }}
                >
                  {metric.value}
                </motion.div>
                
                {/* Metric Label */}
                <div className="text-white text-sm md:text-md font-semibold tracking-wide">
                    {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityMetrics;