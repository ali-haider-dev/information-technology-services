"use client";
import { motion } from "framer-motion";
import { Users, AlertCircle, Mail, Phone, MapPin, Gavel, Handshake, DollarSign, BookOpen, Clock, XCircle, Shield, Lock } from "lucide-react"; 
import { useState, useEffect, useRef } from "react";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const sections = [
    {
      id: "acceptance-of-terms",
      icon: Handshake, 
      title: "Acceptance of Terms",
      intro: "By accessing and using Information Technology Services (ITS) platforms and services, you accept and agree to be bound by the terms and provision of this agreement.",
      subsections: null,
      items: null
    },
    {
      id: "service-description",
      icon: BookOpen, 
      title: "Service Description",
      intro: "ITS provides tech-enabled publishing solutions including but not limited to:",
      subsections: null,
      items: [
        "AI-powered academic copy editing platforms",
        "Automated typesetting and formatting solutions",
        "Plagiarism and AI content detection softwares",
        "Digital book conversion and ePub services",
        "Figure improvement and enhancement services",
        "Journal management and peer review platforms",
        "ERP and e-commerce solutions for publishers",
        "Content delivery and monetization platforms"
      ]
    },
    {
      id: "user-responsibilities",
      icon: Users, 
      title: "User Responsibilities",
      intro: "As a user of our services, you agree to:",
      subsections: null,
      items: [
        "Provide accurate and complete information",
        "Maintain the security of your account credentials",
        "Use the services in compliance with applicable laws",
        "Respect intellectual property rights",
        "Not misuse the platform or disrupt its operaions",
        "Report security vulnerabilities responsibly"
      ]
    },
    {
      id: "subscription-and-payment",
      icon: DollarSign, 
      title: "Subscription and Payment",
      intro: "Our SAAS platforms operate on a subscription basis:",
      subsections: null,
      items: [
        "Subscription fees are billed in advance",
        "All fees are non-refundable unless otherwise stated",
        "Payments can be made via accepted payment methods",
        "Accounts may be suspended for non-payment",
        "Cancellation procedures may vary with service"
      ]
    },
    {
      id: "intellectual-property",
      icon: Lock, 
      title: "Intellectual Property",
      intro: "All proprietary softwares, algorithms, and technologies developed by ITS remain our intellectual property. You retain ownership of your content submitted or created through our platforms.",
      subsections: null,
      items: null
    },
    {
      id: "service-availability",
      icon: Clock, 
      title: "Service Availability",
      intro: "While we strive for 24/7 uptime, we do not guarantee uninterrupted service availability. We may perform maintenance, updates, or modifications that temporarily affect service access.",
      subsections: null,
      items: null
    },
    {
      id: "limitation-of-liability",
      icon: AlertCircle, 
      title: "Limitation of Liability",
      intro: "ITS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, even if we have been advised of the possibility of such damages.",
      subsections: null,
      items: null
    },
    {
      id: "termination",
      icon: XCircle, 
      title: "Termination",
      intro: "Either party may terminate this agreement at any time. Upon termination, your access to our services will cease, and you may export your data within a reasonable timeframe.",
      subsections: null,
      items: null
    },
    {
      id: "governing-law",
      icon: Gavel, 
      title: "Governing Law",
      intro: "These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.",
      subsections: null,
      items: null
    },
    {
      id: "contact-information",
      icon: Mail, 
      title: "Contact Information",
      intro: "For questions about these Terms of Service, please contact us:",
      isContact: true,
      subsections: null,
      items: null
    }
  ];

 
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
            <span className="text-[#1c398e] font-medium text-sm">Legal & Compliance</span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
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
                <h3 className="text-lg font-bold text-gray-900 mb-6">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => {
                    const SectionIcon = section.icon;
                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => handleSectionClick(index)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                          activeSection === index
                            ? 'bg-[#1c398e] text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SectionIcon className={`w-5 h-5 flex-shrink-0 ${
                          activeSection === index ? 'text-white' : 'text-[#1c398e]'
                        }`} />
                        <span className="font-medium text-sm">{section.title}</span>
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
                        ? 'bg-[#1c398e]/10 text-[#1c398e]'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isAutoScrolling ? '⏸ Pause Auto-scroll' : '▶ Resume Auto-scroll'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-8">
              <motion.div
                // Removed ref={contentRef}
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                // !!! KEY CHANGE: Removed h-full and overflow-y-auto !!!
                className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm"
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
                        <a href="mailto:legal@its.com.pk" className="text-gray-700 hover:text-[#1c398e] transition-colors">
                          legal@its.com.pk
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
                  // Regular Content Section
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
                      ) : currentSection.items ? ( 
                        <ul className="space-y-3">
                          {currentSection.items.map((item, itemIdx) => (
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
                      ) : null 
                      }
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

export default TermsOfService;