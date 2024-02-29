import React, { useState } from 'react'
import axios from 'axios'
import genericPoster from '../../images/generic_poster.png'
import '../styles/wheelStyle.css'

function RouletteWheel (props) { 
    if (props.moviesList.length > 0) {
        const movies = props.moviesList
        const movieChoice = props.movieChoice
        const chosenMovieID = movieChoice.tmdbId
        const [ moviePosterObj, setMoviePosterObj ] = useState({
            url: '',
            title: ''
        })

        if(movieChoice.title !== moviePosterObj.title) {
            axios.get(`/moviePoster?movieId=${chosenMovieID}`)
            .then((response) => {
                console.log('Poster received: ', response.data)
                setMoviePosterObj({title: response.data.title, url: 'http://image.tmdb.org/t/p/w300' + response.data.url})
            })
            .catch((err) => {
                console.log('Status Code: ' + err.status + '\n' + err)
                setMoviePosterObj({url: genericPoster})
            })
        }

        return (
            <div id='rouletteWheel'>
                <div id='wheel'>
                    <img id='moviePoster' src={moviePosterObj.url} alt='poster for chosen movie' />
                    <br />
                    <div id='movieDescription'>
                        <h2 id='movieTitle'>{movieChoice.title}</h2>
                        <p>{'Year: ' + movieChoice.year}</p>
                        <br />
                        <p id='overviewLabel'>Overview</p>
                        <p id='overviewText'>{movieChoice.overview}</p>
                        <br />
                        <p>{'Available on:' + movieChoice.streamingInfo.us.map((service) => {
                            return ' ' + service.service
                        }).filter((service, index, servicesArray) => {
                            return servicesArray.indexOf(service) === index
                        })}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default RouletteWheel