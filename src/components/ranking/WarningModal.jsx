// 사용자 자산이 0이 되었을 때 경고를 표시하는 모달 컴포넌트

import React from 'react';

// WarningModal 컴포넌트: 사용자 자산이 0일 때 경고 모달을 표시
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