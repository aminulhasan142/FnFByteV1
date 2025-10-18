import { MdNewspaper } from "react-icons/md";
import Button from "./Button";
import HeadingGradientText from "./HeadingGradientText";
import TagText from "./TagText";
import ArticleImg1 from "/src/assets/ArticleImage1.svg";
import ArticleImg2 from "/src/assets/ArticleImage2.svg";

export default function ArticleSection() {
  return (
    <>
      {/* Article summary card */}
      <div className="flex flex-col max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 gap-3">
        <TagText text="Articles">
          <MdNewspaper className="text-zinc-400" />
        </TagText>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <HeadingGradientText>
            Insights & Ideas from FNFByte
          </HeadingGradientText>
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-slate-400 text-sm font-medium font-poppins">
              Stay ahead in the digital world with our expert insights, tips,
              and trends in UI/UX design, branding, web development, and digital
              marketing. Learn, innovate, and grow with FNFByte.
            </p>
            <Button
              children={"Book a Call"}
              bgColor="bg-surface-brand hover:bg-surface-brand/80"
              url={"https://cal.com/fnfbyte/30min?overlayCalendar=true"}
            />
          </div>
        </div>
      </div>

      {/* Article cards */}
      <div
        className="flex flex-col lg:flex-row items-center
       gap-1 self-stretch max-w-[1440px]"
      >
        {/* 1st contianer article */}
        <div className="flex p-6 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
          <img
            src={ArticleImg1}
            alt="Article Cover"
            className="rounded-xl w-full"
          />
          <div className="flex p-6 flex-col justify-center items-start gap-2 self-stretch">
            {/* tags */}
            <div className="flex items-start content-center gap-1 self-stretch flex-wrap">
              <span className="flex px-2.5 py-1 items-center justify-center rounded-2xl border border-border text-zinc-400 text-sm font-semibold capitalize">
                Branding
              </span>
              <span className="flex px-2.5 py-1 items-center justify-center rounded-2xl border border-border text-zinc-400 text-sm font-semibold capitalize">
                uI/UX Design
              </span>
            </div>
            {/* title */}
            <h1 className=" text-white font-poppins text-xl font-semibold capitalize">
              Why Should Give Your Design Agency The Freedom To Innovate?
            </h1>
            {/* date */}
            <span className="text-zinc-400 font-poppins text-sm font-medium capitalize">
              25 Feb 2025
            </span>
          </div>
        </div>
        {/* 2nd contianer article */}
        <div className="flex p-6 flex-col justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1">
          <img
            src={ArticleImg2}
            alt="Article Cover"
            className="rounded-xl w-full"
          />
          <div className="flex p-6 flex-col justify-center items-start gap-2 self-stretch">
            {/* tags */}
            <div className="flex items-start content-center gap-1 self-stretch flex-wrap">
              <span className="flex px-2.5 py-1 items-center justify-center rounded-2xl border border-border text-zinc-400 text-sm font-semibold capitalize">
                Web App
              </span>
              <span className="flex px-2.5 py-1 items-center justify-center rounded-2xl border border-border text-zinc-400 text-sm font-semibold capitalize">
                Business
              </span>
            </div>
            {/* title */}
            <h1 className=" text-white font-poppins text-xl font-semibold capitalize">
              Why Should Give Your Design Agency The Freedom To Innovate?
            </h1>
            {/* date */}
            <span className="text-zinc-400 font-poppins text-sm font-medium capitalize">
              25 Feb 2025
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
