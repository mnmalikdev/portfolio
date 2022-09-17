import Image from "next/image";
import Mock1 from "./../public/images/cryptoUI1.png";
import Mock2 from "./../public/images/cryptoUI6.png";
import Mock3 from "./../public/images/cryptoUI8.png";
interface detailsObject {
  //title of project
  title: string;
  //description of project
  description: string;
  //what part i did
  role: string;
  //techstack used
  techStack: string[];
  //mockup of project
}

const Project: React.FC<detailsObject> = ({ title, description, role, techStack, ...props }) => {
  return (
    <div className=" my-28 ">
      {/* project 1  */}
      <div className="flex flex-row mx-36">
        {/* section left */}
        <div className=" flex flex-col w-1/2  ">
          <h1 className=" text-h1 ">{title}</h1>
          <p className=" text-body1 w-4/5 my-5 ">{description}</p>
          <p className=" text-body2 font-semibold">{role}</p>
          <p className=" mt-5 ">
            {techStack.map((el) => {
              return (
                <span key={Math.random().toFixed(1)} className=" pr-4 pt-4">
                  {el}
                </span>
              );
            })}
          </p>
        </div>
        {/* section right */}
        <div className=" flex w-3/5 ">
          <div className=" flex flex-row flex-wrap -my-16 ">
            <div className=" w-72 translate-y-12 ">
              <Image src={Mock1} layout="responsive" width={60} height={115} alt="Picture of the author" />
            </div>
            <div className=" w-72 translate-y-5">
              <Image src={Mock2} layout="responsive" width={60} height={115} alt="Picture of the author" />
            </div>
            <div className=" w-72  ">
              <Image src={Mock3} layout="responsive" width={60} height={115} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
