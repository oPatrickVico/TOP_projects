import board from './signBoard';
import { configStyle } from './zonks';

const menuContainerStyle = {
  width: '90%',
  height: '80vh',
  margin: '10vh auto',
  display: 'flex',
  'flex-flow': 'column wrap',
  gap: '10px'
};

const burgerBoard = {
  title: 'Burguers',
  items: {
    'High Tides': '10',
    "Depth's Bellow": '10',
    "Sailor's Loved": '10',
    'Fresh Seas': '10',
    'Burger 1': '10',
    'Burger 2': '10',
    'Burger 3': '10'
  },
  localStyling: {
    height: '90%',
    width: '50%'
  }
};

const drinkBoard = {
  title: 'Drinks',
  items: {
    'Drink 1': '10',
    'Drink 2': '10',
    'Drink 3': '10'
  },
  localStyling: {
    height: '40%',
    width: '50%'
  }
};

const desertBoard = {
  title: 'Deserts',
  items: {
    'Desert 1': '10',
    'Desert 2': '10',
    'Desert 3': '10'
  },
  localStyling: {
    height: '40%',
    width: '50%'
  }
};

export default function menuComponent() {
  const container = document.createElement('h1');
  configStyle(container, menuContainerStyle);

  container.appendChild(board(burgerBoard));
  container.appendChild(board(drinkBoard));
  container.appendChild(board(desertBoard));

  return container;
}
