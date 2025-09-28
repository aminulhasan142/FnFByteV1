import Button from "./Button.jsx";

export default function ProjectShowCard() {
  return (
    <>
      <div className="flex p-0 md:p-14 flex-col justify-between items-start self-stretch gap-4">
        {/* text container */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          {/* title text */}
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-[2.5rem] not-italic font-black capitalize text-white">
              Doctor appointment
            </h1>
            <p className="text-white font-poppins text-sm font-normal">
              StoryMaster.ai turns your ideas into beautifully written books
              using AI. Whether it’s children’s stories, non-fiction, or novels,
              the platform helps you write, edit, format, and publish with
              ease—ready for KDP or self-publishing.
            </p>
          </div>
          {/* sub title 1*/}
          <div className="flex flex-col justify-center items-start gap-0.5">
            {/* main title */}
            <div className="flex items-center gap-2">
              <h2 className="text-white text-[1rem] font-bold font-poppins">
                UI/UX Design
              </h2>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <h2 className="text-white text-[1rem] font-bold font-poppins">
                Web Development
              </h2>
            </div>
            {/* small text */}
            <p className="text-white font-poppins text-sm font-normal">
              SERVICES
            </p>
          </div>
          {/* sub title 2*/}
          <div className="flex flex-col justify-center items-start gap-0.5">
            {/* main title */}
            <div className="flex items-center gap-2">
              <h2 className="text-white text-[1rem] font-bold font-poppins">
                Healthcare
              </h2>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <h2 className="text-white text-[1rem] font-bold font-poppins">
                SaaS
              </h2>
              {/* <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <h2 className="text-white text-[1rem] font-bold font-poppins">
                AL/ML
              </h2> */}
            </div>
            {/* small text */}
            <p className="text-white font-poppins text-sm font-normal uppercase">
              industries
            </p>
          </div>
        </div>

        {/* button */}
        <Button
          children={"Case Study"}
          url={"#casestudy"}
          className="w-full md:w-fit"
          bgColor="bg-black"
        />
      </div>

      <img
        src="/src/assets/DoctorAppointment.png"
        alt="Card Image"
        className="p-2.5"
      />
    </>
  );
}
