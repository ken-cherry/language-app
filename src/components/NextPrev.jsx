import React from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
const NextPrev = () => {
  return (
    <>
      <FaChevronCircleLeft onClick={prev} className="buttons-select" />
      <FaChevronCircleRight onClick={next} className="buttons-select" />
    </>
  );
};

export default NextPrev;
