const cart = [];

export function addToCart(id) {
  const product = cart.find((obj) => obj.id === id);
  if (product) {
    product.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }
}

export function getCart() {
  return cart;
}
