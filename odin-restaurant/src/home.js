import logo from './logo.js';
import burguerPic from './burgerPic.js';
import { configStyle } from './zonks.js';
import burger1 from './burguer1.jpg';
import burger2 from './burguer2.jpg';
import burger3 from './burguer3.jpg';
import burger4 from './burguer4.jpg';

const homeStyle = {
  margin: '100px auto',
  width: '95%',
  height: '80vh',
  display: 'flex',
  'flex-flow': 'column nowrap',
  'justify-content': 'space-evenly'
};

const stripStyle = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'space-evenly',
  width: '100%',
  height: '50%'
};

export default function homeFactory() {
  const container = document.createElement('div');
  configStyle(container, homeStyle);

  const strip1 = document.createElement('div');
  configStyle(strip1, stripStyle);
  strip1.appendChild(
    burguerPic({
      url: burger1,
      tilt: -1,
      name: 'High Tides',
      description: 'Some text right here.'
    })
  );
  strip1.appendChild(logo());
  strip1.appendChild(
    burguerPic({
      url: burger2,
      tilt: 1,
      name: "Depth's Bellow",
      description: 'Some text right here.'
    })
  );
  container.appendChild(strip1);

  const strip2 = document.createElement('div');
  configStyle(strip2, stripStyle);
  strip2.appendChild(
    burguerPic({
      url: burger3,
      tilt: -1,
      name: 'Fresh Seas',
      description: 'Some text right here.'
    })
  );
  strip2.appendChild(
    burguerPic({
      url: burger4,
      tilt: 1,
      name: "Sailor's Loved",
      description: 'Some text right here.'
    })
  );
  container.appendChild(strip2);

  return container;
}
