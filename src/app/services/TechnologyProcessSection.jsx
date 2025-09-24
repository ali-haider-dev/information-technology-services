"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  Users, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  Settings
} from "lucide-react";

const TechnologyProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.2,
    once: false,
    amount:0.1
  });

  const processes = [
    {
      number: "1",
      title: "Automated Assessment",
      description: "AI-powered analysis of requirements and intelligent scope definition",
      icon: <Search className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2", 
      title: "Smart Assignment",
      description: "Algorithm-based matching of specialized professionals to your project needs",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      number: "3",
      title: "Tech Execution", 
      description: "Software-driven delivery with real-time automated progress tracking",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-600 to-blue-700"
    },
    {
      number: "4",
      title: "Automated Review",
      description: "AI-powered quality assurance and streamlined client approval process", 
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-700 to-blue-800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative w-full bg-white py-20 px-18 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-100/30 rounded-full blur-xl"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-32 right-1/4 w-2 h-8 bg-gradient-to-b from-blue-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-40 left-1/3 w-4 h-4 border-2 border-blue-300/40 rotate-45 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-ping"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Zap className="w-6 h-6 text-blue-600 animate-pulse" />
            <span className="text-blue-600 text-sm font-medium tracking-wider uppercase">
              Our Methodology
            </span>
            <Zap className="w-6 h-6 text-blue-600 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-blue-700 bg-clip-text text-transparent mb-6"
          >
            Our Technology-Driven Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every solution leverages our proprietary AI platforms and automated quality assurance
            systems, ensuring consistent excellence and optimized delivery through advanced
            technology integration.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-30"></div>
          
          {processes.map((process, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 relative z-10 
              h-60 flex flex-col mt-8">
                {/* Number Badge - Positioned half outside, half inside */}
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 z-20`}>
                  <span className="text-2xl font-bold text-white ">{process.number}</span>
                </div>

                {/* Icon - Adjusted margin for repositioned badge */}
                <div className="flex justify-center mb-4 mt-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <div className="text-blue-600">
                      {process.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900  text-center group-hover:text-blue-900 transition-colors duration-300">
                  {process.title}
                </h3>

                {/* Description - Flex grow to fill remaining space */}
                <div className="mt-6 flex items-center">
                  <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                    {process.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Arrow - Hidden on mobile, shown between cards on larger screens */}
              {index < processes.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-20 z-20">
                  <div className="w-8 h-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              )}

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-200/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyProcessSection;