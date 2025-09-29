"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState, useEffect } from 'react';

const ProcessSteps = ({ steps }) => {
  // State to track the currently active step index for the animation
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Auto-Cycling Logic using useEffect and setInterval ---
  useEffect(() => {
    // Set up a timer to cycle the active step every 2000ms (2 seconds)
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % steps.length);
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [steps.length]); // Re-run effect if the number of steps changes

  // --- Framer Motion Variants (for initial load only) ---
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };
  
  // --- Animation for the Active Step (Infinite Loop) ---
  const activeAnimation = {
    // Jiggle/scale effect for the active step
    scale: [1, 1.05, 1], 
    boxShadow: ["0 0px 0px rgba(28, 57, 142, 0.2)", "0 4px 10px rgba(28, 57, 142, 0.4)", "0 0px 0px rgba(28, 57, 142, 0.2)"],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 font-sans"
      style={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)" }}
    >
      <div className="space-y-4">
        {steps.map((step, index) => {
          // Logic for active, completed, and pending states based on the auto-cycling index
          const isCurrentActive = index === activeIndex;
          const isCompleted = index < activeIndex; // Mark steps before the current one as complete
          
          return (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative"
            >
              <div className="flex items-start gap-3">
                
               
                <div className="relative flex flex-col items-center">
                  <motion.div 
                    // Apply the activeAnimation only to the currently active step
                    animate={isCurrentActive ? activeAnimation : {}}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isCurrentActive
                          ? 'bg-orange-500 text-white shadow-lg' 
                          : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </motion.div>
                  
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className={`w-0.5 h-8 transition-colors duration-500 ${
                      isCompleted ? 'bg-green-500' : isCurrentActive ? 'bg-orange-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <h4 className={`text-sm font-semibold mb-1 transition-colors duration-500 ${
                    isCompleted ? 'text-gray-900' : isCurrentActive ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs leading-relaxed transition-colors duration-500 ${
                    isCompleted ? 'text-gray-600' : isCurrentActive ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProcessSteps;