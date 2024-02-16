const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));

/* get all movies that fit the questionaire criteria 
from streaming-availability-api */

app.get('/getMovies', (req, res) => {
    const inputServices = req.query.services;
    const inputCountry = req.query.country || 'us';
    const genreCodes = {
        'Adventure': '12',
        'Fantasy': '14',
        'Animation': '16',
        'Drama': '18',
        'Horror': '27',
        'Action': '28',
        'Comedy': '35',
        'History': '36',
        'Western': '37',
        'Thriller': '53',
        'Crime': '80',
        'Documentary': '99',
        'Science Fiction': '878',
        'Mystery': '9648',
        'Music': '10402',
        'Romance': '10749',
        'Family': '10751',
        'War': '10752',
        'News': '10763',
        'Reality': '10764',
        'Talk Show': '10767'
    }
    const inputGenres = genreCodes[req.query.genres];
    let inputParams = {
        services: inputServices,
        country: inputCountry,
        output_language: 'en',
        order_by: 'year',
        genres: inputGenres,
        genres_relation: 'and',
        show_type: 'movie'
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


app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on port ${process.env.PORT}`);
});