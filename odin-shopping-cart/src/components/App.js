import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import Home from './Home';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavHeader />}>
            <Route index element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="cart" element={<Cart />}>
              <Route
                path=":id"
                element={
                  <div
                    style={{
                      position: 'absolute',
                      zIndex: '2',
                      width: '600px',
                      height: '400px',
                      left: '100px',
                      top: '200px',
                      border: '2px solid',
                    }}
                  >
                    This is where the product data should be. Lol.
                  </div>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <div>
                  <h1>404 — Not Found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
