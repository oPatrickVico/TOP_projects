import playerFactory from '../logic-modules/playerFactory';

describe('Testing the player object', () => {
  const player1 = playerFactory(10);

  test('Player successfully deploys horizontal ship', () => {
    expect(() => {
      player1.deployShip(0, false, 5);
    }).not.toThrowError();
    expect(() => {
      player1.deployShip(0, false, 5);
    }).toThrowError();
    expect(() => {
      player1.deployShip(7, false, 3);
    }).not.toThrowError();
    expect(() => {
      player1.deployShip(19, false, 3);
    }).toThrowError();
  });

  test('Player successfully deploys vertical ship', () => {
    expect(() => {
      player1.deployShip(0, true, 5);
    }).toThrowError();
    expect(() => {
      player1.deployShip(10, true, 5);
    }).not.toThrowError();
    expect(() => {
      player1.deployShip(97, true, 3);
    }).toThrowError();
  });

});

describe('Are shots being processed correctly', () => {
    const player2 = playerFactory(10);
    player2.deployShip(0, false, 1);

    test("Player's board capable of receiving an attack", () => {
      expect(() => player2.receiveAttack(99)).not.toThrowError();
    });

    test('Wrong shot misses ship', () => {
      expect(player2.receiveAttack(1)).toBe('miss');
    });

    test('Right shot hits ship', () => {
      expect(player2.receiveAttack(0)).toBe('hit');
    });

    test('Get "all sunk" message properly', () => {
      expect(player2.allShipsSunk()).toBeTruthy();
    });
})