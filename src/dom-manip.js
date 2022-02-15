import targetIcon from './img/target.svg';
import fireIcon from './img/fire.svg';
import rotateIcon from './img/rotate.svg';
import clearIcon from './img/clear.png';
import board from './factories/gameboard-factory';

const rotateImg = document.querySelector('.rotate-ship');
rotateImg.src = rotateIcon;
rotateImg.addEventListener('click', () => {
  rotateImg.classList.toggle('horizontal');
});
const clearImg = document.querySelector('.clear-all');
clearImg.src = clearIcon;

const choiceModal = document.querySelector('#ship-choice-modal');

function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}
const choiceBoard = board();
const shipsLeftCount = document.querySelector('.ships-left__value');

function renderChoiceBoard(choiceBoard) {
  const boardNode = document.querySelector('.choice-board');
  const currentCells = boardNode.querySelectorAll('.cell');
  if (currentCells.length > 0) {
    currentCells.forEach((oldCell) => {
      oldCell.remove();
    });
  }
  for (let i = 0; i < choiceBoard.body.length; i += 1) {
    const cell = document.createElement('div');
    cell.setAttribute('data-cell', i);
    cell.classList.add('cell');
    if (choiceBoard.body[i].hasShip === true) {
      cell.classList.add('has-ship');
    }
    boardNode.appendChild(cell);
  }
  const newCells = boardNode.querySelectorAll('.cell');
  newCells.forEach((cell) => {
    if (Number(shipsLeftCount.textContent) === 0) { return; }
    cell.addEventListener('mouseover', () => {
      let cellIndex = cell.getAttribute('data-cell');
      const ship = choiceBoard.getNextShip();
      if (!ship) { return; }
      if (rotateImg.classList.contains('horizontal')) {
        ship.setHorizontally();
      } else {
        ship.setVertically();
      }
      for (let j = 0; j < ship.body.length; j += 1) {
        const cellNode = boardNode.querySelector(`[data-cell = '${cellIndex}']`);
        if (!cellNode) {
          return;
        }
        cellNode.classList.add('ship-show');
        if (ship.isHorizontal() === true) {
          cellIndex = Number(cellIndex) + 1;
          if (cellIndex === 10 || cellIndex === 20 || cellIndex === 30
            || cellIndex === 40 || cellIndex === 50 || cellIndex === 60
            || cellIndex === 70 || cellIndex === 80 || cellIndex === 90) {
            return;
          }
        } else {
          cellIndex = Number(cellIndex) + 10;
        }
      }
    });
    cell.addEventListener('mouseout', () => {
      let cellIndex = cell.getAttribute('data-cell');
      const ship = choiceBoard.getNextShip();
      if (!ship) { return; }
      if (rotateImg.classList.contains('horizontal')) {
        ship.setHorizontally();
      } else {
        ship.setVertically();
      }
      for (let j = 0; j < ship.body.length; j += 1) {
        const cellNode = boardNode.querySelector(`[data-cell = '${cellIndex}']`);
        if (!cellNode) {
          return;
        }
        cellNode.classList.remove('ship-show');
        if (ship.isHorizontal() === true) {
          cellIndex = Number(cellIndex) + 1;
          if (cellIndex === 10 || cellIndex === 20 || cellIndex === 30
            || cellIndex === 40 || cellIndex === 50 || cellIndex === 60
            || cellIndex === 70 || cellIndex === 80 || cellIndex === 90) {
            return;
          }
        } else {
          cellIndex = Number(cellIndex) + 10;
        }
      }
    });
    cell.addEventListener('click', () => {
      const cellIndex = Number(cell.getAttribute('data-cell'));
      const ship = choiceBoard.getNextShip();
      if (!ship) { return; }
      if (rotateImg.classList.contains('horizontal')) {
        ship.setHorizontally();
      } else {
        ship.setVertically();
      }
      if (choiceBoard.isPlaceable(cellIndex, ship) === true) {
        choiceBoard.placeShip(cellIndex, ship);
        renderChoiceBoard(choiceBoard);
        choiceBoard.removeShipFromArray();
        shipsLeftCount.textContent = Number(shipsLeftCount.textContent) - 1;
      }
    });
  });
}
renderChoiceBoard(choiceBoard);

const randomChoiceBtn = document.querySelector('.random-btn');
randomChoiceBtn.addEventListener('click', () => {
  choiceBoard.placeShipsRandomly();
  shipsLeftCount.textContent = 0;
  renderChoiceBoard(choiceBoard);
});

const cleaAllBtn = document.querySelector('.clear-all');
cleaAllBtn.addEventListener('click', () => {
  shipsLeftCount.textContent = 7;
  choiceBoard.resetBoard();
  renderChoiceBoard(choiceBoard);
});

