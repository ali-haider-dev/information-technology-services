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
    import("../../../../components/lotties/GraphicsDesign.json")
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

const HeroSection = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative w-full px-6 md:px-18 pt-5 md:pt-0 lg:px-20  bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1c398e]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1c398e]/3 to-transparent rounded-full blur-2xl"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(#1c398e 1px, transparent 1px),
            linear-gradient(90deg, #1c398e 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
            className="md:pt-5 lg:pt-0"
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-2 py-2 bg-[#1c398e]/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Settings className="w-4 h-4 text-[#1c398e]" />
              <span className="text-[#1c398e] text-xs font-medium">
                Visual Excellence
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-xl sm:text-2xl  lg:text-4xl font-bold text-gray-900 mb-6 "
              variants={headerVariants}
            >
              <span className="text-black">Figure Improvement </span>
            </motion.h1>

            {/* Accent line */}
            <div className=" w-[14rem] md:w-[16rem]  lg:w-[25rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mb-8"></div>

            {/* Description */}
            <p className="text-md text-gray-600 leading-relaxed mb-8">
              Enhance the visual impact of your scientific figures with our
              professional improvement services. Our team of 100+ graphic
              specialists transforms charts, diagrams, and illustrations into
              publication-ready visuals that meet the highest scientific and
              aesthetic standards.
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
              <Link href={"/contact"} className="text-lg">
                Improve My Figures
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

          {/* Right Visual - Lottie Animation */}
          <motion.div
            className="relative flex justify-start md:justify-center items-center py-10  lg:py-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={visualVariants}
          >
            {/* Lottie Animation Container */}
            <motion.div
              className="relative z-10 w-full max-w-md lg:max-w-none lg:w-[600px] h-auto md:h-[400px] lg:h-[500px]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LottieVisual />
            </motion.div>

            {/* Floating decorative elements around animation */}
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

            <motion.div
              className="absolute bottom-8 right-8 w-4 h-4 bg-[#1c398e]/30 rotate-45 z-0"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-1/3 right-4 w-3 h-3 border-2 border-[#1c398e]/40 rounded-full z-0"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute bottom-1/3 left-4 w-2 h-2 bg-[#1c398e]/25 rounded-full z-0"
              animate={{
                scale: [0.8, 1.3, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
