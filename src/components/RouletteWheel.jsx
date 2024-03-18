import React, { useState } from 'react'
import axios from 'axios'
import genericPoster from '../../images/generic_poster.png'
import '../styles/wheelStyle.css'
import ServicesList from './ServicesList.jsx'

function RouletteWheel (props) { 
    if (props.moviesList.length > 0) {
        const movieChoice = props.movieChoice
        const chosenMovieID = movieChoice.tmdbId
        let overview = movieChoice.overview
        const streamingServices = movieChoice.streamingInfo.us.map((service) => {
            return service.service
        }).filter((service, index, servicesArray) => {
            return servicesArray.indexOf(service) === index
        })
        const [ moviePosterObj, setMoviePosterObj ] = useState({
            url: '',
            title: '',
            overview: ''
        })

        if (movieChoice.title !== moviePosterObj.title) {
            axios.get(`/moviePoster?movieId=${chosenMovieID}`)
            .then((response) => {
                setMoviePosterObj({
                    title: response.data.title,
                    url: 'http://image.tmdb.org/t/p/w300' + response.data.url,
                    overview: response.data.overview
                })
            })
            .catch((err) => {
                console.log('Status Code: ' + err.status + '\n' + err)
                setMoviePosterObj({url: genericPoster})
            })
        }

        return (
            <div data-testid='WheelComponent' id='rouletteWheel'>
                <div id='wheel'>
                    <img id='moviePoster' src={moviePosterObj.url} alt='poster for chosen movie' />
                    <br />
                    <div id='movieDescription'>
                        <h2 id='movieTitle'>{movieChoice.title}</h2>
                        <p>{'Year: ' + movieChoice.year}</p>
                        <br />
                        <p id='overviewLabel'>Overview</p>
                        <p id='overviewText'>{moviePosterObj.overview}</p>
                        <br />
                        <p>Available on: </p>
                        <div id='servicesList'>
                        <ServicesList streamingServices={streamingServices} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default RouletteWheel