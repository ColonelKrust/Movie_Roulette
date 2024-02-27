const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './images')));

/* get all movies that fit the questionaire criteria 
from streaming-availability-api */

app.get('/getMovies', (req, res) => {
    const inputServices = req.query.services;
    const inputCountry = req.query.country || 'us';
    const inputGenres = req.query.genres;
    let inputParams = {
        services: inputServices,
        country: inputCountry,
        output_language: 'en',
        genres: inputGenres,
        genres_relation: 'and',
        show_type: 'movie',
        order_by: 'popularity_1month',
        desc: true
    };

    if (req.query.cursor) {
        inputParams.cursor = req.query.cursor;
    }

    axios.get('https://streaming-availability.p.rapidapi.com/search/filters', {
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        },
        params: inputParams
    })
    .then((response) => {
        let movieList = response.data.result;
        
        res.status(200).send(movieList);
    })
    .catch((err) => {
        res.status(err.status).send(err);
    });

});

//get randomly selected movie poster art (next)
app.get('/moviePoster', (req, res) => {
    const movieId = req.query.movieId;

    //call to the configuration API of TMDB
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN
        }
    })
    .then((response) => {
        const movieURLandTitle = {
            title: response.data.title,
            url: response.data.poster_path
        };

        res.status(200).send(movieURLandTitle);
    })
    .catch((err) => {
        res.status(err.status).send(err);
    })
})


app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on port ${process.env.PORT}`);
});