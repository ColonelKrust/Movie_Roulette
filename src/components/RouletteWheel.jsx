import React, { useState } from 'react'

function RouletteWheel () {
    const [moviesArray, setMoviesArray] = useState([]);

    function getAllMovies () {
        /* run axios request to get all movies for above array
         based on questionaire answers */
    }

    return (
        <div id='rouletteWheel'>
            <div id='wheel'>["Wheel" of movies will spin here]</div>
            <h2>[Movie Title]</h2>
            <h4>Available on:</h4>
            <h4>[Movie description]</h4>
            <h4>[Ratings here]</h4>
        </div>
    )
}

export default RouletteWheel