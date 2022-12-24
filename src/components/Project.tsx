import Image, { StaticImageData } from "next/image";
interface detailsObject {
  //title of project
  title: string;
  //description of project
  description: string;
  //what part i did
  role: string;
  //Mobile App OR Web App or web+mobile
  type: string;
  //techstack used
  techStack: string[];
  //mockup of project
  mockup: string[] | StaticImageData[];
}

const Project: React.FC<detailsObject> = ({ title, description, role, type, techStack, mockup, ...props }) => {
  return (
    <div className=" my-28 ">
      {/* project 1  */}
      <div className=" flex flex-col-reverse md:flex lg:flex-row lg:mx-36">
        {/* section left */}
        <div className=" flex flex-col  px-9 lg:flex lg:flex-col w-full  ">
          <h1 className=" text-h1 ">{title}</h1>
          <p className=" text-body1 w-4/5 my-5 ">{description}</p>
          <p className=" text-body1 w-4/5 my-5 ">{type}</p>
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
        <div className=" flex justify-center items-center w-full my-20  ">
          <div className=" flex flex-row w-full md:flex lg:flex-row lg:flex-wrap -my-16 ">
            {mockup.map((el) => {
              return (
                <div className=" w-1/2  " key={Math.random().toFixed(2)}>
                  {type === "Mobile-App" ? (
                    <Image src={el} layout="responsive" width={60} height={115} alt="Picture of the author" className="w-full min-w-full" />
                  ) : (
                    <Image src={el} className=" w-full min-w-full" layout="responsive" width={800} height={800} alt="Picture of the author" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
