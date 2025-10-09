import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CardImage2 from "../assets/cardImg (1).svg";
import CardImage3 from "../assets/cardImg (2).svg";
import CardImage1 from "../assets/cardImg.svg";
import Button from "../components/Button";
import TagText from "../components/TagText";
export default function Work() {
  return (
    <div className="pt-16 flex w-full justify-center px-2">
      <div className="flex max-w-[1440px] px-16 pt-20 flex-col justify-center items-center gap-3">
        {/* page pagination */}
        <div className="flex py-2.5 px-4 justify-center items-center gap-1 border border-border rounded-full">
          <Link
            to="/"
            className="flex justify-center items-center text-white/30 font-poppins text-sm font-semibold capitalize gap-1"
          >
            Home
            <IoIosArrowForward />
          </Link>
          <Link
            to="/work"
            className="flex justify-center items-center text-slate-400 font-poppins text-sm font-semibold capitalize gap-1"
          >
            Case Studies
          </Link>
        </div>

        {/* gradient text */}
        <h1 className="text-[2.5rem] md:text-[4rem] not-italic font-black leading-none md:leading-16 uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-center">
          Our Work, <br /> Your Success
        </h1>

        {/* Case Studies Main Container */}

        <div className="flex w-full items-start gap-1 self-start py-24">
          {/* sticky container for filtering  */}
          <div className="max-w-[30%] sticky top-[72px] flex flex-col p-8 items-start self-start gap-8 rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
            {/* service section */}
            <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
              {/* title container */}
              <div className="flex justify-between items-center self-stretch">
                {/* title */}
                <h1 className="text-xl not-italic font-bold uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-left">
                  services
                </h1>

                <span className="flex p-1.5 justify-center items-center gap-0.5 rounded-full border border-border text-2xl text-zinc-400 backdrop-blur-3xl bg-white/4">
                  <IoIosArrowDown />
                </span>
              </div>
              {/* tag container */}
              <div className="flex items-start content-start gap-2  self-stretch flex-wrap">
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  All Services
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  MVP(12)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  UI/UX Design(25)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  Mobile App Development(2)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  Web Development(13)
                </button>
              </div>
            </div>
            {/* industries section */}
            <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
              {/* title container */}
              <div className="flex justify-between items-center self-stretch">
                {/* title */}
                <h1 className="text-xl not-italic font-bold uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-left">
                  industries
                </h1>

                <span className="flex p-1.5 justify-center items-center gap-0.5 rounded-full border border-border text-2xl text-zinc-400 backdrop-blur-3xl bg-white/4">
                  <IoIosArrowDown />
                </span>
              </div>
              {/* tag container */}
              <div className="flex items-start content-start gap-2  self-stretch flex-wrap">
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  SaaS(7)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  AI/ML (5)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  Healthcare(2)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  Edtech(3)
                </button>
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
                  Others(4)
                </button>
              </div>
            </div>

            {/* have a project */}
            <div
              className="flex flex-col justify-center items-start gap-4 self-stretch
            "
            >
              {/* title */}
              <h1 className="text-xl not-italic font-bold uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-left">
                have a project ?
              </h1>

              <Button
                url={"#contact"}
                bgColor={"bg-surface-brand hover:bg-surface-brand/80"}
              >
                Let’s Talk Now
              </Button>
            </div>
          </div>

          {/* card container */}
          <div className="max-w-[70%] flex flex-col items-start gap-5 self-stretch">
            {/* 1st box */}
            <div className="flex gap-1">
              {/* card 1 */}
              <div className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
                <img src={CardImage1} alt="Card Image" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap">
                    <TagText text={"UI/UX Design"} />
                    <TagText text={"Web App"} />
                    <TagText text={"AI/ML"} />
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    Message Reply - AI agents
                  </h1>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
                <img src={CardImage2} alt="Card Image" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap">
                    <TagText text={"UI/UX Design"} />
                    <TagText text={"Web App"} />
                    <TagText text={"AI/ML"} />
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    Message Reply - AI agents
                  </h1>
                </div>
              </div>
            </div>
            {/* 2nd box */}
            <div className="flex gap-1">
              {/* card 3 */}
              <div className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
                <img src={CardImage3} alt="Card Image" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap">
                    <TagText text={"UI/UX Design"} />
                    <TagText text={"Web App"} />
                    <TagText text={"AI/ML"} />
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    Message Reply - AI agents
                  </h1>
                </div>
              </div>
              {/* card 4 */}
              <div className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
                <img src={CardImage1} alt="Card Image" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap">
                    <TagText text={"UI/UX Design"} />
                    <TagText text={"Web App"} />
                    <TagText text={"AI/ML"} />
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    Message Reply - AI agents
                  </h1>
                </div>
              </div>
            </div>
            {/* 3rd box */}
            <div className="flex gap-1">
              {/* card 5 */}
              <div className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
                <img src={CardImage2} alt="Card Image" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap">
                    <TagText text={"UI/UX Design"} />
                    <TagText text={"Web App"} />
                    <TagText text={"AI/ML"} />
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    Message Reply - AI agents
                  </h1>
                </div>
              </div>
              {/* card 6 */}
              <div className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
                <img src={CardImage3} alt="Card Image" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap">
                    <TagText text={"UI/UX Design"} />
                    <TagText text={"Web App"} />
                    <TagText text={"AI/ML"} />
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    Message Reply - AI agents
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
