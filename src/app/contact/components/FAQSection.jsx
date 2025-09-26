"use client";

import { motion } from "framer-motion";
import { HelpCircle, Clock, BookOpen, Shield, Layers } from "lucide-react";

const faqs = [
  {
    id: 1,
    icon: Clock,
    question: "What's your typical turnaround time?",
    answer:
      "Turnaround times vary by service: Copy editing (3–7 days), Plagiarism detection (24–48 hours), Typesetting (2–5 days). Rush services are available for urgent projects.",
  },
  {
    id: 2,
    icon: BookOpen,
    question: "Do you work with all academic disciplines?",
    answer:
      "Yes, our 900+ professionals cover all major academic disciplines including STEM, humanities, social sciences, and interdisciplinary fields.",
  },
  {
    id: 3,
    icon: Shield,
    question: "How do you ensure confidentiality?",
    answer:
      "We maintain strict confidentiality with NDAs, secure file transfer systems, and GDPR-compliant data handling. Your intellectual property is fully protected.",
  },
  {
    id: 4,
    icon: Layers,
    question: "Can you handle large volume projects?",
    answer:
      "Absolutely. With 900+ professionals, we regularly handle large-scale projects for major publishers, processing thousands of manuscripts annually.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FAQSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-[#1c398e]"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm text-[#1c398e]/80 max-w-2xl mx-auto"
        >
          Quick answers to common questions about our services and processes.
        </motion.p>
      </div>

      {/* FAQ Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {faqs.map((faq) => {
          const Icon = faq.icon;
          return (
            <motion.div
              key={faq.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 30px rgba(28, 57, 142, 0.15)",
              }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-[#1c398e] transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c398e]/10 flex items-center justify-center group-hover:bg-[#1c398e]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#1c398e]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1c398e] transition-colors duration-300">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
