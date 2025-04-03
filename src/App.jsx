import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./pages/homePage/Home";
import About from "./pages/aboutUsPage/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
