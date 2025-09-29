import HeadingGradientText from "./HeadingGradientText";

export default function TestimonialSection() {
  return (
    <div className="flex flex-col max-w-[1440px] w-full pt-2 md:pt-20 px-2 md:px-12 lg:px-16 pb-3 md:pb-16 justify-center items-start rounded-3xl bg-linear-[180deg] from-container-gray2 to-container-gray1 gap-5">
      {/* <!-- Avatar groups icons --> */}
      <div className="flex justify-end">
        <img src="/src/assets/placeholder.png" alt="Avatar" />
        <img
          src="/src/assets/placeholder (1).png"
          alt="Avatar"
          className="-ml-[10px]"
        />
        <span className="flex h-[48px] px-[12px] font-bold justify-center items-center gap-[0.976px] rounded-full border border-border bg-surface-brand text-[1rem] text-center text-white -ml-[10px]">
          88+
        </span>

        <h4 className="text-sm text-zinc-400 font-semibold font-poppins flex justify-center self-center ml-4">
          Happy Clients
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-5 md:gap-6 lg:gap-[7.5rem]">
        <HeadingGradientText>What Our Clients Say</HeadingGradientText>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-slate-400 text-sm font-medium font-poppins">
            Real stories from startups and enterprises we’ve partnered with —
            building digital products that deliver results.
          </p>
          <div className="flex p-1 items-center  gap-0.5 rounded-2xl border border-border backdrop-blur-xl">
            <button className="flex py-3 px-4 justify-center items-center gap-1 rounded-xl bg-surface-brand text-white font-poppins text-sm font-bold cursor-pointer">
              Project Wise
            </button>
            <button className="flex py-3 px-4 justify-center items-center gap-1 rounded-xl  text-zinc-400 font-poppins text-sm font-bold cursor-pointer">
              Monthly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
