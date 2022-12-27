import { FC, useMemo } from "react";
import {
  Expo,
  Express,
  Figma,
  Firebase,
  Git,
  Github,
  Javascript,
  Monogdb,
  Nestjs,
  Nextjs,
  Nodejs,
  React,
  ReactNative,
  Tailwindcss,
  Typescript,
} from "../icons";
import Skill from "./Skill";

const Skills: FC = () => {
  const techs = useMemo(
    () => [
      { component: <Typescript />, name: "TypeScript" },
      { component: <React />, name: "React" },
      { component: <ReactNative width={132} />, name: "React Native" },
      { component: <Expo width={115} />, name: "Expo" },
      { component: <Nextjs />, name: "Nextjs" },
      { component: <Javascript />, name: "JavaScript" },
      { component: <Tailwindcss />, name: "Tailwind CSS" },
      { component: <Nodejs />, name: "Node.js" },
      { component: <Nestjs />, name: "Nest.js" },
      { component: <Express />, name: "Express.js" },
      { component: <Git />, name: "Git" },
      { component: <Github />, name: "Github" },
      { component: <Monogdb />, name: "MongoDB" },
      { component: <Firebase />, name: "Firebase" },
      { component: <Figma />, name: "Figma" },
    ],
    []
  );

  return (
    <div className="mb-10">
      <div className="mb-4 font-bold text-center text-h2">My Tech Stack</div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {techs.map((tech) => {
          return <Skill key={tech.name} {...tech} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
