import React from "react";
import { languages } from "../data";

const Landing = () => {
  return (
    <>
      <div className="landing-page">
        <img
          src="../images/charlieBoat.jpg"
          alt="Image of Charlie"
          className="charlie"
        />
        <h5>Select the flag of the language you want to practice.</h5>
      </div>
    </>
  );
};

export default Landing;
