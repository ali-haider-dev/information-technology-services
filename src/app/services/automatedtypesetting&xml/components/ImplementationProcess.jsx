"use client";
import { motion } from "framer-motion";
import { Clock, Users, Award, CircleCheckBig } from "lucide-react";
import ServiceHighlights from "../../../../components/ServiceHighlight";
import ProcessSteps from "../../../../components/ServiceProcessStep";
import { redirect } from "next/navigation";
const ImplementationProcess = () => {
  const processSteps = [
    {
      title: "Automated Assessment",
      description:
        "Proprietary AI algorithms analyze manuscript structure, formatting requirements, and publisher specifications automatically.",
    },
    {
      title: "AI Source Verification",
      description:
        "Intelligent verification system automatically cross-checks each source against academic databases and publisher records in real-time.",
    },
    {
      title: "Smart Format Standardization",
      description:
        "AI-powered correction engine automatically fixes formatting inconsistencies and aligns with required style guidelines.",
    },
    {
      title: "Intelligent Quality Report",
      description:
        "Automated detailed report generation with AI-powered corrections, recommendations, and verification status for each reference.",
    },
  ];

  const serviceHighlights = [
    {
      icon: Clock,
      text: "1-3 day turnaround",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      text: "AI platform + 200+ specialists",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      text: "99.9% AI accuracy rate",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: CircleCheckBig,
      text: "Automated verification reports",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const pricingInfo = {
        title:"Platform Access",
    description: "Subscription-based platform starting from $2 per reference with bulk processing discounts",
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
    <section className="relative w-full px-6  lg:px-20  bg-white overflow-hidden">
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
        Our AI-Powered Verification Process
          </h2>
          <div className="w-[16rem] lg:w-[22rem] h-1 bg-gradient-to-r from-[#1c398e] to-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 font-sans">
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
