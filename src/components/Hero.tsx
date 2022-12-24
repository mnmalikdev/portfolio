import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
const Hero: React.FC = () => {
  const services = ["Web", "Android", "IoS", "Cross-Platform"];
  return (
    <div className="  flex flex-col-reverse justify-center items-center lg:flex lg:flex-row  px-16 pt-28 mb-52 ">
      <div className=" flex flex-col w-full">
        {/* text section */}
        <div className=" text-h3 w-full xl:text-h1  xl:text-left font-semibold justify-center">
          Sleek <span className=" underline decoration-primary">Web</span> <span> & </span>
          <span className=" underline decoration-primary ">Mobile Apps</span>,
          <br /> from design to development,
          <br /> that fits your needs.
          <ul className="text-li my-4">
            {services.map((service, index) => {
              return (
                <div key={index * 2} className="flex flex-row justify-start content-center ">
                  <BsCheckLg size={15} color={"#1d53ff"} className="mx-2 mt-2 block" />
                  <li key={index} className="text-li text-[#59647b] font-medium">
                    {service}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        {/* Butoon-CTA */}
        <div className=" flex-row">
          {/* about me button */}
          <div className="inline-flex shadow my-3 ">
            <a
              href="#"
              className=" w-full inline-flex items-center justify-center px-4 py-4 border-2 border-primary text-base font-semibold rounded-xl text-primary bg-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              check out my work
            </a>
          </div>
          {/* contact button */}
          <a
            href="#"
            className=" mx-3 inline-flex items-center justify-center text-[16px] px-4 py-4 text-base font-semibold rounded-md text-[#59647b] bg-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            get in touch <BiRightArrowAlt size={22} />
          </a>
        </div>
      </div>
      {/* IMAGE SECTION */}
      <div className="flex justify-center items-center  lg:w-2/3 mb-16">
        <img src="/images/portfolio-main1.png" alt="Picture of the author" width={390} className=" border-2 rounded-lg border-primary  -m-4" />
      </div>
    </div>
  );
};

export default Hero;
