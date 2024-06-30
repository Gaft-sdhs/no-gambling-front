import { useEffect } from 'react';

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
