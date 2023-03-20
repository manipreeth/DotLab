import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Domains from "../Domains";
import Tokenomics from "../Tokenomics";
import Roadmap from "../Roadmap";
import FAQs from "../Faqs";

function Navlinks() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="domains" element={<Domains />} />
        <Route path="tokenomics" element={<Tokenomics />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default Navlinks;
