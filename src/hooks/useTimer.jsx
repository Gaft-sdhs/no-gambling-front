import { useState, useEffect } from 'react';

// useTimer 훅 정의
const useTimer = (initialTime, callback) => {
  // 초기 시간 설정
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // 1초 간격으로 타이머 감소
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) return prev - 1; // 시간이 남아있으면 1씩 감소
        clearInterval(interval); // 시간이 다 되면 인터벌 종료
        callback(); // 콜백 함수 호출
        return 0; // 시간 0으로 설정
      });
    }, 1000);
    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [callback]);

  // 현재 시간과 시간 설정 함수 반환
  return [time, setTime];
};

export default useTimer;
