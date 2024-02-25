import React, { useState } from 'react'

function RouletteWheel (props) { 
    if (props.moviesList.length > 0) {
        const movies = props.moviesList
        const movieChoice = movies[Math.floor(Math.random() * movies.length)]

        return (
            <div id='rouletteWheel'>
                <div id='wheel'>
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