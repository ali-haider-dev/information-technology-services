import React from 'react'
import ContactSection from "../../sections/ContactSection"
// import SupportCards from "./components/SupportCards"
import dynamic from 'next/dynamic';
const FAQSection = dynamic(() => import("./components/FAQSection"), {
  loading: () => <div className="w-full h-64 bg-gray-200 rounded-full animate-pulse"></div>,
});
const GetInTouch = dynamic(() => import("../../components/GetInTouch"), {
  loading: () => <div className="w-full h-64 bg-gray-200 rounded-full animate-pulse"></div>,
});


export const metadata = {
  
  title: "Contact Us | Get a Custom Quote",

 
  description:
    "Get in touch with Information Technology Services for bespoke software development, AI solutions, and specialized publishing technology services. Start your project consultation today.",

 
  keywords: [
    "Contact ITS",
    "Request a Quote",
    "Software Consultation",
    "Publishing Tech Support",
    "Get in Touch",
    "Information Technology Services Contact"
  ],

  
  openGraph: {
    title: "Start Your Project: Contact Information Technology Services Today",
    description:
      "Ready to discuss your next publishing or academic technology challenge? Fill out our contact form for a personalized consultation.",
    type: "website",
    url: "https://information-technology-services.vercel.app/contact", 
    // images: [{
    //   url: 'https://information-technology-services.vercel.app/images/contact-social.jpg', // Map location ya friendly person ki photo
    // }],
  },

  
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch with ITS",
    description: "Contact our team for a free consultation on AI and publishing technology solutions.",
  },


  alternates: {
    canonical: "https://information-technology-services.vercel.app/contact",
  },
};
const page = () => {
  return (
   <>
   <ContactSection/>
   <FAQSection/>
   <GetInTouch showSecondaryButton showPrimaryButton/>
   {/* <SupportCards/> */}
   </>
  )
}

export default page