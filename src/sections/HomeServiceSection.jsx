"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react"; // Import useEffect
import WorldBusiness from "../components/lotties/WorldBusiness.json";
import {
  Globe,
  ShoppingCart,
  Lock,
  Edit3,
  FileCode,
  Search,
  Shield,
  Image,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ServiceCard from "../components/HomeServiceCard";

const services = [
  {
    icon: <Globe className="w-5 h-5 text-black" />,
    title: "Management ERP Systems",
    link: "managementerpsystems",
    description:
      "Proprietary enterprise resource planning platform designed specifically for international publishers.",
    features: [
      "Automated workflow management",
      "AI-powered resource optimization",
      "Real-time analytics dashboard",
    ],
    extraInfo: {
      turnaround: "Custom deployment",
      expertise: "Cloud-based SAAS platform",
    },
  },
  {
    icon: <ShoppingCart className="w-5 h-5 text-black" />,
    title: "E-Commerce & Payment Gateways",
    link: "e-commerce&paymentgateways",
    description:
      "Proprietary payment processing platform with integrated e-commerce solutions for global publishers.",
    features: [
      "Automated multi-currency processing",
      "AI-powered fraud detection",
      "Smart compliance automation",
    ],
    extraInfo: {
      turnaround: "Instant activation",
      expertise: "50+ payment methods",
    },
  },
  {
    icon: <Lock className="w-5 h-5 text-black" />,
    title: "Content Delivery & Access Control",
    link: "contentdelivery&accesscontrol",
    description:
      "Advanced proprietary CDN platform with intelligent access control systems for digital publishing.",
    features: [
      "Intelligent content distribution",
      "Automated user access control",
      "Advanced DRM technology",
    ],
    extraInfo: {
      turnaround: "Real-time deployment",
      expertise: "99.9% uptime guarantee",
    },
  },
  {
    icon: <Edit3 className="w-5 h-5 text-black" />,
    title: "AI-Powered Copy Editing",
    link: "aicopyeditingplatform",
    description:
      "Proprietary AI-driven editing platform ensuring academic excellence through automated quality control.",
    features: [
      "AI-powered language optimization",
      "Automated style guide compliance",
      "Smart academic tone analysis",
    ],
    extraInfo: { turnaround: "24-48 hours", expertise: "AI-powered platform" },
  },
  {
    icon: <FileCode className="w-5 h-5 text-black" />,
    title: "Automated Typesetting & XML",
    link: "automatedtypesetting&xml",
    description:
      "Proprietary automated typesetting engine with intelligent XML conversion for seamless publishing workflows.",
    features: [
      "AI-driven layout optimization",
      "Automated XML/HTML generation",
      "Smart format compatibility",
    ],
    extraInfo: { turnaround: "1-2 days", expertise: "Proprietary AI engine" },
  },
  {
    icon: <Search className="w-5 h-5 text-black" />,
    title: "Automated Reference Verification",
    link: "intelligentreferenceverification",
    description:
      "Advanced AI-powered reference verification system with automated citation accuracy checking.",
    features: [
      "Automated citation validation",
      "AI-powered source verification",
      "Smart bibliography formatting",
    ],
    extraInfo: {
      turnaround: "12-24 hours",
      expertise: "Machine learning algorithms",
    },
  },
  {
    icon: <Shield className="w-5 h-5 text-black" />,
    title: "Advanced AI Detection Platform",
    link: "aiplagiarismdetection",
    description:
      "Proprietary multi-layered AI detection system with advanced plagiarism and content originality analysis.",
    features: [
      "AI-powered similarity detection",
      "Machine learning content analysis",
      "Automated integrity reporting",
    ],
    extraInfo: {
      turnaround: "Instant results",
      expertise: "Proprietary AI algorithms",
    },
  },
  {
    icon: <Image className="w-5 h-5 text-black" />,
    title: "AI-Enhanced Figure Processing",
    link: "automatedfigureenhancement",
    description:
      "Proprietary AI-powered figure enhancement platform with automated quality optimization and formatting.",
    features: [
      "AI-powered resolution enhancement",
      "Automated accuracy validation",
      "Smart publication formatting",
    ],
    extraInfo: { turnaround: "1-2 days", expertise: "Computer vision A" },
  },
  {
    icon: <FileText className="w-5 h-5 text-black" />,
    title: "Manuscript Processing Platform",
    link: "proprietarymanuscriptplatform",
    description:
      "Complete proprietary manuscript processing platform with AI-driven workflow automation licensed globally.",
    features: [
      "AI-powered workflow automation",
      "Cloud-native architecture",
      "Intelligent progress tracking",
    ],
    extraInfo: {
      turnaround: "Custom configuration",
      expertise: "Licensed by 50+ publishers",
    },
  },
];


const getCardsPerView = (width) => {
  if (width >= 1024) return 3; 
  if (width >= 768) return 2; 
  return 1;
};

export default function ServiceSection({ isService }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    threshold: 0.3,
    once: true,
  });
  const [activeIndex, setActiveIndex] = useState(0); 
  const totalCards = services.length;

  const [cardsPerView, setCardsPerView] = useState(3); 

 
  useEffect(() => {
   
    const handleResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    handleResize();

  
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
 
    const newMaxIndex = Math.max(0, totalCards - cardsPerView);
    if (activeIndex > newMaxIndex) {
      setActiveIndex(newMaxIndex);
    }
  }, [cardsPerView, activeIndex, totalCards]);

  
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

 
  const translateX = activeIndex * (100 / cardsPerView);


  return (
    <section className="relative -mt-14 flex px-16 md:px-0 flex-col justify-center items-center overflow-hidden bg-white py-20 font-sans">
     
      <div
        className="relative max-w-7xl w-full mx-auto px-6 md:px-16  z-10 flex items-center justify-between" 
        ref={headerRef}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className=" pr-4" 
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 text-gray-600 text-start text-base"
          >
            All our services are powered by cutting-edge proprietary software
            platforms developed in-house. From AI-driven manuscript processing
            to automated quality control systems, we deliver technology-first
            solutions that scale with your business needs.
          </motion.p>
        </motion.div>
        
        
        <div className={`hidden sm:flex self-end pointer-events-none gap-5 ${cardsPerView === totalCards ? 'invisible' : ''}`}>
          {/* Previous Button */}
          <motion.button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              p-3 rounded-full bg-orange-600 text-white shadow-xl 
              transition-opacity duration-300 pointer-events-auto
              ${
                activeIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 hover:bg-orange-700"
              }
            `}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              p-3 rounded-full bg-orange-600 text-white shadow-xl 
              transition-opacity duration-300 pointer-events-auto
              ${
                activeIndex === maxIndex
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 hover:bg-orange-700"
              }
            `}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
   
      <div className="relative w-full max-w-7xl mx-auto mt-20">
        <div className=" px-6 md:px-12"> 
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
                transform: `translateX(-${translateX}%)`,
                
            }}
          >
            {services.map((card, index) => {
             
              
              const cardPercentageWidth = 100 / cardsPerView;
             
              const adjustedCardWidth = cardPercentageWidth - (64 / cardsPerView);

              return (
                <div
                  key={index}
                  className="flex-shrink-0 px-8" 
                  style={{
                    width: `${cardPercentageWidth}%`, 
                  }}
                >
                  <ServiceCard
                    {...card}
                    index={index}
                    isService={false}
                   
                    isActive={cardsPerView === 3 ? index === activeIndex + 1 : false} 
                  />
                </div>
              );
            })}
          </div>
        </div>

        {maxIndex > 0 && ( 
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(maxIndex + 1).keys()].map((index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? "w-8 bg-orange-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

    
      {maxIndex > 0 && (
        <div className="flex sm:hidden justify-center gap-5 mt-8">
            {/* Previous Button */}
            <motion.button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`
                    p-3 rounded-full bg-orange-600 text-white shadow-xl 
                    transition-opacity duration-300 pointer-events-auto
                    ${
                    activeIndex === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "opacity-100 hover:bg-orange-700"
                    }
                `}
            >
                <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
                onClick={handleNext}
                disabled={activeIndex === maxIndex}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`
                    p-3 rounded-full bg-orange-600 text-white shadow-xl 
                    transition-opacity duration-300 pointer-events-auto
                    ${
                    activeIndex === maxIndex
                        ? "opacity-30 cursor-not-allowed"
                        : "opacity-100 hover:bg-orange-700"
                    }
                `}
            >
                <ChevronRight className="w-6 h-6" />
            </motion.button>
        </div>
      )}
    </section>
  );
}
