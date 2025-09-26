"use client";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  TrendingUp,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

const OpenPositions = () => {
  const positions = [
    {
      id: 1,
      icon: Code,
      title: "WEB DESIGNER",
      salary: "$45,000 - $65,000 per year",
      experience: "1+ years",
      deadline: "30/06/2025",
      skills:
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      accentBg: "bg-blue-600",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "MOBILE APP DEVELOPER",
      salary: "$55,000 - $75,000 per year",
      experience: "2+ years",
      deadline: "15/06/2025",
      skills:
        "Experience in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and deployment.",
      iconColor: "text-green-500",
      iconBg: "bg-green-100",
      accentBg: "bg-green-600",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "DIGITAL MARKETING SPECIALIST",
      salary: "$40,000 - $55,000 per year",
      experience: "2+ years",
      deadline: "20/11/2025",
      skills:
        "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing and copywriting skills.",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100",
      accentBg: "bg-purple-600",
    },
    {
      id: 4,
      icon: Users,
      title: "PROJECT MANAGER",
      salary: "$60,000 - $80,000 per year",
      experience: "3+ years",
      deadline: "05/07/2025",
      skills:
        "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      accentBg: "bg-orange-400",
    },
  ];

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
      y: 50,
      scale: 0.95,
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

  return (
    <section className="relative w-full px-6 pb-10 lg:px-40  bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#1c398e]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1c398e]/5 to-transparent rounded-full blur-2xl"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-1/4 w-4 h-4 bg-[#1c398e]/15 rotate-45 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/5 w-6 h-6 border-2 border-[#1c398e]/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Open Positions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our team of talented professionals and help shape the future of
            academic publishing
          </p>
        </motion.div>

        {/* Job Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {positions.map((position) => {
            const IconComponent = position.icon;
            return (
              <motion.div
                key={position.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(28, 57, 142, 0.15)",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="group max-w-lg mx-auto bg-white rounded-2xl border border-gray-100 px-6 py-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Header */}
                <div className="flex gap-4 mb-2 items-center">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 ${position.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${position.iconColor}`}
                    />
                  </motion.div>
                  <div className="flex-1 items-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1c398e] transition-colors duration-300">
                      {position.title}
                    </h3>
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-1 mb-2">
                  {/* Salary */}
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-700 text-sm">
                      Salary:
                    </span>
                    <span className="text-[#1c398e] font-bold">
                      {position.salary}
                    </span>
                  </div>

                  {/* Experience & Deadline */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        Experience:{" "}
                        <span className="font-medium">
                          {position.experience}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        Deadline:{" "}
                        <span className="font-medium">{position.deadline}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    Skills
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {position.skills}
                  </p>
                </div>

                {/* Apply Button */}
                <motion.button
                  className="w-full bg-[#1c398e] hover:bg-[#1c398e]/90 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Apply Now
                </motion.button>

                {/* Bottom accent line */}
                <motion.div
                  className={`w-0 h-1 ${position.accentBg} rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-500 ease-out`}
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full">
            <div className="w-2 h-2 bg-[#1c398e] rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Don't see your role? Send us your resume anyway!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPositions;
