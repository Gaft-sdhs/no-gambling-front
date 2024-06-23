export const updateBars = () => {
  const value1 = Math.random() * 50;
  const value2 = Math.random() * (50 - value1);
  const value3 = 100 - value1 - value2;
  return [value1, value2, value3];
};
