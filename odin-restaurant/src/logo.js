import logoFile from './logo.svg';
import { configStyle } from './zonks';

const containerStyle = {
  margin: '10px',
  width: '30%',
  'aspect-ratio': '1 / 1',
  'max-width': '200px',
  flex: '0 1 auto',
  display: 'flex',
  'flex-flow': 'column nowrap',
  'align-items': 'center',
  margin: '50px'
};

const logoStyle = {
  'max-width': '200px'
};

const shopNameStyle = {
  'background-color': 'white',
  color: 'bloack',
  'border-radius': '50px',
  padding: '0 10px',
  'text-align': 'center',
  'font-family': 'Sail',
  'font-size': '32px',
  width: '90%',
  border: '3px solid'
};

export default function logoFactory() {
  const container = document.createElement('div');
  configStyle(container, containerStyle);

  const logo = document.createElement('img');
  logo.src = logoFile;
  configStyle(logo, logoStyle);
  container.appendChild(logo);

  const shopName = document.createElement('h1');
  logo.appendChild(shopName);
  configStyle(shopName, shopNameStyle);
  shopName.textContent = "Burger's Bay";
  container.appendChild(shopName);

  return container;
}
