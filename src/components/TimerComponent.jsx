import { useEffect, useState } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []); // dependency array

  return <p>{count}</p>;
}

export default TimerComponent;
