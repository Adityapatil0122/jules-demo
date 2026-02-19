import React from 'react';

interface DailySummaryProps {
  stats: {
    totalCaffeine: number;
    totalCups: number;
  };
}

export const DailySummary: React.FC<DailySummaryProps> = ({ stats }) => {
  const CAFFEINE_LIMIT = 400; // FDA recommended limit
  const percentage = Math.min((stats.totalCaffeine / CAFFEINE_LIMIT) * 100, 100);
  
  const getStatusColor = () => {
    if (stats.totalCaffeine > CAFFEINE_LIMIT) return '#ef4444';
    if (stats.totalCaffeine > CAFFEINE_LIMIT * 0.8) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div className="card summary-card">
      <h3>Today's Summary</h3>
      <div className="stats-grid">
        <div className="stat">
          <span className="stat-label">Total Cups</span>
          <span className="stat-value">{stats.totalCups}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Caffeine</span>
          <span className="stat-value" style={{ color: getStatusColor() }}>
            {stats.totalCaffeine} mg
          </span>
        </div>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${percentage}%`,
            backgroundColor: getStatusColor()
          }}
        />
      </div>
      <p className="limit-info">
        Daily Limit: {CAFFEINE_LIMIT} mg (FDA)
      </p>
    </div>
  );
};
