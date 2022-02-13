const board = function boardFactory() {
  const body = [];
  for (let i = 0; i < 100; i += 1) {
    body.push({ isShot: false, hasShip: false });
  }
  function receiveAttack(shotIndex) {
    body[shotIndex].isShot = true;
  }
  function hasShip(shotIndex) {
    return body[shotIndex].hasShip;
  }
  function allShipsSunk() {
    let shipsSunk = true;
    body.forEach((cell) => {
      if (cell.hasShip === true && cell.isShot === false) {
        shipsSunk = false;
      }
    });
    return shipsSunk;
  }
  function placeShip(startIndex, ship) {
    const shipLocation = [];
    let index = startIndex;
    if (ship.isHorizontal() === false) {
      for (let i = 0; i < ship.body.length; i += 1) {
        shipLocation.push(index);
        body[index].hasShip = true;
        index += 10;
      }
    } else {
      for (let i = 0; i < ship.body.length; i += 1) {
        shipLocation.push(index);
        body[index].hasShip = true;
        index += 1;
      }
    }
    return shipLocation;
  }
  return {
    body,
    receiveAttack,
    placeShip,
    hasShip,
    allShipsSunk,
  };
};
export default board;
