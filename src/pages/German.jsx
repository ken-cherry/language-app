import React from "react";

const German = () => {
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img src="../src/assets/images/germanFlag.jpg" alt="german flag" />
        </div>
      </div>
      <div className="image-container">
        <div className="image-center">
          <h2>Tisch</h2>
          <img
            src="../src/assets/images/table.jpg"
            alt="table"
            className="image"
          />
        </div>
        <button className="btn">Next</button>
        <button className="btn">Prev</button>
      </div>
    </>
  );
};

export default German;