const confirmBtn = document.querySelector('.btn.confirm');
function initialEvent() {
  init(choiceBoard);
  confirmBtn.addEventListener('click', () => {
    if (Number(shipsLeftCount.textContent) !== 0) {
      return;
    }
    choiceBoard.resetBoardHits();
    init(choiceBoard);
    choiceModal.classList.add('hidden');
  });
}

function renderBoard(board, boardId) {
  const boardNode = document.querySelector(`#board-${boardId}`);
  const currentCells = boardNode.querySelectorAll('.cell');
  currentCells.forEach((cell) => {
    cell.remove();
  });
  for (let i = 0; i < board.body.length; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-cell-index', i);
    if (board.showShips === true) {
      if (board.body[i].hasShip === true) {
        cell.classList.add('has-ship');
      }
    }
    if (board.body[i].isShot === true) {
      if (board.body[i].hasShip === true) {
        cell.classList.add('has-ship');
      }
      cell.classList.add('is-shot');
      const fireImg = document.createElement('img');
      fireImg.src = fireIcon;
      fireImg.classList.add('fire-img');
      cell.appendChild(fireImg);
    }
    boardNode.appendChild(cell);
  }
}
function addHoverTargetEvent(boardId) {
  const boardNode = document.querySelector(`#board-${boardId}`);
  const cells = boardNode.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (cell.querySelector('.fire-img')) {
      return;
    }
    cell.addEventListener('mouseover', (e) => {
      if (!e.target.classList.contains('has-target-img')) {
        const targetImg = document.createElement('img');
        targetImg.src = targetIcon;
        targetImg.alt = 'Target image';
        targetImg.classList.add('target-img');
        e.target.appendChild(targetImg);
        e.target.classList.add('has-target-img');
      }
    });
    cell.addEventListener('mouseleave', (e) => {
      const targetImg = e.target.querySelector('.target-img');
      if (!targetImg) {
        return;
      }
      targetImg.remove();
      e.target.classList.remove('has-target-img');
    });
  });
}
function someOneWon(boardId) {
  const winnerModal = document.querySelector('#winner-modal');
  const winneerHeader = winnerModal.querySelector('.winner-header');
  winnerModal.classList.add('show');
  if (boardId === 1) {
    winneerHeader.textContent = 'You Lost';
  } else {
    winneerHeader.textContent = '🎉 You Won! 🎉';
  }
  const playAgainBtn = document.querySelector('.play-again-btn');
  playAgainBtn.addEventListener('click', () => {
    winnerModal.classList.remove('show');
    choiceModal.classList.remove('hidden');
  });
}

function clickAtackEvent(boardId, enemyBoard, ourBoard) {
  const boardNode = document.querySelector(`#board-${boardId}`);
  const cells = boardNode.querySelectorAll('div.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('is-shot')) {
        return;
      }
      const cellIndex = e.currentTarget.getAttribute('data-cell-index');
      enemyBoard.receiveAttack(cellIndex);
      renderBoard(enemyBoard, boardId);
      if (enemyBoard.areAllShipsSunk() === true) {
        someOneWon(boardId);
      }
      if (enemyBoard.hasShip(cellIndex)) {
        clickAtackEvent(boardId, enemyBoard, ourBoard);
        if (boardId === 1) {
          setTimeout(() => {
            const playerBoard = document.querySelector('#board-1');
            let randomTarget = getRandomNumber(100);
            while (enemyBoard.body[randomTarget].isShot === true) {
              randomTarget = getRandomNumber(100);
            }
            playerBoard.querySelector(`[data-cell-index = '${randomTarget}']`).click();
          }, 300);
        }
        addHoverTargetEvent(2);
        return;
      }
      if (boardId === 2) {
        setTimeout(() => {
          clickAtackEvent(1, ourBoard, enemyBoard);
          const playerBoard = document.querySelector('#board-1');
          let randomTarget = getRandomNumber(100);
          while (ourBoard.body[randomTarget].isShot === true) {
            randomTarget = getRandomNumber(100);
          }
          playerBoard.querySelector(`[data-cell-index = '${randomTarget}']`).click();
        }, 300);
      } else {
        setTimeout(() => {
          clickAtackEvent(2, ourBoard, enemyBoard);
        }, 200);
      }
      addHoverTargetEvent(2);
    });
  });
}
function init(playerBoard) {
  const playerBoardObj = playerBoard;
  playerBoardObj.showShips = true;
  const robotBoard = board();
  robotBoard.placeShipsRandomly();
  renderBoard(playerBoardObj, 1);
  renderBoard(robotBoard, 2);
  addHoverTargetEvent(2);
  clickAtackEvent(2, robotBoard, playerBoardObj);
}

export {
  renderBoard,
  addHoverTargetEvent,
  clickAtackEvent,
  initialEvent,
};
