import gameBoardFactory from '../logic-modules/gameBoardFactory';

describe('Testing the gameBoard object', () => {
  const boardLen = 10;
  const board = gameBoardFactory(boardLen);

  test('Board starts with empty markedCells array', () => {
    expect(board.getMarkedCells()).toStrictEqual([]);
  });

  test('Board registers indexes of marked cells', () => {
    board.receiveAttack('5');
    expect(board.getMarkedCells()).toContain('5');
  });

  test('Board fails to place ships from horizontal edge to out of bounds', () => {
    expect(() => board.placeShip(9, false, 3)).toThrow('Invalid Position');
    expect(() => board.placeShip(78, false, 3)).toThrow('Invalid Position');
    expect(() => board.placeShip(99, false, 3)).toThrow('Invalid Position');
  });

  test('Board fails to place ships from vertical edge to out of bounds', () => {
    expect(() => board.placeShip(90, true, 3)).toThrow('Invalid Position');
    expect(() => board.placeShip(99, true, 3)).toThrow('Invalid Position');
  });

  test('Board suceeds to place ship within bounds', () => {
    const origin = 7;
    const shipLen = 3;
    const orientation = true;
    expect(board.placeShip(origin, orientation, shipLen)).toBeTruthy();
  });

  board.placeShip(4, true, 3);
  test('Board fails to place ship on top of ship', () => {
    expect(() => board.placeShip(4, true, 3)).toThrow('Spot Taken');
  });

  test('Attack on target hits ship', () => {
    expect(board.receiveAttack('14')).toBeTruthy();
  });

  test('Board recognizes if all ships have sunk', () => {
    ['4', '14', '24', '7', '17', '27'].forEach((idx) => {
      board.receiveAttack(idx);
    });
    expect(board.allShipsSunk()).toBeTruthy();
  });
});
