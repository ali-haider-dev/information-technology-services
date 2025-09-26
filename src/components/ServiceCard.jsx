"use client";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useRef, useMemo } from "react";

const ServiceCard = ({ icon, title, description, features = [], extraInfo={}, index = 0, isService }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.2,
    once: true, // This is crucial - only animate once
    margin: "0px 0px -100px 0px", // Start animation earlier
    amount:0.1
  });

  // Memoize gradient to prevent recalculation
  const gradients = useMemo(() => [
    "from-blue-500 via-blue-600 to-indigo-700",
    "from-purple-500 via-purple-600 to-pink-700", 
    "from-green-500 via-emerald-600 to-teal-700",
    "from-orange-500 via-red-500 to-pink-600",
    "from-indigo-500 via-purple-600 to-blue-700",
    "from-teal-500 via-cyan-600 to-blue-700",
    "from-pink-500 via-rose-600 to-red-700",
    "from-yellow-500 via-orange-600 to-red-700",
    "from-cyan-500 via-blue-600 to-indigo-700"
  ], []);

  const currentGradient = gradients[index % gradients.length];

  // Simplified animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: Math.min(index * 0.1, 0.8), // Cap maximum delay
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className={`
        relative rounded-2xl p-6 bg-gradient-to-br ${currentGradient}
        text-white shadow-xl hover:shadow-2xl
        border border-white/10
        overflow-hidden
        backdrop-blur-lg
        cursor-pointer
        group
        will-change-transform
      `}
    >
      {/* Simplified background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
      
      {/* Icon */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{
          delay: 0.2 + index * 0.05,
          duration: 0.4,
          ease: "easeOut"
        }}
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mb-4 group-hover:bg-white/30 transition-colors duration-300"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
        className="text-lg font-bold leading-tight mb-3"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
        className="text-white/90 text-sm leading-relaxed mb-4"
      >
        {description}
      </motion.p>

      {/* Features - Simplified animation */}
      <div className="space-y-2 mb-6">
        {features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{
              delay: 0.5 + index * 0.05 + featureIndex * 0.05,
              duration: 0.3
            }}
            className="flex items-start space-x-2 text-white/90 text-sm"
          >
            <CheckCircle className="w-4 h-4 text-green-300 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

    {/* Extra info */}
{isService && (
  <div className="mb-4 pt-7 text-xs text-white/90 border-t border-white/50 space-y-3">
    {Object.entries(extraInfo).map(([key, value], extraIndex) => (
      <motion.div
        key={key}
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{
          delay: 0.5 + index * 0.05 + extraIndex * 0.05,
          duration: 0.3,
        }}
        className="flex justify-between"
      >
        <div className="flex gap-1">
          <CheckCircle className="w-4 h-4 text-green-300 shrink-0 mt-0.5" />
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </div>
        <div>{value}</div>
      </motion.div>
    ))}
  </div>
)}


      {/* CTA Button */}
      <motion.button 
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full group/btn relative overflow-hidden px-4 py-2.5 text-sm font-semibold rounded-xl 
                   bg-white/20 backdrop-blur-sm border border-white/30 
                   hover:bg-white/30 hover:border-white/50 
                   text-white transition-all duration-300
                   shadow-lg hover:shadow-xl"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
        {isService ?"Get Qoute" :"Learn More"}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </span>
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;