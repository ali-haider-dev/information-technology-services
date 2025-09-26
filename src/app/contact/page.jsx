import React from 'react'
import ContactSection from "../../sections/ContactSection"
import SupportCards from "./components/SupportCards"
import FAQSection from "./components/FAQSection"
import GetInTouch from "../../components/GetInTouch"

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