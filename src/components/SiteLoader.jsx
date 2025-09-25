"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import LoadingScreen from "../components/lotties/LoadingScreen.json";

export const SiteLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedResources = 0;
    let totalResources = 0;

    const updateProgress = () => {
      const currentProgress =
        totalResources > 0 ? (loadedResources / totalResources) * 100 : 0;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        // Small delay for smooth transition
        setTimeout(() => setLoading(false), 500);
      }
    };

    const trackResourceLoading = () => {
      // Track images
      const images = document.querySelectorAll("img");
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      const scripts = document.querySelectorAll("script[src]");

      totalResources = images.length + stylesheets.length + scripts.length;

      // If no resources to track, complete immediately
      if (totalResources === 0) {
        setProgress(100);
        setTimeout(() => setLoading(false), 500);
        return;
      }

      const onResourceLoad = () => {
        loadedResources++;
        updateProgress();
      };

      const onResourceError = () => {
        loadedResources++;
        updateProgress();
      };

      // Track image loading
      images.forEach((img) => {
        if (img.complete) {
          loadedResources++;
        } else {
          img.addEventListener("load", onResourceLoad);
          img.addEventListener("error", onResourceError);
        }
      });

      // Track stylesheet loading
      stylesheets.forEach((link) => {
        if (link.sheet) {
          loadedResources++;
        } else {
          link.addEventListener("load", onResourceLoad);
          link.addEventListener("error", onResourceError);
        }
      });

      // Track script loading
      scripts.forEach((script) => {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          loadedResources++;
        } else {
          script.addEventListener("load", onResourceLoad);
          script.addEventListener("error", onResourceError);
        }
      });

      updateProgress();
    };

    const checkDOMReady = () => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", trackResourceLoading);
      } else {
        trackResourceLoading();
      }
    };

    // Additional check for window load event
    const handleWindowLoad = () => {
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      checkDOMReady();
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", trackResourceLoading);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>

        {/* Floating Geometric Shapes */}
        {/* <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-200 transform rotate-45 opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-blue-300 transform rotate-12 opacity-30 animate-pulse"></div> */}

    
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* XOLVA Logo/Brand */}
        {/* <div className="mb-8">
          <h1
            className="text-6xl font-bold tracking-wider mb-4"
            style={{ color: "#1c398e" }}
          >
            ITS
          </h1>
          <p className="text-gray-600 text-lg">
           Information Technology Services
          </p>
        </div> */}

        {/* 3D Sphere Loader */}
       <div className="w-full max-w-lg mx-auto h-[300px]">
        <Lottie
          animationData={LoadingScreen}
          loop
          className="w-full h-full"
        />
      </div>

        {/* Progress Bar */}
        {/* <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background:
                  "#25B4D5",
              }}
            ></div>
          </div>
          
        </div> */}

        {/* Loading Text Animation */}
        {/* <div className="text-gray-600">
          <div className="flex items-center justify-center space-x-2">
            <span>
              {progress < 30 && "Loading assets"}
              {progress >= 30 && progress < 70 && "Preparing interface"}
              {progress >= 70 && progress < 100 && "Finalizing"}
              {progress === 100 && "Ready!"}
            </span>
            <div className="flex space-x-1">
              <div
                className="w-1 h-1 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-1 h-1 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-1 h-1 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Exit Animation Overlay */}
      {/* <div
        className={`absolute inset-0 bg-white transition-opacity duration-500 ${
          progress === 100 ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: -1 }}
      ></div> */}
    </div>
  );
};