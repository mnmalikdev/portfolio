import { BiRightArrowAlt } from "react-icons/bi";
const Hero: React.FC = () => {
  return (
    <div className="md:flex flex-col h-96 sm:flex-row px-20 my-28 ">
      <div>
        {/* text section */}
        <div className=" text-h3 md:text-h1 text-left font-semibold justify-center">
          Sleek <span className=" underline decoration-primary">Web</span> <span> & </span>
          <span className=" underline decoration-primary">Mobile Apps</span>,
          <br /> from design to development,
          <br /> that fits your needs.
        </div>
        {/* Butoon-CTA */}
        <div className=" flex-col">
          {/* about me button */}
          <div className="inline-flex rounded-md shadow my-9 ">
            <a
              href="#"
              className=" w-full inline-flex items-center justify-center px-4 py-4 border-2 border-primary text-base font-semibold rounded-md text-primary bg-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              more about me
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
