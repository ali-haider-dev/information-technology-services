"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Clock, MapPin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.2,
    once: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    "Management ERP Systems",
    "E-Commerce & Payment Gateways", 
    "Content Delivery & Access Control",
    "AI Copy Editing Platform",
    "Automated Typesetting & XML",
    "Intelligent Reference Verification",
    "AI Plagiarism Detection",
    "Automated Figure Enhancement",
    "Proprietary Manuscript Platform"
  ];

  const company = [
    "About Us",
    "Our Team", 
    "Careers",
    "Contact"
  ];

  const connect = [
    "Client Portal",
    "Support Center",
    "Quality Standards", 
    "Privacy Policy",
    "Terms of Service"
  ];
const getLink= (item)=>{
if(item=="Our Team"){
  return 'about'
}else{
  return item.split(" ")[0].toLowerCase()
}
}
  return (
    <footer 
      ref={ref}
      className="relative w-full bg-white pt-20 pb-8 px-18 border-t border-gray-400"
    >
      {/* Subtle background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"></div> */}
      {/* <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50 rounded-full blur-xl opacity-40"></div> */}
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="w-32 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
               <Image src="/its-logo.png" alt="ITS Logo" width={120} height={40} />
              </div>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 leading-relaxed mb-8 max-w-sm"
            >
              #1 Publishing Software Provider in Asia, delivering cutting-edge tech enabled publishing solutions worldwide.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-medium">+92-333977095</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <span>Mon - Fri: 9:00 - 6:00 PKT</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="group text-sm"
                >
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{service}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="group text-sm"
                >
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Link href={`/${getLink(item)}`}>{item}</Link>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Connect</h3>
            <ul className="space-y-3">
              {connect.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="group text-sm"
                >
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{item}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="items-center justify-between ">
            <p className="text-gray-600 text-center text-sm">
             © {new Date().getFullYear()} ITS. All rights reserved. Founded 1994 • Trusted by 50+ global STM publishers.
            </p>
            
            {/* <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                title="System Status: Online"
              ></motion.div>
              <span className="text-sm text-gray-500">All systems operational</span>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-[27%] w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-1/3 w-1 h-6 bg-gradient-to-b from-blue-500/20 to-transparent animate-pulse"></div>
    </footer>
  );
};

export default Footer;