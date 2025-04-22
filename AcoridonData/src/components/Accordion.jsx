import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="border-b border-gray-200">
            <div
                onClick={() => setIsActive(!isActive)}
                className="flex justify-between items-center cursor-pointer px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
            >
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                <span className="text-xl font-bold text-gray-600">
                    {isActive ? '-' : '+'}
                </span>
            </div>

            {isActive && (
                <div className="px-4 py-3 bg-white text-gray-700 transition-all duration-300">
                    <p>{content}</p>
                </div>
            )}
        </section>
    );
};

export default Accordion;
