/**
 * BasicProps Component
 * Demonstrates passing simple data types (strings, numbers, booleans) as props.
 */
export default function BasicProps({ name, age, isStudent }) {
    return (
        <div className="p-6 bg-gray-800 border border-white/10 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Basic Props Demonstration</h2>
            <div className="space-y-2 text-gray-300">
                <p><span className="font-semibold text-indigo-400">Name:</span> {name}</p>
                <p><span className="font-semibold text-indigo-400">Age:</span> {age}</p>
                <p><span className="font-semibold text-indigo-400">Status:</span> {isStudent ? 'Student' : 'Not a Student'}</p>
            </div>
        </div>
    )
}
