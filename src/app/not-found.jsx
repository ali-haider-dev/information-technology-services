"use client";
import Lottie from "lottie-react";
import React from "react";
import NotFound from "../components/lotties/NotFound.json";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-gray-50 text-center px-4 py-20 md:pt-20">
      <div className="w-full max-w-lg mx-auto h-[300px]">
        <Lottie
          animationData={NotFound}
          loop
          className="w-full h-full"
        />
      </div>
      <h1 className="mt-8 text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-md text-gray-600 max-w-sm">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a 
        href="/" 
        className="mt-6 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#1c398e] hover:bg-[#1c398e]/90 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;