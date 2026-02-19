import React, { useState } from 'react';

interface AddCoffeeFormProps {
  onAdd: (entry: { type: string; size: string; caffeineAmount: number }) => void;
}

const PRESETS = [
  { type: 'Espresso', size: '1 shot', caffeineAmount: 63 },
  { type: 'Double Espresso', size: '2 shots', caffeineAmount: 126 },
  { type: 'Brewed Coffee', size: '8 oz', caffeineAmount: 95 },
  { type: 'Brewed Coffee', size: '12 oz', caffeineAmount: 145 },
  { type: 'Latte', size: '12 oz', caffeineAmount: 63 },
  { type: 'Cappuccino', size: '12 oz', caffeineAmount: 63 },
  { type: 'Cold Brew', size: '12 oz', caffeineAmount: 155 },
];

export const AddCoffeeForm: React.FC<AddCoffeeFormProps> = ({ onAdd }) => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [caffeineAmount, setCaffeineAmount] = useState<number | string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type && size && caffeineAmount) {
      onAdd({
        type,
        size,
        caffeineAmount: Number(caffeineAmount),
      });
      setType('');
      setSize('');
      setCaffeineAmount('');
    }
  };

  const applyPreset = (preset: typeof PRESETS[0]) => {
    setType(preset.type);
    setSize(preset.size);
    setCaffeineAmount(preset.caffeineAmount);
  };

  return (
    <div className="card">
      <h3>Log Coffee</h3>
      <div className="presets">
        {PRESETS.map((preset, index) => (
          <button 
            key={index} 
            type="button" 
            className="preset-btn"
            onClick={() => applyPreset(preset)}
          >
            {preset.type} ({preset.size})
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type</label>
          <input 
            type="text" 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            placeholder="e.g. Americano"
            required
          />
        </div>
        <div className="form-group">
          <label>Size</label>
          <input 
            type="text" 
            value={size} 
            onChange={(e) => setSize(e.target.value)} 
            placeholder="e.g. 12 oz"
            required
          />
        </div>
        <div className="form-group">
          <label>Caffeine (mg)</label>
          <input 
            type="number" 
            value={caffeineAmount} 
            onChange={(e) => setCaffeineAmount(e.target.value)} 
            placeholder="e.g. 95"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Coffee</button>
      </form>
    </div>
  );
};
