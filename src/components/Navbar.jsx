export default function Navbar() {
  return (
    <div className="w-full flex justify-center items-center h-[4.5rem] py-3 fixed backdrop-blur-md bg-navbar">
      <div className="flex max-w-[1440px] justify-between items-center self-stretch">
        {/* logo */}
        <a href="#" className="flex items-center">
          <img src="/src/assets/logo.svg" alt="logo" />
          <div className="flex justify-center items-center px-4 py-3 rounded-2xl">
            <span className="text-white font-poppins text-lg font-bold leading-[1.8rem]">
              FnF
            </span>
            <span className="text-indigo-500 font-poppins text-lg font-bold leading-[1.8rem]">
              Byte
            </span>
          </div>
        </a>

        {/* menu */}
        <div></div>
      </div>
    </div>
  );
}
