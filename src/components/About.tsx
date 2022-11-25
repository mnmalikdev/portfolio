const About = () => {
  return (
    <div className=" flex flex-row my-24">
      <div className=" flex flex-col px-14 w-3/5">
        {/* left column */}
        <div className=" text-h2 font-bold ">About Me</div>
        <div className=" my-5 ">
          <div className=" text-paraGraphMedium w-full lg:text-paraGraphMedium tracking-wide text-paraColor lg:w-2/3 pr-5 ">
            I am a professional software developer with a focus on building javascript web and mobile applications.
            <br />
            <br /> I have worked with small and medium businesses to help them scale their business and solve their problems. I have experience
            developing efficient techical solutions for companies of all sizes.
            <br />
            <br /> I am passionate about helping my clients grow their business by providing them with the tools they need to succeed.
          </div>
        </div>
      </div>
      <div className="  w-2/6">
        <div className=" flex flex-col justify-center gap-12 mt-28 ">
          {/* first row with 2 */}
          <div className=" flex flex-row gap-32">
            <div className=" flex flex-col  ">
              <div className=" text-h2"> 24 </div>
              <div className=" text-paraGraphMedium"> years young</div>
            </div>

            <div className=" flex flex-col ">
              <div className=" text-h2"> 3 + </div>
              <div className=" text-paraGraphMedium"> years of experience</div>
            </div>
          </div>
          {/* second row with 2 */}
          <div className=" flex flex-row gap-24">
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
