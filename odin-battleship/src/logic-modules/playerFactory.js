import gameBoardFactory from './gameBoardFactory.js';

export default function playerFactory(boardLen) {
  const _board = gameBoardFactory(boardLen);

  function deployShip(index, orientation, size) {
    try {
      _board.placeShip(index, orientation, size);
    } catch (err) {
      throw err;
    }
  }

  function receiveAttack(index) {
    const truthy = _board.receiveAttack(index);
    if (truthy === 'sunk') {
      return true;
    }
    return truthy ? 'hit' : 'miss';
  }

  function allShipsSunk() {
    return _board.allShipsSunk();
  }

  function placeRandomShip(size, boardCellNumber = 100) {
    return _board.placeRandomShip(size, boardCellNumber);
  }

  function getMarkedCells() {
    return _board.getMarkedCells();
  }

  function setRandomBoard() {
    for (let i = 2; i < 6; i++) {
      placeRandomShip(i)
    }
  }

  function peekAtShips () {
    return _board.peekAtShips();
  }

  function peekAtShipIndexes () {
    return _board.getShipIndexes();
  }

  function getSunkShips() {
    return _board.getSunkShips();
  }

  return {
    deployShip,
    receiveAttack,
    allShipsSunk,
    placeRandomShip,
    getMarkedCells,
    setRandomBoard,
    peekAtShips,
    peekAtShipIndexes,
    getSunkShips
  };
}
