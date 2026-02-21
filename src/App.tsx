import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IceCreamList } from './components/IceCreamList';
import { Cart } from './components/Cart';
import type { IceCream, CartItem } from './types';
import './App.css';

const MOCK_ICE_CREAMS: IceCream[] = [
  {
    id: '1',
    name: 'Vanilla Bean',
    description: 'Classic vanilla bean ice cream made with real Madagascar vanilla.',
    price: 3.50,
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    name: 'Chocolate Fudge',
    description: 'Rich and creamy chocolate ice cream with fudge swirls.',
    price: 4.00,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    name: 'Strawberry Delight',
    description: 'Fresh strawberry ice cream with chunks of real strawberries.',
    price: 3.75,
    imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    name: 'Mint Chip',
    description: 'Cool mint ice cream with dark chocolate chips.',
    price: 4.25,
    imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '5',
    name: 'Cookie Dough',
    description: 'Vanilla ice cream loaded with cookie dough chunks.',
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2c57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (iceCream: IceCream) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === iceCream.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === iceCream.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...iceCream, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCart([]);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="menu-section">
          <h2>Our Menu</h2>
          <IceCreamList iceCreams={MOCK_ICE_CREAMS} onAddToCart={addToCart} />
        </div>
        <div className="cart-section">
          <Cart cartItems={cart} onRemoveFromCart={removeFromCart} onCheckout={handleCheckout} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
