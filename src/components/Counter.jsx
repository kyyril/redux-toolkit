import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="w-full flex justify-center items-start mt-6">
      <div className="flex flex-row justify-between items-center text-7xl">
        <button className="bg-green-500 p-2" onClick={decrement}>
          -
        </button>
        <span className="mx-4">{count}</span>
        <button className="bg-yellow-500 p-2" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
