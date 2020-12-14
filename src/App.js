import "./App.css";
import React, { useState } from "react";
import ReactDom from "react-dom";

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  const [item, setItem] = useState(1);
  const increment = () => {
    setItem(item + 1);
  };
  const decrement = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>start editing to see some magin happen !</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
      {console.log({ ...name })}
    </div>
  );
};

export default App;
