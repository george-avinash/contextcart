
import React from 'react';
import { useCart } from './CartContext';
import Product from './Product';
import productsData from './products.json';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const calculateTotal = () => {
    const totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return { totalQuantity, totalAmount };
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              <div>{`Product: ${item.title}`}</div>
              <img src={item.images[0]} alt={item.title} />
              <div>{`Price: $${item.price}`}</div>
              <div>{`Quantity: ${item.quantity}`}</div>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>

        <div className="total">
          <h3>Total Quantity: {calculateTotal().totalQuantity}</h3>
          <h3 className="totalAmount">Total Amount: ${calculateTotal().totalAmount.toFixed(2)}</h3>
        </div>
      </div>

      <h2>Available Products</h2>
      <div className="product-list">
        {productsData.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
