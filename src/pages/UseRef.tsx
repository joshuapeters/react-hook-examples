import { useCallback, useEffect, useRef, useState } from "react";

export const UseRef = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("red");

  const onContainerResize = useCallback(() => {
    if (!containerRef.current) return;

    const { width } = containerRef.current.getBoundingClientRect();
    if (width > 500) {
      setColor("green");
    } else {
      setColor("red");
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const resizeObserver = new ResizeObserver(onContainerResize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, onContainerResize, setColor]);

  return (
    <div
      ref={containerRef}
      style={{
        resize: "both",
        overflow: "auto",
        backgroundColor: color,
      }}>
      The color of this div will change when it is resized!
    </div>
  );
};
