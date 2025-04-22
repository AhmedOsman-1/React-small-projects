import React, { useState } from 'react';
import { testimonials } from '../quotes/quotes';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

   
    
    const handlePrevButton = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNextButton = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center">
            <div className="mb-6">
                <blockquote className="text-xl font-semibold text-gray-700 italic">
                    “{testimonials[currentIndex].quote}”
                </blockquote>
                <p className="mt-4 text-sm text-gray-500">- {testimonials[currentIndex].author}</p>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={handlePrevButton}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Prev
                </button>
                <button
                    onClick={handleNextButton}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
