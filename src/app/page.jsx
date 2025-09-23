import HomeHeroSection from "../sections/HomeSection2";
import HomeStatsCards from "../components/HomeStatsCards";
import ServiceSection from "../sections/ServiceSection";
import GetInTouchSection from "../components/GetInTouch";
export default function Home() {
  return (
    <>

      <HomeHeroSection />
     
     <HomeStatsCards />
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
