import { useState } from "react";

function App() {
    const [color, setColor] = useState("none");

    return (
        <>
            <div
                className="w-screen h-screen duration-200 overflow-hidden"
                style={{ backgroundColor: color }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-8 shadow-lg bg-white px-2 py-2 text-black rounded-xl">
                        <button
                            onClick={() => setColor("red")}
                            className="outline-none px-4 rounded-xl text-white shadow-lg"
                            style={{ backgroundColor: "red" }}>
                            Red
                        </button>
                        <button
                            onClick={() => setColor("green")}
                            className="outline-none px-4 rounded-xl text-white shadow-lg"
                            style={{ backgroundColor: "green" }}>
                            Green
                        </button>
                        <button
                            onClick={() => setColor("blue")}
                            className="outline-none px-4 rounded-xl text-white shadow-lg"
                            style={{ backgroundColor: "blue" }}>
                            Blue
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
