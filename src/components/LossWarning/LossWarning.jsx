import React, { useState } from "react";
import "./LossWarning.css";

const LossWarning = () => {
  const [showWarning, setShowWarning] = useState(true); // 항상 보이도록 초기 설정

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <div className={`loss-warning ${showWarning ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleCloseWarning}>&times;</span>
        <p>소중한 자산을 잃으셨습니다. 조심하세요!</p>
      </div>
    </div>
  );
};

export default LossWarning;
