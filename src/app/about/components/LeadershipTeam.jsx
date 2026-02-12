"use client";
import { motion } from "framer-motion";

const leadershipTeam = [
  {
    initials: "AU",
    name: "Dr. Atta Ur Rahman",
    position: "Chairman & Chief Scientific Advisor",
    description:
      "Ph.D. Cambridge University, Sc.D. Most decorated scientist of Pakistan with Nishan-i-Imtiaz, UNESCO Science Prize winner, former Federal Minister for Science & Technology.",
    bgColor: "bg-blue-500",
  },
  {
    initials: "JR",
    name: "Jalil Ur Rahman",
    position: "Chief Executive Officer",
    description:
      "Visionary leader with extensive experience in academic publishing and technology solutions. Drives strategic growth and innovation across all business divisions.",
    bgColor: "bg-green-500",
  },
  {
    initials: "MA",
    name: "Mahmood Alam",
    position: "Chief Operations Officer",
    description:
      "Operations expert specializing in large-scale publishing workflows, quality management, and team leadership across multiple international markets.",
    bgColor: "bg-purple-500",
  },
];

const LeadershipTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full px-6 py-20 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
            Leadership Team
          </h2>
          <div className="w-[14rem] lg:w-[16rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mx-auto mb-2"></div>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced leadership team combines decades of academic
            publishing expertise with innovative vision for the future.
          </p>
        </motion.div>
        <div className="absolute top-10 right-10 w-10 h-10  rounded-full blur-xl transform translate-x-6 -translate-y-6 animate-bounce bg-[#1c398e]"></div>
        <div className="absolute top-10 right-left w-10 h-10  rounded-full blur-xl transform translate-x-6 -translate-y-6 animate-bounce bg-[#1c398e]"></div>
        <div className="absolute -bottom-20 -left-15 w-10 h-10  rounded-full blur-xl transform translate-x-6 -translate-y-6 animate-bounce bg-[#1c398e]"></div>
        {/* Leadership Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Card background decoration */}
              {/* <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div> 
               <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
 <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
 <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div> */}
              <div className="relative z-10 text-center">
                {/* Avatar */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 ${leader.bgColor} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className="text-white text-xl font-bold">
                    {leader.initials}
                  </span>
                </motion.div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1c398e] transition-colors duration-300">
                  {leader.name}
                </h3>

                {/* Position */}
                <p className="text-sm font-medium text-[#1c398e] mb-4">
                  {leader.position}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {leader.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`w-0 h-1 ${leader.bgColor} rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-500 ease-out`}
                ></motion.div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
