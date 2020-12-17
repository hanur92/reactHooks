import React from "react";

const Nav = ({ number }) => {
  return <div>{number === 0 ? "Zero" : number % 2 === 0 ? "EVEN" : "ODD"}</div>;
};

export default Nav;
//!   A ? B : C ? D : E

//!   A면 B이고  C면 D이고 C가 아니면 E
