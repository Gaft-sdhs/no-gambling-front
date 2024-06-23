const Timer = ({ time }) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return (
    <div className="timer">
      타이머: <span style={{ color: time <= 60 ? '#FF4136' : 'white', animation: time <= 60 ? 'blink 1s step-start infinite' : 'none' }}>{minutes}:{seconds}</span>
    </div>
  );
};

export default Timer;
