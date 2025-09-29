'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, CheckSquare, Users, UserCheck } from 'lucide-react'

const StatsCards = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      number: "900+",
      label: "Expert Professionals",
      bgGradient: "from-blue-500 via-blue-600 to-blue-700",
      shadowColor: "shadow-blue-500/25",
      hoverShadow: "hover:shadow-blue-500/40"
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-white" />,
      number: "85%",
      label: "Female Workforce",
      bgGradient: "from-red-500 via-red-600 to-red-800",
      shadowColor: "shadow-red-500/25",
      hoverShadow: "hover:shadow-red-500/40"
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      number: "#1",
      label: "Publishing Software Provider in Asia",
      bgGradient: "from-amber-500 via-yellow-600 to-yellow-700",
      shadowColor: "shadow-yellow-500/25",
      hoverShadow: "hover:shadow-yellow-500/40"
    },
    {
      icon: <UserCheck className="w-5 h-5 text-white" />,
      number: "50+",
      label: "Global Publishers",
      bgGradient: "from-purple-500 via-purple-600 to-purple-800",
      shadowColor: "shadow-purple-500/25",
      hoverShadow: "hover:shadow-purple-500/40"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 },
    },
  }

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.3 },
    },
  }

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.2 },
    },
  }

  return (
    <div className="z-10 px-4 relative bg-white font-sans">
      <div className="max-w-[1030px] mx-auto relative z-10 -top-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
              className={`
                bg-gradient-to-br ${stat.bgGradient}
                rounded-2xl py-3 px-2 text-white
                shadow-2xl ${stat.shadowColor} ${stat.hoverShadow}
                border border-white/10
                backdrop-blur-sm
                relative overflow-hidden
                cursor-pointer
                group
              `}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

              {/* Icon container */}
              <motion.div
                variants={iconVariants}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-xl w-fit group-hover:bg-white/30 transition-colors duration-300"
              >
                {stat.icon}
              </motion.div>

              {/* Number */}
              <motion.div
                variants={numberVariants}
                className="text-lg lg:text-2xl font-bold mb-1 tracking-tight"
              >
                {stat.number}
              </motion.div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-white/90 text-sm font-medium leading-relaxed"
              >
                {stat.label}
              </motion.div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default StatsCards
