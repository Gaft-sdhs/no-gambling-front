import React from 'react';
import './App.css';
import LeftBox from './LeftBox';

function App() {
  const handleClick = (symbol) => {
    alert('Button ' + symbol + ' clicked!');
  };

  return (
    <div className="container">
      <div className="timer">다음 뽑기 남은 시간 <span>00 : 00</span></div>
      <div className="main-content">
        <LeftBox />
        <div className="right-column">
          <div className="circle">n</div>
          <div className="circle">①</div>
          <div className="circle">②</div>
          <div className="circle">③</div>
        </div>
      </div>
      <div className="bottom-row">
        <button className="bottom-box" onClick={() => handleClick('+')}>+</button>
        <button className="bottom-box" onClick={() => handleClick('-')}>-</button>
        <button className="bottom-box" onClick={() => handleClick('=')}>=</button>
        <button className="bottom-box disabled" disabled>?</button>
      </div>
    </div>
  );
}

export default App;