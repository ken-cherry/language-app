import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-btn">
      <Link to="/">
        <button className="btn home-btn">Home </button>
      </Link>
    </div>
  );
};

export default Footer;
