import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p className=" m-4 font-bold text-2xl">Count: {count}</p>
            <button
                className="bg-cyan-600 font-bold font-white px-6 py-2 rounded-sm cursor-pointer m-4"
                onClick={increment}>
                Increment
            </button>
            <button
                className="bg-cyan-600 font-bold font-white px-6 py-2 rounded-sm cursor-pointer m-4"
                onClick={decrement}>
                Decrement
            </button>
            <button
                className="bg-cyan-600 font-bold font-white px-6 py-2 rounded-sm cursor-pointer m-4"
                onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default Counter;
