import React from "react";
import { useState } from "react";
import { words } from "../data";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const German = () => {
  const [index, setIndex] = useState(0);
  const { image, german } = words[index];

  const checkNumber = (number) => {
    if (number > words.length - 1) {
      return 0;
    }
    if (number < 0) {
      return words.length - 1;
    }
    return number;
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    console.log("next");
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    console.log("prev");
  };
  return (
    <>
      <div className="section-container">
        <div className="flag-center">
          <img
            src="../images/germanFlag.jpg"
            alt="german flag"
            className="flag-page"
          />
        </div>
        <div className="image-center">
          <h2>{german}</h2>
          <img src={image} alt="table" className="image" />
        </div>
        <div className="button-container">
          <FaChevronCircleLeft onClick={prev} className="buttons-select" />
          <FaChevronCircleRight onClick={next} className="buttons-select" />
        </div>
      </div>
    </>
  );
};

export default German;
