// 게임의 막대 상태를 업데이트하는 커스텀 훅

import { useEffect } from 'react';

// useBars 훅: 주어진 게임 객체의 막대 상태를 1초마다 업데이트
const useBars = (setBars, game) => {
  useEffect(() => {
    const interval = setInterval(() => {
      game.setBars();
      setBars([...game.bars]);
    }, 1000);

    return () => clearInterval(interval);
  }, [game, setBars]);
};

export default useBars;