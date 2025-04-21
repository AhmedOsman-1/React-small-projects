import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">{count}</h1>
        <div className="space-x-4">
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
