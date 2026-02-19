export interface CoffeeEntry {
  id: string;
  type: string;
  size: string; // in ml or oz
  caffeineAmount: number; // in mg
  timestamp: string; // ISO string
}

export type CoffeeLog = CoffeeEntry[];
