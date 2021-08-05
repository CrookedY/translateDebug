import "./App.css";
import React, { useState, useEffect, createRef, useRef } from "react";
import Counter from "./Counter";

function App() {
  let counterRefs = [];
  const [counters, cCounter] = useState(
    new Array(3).fill().map((v, i) => {
      const ref = createRef();
      counterRefs.push(ref);
      return <Counter ref={ref} key={i} />;
    })
  );

  const resetHandler = () => {
    counterRefs.forEach((r) => {
      console.log(r);
      // r.current.resetCounter();
    });
  };

  return (
    <div className="appContainer">
      {counters}
      <br />
      <div className="resetButton">
        <button onClick={() => resetHandler()}>Reset all counter</button>
      </div>
    </div>
  );
}

export default App;
