import React from "react";
import { languages } from "../data";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-section">
          {languages.map((item) => {
            const { id, language, image, alt } = item;
            return <img src={image} alt={alt} className="image" key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
