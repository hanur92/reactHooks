import React from "react";

const Nav = ({ number }) => {
  return <div>{number === 0 ? "Zero" : number % 2 === 0 ? "EVEN" : "ODD"}</div>;
};

export default Nav;
//!   A ? B : C ? D : E

//!   A면 B이고  C면 D이고 C가 아니면 E

import "./App.css";
import React, { useState } from "react";
import Nav from "./Nav";

const App = () => {
  // const input = useRef(initialValue);
  const [name, setName] = useState();
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <textarea
        className="text"
        onSubmit={() => {
          setName(document.querySelector(".text").value);
        }}
      ></textarea>
      {console.log(document.querySelector("text"))}
      <button onClick={() => setNumber(number + 1)}>+</button>
      <div>{number}</div>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <Nav number={number}></Nav>
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
//?5. useState 사용 -> X
