"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import Link from "next/link";

const GetInTouchSection = ({ 
  primaryButtonText = "Start Your Project", 
  secondaryButtonText = "Request Quote",
  showPrimaryButton = false,
  showSecondaryButton = false,
  onPrimaryClick,
  onSecondaryClick
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    delay: 0.1,
    threshold: 0.5,
    once: true
  });

  return (
    <section 
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-10 font-sans"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(147,197,253,0.08),transparent_50%)]"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-indigo-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-blue-400/12 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-16 right-1/4 w-2 h-8 bg-gradient-to-b from-blue-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-32 left-1/3 w-4 h-4 border-2 border-blue-400/20 rotate-45 animate-bounce"></div>
      
       <div className="absolute top-20 left-50 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
       <div className="absolute top-20 right-50 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
 <div className="absolute bottom-20 left-50 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
       <div className="absolute bottom-20 right-50 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
          <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut",delay:0 }}
          className="mb-2"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Zap className="w-6 h-6 text-blue-400 animate-pulse" />
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Transform Your Business
            </span>
            <Zap className="w-6 h-6 text-blue-400 animate-pulse" />
          </motion.div>
          
          <h2 className="text-xl md:text-3xl  font-bold text-white ">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block"
            >
              Ready to Transform Your Technology Infrastructure?
            </motion.span>
           
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Join leading international publishers who trust our comprehensive SAAS
          solutions and tech-enabled services. Let's discuss how our technology can scale
          your operations globally.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 150 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button */}
          {showPrimaryButton && (
            <motion.button
              onClick={onPrimaryClick}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3 text-based">
                <Globe className="w-5 h-5" />
                <Link href={'/contact'}>
                {primaryButtonText}
                </Link>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </span>
              
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </motion.button>
          )}

          {/* Secondary Button */}
          {showSecondaryButton && (
            <motion.button
              onClick={onSecondaryClick}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-4 py-4 border-2 border-blue-400/50 text-white font-medium rounded-xl hover:border-blue-400 hover:text-blue-200 hover:bg-blue-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <Link href={'/contact'}>
                {secondaryButtonText}
                </Link>
              </span>
            </motion.button>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouchSection;