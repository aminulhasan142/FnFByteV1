export default function TransparentButton({ children, className }) {
  return (
    <button
      className={`flex px-4 h-[44px] justify-center items-center bg-menu hover:bg-menu-hover duration-500 border border-zinc-400/5 backdrop-blur-[20px] rounded-xl transition-colors cursor-pointer text-white font-poppins text-sm font-bold leading-normal w-fit ${className}`}
    >
      {children}
    </button>
  );
}
