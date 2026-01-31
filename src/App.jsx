
import { useState } from 'react'
import screenshotImg from './assets/Screenshot.png'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <div >
        <h1>First React Project</h1>
      </div>
      <Card
        title="Card Title"
        description="The goal is to add a Card component that includes a description, improving the UI of the application."
        image={screenshotImg}
      />

    </>
  )
}

export default App
