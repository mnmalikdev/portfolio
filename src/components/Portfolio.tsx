import Project from "./Project";

const Portfolio: React.FC = () => {
  return (
    <div className=" my-28 ">
      <div className=" flex flex-col text-h2 font-bold justify-center items-center ">
        <div className="font-bold font-jakarta text-h2">What I Have Built So Far...</div>
        <div className="font-jakarta text-body2">Take a look at the projects i have built for work and fun !</div> <br />
      </div>
      <Project
        title="MiCrypto App UI"
        description="lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet."
        role="Front-End"
        techStack={[" React-Native ", "Typescript"]}
      />
    </div>
  );
};

export default Portfolio;
