import Button from "./Button";
import TransparentButton from "./TransparentButton";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* text section  */}
      <div className="flex flex-col items-start gap-10">
        {/* title text */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <h1 className="text-[2.5rem] md:text-[4rem] not-italic font-black leading-none md:leading-16 uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
            Elevate Your Digital <br /> Presence
          </h1>
          <p className="font-poppins text-lg leading-normal text-white">
            Innovative Design, Development, and Marketing. <br />
            Together, Let’s Create Something Really Incredible.
          </p>
        </div>
        {/* title CTA */}
        <div className="flex flex-col md:flex-row w-full items-center gap-2">
          <TransparentButton
            children={"Starting at $500/Project"}
            className="w-full md:w-fit"
          />
          <Button
            children={"Let’s Talk"}
            url={"#contact"}
            className="w-full md:w-fit"
            bgColor="bg-surface-brand"
          />
        </div>
      </div>
      {/* video or image section */}
      <img src="/src/assets/Embed.png" alt="Hero Image" />
    </div>
  );
}
