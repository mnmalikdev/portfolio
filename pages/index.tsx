import { FC } from "react";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/navbar";
const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};
export default Home;
