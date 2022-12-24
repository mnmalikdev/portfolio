const Services: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center px-14  ">
      <div className="flex flex-col justify-center items-center text-h2 font-bold">
        <span className="font-bold font-jakarta text-h2 ">Services</span>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        {/* parent div to house both text on left and icons + service description  */}
        {/* div 1 */}
        <div className=" flex justify-center items-center my-5 ">
          <div className=" text-paraGraphMedium w-full lg:text-paragraphMedium text-paraColor lg:w-4/5  ">
            Being a hybrid designer and developer means that I have all the reins.
            <br /> This allows me to build sleek webs and mobile applications quickly, well and effectively
          </div>
        </div>
        <div>
          {/* div 2 */}
          <div className=" lg:px-24">
            <div className=" flex flex-col  lg:flex lg:flex-row   ">
              <div className="lg:mr-12 w-full">
                <div className=" text-h3 font-jakarta mb-3 my-6 ">Web Development</div>
                <div className="  text-body1 text-[#59647b] font-medium">
                  As a skilled software engineer, I offer top-notch web development services to help businesses of all sizes achieve their online
                  goals. With a focus on clean, responsive design and intuitive user experience,
                  <br /> I work with my clients to create custom solutions that drive engagement and conversion. From building new websites from
                  scratch to updating and improving existing sites, I have the skills and experience to deliver results that exceed your expectations.
                </div>
              </div>
              <div className="w-full">
                <div className=" text-h3 font-jakarta mb-3 my-6  ">Mobile App Development</div>
                <div className=" text-body1 text-[#59647b] font-medium">
                  In today's digital age, a strong mobile presence is essential for any business looking to stay competitive. With experience
                  developing custom mobile apps for a wide range of clients, I have a proven track record of creating user-friendly apps that drive
                  engagement and deliver real value to users. Whether you need a simple app to showcase your products or a more complex solution to
                  streamline your business processes, I am here to help you achieve your mobile goals.
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex lg:flex-row ">
              <div className="mr-12 w-full">
                <div className=" text-h3 font-jakarta mb-3 my-6 ">UI/UX Design</div>
                <div className=" text-body1 text-[#59647b] font-medium ">
                  As a software engineer with a background in UI/UX design, I understand the importance of creating intuitive and visually appealing
                  user interfaces. Whether you're building a website, a mobile app, or any other digital product, I can help you craft a user
                  experience that engages and delights your users. With a focus on usability, accessibility, and aesthetics, I work closely with my
                  clients to create designs that not only look great, but also drive conversions and achieve business objectives.
                </div>
              </div>
              <div className="w-full">
                <div className=" text-h3 font-jakarta mb-3 my-6 ">No-Code Development</div>
                <div className=" text-body1 text-[#59647b] font-medium ">
                  For businesses that don't have the resources or expertise to build custom software solutions, no code development can be a
                  game-changer. As a no code developer, I offer a range of services to help you leverage the power of no code platforms to build
                  custom solutions without the need for traditional coding. Whether you're looking to automate your business processes, create custom
                  integrations, or build a simple application, I am here to help you achieve your goals without the need for complex coding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
