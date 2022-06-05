import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "./../public/images/logo1.png";
const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6">
      {/* logo */}
      <div className=" mt-3 p-3  min-w-max ">
        <Image src={logo} />
      </div>
      {/* menu */}
      <div className="hidden lg:flex flex-row justify-between">
        <a href="#" className="p-5 text-h3">
          Home
        </a>
        <a href="#" className="p-5 text-h3">
          About
        </a>
        <a href="#" className="p-5 text-h3">
          Projects
        </a>
        <a href="#" className="p-5 text-h3">
          Services
        </a>
      </div>
      <div className="bg-primary text-white  px-7 py-3  rounded-lg mr-9 cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hidden lg:flex">
        <a href="#">Contact</a>
      </div>
      {/* hamburger icon */}
      <div className="flex lg:hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 ">
        <BiMenuAltRight size={34} />
      </div>
    </div>
  );
};

export default Navbar;
