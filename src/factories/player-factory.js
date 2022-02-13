const player = function playerFactory() {
  const playerShoots = [];
  function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }
  return {
    playerShoots,
    getRandomNumber,
  };
};
export default player;
