import { useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);

  // ⚠️ This function is re-created on every render

  console.log("Parent rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <Child />
    </div>
  );
};

const Child = () => {
  console.log("❌ Child rendered");

  return <button>Click Me</button>;
};

export default TestPage;
