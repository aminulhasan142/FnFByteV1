import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// Ensure these paths match your project structure
import CardImage2 from "../assets/cardImg (1).png";
import CardImage3 from "../assets/cardImg (2).png";
import CardImage1 from "../assets/cardImg.png";
import Button from "../components/Button";
import TagText from "../components/TagText";

// 1. DATA CONFIGURATION
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

// 2. FILTER CONFIGURATION
// We map the "label" (UI text) to the "value" (Tag in CardListItems)
const serviceFilters = [
  { label: "MVP(12)", value: "MVP" },
  { label: "UI/UX Design(25)", value: "UI/UX Design" },
  { label: "Mobile App Development(2)", value: "Mobile App" }, // Mapped to match data
  { label: "Web Development(13)", value: "Web App" }, // Mapped to match data
];

const industryFilters = [
  { label: "SaaS(7)", value: "SaaS" },
  { label: "AI/ML(5)", value: "AI/ML" },
  { label: "Healthcare(2)", value: "Healthcare" },
  { label: "Edtech(3)", value: "Edtech" },
  { label: "Others(4)", value: "Others" },
];

export default function Work() {
  const [showMore1, setShowMore1] = useState(true);
  const [showMore2, setShowMore2] = useState(true);

  // State to hold selected tags
  const [activeFilters, setActiveFilters] = useState([]);

  // 3. HANDLER FUNCTIONS
  const handleFilterClick = (tagValue) => {
    // If "All" is clicked, clear filters
    if (tagValue === "All") {
      setActiveFilters([]);
      return;
    }

    // Toggle logic: If tag exists, remove it; otherwise, add it
    if (activeFilters.includes(tagValue)) {
      setActiveFilters(activeFilters.filter((t) => t !== tagValue));
    } else {
      setActiveFilters([...activeFilters, tagValue]);
    }
  };

  // 4. FILTER LOGIC
  const filteredItems = CardListItems.filter((item) => {
    // If no filters are active, show all items
    if (activeFilters.length === 0) return true;

    // Show item ONLY if it contains ALL selected tags (Intersection)
    // If you want "OR" logic (match ANY tag), change .every() to .some()
    return activeFilters.every((filter) => item.tags.includes(filter));
  });

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

        <div className="flex flex-col lg:flex-row w-full items-start gap-1 self-start py-16 lg:py-24">
          {/* --- SIDEBAR --- */}
          <div className="hidden lg:flex max-w-[30%] sticky top-[72px] flex-col p-8 items-start self-start gap-8 rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
            {/* SERVICE SECTION */}
            <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
              <button
                onClick={() => setShowMore1(!showMore1)}
                className="flex justify-between items-center self-stretch cursor-pointer"
              >
                <h1 className="text-xl not-italic font-bold uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent text-left">
                  services
                </h1>
                <span className="flex p-1.5 justify-center items-center gap-0.5 rounded-2xl border border-border text-2xl text-zinc-400 backdrop-blur-3xl bg-white/4">
                  <IoIosArrowDown
                    className={`${showMore1 ? "rotate-180" : "rotate-0"}`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${showMore1 ? "max-h-max" : "h-0"}`}
              >
                <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
                  {/* All Button */}
                  <button
                    onClick={() => handleFilterClick("All")}
                    className={`flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl text-sm font-poppins font-semibold cursor-pointer transition-colors ${
                      activeFilters.length === 0
                        ? "bg-[#7a1efa33] text-indigo-400"
                        : "text-white hover:bg-[#7a1efa33]"
                    }`}
                  >
                    All Services
                  </button>

                  {/* Dynamic Service Buttons */}
                  {serviceFilters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => handleFilterClick(filter.value)}
                      className={`flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl text-sm font-poppins font-semibold cursor-pointer transition-colors ${
                        activeFilters.includes(filter.value)
                          ? "bg-[#7a1efa33] text-indigo-400"
                          : "text-white hover:bg-[#7a1efa33]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* INDUSTRIES SECTION */}
            <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
              <button
                onClick={() => setShowMore2(!showMore2)}
                className="flex justify-between items-center self-stretch cursor-pointer"
              >
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

              <div
                className={`flex items-start content-start gap-2 self-stretch flex-wrap overflow-hidden transition-transform duration-300 ease-in-out ${showMore2 ? "max-h-max" : "h-0"}`}
              >
                <button
                  onClick={() => handleFilterClick("All")}
                  className={`flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl text-sm font-poppins font-semibold cursor-pointer transition-colors ${
                    activeFilters.length === 0
                      ? "bg-[#7a1efa33] text-indigo-400"
                      : "text-white hover:bg-[#7a1efa33]"
                  }`}
                >
                  All Industries
                </button>

                {/* Dynamic Industry Buttons */}
                {industryFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => handleFilterClick(filter.value)}
                    className={`flex px-5 py-3 justify-center items-center gap-0.5 border border-border rounded-2xl text-sm font-poppins font-semibold cursor-pointer transition-colors ${
                      activeFilters.includes(filter.value)
                        ? "bg-[#7a1efa33] text-indigo-400"
                        : "text-white hover:bg-[#7a1efa33]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center items-start gap-4 self-stretch">
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

          {/* --- CARD GRID --- */}
          <div className="w-[100%] lg:max-w-[70%] grid grid-cols-1 lg:grid-cols-2 items-start gap-2 self-stretch">
            {/* We map over filteredItems instead of CardListItems */}
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  className="flex p-3 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 hover:to-container-gray2 transition-colors duration-500"
                >
                  <img src={item.img} alt="Card Image" className="w-full" />
                  <div className="flex flex-col p-3 justify-center items-start gap-2 self-stretch">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, index) => (
                        <TagText key={index} text={tag} />
                      ))}
                    </div>
                    <h1 className="text-white font-urbanist text-xl font-black capitalize">
                      {item.title}
                    </h1>
                  </div>
                </a>
              ))
            ) : (
              // Fallback if no items match
              <div className="col-span-1 lg:col-span-2 text-center py-10 text-white/50">
                <p>No projects match the selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
