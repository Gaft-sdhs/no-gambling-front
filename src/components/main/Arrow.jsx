import React from "react";
import "./css/arrow.css";

const Arrow = ({ id, styleValue, onClick }) => {
  return (
    <div id={id} className="arrow" style={styleValue} onClick={onClick}>
      <span className="top"></span>
      <span className="bottom"></span>
    </div>
  );
};

export default Arrow;
