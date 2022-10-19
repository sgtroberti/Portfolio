import About from "../components/About";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Works from "../components/Works";
import { TechLogos } from "../content/Logos";

const Home = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Carousel imagesVector={TechLogos} />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
