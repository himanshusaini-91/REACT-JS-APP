import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Home, LayoutList, BookOpen } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Queue System', href: '/queue', icon: LayoutList },
        { name: 'Props & Context', href: '/props-context', icon: BookOpen },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-900/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <NavLink to="/" className="shrink-0">
                            <span className="text-xl font-bold tracking-tight text-white">
                                Queue<span className="text-indigo-400">Flow</span>
                            </span>
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all ${isActive
                                            ? 'bg-indigo-500/20 text-white'
                                            : 'text-gray-300 hover:bg-indigo-500/10 hover:text-white'
                                        }`
                                    }
                                >
                                    <item.icon className="size-4 text-gray-400 transition-colors group-hover:text-indigo-400" />
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block size-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block size-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-white/5 bg-gray-900`}>
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `group flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-all ${isActive
                                    ? 'bg-indigo-500/20 text-white'
                                    : 'text-gray-300 hover:bg-indigo-500/10 hover:text-white'
                                }`
                            }
                        >
                            <item.icon className="size-5 text-gray-400 group-hover:text-indigo-400" />
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}
