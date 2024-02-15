const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.json());

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
        order_by: 'year',
        genres: inputGenres,
        genres_relation: 'and',
        show_type: 'movie'
    };
    let movieList = [];

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
        movieList = response.result;
    })
    .catch((err) => {
        res.status(err.status).send(err);
    });

    res.status(200).send(movieList);
});

//get randomly selected movie poster art (next)


app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on port ${port}`);
});