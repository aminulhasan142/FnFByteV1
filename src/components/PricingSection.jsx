import { MdDone, MdOutlineMonetizationOn } from "react-icons/md";
import HeadingGradientText from "./HeadingGradientText";
import TagText from "./TagText";

export default function PricingSection() {
  return (
    <>
      {/* Pricing first summary card */}
      <div className="flex flex-col max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 gap-3">
        <TagText text="Pricing">
          <MdOutlineMonetizationOn className="text-zinc-400" />
        </TagText>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-5 md:gap-6 lg:gap-[7.5rem]">
          <HeadingGradientText>Plans That Fit You</HeadingGradientText>
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-slate-400 text-sm font-medium font-poppins">
              Whether you’re a startup validating your MVP or an enterprise
              scaling complex systems, FnFByte offers pricing that fits your
              goals and budget.
            </p>
            <div className="flex p-1 items-center  gap-0.5 rounded-2xl border border-border backdrop-blur-xl">
              <button className="flex py-3 px-4 justify-center items-center gap-1 rounded-xl bg-surface-brand text-white font-poppins text-sm font-bold cursor-pointer">
                Project Wise
              </button>
              <button className="flex py-3 px-4 justify-center items-center gap-1 rounded-xl  text-zinc-400 font-poppins text-sm font-bold cursor-pointer">
                Monthly
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* pricing cards */}
      <div className="flex flex-col lg:flex-row items-center gap-1 self-stretch">
        {/* 1st card */}
        <div className="flex p-6 md:p-12 lg:p-16 flex-col items-center gap-4 self-stretch rounded-3xl bg-linear-[180deg] from-container-gray2 from-0% to-container-gray1 to-100% relative">
          <div className="flex justify-start w-full items-center">
            <img src="/src/assets/LightIcon.svg" alt="Light" />
          </div>
          <img
            src="/src/assets/Ellipse.svg"
            alt="vector"
            className="flex absolute right-0.5 -z-10"
          />
          {/* Card body text title*/}
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <h3 className="text-zinc-200 text-2xl font-black">
                Pay as you go
              </h3>
              <p className="text-slate-400 text-sm font-poppins font-normal">
                Small Projects, Quick Turnaround
              </p>
            </div>
          </div>
          {/* Pricing text */}
          <div className="flex w-full justify-start items-center">
            <h1 className="text-white font-poppins text-3xl font-bold">
              $40
              <span className="text-white font-poppins text-sm font-normal ">
                /HOUR
              </span>
            </h1>
          </div>
          {/* cta button */}
          <a
            href="#call"
            className="flex py-3 px-6 justify-center items-center self-stretch rounded-xl border border-border bg-container-gray2 text-white text-sm font-bold font-poppins"
          >
            Book a Call
          </a>

          {/* offer list container */}
          <div className="flex flex-col items-start  gap-3 self-stretch w-full">
            <h4 className="text-zinc-400 text-sm font-normal font-poppins">
              Why should you take this
            </h4>
            {/* offer 1 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Flexible pricing for short-term projects.
              </p>
            </div>
            {/* offer 2 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Pay only for the hours you need.
              </p>
            </div>
            {/* offer 3 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                No long-term commitments
              </p>
            </div>
            {/* offer 4 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Ideal for one-off tasks or small-scale projects.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd card */}
        <div className="flex p-6 md:p-12 lg:p-16 flex-col items-center gap-4 self-stretch rounded-3xl bg-linear-[180deg] from-container-gray2 from-0% to-container-gray1 to-100% relative">
          <div className="flex justify-start w-full items-center">
            <img src="/src/assets/LightIcon.svg" alt="Light" />
          </div>
          <img
            src="/src/assets/Ellipse.svg"
            alt="vector"
            className="flex absolute right-0.5 -z-10"
          />
          {/* Card body text title*/}
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <h3 className="text-zinc-200 text-2xl font-black">
                Pay as you go
              </h3>
              <p className="text-slate-400 text-sm font-poppins font-normal">
                Small Projects, Quick Turnaround
              </p>
            </div>
          </div>
          {/* Pricing text */}
          <div className="flex w-full justify-start items-center">
            <h1 className="text-white font-poppins text-3xl font-bold">
              $40
              <span className="text-white font-poppins text-sm font-normal ">
                /HOUR
              </span>
            </h1>
          </div>
          {/* cta button */}
          <a
            href="#call"
            className="flex py-3 px-6 justify-center items-center self-stretch rounded-xl border border-border bg-container-gray2 text-white text-sm font-bold font-poppins"
          >
            Book a Call
          </a>

          {/* offer list container */}
          <div className="flex flex-col items-start  gap-3 self-stretch w-full">
            <h4 className="text-zinc-400 text-sm font-normal font-poppins">
              Why should you take this
            </h4>
            {/* offer 1 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Flexible pricing for short-term projects.
              </p>
            </div>
            {/* offer 2 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Pay only for the hours you need.
              </p>
            </div>
            {/* offer 3 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                No long-term commitments
              </p>
            </div>
            {/* offer 4 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Ideal for one-off tasks or small-scale projects.
              </p>
            </div>
          </div>
        </div>

        {/* 3rd card */}
        <div className="flex p-6 md:p-12 lg:p-16 flex-col items-center gap-4 self-stretch rounded-3xl bg-linear-[180deg] from-container-gray2 from-0% to-container-gray1 to-100% relative">
          <div className="flex justify-start w-full items-center">
            <img src="/src/assets/LightIcon.svg" alt="Light" />
          </div>
          <img
            src="/src/assets/Ellipse.svg"
            alt="vector"
            className="flex absolute right-0.5 -z-10"
          />
          {/* Card body text title*/}
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex flex-col items-start gap-1 self-stretch">
              <h3 className="text-zinc-200 text-2xl font-black">
                Pay as you go
              </h3>
              <p className="text-slate-400 text-sm font-poppins font-normal">
                Small Projects, Quick Turnaround
              </p>
            </div>
          </div>
          {/* Pricing text */}
          <div className="flex w-full justify-start items-center">
            <h1 className="text-white font-poppins text-3xl font-bold">
              $40
              <span className="text-white font-poppins text-sm font-normal ">
                /HOUR
              </span>
            </h1>
          </div>
          {/* cta button */}
          <a
            href="#call"
            className="flex py-3 px-6 justify-center items-center self-stretch rounded-xl border border-border bg-container-gray2 text-white text-sm font-bold font-poppins"
          >
            Book a Call
          </a>

          {/* offer list container */}
          <div className="flex flex-col items-start  gap-3 self-stretch w-full">
            <h4 className="text-zinc-400 text-sm font-normal font-poppins">
              Why should you take this
            </h4>
            {/* offer 1 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Flexible pricing for short-term projects.
              </p>
            </div>
            {/* offer 2 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Pay only for the hours you need.
              </p>
            </div>
            {/* offer 3 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                No long-term commitments
              </p>
            </div>
            {/* offer 4 */}
            <div className="flex items-center gap-2.5 self-stretch justify-start ">
              <MdDone className="bg-emerald-900 rounded-full text-white p-1" />
              <p className="text-sm font-poppins font-semibold text-white">
                Ideal for one-off tasks or small-scale projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
