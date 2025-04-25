import React from "react";
import "../styles/Footer.css";
import * as pic from "../pic";

const Footer = () => {
  return (
    <div className="footer">
      <p>集團企業</p>
      <div className="pic">
        <a
          target="blank"
          href="https://bbporoking1995.github.io/portfolio/hotel/index.html"
        >
          <img src={pic.hotelLogo} alt="hotelLogo" />
        </a>
      </div>
      <p>Lulu Hsu 2025</p>
    </div>
  );
};

export default Footer;
