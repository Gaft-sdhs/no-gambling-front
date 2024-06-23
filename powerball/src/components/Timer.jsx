import { formatTime } from '../utils';

const Timer = ({ time }) => {
  return (
    <div className="timer">
      타이머: <span style={{ color: time <= 60 ? '#FF4136' : 'white', animation: time <= 60 ? 'blink 1s step-start infinite' : 'none' }}>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;
