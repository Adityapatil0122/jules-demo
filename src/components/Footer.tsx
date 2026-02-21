import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Scoops of Joy Ice Cream Shop. All rights reserved.</p>
    </footer>
  );
};
