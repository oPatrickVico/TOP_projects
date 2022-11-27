import { configStyle } from './zonks';
import contactItem from './contactItem.js';
import whatsapp from './whatsapp.svg';
import telephone from './telephone.svg';

const contactContainerStyle = {
  'background-color': 'white',
  border: '5px solid',
  'border-radius': '35px',
  margin: '20vh auto',
  width: '470px',
  height: '580px',
  display: 'flex',
  'flex-flow': 'column nowrap',
  'justify-content': 'space-evenly',
  'align-items': 'center',
  padding: '20px'
};

export default function menuComponent() {
  const container = document.createElement('h1');
  configStyle(container, contactContainerStyle);

  container.appendChild(
    contactItem({
      url: whatsapp,
      name: 'WhatsApp',
      text: '(XX) XXXXX-XXXX'
    })
  );

  container.appendChild(
    contactItem({
      url: telephone,
      name: 'Telephone',
      text: '(XX) XXXX-XXXX'
    })
  );

  return container;
}
