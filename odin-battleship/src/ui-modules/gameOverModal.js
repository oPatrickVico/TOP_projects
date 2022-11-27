import fancyButton from './fancyButton';

export default function gameOverModal(game) {
  const stopper = document.createElement('div');
  stopper.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  stopper.classList.add('stopper');

  const btn = fancyButton();
  btn.textContent = `game over. player ${game.getCurrentPlayer() + 1} wins`;
  btn.addEventListener('click', (e) => {
    stopper.parentNode.remove();
    setTimeout(() => game.puppeteer('title-screen'), 225);
  });
  btn.style.padding = '15px';
  stopper.appendChild(btn);

  return stopper;
}
