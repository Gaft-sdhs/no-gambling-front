import React, { useState } from "react";
import "./LossWarning.css";

const LossWarning = () => {
  const [showWarning, setShowWarning] = useState(true); // 항상 보이도록 초기 설정

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <div className={`loss-warning ${showWarning ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={handleCloseWarning}>
          &times;
        </span>
        <p>
          현재 접속하신 사이트는<br></br>
          용산경찰 분들과 함께
          <br></br>하는 도박 방지 캠페인입니다.
        </p>
      </div>
    </div>
  );
};

export default LossWarning;
