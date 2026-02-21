import React from 'react';
import { IceCreamCard } from './IceCreamCard';
import type { IceCream } from '../types';

interface IceCreamListProps {
  iceCreams: IceCream[];
  onAddToCart: (iceCream: IceCream) => void;
}

export const IceCreamList: React.FC<IceCreamListProps> = ({ iceCreams, onAddToCart }) => {
  return (
    <div className="ice-cream-list">
      {iceCreams.map((iceCream) => (
        <IceCreamCard key={iceCream.id} iceCream={iceCream} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
