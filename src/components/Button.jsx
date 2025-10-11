export default function Button({ children, url, className, bgColor }) {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer ${className}`}
    >
      <a
        href={url}
        className={`moving_arrow_button py-3 pl-[1.25rem] pr-3 hover:bg-surface-brand/80 transition ease-out duration-500 rounded-2xl text-white font-First font-bold gap-1 text-sm self-center justify-center items-center flex  ${className} ${bgColor}`}
      >
        <p className="font-bold text-sm">{children}</p>
        <div className="flex flex-col h-5 w-6 bottom-[3px] relative overflow-hidden">
          <span className="material-symbols-outlined relative  transition ease-out duration-200 text-xl! ">
            arrow_outward
          </span>
          <span className="material-symbols-outlined relative -left-7  transition ease-out duration-200 text-xl! ">
            arrow_outward
          </span>
        </div>
      </a>
    </div>
  );
}
