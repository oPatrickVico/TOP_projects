export default function boardRenderer(game) {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('board-cell');
    container.appendChild(cell);
    cell.style.backgroundColor = 'white';
    cell.id = `c${i}`;
  }
  return container;
}
