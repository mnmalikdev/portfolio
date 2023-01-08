import { FC, useRef } from "react";
import About from "../src/components/About";
import Hero from "../src/components/Hero";
import Portfolio from "../src/components/Portfolio";
import Quote from "../src/components/Quote";
import Services from "../src/components/Services";
import Skills from "../src/components/Skills";

const Home: FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Hero />
      <Quote />
      <About data-ref={aboutRef} />
      <Services />
      <Skills />
      <Portfolio />
    </>
  );
};
export default Home;
