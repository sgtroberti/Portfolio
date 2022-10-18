import Background from "../components/Background";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Works from "../components/Works";
import TechLogos from "../content/TechLogos";

const Home = () => {
  return (
    <Background>
      <Navbar />
      <Welcome />
      <Carousel imagesVector={TechLogos} />
      <Works />
    </Background>
  );
};

export default Home;
