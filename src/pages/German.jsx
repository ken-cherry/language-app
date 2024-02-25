import React from "react";

const German = () => {
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img
            src="../src/assets/images/germanFlag.jpg"
            alt="german flag"
            className="flag-page"
          />
        </div>
        <div className="image-center">
          <h2>Tisch</h2>
          <img
            src="../src/assets/images/table.jpg"
            alt="table"
            className="image"
          />
        </div>
        <div className="button-container">
          <button className="btn">Next</button>
          <button className="btn">Prev</button>
        </div>
      </div>
    </>
  );
};

export default German;
