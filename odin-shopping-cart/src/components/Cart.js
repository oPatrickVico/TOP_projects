import { Outlet, useNavigate } from 'react-router-dom';
import './Cart.css';
import { getCart } from './cartData';
import { getCatalog } from './catalogData';

export default function Cart(props) {
  return (
    <div className="Cart">
      {generateCartList()}
      <Outlet />{' '}
    </div>
  );
}

function generateCartList() {
  return getCart().map((elem) => {
    const product = getCatalog()[elem.id];
    return <CartItem data={{ product, elem }} />;
  });
}

function CartItem(props) {
  const { product, elem } = props.data;
  const navigator = useNavigate();
  return (
    <div
      key={elem.id}
      onClick={() => {
        navigator(`/cart/${elem.id}`);
      }}
    >
      <h1>{product.name}</h1>
      <div>
        <button style={{ width: 15 }}>-</button>
        <span>{elem.quantity}</span>
        <button style={{ width: 15 }}>+</button>
      </div>
    </div>
  );
}
