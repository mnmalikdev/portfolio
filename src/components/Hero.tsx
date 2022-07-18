import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
const Hero: React.FC = () => {
  const services = ["Web", "Android", "IoS", "Cross-Platform"];
  return (
    <div className=" md:flex flex-col md:h-auto w-full sm:flex-row px-16 pt-28 ">
      <div>
        {/* text section */}
        <div className=" text-h3 md:text-h1 text-left font-semibold justify-center">
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
        <div className=" flex-col">
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
    </div>
  );
};

export default Hero;
