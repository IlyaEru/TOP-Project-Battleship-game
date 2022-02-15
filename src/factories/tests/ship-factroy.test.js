/* eslint-env jest */
import ship from '../ship-factroy';

test('Ship with length of 4 should have 4 health', () => {
  const newShip = ship(4);
  expect(newShip.body).toHaveLength(4);
});

test('should be hit', () => {
  const newShip = ship(4);
  newShip.hit(3);
  expect(newShip.body[3]).toBe('x');
});

test('should be sunk', () => {
  const newShip = ship(2);
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.isSunk()).toBe(true);
});

test('should not be sunk', () => {
  const newShip = ship(2);
  newShip.hit(0);
  expect(newShip.isSunk()).toBe(false);
});

test('should be horizontal', () => {
  const newShip = ship(2);
  newShip.setHorizontally();
  expect(newShip.isHorizontal()).toBe(true);
});

test('should be vertical', () => {
  const newShip = ship(2);
  newShip.setHorizontally();
  newShip.setVertically();
  expect(newShip.isHorizontal()).toBe(false);
});

test('should have ship location', () => {
  const newShip = ship(2);
  newShip.setLocation([1, 2]);
  expect(newShip.getLocation()).toEqual([1, 2]);
});
