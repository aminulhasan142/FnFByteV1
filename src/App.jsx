import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurProject from "./components/OurProject";
import PricingSection from "./components/PricingSection";
import ProjectShowCard from "./components/ProjectShowCard";
import ProjectShowCard01 from "./components/ProjectShowCard01";
import ProjectShowCard02 from "./components/ProjectShowCard02";
import ProjectShowCard03 from "./components/ProjectShowCard03";
import ServicesSection from "./components/ServicesSection";
import WhoWeAre from "./components/WhoWeAre";

export default function App() {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="flex flex-col px-2 gap-2">
        <div className="mt-[72px] flex max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-center rounded-3xl bg-linear-[180deg] from-container-gray1 to-container-gray2">
          <Hero />
        </div>
        <div className="flex flex-col lg:flex-row max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-between items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray2 gap-4">
          <WhoWeAre />
        </div>
        <div className="flex flex-col max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 gap-3">
          <OurProject />
        </div>
        {/* Project Cards */}
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] w-full p-2 rounded-3xl bg-linear-[135deg] from-[#BF6235] from-0% to-[#7A4A42] to-100%">
          <ProjectShowCard />
        </div>
        {/* Project Cards 01*/}
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] w-full p-2 rounded-3xl bg-linear-[135deg] from-[#16FFE2] from-0% via-[#2A99F3] via-17% to-[#0A02E7] to-100%">
          <ProjectShowCard01 />
        </div>
        {/* Project Cards 02*/}
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] w-full p-2 rounded-3xl bg-linear-[135deg] from-[#02ACCA] from-0% to-[#026691] to-100%">
          <ProjectShowCard02 />
        </div>
        {/* Project Cards 03*/}
        <div className="flex flex-col-reverse lg:flex-row max-w-[1440px] w-full rounded-3xl bg-linear-[135deg] from-[#6B73FF] from-0% to-[#000DFF] to-100%">
          <ProjectShowCard03 />
        </div>

        {/* Service Section */}
        <ServicesSection />

        {/* Pricing Section */}
        <PricingSection />
      </div>
    </div>
  );
}
