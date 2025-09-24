"use client";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Target, Award } from "lucide-react";
import Image from "next/image";

const CareersSection = () => {
  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const briefcaseVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const benefits = [
    { icon: Users, text: "Collaborative Team Environment" },
    { icon: Target, text: "Cutting-edge Technology Projects" },
    { icon: Award, text: "Professional Growth Opportunities" },
  ];

  return (
    <section className="relative w-full px-6 py-20 lg:px-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1c398e]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1c398e]/3 to-transparent rounded-full blur-2xl"></div>

      {/* Grid pattern background */}
      {/* <div className="absolute inset-0 opacity-[0.5]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(#1c398e 1px, transparent 1px),
            linear-gradient(90deg, #1c398e 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto pt-15 lg:pt-4">
        <div className="grid md:grid-cols-2  items-center bg-white shadow-2xl px-6 rounded-2xl">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={headerVariants}
          >
            <div className="space-y-8">
              {/* Title */}
              <div>
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-[#1c398e]/10 rounded-full mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[#1c398e] text-sm font-medium">
                    Join Our Team
                  </span>
                </motion.div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Build the Future with Us
                </h1>

                <div className="w-[16rem] lg:w-[24rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mb-8"></div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                We're a team of builders, thinkers, and explorers using
                cutting-edge technology and innovative solutions to solve
                meaningful problems in academic publishing.
              </p>

              {/* Benefits
              <motion.div className="space-y-4" variants={cardVariants}>
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-2 rounded-2xl  w-[400px]border-gray-100 hover:border-[#1c398e]/20 hover:bg-[#1c398e]/5 transition-all duration-300"
                     
                      whileHover={{ x: 5 }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1c398e]/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#1c398e]" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {benefit.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div> */}

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="group inline-flex items-center gap-3 bg-[#1c398e] hover:bg-[#1c398e]/90 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-lg">Explore Open Positions</span>
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
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative flex justify-center py-5 lg:py-0 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={briefcaseVariants}
          >
            {/* Briefcase container with floating animation */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* PNG Briefcase Image - Replace src with your actual briefcase PNG */}
              <Image
                src={"/CareersBriefCase.png"}
                width={400}
                height={400}
                alt="Briefcase"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Floating decorative elements around briefcase */}
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
            ></motion.div>

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
            ></motion.div>

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
            ></motion.div>

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
            ></motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CareersSection;
