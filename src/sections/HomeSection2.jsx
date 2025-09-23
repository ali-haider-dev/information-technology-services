"use client";
import { motion } from "framer-motion";
import { Star, CreditCard, Smartphone, CheckCircle } from "lucide-react"; // Note: Only ArrowRight might be used if needed
import Image from "next/image";

// Variants for reusable animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const HomeHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/homeHerobg.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-30 pt-46">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Main Title and Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Empowering Global Technology Excellence
            </h1>
            <p className="text-sm md:text-lg text-white leading-relaxed max-w-2xl mx-auto mb-8"> {/* Added mb-8 for spacing */}
              With 900+ skilled professionals, we deliver world-class,
              tech-enabled solutions and comprehensive SaaS platforms to
              international publishers. From manuscript processing systems to
              payment gateways, we power the entire digital ecosystem with
              cutting-edge technology.
            </p>
          </motion.div>

          {/* Get Started Button */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }} // Added delay
            className="px-8 py-3 bg-white text-[#1c398E] border border-[#1c398E] font-semibold rounded-full shadow-lg hover:bg-[#1c398E] hover:text-white transition-all duration-300 ease-in-out"
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HomeHeroSection;