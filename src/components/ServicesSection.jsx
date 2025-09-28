import { MdConstruction } from "react-icons/md";
import PopularTag from "../assets/PopularTag";
import Button from "./Button";
import HeadingGradientText from "./HeadingGradientText";
import TagText from "./TagText";
import TransparentButton from "./TransparentButton";
export default function ServicesSection() {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1440px] w-full items-start gap-1 self-stretch">
      {/* first box  */}
      <div className="w-full lg:w-[60%] flex flex-col items-start self-stretch rounded-3xl bg-linear-[180deg] from-[#0f172a0a] from-0% via-[#ffffff0a] via-50% to-[#0f172a0a] to-100%">
        <div className="flex flex-col pt-6 md:pt-12 lg:pt-[8.5rem] px-6 md:px-12 lg:px-16 pb-6 md:pb-6 lg:pb-16 items-start gap-3 self-stretch">
          {/* text container */}
          <div className="flex flex-col items-start gap-3 self-stretch">
            <TagText text={"Services"}>
              <MdConstruction className="text-zinc-400" />{" "}
            </TagText>
            {/* title text container */}
            <div className="flex flex-col items-start gap-8 self-stretch">
              {/* title text */}
              <div className="flex flex-col justify-center items-start gap-2.5 self-stretch">
                <HeadingGradientText>
                  Design. Build. Innovate.
                </HeadingGradientText>
                <p className="font-poppins text-sm not-italic font-medium text-slate-400">
                  We design, develop, and scale digital products that empower
                  startups and enterprises. From MVPs to AI-driven platforms,
                  FnFByte delivers solutions that are both beautiful and
                  impactful.
                </p>
              </div>
              {/* cta buttons */}
              <div className="flex flex-col md:flex-row w-full items-center gap-2">
                <TransparentButton
                  children={"Book a Call"}
                  className="w-full md:w-fit"
                />
                <Button
                  children={"Let’s Talk Now"}
                  url={"#letstalk"}
                  className="w-full md:w-fit"
                  bgColor="bg-surface-brand"
                />
              </div>
            </div>
          </div>
          {/* vector cross */}
          <img
            src="/src/assets/Cross.png"
            alt="Vector"
            className="hidden lg:flex"
          />
        </div>
      </div>
      {/* 2nd box container */}
      <div className="flex flex-col justify-center items-start gap-1 w-full lg:w-[40%]">
        {/* gig card 1 */}
        <div className="flex flex-col pt-6 md:pt-12 lg:pt-[8.5rem] px-4 md:px-12 lg:px-16 pb-6 md:pb-6 lg:pb-16 items-start gap-5 self-stretch rounded-3xl bg-linear-[180deg] from-container-gray1 from-0% to-container-gray2 to-100%">
          <img src="/src/assets/profile.svg" alt="Profile" />
          {/* gig description */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* title heading */}
            <div className="flex flex-col items-start gap-3 self-stretch">
              <div className="flex justify-between items-center gap-1 self-stretch">
                <h1 className="text-4xl font-black uppercase bg-linear-[180deg] from-[#ffffff1a] from-0% to-white to-100% bg-clip-text text-transparent">
                  UI/UX DESIGN
                </h1>
                {/* button */}
                <div className={`flex items-center justify-center`}>
                  <a
                    href="#link"
                    className={`moving_arrow_button p-3 rounded-full transition ease-out duration-500  text-white font-First font-bold gap-1 text-sm self-center justify-center items-center flex  bg-slate-800`}
                  >
                    <div className="flex flex-col h-5 w-6 relative overflow-hidden">
                      <span className="material-symbols-outlined relative  transition ease-out duration-200">
                        arrow_outward
                      </span>
                      <span className="material-symbols-outlined relative -left-6  transition ease-out duration-200">
                        arrow_outward
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              {/* sub title text */}
              <p className="font-poppins text-slate-400 text-sm font-medium">
                Crafting intuitive, user-first experiences that delight and
                engage.
              </p>
            </div>
            {/* gig title heading */}
            <div className="flex flex-col items-start gap-5 self-stretch">
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  UX Research
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Wireframe & Prototyping
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Visual UI Design
                </p>
                <PopularTag />
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Interaction Design
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Design System
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  UX Audit
                </p>
                <PopularTag />
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Redesign Web/App
                </p>
                <PopularTag />
              </div>
              <div className="w-full py-3 border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  AI Product Design
                </p>
                <PopularTag />
              </div>
            </div>
          </div>
        </div>
        {/* gig card 2 */}
        <div className="flex flex-col pt-6 md:pt-12 lg:pt-16 px-4 md:px-12 lg:px-16 pb-6 md:pb-6 lg:pb-16 items-start gap-5 self-stretch rounded-3xl bg-linear-[180deg] from-container-gray2 from-0% to-container-gray2 to-100%">
          <img src="/src/assets/CodeIcon.svg" alt="Profile" />
          {/* gig description */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* title heading */}
            <div className="flex flex-col items-start gap-3 self-stretch">
              <div className="flex justify-between items-center gap-1 self-stretch">
                <h1 className="text-4xl font-black uppercase bg-linear-[180deg] from-[#ffffff1a] from-0% to-white to-100% bg-clip-text text-transparent">
                  DEVELOPMENT
                </h1>
                {/* button */}
                <div className={`flex items-center justify-center`}>
                  <a
                    href="#link"
                    className={`moving_arrow_button p-3 rounded-full transition ease-out duration-500  text-white font-First font-bold gap-1 text-sm self-center justify-center items-center flex  bg-slate-800`}
                  >
                    <div className="flex flex-col h-5 w-6 relative overflow-hidden">
                      <span className="material-symbols-outlined relative  transition ease-out duration-200">
                        arrow_outward
                      </span>
                      <span className="material-symbols-outlined relative -left-6  transition ease-out duration-200">
                        arrow_outward
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              {/* sub title text */}
              <p className="font-poppins text-slate-400 text-sm font-medium">
                Building scalable, secure, and high-performance digital
                products.
              </p>
            </div>
            {/* gig title heading */}
            <div className="flex flex-col items-start gap-5 self-stretch">
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Mobile App Development
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Web Development
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Shopify Development
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Wordpress Development
                </p>
                <PopularTag />
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  MVPs & SaaS Platforms
                </p>
                <PopularTag />
              </div>
              <div className="w-full py-3  border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Dashboards & Landing Pages
                </p>
                <PopularTag />
              </div>
            </div>
          </div>
        </div>
        {/* gig card 3 */}
        <div className="flex flex-col pt-6 md:pt-12 lg:pt-16 px-4 md:px-12 lg:px-16 pb-6 md:pb-6 lg:pb-16 items-start gap-5 self-stretch rounded-3xl bg-linear-[180deg] from-container-gray2 from-0% to-container-gray1 to-100%">
          <img src="/src/assets/AI&MLicon.svg" alt="Profile" />
          {/* gig description */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* title heading */}
            <div className="flex flex-col items-start gap-3 self-stretch">
              <div className="flex justify-between items-center gap-1 self-stretch">
                <h1 className="text-4xl font-black uppercase bg-linear-[180deg] from-[#ffffff1a] from-0% to-white to-100% bg-clip-text text-transparent">
                  AI & ML Solutions
                </h1>
                {/* button */}
                <div className={`flex items-center justify-center`}>
                  <a
                    href="#link"
                    className={`moving_arrow_button p-3 rounded-full transition ease-out duration-500  text-white font-First font-bold gap-1 text-sm self-center justify-center items-center flex  bg-slate-800`}
                  >
                    <div className="flex flex-col h-5 w-6 relative overflow-hidden">
                      <span className="material-symbols-outlined relative  transition ease-out duration-200">
                        arrow_outward
                      </span>
                      <span className="material-symbols-outlined relative -left-6  transition ease-out duration-200">
                        arrow_outward
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              {/* sub title text */}
              <p className="font-poppins text-slate-400 text-sm font-medium">
                Unlocking business growth with intelligent automation and
                analytics.
              </p>
            </div>
            {/* gig title heading */}
            <div className="flex flex-col items-start gap-5 self-stretch">
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Predictive Analytics
                </p>
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  AI-Powered Chatbots
                </p>
                <PopularTag />
              </div>
              <div className="w-full py-3 border-b border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  Data-Driven Dashboards
                </p>
              </div>
              <div className="w-full py-3  border-[#ffffff0d] flex justify-between">
                <p className="text-xl lg:text-2xl font-semibold text-white ">
                  ML Tools & Automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
