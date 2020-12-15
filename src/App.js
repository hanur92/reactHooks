import "./App.css";
import React, { useState } from "react";
import ReactDom from "react-dom";

const content = [
  { tab: "Section1", content: "내가 섹션1의 콘텐트" },
  { tab: "Section2", content: "내가 섹션2의 콘텐트" },
  { tab: "Section3", content: "내가 섹션3의 콘텐트" },
  { tab: "Section4", content: "내가 섹션4의 콘텐트" },
];

const useTabs = (initTab, allTabs) => {
  const [currIDX, setcurIDX] = useState(initTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currITEM: allTabs[currIDX], changeITEM: setcurIDX };
};

const App = () => {
  const { currITEM, changeITEM } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello </h1>
      {content.map((section, idx) => (
        <button onClick={() => changeITEM(idx)}>{section.tab}</button>
      ))}
      <div> {currITEM.content}</div>
    </div>
  );
};

export default App;
