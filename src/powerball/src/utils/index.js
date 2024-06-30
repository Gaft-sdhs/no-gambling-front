export const getRandomMultiplier = () => Math.random() * (2 - 1) + 1;

export const formatTime = (time) => {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};
