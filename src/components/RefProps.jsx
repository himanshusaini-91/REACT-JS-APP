import { forwardRef, useRef } from 'react'
import { Target, MousePointer2, ClipboardCopy, Trash2, Info } from 'lucide-react'

/**
 * CustomInput Component
 * A reusable input component that forwards its ref to the underlying input element.
 */
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-indigo-300/90 uppercase tracking-wider ml-1">{label}</label>
            <div className="relative group">
                <input
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    className={`
                        w-full px-5 py-3 
                        bg-gray-900/50 border border-white/10 
                        rounded-2xl text-white placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
                        transition-all duration-300 ease-out
                        group-hover:border-white/20
                        ${className}
                    `}
                />
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
        </div>
    )
})
CustomInput.displayName = 'CustomInput'

/**
 * RefProps Component
 * Demonstrates passing refs to components using forwardRef.
 */
const RefProps = forwardRef((props, ref) => {
    const inputRef = useRef(null)
    const secondInputRef = useRef(null)

    const handleFocusInput = () => {
        inputRef.current?.focus()
    }

    const handleFocusSecondInput = () => {
        secondInputRef.current?.focus()
    }

    const getInputValue = () => {
        if (inputRef.current?.value) {
            alert(`First Input value is: ${inputRef.current?.value}`)
        } else {
            alert('First input is empty!')
        }
    }

    const getSecondInputValue = () => {
        if (secondInputRef.current?.value) {
            alert(`Second Input value is: ${secondInputRef.current?.value}`)
        } else {
            alert('Second input is empty!')
        }
    }

    const clearInputValue = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
            inputRef.current.focus()
        }
    }

    const clearSecondInputValue = () => {
        if (secondInputRef.current) {
            secondInputRef.current.value = ''
            secondInputRef.current.focus()
        }
    }

    return (
        <section className="relative overflow-hidden p-8 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-indigo-500/10 hover:border-white/20">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative space-y-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest border border-indigo-500/20">
                            <Target className="size-3" />
                            Ref Hook & forwardRef
                        </div>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            Interactive <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Refs</span>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                            Refs allow you to access DOM nodes directly. Using <code className="text-indigo-300 font-mono text-[11px]">forwardRef</code>, we can pass references through components.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                    <div className="space-y-6">
                        <CustomInput
                            ref={inputRef}
                            label="Primary Target"
                            placeholder="Type something here..."
                        />
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={handleFocusInput}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-95 whitespace-nowrap"
                            >
                                <MousePointer2 className="size-3.5" /> Focus
                            </button>
                            <button
                                onClick={getInputValue}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-lg border border-white/5 transition-all active:scale-95 whitespace-nowrap"
                            >
                                <ClipboardCopy className="size-3.5" /> Read
                            </button>
                            <button
                                onClick={clearInputValue}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-lg border border-red-500/20 transition-all active:scale-95 whitespace-nowrap"
                            >
                                <Trash2 className="size-3.5" /> Clear
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <CustomInput
                            ref={secondInputRef}
                            label="Secondary Input REF"
                            placeholder="Another input ref..."
                        />
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={handleFocusSecondInput}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-95 whitespace-nowrap"
                            >
                                <MousePointer2 className="size-3.5" /> Focus
                            </button>
                            <button
                                onClick={getSecondInputValue}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-lg border border-white/5 transition-all active:scale-95 whitespace-nowrap"
                            >
                                <ClipboardCopy className="size-3.5" /> Read
                            </button>
                            <button
                                onClick={clearSecondInputValue}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-lg border border-red-500/20 transition-all active:scale-95 whitespace-nowrap"
                            >
                                <Trash2 className="size-3.5" /> Clear
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="flex items-center gap-3 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                    <Info className="size-5 text-indigo-400 shrink-0" />
                    <p className="text-xs text-indigo-300/80 leading-relaxed italic">
                        "Try interacting with the buttons to see how they affect the custom input components via refs!"
                    </p>
                </div>
            </div>
        </section>
    )
})

RefProps.displayName = 'RefProps'

export default RefProps
