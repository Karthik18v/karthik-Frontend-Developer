import Navbar from "../Navbar";
import "./index.css";
import Main from "../Main";
import Features from "../Features";
import About from "../About";
import Tokenomics from "../Tokenomics";
import RoadMap from "../RoadMap";
import Help from "../Help";
import Explore from "../Explore";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Main/>
      <Features/>   
      <About/>
      <Tokenomics/>
      <RoadMap />
      <Help />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
