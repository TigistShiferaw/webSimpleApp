import React, { useState } from 'react';
import './App.css';

function App() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [probability, setProbability] = useState(null);

  const handleLastPeriodDateChange = (e) => {
    setLastPeriodDate(e.target.value);
  };

  const calculateProbability = () => {
    // Make an API call to your backend to calculate the probability
    fetch(`https://pregnancy-backend.onrender.com/calculate-probability?lastPeriodDate=${lastPeriodDate}`)
      .then((response) => response.json())
      .then((responseData) => {
        const { probability } = responseData;
        setProbability(probability);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>Pregnancy Probability Calculator</h1>
      <div>
        <label>Last Period Date:</label>
        <input
          type="date"
          value={lastPeriodDate}
          onChange={handleLastPeriodDateChange}
        />
      </div>
      <button onClick={calculateProbability}>Calculate</button>
      {probability !== null && (
        <p>The probability of getting pregnant is: {probability.toFixed(2)}</p>
      )}
    </div>
  );
}

export default App;
