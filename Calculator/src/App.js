import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");

  const Click = (e) => {
    setResult(result + e.target.name);
  };

  const clearInput = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    const calculatedResult = evaluate(result);
    setResult(calculatedResult.toString());   
  };

  return (
    <>
    <h1 className="title">CALCULATOR</h1>
      <div className="container">
        <form>
          <input type="text" value={result} readOnly />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clearInput} id="clear">Clear</button>
          <button className="highlight" onClick={backspace} id="backspace">Del</button>
          <button className="highlight" name="/" onClick={Click}>&divide;</button>
          <button name="7" onClick={Click}>7</button>
          <button name="8" onClick={Click}>8</button>
          <button name="9" onClick={Click}>9</button>
          <button className="highlight" name="*" onClick={Click}>&times;</button>
          <button name="4" onClick={Click}>4</button>
          <button name="5" onClick={Click}>5</button>
          <button name="6" onClick={Click}>6</button>
          <button className="highlight" name="-" onClick={Click}>&ndash;</button>
          <button name="1" onClick={Click}>1</button>
          <button name="2" onClick={Click}>2</button>
          <button name="3" onClick={Click}>3</button>
          <button className="highlight" name="+" onClick={Click}>+</button>
          <button name="0" onClick={Click}>0</button>
          <button name="." onClick={Click}>.</button>
          <button className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </>
  );
};

export default App;

