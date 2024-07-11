// 메시지를 표시하는 모달 컴포넌트

import React from 'react';
import "./Modal.css";

// Modal 컴포넌트: 주어진 메시지를 표시하는 모달 창
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