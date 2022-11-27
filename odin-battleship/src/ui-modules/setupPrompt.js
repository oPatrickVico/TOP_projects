import fancyButton from './fancyButton';

export default function setupPrompt(game) {
  const container = document.createElement('div');
  container.id = 'setup-prompt';
  container.classList.add('container');
  container.style.paddingTop = '40vh';

  const btn = fancyButton();
  btn.textContent = `player ${game.getCurrentPlayer() + 1} to deploy ships..`;
  btn.style.height = 'fit-content';
  btn.style.padding = '20px';
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('setup-board');
  });
  container.appendChild(btn);

  return container;
}
