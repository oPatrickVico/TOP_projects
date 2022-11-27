import Carousel from './Carousel';
import './Home.css';

export default function Home(props) {
  return (
    <div className="Home">
      <div className="purple-background"></div>
      <div className="hero-intro">
        <div className="hero-text">
          <p className="hero-title">
            <span className="top-text">Lorem</span>
            <span className="bottom-text">Ipsum</span>
          </p>
          <p className="hero-description">
            A few extra words make all the difference.
          </p>
        </div>
        <Carousel />
      </div>
      <a className="shop-button" href="/product-list">
        Shop
      </a>
      <hr style={{ width: '70%' }} />
      <div className="product-display">
        {createDisplayCardProps(3).map((prop, index) => (
          <DisplayCard key={index} data={prop} />
        ))}
      </div>
      <footer>
        Made by &nbsp; <a href="https://github.com/al-ptk"> Alan Patrick</a>
      </footer>
    </div>
  );
}

function createDisplayCardProps(quantity) {
  const picProps = [];
  for (let i = 0; i < quantity; i++) {
    picProps.push({
      url: `https://picsum.photos/200?random=${i}`,
      caption: 'Some caption',
    });
  }
  return picProps;
}

function DisplayCard({ data }) {
  return (
    <div className="display-card">
      <img src={data.url} alt="A holding of place" />
      <p>{data.caption}</p>
    </div>
  );
}
