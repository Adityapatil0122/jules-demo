import { useState, useEffect, useMemo } from 'react';
import type { CoffeeEntry, CoffeeLog } from '../types';

const STORAGE_KEY = 'coffee_log';

export const useCoffeeLog = () => {
  const [log, setLog] = useState<CoffeeLog>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse coffee log', e);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  }, [log]);

  const addEntry = (entry: Omit<CoffeeEntry, 'id' | 'timestamp'>) => {
    const newEntry: CoffeeEntry = {
      ...entry,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    setLog((prev) => [newEntry, ...prev]);
  };

  const removeEntry = (id: string) => {
    setLog((prev) => prev.filter((entry) => entry.id !== id));
  };

  const clearLog = () => {
    setLog([]);
  };

  const todayLog = useMemo(() => {
    const today = new Date().toDateString();
    return log.filter((entry) => new Date(entry.timestamp).toDateString() === today);
  }, [log]);

  const todayStats = useMemo(() => {
    const totalCaffeine = todayLog.reduce((sum, entry) => sum + entry.caffeineAmount, 0);
    const totalCups = todayLog.length;
    return { totalCaffeine, totalCups };
  }, [todayLog]);

  return { log, addEntry, removeEntry, clearLog, todayStats, todayLog };
};
