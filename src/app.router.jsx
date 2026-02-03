import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import QueueManagementSystem from './components/QueueManagementSystem'
import PropsAndContext from './components/PropsAndContext'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queue" element={<QueueManagementSystem />} />
            <Route path="/props-context" element={<PropsAndContext />} />
        </Routes>
    )
}
