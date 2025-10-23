"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Headphones, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I access my SAAS platform dashboard?",
      answer: "Log in through our client portal at /portal with your provided credentials. If you need access, contact our support team."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available Monday-Friday, 8:00 AM - 6:00 PM PKT. Email support is available 24/7 with responses within 24 hours."
    },
    {
      question: "How do I report a technical issue?",
      answer: "Use our live chat for immediate assistance or email support@bls.com.pk with detailed information about the issue you're experiencing."
    },
    {
      question: "Do you provide training for new users?",
      answer: "Yes, we offer comprehensive onboarding and training sessions for all our software platforms. Contact us to schedule a training session."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1c398e] to-blue-600 flex items-center justify-center shadow-xl">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1c398e] to-blue-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#1c398e] to-blue-600 flex items-center justify-center text-white font-bold shadow-lg"
                  >
                    {index + 1}
                  </motion.div>
                  <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#1c398e] transition-colors pr-4">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    activeIndex === index ? 'bg-[#1c398e]' : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        activeIndex === index ? 'text-white' : 'text-[#1c398e]'
                      }`}
                    />
                  </div>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      className="pb-6 pl-14 pr-4"
                    >
                      <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border-l-4 border-[#1c398e]">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#1c398e] to-blue-700 rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Our technical support team is here to help you get the most out of our platforms.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1c398e] px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
              >
                <Link href="/contact" className="">
                  Contact Support</Link>
              
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;