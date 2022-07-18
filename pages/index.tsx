import { FC } from "react";
import Hero from "../src/components/Hero";
import Quote from "../src/components/Quote";
import Services from "../src/components/Services";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Services />
    </div>
  );
};
export default Home;
