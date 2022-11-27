import boardContainer from './boardContainer';
import boardRenderer from './boardRenderer';
import { range } from '../zonks';
import { shipIcon } from './renderState';
import fancyButton from './fancyButton';

const boardLen = 10;
let shipBucket = {};
let shipsToBeshipped = [];
let pickerSize = { size: 0, 2: 1, 3: 1, 4: 1, 5: 1 };

export default function setupBoard(game) {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'setup-board';
  container.style.paddingTop = '10vh';

  // Done button
  const done = fancyButton();
  done.id = 'done-button';
  done.textContent = 'deploying ships..';
  done.style.height = '2em';
  done.style.padding = '10px';
  done.addEventListener('click', (e) => {
    if (!allShipsDeployed()) return;
    e.target.parentNode.remove();
    if (game.isAiPlaying()) {
      game.deployAllShips(shipsToBeshipped);
      game.puppeteer('next-player');
      return
    }
    if (!game.getCurrentPlayer()) {
      // if player 1
      game.deployAllShips(shipsToBeshipped);
      game.cyclePlayer();
      game.puppeteer('setup-prompt');
    } else {
      // if player 2
      game.deployAllShips(shipsToBeshipped);
      game.cyclePlayer();
      game.puppeteer('next-player');
    }
    shipBucket = {};
    shipsToBeshipped = [];
    pickerSize = { size: 0, 2: 1, 3: 1, 4: 1, 5: 1 };
  });
  container.appendChild(done);

  // Board configurations;
  const board = boardRenderer();
  for (const node of board.childNodes) {
    node.addEventListener('click', (e) => {
      const idx = parseInt(e.target.id.slice(1));
      if (!pickerSize.size) return;
      if (!pickerSize[pickerSize.size]) return;
      const size = pickerSize.size;
      const orientation = toggle.value === 'false' ? false : true;
      const span = range(idx, size, orientation * boardLen);
      const valid = orientation ? verValid(span) : horValid(span);
      if (!valid) return;
      if (spotTaken(span)) {
        console.log('taken');
        return;
      }
      updateAmount(size, false);
      Object.assign(
        shipBucket,
        Object.fromEntries(span.map((elem) => [elem, span]))
      );
      shipsToBeshipped.push([idx, orientation, size]);
      renderShip(span);
      if (allShipsDeployed()) {
        document.querySelector('#done-button').textContent = 'done?.';
      }
    });
  }
  container.appendChild(board);

  // Orientation button
  const toggle = makeToggleButton();

  // Ship picker
  const shipPicker = document.createElement('div');
  shipPicker.appendChild(toggle);
  shipPicker.classList.add('picker-container');
  for (let i = 5; i > 1; i--) {
    const ms = mockShip(i);
    const counter = makeCounter(i);
    ms.addEventListener('click', (e) => {
      const selected = document.querySelector('.active-ship');
      if (selected) {
        selected.classList.remove('active-ship');
      }
      e.target.parentNode.classList.add('active-ship');
      pickerSize.size = i;
    });
    shipPicker.appendChild(ms);
    shipPicker.appendChild(counter);
  }
  container.appendChild(shipPicker);

  return container;
}

/* --------------------  Helper Functions      ----------------- */
function spotTaken(span) {
  const anyTaken = span.filter((elem) =>
    Object.keys(shipBucket).includes(elem.toString())
  );
  return anyTaken.length;
}

function horValid(span) {
  const org = Math.trunc(span[0] / boardLen);
  return span.reduce(
    (curr, next) => Math.trunc(next / boardLen) === org && curr,
    true
  );
}

function verValid(span) {
  return span.reduce((curr, next) => next / boardLen < boardLen && curr, true);
}

function renderShip(span) {
  const orientation = span[0] % boardLen === span[1] % boardLen;
  for (let i = 0; i < span.length; i++) {
    const cell = document.querySelector(`#c${span[i]}`);
    cell.style.position = 'relative';
    const startTip = i === 0;
    const endTip = i === span.length - 1;
    const img = shipIcon(startTip | endTip, endTip, orientation);
    img.style.position = 'absolute';
    img.style.zIndex = '5';
    img.addEventListener('click', removeShip);
    cell.appendChild(img);
  }
}

function removeShip(e) {
  const cellId = e.target.parentNode.id.slice(1);
  const ship = shipBucket[cellId];
  updateAmount(ship.length, true);
  for (let i = 0; i < shipsToBeshipped.length; i++) {
    if (shipsToBeshipped[i][0] === ship[0]) {
      shipsToBeshipped.splice(i, 1);
      break;
    }
  }
  for (const part of ship) {
    document.querySelector(`#c${part}`).innerHTML = '';
    delete shipBucket[part];
  }
}

function makeToggleButton() {
  const toggle = document.createElement('button');
  toggle.classList.add('toggle-orientation');
  toggle.value = false;
  toggle.textContent = 'Hor';
  toggle.style.backgroundColor = 'violet';
  toggle.addEventListener('click', (e) => {
    if (e.target.value === 'false') {
      e.target.value = true;
      e.target.textContent = 'Ver';
      e.target.style.backgroundColor = 'lightgreen';
    } else {
      e.target.value = false;
      e.target.textContent = 'Hor';
      e.target.style.backgroundColor = 'violet';
    }
  });
  return toggle;
}

function mockShip(size) {
  const container = document.createElement('div');
  for (let i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('mock-cell');
    container.appendChild(cell);
  }
  return container;
}

function makeCounter(size) {
  const counter = document.createElement('div');
  counter.classList.add('picker-counter');
  const amount = document.createElement('p');
  amount.id = `amount${size}`;
  amount.textContent = pickerSize[size];
  counter.appendChild(amount);
  return counter;
}

function updateAmount(size, add) {
  pickerSize[size] += 2 * add - 1;
  document.querySelector(`#amount${size}`).textContent = pickerSize[size];
}

function allShipsDeployed() {
  let allDeployed = true;
  for (let i = 5; i > 1; i--) {
    allDeployed &= pickerSize[i] === 0;
  }
  return allDeployed;
}
