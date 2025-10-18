import { FaWhatsapp } from "react-icons/fa";
import { MdDialpad, MdOutlineMailOutline } from "react-icons/md";
import Button from "./Button";
export default function ContactForm() {
  return (
    <div className="flex w-full px-2 justify-center items-center">
      <div className="flex flex-col lg:flex-row max-w-[1440px] w-full gap-1 self-stretch ">
        {/* 1st container */}
        <div className="flex w-full p-6 md:p-12 lg:p-16 flex-col items-start gap-4 self-stretch rounded-3xl  bg-linear-[180deg] from-0% from-[#00652E] to-100% to-[#0f172a00]">
          {/* tag icon */}
          <span className="flex pl-3 py-2.5 pr-4 justify-center items-center  gap-1 border border-border rounded-full">
            <MdDialpad className="text-white" />
            <p className="font-poppins text-sm font-semibold text-white">
              Communicate
            </p>
          </span>

          {/* text info container */}

          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* text content */}
            <div className="flex flex-col  justify-center items-start gap-2.5 self-stretch">
              <h1 className="text-white text-2xl font-black">
                Together, Let’s Create Something Really Incredible.
              </h1>
              <p className="text-white font-poppins">
                Together, Let’s Create Something Really Incredible.
              </p>
            </div>
            {/* cta links */}
            <div className="flex flex-col lg:flex-row items-end w-full gap-3 self-stretch">
              {/* what'sapp */}
              <a
                href="https://wa.me/+8801779911491"
                target="_blank"
                className="bg-[#18181B]  flex py-3 px-4  justify-center items-center gap-1 rounded-2xl backdrop-blur-xl w-full"
              >
                <FaWhatsapp className="text-white" />
                <span className="font-bold font-poppins text-sm text-white">
                  +880 1779911491
                </span>
              </a>
              {/* mail */}
              <a
                href="mailto:hello@fnfbyte.com?subject=Inquiry"
                target="_blank"
                className="bg-[#18181B]  flex py-3 px-4  justify-center items-center gap-1 rounded-2xl backdrop-blur-xl w-full"
              >
                <MdOutlineMailOutline className="text-white" />
                <span className="font-bold font-poppins text-sm text-white">
                  hello@fnfbyte.com
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* 2nd container */}
        <div className="flex w-full p-6 md:p-12 lg:p-16  flex-col items-start gap-4 self-stretch rounded-3xl  bg-linear-[180deg] from-0% from-[#653B00] to-100% to-[#0f172a00]">
          {/* tag icon */}
          <span className="flex pl-3 py-2.5 pr-4 justify-center items-center  gap-1 border border-border rounded-full">
            <MdOutlineMailOutline className="text-white" />
            <p className="font-poppins text-sm font-semibold text-white">
              Newsletter
            </p>
          </span>

          {/* text info container */}

          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* text content */}
            <div className="flex flex-col  justify-center items-start gap-2.5 self-stretch">
              <h1 className="text-white text-2xl font-black">
                Subscribe to our newsletter to stay in touch with the latest.
              </h1>
              <p className="text-white font-poppins">
                Have more questions? Book a FREE intro call.
              </p>
            </div>

            {/* input box*/}
            <Button
              children={"Subscribe Us"}
              url={"https://cal.com/fnfbyte/30min?overlayCalendar=true"}
              className="w-full md:w-fit"
              bgColor="bg-surface-brand hover:bg-surface-brand/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
