import shipFactory from '../logic-modules/shipFactory';

describe('Testing the ship object interface', () => {
  const horShip = shipFactory(6, false, 3, 10);
  const verShip = shipFactory(6, true, 3, 10);

  test('Ship initializes with horizontal direction correctly', () => {
    expect(horShip.getBoundaries()).toStrictEqual(['6', '7', '8']);
  });

  test('Ship initializes with vertical direction correctly', () => {
    expect(verShip.getBoundaries()).toStrictEqual(['6', '16', '26']);
  });

  test('Ship gets hit when proper index', () => {
    expect(verShip.hit(16)).toBeTruthy();
  });

  test('Ship not get hit when improper index', () => {
    expect(verShip.hit(17)).not.toBeUndefined();
    expect(verShip.hit(17)).toBeFalsy();
  });

  const ship = shipFactory(6, true, 3, 10);

  test('Ship is not sunk', () => {
    expect(ship.isSunk()).toBeFalsy();
  })

  test('Ship beeps if sunk', () => {
    ship.hit(6);
    ship.hit(16);
    ship.hit(26);
    expect(ship.isSunk()).toBeTruthy();
  });
});
