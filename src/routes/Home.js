import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Works from "../components/Works";

const Home = () => {
  return (
    <Background>
      <Navbar />
      <Welcome />
      <Works />
    </Background>
  );
};

export default Home;
