"use client";
import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Lock, Shield } from "lucide-react";
import React from "react";

// Define main and accent colors for consistency
const PRIMARY_COLOR = "#1c398e";
const ACCENT_COLOR = "#FFD700"; // Bright contrasting yellow/gold

const QualityCommitmentProcesses = () => {
  const commitments = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description:
        "Our quality management system meets international standards for consistent service delivery and continuous improvement.",
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description:
        "Full compliance with data protection regulations ensuring secure handling of client data and manuscripts.",
    },
    {
      icon: FileCheck,
      title: "Industry Standards",
      description:
        "Adherence to publishing industry standards including XML workflows, metadata schemas, and accessibility guidelines.",
    },
  ];

  const processes = [
    {
      title: "Software Development",
      items: [
        "Agile development methodologies with continuous integration",
        "Automated testing and quality assurance protocols",
        "Code reviews and security audits",
        "Performance monitoring and optimization",
      ],
    },
    {
      title: "Service Delivery",
      items: [
        "Multi-tier quality control processes",
        "Client feedback integration and continuous improvement",
        "Service level agreement monitoring",
        "24/7 system monitoring and support",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    // Slightly darker background for contrast with white cards
    <section className="relative w-full px-6 py-24 lg:px-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Quality Commitment */}
          <div>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[2.1rem] font-extrabold text-[#1c398e] mb-4 tracking-tight">
                Our Quality Commitment
              </h2>
              <p className="text-md text-gray-600 leading-relaxed max-w-lg">
                As Asia's #1 publishing software provider, we maintain the
                highest standards of quality across all our proprietary
                platforms and services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {commitments.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    // Subtle lift on hover
                    whileHover={{ x: 0, scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:border-[#1c398e]/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      {/* Enhanced Icon Styling: Blue Background, Accent Icon */}
                      <div 
                        className="flex-shrink-0 w-14 h-14 bg-[#1c398e] rounded-xl flex items-center justify-center shadow-lg"
                        style={{ boxShadow: "0 4px 15px rgba(28, 57, 142, 0.3)" }}
                      >
                        <IconComponent className="w-7 h-7" style={{ color: ACCENT_COLOR }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 text-base leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Quality Assurance Processes */}
          <div>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[2.1rem] font-extrabold text-[#1c398e] mb-4 tracking-tight">
                Quality Assurance Processes
              </h2>
              <p className="text-md text-gray-600 leading-relaxed max-w-lg">
                We utilize documented, repeatable processes to ensure every product and service exceeds client expectations.
              </p>
            </motion.div>

            <div className="space-y-8">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  // Enhanced Card Shadow and Border
                  className="bg-white rounded-2xl border-2 border-[#1c398e]/10 p-8 shadow-xl"
                  style={{ boxShadow: "0 15px 30px rgba(0, 0, 0, 0.05)" }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
                    {process.title}
                  </h3>
                  <ul className="space-y-4">
                    {process.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        {/* Checkmark using the primary color */}
                        <CheckCircle className="w-5 h-5 text-[#1c398e] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QualityCommitmentProcesses;