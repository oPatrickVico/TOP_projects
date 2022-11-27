import fancyButton from "./fancyButton";

const root = document.querySelector('#app');

export default function pickPlayersScreen(game) {
  const container = document.createElement('div');
  container.id = 'pick-players';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '30vh',
  });

  const btnAI = fancyButton()
  btnAI.textContent = 'against a computer.';
  btnAI.style.fontWeight = 600;
  btnAI.style.height = "2.5em";
  btnAI.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.setAiPlayer();
    game.puppeteer('setup-prompt')
  });
  container.appendChild(btnAI);

  const btnHuman = fancyButton()
  btnHuman.textContent = 'against a human.';
  btnHuman.style.fontWeight = 600;
  btnHuman.style.height = '2.5em';
  btnHuman.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('setup-prompt');
  });
  container.appendChild(btnHuman);

  return container;
}
