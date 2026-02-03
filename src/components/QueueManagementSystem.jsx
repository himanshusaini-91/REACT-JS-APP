import QueueForm from "./QueueForm";
import QueueDisplay from "./QueueDisplay";
import { useState } from "react";
export default function QueueManagementSystem() {
    const [queue, setQueue] = useState([]);
    const addToQueue = (CutomerData) => {
        setQueue([...queue, { ...CutomerData, id: Date.now() }]);
    }
    const updateStatus = (id, status) => {
        const updatedQueue = queue.map((customer, index) => {
            if (index === id) {
                customer.status = status;
            }
            return customer;
        })
        setQueue(updatedQueue);
    }
    const removeFromQueue = (id) => {
        const updatedQueue = queue.filter((customer, index) => {
            return index !== id;
        })
        setQueue(updatedQueue);
    }
    return (
        <div className="min-h-screen bg-[#121212] text-white py-10 px-4">
            <header className="text-center mb-10">
                <h1 className="text-3xl font-bold text-blue-500 mb-2">Queue Management System</h1>
                <p className="text-gray-400">Manage your customers efficiently</p>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 rounded-lg">
                    <QueueForm onAdd={addToQueue} />
                </div>
                <div className="md:col-span-8 rounded-lg">
                    <QueueDisplay queue={queue} updateStatus={updateStatus} removeFromQueue={removeFromQueue} />
                </div>
            </div>
        </div>
    );
}