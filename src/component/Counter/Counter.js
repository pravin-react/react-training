import React, { useState } from "react";
import { Container,Row } from 'react-bootstrap';

const Counter = () => {
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
setCounter((prevCounter) => prevCounter - 1);
};

return (
<><Container>
      <h2 className='text-middle'>Counter Click</h2>
      <Row>
      <div className="counter-sec">
            <button data-testid="decrement" onClick={decrementCounter}>
            -
            </button>
            <p data-testid="counter">{counter}</p>
            <button data-testid="increment" onClick={incrementCounter}>
            +
            </button>
      </div>
      </Row>
</Container>
</>
);
};

export default Counter;