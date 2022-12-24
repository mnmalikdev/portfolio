const Quote: React.FC = () => {
  return (
    <div className=" my-28 lg:my-56">
      <div className=" flex justify-center flex-col md:flex md:justify-center md:content-center px-14 md:flex-row">
        <div className=" text-h3 lg:text-h2 text-dark font-medium italic">&quot;make it work, make it right, make it fast.&quot;</div>
        <div className="text-h4 text-dark font-light flex my-2 ">
          <span className="font-bold pl-4">-</span>
          <span className="font-light flex flex-row ">
            {" "}
            <span className="font-bold">Kent</span>{" "}
            <span className="font-light">
              {" "}
              <span className="font-bold pl-1">Beck </span>
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-center content-center ">
        <div className="bg-primary text-white  px-7 py-5  rounded-lg my-2 mr-9 cursor-pointer transition ease-in-out delay-150 bg-blue-500 shadow-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <a href="#" className="font-medium">
            view my services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quote;
