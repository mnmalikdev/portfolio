import Image from "next/image";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "./../public/images/logo1.png";
import Menu from "./Menu";

interface IMenuProps {
  toggleMenu?: () => void;
}

const Navbar: React.FC<IMenuProps> = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(true); //local state for menu

  const toggleMenu = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <div>
      {displayNav ? (
        <div className="w-full h-[80px] flex justify-between items-center px-6">
          {/* logo */}
          <div className=" mt-3 p-3  min-w-max ">
            <Image src={logo} />
          </div>
          {/* menu */}
          <div className="hidden lg:flex flex-row justify-between font-medium">
            <a href="#" className="p-5 text-h4 hover:underline decoration-primary decoration-2">
              Home
            </a>
            <a href="#" className="p-5 text-h4 hover:underline decoration-primary decoration-2">
              About
            </a>
            <a href="#" className="p-5 text-h4 hover:underline decoration-primary decoration-2">
              Projects
            </a>
            <a href="#" className="p-5 text-h4 hover:underline decoration-primary decoration-2">
              Services
            </a>
          </div>
          <div className="bg-primary text-white  px-7 py-3  rounded-lg mr-9 cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hidden lg:flex">
            <a href="#">Contact</a>
          </div>
          {/* hamburger icon */}
          <div className="flex lg:hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer ">
            <BiMenuAltRight size={34} onClick={toggleMenu} />
          </div>
        </div>
      ) : (
        <Menu toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

export default Navbar;
