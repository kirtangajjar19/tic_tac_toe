import { useState } from "react";

function ExampleCounter({ name }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const isEven = count % 2 === 0;

  return (
    <div>
      <h2>Hello, {name}</h2>

      <p>Count: {count}</p>

      <p>{isEven ? "Even" : "Odd"}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default ExampleCounter;
