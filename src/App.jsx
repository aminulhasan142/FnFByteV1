import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";

export default function App() {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="px-2 gap-2">
        <div className="mt-[72px] flex max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-center rounded-3xl bg-linear-[180deg] from-container-gray1 to-container-gray2">
          <Hero />
        </div>
        <div className="flex max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-center rounded-3xl bg-linear-[180deg] from-container-gray1 to-container-gray2">
          <WhoWeAre />
        </div>
      </div>
    </div>
  );
}
