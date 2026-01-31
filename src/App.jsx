
import { useState } from 'react'
import screenshotImg from './assets/Screenshot.png'
import Card from './components/Card'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

function App() {

  const cardData = [
    {
      title: "Card 1 Title",
      description: "Description for card 1. This uses the same image.",
    },
    {
      title: "Card 2 Title",
      description: "Description for card 2. This also uses the same image.",
    },
    {
      title: "Card 3 Title",
      description: "Description for card 3. Another card example.",
    }
  ];

  return (
    <>
      <Header />
      <Hero />
      <div >
        <h1>First React Project</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={screenshotImg}
          />
        ))}


      </div>

    </>
  )
}

export default App
