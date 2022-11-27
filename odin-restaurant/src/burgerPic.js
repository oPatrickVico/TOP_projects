import { configStyle, p } from './zonks';
import fontSetup from './fontSetup.css';
import strokeBanner from './strokebanner.png';

const containerStyle = {
  width: '30%',
  'max-width': '350px',
  margin: '20px',
  'aspect-ratio': '4 / 3',
  flex: '0 1 auto',
  display: 'flex',
  'flex-wrap': 'wrap',
  'background-color': '#aaa',
  position: 'relative',
  'box-shadow': '-2px 2px 2px 0px rgba(0,0,0,.6)'
};

const frameStyle = {
  'background-color': 'white',
  width: '100%',
  height: '100%',
  'box-shadow': '-2px 2px 2px 0px rgba(0,0,0,.4)'
};

const picStyle = {
  'background-color': 'black',
  width: '90%',
  height: '78%',
  margin: '5%'
};

const bannerStyle = {
  width: '258px',
  height: '68px',
  'background-image': `url(${strokeBanner})`,
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  color: 'white',
  'font-family': 'Sail',
  'font-size': '30px',
  position: 'absolute',
  bottom: '-15%'
};

export default function burgerPicFactory({ url, tilt, name }) {
  const container = document.createElement('div');
  configStyle(container, containerStyle);

  const frame = document.createElement('div');
  container.appendChild(frame);
  frame.style.setProperty('transform', `rotate(${3 * tilt}deg)`);
  configStyle(frame, frameStyle);

  const pic = document.createElement('img');
  configStyle(pic, picStyle);
  pic.src = url;
  frame.appendChild(pic);

  const banner = document.createElement('div');
  configStyle(banner, bannerStyle);
  banner.textContent = name || 'Burguer Name';
  const orientation = tilt < 0 ? 'right' : 'left';
  banner.style.setProperty(`${orientation}`, '-20%');
  container.appendChild(banner);

  return container;
}
