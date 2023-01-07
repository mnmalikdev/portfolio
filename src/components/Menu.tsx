import { animated } from "@react-spring/web";
import { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import MenuContext from "../context/displayMenu.context";
const Menu = () => {
  const { toggleDisplayMenu } = useContext(MenuContext);
  return (
    // animate this menu

    <animated.div className="flex flex-col  justify-center items-center  bg-primary min-w-full min-h-screen fixed ">
      <div className="absolute top-10 right-10 text-white">
        <FaRegWindowClose
          size={24}
          onClick={() => {
            toggleDisplayMenu();
          }}
        />
      </div>
      <div className="flex flex-col gap-5 font-jakarta font-semibold text-h2">
        <span className="font-bold text-white">About</span>
        <span className="font-bold text-white">Services</span>
        <span className="font-bold text-white">Tech Stack</span>
        <span className="font-bold text-white">Projects</span>
        <span className="font-bold text-white">Contact</span>
      </div>
    </animated.div>
  );
};

export default Menu;
