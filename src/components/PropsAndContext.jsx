import { useState, useRef } from 'react'
import { BookOpen, Box, Layers, Code, Target, Palette } from 'lucide-react'
import BasicProps from './BasicProps'
import ChildrenProps from './ChildrenProps'
import ComplexProps from './ComplexProps'
import RefProps from './RefProps'
import ThemeToggler from './ThemeToggler'

export default function PropsAndContext() {
    // We use State to track WHICH component to show and WHAT data (props) to give it
    const [activeTab, setActiveTab] = useState('basic')
    const [activeProps, setActiveProps] = useState({ name: "Alice Smith", age: 25, isStudent: true })
    const [ActiveComponent, setActiveComponent] = useState(() => BasicProps)

    const inputRef = useRef(null)

    const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
    }

    const tagList = ['React', 'JavaScript', 'Tailwind', 'Props']

    const handleAction = (message) => {
        alert(message)
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const sections = [
        { id: 'basic', label: 'Basic Props', component: BasicProps, icon: Box, props: { name: "Alice Smith", age: 25, isStudent: true } },
        {
            id: 'children',
            label: 'Children Props',
            component: ChildrenProps,
            icon: Layers,
            props: {
                title: "Nesting Content",
                children: <p className="text-gray-400">This content is passed using the <b>children</b> prop!</p>
            }
        },
        { id: 'complex', label: 'Complex Props', component: ComplexProps, icon: Code, props: { user: userData, tags: tagList, onAction: handleAction } },
        { id: 'ref', label: 'Ref Props', component: RefProps, icon: Target, props: { ref: inputRef } },
        { id: 'theme', label: 'Theme Toggler', component: ThemeToggler, icon: Palette, props: {} }
    ]

    // Every time a user clicks a button, we update the State
    const handleTabChange = (item) => {
        setActiveTab(item.id)
        // We MUST use an arrow function here! 
        // Otherwise React will TRY to execute the component immediately as a state updater.
        setActiveComponent(() => item.component)
        setActiveProps(item.props)
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="container mx-auto px-4 py-12">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-indigo-500/10 text-indigo-400">
                        <BookOpen className="size-8" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        Props & <span className="text-indigo-500">Context</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Master the core concepts of data flow in React through interactive examples and pattern demonstrations.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <nav className="sticky top-24 p-2 bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-2xl">
                            <h2 className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                                Components
                            </h2>
                            <div className="space-y-1">
                                {sections.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleTabChange(item)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === item.id
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 translate-x-1'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                            }`}
                                    >
                                        <item.icon className={`size-5 transition-colors ${activeTab === item.id ? 'text-white' : 'text-gray-500'}`} />
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-gray-800/30 border border-white/5 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
                            <div className="w-full max-w-2xl transform transition-all duration-300">
                                {/* Now we pass the STATE value as props */}
                                {ActiveComponent && <ActiveComponent {...activeProps} />}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
