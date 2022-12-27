import { FC, useMemo } from "react";
import Project from "./Project";

const Portfolio: FC = () => {
  const projects = useMemo(
    () => [
      {
        title: "Home Gym Partner",
        images: [
          "images/home-gym-partner/img1.png",
          "images/home-gym-partner/img2.png",
        ],
        description:
          "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.",
        type: "Web App",
        role: "Full-Stack",
        skills: ["React.js", "TypeScript", "Nest.js", "MySQL", "TypeORM"],
      },
      {
        title: "Disney UI Clone",
        images: ["images/disney/img1.png", "images/disney/img2.png"],
        description:
          "I built a clone of Disney Hotstar website. the project was fun and it's great way to learn while improving my coding skills. I used React.js and firebase in order to build my own version of Disney Hotstart website. This is definitely not something new, but I wanted to share it with everyone as a great way to learn and enhance creativity.",
        type: "Web App",
        role: "Full-Stack",
        skills: ["React.js", "JavaScript", "Firebase"],
      },
      {
        title: "MiCryoto App UI",
        images: ["images/mi-crypto/img1.png", "images/mi-crypto/img2.png"],
        description:
          "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.",
        type: "Mobile App",
        role: "Front end",
        skills: ["React Native", "TypeScript"],
      },
      {
        title: "Netflix App UI",
        images: ["images/netflix/img1.png", "images/netflix/img2.png"],
        description:
          "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.",
        type: "Mobile App",
        role: "Front end",
        skills: ["React Native", "JavaScript"],
      },
    ],
    []
  );

  return (
    <div className="lg:px-16">
      <div className="font-bold text-center text-h3 lg:text-h2">
        What I Have Built So Far
      </div>
      <div className="mb-10 text-center text-body2">
        Take a look at the frontend, backend and full-stack projects I have
        built or worked on for work and fun!
      </div>

      {projects.map((project) => {
        return <Project key={project.title} {...project} />;
      })}
    </div>
  );
};

export default Portfolio;
