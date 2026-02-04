import { useState } from 'react'

/**
 * BasicProps Component
 * Demonstrates passing simple data types (strings, numbers, booleans) as props.
 */
export default function BasicProps({ name, age, isStudent }) {
  const [clickCount, setClickCount] = useState(0)
  function Button({ text, color, size, onClick, disabled }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2  rounded-lg tarnsition-all-duration-300 font-medium ${size === 'small' ? 'text-sm px-4 py-3' : 'text-lg px-8 py-3'} 
                 ${color === 'primary' ? 'bg-blue-500 text-white'
            : color === 'secondary' ? 'bg-gray-600 text-white'
              : color === 'danger' ? 'bg-red-600 text-white'
                : color === 'warning' ? 'bg-yellow-600 text-white'
                  : color === 'info' ? 'bg-blue-600 text-white'
                    : color === 'success' ? 'bg-green-600 text-white'
                      : color === 'disabled' ? 'bg-gray-600 text-white opacity-50 cursor-not-allowed'
                        : 'bg-blue-500 text-white'
          }
              `}
      >
        {text}
      </button>
    )
  }
  return (
    <div className="p-6 bg-gray-800 border border-white/10 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Basic Props Demonstration</h2>
      <div className="space-y-2 text-gray-300">
        <p><span className="font-semibold text-indigo-400">Name:</span> {name}</p>
        <p><span className="font-semibold text-indigo-400">Age:</span> {age}</p>
        <p><span className="font-semibold text-indigo-400">Status:</span> {isStudent ? 'Student' : 'Not a Student'}</p>
      </div>
      <div className="space-y-4">
        <h3>Different Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Primary" color="primary" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Secondary" color="secondary" size="large" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Danger" color="danger" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Warning" color="warning" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Info" color="info" size="small" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Success" color="success" size="large" onClick={() => setClickCount(clickCount + 1)} />
          <Button text="Disabled" color="disabled" size="small" onClick={() => setClickCount(clickCount + 1)} />
        </div>
      </div>
    </div>
  )
}
