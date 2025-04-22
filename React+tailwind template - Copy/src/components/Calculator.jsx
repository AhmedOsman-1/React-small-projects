import { useState } from "react";

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    const display = (value) => setInputValue(inputValue + value);
    const calculate = () => {
        try {
            setInputValue(eval(inputValue).toString());
        } catch {
            setInputValue("Error");
        }
    };
    const clear = () => setInputValue("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
                <input
                    type="text"
                    value={inputValue}
                    className="w-full mb-4 text-right text-2xl border border-gray-300 rounded p-2 focus:outline-none text-black"
                    readOnly
                />

                <div className="grid grid-cols-4 gap-2">
                    <span
                        onClick={clear}
                        className="col-span-1 bg-red-500 text-black text-center py-2 rounded cursor-pointer hover:bg-red-600">
                        C
                    </span>
                    <span className="bg-gray-500 text-black text-center py-2 rounded cursor-default">
                        /
                    </span>
                    <span
                        onClick={() => display("/")}
                        className="bg-blue-500 text-black text-center py-2 rounded cursor-pointer hover:bg-blue-600">
                        /
                    </span>
                    <span
                        onClick={() => display("*")}
                        className="bg-blue-500 text-black text-center py-2 rounded cursor-pointer hover:bg-blue-600">
                        *
                    </span>

                    {[7, 8, 9].map((num) => (
                        <span
                            key={num}
                            onClick={() => display(num.toString())}
                            className="bg-gray-500 text-black text-center py-2 rounded cursor-pointer hover:bg-gray-600">
                            {num}
                        </span>
                    ))}
                    <span
                        onClick={() => display("-")}
                        className="bg-blue-500 text-black text-center py-2 rounded cursor-pointer hover:bg-blue-600">
                        -
                    </span>

                    {[4, 5, 6].map((num) => (
                        <span
                            key={num}
                            onClick={() => display(num.toString())}
                            className="bg-gray-500 text-black text-center py-2 rounded cursor-pointer hover:bg-gray-600">
                            {num}
                        </span>
                    ))}
                    <span
                        onClick={() => display("+")}
                        className="bg-blue-500 text-black text-center py-2 rounded cursor-pointer hover:bg-blue-600">
                        +
                    </span>

                    {[1, 2, 3].map((num) => (
                        <span
                            key={num}
                            onClick={() => display(num.toString())}
                            className="bg-gray-500 text-black text-center py-2 rounded cursor-pointer hover:bg-gray-600">
                            {num}
                        </span>
                    ))}

                    <span
                        onClick={() => display("0")}
                        className="bg-gray-500 text-black text-center py-2 rounded cursor-pointer hover:bg-gray-600">
                        0
                    </span>
                    <span
                        onClick={() => display("00")}
                        className="bg-gray-500 text-black text-center py-2 rounded cursor-pointer hover:bg-gray-600">
                        00
                    </span>
                    <span
                        onClick={() => display(".")}
                        className="bg-gray-500 text-black text-center py-2 rounded cursor-pointer hover:bg-gray-600">
                        .
                    </span>
                    <span
                        onClick={calculate}
                        className="bg-green-500 text-black text-center py-2 rounded cursor-pointer hover:bg-green-600">
                        =
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Calculator;
