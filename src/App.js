import React from 'react';
import './css/App.css';
import CounterApp from './components/CounterApp/CounterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterApp value={4} />
      </header>
    </div>
  );
}

export default App;
