const ship = function shipFactory(length) {
  const body = [];
  let horizontal = false;
  for (let i = 0; i < length; i += 1) {
    body.push('');
  }
  function hit(hitIndex) {
    body[hitIndex] = 'x';
  }
  function isSunk() {
    if (body.includes('') === false) {
      return true;
    }
    return false;
  }
  function setHorizontally() {
    horizontal = true;
  }
  function setVertically() {
    horizontal = false;
  }
  function isHorizontal() {
    return horizontal;
  }
  return {
    body,
    hit,
    isSunk,
    setHorizontally,
    isHorizontal,
    setVertically,
  };
};
export default ship;
