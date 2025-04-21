import React, { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#000000");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container  ">
            <h1 className="font-bold text-4xl text-center p-4">Color Picker</h1>
            <div
                className="color-display h-[700px] w-full flex flex-col justify-center items-center"
                style={{ backgroundColor: color }}>
                <p>Selected Color:{color} </p>
            </div>
            <label className="color-picker mt-4 p-8 font-bold text-2xl flex justify-center">
                Select a Color:{" "}
            </label>
            <input
                className="border m-4 rounded-sm"
                type="color"
                id="color-picker"
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default ColorPicker;
