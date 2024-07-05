// src/components/Modal/Modal.jsx
import React from 'react';
import "./Modal.css";

const Modal = ({ message }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
