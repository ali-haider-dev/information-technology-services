import HomeHeroSection from "@/sections/HomeHeroSection";
import HomeStatsCards from "@/components/HomeStatsCards";
import ServiceSection from "@/sections/ServiceSection";
export default function Home() {
  return (
    <>

      <HomeHeroSection />
     
     <HomeStatsCards />
     <section className="max-w-7xl mx-auto">
      <ServiceSection />

     </section>
    </>
  );
}
