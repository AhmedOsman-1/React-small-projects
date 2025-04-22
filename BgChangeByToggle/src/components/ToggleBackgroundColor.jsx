import React, { useState } from "react";

const ToggleBackgroundColor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-500 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <button
        onClick={handleClick}
        className={`px-6 py-2 border-2 rounded-lg font-semibold transition-all duration-300 
          ${isDarkMode ? "border-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white"}`}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>

      <section className="mt-10">
        <h1 className="text-4xl font-bold">Welcome to A <br /> Real world...</h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
