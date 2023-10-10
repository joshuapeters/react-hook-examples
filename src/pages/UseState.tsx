import { useState } from "react";

export const UseState = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
