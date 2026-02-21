import React from 'react';
import type { IceCream } from '../types';

interface IceCreamCardProps {
  iceCream: IceCream;
  onAddToCart: (iceCream: IceCream) => void;
}

export const IceCreamCard: React.FC<IceCreamCardProps> = ({ iceCream, onAddToCart }) => {
  return (
    <div className="ice-cream-card">
      <img src={iceCream.imageUrl} alt={iceCream.name} className="ice-cream-image" />
      <div className="ice-cream-info">
        <h3>{iceCream.name}</h3>
        <p className="description">{iceCream.description}</p>
        <p className="price">${iceCream.price.toFixed(2)}</p>
        <button onClick={() => onAddToCart(iceCream)} className="add-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
