import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import AppRouter from './app.router'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 pt-16">
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
    </Router>
  )
}

export default App
