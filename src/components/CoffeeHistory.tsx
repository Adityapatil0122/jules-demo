import React from 'react';
import type { CoffeeLog } from '../types';

interface CoffeeHistoryProps {
  log: CoffeeLog;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const CoffeeHistory: React.FC<CoffeeHistoryProps> = ({ log, onRemove, onClear }) => {
  if (log.length === 0) {
    return (
      <div className="card">
        <h3>History</h3>
        <p>No coffee logged yet.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>History</h3>
        <button className="clear-btn" onClick={onClear}>Clear All</button>
      </div>
      <ul className="history-list">
        {log.map((entry) => (
          <li key={entry.id} className="history-item">
            <div className="history-details">
              <strong>{entry.type}</strong>
              <span>{entry.size} • {entry.caffeineAmount}mg</span>
              <small>{new Date(entry.timestamp).toLocaleString()}</small>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => onRemove(entry.id)}
              aria-label="Remove entry"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
