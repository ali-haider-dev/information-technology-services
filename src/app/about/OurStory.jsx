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
    <section className="w-full px-6 py-16 lg:px-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Our Story */}
        <div>
          <h2 className="text-3xl font-bold text-[#1c398e] mb-6">Our Story</h2>
          <div className="space-y-6">
            {storyParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-gray-700 leading-relaxed text-sm"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="p-8 rounded-2xl shadow-lg text-white"
          style={{ backgroundColor: "#1c398e" }}
        >
          <h3 className="text-2xl font-bold mb-6">Key Milestones</h3>
          <div className="space-y-5">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + i * 0.3,
                  duration: 0.5,
                }}
                viewport={{ once: false }}
                whileHover={{
                  scale: 1.1,
                  x: 10,
                  transition: {type:"tween",   duration: 0.3, ease: "easeInOut" },
                }}
                className="flex items-start gap-3 cursor-pointer"
              >
                <div className="w-3 h-3 rounded-full bg-white mt-2" />
                <div>
                  <p className="font-semibold">{milestone.year}</p>
                  <p className="text-sm opacity-90">{milestone.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
