import boardContainer from './boardContainer';

export default function gameView(game) {
  const container = document.createElement('div');
  container.id = 'game-view';

  container.appendChild(boardContainer(false, game));
  container.appendChild(boardContainer(true, game));

  return container;
}
