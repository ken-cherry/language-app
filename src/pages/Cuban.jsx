import React from "react";

const Cuban = () => {
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img
            src="../images/cubanFlag.jpg"
            alt="cuban flag"
            className="flag-page"
          />
        </div>
        <div className="image-center">
          <h2>Mesa</h2>
          <img src="../images/table.jpg" alt="table" className="image" />
        </div>
        <div className="button-container">
          <button className="btn">Prev</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </>
  );
};

export default Cuban;
