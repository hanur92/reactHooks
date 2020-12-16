import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  // const input = useRef(initialValue);
  const [number, setNumber] = useState(0);
  const [numType, setNumType] = useState("zero");
  const checkNumbtype = (num) => {
    console.log("useEffect");
    if (num % 2 === 1) {
      setNumType("odd");
      console.log("odd");
    } else if (num % 2 === 0) {
      setNumType("even");
      console.log("even");
    }
  };
  useEffect(checkNumbtype(number));
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <div>{number}</div>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <h2>{numType}</h2>
    </div>
  );
};

export default App;

//!연습해볼 기능.
//!{number}의 값이 홀수면 버튼 밑에 odd 텍스트 나오게 하고,
//!{number}의 값이 짝수면 버튼 밑에 even 텍스트 나오게 한다.
//?1. 조건문 사용
//?2. {number} % 2 = 1 => odd
//?3. {number} % 2 = 0 => even
//?4. module화
//?5. useState 사용
