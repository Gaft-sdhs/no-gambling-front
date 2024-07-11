// WarningModal.js
import React from 'react';

const WarningModal = ({ showModal }) => {
  return (
    <div className={`warning-modal ${showModal ? 'show' : 'hide'}`}>
      <div className="warning-modal-content">
        <h2>경고</h2>
        <p>사용자의 자산이 0이 되었습니다.</p>
      </div>
    </div>
  );
};

export default WarningModal;
