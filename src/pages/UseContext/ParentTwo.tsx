import { PropsWithChildren } from "react";

type ParentTwoProps = PropsWithChildren;

export const ParentTwo = ({ children }: ParentTwoProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "1rem",
        margin: "1rem",
      }}>
      <p>I'm the second container!</p>
      <div>{children}</div>
    </div>
  );
};
