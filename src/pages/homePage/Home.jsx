import Header from "../../components/Header";
import HomeHero from "./HomeHero.jsx";
import Trust from "./Trust.jsx";
import Numerals from "./Numerals.jsx";
import WorkDone from "./WorkDone.jsx";
import HowWeWork from "./HowWeWork.jsx";
import Clients from "./Clients.jsx";
import SubscribeBox from "./SubscribeBox.jsx";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeHero />
        <Trust />
        <Numerals />
        <WorkDone />
        <HowWeWork />
        <Clients />
        <SubscribeBox />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
