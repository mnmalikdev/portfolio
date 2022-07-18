import { animated } from "@react-spring/web";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

interface IMenuProps {
  toggleMenu: () => void;
}

const Menu: React.FC<IMenuProps> = ({ toggleMenu }) => {
  const [fullMenu, setFullMenu] = useState<boolean>(false);

  // render menu only if expandedMenu is true

  if (!fullMenu) {
    return (
      // animate this menu

      <animated.div className="flex justify-center items-center absolute bg-primary min-h-screen w-full">
        <div className="absolute top-10 right-10 text-white">
          <FaRegWindowClose
            size={24}
            onClick={() => {
              setFullMenu(!fullMenu);
              toggleMenu();
            }}
          />
        </div>
        <div className="">
          <div className=" font-jakarta font-semibold font-h2">
            <span className="font-bold text-white">Menu</span>
          </div>
        </div>
      </animated.div>
    );
  }

  return null;
};

export default Menu;
