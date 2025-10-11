import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaBehance, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import siteLogo from "/src/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full flex px-2 justify-center">
      <div className="flex flex-col max-w-[1440px] w-full p-6 md:p-12 lg:p-16 justify-center items-start self-center rounded-3xl gap-6 bg-linear-[180deg] from-container-gray2 to-container-gray1">
        {/* favicon and contacts container */}
        <div className="flex flex-col items-start gap-5 self-stretch">
          {/* logo container */}
          <div className="flex justify-between  items-center self-stretch">
            {/* logo */}
            <a href="#" className="flex items-center">
              <img src={siteLogo} alt="logo" />
              <div className="flex justify-center items-center px-4 py-3 rounded-2xl">
                <span className="text-white font-poppins text-lg font-bold leading-[1.8rem]">
                  FnF
                </span>
                <span className="text-indigo-500 font-poppins text-lg font-bold leading-[1.8rem]">
                  Byte
                </span>
              </div>
            </a>

            {/* download button */}
            <a
              href="#download"
              className="hidden lg:flex py-3 pl-3 pr-4 gap-1 rounded-2xl bg-surface-brand justify-center items-center"
            >
              <MdOutlineFileDownload className="text-white text-2xl" />
              <span className="font-poppins text-sm font-bold text-white">
                Company Deck
              </span>
            </a>
          </div>

          {/* body container */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-24 self-stretch">
            <div className="flex flex-col justify-center items-start gap-4">
              {/* text */}
              <p className="text-zinc-400 font-poppins font-normal text-sm">
                FnFByte is committed to delivering exceptional digital
                experiences that drive growth and success.
              </p>
              {/* logos container */}
              <div className="flex justify-start items-center gap-2.5 flex-wrap">
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

            {/* page link tab */}
            <div className="flex justify-start lg:justify-end items-start gap-2 self-stretch flex-wrap">
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Home
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Services
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Projects
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Work Process
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                About
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Blog
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Career
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Teams
              </a>
              <a
                href="#home"
                className="flex py-2 px-4  justify-center  items-center gap-1 rounded-xl bg-black backdrop-blur-xl text-sm font-poppins font-bold text-zinc-400 hover:bg-slate-950 hover:text-zinc-200 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* download button */}
            <a
              href="#download"
              className="flex lg:hidden py-3 pl-3 pr-4 gap-1 rounded-2xl bg-surface-brand hover:bg-surface-brand/80 transition-colors duration-500 justify-center items-center"
            >
              <MdOutlineFileDownload className="text-white text-2xl" />
              <span className="font-poppins text-sm font-bold text-white">
                Company Deck
              </span>
            </a>
          </div>

          {/* More info container */}
          <div className="flex flex-col items-start self-stretch">
            <div className="flex py-4 items-center justify-between gap-4 self-stretch border-t border-t-border border-b border-b-border cursor-pointer">
              <h2 className="text-white font-poppins text-xl font-bold">
                Show All Services
              </h2>
              <span className="flex p-2 items-center justify-center gap-2.5 rounded-full bg-[#1E293B]">
                <IoIosArrowDown className="text-white text-xl" />
              </span>
            </div>
            <div className="flex py-4 items-center justify-between gap-4 self-stretch border-b border-b-border cursor-pointer">
              <h2 className="text-white font-poppins text-xl font-bold">
                Show All Services
              </h2>
              <span className="flex p-2 items-center justify-center gap-2.5 rounded-full bg-[#1E293B]">
                <IoIosArrowDown className="text-white text-xl" />
              </span>
            </div>
            <div className="flex py-4 items-center justify-between gap-4 self-stretch border-b border-b-border cursor-pointer">
              <h2 className="text-white font-poppins text-xl font-bold">
                Show All Services
              </h2>
              <span className="flex p-2 items-center justify-center gap-2.5 rounded-full bg-[#1E293B]">
                <IoIosArrowDown className="text-white text-xl" />
              </span>
            </div>
          </div>

          {/* bottom footer */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center self-stretch gap-4 md:gap-0">
            <span className="text-zinc-400 font-poppins text-sm font-normal">
              © 2025 FnFByte - All Right Reserved
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#ManageCookies"
                className="text-zinc-400 font-poppins text-sm font-normal"
              >
                Manage Cookies
              </a>
              <a
                href="#terms"
                className="text-zinc-400 font-poppins text-sm font-normal"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacy"
                className="text-zinc-400 font-poppins text-sm font-normal"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
