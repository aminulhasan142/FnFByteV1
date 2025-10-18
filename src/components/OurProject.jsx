import { MdOutlineBusinessCenter } from "react-icons/md";
import Button from "./Button";
import TagText from "./TagText";

export default function OurProject() {
  return (
    <>
      <TagText text={"Our Projects"}>
        <MdOutlineBusinessCenter className="text-zinc-400" />
      </TagText>
      <div className="flex flex-col lg:flex-row items-start justify-between w-full">
        <h1 className="text-[2.5rem] md:text-[4rem] not-italic font-black leading-none md:leading-16 uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
          DISCOVER OUR <br /> WORK
        </h1>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-poppins text-lg not-italic font-medium text-zinc-400">
            Browse through our featured projects to discover how we’ve <br />{" "}
            empowered businesses to succeed in the digital landscape.{" "}
          </p>
          <Button
            children={"Browse Projects"}
            className="w-full md:w-fit"
            bgColor="bg-surface-brand hover:bg-surface-brand/80"
          />
        </div>
      </div>
    </>
  );
}
