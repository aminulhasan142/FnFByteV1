import { MdStars } from "react-icons/md";

export default function PopularTag({ className }) {
  return (
    <span
      className={`flex py-2 pl-2 pr-4 justify-center gap-1 rounded-full border border-border bg-[#ffffff0d] ${className}`}
    >
      {/* <img
        src="/src/assets/stars.svg"
        alt="star"
        className="w-5 h-5 lg:w-4 lg:h-4"
      /> */}
      <MdStars className="text-[#fb923c]" />
      <p className="text-white text-sm font-poppins font-normal"> Popular</p>
    </span>
  );
}
