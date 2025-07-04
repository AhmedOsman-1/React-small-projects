import { useState, useCallback, useEffect, useRef } from "react";

function App() {
    const [length, setLength] = useState(10);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");


    const passwordRef = useRef(null);

    const passWordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]);


    const copyPasswordToClipBoard = useCallback(()=> {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 100);
        window.navigator.clipboard.writeText(passwordRef.current.value);
    },[passwordRef, password]);     
    

    useEffect(() => {
        passWordGenerator();
    }, [passWordGenerator, length, numberAllowed, charAllowed]);

    return (
        <>
            <div className=" w-md max-w-md mx-auto shadow-md rounded-lg px-4 py-8  my-8 bg-gray-800 text-orange-600">
                <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="password"
                        
                        ref = {passwordRef}
                    />
                    <button 
                    onClick={copyPasswordToClipBoard}
                    className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 min-w-auto ml-">
                        Copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            checked={numberAllowed}
                            id="numberInput"
                            onChange={() => setNumberAllowed((prev) => !prev)}
                            className="cursor-pointer"
                        />
                        <label>Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            id="characterInput"
                            onChange={() => setCharAllowed((prev) => !prev)}
                            className="cursor-pointer"
                        />
                        <label>Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
