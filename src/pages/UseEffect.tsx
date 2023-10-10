import { useEffect, useState } from "react";

export const UseEffect = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("blue");

  useEffect(() => {
    if (count % 2 === 0) {
      setBackgroundColor("blue");
    } else {
      setBackgroundColor("purple");
    }
  }, [count]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "1rem",
      }}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
