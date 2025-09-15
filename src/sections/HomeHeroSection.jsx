import React from "react";

const HomeHeroSection = () => {
  return (
    <div className="relative bg-[url('/home-hero-bg.jpg')] h-[100vh] w-screen overflow-hidden bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-55 z-10"></div>
      {/* Content goes here, above the overlay */}
      <div className="relative z-20">
        {/* Add your hero content here */}
        <div className="flex flex-col justify-center  px-16 pt-45">
          <h1 className="text-4xl text-white max-w-2xl">
            Empowering Global Technology Excellence
          </h1>
          <p className="text-white mt-4 max-w-2xl">
            With 900+ skilled professionals, we deliver world-class tech enabled solutions and comprehensive SAAS platforms to international publishers. From manuscript processing systems to payment gateways, we power the entire digital ecosystem with cutting-edge technology.
            </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
