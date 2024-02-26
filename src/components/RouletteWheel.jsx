import React, { useState } from 'react'
import axios from 'axios'
import genericPoster from '../../images/generic_poster.png'

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
                <h2>{movieChoice.title}</h2>
                <h4>{'Year: ' + movieChoice.year}</h4>
                <h4>{'Overview: ' + movieChoice.overview}</h4>
                <h4>{'Available on:' + movieChoice.streamingInfo.us.map((service) => {
                    return ' ' + service.service
                }).filter((service, index, servicesArray) => {
                    return servicesArray.indexOf(service) === index
                })}</h4>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default RouletteWheel