import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaBehance, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MenuContent({ isMenuOpen }) {
  return (
    <div
      className={`w-full h-full flex justify-center items-center  backdrop-blur-md bg-navbar fixed
      } top-2 z-30 transition-transform duration-300 ease-in-out transform 
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex max-w-[1440px] w-full flex-col-reverse md:flex-row-reverse lg:flex-row px-8 lg:px-16 items-start justify-between">
        {/* CTAs sections */}
        <div className="flex py-1 lg:py-24 flex-col justify-start lg:justify-end items-start gap-2 lg:gap-16 self-stretch">
          {/* let's talk section */}
          <div className="flex flex-col items-start  gap-4">
            <h1 className="flex text-right font-poppins text-3xl lg:text-5xl bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
              Let’s Talk
            </h1>
            <div className="flex flex-col items-start gap-1 lg:gap-4">
              <a
                href="https://wa.me/+8801779911491"
                target="_blank"
                className="flex items-center gap-2"
              >
                <IoLogoWhatsapp className="text-white text-3xl" />
                <h4 className="text-white font-urbanist text-xl font-semibold">
                  +880 1779911 491
                </h4>
              </a>
              <a
                href="mailto:hello@fnfbyte.com?subject=Inquiry"
                target="_blank"
                className="flex items-center gap-2"
              >
                <IoMdMail className="text-white text-3xl" />
                <h4 className="text-white font-urbanist text-xl font-semibold">
                  hello@fnfbyte.com
                </h4>
              </a>
            </div>
          </div>

          {/* follow uss section */}
          <div className="flex flex-col items-start gap-2">
            <h1 className="flex text-left lg:text-right font-poppins text-3xl lg:text-5xl bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
              Follow Us
            </h1>
            {/* logos container */}
            <div className="flex max-w-[300px] justify-start items-center gap-2.5 flex-wrap">
              {/* twitter */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaXTwitter className="text-white text-2xl" />
              </a>
              {/* facebook */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaFacebookF className="text-white text-2xl" />
              </a>
              {/* linkedIn */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaLinkedin className="text-white text-2xl" />
              </a>
              {/* behanced */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaBehance tter className="text-white text-2xl" />
              </a>
              {/* instagaram */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaInstagram tter className="text-white text-2xl" />
              </a>
              {/* dribbble */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
                className="p-4 rounded-full border border-cyan-950 bg-slate-800 hover:bg-slate-600 transition-colors"
              >
                <FaDribbble tter className="text-white text-2xl" />
              </a>
              {/* Youtube */}
              <a
                href="https://www.linkedin.com/company/fnfbyte/"
                target="_blank"
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

        <div className="flex flex-col pt-2 lg:pt-36 pb-4 lg:pb-24 justify-end items-start lg:items-end self-stretch">
          {/* shortcut links container */}
          <div className="flex flex-col items-start lg:items-end gap-1 lg:gap-2">
            <a
              href="#"
              className="text-right font-poppins leading-normal text-3xl lg:text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Services
            </a>
            <a
              href="#"
              className="text-right font-poppins  leading-normal text-3xl lg:text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Pricing
            </a>
            <Link
              to="/work"
              className="text-right font-poppins  leading-normal text-3xl lg:text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Works
            </Link>
            <a
              href="#"
              className="text-right font-poppins  leading-normal text-3xl lg:text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              About
            </a>
            <a
              href="#"
              className="text-right font-poppins  leading-normal text-3xl lg:text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-right font-poppins  leading-normal text-3xl lg:text-5xl font-semibold bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent"
            >
              Career
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
