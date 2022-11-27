import playerFactory from '../logic-modules/playerFactory';

describe('Test gameplay features', () => {
  const p1 = playerFactory(10);
  test('Put ships randomly successfully', () => {
    for (let i = 2; i < 6; i++) {
      expect(p1.placeRandomShip(i)).toMatch(/empty spot at/);
      expect(p1.placeRandomShip(i)).toMatch(/empty spot at/);
    }
  });

  const p2 = playerFactory(3);
  test('All ships get properly shot', () => {
    p2.placeRandomShip(2, 9);
    p2.placeRandomShip(2, 9);
    for (let i = 0; i < 9; i++) {
      p2.receiveAttack(i);
    }
    expect(p2.allShipsSunk()).toBeTruthy();
  });

  test('Mock game loop returns true with gameOver', () => {
    expect(mockGameLoop()).toBeTruthy();
  });
});

function mockGameLoop() {
  const p3 = playerFactory(10);
  const p4 = playerFactory(10);
  p3.setRandomBoard();
  p4.setRandomBoard();
  const randomIdx = () => Math.trunc(Math.random() * 100);
  let gameOver = false;
  while (!gameOver) {
    p3.receiveAttack(randomIdx());
    if (p3.allShipsSunk()) {
      gameOver = true;
      continue;
    }
    p4.receiveAttack(randomIdx());
    gameOver = p4.allShipsSunk();
  }
  return gameOver;
}
