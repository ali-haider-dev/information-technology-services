"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SendEmail } from "../app/contact/contact.actions";
import { useActionState } from "react";
const ContactSection = () => {
  const initialErrorstate = {
    errors:{}
  };

  const [state, formAction, isPending] = useActionState(
    SendEmail,
    initialErrorstate
  );
  const headerVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
console.log("Errors",state?.errors)
  const serviceOptions = [
    "Academic Copy Editing",
    "Type Setting & XML Conversion",
    "Reference Checking",
    "Plagiarism & AI Detection",
    "Figure Improvement",
    "Manuscript Processing System",
    "Management ERP Systems",
    "E-Commerce & Payment Gateways",
    "Content Delivery & Access Control",
    "Careers Inquiry",
    "Multiple Services",
  ];

  return (
    <section className="relative max-w-7xl  py-30 px-18 bg-gradient-to-br from-gray-50 via-white to-[#1c398e]/5 overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#1c398e]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#1c398e]/5 to-transparent rounded-full blur-2xl"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-1/4 w-24 h-24 bg-[#1c398e]/20 rotate-45 animate-bounce"></div>
      <div className="absolute top-20 left-1/4 w-24 h-24 bg-[#1c398e]/20 rotate-45 animate-bounce"></div>
      <div
        className="absolute bottom-1/4 left-1/5 w-6 h-6 border-2 border-[#1c398e]/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/6 w-3 h-3 bg-[#1c398e]/30 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto py-12 lg:-pt-50 ">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-left w-full lg:w-1/2 mb-12 lg:mb-0 lg:-mt-40 sm:-mt-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#1c398e]/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[#1c398e] text-sm font-medium">
                Get in Touch
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="text-2xl lg:text-4xl font-bold text-[#1c398e] mb-6">
              Contact Our Expert Team
            </h2>

            {/* Accent Line */}
            <div className="w-[27rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-400 rounded-full mb-8"></div>

            {/* Description */}
            <p className="text-sm text-[#1c398e] leading-relaxed">
              Ready to elevate your academic publishing? Our team of 900+
              professionals is here to discuss your project requirements and
              provide customized solutions for your scholarly content.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4 text-sm text-[#1c398e]">
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-blue-600" />
                <span>+92-333977095</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-blue-600" />
                <span>info@informationtechnologyservices.com.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-blue-600" />
                <span>Information Technology Services Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-blue-600" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM (EST)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={formVariants}
          >
            <h3 className="text-xl font-bold text-[#1c398e] mb-4">
              Send Us a Message
            </h3>
            <form action={formAction} className="space-y-3">
              {/* First Name & Last Name */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-2.5 mb-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#1c398e]/50 focus:border-transparent transition-colors"
                  />
                  {
                    state?.errors?.firstName && <p className="text-red-400 text-xs">{ state?.errors.firstName}</p>
                  }
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-2.5 mb-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#1c398e]/50 focus:border-transparent transition-colors"
                  />
                   {
                    state?.errors?.lastName && <p className="text-red-400 text-xs">{ state?.errors.lastName}</p>
                  }
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2.5 mb-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#1c398e]/50 focus:border-transparent transition-colors"
                />
                 {
                    state?.errors?.email && <p className="text-red-400 text-xs">{ state?.errors.email}</p>
                  }
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Organization name"
                  className="w-full p-2.5 mb-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#1c398e]/50 focus:border-transparent transition-colors"
                />
                 {
                    state?.errors?.organization && <p className="text-red-400 text-xs">{ state?.errors.organization}</p>
                  }
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full p-2.5 mb-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#1c398e]/50 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                 {
                    state?.errors?.service && <p className="text-red-400 text-xs">{ state?.errors.service}</p>
                  }
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={2}
                  placeholder="Project requirements..."
                  className="w-full p-2.5 mb-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#1c398e]/50 focus:border-transparent transition-colors resize-y"
                ></textarea>
                 {
                    state?.errors?.projectDetails && <p className="text-red-400 text-xs">{ state?.errors.projectDetails}</p>
                  }
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-[#1c398e] text-white text-sm font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <ArrowRight size={16} className="ml-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
