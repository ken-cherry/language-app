import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-btn">
      <button className="btn home-btn">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Footer;
