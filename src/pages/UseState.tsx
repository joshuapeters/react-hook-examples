import { useState } from "react";

export const UseState = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        The classic. Use <code>useState</code> to create a piece of data that is
        managed by the component. Here, we have a counter that increments when
        you click the button. The counter is stored in a variable called
        <code>count</code> whose default value is 0, and we can update it by
        calling <code>setCount</code>. These are provided to us by the call to
        <code>useState</code> when we set up the data, like so:{" "}
        <code>const [count, setCount] = useState(0)</code>.
      </p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
