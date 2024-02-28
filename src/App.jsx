import React from 'react'
import { createRoot } from 'react-dom/client'
import Questionaire from './components/Questionaire.jsx'
import RouletteWheel from './components/RouletteWheel.jsx'
import rouletteImage from '../images/rouletteWheel.png'
import './styles/appStyle.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      moviesList: [],
      chosenMovie: {}
    }

    this.updateMoviesList = this.updateMoviesList.bind(this);
  }

  updateMoviesList(moviesArray) {
    this.setState({
      moviesList: moviesArray,
      chosenMovie: moviesArray[Math.floor(Math.random() * moviesArray.length)]
    });
  }

  render() {
    return (
      <div id='app'>
        <div id='titleHeader'>
          <h1 id='appTitle'>Movie Roulette</h1>
          <img id='rouletteLogo' src={rouletteImage} alt='Roulette wheel image' />
          <p id='appDesc'>Find what to watch for movie night</p>
        </div>
        <Questionaire updateMoviesList={(array) => this.updateMoviesList(array)}/>
        <br></br>
        {/* After submission of questionaire, you will be able to "roll the wheel"
         for a movie based off of your answers */}
        <RouletteWheel moviesList={this.state.moviesList} movieChoice={this.state.chosenMovie} />
      </div>
    )
  }
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)