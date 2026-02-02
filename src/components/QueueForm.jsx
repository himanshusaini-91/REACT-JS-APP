
import { useState } from "react";
export default function QueueForm({ onAdd }) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!name.trim()) || (!service.trim())) {
            alert("Please enter name and service");
            return;
        }
        onAdd({ name, service });
        setName("");
        setService("");
    }
    return (
        <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-xl border border-gray-800">
            <h2 className="text-xl font-bold mb-6 text-blue-500">Add to Queue</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Customer Name"
                        className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <select
                        value={service}
                        className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500 appearance-none"
                        onChange={(e) => setService(e.target.value)}
                    >
                        <option value="">Select Service</option>
                        <option value="consultation">Consultation</option>
                        <option value="payment">Payment</option>
                        <option value="support">Support</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Customer
                </button>
            </form>
        </div>
    );
}