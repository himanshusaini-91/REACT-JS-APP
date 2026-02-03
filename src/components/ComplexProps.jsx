/**
 * ComplexProps Component
 * Demonstrates passing objects, arrays, and functions as props.
 */
export default function ComplexProps({ user, tags, onAction }) {
    return (
        <div className="p-6 bg-gray-800 border border-white/10 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Complex Props Demonstration</h2>

            <div className="mb-6">
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">User Object</h3>
                <p className="text-gray-300">{user.firstName} {user.lastName} ({user.email})</p>
            </div>

            <div className="mb-6">
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Tags Array</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full border border-indigo-500/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Function Prop</h3>
                <button
                    onClick={() => onAction('Triggered from ComplexProps!')}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                    Call Action Function
                </button>
            </div>
        </div>
    )
}
