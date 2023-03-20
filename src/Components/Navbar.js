import React from "react";
import DotLablogo from "../images/DotlabLogo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="d-flex navbar">
      <div>
        <img src={DotLablogo} alt="Dotlab" />
      </div>
      <div className="navRoutes">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/domains">Domains</NavLink>
          </li>
          <li>
            <NavLink to="/tokenomics">Tokenomics</NavLink>
          </li>
          <li>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button>Launch APP</button>
      </div>
    </div>
  );
}

export default NavBar;
