import SkillElement from "./SkillElement";
const Skills: React.FC = () => {
  return (
    <div className=" my-28 ">
      <div className=" flex text-h2 font-bold justify-center items-center">
        <span className="font-bold font-jakarta text-h2">My Tech Stack</span>
      </div>
      <div className="w-full mt-16 ">
        <SkillElement />
      </div>
    </div>
  );
};

export default Skills;
