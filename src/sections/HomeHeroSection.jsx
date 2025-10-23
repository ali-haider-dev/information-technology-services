"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Settings,
  Shield,
  Globe,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";

export default function HeroSection() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "840+", label: "Projects" },
    { number: "480+", label: "Clients" },
    { number: "200+", label: "Awards" },
  ];

  const services = [
    {
      icon: <Settings className="w-5 h-5" />,
      name: "Management ERP Systems",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      name: "AI-Powered Copy Editing",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      name: "Manuscript Processing",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Content Delivery System",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-0 px-16 font-sans">
   

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="items-start mb-5"
        >
          {/* Left Content: Heading, Subtext, CTA */}
          <motion.div variants={itemVariants} className="space-y-2 pt-8 gap-4">
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 via-purple-50/50 to-cyan-50/50 rounded-full border-2 border-blue-300/50 shadow-lg shadow-blue-200/50 backdrop-blur-sm cursor-pointer"
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Innovation Driven
                </span>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
              <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Empowering Global{" "}
                <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 bg-clip-text text-transparent relative">
                  Technology Excellence
                  <motion.div
                    animate={{
                      scaleX: [0, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2,
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full origin-left"
                  />
                </span>
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ======================================================= */}
        {/* 2. MIDDLE SECTION: Services Chips (Left) & Description (Right) */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white">
          {/* Left: Services Chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-7 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 leading-none justify-start"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: "0 10px 30px rgba(28, 57, 142, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 rounded-full border-2 border-blue-200/60 shadow-md shadow-blue-100/50 backdrop-blur-sm cursor-pointer hover:border-purple-300/70 transition-all group"
              >
                <motion.div
                 
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="group-hover:animate-none"
                >
                  {React.cloneElement(service.icon, {
                    className:
                      "w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors",
                  })}
                </motion.div>
                <span className="text-xs font-bold text-blue-700 group-hover:text-purple-700 transition-colors">
                  {service.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-5 flex justify-center max-w-xl border-l-2 pl-6 border-blue-200/60 relative group"
          >
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"
            />

            {/* Floating particles on the right side */}
            <div className="absolute -right-8 top-0 bottom-0 w-32 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    top: `${15 + i * 15}%`,
                    left: `${Math.random() * 60}%`,
                    background:
                      i % 3 === 0
                        ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                        : i % 3 === 1
                        ? "linear-gradient(135deg, #8b5cf6, #06b6d4)"
                        : "linear-gradient(135deg, #06b6d4, #3b82f6)",
                    boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
                  }}
                />
              ))}
            </div>

            <p className="text-base text-slate-700 leading-relaxed relative z-10">
              With 900+ skilled professionals, we deliver world-class,
              tech-enabled solutions and comprehensive SaaS platforms to
              international publishers. From manuscript processing systems to
              payment gateways, we power the entire digital ecosystem with
              cutting-edge technology.
            </p>
          </motion.div>
        </div>

        {/* ======================================================= */}
        {/* 3. BOTTOM SECTION: Image (Left) & Stats Box (Right) */}
        {/* ======================================================= */}
        <div className="relative pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
          >
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true , amount: 0.2}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-8 relative h-80 sm:h-56 min-h-96 rounded-2xl group"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full rounded-2xl relative overflow-hidden"
              >
              
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative"
                >
                  <img
                    src="homehero.jpg"
                    alt="Construction team collaborating"
                    className="w-full h-full object-cover rounded-lg"
                  />
                 
                </motion.div>
             
              </motion.div>
                  <Sparkles className="w-8 h-8 text-[#1c398e] absolute left-0 bottom-8 " />
                  <Sparkles className="w-5 h-5 text-[#1c398e] absolute -left-6 bottom-14 " />
                  <Sparkles className="w-3 h-3 text-[#1c398e] absolute -left-2 bottom-2 " />
            </motion.div>

            {/* Right Stats Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true , amount: 0.2}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 px-4 flex flex-col justify-center rounded-lg relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Stats Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                    Our Achievements
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </motion.div>
                  </h3>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      onHoverStart={() => setHoveredStat(index)}
                      onHoverEnd={() => setHoveredStat(null)}
                      className="group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="space-y-1 relative"
                      >
                        {hoveredStat === index && (
                          <motion.div
                            layoutId="hoverBackground"
                            className="absolute -inset-2 bg-white/5 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        <div className="flex items-center gap-2 relative z-10">
                          <motion.div
                            animate={{
                              scale:
                                hoveredStat === index
                                  ? [1, 1.5, 1]
                                  : [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                            className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full shadow-lg shadow-purple-500/50"
                          />
                          <motion.p
                            animate={
                              hoveredStat === index
                                ? {
                                    backgroundPosition: [
                                      "0% 50%",
                                      "100% 50%",
                                      "0% 50%",
                                    ],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
                            style={{
                              backgroundSize: "200% auto",
                            }}
                          >
                            {stat.number}
                          </motion.p>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base ml-5 relative z-10">
                          {stat.label}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 origin-left"
                />

                {/* Bottom text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-white/80 text-xs leading-normal"
                >
                  We are committed to delivering world-class results, backed by
                  hundreds of successful projects and industry recognition.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
