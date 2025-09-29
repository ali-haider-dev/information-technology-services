"use client";
import { motion } from "framer-motion";
import { Award, Shield, Users, Target, Heart, Globe } from "lucide-react";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for perfection in every project, maintaining the highest standards of quality and precision.",
    color: "blue",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    accentBg: "bg-blue-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Academic integrity is paramount. We ensure originality and maintain ethical standards in all our work.",
    color: "green",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-200",
    accentBg: "bg-green-600",
  },
  {
    icon: Users,
    title: "Diversity",
    description:
      "Our diverse team of 900+ professionals brings varied perspectives and expertise to every project.",
    color: "purple",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    accentBg: "bg-purple-600",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We continuously evolve our processes and technology to deliver cutting-edge solutions.",
    color: "orange",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    borderColor: "border-orange-200",
    accentBg: "bg-orange-600",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, understanding their unique needs and goals.",
    color: "red",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
    borderColor: "border-red-200",
    accentBg: "bg-red-600",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "We're committed to advancing global knowledge by supporting researchers and publishers worldwide.",
    color: "indigo",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-500",
    borderColor: "border-indigo-200",
    accentBg: "bg-indigo-600",
  },
];

const CoreValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full px-6 py-10 lg:px-20  bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
            Our Core Values
          </h2>
          <div className="w-[10rem] lg:w-xs h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mx-auto mb-2"></div>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do and shape our commitment to
            excellence in academic publishing services.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className={`group relative p-6 rounded-xl ${value.bgColor} ${value.borderColor} border-2 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full blur-xl transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 ${value.bgColor} ${value.borderColor} border rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <IconComponent className={`w-6 h-6 ${value.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Bottom accent */}
                  <motion.div
                    className={`w-0 h-1 ${value.accentBg} rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-500 ease-out`}
                  ></motion.div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
