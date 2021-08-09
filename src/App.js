import "./App.css";
import React, { useState} from "react";
import Counter from "./Counter";

function App() {
  const [counters, cCounter] = useState(
    {
      0: 0,
      1: 0,
      2: 0
    }
  );

  const resetHandler = () => {
    cCounter({
      0: 0,
      1: 0,
      2: 0
    })
  };

  return (
    <div className="appContainer">
      {Object.values(counters).map((count, i) => {
        return (
          <Counter
            count={count}
            key={i}
            buttonHandler={() => {
              cCounter((prevState) => {
                return { ...prevState, [i]: prevState[i] + 1 };
              });
            }}
            resetCounter={() => {
              cCounter((prevState) => {
                return { ...prevState, [i]: 0 };
              });
            }}
          />
        );
      })}
      <br />
      <div className="resetButton">
        <button onClick={() => resetHandler()}>Reset all counter</button>
      </div>
    </div>
  );
}

export default App;
