import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false)
  const [bgColor, setBgColor] = useState('white')

  const handleSectionClick = () => {
    if (showInput) {
      setShowInput(false)
      setBgColor('black')
    }
  }

  return (
    <section
      className={`flex items-center justify-center min-h-screen transition-colors duration-500 ${
        bgColor === 'black' ? 'bg-black' : 'bg-white'
      }`}
      onClick={handleSectionClick}
    >
      <div
        className="flex items-center gap-3 bg-gray-200 px-4 py-2 rounded-full shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent background click
      >
        {showInput && (
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 py-1 bg-transparent text-black"
          />
        )}
        <FaSearch
          className="text-gray-700 cursor-pointer"
          onClick={() => setShowInput(true)}
        />
      </div>
    </section>
  )
}

export default HiddenSearchBar
