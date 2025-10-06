"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Users,
  FileText,
  Share2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";




const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const sections = [
    {
      id: "information-we-collect",
      icon: FileText,
      title: "Information We Collect",
      intro:
        "Information Technology Services (ITS) collects information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
      subsections: [
        {
          title: "Personal Information",
          items: [
            "Name, email address, and contact information",
            "Account credentials and authentication data",
            "Payment and billing information",
            "Professional information and company details",
          ],
        },
        {
          title: "Usage Information",
          items: [
            "Platform usage data and analytics",
            "Document processing and workflow information",
            "System logs and technical data",
            "Communication records and support interactions",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      icon: Users,
      title: "How We Use Your Information",
      intro:
        "We use the information we collect to provide, maintain, and improve our tech-enabled publishing solutions:",
      items: [
        "Deliver and operate our SAAS platforms and services",
        "Process documents and provide publishing solutions",
        "Provide customer support and technical assistance",
        "Send service updates and important notifications",
        "Improve our AI algorithms and software capabilities",
        "Ensure platform security and prevent fraud",
      ],
    },
    {
      id: "data-security",
      icon: Lock,
      title: "Data Security",
      intro:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:",
      items: [
        "Encryption of data in transit and at rest",
        "Regular security audits and assessments",
        "Access controls and authentication systems",
        "Secure data centers and infrastructure",
      ],
    },
    {
      id: "data-sharing",
      icon: Share2,
      title: "Data Sharing",
      intro:
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:",
      items: [
        "With service providers who assist in our operations",
        "When required by law or legal process",
        "To protect our rights and prevent fraud",
        "In connection with business transfers or mergers",
      ],
    },
    {
      id: "your-rights",
      icon: Shield,
      title: "Your Rights",
      intro: "You have certain rights regarding your personal information:",
      items: [
        "Access and review your personal data",
        "Request corrections to inaccurate information",
        "Request deletion of your personal data",
        "Object to processing of your information",
        "Data portability and export options",
      ],
    },
    {
      id: "contact-us",
      icon: AlertCircle,
      title: "Contact Us",
      intro:
        "If you have questions about this Privacy Policy or our data practices, please contact us:",
      isContact: true,
    },
  ];

  // Auto-scroll through sections every 5 seconds
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, sections.length]);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setIsAutoScrolling(false);
    // Resume auto-scrolling after 5 seconds of manual selection
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const currentSection = sections[activeSection];
  const IconComponent = currentSection.icon;

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="relative w-full px-6 py-16 lg:px-20 pt-35 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#1c398e]/10 rounded-full mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Shield className="w-4 h-4 text-[#1c398e]" />
            <span className="text-[#1c398e] font-medium text-sm">
              Your Privacy Matters
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="w-[12rem] md:w-[16rem] h-1 bg-[#1c398e] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>
      </section>

      {/* Split View Content */}
      <section className="relative w-full px-6 py-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => {
                    const SectionIcon = section.icon;
                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => handleSectionClick(index)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                          activeSection === index
                            ? "bg-[#1c398e] text-white shadow-lg"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SectionIcon
                          className={`w-5 h-5 flex-shrink-0 ${
                            activeSection === index
                              ? "text-white"
                              : "text-[#1c398e]"
                          }`}
                        />
                        <span className="font-medium text-sm">
                          {section.title}
                        </span>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Auto-scroll indicator */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isAutoScrolling
                        ? "bg-[#1c398e]/10 text-[#1c398e]"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {isAutoScrolling
                      ? "⏸ Pause Auto-scroll"
                      : "▶ Resume Auto-scroll"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm h-full"
              >
                {currentSection.isContact ? (
                  // Contact Section
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-[#1c398e] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                          {currentSection.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {currentSection.intro}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#1c398e]/5 rounded-xl p-6 space-y-4 border border-[#1c398e]/10">
                      <div>
                        <p className="font-semibold text-lg text-gray-900 mb-4">
                          Information Technology Services (ITS)
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#1c398e]" />
                        <a
                          href="mailto:privacy@its.com.pk"
                          className="text-gray-700 hover:text-[#1c398e] transition-colors"
                        >
                          privacy@its.com.pk
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#1c398e]" />
                        <span className="text-gray-700">+92-333-9877095</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#1c398e] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Karachi, Pakistan</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-[#1c398e] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                          {currentSection.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {currentSection.intro}
                        </p>
                      </div>
                    </div>

                    {/* Subsections or Items */}
                    <div className="space-y-6 mt-8">
                      {currentSection.subsections ? (
                        currentSection.subsections.map((subsection, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              {subsection.title}
                            </h3>
                            <ul className="space-y-3">
                              {subsection.items.map((item, itemIdx) => (
                                <motion.li
                                  key={itemIdx}
                                  className="flex items-start gap-3 text-gray-700"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + itemIdx * 0.05 }}
                                >
                                  <div className="w-2 h-2 bg-[#1c398e] rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))
                      ) : (
                        <ul className="space-y-3">
                          {currentSection.items &&
                            currentSection.items.map((item, itemIdx) => (
                              <motion.li
                                key={itemIdx}
                                className="flex items-start gap-3 text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIdx * 0.05 }}
                              >
                                <div className="w-2 h-2 bg-[#1c398e] rounded-full mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy