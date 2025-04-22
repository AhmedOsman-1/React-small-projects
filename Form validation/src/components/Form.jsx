import React, { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const validate = (e) => {
        e.preventDefault();

        // Username validation
        if (username.length > 8) {
            setUsername("");
            setUserColor("text-black");
        } else {
            setErrorUserName("Username must be more than 8 characters");
            setUserColor("text-red-500");
        }

        // Email validation
        if (email.includes("@gmail")) {
            setErrorEmail("");
            setEmailColor("text-black");
        } else {
            setEmailColor("text-red-500");
            setErrorEmail("Email must contain @gmail");
        }

        // Password validation
        if (password.length > 8) {
            setErrorPassword("");
            setPasswordColor("text-black");
        } else {
            setErrorPassword("Password must be more than 8 characters");
            setPasswordColor("text-red-500");
        }

        // Confirm Password validation
        if (password !== " " && password === confirmPassword) {
            setConfirmPasswordColor("text-black");
            setErrorConfirmPassword("");
        } else {
            setConfirmPasswordColor("text-red-500");
            setErrorConfirmPassword("Password must be same");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={validate} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`w-full p-3 border ${userColor} text-black rounded-md focus:outline-none`}
                    />
                    <p className="text-sm mt-1">{errorUserName}</p>
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 border ${emailColor} text-black rounded-md focus:outline-none`}
                    />
                    <p className="text-sm mt-1">{errorEmail}</p>
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-3 border ${passwordColor} text-black rounded-md focus:outline-none`}
                    />
                    <p className="text-sm mt-1">{errorPassword}</p>
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full p-3 border ${confirmPasswordColor} text-black rounded-md focus:outline-none`}
                    />
                    <p className="text-sm mt-1">{errorConfirmPassword}</p>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
