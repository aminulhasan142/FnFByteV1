export default function TransparentButton({ children }) {
  return (
    <button
      className="flex px-4 py-2.5 justify-center items-center bg-menu border border-zinc-400/5 backdrop-blur-[20px] rounded-2xl transition-colors cursor-pointer text-white font-poppins text-sm font-bold leading-normal"
      onClick={() => console.log("cliked")}
    >
      {children}
    </button>
  );
}
