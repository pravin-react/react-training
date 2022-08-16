import React, { useState, useEffect } from "react";

function LifecycleFun() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`updated to ${count}`);
    return () => {
      console.log(`Unmounted is ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
};

export default LifecycleFun;
