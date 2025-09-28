export default function HeadingGradientText({ children }) {
  return (
    <h1 className="text-[2.5rem] md:text-[4rem] not-italic font-black leading-none md:leading-16 uppercase bg-linear-[135deg] from-[#43CBFF] from-0% to-[#9708CC] to-100% bg-clip-text text-transparent">
      {children}
    </h1>
  );
}
