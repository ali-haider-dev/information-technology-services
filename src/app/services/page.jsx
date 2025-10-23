import dynamic from "next/dynamic";
import React from "react";

const ServiceSection = dynamic(() => import("../../sections/ServiceSection"), {
  loading: () => (
    <div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse"></div>
  ),
});

const TechnologyProcessSection = dynamic(
  () => import("./TechnologyProcessSection"),
  {
    loading: () => (
      <div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse"></div>
    ),
  }
);

const GetInTouchSection = dynamic(() => import("../../components/GetInTouch"), {
  loading: () => (
    <div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse"></div>
  ),
});


const page = () => {
  return (
    <>
   
        <ServiceSection isService />


      <TechnologyProcessSection />

      <GetInTouchSection showSecondaryButton />
    </>
  );
};

export default page;
