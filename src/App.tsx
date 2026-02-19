import { useCoffeeLog } from './hooks/useCoffeeLog';
import { AddCoffeeForm } from './components/AddCoffeeForm';
import { CoffeeHistory } from './components/CoffeeHistory';
import { DailySummary } from './components/DailySummary';
import './App.css';

function App() {
  const { log, addEntry, removeEntry, clearLog, todayStats } = useCoffeeLog();

  return (
    <div className="container">
      <header>
        <h1>☕ Coffee Tracker</h1>
      </header>
      <main>
        <div className="dashboard">
          <div className="main-column">
            <DailySummary stats={todayStats} />
            <AddCoffeeForm onAdd={addEntry} />
          </div>
          <div className="side-column">
            <CoffeeHistory log={log} onRemove={removeEntry} onClear={clearLog} />
          </div>
        </div>
      </main>
      <footer>
        <p>Keep track of your caffeine intake!</p>
      </footer>
    </div>
  );
}

export default App;
