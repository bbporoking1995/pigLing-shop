import React from "react";
import "../styles/Footer.css";
import * as pic from "../pic";

const Footer = () => {
  const ExternaLink = ({ href, children, ...rest }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
  return (
    <div className="footer">
      <p>集團企業</p>
      <div className="pic">
        <ExternaLink href="https://bbporoking1995.github.io/portfolio/hotel/index.html">
          <img src={pic.hotelLogo} alt="hotelLogo" />
        </ExternaLink>
      </div>
      <p>Lulu Hsu 2025</p>
    </div>
  );
};

export default Footer;
