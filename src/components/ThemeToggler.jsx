import { useState, createContext, useContext, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeContext = createContext()

export function useTheme() {
    if (!ThemeContext) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('Sun');

    const isDark = theme === 'Moon'

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(isDark ? 'dark' : 'light')
        console.log('Theme changed:', isDark ? 'dark' : 'light', root.classList.toString())
    }, [isDark])

    const toggleTheme = () => {
        console.log('Toggling theme...')
        setTheme(prev => prev === 'Sun' ? 'Moon' : 'Sun');
    }

    const value = {
        theme,
        toggleTheme,
        isDark
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function ThemeToggler() {
    const { toggleTheme, isDark } = useTheme()

    return (
        <div className={`
            relative overflow-hidden rounded-3xl w-full max-w-sm mx-auto transition-all duration-500 transform hover:scale-[1.02]
            ${isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl shadow-indigo-500/20 border border-gray-700/50'
                : 'bg-white text-gray-800 shadow-2xl shadow-gray-200/50 border border-gray-100'
            }
        `}>
            {/* Background Decorative Elements */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-700 ${isDark ? 'bg-indigo-500' : 'bg-orange-400'}`} />
            <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-700 ${isDark ? 'bg-purple-500' : 'bg-yellow-300'}`} />

            <div className="relative p-8 flex flex-col items-center text-center space-y-8 z-10">

                {/* Icon Container */}
                <div className={`
                    relative p-6 rounded-2xl shadow-lg transition-all duration-500 transform group
                    ${isDark
                        ? 'bg-gray-800/80 backdrop-blur-sm text-indigo-400 shadow-indigo-500/20 ring-1 ring-white/10'
                        : 'bg-orange-50 text-orange-500 shadow-orange-500/20 ring-1 ring-orange-100'
                    }
                `}>
                    <div className={`absolute inset-0 rounded-2xl opacity-20 bg-current blur-lg transition-opacity duration-300 ${isDark ? '' : 'opacity-10'}`} />
                    {isDark
                        ? <Moon className="w-16 h-16 stroke-[1.5] drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
                        : <Sun className="w-16 h-16 stroke-[1.5] drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                    }
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-current to-current/70">
                        {isDark ? 'Dark Mode' : 'Light Mode'}
                    </h2>
                    <p className={`text-base font-medium leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {isDark
                            ? 'Experience usage in current environment.'
                            : 'Experience usage in current environment.'}
                    </p>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={`
                        group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden
                        ${isDark
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 ring-1 ring-indigo-500/50'
                            : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30'
                        }
                    `}
                >
                    <span className="relative z-10">Switch Appearance</span>
                    <div className="w-px h-4 bg-white/20 relative z-10" />
                    <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </div>
                </button>
            </div>
        </div>
    )
}
