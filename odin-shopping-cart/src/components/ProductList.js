import { getCatalog } from './catalogData';
import { addToCart } from './cartData';
import './ProductList.css';
import { Outlet } from 'react-router-dom';

export default function ProductList(props) {
  return (
    <div className="ProductList">
      <div className="catalog-display">
        {getCatalog().map((elem) => (
          <Product key={elem.id} data={elem} />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  const { id, imgUrl, name, description, price } = props.data;
  return (
    <div>
      <img alt="Product" src={imgUrl} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        {price} <button onClick={() => addToCart(id)}>BUY</button>
      </p>
    </div>
  );
}
