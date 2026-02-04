import { forwardRef } from 'react'

/**
 * RefProps Component
 * Demonstrates passing refs to components using forwardRef.
 */
const RefProps = forwardRef((props, ref) => {
    return (
        <div className="p-6 bg-gray-800 border border-white/10 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Ref Props (forwardRef)</h2>
            <div className="space-y-4">
                <p className="text-sm text-gray-400">
                    This input element is controlled by a ref passed from the parent component.
                </p>
                <input
                    ref={ref}
                    type="text"
                    placeholder="I am being 'reffed'..."
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
            </div>
        </div>
    )
})

RefProps.displayName = 'RefProps'

export default RefProps
