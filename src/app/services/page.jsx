import ServiceSection from "../../sections/ServiceSection";
import React from "react";
import TechnologyProcessSection from "./TechnologyProcessSection";
import GetInTouchSection from "../../components/GetInTouch";

const page = () => {
  return (
    <>
     <section className="pt-12">
      <ServiceSection isService />
    </section>

      <TechnologyProcessSection />
      
      <GetInTouchSection showSecondaryButton/>
    </>
   
  );
};

export default page;
