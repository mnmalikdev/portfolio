import Hero from "../src/components/Hero";
import Portfolio from "../src/components/Portfolio";
import Quote from "../src/components/Quote";
import Services from "../src/components/Services";
import Skills from "../src/components/Skills";
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Quote />
      <Services />
      <Skills />
      <Portfolio />
    </div>
  );
};
export default Home;
