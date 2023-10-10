import { useEffect, useState } from "react";

export const UseEffect = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);
  const [isOdd, setIsOdd] = useState(false);

  useEffect(() => {
    setIsEven(count % 2 === 0);
    setIsOdd(count % 2 !== 0);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <p>Is Even: {isEven.toString()}</p>
      <p>Is Odd: {isOdd.toString()}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
