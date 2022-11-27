import { configStyle, p } from './zonks';

const boardStyle = {
  height: 'fit-content',
  border: '4px solid black',
  'border-radius': '35px',
  'background-color': 'white',
  padding: '10px 20px',
  flex: '1 1 auto'
};

const boardTitleStyle = {
  'margin-bottom': '10px',
  'font-family': 'Sail'
};

const boardItemStyle = {
  'font-size': '20px',
  'font-weight': '400',
  'text-align': 'justify',
  'font-family': 'Jetbrains Mono'
};

export default function boardComponent(boardConfig) {
  const { title, items, localStyling } = boardConfig;

  const container = document.createElement('div');
  configStyle(container, boardStyle);
  configStyle(container, localStyling);

  const boardTitle = document.createElement('h3');
  configStyle(boardTitle, boardTitleStyle);
  boardTitle.textContent = title;
  container.appendChild(boardTitle);

  for (const item in items) {
    const boardItem = document.createElement('p');
    configStyle(boardItem, boardItemStyle);
    boardItem.textContent = `${item} ------ ${items[item]}`;
    container.appendChild(boardItem);
  }

  return container;
}
