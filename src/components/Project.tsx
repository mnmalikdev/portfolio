import { FC } from "react";

interface ProjectProps {
  title: string;
  images: Array<string>;
  description: string;
  role: string;
  type: string;
  skills: Array<string>;
}

const Project: FC<ProjectProps> = ({
  title,
  images,
  description,
  type,
  role,
  skills,
}) => {
  return (
    <div className="my-5 lg:flex lg:flex-row-reverse lg:my-[50px] lg:justify-between">
      <div className="mb-4">
        <div className="mb-4 text-center text-h3 lg:hidden">{title}</div>
        <div
          className={`flex flex-col md:flex-row lg:flex-${
            type === "Mobile App" ? "row" : "col"
          } md:justify-center md:space-y-0 md:space-x-4 lg:space-x-0 lg:space-y-${
            type === "Mobile App" ? "0" : "4"
          } items-center space-y-${type === "Mobile App" ? "0" : "4"}`}
        >
          {images.map((image) => {
            return (
              <img
                key={image}
                src={image}
                alt={title}
                className={`w-[250px] lg:w-[${
                  type === "Mobile App" ? "200" : "400"
                }px]`}
              />
            );
          })}
        </div>
      </div>

      <div className="lg:max-w-3xl">
        <div className="hidden mb-2 lg:flex text-h1">{title}</div>
        <div className="mb-4 text-justify">{description}</div>

        <div className="grid grid-cols-2 mb-5">
          <div className="font-semibold">Type</div>
          <div className="font-semibold">Tech Stack</div>

          <div>{type}</div>
          <div>{role}</div>
        </div>

        <div className="font-semibold text-center md:text-left">Skills</div>
        <div className="grid grid-cols-2 md:grid-cols-1">
          {skills.map((skill) => {
            return <div key={skill}>{skill}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
