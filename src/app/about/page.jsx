import React from "react";
import AboutUsSection from "../../sections/AboutUsSection";
import HomeStatsCards from "../../components/HomeStatsCards";
import OurStory from "./components/OurStory";
import CoreValues from "./components/CoreValues";
import LeadershipTeam from "./components/LeadershipTeam";

export const metadata = {
  title: "About",

  description:
    "Learn about Information Technology Services' mission, core values, and expertise in developing specialized digital solutions for the publishing and academic industries. Meet our dedicated team.",

  keywords: [
    "About ITS",
    "Company Mission",
    "Publishing Technology Expertise",
    "Software Development Team",
    "Digital Solutions Provider",
    "Information Technology Services Company",
  ],

  openGraph: {
    title: "Our Mission and Expert Team at Information Technology Services",
    description:
      "Discover ITS's commitment to innovation and quality in serving the complex needs of international publishers.",
    type: "website",
    url: "https://information-technology-services.vercel.app/about",
    images: [
      {
        url: "/its-logo.png",
        width: 1200,
        height: 630,
        alt: "Information Technology Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About ITS | Mission & Expertise",
    description:
      "Building the future of publishing technology with a dedicated and skilled team.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/about",
  },
};

const AboutUsPage = () => {
  return (
    <>
      <section className="pt-28 lg:pt-2 bg-white h-full">
        <AboutUsSection />
      </section>
      <HomeStatsCards />
      <OurStory />
      <CoreValues />
      <LeadershipTeam />
    </>
  );
};

export default AboutUsPage;
