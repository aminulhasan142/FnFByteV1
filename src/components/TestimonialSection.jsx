import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HeadingGradientText from "./HeadingGradientText";
import Avatar2 from "/src/assets/placeholder (1).png";
import Avatar1 from "/src/assets/placeholder.png";
import TesAVA1 from "/src/assets/tesAva1.svg";
import TesAVA2 from "/src/assets/tesAva2.svg";
import TesAVA3 from "/src/assets/tesAva3.svg";

const TestimonialList = [
  {
    id: 1,
    img: TesAVA1,
    name: "Sarah M.",
    title: "Product Manager, SaaS Startup",
    description:
      "FnFByte redesigned our SaaS dashboard, and the results were incredible. User retention improved by 40% within just two months. Their team truly understands how to blend design with business goals.",
    date: "24 Feb 2024",
    platform: <FaXTwitter className="text-white" />,
  },
  {
    id: 2,
    img: TesAVA2,
    name: "Ahmed K.",
    title: "CEO, Service Company",
    description:
      "The team was proactive, communicative, and highly skilled. Our new website loads faster, looks modern, and has already boosted conversions.",
    date: "16 Oct 2024",
    platform: <FaWhatsapp className="text-white" />,
  },
  {
    id: 3,
    img: TesAVA3,
    name: "David M.",
    title: "Product Manager, Tech Startup",
    description:
      "The FNFByte team redesigned our app with an intuitive user experience that impressed both our customers and stakeholders. Their attention to detail and creativity are unmatched.",
    date: "05 Aug 2024",
    platform: <FaXTwitter className="text-white" />,
  },
];

export default function TestimonialSection() {
  return (
    <>
      {/* 1st container or main wrapper */}
      <div className="flex flex-col max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 gap-5">
        {/* <!-- Avatar groups icons --> */}
        <div className="flex justify-end">
          <img src={Avatar1} alt="Avatar" />
          <img src={Avatar2} alt="Avatar" className="-ml-[10px]" />
          <span className="flex h-[48px] px-[12px] font-bold justify-center items-center gap-[0.976px] rounded-full border border-border bg-surface-brand text-[1rem] text-center text-white -ml-[10px]">
            88+
          </span>

          <h4 className="text-sm text-zinc-400 font-semibold font-poppins flex justify-center self-center ml-4">
            Happy Clients
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-5 md:gap-6 lg:gap-[7.5rem]">
          <HeadingGradientText>What Our Clients Say</HeadingGradientText>
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-slate-400 text-sm font-medium font-poppins">
              Real stories from startups and enterprises we’ve partnered with —
              building digital products that deliver results.
            </p>
            {/* container for pagination and arrow button */}
            <div className="flex justify-between items-center self-stretch">
              {/* pagination button */}
              <div></div>
              {/* arrow button */}
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd or testimonial card container */}
      <div className="flex max-w-[1440px] gap-1 flex-col md:flex-row">
        {/* reviews */}
        {TestimonialList.map((e) => (
          <div
            key={e.id}
            className="flex p-6 md:p-12 lg:p-16 flex-col items-start gap-3 rounded-3xl bg-linear-[180deg] from-0% from-container-gray2 to-100% to-container-gray1"
          >
            {/* card avatar, name, description */}
            <div className="flex flex-col items-start gap-3 self-stretch">
              {/* avatar */}
              <img src={e.img} alt="Avatar" />
              {/* name */}
              <div className="flex flex-col items-start self-stretch">
                <h1 className="text-white text-lg font-bold font-poppins">
                  {e.name}
                </h1>
                <p className="text-zinc-400 text-sm font-normal line-clamp-1 text-ellipsis">
                  {e.title}
                </p>
              </div>
              {/* description */}
              <p className="text-zinc-200 text-sm font-semibold font-poppins">
                {e.description}
              </p>
              {/* time & platform */}
              <div className="flex w-full justify-between items-center">
                <span className="text-slate-400 font-urbanist text-lg font-medium">
                  {e.date}
                </span>
                <span className="flex p-2.5 max-w-[40px] items-center rounded-lg border border-border">
                  {e.platform}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
