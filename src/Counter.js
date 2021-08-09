import React from "react";

function Counter({buttonHandler, count, resetCounter, counterName}) {
  return (
    <div className={counterName}>
      <h1>Tally Counter</h1>
      <p>{count}</p>
      <button onClick={() => buttonHandler()}>Increase</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </div>
  );
}

export default Counter;
