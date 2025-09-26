import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="px-2">
        <div className="mt-20 flex max-w-[1440px] w-full pt-20 px-16 pb-16 justify-center items-center rounded-3xl bg-linear-[180deg] from-container-gray1 to-container-gray2">
          <Hero />
        </div>
      </div>
    </div>
  );
}
