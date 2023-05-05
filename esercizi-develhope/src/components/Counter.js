import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({start, add, ms}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
        setCount(count => count + add);
    }, ms);
    return () => clearInterval(interval)
  }, [])

  return <CounterDisplay count={count} />
};

export default Counter;
