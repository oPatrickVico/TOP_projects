import { configStyle, p } from './zonks.js';
import blackBG from './blackBG.jpg';
import home from './home.js';
import contact from './contact.js';
import menu from './menu.js';

/* -------------------- */
const bodyStyle = {
  position: 'fixed',
  'background-color': 'black',
  'background-image': `url(${blackBG})`,
  width: '100vw',
  height: '100vh'
};
configStyle(document.body, bodyStyle);

const state = {
  current: home()
};

/* -------------------- */
const rootStyle = {
  'max-width': '1400px',
  margin: '0 auto'
};

const root = document.querySelector('#content');
root.appendChild(state.current);
configStyle(root, rootStyle);

/* -------------------- */
const headerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '60px',
  'background-color': '#141414',
  display: 'flex',
  'justify-content': 'center',
  gap: '10px',
  'border-bottom': '1px solid white'
};

const header = document.createElement('header');
configStyle(header, headerStyle);
root.appendChild(header);

/* -------------------- */
const linkStyle = {
  border: '2px solid white',
  'border-bottom': 'none',
  'border-radius': '15px 15px 0 0',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  padding: '10px',
  'font-size': '24px',
  width: '130px',
  'text-transform': 'uppercase',
  'font-family': 'Jetbrains Mono',
  'margin-top': '5px'
};

const linkDisabledStyle = {
  'background-color': '#141414',
  color: 'white'
};

const linkActiveStyle = {
  'background-color': 'white',
  color: '#141414'
};

const moduleNames = ['menu', 'home', 'contact'];

const linktree = [];

for (const item of moduleNames) {
  const link = document.createElement('button');
  link.textContent = item;
  configStyle(link, linkStyle);
  configStyle(link, linkDisabledStyle);
  if (item === 'home') {
    configStyle(link, linkActiveStyle);
  }
  linktree.push(header.appendChild(link));
}

function changeScreen(e) {
  if (!state.current) return;
  const self = e.target;
  linktree.forEach((elem) => configStyle(elem, linkDisabledStyle));
  configStyle(self, linkActiveStyle);
  root.removeChild(state.current);
  switch (self.textContent) {
    case 'home':
      state.current = home();
      root.appendChild(state.current);
      break;
    case 'menu':
      state.current = menu();
      p(state.current);
      root.appendChild(state.current);
      break;
    case 'contact':
      state.current = contact();
      p(state.current);
      root.appendChild(state.current);
      break;
  }
}

for (const button of linktree) {
  button.addEventListener('click', changeScreen);
}

/* -------------------- */
const footerStyle = {
  'background-color': '#141414',
  height: '30px',
  width: '100vw',
  position: 'fixed',
  bottom: '0',
  left: '0',
  color: 'white',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center'
};

const footer = document.createElement('div');
configStyle(footer, footerStyle);
footer.innerHTML =
  '<p>Made by <a target="_blank" href="https://github.com/al-ptk">Alan Patrick</a></p>';
root.appendChild(footer);
