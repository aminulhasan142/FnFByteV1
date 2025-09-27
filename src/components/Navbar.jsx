import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center items-center h-[4.5rem] py-3 fixed backdrop-blur-md bg-navbar z-50">
      <div className="flex max-w-[1440px] w-full justify-between items-center self-stretch px-2">
        {/* logo */}
        <a href="#" className="flex items-center">
          <img src="/src/assets/logo.svg" alt="logo" />
          <div className="flex justify-center items-center px-4 py-3 rounded-2xl">
            <span className="text-white font-poppins text-lg font-bold leading-[1.8rem]">
              FnF
            </span>
            <span className="text-indigo-500 font-poppins text-lg font-bold leading-[1.8rem]">
              Byte
            </span>
          </div>
        </a>

        {/* menu */}
        <div className="hidden md:flex py-2 px-3 items-center gap-0.5 border border-zinc-400/5 backdrop-blur-[20px] rounded-2xl justify-center">
          <a
            href="#"
            className="flex items-center p-1 gap-1 text-zinc-400 hover:text-zinc-50 hover:transition-colors"
          >
            <span className="font-poppins text-sm font-bold leading-5 ">
              SERVICES
            </span>
            <IoMdArrowDropdown />
          </a>
          <a
            href="#"
            className="flex items-center py-1 pl-2 pr-4 gap-1 text-zinc-400 hover:text-zinc-50 hover:transition-colors"
          >
            <span className="font-poppins text-sm font-bold leading-5 ">
              WORKS
            </span>
          </a>
          <a
            href="#"
            className="flex items-center p-1 gap-1 text-zinc-400 hover:text-zinc-50 hover:transition-colors"
          >
            <span className="font-poppins text-sm font-bold leading-5 ">
              ABOUT
            </span>
            <IoMdArrowDropdown />
          </a>
        </div>

        {/* CTA button */}
        <div className="flex justify-center items-center gap-1">
          <span className="hidden sm:flex">
            <Button children={"Book a Call"} bgColor="bg-surface-brand" />
          </span>
          <button
            className="flex px-3 py-2.5 justify-center items-center bg-menu border border-zinc-400/5 text-zinc-500 hover:text-zinc-50 backdrop-blur-[20px] rounded-2xl transition-colors cursor-pointer"
            onClick={() => console.log("cliked")}
          >
            <IoMdMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
