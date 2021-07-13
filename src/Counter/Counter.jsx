import React, { useState } from 'react';
import './Counter.css';

function Counter() {

  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  
  const addToCounter = () => {
    setCounterValue(counterValue + inputValue)
  }

const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue)
  }

  return (
    <div className="App">
      <h3 data-testid="header">My Counter</h3>
      <h2 
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}
        >{counterValue}
      </h2>
      <button 
        data-testid="subtract-btn"
        onClick={subtractFromCounter}  
      >-</button>
      <input 
        data-testid="input" 
        className="text-center" 
        type="number" 
        value={inputValue} 
        onChange={(e) => {
          setInputValue(parseInt(e.target.value)) //so that it adds or subtracts instead of concatenates
        }}
      />
      <button 
        data-testid="add-btn"
        onClick={addToCounter}
      >+
      </button>
    </div>
  );
}

export default Counter;
