import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/homePage/Home.jsx";
import About from "./pages/aboutUsPage/About.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import CaseStudy from "./pages/projectCaseStudy/CaseStudy.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="project-case-study/:id" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
};

export default App;
