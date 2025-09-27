import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurProject from "./components/OurProject";
import ProjectShowCard from "./components/ProjectShowCard";
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
      </div>
    </div>
  );
}
