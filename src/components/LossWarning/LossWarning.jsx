// src/components/LossWarning/LossWarning.jsx

import React from 'react';
import './LossWarning.css';

const LossWarning = ({ onClose }) => {
  return (
    <div className="loss-warning">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>충동 적인 행동으로 소중한<br></br>
            자산을 잃고있습다.
        </p>
      </div>
    </div>
  );
};

export default LossWarning;
