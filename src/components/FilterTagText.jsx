export default function FilterTagText({ children }) {
  return (
    <button className="flex px-5 py-3 justify-center items-center border border-border rounded-2xl active:bg-[#7a1efa33] text-white text-sm font-poppins font-semibold active:text-indigo-400 cursor-pointer transition-colors">
      {children}
    </button>
  );
}
