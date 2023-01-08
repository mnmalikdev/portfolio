import { FC, useContext } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import MenuContext from "../context/displayMenu.context";

import Menu from "./Menu";

const Navbar: FC = () => {
  const { displayMenu, toggleDisplayMenu } = useContext(MenuContext);

  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <>
      {displayMenu === false ? (
        <div className="flex items-center justify-center h-[80px] lg:h-auto px-3">
          <div className="flex flex-1 lg:flex-none">
            <img src="/images/logo1.png" alt="logo" />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <a className="p-5 text-h4 hover:underline decoration-primary decoration-2" href="#about" onClick={handleClick}>
              About
            </a>
            <a href="#services" className="p-5 text-h4 hover:underline decoration-primary decoration-2" onClick={() => {}}>
              Services
            </a>
            <a href="#tech" className="p-5 text-h4 hover:underline decoration-primary decoration-2" onClick={() => {}}>
              Tech Stack
            </a>
            <a href="#projects" className="p-5 text-h4 hover:underline decoration-primary decoration-2" onClick={() => {}}>
              Projects
            </a>
          </div>
          <a href="#contact">
            <div className="hidden py-3 text-white transition duration-300 ease-in-out delay-150 bg-blue-500 rounded-lg cursor-pointer lg:block bg-primary px-7 mr-9 hover:translate-y-1 hover:scale-110 hover:bg-indigo-500">
              contact
            </div>
          </a>

          <div className="lg:hidden">
            <div className="ml-[12px] transition duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-100">
              <BiMenuAltRight
                size={34}
                onClick={() => {
                  toggleDisplayMenu();
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </>
  );
};

export default Navbar;
