import { configStyle } from './zonks';

const containerStyle = {
  position: 'relative'
};

const svgStyle = {
  position: 'absolute',
  left: '-64px',
  top: '10px',
  width: '48px'
};

const titleStyle = {
  'font-family': 'Sail',
  'font-size': '32px'
};

const addressStyle = {
  'font-family': 'Jetbrains Mono',
  'background-color': '#141414',
  color: 'white',
  'font-size': '24px',
  padding: '4px'
};

export default function contactItem(config) {
  const { url, name, text } = config;

  const container = document.createElement('div');
  configStyle(container, containerStyle);

  const svg = document.createElement('img');
  svg.src = url;
  configStyle(svg, svgStyle);
  container.appendChild(svg);

  const title = document.createElement('h3');
  title.textContent = name;
  configStyle(title, titleStyle);
  container.appendChild(title);

  const address = document.createElement('p');
  address.textContent = text;
  configStyle(address, addressStyle);
  container.appendChild(address);

  return container;
}
