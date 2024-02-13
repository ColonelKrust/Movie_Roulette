import React from 'react'
import { createRoot } from 'react-dom/client'
import Questionaire from './components/Questionaire.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1 id='appTitle'>Movie Roulette</h1>
        <h3 id='appDesc'>Find what to watch this movie night</h3>
        <Questionaire />
        <br></br>
        {/* After submission of questionaire, you will be able to "roll the wheel"
         for a movie based off of your answers */}
        <text>[Roulette "wheel" Here]</text>
      </div>
    )
  }
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)