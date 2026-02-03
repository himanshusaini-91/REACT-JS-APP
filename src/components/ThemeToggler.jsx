import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

/**
 * ThemeToggler Component
 * A complete interactive example showing State and Conditional Rendering.
 */
export default function ThemeToggler() {
    const [isDark, setIsDark] = useState(true)

    return (
        <div className={`p-8 rounded-2xl border transition-all duration-500 ${isDark
                ? 'bg-gray-800 border-white/10 text-white'
                : 'bg-white border-gray-200 text-gray-900 shadow-xl'
            }`}>
            <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Theme Toggler
                </h2>
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-3 rounded-xl transition-all duration-300 ${isDark
                            ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                        }`}
                >
                    {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
                </button>
            </div>

            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Currently in <span className="font-bold uppercase">{isDark ? 'Dark' : 'Light'}</span> mode.
                This component demonstrates how state affects style and content.
            </p>

            <div className={`mt-6 p-4 rounded-lg text-sm ${isDark ? 'bg-indigo-500/10 text-indigo-300' : 'bg-indigo-50 text-indigo-500'
                }`}>
                Interactive React Learning Example
            </div>
        </div>
    )
}
