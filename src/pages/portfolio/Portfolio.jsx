import Header from "../../components/Header.jsx";
import PortfolioHero from "./PortfolioHero.jsx";
import Showcase from "./Showcase.jsx";
import Footer from "../../components/Footer";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main className="bg-body">
        <PortfolioHero />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
