const Hero: React.FC = () => {
  return (
    <div className="flex flex-col h-96 sm:flex-row">
      <div className="basis-1/2 ">
        {/* text section */}
        <div className="text-h1">
          Hi, I am Nabeel.
          <br /> Professional Developer, Let's Get To Work
        </div>
      </div>
      {/* <div className="basis-1/2 bg-slate-600 h-full ">I Am half right section</div> */}
    </div>
  );
};

export default Hero;
