import React from "react";
import ArrowLogo from "../images/up-downArrow.png";
import TokenLogo from "../images/DotLab-Chem.png";
import PersonLogo from "../images/PersonLogo.png";
import HomeForm from "./HomeCompo/homeForm";
import HomeFooter from "./HomeCompo/homeFooter";

function Home() {
  return (
    <>
      <div className="home">
        <img src={ArrowLogo} alt="ArrowLogo" className="arrowLogo" />
        <p className="pt1">Unlock the Potential of</p>
        <div className="TokenDiv">
          <h1 className="ddomain">Decentralized Domains</h1>
          <p className="pt2">
            The easiest and most secure way to manage
            <br /> web3 domains on the
            <span> Arbitrum network</span>
          </p>
          <img src={TokenLogo} alt="Token Logo" className="tokenLogo" />
          <img src={PersonLogo} alt="Person Logo" className="personLogo" />
        </div>
      </div>
      {/* Form - Input fields */}
      <HomeForm />

      {/* Home Footer */}
      <HomeFooter />
    </>
  );
}

export default Home;
