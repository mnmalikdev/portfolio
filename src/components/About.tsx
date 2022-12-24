const About = () => {
  return (
    <div className=" flex flex-col lg:flex-row my-14 lg:my-24">
      <div className=" flex w-full flex-col px-14  ">
        {/* left column */}
        <div className=" text-h2 font-bold text-center my-3 ">About Me</div>
        <div className=" my-5 flex justify-center items-center ">
          <div className=" text-paraGraphMedium w-full lg:text-paraGraphMedium tracking-wide text-paraColor lg:w-2/3 lg:pr-5 ">
            <p>
              As a software engineer with expertise in MERN stack development, I have a strong track record of building efficient and scalable web and
              mobile applications for businesses of all sizes. With experience working with a wide range of clients, I have a proven ability to
              deliver technical solutions that drive business growth and success.
            </p>
            <br />
            <br />
            <p>
              In my current role, I have helped small and medium businesses optimize their processes and scale their operations through the
              implementation of custom software solutions. My passion for technology and problem-solving drives me to stay up-to-date on the latest
              industry trends and techniques, ensuring that my clients always receive the best possible service.
            </p>
            <br />
            <br />
            <p>
              If you're in need of a new web application, a mobile app, or simply looking to improve your current software infrastructure, I am ready
              to provide you with the expertise and guidance you need to succeed. I am confident that my skills and experience make me a strong
              candidate for your next project and I look forward to the opportunity to work with you.
            </p>
          </div>
        </div>
      </div>
      {/* div 2 */}
      {/* <div className="  flex flex-row justify-center items-center w-full ">
        <div className=" flex flex-col  gap-12  ">
          <div className=" flex flex-row  ">
            <div className=" flex flex-col justify-center items-center border-2 border-primary px-14 py-8  ">
              <div className=" text-h2"> 24 </div>
              <div className=" text-bodyTitleBig lg:text-paraGraphMedium text-center"> years young</div>
            </div>

            <div className=" flex flex-col justify-center items-center border-2 border-primary px-14 py-8  ">
              <div className=" text-h2"> 2 </div>
              <div className=" text-bodyTitleBig lg:text-paraGraphMedium text-center">
                {" "}
                years <br /> of experience
              </div>
            </div>
          </div>

          <div className=" flex flex-row  ">
            <div className=" flex flex-col justify-center items-center border-2 border-primary px-14 py-8  ">
              <div className=" text-h2"> 7 </div>
              <div className=" text-bodyTitleBig lg:text-paraGraphMedium text-center"> projects </div>
            </div>

            <div className=" flex flex-col justify-center items-center border-2 border-primary px-14 py-8  ">
              <div className=" text-h2"> 2 </div>
              <div className=" text-bodyTitleBig lg:text-paraGraphMedium text-center">
                {" "}
                companies <br /> worked with
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
