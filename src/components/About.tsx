const About = () => {
  return (
    <div className=" flex flex-row my-24">
      <div className=" flex flex-col px-14 w-3/5">
        {/* left column */}
        <div className=" text-h2 font-bold ">About Me</div>
        <div className=" my-5 ">
          <div className=" text-paraGraphMedium w-full lg:text-paraGraphMedium tracking-wide text-paraColor lg:w-4/5  ">
            Skilled in JavaScript development, specializing in Web-App and Mobile-App development . Strong engineering professional with a diverse
            tech-stack , a fine eye for UI/UX design , and quality experience. Graduated from the COMSATS University, Pakistan with a Bachelors degree
            in software engineering (BSE). Currently working in a startup as a MERN stack developer.
          </div>
        </div>
      </div>
      <div className=" my-5 ">
        <div className=" flex flex-col gap-12 mt-12 ">
          {/* first row with 2 */}
          <div className=" flex flex-row gap-20">
            <div className=" flex flex-col ">
              <div className=" text-h2"> 24 </div>
              <div className=" text-paraGraphMedium"> years young</div>
            </div>

            <div className=" flex flex-col ">
              <div className=" text-h2"> 3 + </div>
              <div className=" text-paraGraphMedium"> years of experience</div>
            </div>
          </div>
          {/* second row with 2 */}
          <div className=" flex flex-row gap-16">
            <div className=" flex flex-col ">
              <div className=" text-h2"> 7 </div>
              <div className=" text-paraGraphMedium"> projects done</div>
            </div>

            <div className=" flex flex-col ">
              <div className=" text-h2"> 2 </div>
              <div className=" text-paraGraphMedium"> companies worked with</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
