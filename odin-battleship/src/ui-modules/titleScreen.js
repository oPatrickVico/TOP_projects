import fancyButton from "./fancyButton";

const root = document.querySelector('#app');

export default function titleScreen(game) {
  const container = document.createElement('div');
  container.id = 'title-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '35vh',
  });

  const btn = fancyButton();
  btn.textContent = 'Fancy Battleship.';
  btn.style.fontWeight = 600;
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('pick-players')
  });
  container.appendChild(btn);

  return container;
}
