import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import QueueManagementSystem from './components/QueueManagementSystem'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queue" element={<QueueManagementSystem />} />
        </Routes>
    )
}
