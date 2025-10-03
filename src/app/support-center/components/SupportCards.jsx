"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSupport = () => {
  const supportOptions = [
    {
      icon: Phone,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Phone Support",
      subtitle: "Speak directly with our project managers",
      contact: "+92-333977095",
      contactType: "phone", // NEW: Contact type
      hours: "Monday - Friday, 9:00 AM - 6:00 PM",
      hoverBorder: "hover:border-blue-600",
    },
    {
      icon: Mail,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      title: "Email Support",
      subtitle: "Get detailed responses within 24 hours",
      contact: "info@informationtechnologyservices.com.pk",
      contactType: "email", // NEW: Contact type
      hours: "For general inquiries and project discussions",
      hoverBorder: "hover:border-green-500",
    },
    {
      icon: MessageCircle,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      title: "Live Chat",
      subtitle: "Instant support for urgent questions",
      contact: "Available 24/7",
      contactType: "text", // NEW: Contact type
      hours: "Click the chat icon in the bottom right",
      hoverBorder: "hover:border-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // 🛠️ HELPER FUNCTION to determine the link/content
  const renderContactAction = (option) => {
    // Phone Link (Button style)
    if (option.contactType === "phone") {
      const telLink = `tel:${option.contact.replace(/\s+/g, "")}`;
      return (
        <motion.a
          href={telLink}
          className="inline-block px-4 py-2 bg-[#1c398e] text-white rounded-full text-sm font-semibold shadow-md group-hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(28, 57, 142, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Call Now
        </motion.a>
      );
    }

    // Email Link (Link style)
    if (option.contactType === "email") {
      const mailtoLink = `mailto:${option.contact}`;
      return (
        <motion.a
          href={mailtoLink}
          className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold shadow-md group-hover:bg-green-800 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Email Now
        </motion.a>
      );
    }

    // Default: Text (For Live Chat, etc.)
    return (
      <div className="font-semibold text-[#1c398e] text-sm group-hover:text-blue-700 transition-colors duration-300">
        {option.contact}
      </div>
    );
  };

  return (
    <section className="w-full px-6 py-16 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className={`group bg-white rounded-2xl border-2 border-gray-100 p-6 text-center hover:shadow-2xl ${option.hoverBorder} transition-all duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 ${option.iconBg} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                >
                  <IconComponent className={`w-8 h-8 ${option.iconColor}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1c398e] transition-colors duration-300">
                  {option.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {option.subtitle}
                </p>

                {/* Contact Info (The Dynamic Part) */}
                <div className="space-y-2">
                  {/* Rendering the Contact Action */}
                  {renderContactAction(option)}

                  <div className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {option.hours}
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`w-0 h-1 ${option.iconColor.replace(
                    "text-",
                    "bg-"
                  )} rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-500 ease-out`}
                ></motion.div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSupport;