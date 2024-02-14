import React from "react";

const English = () => {
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img
            src="../src/assets/images/americanFlag.jpg"
            alt="american flag"
          />
        </div>
        <div className="image-center">
          <h2>Table</h2>
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

export default English;
