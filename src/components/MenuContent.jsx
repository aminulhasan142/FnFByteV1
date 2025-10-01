import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaBehance, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

export default function MenuContent() {
  return (
    <div className="w-full h-full  bg-cyan-950 backdrop-blur-lg">
      <div className="flex max-w-[1440px] flex-col-reverse md:flex-row-reverse lg:flex-row w-full px-8 lg:px-16 items-start justify-between">
        {/* CTAs sections */}
        <div className="flex py-8 lg:py-24 flex-col justify-start lg:justify-end items-start gap-16 self-stretch">
          {/* let's talk section */}
          <div className="flex flex-col items-start  gap-4">
            <h1 className="flex text-right font-poppins text-5xl bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
              Let’s Talk
            </h1>
            <div className="flex flex-col items-start gap-4">
              <a href="#whatsapp" className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-white text-3xl" />
                <h4 className="text-white font-urbanist text-xl font-semibold">
                  +880 1779911 491
                </h4>
              </a>
              <a href="#email" className="flex items-center gap-2">
                <IoMdMail className="text-white text-3xl" />
                <h4 className="text-white font-urbanist text-xl font-semibold">
                  fnfbyte@gmail.com
                </h4>
              </a>
            </div>
          </div>

          {/* follow uss section */}
          <div className="flex flex-col items-start gap-2">
            <h1 className="flex text-left lg:text-right font-poppins text-5xl bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
              Follow Us
            </h1>
            {/* logos container */}
            <div className="flex max-w-[300px] justify-start items-center gap-2.5 flex-wrap">
              {/* twitter */}
              <a
                href="#twitter"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaXTwitter className="text-white text-2xl" />
              </a>
              {/* facebook */}
              <a
                href="#facebook"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaFacebookF className="text-white text-2xl" />
              </a>
              {/* linkedIn */}
              <a
                href="#linkedIn"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaLinkedin className="text-white text-2xl" />
              </a>
              {/* behanced */}
              <a
                href="#behanced"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaBehance tter className="text-white text-2xl" />
              </a>
              {/* instagaram */}
              <a
                href="#instagram"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaInstagram tter className="text-white text-2xl" />
              </a>
              {/* dribbble */}
              <a
                href="#dribbble"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaDribbble tter className="text-white text-2xl" />
              </a>
              {/* Youtube */}
              <a
                href="#youtube"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaYoutube tter className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* slider container */}
        <img
          src="/src/assets/mainmenuslider.svg"
          alt="menu slider"
          className="h-1/2 hidden"
        />

        <div className="flex flex-col pt-24 lg:pt-36 pb-4 lg:pb-24 justify-end items-start lg:items-end self-stretch">
          {/* shortcut links container */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <a
              href="#service"
              className="text-right font-poppins leading-normal text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Services
            </a>
            <a
              href="#Pricing"
              className="text-right font-poppins leading-normal text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Pricing
            </a>
            <a
              href="#Works"
              className="text-right font-poppins leading-normal text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Works
            </a>
            <a
              href="#About"
              className="text-right font-poppins leading-normal text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              About
            </a>
            <a
              href="#Blogs"
              className="text-right font-poppins leading-normal text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Blogs
            </a>
            <a
              href="#Career"
              className="text-right font-poppins leading-normal text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Career
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
