export const getRandomPosition = () => {
  const x = Math.floor(Math.random() * (100 - 1) * 1);
  const y = Math.floor(Math.random() * (100 - 1) * 1);
  return { x, y };
};
