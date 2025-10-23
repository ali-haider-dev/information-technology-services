
"use client";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight,Zap } from "lucide-react";
import { useRef} from "react";



const ServiceCard = ({
    icon,
    title,
    link,
    description,
    features = [],
    extraInfo = {},
    index = 0,
    isService,
    isActive, 
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        threshold: 0.2,
        once: true,
        margin: "0px 0px -100px 0px",
        amount: 0.1, 
    });


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
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: Math.min(index * 0.1, 0.8),
                duration: 0.6,
            },
        },
        active: { 
            opacity: 1,
            y: -15, 
            scale: 1.1, 
            boxShadow: "0 20px 30px -5px rgba(234, 88, 12, 0.2), 0 10px 15px -5px rgba(234, 88, 12, 0.1)", 
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: Math.min(index * 0.1, 0.8),
            },
        }
    };

    const finalHref = isService ? "contact" : `services/${link}`;
    
    const animationState = inView ? (isActive ? 'active' : 'visible') : 'hidden';


    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={animationState}
            whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className={`
                relative rounded-2xl p-6 bg-[#F0F9FF]
                text-gray-900 shadow-xl hover:shadow-2xl
                border ${isActive ? 'border-orange-600/50' : 'border-blue-100/80'}
                overflow-hidden
                backdrop-blur-lg
                cursor-pointer
                group
                will-change-transform
                font-sans
                h-full w-full
            `}
        >
          
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-blue-50/70 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                }}
        
                className={`flex items-center justify-center w-10 h-10 rounded-xl text-gray-900 bg-blue-100 backdrop-blur-sm mb-4 transition-colors duration-300 ${isActive ? 'bg-orange-100' : 'group-hover:bg-blue-200'}`}
            >
                {icon}
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                className="text-lg font-bold leading-tight mb-3 text-gray-900"
            >
                {title}
            </motion.h3>

            <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                className="text-gray-700 text-xs leading-relaxed mb-4"
            >
                {description}
            </motion.p>

            <div className="space-y-2 mb-6">
                {features.map((feature, featureIndex) => (
                    <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{
                            delay: 0.5 + index * 0.05 + featureIndex * 0.05,
                            duration: 0.3,
                        }}
                        className="flex items-start space-x-2 text-gray-800 text-xs"
                    >
                        <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </motion.div>
                ))}
            </div>

            {isService && (
                <div className="mb-4 pt-7 text-xs text-gray-700 border-t border-blue-100 space-y-3">
                    {Object.entries(extraInfo).map(([key, value], extraIndex) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{
                                delay: 0.5 + index * 0.05 + extraIndex * 0.05,
                                duration: 0.3,
                            }}
                            className="flex justify-between"
                        >
                            <div className="flex gap-1">
                                <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </div>
                            <div>{value}</div>
                        </motion.div>
                    ))}
                </div>
            )}

            <motion.a
                href={finalHref}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group/btn relative overflow-hidden px-4 py-2.5 text-xs self-baseline font-semibold rounded-xl 
                            bg-blue-100/50 backdrop-blur-sm border border-blue-200
                            hover:bg-blue-200 hover:border-blue-300 
                            text-gray-900 transition-all duration-300
                            shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
                {isService ? "Get Qoute" : "Learn More"}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </motion.a>
        </motion.div>
    );
};
export default ServiceCard;