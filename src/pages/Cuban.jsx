import React from "react";

const Cuban = () => {
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img src="../src/assets/images/cubanFlag.jpg" alt="cuban flag" />
        </div>
      </div>
      <div className="image-container">
        <div className="image-center">
          <h2>Mesa</h2>
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

export default Cuban;
