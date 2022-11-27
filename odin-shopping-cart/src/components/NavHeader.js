import './NavHeader.css';
import cartLogo from '../images/icons/cart.svg';
import { Link, Outlet } from 'react-router-dom';

export default function NavHeader(props) {
  return (
    <>
      <header className="NavHeader">
        <Link className="logo-name" to="/">
          Online Shop
        </Link>
        <nav className="link-tree">
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/product-list">
            <li>Products</li>
          </Link>
          <Link className="cart-logo" to="/cart">
            <img
              style={{
                width: '70%',
                aspectRation: '1/1',
                margin: '5px 5px',
              }}
              alt="Cart icon"
              src={cartLogo}
            />
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
