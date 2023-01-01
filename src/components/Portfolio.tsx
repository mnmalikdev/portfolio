import { FC, useMemo } from "react";
import Project from "./Project";

import {
  Expo,
  Express,
  Figma,
  Firebase,
  Git,
  Github,
  Javascript,
  Monogdb,
  MySQL,
  Nestjs,
  Nextjs,
  Nodejs,
  React,
  ReactNative,
  Tailwindcss,
  TypeORM,
  Typescript,
} from "../icons";

const Portfolio: FC = () => {
  const techs = useMemo(
    () => [
      { component: <Typescript />, name: "TypeScript" },
      { component: <React />, name: "React" },
      { component: <ReactNative />, name: "React Native" },
      { component: <Expo />, name: "Expo" },
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
      { component: <MySQL />, name: "MySQL" },
      { component: <Figma />, name: "Figma" },
      { component: <TypeORM />, name: "TypeORM" },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Home Gym Partner",
        images: ["images/home-gym-partner/img1.png", "images/home-gym-partner/img2.png"],
        description:
          "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.",
        type: "Web App",
        role: "Full-Stack",
        // skills: ["React.js", "TypeScript", "Nest.js", "MySQL", "TypeORM"],
        skills: [<React width={40} />, <Typescript width={40} />, <Nestjs width={40} />, <MySQL width={40} />, <TypeORM width={40} />],
      },
      {
        title: "Disney UI Clone",
        images: ["images/disney/img1.png", "images/disney/img2.png"],
        description:
          "I built a clone of Disney Hotstar website. the project was fun and it's great way to learn while improving my coding skills. I used React.js and firebase in order to build my own version of Disney Hotstart website. This is definitely not something new, but I wanted to share it with everyone as a great way to learn and enhance creativity.",
        type: "Web App",
        role: "Full-Stack",
        skills: [<React width={40} />, <Javascript width={40} />, <Firebase width={40} />],
      },
      {
        title: "MiCryoto App UI",
        images: ["images/mi-crypto/img1.png", "images/mi-crypto/img2.png"],
        description:
          "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.",
        type: "Mobile App",
        role: "Front end",
        skills: [<ReactNative width={55} />, <Typescript width={40} />],
      },
      {
        title: "Netflix App UI",
        images: ["images/netflix/img1.png", "images/netflix/img2.png"],
        description:
          "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.",
        type: "Mobile App",
        role: "Front end",
        skills: [<ReactNative width={55} />, <Javascript width={40} />],
      },
    ],
    []
  );

  return (
    <div className="lg:px-16 lg:py-12 lg:mt-12">
      <div className="font-bold text-center text-h3 lg:text-h2">What I Have Built So Far</div>
      <div className="mb-10 text-center text-[#59647B]">
        Take a look at the frontend, backend and full-stack projects I have built or worked on for work and fun!
      </div>

      {projects.map((project) => {
        return <Project key={project.title} {...project} />;
      })}
    </div>
  );
};

export default Portfolio;
