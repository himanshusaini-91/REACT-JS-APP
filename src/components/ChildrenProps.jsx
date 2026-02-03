/**
 * ChildrenProps Component
 * Demonstrates the special 'children' prop for nesting content within components.
 */
export default function ChildrenProps({ title, children }) {
    return (
        <div className="p-6 bg-gray-800 border border-white/10 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4 italic">{title}</h2>
            <div className="p-4 bg-gray-900/50 rounded-lg border border-indigo-500/20 text-gray-400">
                {children}
            </div>
            <p className="mt-4 text-xs text-gray-500">
                The content above was passed via the <code className="text-indigo-300">children</code> prop.
            </p>
        </div>
    )
}
