import "./App.css";
import React, { useState } from "react";
import ReactDom from "react-dom";

const App = () => {
  const [item, setItem] = useState(1);
  const increment = () => {
    setItem(item + 1);
  };
  const decrement = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <div>{item}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
