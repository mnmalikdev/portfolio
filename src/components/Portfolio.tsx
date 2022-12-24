import Project from "./Project";

const Portfolio: React.FC = () => {
  return (
    <div className="  my-28 ">
      <div className=" flex flex-col  font-bold justify-center items-center ">
        <div className="font-bold text-h3 md:text-h2 font-jakarta">What I Have Built So Far...</div>
        <div className="font-jakarta text-body2 text-center px-4">
          Take a look at the fron-end , back-end and full-stack projects i have built or worked on for work and fun !
        </div>{" "}
        <br />
      </div>
      {/* projects div */}

      <Project
        title="Home Gym Partner"
        description="lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet."
        role="Full-Stack"
        type="Web-App"
        techStack={[" React.js ", "Typescript", "Nest.js", "MySQL", "TypeORM"]}
        mockup={["/images/gymygUI2.png", "/images/gymygUI1.png"]}
      />
      <Project
        title="MiCrypto App UI"
        description="lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet."
        role="Front-End"
        type="Mobile-App"
        techStack={[" React-Native ", "Typescript"]}
        mockup={["/images/cryptoUI1.png", "/images/cryptoUI6.png", "/images/cryptoUI8.png"]}
      />

      <Project
        title="Disney UI Clone"
        description="I built a clone of Disney Hotstar website. the project was fun and it's great way to learn while improving my coding skills. I used React.js and firebase in order to build my own version of Disney Hotstart website. This is definitely not something new, but I wanted to share it with everyone as a great way to learn and enhance creativity."
        role="Full-Stack"
        type="Web-App"
        techStack={[" React.js ", "JavaScript", "Firebase"]}
        mockup={["/images/DisneyUI1.png", "/images/DisneyUI4.png"]}
      />

      <Project
        title="Netflix mobile UI"
        description="lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet."
        role="Front-End"
        type="Mobile-App"
        techStack={[" React-Native ", "JavaScript"]}
        mockup={["/images/MovieAppUI2.png", "/images/MovieAppUI1.png", "/images/MovieAppUI3.png"]}
      />
    </div>
  );
};

export default Portfolio;
