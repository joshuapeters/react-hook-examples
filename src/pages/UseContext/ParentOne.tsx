import { PropsWithChildren } from "react";

type ParentOneProps = PropsWithChildren;

export const ParentOne = ({ children }: ParentOneProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "1rem",
        margin: "1rem",
      }}>
      <p>I'm the first container!</p>
      <div>{children}</div>
    </div>
  );
};
