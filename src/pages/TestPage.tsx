import { memo, useCallback, useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  console.log("Parent rendered");

  const handleInc = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <button className="flex" onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <button className="flex" onClick={() => setCount1((prev) => prev + 1)}>
        Increment Count1
      </button>
      <Child value={count1} setter={handleInc} />
    </div>
  );
};

const Child = memo(
  ({ value, setter }: { value: number; setter: () => void }) => {
    console.log("Child rendered", value);

    return <button onClick={setter}>Click Me</button>;
  }
);

export default TestPage;
