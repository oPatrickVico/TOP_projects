import { range } from '../zonks.js';
import shipFactory from './shipFactory.js';

export default function gameBoardFactory(widthLen) {
  const _markedCells = [];
  const _allShips = [];
  const _sunkShips = [];
  const _shipIndexes = {};

  function getMarkedCells() {
    return _markedCells;
  }

  function receiveAttack(index) {
    index = index.toString();
    _markedCells.push(index);
    const shipExists = Object.keys(_shipIndexes).includes(index);
    const isHit = shipExists ? _shipIndexes[index].hit(index) : false;
    if (shipExists && _shipIndexes[index].isSunk()) {
      _sunkShips.push(_shipIndexes[index]);
      return 'sunk';
    }
    return isHit;
  }

  function _horizontalValid(range) {
    const ln = Math.trunc(range[0] / widthLen);
    return range.reduce(
      (curr, next) => Math.trunc(next / widthLen) === ln && curr,
      true
    );
  }

  function _verticalValid(range) {
    return range.reduce(
      (curr, next) => Math.trunc(next / widthLen) < widthLen && curr,
      true
    );
  }

  function _spotTaken(range) {
    const anyTaken = range.filter((elem) =>
      Object.keys(_shipIndexes).includes(elem.toString())
    );
    return anyTaken.length;
  }

  function _appendShip(origin, orientation, shipLen) {
    const ship = shipFactory(origin, orientation, shipLen, widthLen);
    Object.assign(
      _shipIndexes,
      Object.fromEntries(ship.getBoundaries().map((idx) => [idx, ship]))
    );
    _allShips.push(ship);
    return true;
  }

  function placeShip(origin, orientation, shipLen) {
    if (
      origin === undefined ||
      orientation === undefined ||
      shipLen === undefined
    )
      throw new Error('Invalid Input');
    const shipSpan = range(origin, shipLen, orientation * widthLen);
    const valid = orientation
      ? _verticalValid(shipSpan)
      : _horizontalValid(shipSpan);
    if (!valid) throw new Error('Invalid Position');
    if (_spotTaken(shipSpan)) throw new Error('Spot Taken');
    return _appendShip(origin, orientation, shipLen);
  }

  function allShipsSunk() {
    return _allShips.reduce((curr, next) => next.isSunk() && curr, true);
  }

  function placeRandomShip(size, boardCellNumber = 100) {
    let origin,
      orientation = true,
      shipSpan,
      valid = false;
    do {
      orientation = Math.random() >= 0.5;
      origin = Math.trunc(Math.random() * boardCellNumber);
      shipSpan = range(origin, size, orientation * widthLen);
      valid = orientation
        ? _verticalValid(shipSpan)
        : _horizontalValid(shipSpan);
    } while (!valid || _spotTaken(shipSpan));
    _appendShip(origin, orientation, size);
    return `empty spot at ${shipSpan}`;
  }

  function peekAtShips() {
    return _allShips;
  }

  function getShipIndexes() {
    return Object.keys(_shipIndexes);
  }

  function getSunkShips() {
    return _sunkShips;
  }

  return {
    getMarkedCells,
    receiveAttack,
    placeShip,
    allShipsSunk,
    placeRandomShip,
    peekAtShips,
    getShipIndexes,
    getSunkShips
  };
}
