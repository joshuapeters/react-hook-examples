import { createContext, useState } from "react";
import { ParentTwo } from "./ParentTwo";
import { ParentOne } from "./ParentOne";
import { Counter } from "./Counter";

export const CountContext = createContext({
  count: 0,
  increment: () => {},
});

const CountProvider = CountContext.Provider;

export const UseContext = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <CountProvider value={{ count, increment }}>
      <ParentOne>
        <ParentTwo>
          <Counter />
        </ParentTwo>
      </ParentOne>
    </CountProvider>
  );
};
