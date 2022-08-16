import React, { useReducer } from "react";

// Defining the initial state and the reducer
const clearState = 0;
const quantitychange = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const ReducerHook = () => {
    // Initialising useReducer hook
  const [quantity, dispatch] = useReducer(quantitychange, clearState);
  return (
    <div>
      <h1>Product quantity</h1>
      <button onClick={() => dispatch("subtract")}>
        -
      </button>
      <h2>{quantity}</h2>
      <button onClick={() => dispatch("add")}>
        +
      </button>
      <button onClick={() => dispatch("reset")}>
        Clear
      </button>
    </div>
  );
};

export default ReducerHook;