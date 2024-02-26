import React from 'react'
import { createRoot } from 'react-dom/client'
import Questionaire from './components/Questionaire.jsx'
import RouletteWheel from './components/RouletteWheel.jsx'

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
      <div>
        <h1 id='appTitle'>Movie Roulette</h1>
        <h3 id='appDesc'>Find what to watch this movie night</h3>
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