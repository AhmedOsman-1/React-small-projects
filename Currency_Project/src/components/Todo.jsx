import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 20),
            });
        });

        setInput("");
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-6">
                Todo List
            </h1>

            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Type new todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-l-md text-black" // Added text-black here
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
                    Submit
                </button>
            </div>

            <ul className="space-y-2">
                {todos.map(({ text, id }) => (
                    <li
                        key={id}
                        className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200">
                        <span className="text-black">{text}</span>
                        <button
                            onClick={() => removeTodo(id)}
                            className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600">
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
