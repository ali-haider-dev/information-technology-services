"use client";
import { motion } from "framer-motion";
import { Star, CreditCard, Smartphone, CheckCircle } from "lucide-react";
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
    <section className="relative max-w-7xl px-16 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content - Your Original Text */}
          <div className="space-y-8 mt-15 md:-mt-40">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1c398E] leading-tight">
                Empowering Global Technology Excellence
              </h1>
            </motion.div>

            <motion.p
              className="text-sm text-gray-900 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With 900+ skilled professionals, we deliver world-class,
              tech-enabled solutions and comprehensive SaaS platforms to
              international publishers. From manuscript processing systems to
              payment gateways, we power the entire digital ecosystem with
              cutting-edge technology.
            </motion.p>

            {/* <motion.div
              className="flex items-center space-x-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="text-sm font-semibold text-gray-900 ml-1">4.8</span>
                  </div>
                  <p className="text-xs text-gray-600">from 500+ reviews</p>
                </div>
              </div>
            </motion.div> */}
          </div>

          {/* Right Visual Elements - 2x2 Grid Layout */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[600px]">
            {/* Row 1, Col 1*/}
            <motion.div
              className="flex items-center justify-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full h-48 relative overflow-hidden">
                <Image 
                  src='/homeHero1.jpg' 
                  fill
                  priority
                  className="object-cover"
                  alt="Technology solution"
                />
              </div>
            </motion.div>

            {/* Row 1, Col 2 - Success Transaction Image */}
            <motion.div
              className="flex items-center justify-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full shadow-xl w-48 h-48 relative overflow-hidden">
                <Image 
                  src='/About.jpg' 
                  fill
                  priority
                  className="object-cover"
                  alt="About us"
                />
              </div>
            </motion.div>

            {/* Row 2, Col 1 - Payment Amount Circle Image */}
            <motion.div
              className="flex items-center justify-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-2xl w-56 h-56 relative overflow-hidden">
                <Image 
                  src='/About.jpg' 
                  fill
                  priority
                  className="object-cover"
                  alt="Company information"
                />
              </div>
            </motion.div>

            {/* Row 2, Col 2 - Mobile Payment Device Image */}
            <motion.div
              className="flex items-center justify-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl w-full h-50 relative overflow-hidden">
                <Image 
                  src='/About.jpg' 
                  fill
                  priority
                  className="object-cover"
                  alt="Mobile solutions"
                />
              </div>
            </motion.div>
          </div>
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
