export default function Button({ children }) {
  return (
    <div className="flex items-center justify-center">
      <a
        href="#additional"
        className="moving_arrow_button py-3 pl-[1.25rem] pr-3 bg-surface-brand hover:bg-surface-brand-hover transition ease-out duration-500 rounded-full text-white font-First font-bold gap-1 text-sm self-center justify-center items-center hidden sm:flex bg-[#4F46E5]"
      >
        {children}
        <div className="flex flex-col h-5 w-6 relative overflow-hidden">
          <span className="material-symbols-outlined relative  transition ease-out duration-200">
            arrow_outward
          </span>
          <span className="material-symbols-outlined relative -left-6  transition ease-out duration-200">
            arrow_outward
          </span>
        </div>
      </a>
    </div>
  );
}
