import { useCountContext } from "./UseCountContext";

export const Counter = (): JSX.Element => {
  const { count, increment } = useCountContext();
  return (
    <div
      style={{
        backgroundColor: "green",
        padding: "1rem",
        margin: "1rem",
      }}>
      <p>Current count: {count}</p>
      <button onClick={increment}>Click me!</button>
    </div>
  );
};
