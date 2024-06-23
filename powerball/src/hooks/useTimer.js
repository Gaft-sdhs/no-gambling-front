import { useState, useEffect } from 'react';

const useTimer = (initialTime, callback) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        callback();
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [callback]);

  return [time, setTime];
};

export default useTimer;
