import React from 'react'
import { Model, Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css';
import { DefaultDark } from 'survey-core/themes/default-dark'
import axios from 'axios'

const questions = {
    'elements': [
        {
            'name': 'Streaming services',
            'title': 'Select all streaming services to search',
            'type': 'tagbox',
            'choices': [
                { 
                    'text': 'Netflix',
                    'value': 'netflix'
                },
                {
                    'text': 'Hulu',
                    'value': 'hulu.subscription'
                },
                {
                    'text': 'Prime Video',
                    'value': 'prime.subscription'
                },
                {
                    'text': 'Disney+',
                    'value': 'disney'
                },
                {
                    'text': 'HBO Max',
                    'value': 'hbo'
                },
                {
                    'text': 'Peacock',
                    'value': 'peacock.subscription'
                }
            ],
            'isRequired': true,
            'hideSelectedItems': true
        },
        {
            'name': 'Genre(s)',
            'title': 'Select movie genre',
            'type': 'tagbox',
            'choices': [ 
                {
                    'text': 'Action',
                    'value': '28'
                },
                {
                    'text': 'Adventure',
                    'value': '12'
                },
                {
                    'text': 'Animation',
                    'value': '16'
                },
                {
                    'text': 'Comedy',
                    'value': '35'
                },
                {
                    'text': 'Crime',
                    'value': '80'
                },
                {
                    'text': 'Drama',
                    'value': '18'
                },
                {
                    'text': 'Documentary',
                    'value': '99'
                },
                {
                    'text': 'Fantasy',
                    'value': '14'
                },
                {
                    'text': 'Family',
                    'value': '10751'
                },
                {
                    'text': 'Horror',
                    'value': '27'
                },
                {
                    'text': 'History',
                    'value': '36'
                },
                {
                    'text': 'Mystery',
                    'value': '9648'
                },
                {
                    'text': 'Music',
                    'value': '10402'
                },
                {
                    'text': 'Romance',
                    'value': '10749'
                },
                {
                    'text': 'Science Fiction',
                    'value': '878'
                },
                {
                    'text': 'Thriller',
                    'value': '53'
                },
                {
                    'text': 'War',
                    'value': '10752'
                },
                {
                    'text': 'Western',
                    'value': '37'
                }
                /*  
                    When TV shows are available, add the following options:
                    'News': '10763',
                    'Reality': '10764',
                    'Talk Show': '10767'
                */
            ],
            'isRequired': true,
            'hideSelectedItems': true
        }
    ],
    'showQuestionNumbers': false
}

function Questionaire (props) {
    const questionaire = new Model(questions)
    questionaire.applyTheme(DefaultDark)

    questionaire.onComplete.add((sender) => {
        const services = sender.data['Streaming services'].join(',')
        const genres = sender.data['Genre(s)'].join(',')

        axios.get(`/getMovies?services=${services}&genres=${genres}`)
        .then((response) => {
            console.log('Success!');
            //function from App through props to update movies list
            props.updateMoviesList(response.data)
        })
        .catch((err) => {
            throw new Error(err)
        })
    })

    return (<Survey model={questionaire} />)
}

export default Questionaire