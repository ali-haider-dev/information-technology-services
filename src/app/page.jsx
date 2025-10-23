import dynamic from "next/dynamic";
import HeroSection from "../sections/HomeHeroSection";

const ServiceSection = dynamic(() => import("../sections/HomeServiceSection"), {
  loading: () => null,
});

const GetInTouchSection = dynamic(() => import("../components/GetInTouch"), {
  loading: () => null,
});

export const metadata = {
  title: "ITS | Leading Academic Publishing Services",
  description:
    "Information Technology Services provides specialized AI, ERP, and bespoke software development solutions for international publishers and academic institutions. Automate workflows and ensure content quality.",

  keywords: [
    "Publishing Technology",
    "AI Solutions for Publishers",
    "Academic Software Development",
    "Manuscript Management System",
    "Content Automation",
    "Information Technology Services",
    "ITS Tech",
  ],

  openGraph: {
    title: "Specialized AI & Software Solutions for the Publishing Industry",
    description:
      "Transform your editorial and production workflows with bespoke AI and ERP systems from Information Technology Services.",
    type: "website",
    url: "https://information-technology-services.vercel.app/",
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
    title: "ITS: Leaders in Publishing Technology",
    description:
      "Discover our full suite of AI copy editing, ERP, and manuscript platform solutions.",
  },

  alternates: {
    canonical: "https://information-technology-services.vercel.app/",
  },
};
export default function Home() {
  return (
    <>
      {/* <HomeHeroSection /> */}
      <HeroSection />
      {/* <HomeStatsCards /> */}
      <section className="max-w-7xl mx-auto">
        <ServiceSection />
      </section>
      <section className="max-w-7xl mx-auto">
        {/* Other sections can be added here */}
        <GetInTouchSection showPrimaryButton />
      </section>
    </>
  );
}
