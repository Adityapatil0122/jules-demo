import React from 'react';
import type { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (id: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-name">
                {item.name} (x{item.quantity})
              </span>
              <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => onRemoveFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <button onClick={onCheckout} className="checkout-button" disabled={cartItems.length === 0}>
        Checkout
      </button>
    </div>
  );
};
