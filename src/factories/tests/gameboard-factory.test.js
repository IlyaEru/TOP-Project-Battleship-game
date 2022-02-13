/* eslint-env jest */
import board from '../gameboard-factory';
import ship from '../ship-factroy';

test('board should have length of 100', () => {
  const newBoard = board();
  expect(newBoard.body).toHaveLength(100);
});

test('cell should be shot', () => {
  const newBoard = board();
  newBoard.receiveAttack(4);
  expect(newBoard.body[4].isShot).toBe(true);
});

test('should return array of the ship location', () => {
  const newBoard = board();
  const newShip = ship(3);
  expect(newBoard.placeShip(2, newShip)).toEqual([2, 12, 22]);
});

test('should return array of the Horizontal ship location', () => {
  const newBoard = board();
  const newShip = ship(3);
  newShip.setHorizontally();
  expect(newBoard.placeShip(2, newShip)).toEqual([2, 3, 4]);
});

test('cell should have ship', () => {
  const newBoard = board();
  const newShip = ship(3);
  const shipArray = newBoard.placeShip(2, newShip);
  expect(newBoard.body[shipArray[0]].hasShip).toBe(true);
});

test('cell shot should return true if it has a ship', () => {
  const newBoard = board();
  const newShip = ship(3);
  const shipArray = newBoard.placeShip(2, newShip);
  expect(newBoard.hasShip(shipArray[0])).toBe(true);
});

test('should return true if all the ships have sunk', () => {
  const newBoard = board();
  const newShip = ship(3);
  const shipArray = newBoard.placeShip(2, newShip);
  shipArray.map((shipLocation) => newBoard.receiveAttack(shipLocation));
  expect(newBoard.allShipsSunk()).toBe(true);
});

test('should return false if all the ships have not sunk', () => {
  const newBoard = board();
  const newShip = ship(3);
  const shipArray = newBoard.placeShip(2, newShip);
  newBoard.receiveAttack(shipArray[0]);
  expect(newBoard.allShipsSunk()).toBe(false);
});
