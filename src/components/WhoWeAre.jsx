import Button from "./Button";
import TransparentButton from "./TransparentButton";
import Avatar2 from "/src/assets/placeholder (1).png";
import Avatar3 from "/src/assets/placeholder (2).png";
import Avatar4 from "/src/assets/placeholder (3).png";
import Avatar1 from "/src/assets/placeholder.png";

export default function WhoWeAre() {
  return (
    <>
      {/* 1st container */}
      <div className="flex w-full lg:max-w-[600px] p-8 flex-col justify-center items-start self-stretch rounded-2xl bg-slate-800 flex-2">
        {/* <!-- first row 1 for statistics --> */}
        <div className="flex flex-col justify-around items-center flex-2 self-stretch">
          {/* <!-- box 1 --> */}
          <div className="flex flex-col sm:flex-row w-full justify-around items-center flex-2">
            {/* <!-- box number text --> */}
            <div className="flex flex-col w-[140px] items-start">
              <h3 className="text-white text-[32px] not-italic font-bold leading-[48px]">
                3+
              </h3>
              <p className="text-slate-400 text-sm font-semibold">
                Years of Experience
              </p>
            </div>
            {/* <!-- divider between two box --> */}
            <span className="hidden sm:flex bg-gradient-to-b from-[#ffffff00] from-0% to-[#ffffff33] to-100% w-[1px] h-[139.5px]"></span>
            <span className="w-[80%] h-[1px] sm:hidden md:hidden my-4 bg-gradient-to-r from-[#ffffff00] from-0% via-[#ffffff33] via-50% to-[#ffffff00] to-100%"></span>
            {/* <!-- box number text --> */}
            <div className="flex flex-col w-[140px] items-start">
              <h3 className="text-white text-[32px] not-italic font-bold leading-[48px]">
                200+
              </h3>
              <p className="text-slate-400 text-sm font-semibold">Projects</p>
            </div>
          </div>
          {/* <!-- divider number 2 --> */}
          <span className="w-[80%] h-[1px] my-4 sm:my-0 bg-gradient-to-r from-[#ffffff00] from-0% via-[#ffffff33] via-50% to-[#ffffff00] to-100%"></span>
          {/* <!-- box 2 --> */}
          <div className="flex flex-row w-full justify-around items-center flex-2">
            {/* <!-- 2nd col box 1 --> */}
            <div className="flex flex-col sm:flex-row justify-around items-center gap-2 flex-2">
              {/* <!-- happy clients --> */}
              <div className="flex w-[140px] flex-col justify-center items-start gap-2">
                {/* <!-- Avatar groups icons --> */}
                <div className="flex justify-end">
                  <img src={Avatar1} alt="Avatar" />
                  <img src={Avatar2} alt="Avatar" className="-ml-[10px]" />
                  <span className="flex h-[48px] px-[12px] font-bold justify-center items-center gap-[0.976px] rounded-full border border-border bg-surface-brand text-[1rem] text-center text-white -ml-[10px]">
                    88+
                  </span>
                </div>

                {/* <!-- happy clients text --> */}
                <div className="text-sm text-slate-400 font-semibold">
                  Happy Clients
                </div>
              </div>

              {/* <!-- divider number 3 second box --> */}
              <span className="hidden sm:flex bg-gradient-to-b from-[#ffffff00] from-0% to-[#ffffff33] to-100% w-[1px] h-[139.5px] rotate-180"></span>
              <span className="w-[80%] h-[1px] sm:hidden md:hidden my-4 bg-gradient-to-r from-[#ffffff00] from-0% via-[#ffffff33] via-50% to-[#ffffff00] to-100%"></span>

              {/* <!-- Countries Served  --> */}
              <div className="flex w-[140px] flex-col justify-center items-start gap-2">
                {/* <!-- Flag groups icons --> */}
                <div className="flex justify-end">
                  <img src={Avatar3} alt="Flag" />
                  <img src={Avatar4} alt="Flag" className="-ml-[10px]" />
                  <span className="flex h-[48px] px-[16px] justify-center items-center gap-[0.976px] rounded-full border border-border text-white bg-surface-brand text-center text-[1rem] font-bold -ml-[10px]">
                    6+
                  </span>
                </div>

                {/* <!-- Countries Served  text --> */}
                <div className="text-zinc-400 font-semibold text-sm">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd container */}
      <div className="flex flex-col items-start gap-3 max-w-[540px]">
        {/* tag */}
        <div className="flex px-4 py-2.5 gap-2 items-center justify-center rounded-2xl border border-border">
          <span className="bg-green-600 w-1.5 h-1.5 rounded-full"></span>
          <p className="text-zinc-400 text-sm font-semibold">Who We Are</p>
        </div>
        {/* text container */}
        <div className="flex flex-col items-start gap-8 self-stretch">
          <p className="text-[2rem] not-italic font-bold leading-none md:leading-normal bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
            FnFByte is a forward-thinking technology company dedicated to
            transformaxg ideas into impactful digital solutions.
          </p>
          {/* CTA button */}
          <div className="flex flex-col md:flex-row w-full items-center gap-2">
            <TransparentButton
              children={"More About Us"}
              className="w-full md:w-fit"
            />
            <Button
              children={"What We Do"}
              url={"#letstalk"}
              className="w-full md:w-fit"
              bgColor="bg-surface-brand hover:bg-surface-brand/80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
