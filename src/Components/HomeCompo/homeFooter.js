import React from "react";
import FooterIcon1 from "../../images/FooterIcon-1.png";
import FooterIcon2 from "../../images/FooterIcon-2.png";
import FooterIcon3 from "../../images/FooterIcon-3.png";

function homeFooter() {
  return (
    <div className="homeFooter">
      <div className="div1">POWERED BY</div>
      <div className="d-flex div2">
        <div className="d-flex hfi">
          <img src={FooterIcon1} alt="Logo" />
          <span>&nbsp;SushiSwap</span>
        </div>
        <div className="d-flex hfi">
          <img src={FooterIcon2} alt="Logo" />
          <span className="arbitrum">&nbsp;ARBITRUM</span>
        </div>
        <div className="d-flex hfi">
          <img src={FooterIcon3} alt="Logo" />
          <span>&nbsp;OpenSea</span>
        </div>
      </div>
    </div>
  );
}

export default homeFooter;
