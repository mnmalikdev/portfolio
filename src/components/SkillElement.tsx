import Image from "next/image";
import expressIcon from "./../public/images/express-logo.png";
import figmaIcon from "./../public/images/logo-figma.png";
import mongoIcon from "./../public/images/logo-mongo.png";
import nestIcon from "./../public/images/logo-nest.png";
import nodeIcon from "./../public/images/logo-node.png";
import reactIcon from "./../public/images/logo-react.png";
const SkillElement: React.FC = () => {
  return (
    // parent div of entire card
    <>
      <div className=" flex flex-row justify-evenly items-center my-4">
        <div className="  mt-3 px-3 w-48 h-44 ">
          <Image src={reactIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> React </div>
        </div>
        <div className="   px-3 w-48 h-44  ">
          <Image src={nodeIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Node.js </div>
        </div>
        <div className="   px-3 w-48 h-44  ">
          <Image src={expressIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Express.js </div>
        </div>
        <div className="   px-3 w-48 h-44  ">
          <Image src={mongoIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> MongoDB </div>
        </div>
      </div>
      {/* row 2 */}
      <div className=" flex flex-row justify-evenly items-center mt-11">
        <div className="  mt-3 px-3 w-48 h-44 ">
          <Image src={nestIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Nest.js </div>
        </div>
        <div className="   px-3 w-48 h-44  ">
          <Image src={figmaIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Figma </div>
        </div>
        <div className="   px-3 w-48 h-44  ">
          <Image src={expressIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Express.js </div>
        </div>
        <div className="   px-3 w-48 h-44  ">
          <Image src={mongoIcon} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> MongoDB </div>
        </div>
      </div>
    </>
  );
};
export default SkillElement;

// <div className="   px-3 w-48 h-44  ">
// <Image src={nestIcon} />
// <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Nest.js </div>
// </div>
