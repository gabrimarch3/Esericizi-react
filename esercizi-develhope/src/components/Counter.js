import { useEffect, useState } from "react";

const Counter = ({start, add, ms}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
        setCount(count => count + add);
    }, ms);
    return () => clearInterval(interval)
  }, [])

  return <h1>{count}</h1>
};

export default Counter;
