import Image from "next/image";

const SkillElement: React.FC = () => {
  return (
    // parent div of entire card
    <>
      <div className=" flex flex-row flex-wrap justify-evenly items-center my-8">
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> TypeScript </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> React </div>
        </div>
        <div>
          <Image src="/images/react-native.svg" height={110} width={140} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> React-native </div>
        </div>
        <div>
          <Image src="/images/expo.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Expo Cli </div>
        </div>
      </div>
      {/* row 2 */}
      <div className=" flex flex-row flex-wrap justify-evenly items-center mt-11">
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Next.js </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> JavaScript </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Tailwind CSS </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Node.js </div>
        </div>
      </div>

      {/* row 3 */}
      <div className=" flex flex-row flex-wrap justify-evenly items-center mt-11">
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Nest.js </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Express.js </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Git </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Github </div>
        </div>
      </div>

      {/* row 4 */}
      <div className=" flex flex-row flex-wrap justify-center gap-80 items-center mt-11">
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> MongoDB </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Firebase </div>
        </div>
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height={110} width={110} />
          <div className=" flex justify-center font-jakarta text-bodyTitleBig text-dark"> Figma </div>
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
