import React from "react";
import { languages } from "../data";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-section">
          <div className="nav-link">
            {languages.map((item) => {
              const { language, flag, alt } = item;
              return (
                <>
                  <nav key={nanoid()}>
                    <Link to={`/${language}`}>
                      <img src={flag} alt={alt} className="flag" />
                    </Link>
                  </nav>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
