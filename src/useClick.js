import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => {
    console.log("sayHello");
  };
  const title = useClick(sayHello);
  const input = useRef();

  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <h1 ref={title}>HI</h1>
      <input ref={input} placeholder="LA" />
    </div>
  );
};

// export default App;
