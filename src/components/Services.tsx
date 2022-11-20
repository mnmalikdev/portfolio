const Services: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center px-14  ">
      <div className="flex-start text-h2 font-bold">
        <span className="font-bold font-jakarta text-h2">Services</span>
      </div>
      <div className=" flex flex-col lg:flex lg:flex-row lg:justify-evenly ">
        {/* parent div to house both text on left and icons + service description  */}
        {/* div 1 */}
        <div className=" my-5 ">
          <div className=" text-paraGraphMedium w-full lg:text-paragraphMedium text-paraColor lg:w-4/5  ">
            Being a hybrid designer and developer means that I have all the reins. This allows me to build sleek websites quickly, well and
            effectively
          </div>
        </div>
        <div>
          {/* div 2 */}
          <div>
            <div className=" flex flex-col lg:flex lg:flex-row ">
              <div className="lg:mr-12 ">
                <div className=" text-h3 font-jakarta mb-3 my-6 ">Web Development</div>
                <div className="  text-body1 text-[#59647b] font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum maxime corrupti sint veritatis, iure tenetur officia quasi nisi,
                  nemo, itaque modi ex at. At nisi hic dignissimos esse, iusto dicta.
                </div>
              </div>
              <div>
                <div className=" text-h3 font-jakarta mb-3 my-6 ">Mobile App Development</div>
                <div className=" text-body1 text-[#59647b] font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum maxime corrupti sint veritatis, iure tenetur officia quasi nisi,
                  nemo, itaque modi ex at. At nisi hic dignissimos esse, iusto dicta.
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex lg:flex-row ">
              <div className="mr-12">
                <div className=" text-h3 font-jakarta mb-3 my-6 ">UI/UX Design</div>
                <div className=" text-body1 text-[#59647b] font-medium ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum maxime corrupti sint veritatis, iure tenetur officia quasi nisi,
                  nemo, itaque modi ex at. At nisi hic dignissimos esse, iusto dicta.
                </div>
              </div>
              <div>
                <div className=" text-h3 font-jakarta mb-3 my-6 ">No-Code Development</div>
                <div className=" text-body1 text-[#59647b] font-medium ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum maxime corrupti sint veritatis, iure tenetur officia quasi nisi,
                  nemo, itaque modi ex at. At nisi hic dignissimos esse, iusto dicta.
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
