"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

 const CTASection = () => {
  return (
    <section className="relative w-full px-6 py-20 lg:px-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1c398e]/5 rounded-full blur-3xl"></div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Experience Our Quality Standards
        </h2>
        <div className="w-[16rem] md:w-[28rem] h-1 bg-[#1c398e] rounded-full mx-auto mb-8"></div>
        <p className="text-md  text-gray-600 mb-10 leading-relaxed">
          See how our commitment to quality can enhance your publishing
          workflows and technology infrastructure.
        </p>

        <motion.button
          className="group inline-flex items-center gap-3 bg-[#1c398e] hover:bg-[#1c398e]/90 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={'/contact'} className="text-lg">Get Started Today</Link>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          {[
            "500+ Publishers Trust Us",
            "100,000+ Manuscripts Processed",
            "30+ Years of Excellence",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#1c398e]" />
              <span className="text-gray-700 font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default CTASection