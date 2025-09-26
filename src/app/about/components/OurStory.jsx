"use client";
import { motion } from "framer-motion";

const storyParagraphs = [
  "Founded in 1994 with a vision to bridge the gap between academic excellence and global publishing standards, ITS began as a small team of dedicated editors and has grown into one of Asia's largest tech enabled publishing solutions providers. As part of a diversified business group, we leverage synergies across multiple technology and service sectors.",
  "Our journey started with a simple belief: every researcher deserves access to world-class publishing support. Today, we're proud to employ over 900 skilled professionals, with 85% of our workforce being talented women who bring diverse perspectives and exceptional expertise to every project.",
  "Our business group includes Eureka Xpress, providing comprehensive printing and packaging solutions with state-of-the-art offset and digital printing facilities, EurekaNet, delivering premium internet services, data connectivity, and web development solutions with award-winning network infrastructure, and Texitech, specializing in digital transformation solutions including document management, ICT infrastructure, and enterprise-level technology implementations. This diversified portfolio allows us to offer end-to-end solutions across the entire publishing and technology value chain.",
  "From our headquarters in Asia, we serve leading STM publishers worldwide, processing over 100,000 manuscripts annually and maintaining the highest standards of quality, integrity, and innovation in tech enabled publishing solutions.",
];

const milestones = [
  { year: "1994", text: "Company founded with 25 employees" },
  { year: "2000", text: "Reached 200 employees, expanded services" },
  { year: "2010", text: "Launched proprietary manuscript processing system" },
  { year: "2020", text: "Introduced AI detection technology" },
  { year: "2024", text: "900+ employees, #1 in Asia Pacific" },
];

const OurStory = () => {
  return (
    <section className="relative w-full px-6 py-10 lg:px-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1c398e]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true,amount:0.1 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#1c398e]/10 rounded-full mb-4">
            <span className="text-[#1c398e] text-sm font-medium">
              Our Journey
            </span>
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#1c398e] to-blue-600 bg-clip-text text-transparent mb-4">
            Transforming Publishing Since 1994
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From a small team of dedicated editors to Asia's leading
            tech-enabled publishing solutions provider
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12  items-start">
          {/* Our Story */}
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true,amount:0.1 }}
              className="mb-8"
            >
              <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-8">
              {storyParagraphs.map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true,amount:0.1}}
                  className="group"
                >
                  <p className="text-gray-700 leading-relaxed text-sm max-w-2xl group-hover:text-blue-900 transition-colors duration-300">
                    {para}
                  </p>
                  {i < storyParagraphs.length - 1 && (
                    <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent mt-6"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true,amount:0.1 }}
              className="sticky top-8"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl bg-[#1c398e] shadow-2xl shadow-[#1c398e]/20 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-800/30 rounded-full blur-lg"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      Key Milestones
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {milestones.map((milestone, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // transition={{
                        //   delay: 0.1 + i * 0.15,
                        // }}
                        viewport={{ once: true,amount:0.1 }}
                        whileHover={{
                          scale: 1.1,
                          x: 8,
                          transition: { duration: 0.3, ease: "easeInOut" }, // entering hover
                        }}
                        transition={{
                          type: "tween",
                          duration: 0, // leaving hover → instant reset
                        }}
                        className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-800/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-white mt-1 group-hover:scale-110 animate-pulse"></div>
                          {i < milestones.length - 1 && (
                            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-1">
                            <p className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                              {milestone.year}
                            </p>
                            <div className="w-6 h-px bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
                          </div>
                          <p className="text-blue-100 group-hover:text-white transition-colors duration-300 leading-relaxed">
                            {milestone.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
