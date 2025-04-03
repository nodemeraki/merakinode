import Header from "../../components/Header.jsx";
import AboutHero from "./AboutHero.jsx";
import Principles from "./Principles.jsx";
import Team from "./Team.jsx";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutHero />
        <Principles />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default About;
