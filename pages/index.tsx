import { FC } from "react";
import Hero from "../src/components/Hero";
import Quote from "../src/components/Quote";
import Services from "../src/components/Services";
import Skills from "../src/components/Skills";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Services />
      <Skills />
    </div>
  );
};
export default Home;
