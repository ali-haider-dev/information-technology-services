"use client";
import { motion } from "framer-motion";
import { Settings, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

const DynamicLottiePlayer = dynamic(
  () =>
    import("lottie-react").then((mod) => ({
      default: memo(({ animationData, loop, className }) => {
        const LottieComponent = mod.default;
        return (
          <LottieComponent
            animationData={animationData}
            loop={loop}
            className={className}
            // Performance optimizations
            rendererSettings={{
              preserveAspectRatio: "xMidYMid",
              progressiveLoad: true,
              hideOnTransparent: true,
            }}
          />
        );
      }),
    })),
  {
    loading: () => (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#1c398e] border-t-transparent rounded-full animate-spin"></div>
      </div>
    ),
    ssr: false,
  }
);

const LottieVisual = memo(() => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import("../../../../components/lotties/ERP.json")
      .then((data) => setAnimationData(data.default || data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl animate-pulse" />
    );
  }

  return (
    <DynamicLottiePlayer
      animationData={animationData}
      loop
      className="w-full h-full"
    />
  );
});

LottieVisual.displayName = "LottieVisual";

const ANIMATION_VARIANTS = {
  header: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  content: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  },
  visual: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full px-6 pt-40 md:pt-24 lg:px-20 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden font-sans">
      {/* Optimized background - use pseudo-elements instead of extra divs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1c398e]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1c398e]/3 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.content}
            className="md:pt-5 lg:pt-0"
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c398e]/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Settings className="w-4 h-4 text-[#1c398e]" />
              <span className="text-[#1c398e] text-sm font-medium">
                SAAS Solutions
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              variants={ANIMATION_VARIANTS.header}
            >
              <span>Management </span>
              <span className="bg-gradient-to-r from-[#1c398e] to-blue-600 bg-clip-text text-transparent">
                ERP Systems
              </span>
            </motion.h1>

            {/* Accent line */}
            <div className="w-[14rem] md:w-[16rem] lg:w-[25rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mb-8" />

            {/* Description */}
            <p className="text-md text-gray-600 leading-relaxed mb-8">
              Comprehensive enterprise resource planning solutions designed
              specifically for international publishers. Our cloud-based ERP
              systems streamline operations, manage workflows, and provide
              real-time insights across all aspects of your publishing business.
            </p>

            {/* CTA Button */}
            <motion.button
              className="group inline-flex items-center gap-3 bg-[#1c398e] hover:bg-[#1c398e]/90 text-white font-semibold px-8 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(28, 57, 142, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact" className="text-lg">
                Request Demo
              </Link>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative flex justify-start md:justify-center items-center py-10 lg:py-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.visual}
          >
            <motion.div
              className="relative z-10 w-full max-w-md lg:max-w-none lg:w-[600px] h-auto md:h-[400px] lg:h-[500px]"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LottieVisual />
            </motion.div>

            {/* Simplified floating elements - reduce for performance */}
            <motion.div
              className="absolute top-8 left-8 w-6 h-6 bg-[#1c398e]/20 rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
