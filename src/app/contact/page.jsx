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