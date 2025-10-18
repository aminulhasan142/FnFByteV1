import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import CardImage2 from "../assets/cardImg (1).svg";
import CardImage3 from "../assets/cardImg (2).svg";
import CardImage1 from "../assets/cardImg.svg";
import Button from "../components/Button";
import FilterTagText from "../components/FilterTagText";
import TagText from "../components/TagText";

const CardListItems = [
  {
    id: 1,
    img: CardImage1,
    tags: ["UI/UX Design", "Web App", "AI/ML"],
    title: "Message Reply - AI agents",
    link: "#somewhare",
  },
  {
    id: 2,
    img: CardImage2,
    tags: ["Web App", "UI/UX Design", "AI/ML"],
    title: "StoryMaster - AI Book writer",
    link: "#somewhare",
  },
  {
    id: 3,
    img: CardImage3,
    tags: ["Mobile App", "UI/UX Design"],
    title: "Salescare - Supply chain Management System",
    link: "#somewhare",
  },
  {
    id: 4,
    img: CardImage1,
    tags: ["Mobile App", "UI/UX Design"],
    title: "Salescare - Supply chain Management System",
    link: "#somewhare",
  },

  {
    id: 5,
    img: CardImage2,
    tags: ["UI/UX Design", "Web App", "AI/ML"],
    title: "Message Reply - AI agents",
    link: "#somewhare",
  },
  {
    id: 6,
    img: CardImage3,
    tags: ["Web App", "UI/UX Design"],
    title: "StoryMaster - AI Book writer",
    link: "#somewhare",
  },
];

export default function Work() {
  const [showMore1, setShowMore1] = useState(true);
  const [showMore2, setShowMore2] = useState(true);

  return (
    <div className="pt-16 flex w-full justify-center px-2">
      <div className="flex max-w-[1440px] w-full px-4 lg:px-0 pt-12 lg:pt-20 flex-col justify-center items-center gap-3">
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

        <div className="flex flex-col lg:flex-row w-full items-start gap-1 self-start py-16 lg:py-24">
          {/* sticky container for filtering  */}

          {/* content box for small screen */}
          <div className="flex lg:hidden max-w-[280px] xsm:max-w-[370px] sm:max-w-[480px] md:max-w-[720px] justify-center items-center">
            <div className="flex overflow-x-auto whitespace-nowrap space-x-4 p-2">
              <button className="flex px-5 py-3 justify-center items-center border border-border rounded-2xl bg-[#7a1efa33] text-sm font-poppins font-semibold text-indigo-400 gap-1">
                <LuSettings2 />
                Filter
              </button>
              <FilterTagText>All Services</FilterTagText>
              <FilterTagText>MVP(12)</FilterTagText>
              <FilterTagText>UI/UX Design(25)</FilterTagText>
              <FilterTagText>Mobile App Development(2)</FilterTagText>
              <FilterTagText>Web Development(13)</FilterTagText>
              <FilterTagText>SaaS(7)</FilterTagText>
              <FilterTagText>AI/ML(5)</FilterTagText>
              <FilterTagText>Healthcare(2)</FilterTagText>
              <FilterTagText>Edtech(3)</FilterTagText>
              <FilterTagText>Others(4)</FilterTagText>
            </div>
          </div>

          {/* content box for large screen */}
          <div className="hidden lg:flex max-w-[30%] sticky top-[72px]  flex-col p-8 items-start self-start gap-8 rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
            {/* service section */}
            <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
              {/* title container */}
              <button
                onClick={() => setShowMore1(!showMore1)}
                className="flex justify-between items-center self-stretch cursor-pointer"
              >
                {/* title */}
                <h1 className="text-xl not-italic font-bold uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-left">
                  services
                </h1>

                <span className="flex p-1.5 justify-center items-center gap-0.5 rounded-2xl border border-border text-2xl text-zinc-400 backdrop-blur-3xl bg-white/4">
                  <IoIosArrowDown
                    className={`${showMore1 ? "rotate-180" : "rotate-0"}`}
                  />
                </span>
              </button>
              {/* tag container */}
              <div
                className={` overflow-hidden transition-all duration-300 ease-in-out ${
                  showMore1 ? "max-h-max" : "h-0"
                }`}
              >
                <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
                  <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl bg-[#7a1efa33] text-sm font-poppins font-semibold text-indigo-400 cursor-pointer transition-colors">
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
            </div>
            {/* industries section */}
            <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
              {/* title container */}
              <button
                onClick={() => setShowMore2(!showMore2)}
                className="flex justify-between items-center self-stretch cursor-pointer"
              >
                {/* title */}
                <h1 className="text-xl not-italic font-bold uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-left">
                  industries
                </h1>

                <span
                  className={`flex p-1.5 justify-center items-center gap-0.5 rounded-2xl border border-border text-2xl text-zinc-400 backdrop-blur-3xl bg-white/4 transition-transform duration-300 ease-in-out`}
                >
                  <IoIosArrowDown
                    className={`${showMore2 ? "rotate-180" : "rotate-0"}`}
                  />
                </span>
              </button>
              {/* tag container */}
              <div
                className={`flex items-start content-start gap-2  self-stretch flex-wrap overflow-hidden transition-transform duration-300 ease-in-out ${
                  showMore2 ? "max-h-max" : "h-0"
                }`}
              >
                <button className="flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl bg-[#7a1efa33]  text-sm font-poppins font-semibold text-indigo-400 cursor-pointer transition-colors">
                  All Industries
                </button>
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
          <div className="w-[100%] lg:max-w-[70%] grid grid-cols-1 lg:grid-cols-2 items-start gap-2 self-stretch">
            {CardListItems.map((item) => (
              <a
                href={item.link}
                key={item.id}
                className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 hover:to-container-gray2 transition-colors duration-500"
              >
                <img src={item.img} alt="Card Image" className="w-full" />
                <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch ">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <TagText text={tag} />
                    ))}
                  </div>
                  <h1 className="text-white font-urbanist text-xl font-black capitalize">
                    {item.title}
                  </h1>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
