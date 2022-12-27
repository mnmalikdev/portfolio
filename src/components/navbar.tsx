import { FC, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Menu from "./Menu";

interface IMenuProps {
  toggleMenu?: () => void;
}

const Navbar: FC<IMenuProps> = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(true); //local state for menu

  const toggleMenu = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <>
      {displayNav ? (
        <div className="flex items-center justify-center h-[80px] lg:h-auto">
          <div className="flex flex-1 lg:flex-none">
            <img src="/images/logo1.png" alt="logo" />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="p-5 text-h4 hover:underline decoration-primary decoration-2"
            >
              Home
            </a>
            <a
              href="#"
              className="p-5 text-h4 hover:underline decoration-primary decoration-2"
            >
              About
            </a>
            <a
              href="#"
              className="p-5 text-h4 hover:underline decoration-primary decoration-2"
            >
              Projects
            </a>
            <a
              href="#"
              className="p-5 text-h4 hover:underline decoration-primary decoration-2"
            >
              Services
            </a>
          </div>

          <div className="hidden py-3 text-white transition duration-300 ease-in-out delay-150 bg-blue-500 rounded-lg cursor-pointer lg:block bg-primary px-7 mr-9 hover:translate-y-1 hover:scale-110 hover:bg-indigo-500">
            <a href="#">Contact</a>
          </div>

          <div className="lg:hidden">
            <div className="ml-[12px] transition duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-100">
              <BiMenuAltRight size={34} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      ) : (
        <Menu toggleMenu={toggleMenu} />
      )}
    </>
  );
};

export default Navbar;
