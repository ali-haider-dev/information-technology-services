"use client";
import React from "react";
import { motion } from "framer-motion";
import { ActivityIcon, Database, HardDrive, Key } from "lucide-react";
const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: Database,
      title: "Data Encryption",
      description:
        "End-to-end encryption for all data transmission and storage",
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Multi-factor authentication and role-based permissions",
    },
    {
      icon: ActivityIcon,
      title: "Regular Audits",
      description: "Quarterly security assessments and compliance reviews",
    },
    {
      icon: HardDrive,
      title: "Backup & Recovery",
      description: "Automated backups with disaster recovery protocols",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative w-full px-6 py-20 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Security & Compliance
          </h2>
          <div className="w-[16rem] md:w-[21rem] h-1 bg-[#1c398e] rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl border-2 border-gray-100 p-6 text-center hover:shadow-xl hover:border-[#1c398e]/30 transition-all duration-300"
                style={{ boxShadow: "0 4px 15px rgba(28, 57, 142, 0.08)" }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#1c398e] rounded-2xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
