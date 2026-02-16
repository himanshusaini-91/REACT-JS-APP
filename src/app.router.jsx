import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import QueueManagementSystem from './components/QueueManagementSystem'
import PropsAndContext from './components/PropsAndContext'
import HookComponent from './components/hookComponent/customHook'
import CounterStore from './components/counterStore'
import Post from './components/post'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queue" element={<QueueManagementSystem />} />
            <Route path="/props-context" element={<PropsAndContext />} />
            <Route path="/hook-component" element={<HookComponent />} />
            <Route path="/counter-store" element={<CounterStore />} />
            <Route path="/counter-store/posts" element={<Post />} />
        </Routes>
    )
}
