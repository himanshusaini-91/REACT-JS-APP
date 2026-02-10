import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import AppRouter from './app.router'
import './App.css'
import { ThemeProvider } from './components/ThemeToggler'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300">
          <Header />
          <main>
            <AppRouter />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
