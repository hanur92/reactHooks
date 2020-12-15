import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const sayHello = () => {
    console.log("HITHERE!");
  };

  useEffect(sayHello, [sayHello]); //compDidUpd + compDidMt + compWillUnMt
  return (
    <div className="App">
      <h1>Hello </h1>
      <div>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          number
        </button>
        {number}
      </div>
      <div>
        <button
          onClick={() => {
            setAnumber(aNumber + 1);
          }}
        >
          aNumber
        </button>
        {aNumber}
      </div>
    </div>
  );
};
