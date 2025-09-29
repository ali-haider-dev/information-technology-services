"use client";
import { motion } from "framer-motion";
import { Clock, Headphones, Shield, RefreshCw, Globe, Award, CircleCheckBig } from "lucide-react";
import ServiceHighlights from "../../../../components/ServiceHighlight";
import ProcessSteps from "../../../../components/ServiceProcessStep";
import { redirect } from "next/navigation";
const ImplementationProcess = () => {
  const processSteps = [
    {
      title: "Content Assessment",
      description:
        "Evaluation of your content types, access requirements, and security needs.",
    },
    {
      title: "CDN Configuration",
      description:
        "Setup of global delivery network with optimized caching and compression settings.",
    },
    {
      title: "Access Control Setup",
      description:
        "Implementation of security policies, user roles, and authentication integration",
    },
    {
      title: "Testing & Launch",
      description:
        "Comprehensive testing of delivery performance and security before full deployment.",
    },
  ];

  const serviceHighlights = [
    {
      icon: Clock,
      text: "1-2 week deployment",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Globe,
      text: "200+ global edge locations",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      text: "ISO 27001 certified",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: CircleCheckBig,
      text: "99.9% uptime SLA",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const pricingInfo = {
    title:"Usage-Based Pricing",
    description: "Starting from $0.08 per GB delivered + $500/month platform fee",
  };

  const handleGetQuote = () => {
    redirect('/contact')
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full px-6  lg:px-20  bg-white overflow-hidden font-sans">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1c398e]/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1c398e]/5 to-transparent rounded-full blur-2xl"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-1/4 w-4 h-4 bg-[#1c398e]/15 rotate-45 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/5 w-6 h-6 border-2 border-[#1c398e]/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-sans">
            Implementation Process
          </h2>
          <div className="w-[16rem] lg:w-[22rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Process Steps */}
          <div>
            <ProcessSteps steps={processSteps} />
          </div>

          {/* Right: Service Highlights & Pricing */}
          <div>
            <ServiceHighlights
              highlights={serviceHighlights}
              pricing={pricingInfo}
              onGetQuote={handleGetQuote}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;
