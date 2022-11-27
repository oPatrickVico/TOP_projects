import fancyButton from './fancyButton';
import gameOverModal from './gameOverModal';
import boardRenderer from './boardRenderer';
import { renderShips, renderShots } from './renderState';

export default function boardContainer(owner, game) {
  const container = document.createElement('div');

  const board = boardRenderer(game);
  if (!owner) {
    for (const cell of board.children) {
      cell.addEventListener('click', (e) => {
        const idx = e.target.id.slice(1);
        const gameOver = game.registerAttack(parseInt(idx));
        if (gameOver) {
          renderShips(board, game.getEnemyData().sunk);
          renderShots(board, game.getEnemyData().marks);
          setTimeout(() => {
            container.parentNode.appendChild(gameOverModal(game));
          }, 400);
          return;
        }
        renderShips(board, game.getEnemyData().ships, true);
        renderShots(board, game.getEnemyData().marks);
        game.cyclePlayer();
        setTimeout(() => {
          container.parentNode.remove();
          game.puppeteer('next-player');
        }, 400);
      });
    }
    renderShips(board, game.getEnemyData().ships, true);
    renderShots(board, game.getEnemyData().marks);
  } else {
    renderShots(board, game.getCurrentData().marks);
    renderShips(board, game.getCurrentData().ships);
  }
  container.appendChild(board);
 
  return container;
}
