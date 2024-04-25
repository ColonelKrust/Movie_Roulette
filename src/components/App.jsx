import React from 'react'
import Questionnaire from './Questionnaire.jsx'
import RouletteWheel from './RouletteWheel.jsx'
import rouletteImage from '../../images/rouletteWheel.png'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { List, Film } from 'react-bootstrap-icons'
import '../styles/appStyle.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      moviesList: [],
      chosenMovie: {},
      show: false
    }

    this.updateMoviesList = this.updateMoviesList.bind(this)
    this.showSidebar = this.showSidebar.bind(this)
    this.hideSidebar = this.hideSidebar.bind(this)
  }

  updateMoviesList(moviesArray) {
    this.setState({
      moviesList: moviesArray,
      chosenMovie: moviesArray[Math.floor(Math.random() * moviesArray.length)]
    })
  }

  showSidebar() {
    this.setState({ show: true })
  }

  hideSidebar() {
    this.setState({ show: false })
  }

  render() {
    return (
      <div data-testid='appComponent' id='appComponent'>
        <div id='titleHeader'>
          <h1 id='appTitle'>Movie Roulette</h1>
          <img id='rouletteLogo' src={rouletteImage} alt='Roulette wheel image' />
          <p id='appDesc'>Put a spin on movie night</p>
          <Button id='sidebarButton' onClick={this.showSidebar}><List size={40} color='#eaeaea'/></Button>
        </div>
        <Questionnaire updateMoviesList={(array) => this.updateMoviesList(array)}/>
        <br></br>
        <RouletteWheel moviesList={this.state.moviesList} movieChoice={this.state.chosenMovie} />
      </div>
    )
  }
}

export default App