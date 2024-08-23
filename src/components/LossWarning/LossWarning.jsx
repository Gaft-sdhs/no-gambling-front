import React, { useState } from "react";
import "./LossWarning.css";

const LossWarning = () => {
  const [showWarning, setShowWarning] = useState(true); // 항상 보이도록 초기 설정

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <div className={`loss-warning ${showWarning ? "show" : ""}`}>
      <span id="close" onClick={handleCloseWarning}>
        &times;
      </span>
    </div>
  );
};

export default LossWarning;
