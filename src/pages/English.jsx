import React from "react";

const English = () => {
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img
            src="../images/americanFlag.jpg"
            alt="american flag"
            className="flag-page"
          />
        </div>
        <div className="image-center">
          <h2>Table</h2>
          <img src="../images/table.jpg" alt="table" className="image" />
        </div>
        <div className="button-container">
          <button className="btn">Next</button>
          <button className="btn">Prev</button>
        </div>
      </div>
    </>
  );
};

export default English;
