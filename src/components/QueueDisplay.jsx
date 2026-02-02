export default function QueueDisplay({ queue, updateStatus, removeFromQueue }) {
    return (
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-xl border border-gray-800 h-full">
            <h2 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-4">Current Queue</h2>

            {queue.length === 0 ? (
                <div className="text-gray-500 italic py-4">No customers in queue</div>
            ) : (
                <div className="space-y-4">
                    {queue.length > 0 ? queue.map((customer, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-[#121212] rounded border border-gray-800">
                            <div>
                                <h3 className="font-bold text-white mb-1">{customer.name}</h3>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-xs text-gray-500">Service: {customer.service}</span>
                                    <span className={`text-[10px] font-bold uppercase ${customer.status === 'completed' ? 'text-blue-500' :
                                        customer.status === 'serving' ? 'text-green-500' :
                                            'text-orange-500'
                                        }`}>
                                        {customer.status || 'waiting'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {customer.status !== 'completed' && (
                                    <button
                                        onClick={() => updateStatus(index, customer.status === 'serving' ? 'completed' : 'serving')}
                                        className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
                                    >
                                        {customer.status === 'serving' ? 'Complete' : 'Serve'}
                                    </button>
                                )}
                                <button
                                    onClick={() => removeFromQueue(index)}
                                    className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded transition-colors"
                                    title="Remove"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )) : (
                        <div className="text-gray-500 italic py-4">No customers in queue</div>
                    )}
                </div>
            )}
        </div>
    );
}